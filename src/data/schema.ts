import { z } from 'astro/zod';

/**
 * Content schemas.
 *
 * Everything the site says is defined and validated here, so a typo like v1's
 * `"JavaSpring Boot"` — which shipped to users as a listed technology — fails the
 * build instead of the eye test.
 *
 * Note: these are plain typed modules rather than Astro content collections. The
 * content layer is built around file-based markdown; this site has none, only
 * structured data. Zod at module scope gives the same validation and types with
 * far less ceremony.
 */

/** Absolute http(s) URL. Avoids z.string().url(), which is deprecated. */
const httpUrl = z
  .string()
  .refine((value) => /^https?:\/\//.test(value), 'must be an absolute http(s) URL');

/** Anything that can be held back from production while it is still being written. */
const draftable = {
  /** Renders in `npm run dev`, excluded from `npm run build`. */
  draft: z.boolean().default(false),
};

/** One posting inside a rotational program. */
export const rotationSchema = z.object({
  title: z.string(),
  /**
   * Present in the design's data but not rendered by it — the rotation list shows
   * title and scope only. Kept so the detail isn't lost if it's wanted later.
   */
  dates: z.string().optional(),
  scope: z.string(),
});

export const roleSchema = z.object({
  dates: z.string(),
  title: z.string(),
  /** Optional: an aside like the freelance row carries no employer. */
  org: z.string().optional(),
  /** Renders the org as an underlined external link when present. */
  orgHref: httpUrl.optional(),
  /**
   * Opts the row into the employer's own colour on hover, which the cursor
   * picks up too. Only for orgs whose colour is in tokens.css, hence the enum:
   * a typo here should fail the build rather than silently do nothing.
   */
  brand: z.enum(['soilflo', 'scotiabank']).optional(),
  /**
   * The employer's own public description of itself. Shown in place of the
   * blurb when there isn't one, so the row is not empty.
   */
  orgNote: z.string().optional(),
  /** Decorative icons shown beside orgNote. Names come from Icon.astro. */
  orgIcons: z.array(z.enum(['hard-hat', 'traffic-cone', 'truck'])).default([]),
  /** Optional so a role can ship without one while the copy is being written. */
  blurb: z.string().optional(),
  /**
   * 'quiet' drops the title and blurb a step. The design uses it for the
   * freelance row so it reads as an aside rather than a fourth headline role.
   */
  emphasis: z.enum(['normal', 'quiet']).default('normal'),
  /** Nested postings, rendered as a ruled sub-list. Empty for most roles. */
  rotations: z.array(rotationSchema).default([]),
  /**
   * Work you can go and look at. Rendered as a quiet inline row, deliberately
   * not as chips: these are destinations, not labels.
   */
  links: z.array(z.object({ label: z.string(), href: httpUrl })).default([]),
  ...draftable,
});

/** The compact rows behind the "Everything else" toggle. */
export const earlierRoleSchema = z.object({
  dates: z.string(),
  title: z.string(),
  org: z.string(),
  ...draftable,
});

export const projectSchema = z.object({
  title: z.string(),
  kind: z.string(),
  blurb: z.string(),
  /** Shown instead of `blurb` on the mobile rail, where cards are 76vw wide. */
  blurbShort: z.string(),
  stack: z.string(),
  /**
   * An imported image, not a path — Astro needs the ImageMetadata to emit WebP
   * with srcset and intrinsic dimensions. v1 shipped 4.2 MB of raw PNG.
   */
  image: z.custom<ImageMetadata>((value) => typeof value === 'object' && value !== null, {
    message: 'image must be imported from src/assets, not a string path',
  }),
  /** Omit entirely rather than pointing at "#". A dead link is worse than none. */
  link: httpUrl.optional(),
  /** Whether `link` goes to a live site or to source — picks the CTA label. */
  linkKind: z.enum(['live', 'code']).default('code'),

  /* Layout contract, mirroring the design's 12-column bento. Each project owns
     its own span and proportions rather than the grid imposing them. */
  span: z.number().int().min(1).max(12),
  dir: z.enum(['row', 'column']).default('column'),
  imgH: z.string(),
  imgW: z.string(),
  /**
   * 'cover' fills the frame and crops, which is right for UI screenshots. Use
   * 'contain' for artwork that must not be cut, and pair it with imgBg so the
   * letterbox disappears into the image's own ground.
   */
  imgFit: z.enum(['cover', 'contain']).default('cover'),
  /**
   * The artwork's own background colour. This is a property of the image, not a
   * design token, which is why it lives with the content rather than in
   * tokens.css. Defaults to the dark image well.
   */
  imgBg: z.string().optional(),
  ...draftable,
});

export type Rotation = z.infer<typeof rotationSchema>;
export type Role = z.infer<typeof roleSchema>;
export type EarlierRole = z.infer<typeof earlierRoleSchema>;
export type Project = z.infer<typeof projectSchema>;

/**
 * Strip drafts in production, keep them in dev.
 *
 * This is what lets unfinished sections live in the repo without reaching
 * sanakhademi.com.
 */
export function published<T extends { draft: boolean }>(items: T[]): T[] {
  return import.meta.env.PROD ? items.filter((item) => !item.draft) : items;
}
