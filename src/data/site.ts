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
  // PLACEHOLDER: replace with the group's real Facebook group URL.
  facebookUrl: 'https://www.facebook.com/groups/example',
  facebookIsPlaceholder: true,
  // Default image shown when a page is shared on social media (1200×630).
  ogImage: '/og-image.png',
  ogImageAlt: 'The Lisburn Cathedral Scout Group compass badge',
  // PLACEHOLDER: where the group usually meets. Set `isPlaceholder: false`
  // once confirmed. The map link is built from the name and address.
  venue: {
    name: 'Meeting venue to be confirmed',
    address: ['Lisburn', 'County Antrim'],
    postcode: '',
    notes:
      'Each section has its own meeting night. Your section leader will confirm the details when you join.',
    isPlaceholder: true,
  },
  // PLACEHOLDER: charity registration (Charity Commission for Northern
  // Ireland). Leave `charityNumber` empty to hide it, or set the real number.
  charityNumber: 'NIC000000',
  charityNumberIsPlaceholder: true,
} as const;

const venueQuery = site.venue.isPlaceholder
  ? `${site.locality}, ${site.region}`
  : [site.venue.name, ...site.venue.address, site.venue.postcode]
      .filter(Boolean)
      .join(', ');

export const venueMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueQuery)}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/sections/', label: 'Sections' },
  { href: '/activities/', label: "What's on" },
  { href: '/recent/', label: 'Recent adventures' },
  { href: '/leaders/', label: 'Our leaders' },
  { href: '/faq/', label: 'FAQ' },
] as const;

// Extra pages linked from the footer.
export const infoNav = [
  { href: '/faq/', label: 'Parents’ FAQ' },
  { href: '/volunteer/', label: 'Volunteer with us' },
  { href: '/policies/', label: 'Safeguarding & privacy' },
] as const;
