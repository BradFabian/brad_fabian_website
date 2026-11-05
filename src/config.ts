/**
 * Site-wide settings. Verified public launch inputs have defaults here; any PUBLIC_* environment
 * variable (see .env.example) overrides them without a code change.
 */
const env = import.meta.env;

const clean = (value: string | undefined) => (value ?? '').trim();

/** Verified by Brad, Nov 5 2026. */
const defaults = {
  bookingUrl: 'https://calendly.com/brad-bradfabian/30min',
  contactEmail: 'brad@bradfabian.com',
};

const bookingUrl = clean(env.PUBLIC_BOOKING_URL) || defaults.bookingUrl;
const contactEmail = clean(env.PUBLIC_CONTACT_EMAIL) || defaults.contactEmail;

/** Vercel preview and development deployments are never indexable, whatever the flag says. */
const isPreviewDeploy = env.DEPLOY_ENV === 'preview' || env.DEPLOY_ENV === 'development';

export const site = {
  name: 'Brad Fabian',
  title: 'Brad Fabian | E-commerce Strategy & Shopify, BigCommerce Development',
  description:
    'Brad Fabian helps retailers build faster, more profitable e-commerce sites, bringing commerce strategy and hands-on Shopify and BigCommerce expertise from deciding what to fix to getting it done.',
  location: 'Miami, FL',
  /** Production origin from astro.config (`site`), e.g. https://bradfabian.com. Empty for previews. */
  url: clean(env.SITE),
  bookingUrl,
  contactEmail,
  /** Search indexing is opt-in (PUBLIC_ALLOW_INDEXING=true) so staging and previews stay out of search results. */
  allowIndexing: clean(env.PUBLIC_ALLOW_INDEXING) === 'true' && !isPreviewDeploy,
  /** The sample calendar only appears for local review (or an explicit staging opt-in), never alongside a real booking URL. */
  showBookingPreview:
    !bookingUrl && (env.DEV || clean(env.PUBLIC_SHOW_BOOKING_PREVIEW) === 'true'),
} as const;
