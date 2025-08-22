// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://milelabs.com.ar', // ⚠️ O tu dominio si usas CNAME
  base: '/', // ⚠️ Muy importante para rutas
  output: 'static', // ✅ Forzamos modo estático
  integrations: [mdx(), sitemap(), tailwind()],
});
