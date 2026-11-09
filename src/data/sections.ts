/**
 * Display metadata for the five youth sections.
 * The source of truth for section content is the `sections` content
 * collection; this module only holds presentational helpers (colour token,
 * route helpers and ordering) shared across components.
 */

export type SectionKey =
  | 'squirrels'
  | 'beavers'
  | 'cubs'
  | 'scouts'
  | 'explorers';

export const SECTION_ORDER: SectionKey[] = [
  'squirrels',
  'beavers',
  'cubs',
  'scouts',
  'explorers',
];

export const sectionLabels: Record<SectionKey, string> = {
  squirrels: 'Squirrels',
  beavers: 'Beavers',
  cubs: 'Cubs',
  scouts: 'Scouts',
  explorers: 'Explorers',
};

/** CSS custom-property name holding each section's colour (see global.css). */
export const sectionColorVar: Record<SectionKey, string> = {
  squirrels: 'var(--squirrels)',
  beavers: 'var(--beavers)',
  cubs: 'var(--cubs)',
  scouts: 'var(--scouts)',
  explorers: 'var(--explorers)',
};

export function sectionHref(key: SectionKey): string {
  return `/sections/${key}/`;
}

export function sortSections<
  T extends { key?: SectionKey; data?: { key: SectionKey } },
>(items: T[]): T[] {
  const index = (k: SectionKey) => SECTION_ORDER.indexOf(k);
  return [...items].sort((a, b) => {
    const ka = (a.key ?? a.data?.key) as SectionKey;
    const kb = (b.key ?? b.data?.key) as SectionKey;
    return index(ka) - index(kb);
  });
}
