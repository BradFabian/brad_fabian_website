interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_BOOKING_URL?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_ALLOW_INDEXING?: string;
  readonly PUBLIC_SHOW_BOOKING_PREVIEW?: string;
  /** VERCEL_ENV at build time: "production", "preview", "development", or "" outside Vercel. */
  readonly DEPLOY_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
