/**
 * Site-wide copy. Every word on the page that isn't a role or a project.
 * Sourced from Claude Design `Portfolio v1.dc.html`.
 */

/**
 * Copy that still needs writing.
 *
 * Renders in `npm run dev` so it is visible and easy to find, and resolves to
 * undefined in the production build so a placeholder can never reach the live
 * site. Replace the call with the real string when it is written.
 */
export const todo = (note: string): string | undefined =>
  import.meta.env.PROD ? undefined : `[${note}]`;

export const site = {
  name: 'Sana Khademi',
  wordmark: 'Sana Khademi',
  title: 'Sana Khademi — Product Manager',
  description:
    'Product manager in Toronto with an engineering background. I embed with the people doing the job, find the workaround they have built, and turn it into software.',
  location: 'Toronto, ON',
  email: 'sanakhademi13@gmail.com',
  linkedin: 'https://linkedin.com/in/sanakhademi',
} as const;

export const nav = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
] as const;

export const hero = {
  /* The headline renders one line per entry. The accent word and its orange
     period are appended to the final line — that punctuation is the only place
     --accent-punct is used anywhere in the site. */
  headline: ["I'm Sana.", 'A PM who', 'loves to'],
  headlineAccent: 'build',

  body: todo('Hero line'),

  now: {
    label: 'Now',
    body: 'Building tools that make earthworks less of a paperwork problem — with very cool, very smart people.',
  },

  profile: {
    alt: 'Sana Khademi',
    blurb:
      'Hi, that’s me! Usually somewhere between building something, a Barry’s class, and planning my next trip.',
    cta: 'Say hello',
  },
} as const;

export const about = {
  /**
   * Flip to true once the copy below is written. While false the section still
   * renders, showing `soon` in place of the lead and body.
   */
  ready: false,
  heading: 'About',
  soon: 'Still writing this one.',
  lead: '[About lead]',
  body: ['[About paragraph one]', '[About paragraph two]'],
} as const;

export const contact = {
  heading: "Let's talk about the messy part.",
  body: todo('Contact line'),
  emailLabel: 'Email',
  linkedinLabel: 'LinkedIn',
} as const;

export const footer = {
  copyright: `Sana Khademi © ${new Date().getFullYear()}`,
} as const;
