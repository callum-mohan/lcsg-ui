// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// NOTE: Replace `site` with the group's real custom domain once configured in
// Cloudflare Pages. It is used for the sitemap and social sharing metadata.
export default defineConfig({
  site: 'https://lisburn-cathedral-scouts.pages.dev',
  output: 'static',
  integrations: [sitemap()],
});
