# Content guide — editing the website

This guide is for volunteers who want to keep the website up to date. You don't
need to be a web developer. Everything here involves editing simple text files
in the `src/content/` folder.

## How it works

- Each piece of content (an activity, a story, a leader, a section) is a
  **Markdown file** (`.md`).
- The top of each file, between the two `---` lines, is called the
  **frontmatter**. It holds fields like the title and date.
- Below the second `---` is the main text, written in Markdown.
- When you save a file and the site is rebuilt, the new content appears
  automatically. There is no separate admin system to log into.

> **Tip:** run `npm run check` after editing. It validates your files and points
> to any mistakes (for example a missing date or a misspelled section name).

### Section names

Wherever a `sections:` field appears, use one or more of these exact keys:

```
squirrels   beavers   cubs   scouts   explorers
```

### Placeholder & sample content

Content currently marked as placeholder/sample is **fictional** and must be
replaced before launch:

- Activities and stories have `sample: true` in their frontmatter.
- Leaders have `placeholder: true`.
- Sections have `ageConfirmed: false` and `meetingConfirmed: false`.

When you replace the fictional content with real, confirmed information, set
these flags appropriately (`sample: false`, `placeholder: false`,
`ageConfirmed: true`, `meetingConfirmed: true`). This removes the on-screen
"Placeholder" / "Sample" labels.

### Adding photos

1. Put the image file in `src/assets/images/` (JP/PNG/WebP are all fine).
2. Reference it from the content file's frontmatter, e.g. `image: ../../assets/images/camp.jpg`.
   (The path is relative to the Markdown file.)
3. Always add matching alt text, e.g. `imageAlt: "Scouts pitching a tent at camp"`.

Astro automatically resizes and optimises images for you. If you leave an image
out, a tidy "photo to follow" placeholder is shown instead — nothing breaks.

**Please only publish photos of young people with appropriate consent.**

---

## Add an upcoming activity

1. Create a new file in `src/content/activities/`, e.g. `spring-camp.md`.
2. Use this template:

```markdown
---
title: "Spring camp"
date: 2026-04-18            # yyyy-mm-dd
time: "Saturday 10:00 – Sunday 14:00"   # optional
description: >
  A short description of the activity.
sections: [cubs, scouts]   # one or more section keys
location: "Campsite name"  # optional
info: "Kit list to follow" # optional extra note
# image: ../../assets/images/spring-camp.jpg   # optional
# imageAlt: "Describe the photo"
sample: false              # false = real event
---

Optional longer text about the activity goes here.
```

Activities with a date in the past automatically drop off the "What's on" page.

## Publish a recent activity story

1. Create a new file in `src/content/recent/`, e.g. `district-sports.md`.
2. Use this template:

```markdown
---
title: "District sports day"
date: 2026-05-10
summary: >
  One or two sentences summarising the day.
sections: [beavers, cubs]
# image: ../../assets/images/sports-day.jpg
# imageAlt: "Describe the photo"
# link: https://example.org/album        # optional external link
sample: false
---

Write the full story here in Markdown. You can use **bold**, _italics_,
lists and [links](https://example.org).
```

The newest story (by date) is automatically featured at the top of the
Recent adventures page, and each story gets its own page.

## Update a leader

Leader profiles live in `src/content/leaders/`. Edit an existing file or add a
new one:

```markdown
---
name: "Full name"
role: "Section Leader"
sections: [cubs]           # sections they help with (optional)
order: 3                   # controls the display order (lower = earlier)
# photo: ../../assets/images/leader-name.jpg
# photoAlt: "Describe the photo"
placeholder: false         # false once this is a real, approved profile
---

A short, friendly introduction to this volunteer.
```

**Do not publish personal contact details** (phone numbers, personal emails) in
leader profiles. All enquiries are directed to the group's single email address.

## Edit a youth section

Each section has one file in `src/content/sections/` (`squirrels.md`,
`beavers.md`, `cubs.md`, `scouts.md`, `explorers.md`). Key fields:

```markdown
---
key: cubs                  # don't change this
name: Cubs
order: 3                   # position in the list of sections
tagline: "Short strapline"
ageRange: "Around 8–10½ years"
ageConfirmed: true         # true once confirmed by the group
intro: >
  Short introduction shown on the homepage and section page.
activities:
  - First activity
  - Second activity
meetingInfo: "Mondays, 6:30–8:00pm, Scout hall"
meetingConfirmed: true     # true once confirmed
# heroImage: ../../assets/images/cubs-hero.jpg
# heroImageAlt: "Describe the photo"
cta: "Ask about joining Cubs"
---

Longer description of the section in Markdown.
```

## Change the group email, name or navigation

These live in `src/data/site.ts`:

- `name`, `shortName`, `strapline`, `description` — group identity and SEO text.
- `email` — the single enquiry address used across the site and footer. Set
  `emailIsPlaceholder: false` once it's the real address.
- `nav` — the main navigation links.

## Checklist before launch

- [ ] Higher-resolution (ideally SVG) logo swapped in at `src/assets/brand/lcsg-logo.png`,
      and favicons regenerated (`public/favicon.ico`, `public/favicon.png`, `public/apple-touch-icon.png`).
- [ ] Section colours checked against current Scouts brand guidelines (`src/styles/global.css`).
- [ ] Real enquiry email set and `emailIsPlaceholder: false` (`src/data/site.ts`).
- [ ] Real domain set in `astro.config.mjs` and `public/robots.txt`.
- [ ] All section ages confirmed (`ageConfirmed: true`) and meeting info added.
- [ ] Sample activities/stories replaced (`sample: false`).
- [ ] Leader profiles approved (`placeholder: false`), no personal contact details.
- [ ] Photos added with consent and alt text.
- [ ] `npm run validate` passes (formatting, lint, type-check and build).
