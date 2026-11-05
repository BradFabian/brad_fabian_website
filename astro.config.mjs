// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Set PUBLIC_SITE_URL (e.g. https://bradfabian.com) once the production domain is confirmed.
  site: env.PUBLIC_SITE_URL || undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
