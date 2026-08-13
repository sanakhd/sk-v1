import { z } from 'astro/zod';
import { projectSchema, type Project } from './schema';

import lifecurriculum from '../assets/lifecurriculum.png';
import spotify from '../assets/spotify.png';
import tiptrendz from '../assets/tiptrendz.png';
import portfolio from '../assets/sk_v2.png';

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
    title: 'LifeCurriculum',
    kind: 'Side project · Web app',
    blurb:
      "Turns any topic into a two-host conversation you can actually fit into a day. Sessions run two to three minutes, build into progressive five-day programs, and adapt to whether you're at home, working out, or driving.",
    stack: 'FastAPI · React · TypeScript · GPT-4',
    image: lifecurriculum,
    link: 'https://github.com/sanakhd/LifeCurriculumMVP',
    linkKind: 'code',
    span: 12,
    dir: 'row',
    imgH: '300px',
    imgW: '46%',
    // A title card, not a UI screenshot: cropping it eats the wordmark.
    imgFit: 'contain',
    imgBg: '#ff4a0a',
  },
  {
    title: 'SANA® v2',
    kind: 'Portfolio · This site',
    blurb:
      "The site you're on. Rebuilt from scratch after the first version turned into a few thousand lines of CSS nobody could safely touch. Designed first, then translated into a token layer so every colour, size and space in the code traces back to the design.",
    stack: 'Astro · TypeScript',
    image: portfolio,
    link: 'https://github.com/sanakhd/sk-v1',
    linkKind: 'code',
    span: 4,
    imgH: '240px',
    imgW: '100%',
  },
  {
    title: 'Insights',
    kind: 'Side project · Web app',
    blurb:
      "Turns your Spotify listening history into something you'd actually want to look at — top artists, tracks, and the audio characteristics behind your taste. Built it because the yearly recap wasn't enough.",
    stack: 'React · Express · Spotify API',
    image: spotify,
    span: 4,
    imgH: '240px',
    imgW: '100%',
  },
  {
    title: 'TipTrendz',
    kind: 'Side project · Web app',
    blurb:
      'Income tracking for service workers, whose pay is variable enough that most budgeting tools are useless to them. Dashboards that make an unpredictable month legible.',
    stack: 'Spring Boot · React · Postgres',
    image: tiptrendz,
    span: 4,
    imgH: '240px',
    imgW: '100%',
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
