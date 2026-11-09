/** Shared formatting helpers. */

const longDate = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const shortDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export function formatDate(
  date: Date,
  style: 'long' | 'short' = 'long',
): string {
  return (style === 'long' ? longDate : shortDate).format(date);
}

/** ISO date (yyyy-mm-dd) for <time datetime="..."> attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Pulls the numeric span out of a free-text age range,
 * e.g. "Around 10½–14 years (to be confirmed)" -> "10½–14".
 */
export function ageSpan(ageRange: string): string | undefined {
  const match = ageRange.match(/(\d+½?)\s*[–-]\s*(\d+½?)/);
  return match ? `${match[1]}–${match[2]}` : undefined;
}
