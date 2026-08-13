import { z } from 'astro/zod';
import { projectSchema, type Project } from './schema';

import spotify from '../assets/spotify.png';
import tiptrendz from '../assets/tiptrendz.png';
import offerup from '../assets/offerup.png';

/**
 * The 12-column bento from the design. Each project carries its own span and
 * proportions, so the grid follows the content rather than the content being
 * poured into a fixed grid.
 *
 * Links: the design ships `link: "#"` for TipTrendz and a Heroku URL for Insights
 * that now returns 503 (free dynos were retired in 2022). Neither has a public
 * repo, so both go out link-less rather than pointing somewhere broken. Add
 * `link` + `linkKind` to either as soon as there's somewhere real to send people.
 */
export const projects: Project[] = z.array(projectSchema).parse([
  {
    title: 'Insights',
    kind: 'Side project · Web app',
    blurb:
      "Turns your Spotify listening history into something you'd actually want to look at — top artists, tracks, and the audio characteristics behind your taste. Built it because the yearly recap wasn't enough.",
    stack: 'React · Express · Spotify API',
    image: spotify,
    span: 12,
    dir: 'row',
    imgH: '300px',
    imgW: '46%',
  },
  {
    title: 'TipTrendz',
    kind: 'Side project · Web app',
    blurb:
      'Income tracking for service workers, whose pay is variable enough that most budgeting tools are useless to them. Dashboards that make an unpredictable month legible.',
    stack: 'Spring Boot · React · Postgres',
    image: tiptrendz,
    span: 4,
    imgH: '200px',
    imgW: '100%',
  },
  {
    /**
     * Fills the design's third slot, which already used this screenshot. The
     * placeholder copy there asked for "a piece of PM work" — swap this out when
     * there's one to tell, but a real project with a working link beats an empty
     * slot in the meantime.
     */
    title: 'Offer Up!',
    kind: 'Side project · Web app',
    blurb:
      'An auction marketplace with both forward and Dutch formats — browse, bid, and check out, with bidding that updates as it happens.',
    stack: 'Spring Boot · MongoDB · Docker',
    image: offerup,
    link: 'https://github.com/sanakhd/OfferUp',
    linkKind: 'code',
    span: 8,
    imgH: '260px',
    imgW: '100%',
  },
  {
    title: 'Project four',
    kind: 'Placeholder',
    blurb:
      'Another slot. Two to three sentences is plenty — what was broken, what you shipped, what it moved.',
    stack: 'Add stack or metrics',
    image: spotify,
    span: 7,
    imgH: '240px',
    imgW: '100%',
    draft: true,
  },
  {
    title: 'Project five',
    kind: 'Placeholder',
    blurb: 'Last slot. Good place for something scrappy or personal.',
    stack: 'Add stack or metrics',
    image: tiptrendz,
    span: 5,
    imgH: '240px',
    imgW: '100%',
    draft: true,
  },
]);

/**
 * Widen the last card so the bento never ends with a hole.
 *
 * Spans are authored to tile perfectly, but drafts are stripped in production —
 * so any row can be left short. Rather than making every draft toggle a manual
 * re-tiling job, the final card absorbs whatever is left of its row.
 */
export function tile(items: Project[]): Project[] {
  if (items.length === 0) return items;

  const used = items.reduce((sum, p) => sum + p.span, 0) % 12;
  if (used === 0) return items;

  const last = items[items.length - 1];
  return [...items.slice(0, -1), { ...last, span: last.span + (12 - used) }];
}
