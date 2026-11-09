/**
 * Site-wide configuration and shared copy.
 * Volunteers can edit the group name, strapline, contact email and navigation
 * here without touching page templates.
 */

export const site = {
  name: 'Lisburn Cathedral Scout Group',
  shortName: 'Lisburn Cathedral Scouts',
  // Location is factual and public; used for local SEO.
  locality: 'Lisburn',
  region: 'Northern Ireland',
  strapline: 'Adventure, friendship and the outdoors in the heart of Lisburn',
  description:
    'Lisburn Cathedral Scout Group offers Squirrels, Beavers, Cubs, Scouts and Explorers in Lisburn, Northern Ireland — outdoor adventure, friendship and skills for young people aged 4 to 18.',
  // PLACEHOLDER: replace with the group's real enquiry email address.
  email: 'hello@example.org',
  emailIsPlaceholder: true,
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/sections/', label: 'Sections' },
  { href: '/activities/', label: "What's on" },
  { href: '/recent/', label: 'Recent adventures' },
  { href: '/leaders/', label: 'Our leaders' },
] as const;
