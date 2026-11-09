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
src/content/     Volunteer-editable Markdown (sections, activities, recent, leaders, faq)
src/content.config.ts  Content schemas / validation
src/data/        Site name, contact details, venue, navigation
src/components/  Reusable UI pieces
src/layouts/     Page shell
src/pages/       Routes
src/styles/      Design tokens and global styles (global.css)
public/          Static files (favicon, social share image, robots.txt)
```

## Before you go live

1. Swap in a higher-resolution logo at `src/assets/brand/lcsg-logo.png` and regenerate the favicons and social share image (`og-image.png`, 1200×630) in `public/`. Colours and fonts are design tokens in `src/styles/global.css`.
2. Set the real enquiry email, Facebook link, meeting venue and charity number in `src/data/site.ts` (and turn off their placeholder flags).
3. Replace every placeholder/sample entry (see the content guide).

## Deployment — GitHub Pages

The site is published to <https://lisburncathedralscouts.co.uk> by
`.github/workflows/deploy.yml` on every push to `main` (or manually via
**Actions → Deploy to GitHub Pages → Run workflow**).

- Repository **Settings → Pages → Build and deployment → Source** must be
  **GitHub Actions**.
- The custom domain is set in **Settings → Pages → Custom domain** and in
  `public/CNAME`. If the domain changes, update both, plus `site` in
  `astro.config.mjs` and the sitemap URL in `public/robots.txt`.
- DNS for the domain (at the registrar):
  - Apex `lisburncathedralscouts.co.uk`: `A` records to `185.199.108.153`,
    `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (optionally
    `AAAA` records to `2606:50c0:8000::153`, `2606:50c0:8001::153`,
    `2606:50c0:8002::153`, `2606:50c0:8003::153`).
  - `www`: `CNAME` to `callum-mohan.github.io`.
- Once the DNS check passes, tick **Enforce HTTPS** in the Pages settings.
