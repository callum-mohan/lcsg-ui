# Lisburn Cathedral Scout Group — website

A fast, accessible, fully static website built with [Astro](https://astro.build/).
No database, server or login. Content is edited as simple Markdown files.

> Much of the current content is **placeholder / sample content**. Search the
> site for "Placeholder" and see [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md).

## Requirements

Node.js 22.12 or newer.

## Commands

```sh
npm install        # first time only
npm run dev        # dev server at http://localhost:4321
npm run build      # build the static site into ./dist
npm run preview    # serve ./dist locally
npm run check      # type-check and validate content
npm run lint       # lint with Biome
npm run format     # format with Biome
npm run biome:fix  # apply all safe Biome fixes (format, lint, import order)
npm run validate   # everything CI runs: Biome, astro check and build
```

## Code quality

- [Biome](https://biomejs.dev/) formats and lints `.ts`, `.mjs`, `.astro`,
  `.css` and `.json` files (config in `biome.json`). Markdown content is not
  formatted by Biome.
- [Husky](https://typicode.github.io/husky/) git hooks are installed by
  `npm install`:
  - **pre-commit** runs Biome on staged files and blocks the commit if anything
    needs fixing (run `npm run biome:fix`, re-stage, commit again).
  - **pre-push** runs `npm run validate`.
- GitHub Actions (`.github/workflows/ci.yml`) runs the same checks on every
  pull request and push to `main`.

## Structure

```text
src/content/     Volunteer-editable Markdown (sections, activities, recent, leaders)
src/content.config.ts  Content schemas / validation
src/data/        Site name, contact email, navigation
src/components/  Reusable UI pieces
src/layouts/     Page shell
src/pages/       Routes
src/styles/      Design tokens and global styles (global.css)
public/          Static files (favicon, robots.txt)
```

## Before you go live

1. Swap in a higher-resolution logo at `src/assets/brand/lcsg-logo.png` and regenerate the favicons in `public/`. Colours and fonts are design tokens in `src/styles/global.css`.
2. Set the real enquiry email in `src/data/site.ts` (and `emailIsPlaceholder: false`).
3. Set your real domain as `site` in `astro.config.mjs` and in `public/robots.txt`.
4. Replace every placeholder/sample entry (see the content guide).

## Deployment — Cloudflare Pages

Connect the Git repository in **Workers & Pages → Create → Pages → Connect to Git**:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `NODE_VERSION` = `22`

Or deploy directly: `npm run build && npx wrangler pages deploy dist`.
Add the custom domain under **Custom domains**; HTTPS is automatic.
