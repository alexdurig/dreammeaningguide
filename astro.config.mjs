import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dreammeaningguide.site',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/journal') &&
        !page.includes('/404'),
    }),
  ],

  output: 'static',
});


