/**
 * Site-wide settings. Launch inputs come from PUBLIC_* environment variables
 * (see .env.example) so nothing unverified is hard-coded into the page.
 */
const env = import.meta.env;

const clean = (value: string | undefined) => (value ?? '').trim();

const bookingUrl = clean(env.PUBLIC_BOOKING_URL);
const contactEmail = clean(env.PUBLIC_CONTACT_EMAIL);

export const site = {
  name: 'Brad Fabian',
  title: 'Brad Fabian | E-commerce Strategy & Shopify, BigCommerce Development',
  description:
    'Brad Fabian helps retailers build faster, more profitable e-commerce sites, bringing commerce strategy and hands-on Shopify and BigCommerce expertise from deciding what to fix to getting it done.',
  location: 'Miami, FL',
  url: clean(env.PUBLIC_SITE_URL),
  bookingUrl,
  contactEmail,
  /** Search indexing is opt-in so staging and previews stay out of search results. */
  allowIndexing: clean(env.PUBLIC_ALLOW_INDEXING) === 'true',
  /** The sample calendar only appears for local review (or an explicit staging opt-in), never alongside a real booking URL. */
  showBookingPreview:
    !bookingUrl && (env.DEV || clean(env.PUBLIC_SHOW_BOOKING_PREVIEW) === 'true'),
} as const;
