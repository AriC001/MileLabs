// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Set `site` and `base`. For a custom domain we serve from the root path.
  site: 'https://milelabs.com.ar',
  base: '/',
  integrations: [mdx(), sitemap(), tailwind()],
});