// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// `site` is the custom domain served by GitHub Pages (see public/CNAME). It is
// used for canonical URLs, the sitemap and social sharing metadata.
export default defineConfig({
  site: 'https://lisburncathedralscouts.co.uk',
  output: 'static',
  integrations: [sitemap()],
});
