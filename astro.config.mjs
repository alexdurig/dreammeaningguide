import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dreammeaningguide.site',
  integrations: [sitemap()],
  output: 'static',
});
