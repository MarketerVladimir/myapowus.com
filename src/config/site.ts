/**
 * Site-wide Amazon Associates configuration — single source of truth.
 *
 * Every amazon.com link on the site must go through `buildAmazonLink()`.
 * Do not hardcode `tag=` anywhere in components or markup.
 */

/** Amazon Associates tracking ID. Commission is credited on this value. */
export const ASSOCIATE_TAG = 'rjkey-20';

/** Verified-live APOWUS brand storefront (US). */
export const STORE_PAGE =
  'https://www.amazon.com/stores/APOWUS/page/678859B2-A702-4A67-ADDA-027D748AD63E';

const ASIN_PATTERN = /^B0[A-Z0-9]{8}$/i;

export interface AmazonLinkOptions {
  /** SiteStripe linkId for per-placement reporting in Associates Central. */
  linkId?: string;
}

/**
 * Build a tagged Amazon URL from an ASIN, full Amazon URL, or storefront fallback.
 *
 * @param asinOrUrl - ASIN (e.g. `B0BTTF5RFJ`), full `https://www.amazon.com/...` URL, or `null` for the brand store.
 */
export function buildAmazonLink(
  asinOrUrl: string | null,
  options: AmazonLinkOptions = {},
): string {
  const base = resolveAmazonBase(asinOrUrl);

  const params = new URLSearchParams({
    linkCode: 'sl1',
    tag: ASSOCIATE_TAG,
    language: 'en_US',
    ref_: 'as_li_ss_tl',
  });

  if (options.linkId) params.set('linkId', options.linkId);
  if (asinOrUrl && ASIN_PATTERN.test(asinOrUrl)) params.set('th', '1');

  return `${base}?${params.toString()}`;
}

function resolveAmazonBase(asinOrUrl: string | null): string {
  if (!asinOrUrl) return STORE_PAGE;
  if (ASIN_PATTERN.test(asinOrUrl)) return `https://www.amazon.com/dp/${asinOrUrl}`;
  if (asinOrUrl.startsWith('http://') || asinOrUrl.startsWith('https://')) return asinOrUrl;
  throw new Error(`Invalid Amazon link target: ${asinOrUrl}`);
}

/** Link targets per placement — change ASINs here only. */
export const amazonTargets = {
  primary: null,
  product1: null,
  product2: null,
  product3: null,
} as const satisfies Record<string, string | null>;

/** FTC + Amazon Associates Operating Agreement disclosure. */
export const AFFILIATE_DISCLOSURE =
  'As an Amazon Associate we earn from qualifying purchases. Prices and availability are set by Amazon and may change.';
