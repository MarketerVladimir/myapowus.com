/**
 * Site-wide Amazon Associates configuration — single source of truth.
 *
 * Every amazon.com link on the site must go through `buildAmazonLink()`.
 * Do not hardcode `tag=` anywhere in components or markup.
 */

/** Amazon Associates tracking ID. Commission is credited on this value. */
export const ASSOCIATE_TAG = 'rjkey-20';

const ASIN_PATTERN = /^B0[A-Z0-9]{8}$/i;

export interface AmazonLinkOptions {
  /** SiteStripe linkId for per-placement reporting in Associates Central. */
  linkId?: string;
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
    linkCode: 'sl1',
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

/** FTC + Amazon Associates Operating Agreement disclosure. */
export const AFFILIATE_DISCLOSURE =
  'This is an independent page, not the official site of APOWUS or of any other brand named here. ' +
  'As an Amazon Associate we earn from qualifying purchases. Prices, availability and specifications ' +
  'are set by Amazon and the manufacturer, and may change — check the listing before buying.';
