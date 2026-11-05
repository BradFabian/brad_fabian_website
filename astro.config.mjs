// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');

// Vercel sets VERCEL_ENV to "production", "preview", or "development" during builds.
const deployEnv = process.env.VERCEL_ENV ?? '';

// Production deployments use the confirmed domain; previews and local builds get no canonical URL.
const site = env.PUBLIC_SITE_URL || (deployEnv === 'production' ? 'https://bradfabian.com' : undefined);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.DEPLOY_ENV': JSON.stringify(deployEnv),
    },
  },
});
