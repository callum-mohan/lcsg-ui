import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

/**
 * Content collections for the Lisburn Cathedral Scout Group website.
 *
 * Volunteers edit the Markdown files inside `src/content/<collection>/`.
 * The Zod schemas below validate each file at build time, so a mistake
 * (missing date, unknown section, etc.) is caught early with a clear error.
 *
 * See `docs/CONTENT-GUIDE.md` for step-by-step editing instructions.
 */

// The five youth sections. Used across activities, recent stories and leaders.
const SECTION_KEYS = [
  'squirrels',
  'beavers',
  'cubs',
  'scouts',
  'explorers',
] as const;
const sectionKey = z.enum(SECTION_KEYS);

// Section landing pages (one Markdown file per youth section).
const sections = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sections' }),
  schema: ({ image }) =>
    z.object({
      key: sectionKey,
      name: z.string(),
      order: z.number(),
      tagline: z.string(),
      // Age range is deliberately a string so it can read "Placeholder — to be confirmed".
      ageRange: z.string(),
      // Flip to true only once the real age range has been confirmed.
      ageConfirmed: z.boolean().default(false),
      intro: z.string(),
      activities: z.array(z.string()).default([]),
      // Meeting day/time/venue — keep as placeholder until confirmed by the group.
      meetingInfo: z.string().optional(),
      meetingConfirmed: z.boolean().default(false),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      cta: z.string().default('Ask about joining'),
    }),
});

// Upcoming activities / events.
const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      time: z.string().optional(),
      description: z.string(),
      sections: z.array(sectionKey).default([]),
      location: z.string().optional(),
      info: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      // Marks clearly-fictional sample content. Remove when adding real entries.
      sample: z.boolean().default(false),
    }),
});

// Recent activity stories (editorial write-ups of what the group has done).
const recent = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recent' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      sections: z.array(sectionKey).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      link: z.url().optional(),
      sample: z.boolean().default(false),
    }),
});

// Leadership team profiles.
const leaders = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leaders' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      sections: z.array(sectionKey).default([]),
      order: z.number().default(99),
      photo: image().optional(),
      photoAlt: z.string().optional(),
      // Leader names/photos are placeholders until approved. Flip to false when real.
      placeholder: z.boolean().default(true),
    }),
});

// Frequently asked questions for parents and carers (one file per question).
const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    order: z.number().default(99),
    // Group-specific answers stay flagged until confirmed by the group.
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { sections, activities, recent, leaders, faq };
export { SECTION_KEYS };
