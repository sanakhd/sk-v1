# sk-portfolio — project instructions

Personal portfolio for Sana Khademi. Astro + TypeScript, static output, deployed
to Netlify at sanakhademi.com.

`CLAUDE.md` is a symlink to this file.

## Source of truth

The design lives in **Claude Design**, project `3d72336b-b0ec-47ae-82ab-a2e7d7305bbb`,
file `Portfolio v1.dc.html`. Read it with the `DesignSync` tool (`get_file`) before
changing anything visual. The design is still evolving — re-read it rather than
trusting this file's summary when the two disagree.

Its sibling files `Portfolio Redesign.dc.html` (superseded exploration) and
`Current Site.dc.html` (the old v1 site) are **not** canonical. Ignore them.

## Hard rules

1. **No hardcoded design values.** Every color, size, radius, and spacing step comes
   from `src/styles/tokens.css`. If a value isn't there, add it there first. The v1
   site had 45 loose hex literals and `font-family` declared 20 times; that is the
   specific failure this rule exists to prevent.
2. **No content in markup.** All copy lives in typed content collections under
   `src/content/`. Editing a sentence must never mean editing a component.
3. **Styles are scoped.** Use Astro's component `<style>` blocks. Global CSS is
   limited to `tokens.css` and `global.css`. v1 had `.cta-button` defined in three
   files where the winner depended on CSS import order — never again.
4. **No dependency without a use.** v1 shipped 8 unused libraries (MUI, rsuite,
   styled-components, react-router, two typewriter libs). Add a package at the
   moment it is used, not before.
5. **Motion is minimal and always guarded** by `prefers-reduced-motion`.

## Design tokens

Defined on `:root` in `src/styles/tokens.css`.

**Color** — paper `#f2f0ea`, paper-raised `#e6e3db`, ink `#14150f`, ink-surface
`#1d1e16` (hover `#23241b`), ink-well `#2a2b22`, accent `oklch(0.78 0.14 128)`
(lime, locked), accent-punct `#e2622a` (the hero period only).
Text on paper: `#14150f` / `#33342c` / `#4a4a42` / `#6a6a60`.
Text on ink: `#f2f0ea` / `#b9b8b0` / `#a8a99f` / `#8a8b80` / `#6f7066`.
Lines are all `rgb(20 21 15 / α)` at `.03 .07 .1 .14 .16 .18 .2 .25 .35`.

**Responsive** — the design collapses every multi-column layout at a single
**900px** breakpoint and otherwise relies on `clamp()`. Those clamps are copied
verbatim into `tokens.css`; do not re-derive them.

**Type** — two families, and the tension between them is the brand.
`Archivo` for everything; display is weight 900, uppercase, tight negative
tracking (`-0.05` → `-0.01em`). `JetBrains Mono` for eyebrows and meta only:
uppercase, wide positive tracking (`+0.08` → `+0.18em`). Never use mono for body
copy, never use Archivo for an eyebrow.
Scale: `104 / 92 / 64` display · `32 / 30` heading · `26 / 22` lead ·
`20 / 18 / 17 / 16 / 15` body · `13 / 12 / 11` meta.

**Shape** — exactly three radii: pill `999px`, slab `40px` (inset full-bleed
sections), card `28px`. Do not invent a fourth.

**Space** — 4px grid. Page gutter `24px`, card gap `20px`.

No dark mode. The alternate accents in the design (`#3b3bef`, `#e2622a`,
`#d9a441`) are kept commented in `tokens.css` but not shipped.

**Employer colours are the one exception to "lime is the only accent."** Hovering
an employer row tints the org name and the cursor in that employer's own colour.
Each brand has two tokens: the true hex for the cursor disc, which is decorative
and has no contrast obligation, and a darkened partner for the org name, which is
17px and needs 4.5:1 on paper. The true hexes do not clear that bar (SoilFLO's is
2.66:1), so **never put a `--brand-*` value on text** — use its `-text` partner.

## Cursor

`src/components/Cursor.astro` is about 1.1 kB minified. Like the nav toggle and
the rotations collapse, it is inlined into the page rather than fetched, so the
site still makes zero JavaScript requests. It removes itself unless the pointer
is fine and `prefers-reduced-motion` is not set.

It hides the native cursor. That is a deliberate, known cost: no I-beam over text
and no resize affordances. It is the price of the inverting disc and was chosen
with that in mind, so do not "fix" it by re-showing the native cursor.

Two companion rules live in the components they affect, not here: `Projects.astro`
hides the card CTA and `Experience.astro` drops the org underline. Both are gated
on the same three media queries the script checks. **If you change the gate,
change all three places**, or a touch visitor loses the only affordance telling
them a card is tappable.

## Content and drafts

Content collections are Zod-validated. Every entry supports `draft: true`, which
renders in `npm run dev` but is **excluded from the production build**. This is how
unfinished sections live in the repo without reaching the live site.

Currently draft: the empty project slots. Every role in `roles.ts` is written and
shipping, including Scotiabank.

**Never ship a dead link.** Projects that aren't hosted link to their GitHub repo
and label the action `Code ↗` rather than `View ↗`. Projects with neither ship
link-less.

## Working cadence

One phase, or one section, at a time — build it, hand it back for review, and wait.
If a decision comes up that the plan doesn't settle (a responsive breakdown that
isn't obvious, copy that needs writing, a token that has to be invented), ask
rather than picking one and moving on.
