/**
 * Site-wide Amazon Associates configuration — single source of truth.
 *
 * Every amazon.com link on the site must go through `buildAmazonLink()`.
 * Do not hardcode `tag=` anywhere in components or markup.
 */

/** Amazon Associates tracking ID. Commission is credited on this value. */
export const ASSOCIATE_TAG = 'rjkey-20';

/** APOWUS brand storefront on Amazon — default buy destination. */
export const AMAZON_STORE_PAGE =
  'https://www.amazon.com/stores/page/678859B2-A702-4A67-ADDA-027D748AD63E';

const ASIN_PATTERN = /^B0[A-Z0-9]{8}$/i;

export interface AmazonLinkOptions {
  /** SiteStripe linkId for per-placement reporting in Associates Central. */
  linkId?: string;
  /** `sl1` for product links, `ll2` for storefront pages. */
  linkCode?: 'sl1' | 'll2';
}

/**
 * Build a tagged Amazon URL from an ASIN or a full Amazon URL.
 *
 * This site links to products from several independent manufacturers, so —
 * unlike a single-brand storefront — there is no sensible "default" to fall
 * back to. Every call site must name a real ASIN.
 *
 * @param asinOrUrl - ASIN (e.g. `B0BTTF5RFJ`) or a full `https://www.amazon.com/...` URL.
 */
export function buildAmazonLink(asinOrUrl: string, options: AmazonLinkOptions = {}): string {
  const base = resolveAmazonBase(asinOrUrl);

  const params = new URLSearchParams({
    linkCode: options.linkCode ?? 'sl1',
    tag: ASSOCIATE_TAG,
    language: 'en_US',
    ref_: 'as_li_ss_tl',
  });

  if (options.linkId) params.set('linkId', options.linkId);
  if (ASIN_PATTERN.test(asinOrUrl)) params.set('th', '1');

  return `${base}?${params.toString()}`;
}

function resolveAmazonBase(asinOrUrl: string): string {
  if (ASIN_PATTERN.test(asinOrUrl)) return `https://www.amazon.com/dp/${asinOrUrl}`;
  if (asinOrUrl.startsWith('http://') || asinOrUrl.startsWith('https://')) return asinOrUrl;
  throw new Error(`Invalid Amazon link target: ${asinOrUrl}`);
}

/** FTC affiliate commission disclosure. */
export const AFFILIATE_DISCLOSURE =
  'We may earn a commission on purchases made through links on this page, at no extra cost to you. ' +
  'Prices, availability and specifications are set by the seller and manufacturer, and may change — ' +
  'check the listing before buying.';
