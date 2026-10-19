// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served by GitHub Pages as a project site: https://alvarofalcon.github.io/devlogs/
export default defineConfig({
  site: 'https://alvarofalcon.github.io',
  base: '/devlogs',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
