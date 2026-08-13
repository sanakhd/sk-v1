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

/** Anything that can be held back from production while it is still being written. */
const draftable = {
  /** Renders in `npm run dev`, excluded from `npm run build`. */
  draft: z.boolean().default(false),
};

export const roleSchema = z.object({
  dates: z.string(),
  title: z.string(),
  org: z.string(),
  blurb: z.string(),
  tags: z.array(z.string()).min(1),
  ...draftable,
});

export const projectSchema = z.object({
  title: z.string(),
  kind: z.string(),
  blurb: z.string(),
  stack: z.string(),
  image: z.string(),
  /** Omit entirely rather than pointing at "#". A dead link is worse than none. */
  link: z.string().url().optional(),
  /** Whether `link` goes to a live site or to source — picks the CTA label. */
  linkKind: z.enum(['live', 'code']).default('code'),

  /* Layout contract, mirroring the design's 12-column bento. Each project owns
     its own span and proportions rather than the grid imposing them. */
  span: z.number().int().min(1).max(12),
  dir: z.enum(['row', 'column']).default('column'),
  imgH: z.string(),
  imgW: z.string(),
  ...draftable,
});

export type Role = z.infer<typeof roleSchema>;
export type Project = z.infer<typeof projectSchema>;

/**
 * Strip drafts in production, keep them in dev.
 *
 * This is what lets unfinished sections — the Scotiabank role Sana is still
 * designing, the empty project slots — live in the repo without reaching
 * sanakhademi.com.
 */
export function published<T extends { draft: boolean }>(items: T[]): T[] {
  return import.meta.env.PROD ? items.filter((item) => !item.draft) : items;
}
