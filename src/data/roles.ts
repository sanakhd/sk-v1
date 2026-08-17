import { z } from 'astro/zod';
import { roleSchema, earlierRoleSchema, type Role, type EarlierRole } from './schema';

/**
 * Work history, from Claude Design `Portfolio v1.dc.html`.
 * All entries are written — nothing here is draft.
 */
export const roles: Role[] = z.array(roleSchema).parse([
  {
    dates: '2025 — Now',
    title: 'Product Manager',
    org: 'SoilFLO',
    orgHref: 'https://soilflo.com/',
    orgNote: 'Material tracking software for construction and environmental teams',
    blurb:
      'Own product for a platform used by the people moving material on and off construction sites. Spend real time with dispatchers, site crews and ops teams, then ship against what I saw rather than what was requested.',
  },
  {
    dates: 'Ongoing',
    title: 'building websites',
    blurb:
      'Started building sites for friends as a way to design and ship something start to finish. Two live, and counting.',
    emphasis: 'quiet',
    links: [
      { label: 'Aironto', href: 'https://aironto.com/' },
      { label: 'Luuna the Label', href: 'https://www.luunathelabel.com/' },
    ],
  },
  {
    dates: '2024 — 2026',
    title: 'Ignition Associate',
    org: 'Scotiabank',
    blurb:
      'A ten-person technology rotational program. Three six-month rotations took me from engineering to product, across capital markets and cloud security.',
    rotations: [
      {
        title: 'Associate Technical Product Manager',
        dates: 'Jul — Dec 2025',
        scope:
          'CNAPP cloud security. Led technical product initiatives and roadmap work with Google Cloud.',
      },
      {
        title: 'Associate Product Manager',
        dates: 'Jan — Jun 2025',
        scope:
          'Global Banking & Markets, equity and derivatives. Shipped features across cross-asset quoting platforms.',
      },
      {
        title: 'Associate Software Engineer',
        dates: 'Jun 2024 — Jan 2025',
        scope:
          'Commodities, FX options and derivatives tech. Backend systems for FX trading, plus internal tooling that automated QA workflows.',
      },
    ],
  },
]);

/** Behind the "Everything else" toggle. */
export const earlierRoles: EarlierRole[] = z.array(earlierRoleSchema).parse([
  { dates: 'Sep — Dec 2023', title: 'DevOps Engineer, Intern', org: 'Tangerine' },
  { dates: 'May — Aug 2023', title: 'Software Engineer, Intern', org: 'Scotiabank' },
  { dates: 'Too long', title: 'Server', org: 'Where the TipTrendz idea came from' },
  {
    dates: 'Before that',
    title: 'Gymnastics Coach',
    org: 'Taught kids to fall well and try again',
  },
]);
