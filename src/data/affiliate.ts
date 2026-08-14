/**
 * Amazon Associates links — single source of truth.
 *
 * The WordPress site linked to exactly one product, via the shortlink
 * https://amzn.to/3Xx7b6w -> /dp/B095RZDJJD?tag=rjkey-20&linkId=44c4f3ad...
 * That ASIN now returns Amazon's 404 page, so it must not be reused.
 *
 * Every link on the site is built here. To repoint a button, change one
 * entry below — nothing else references an ASIN.
 */

/** Amazon Associates tracking tag. Commission is credited on this value. */
export const AFFILIATE_TAG = 'rjkey-20';

/** Verified-live APOWUS brand storefront (checked 2026-08-14). */
export const STORE_PAGE =
  'https://www.amazon.com/stores/APOWUS/page/678859B2-A702-4A67-ADDA-027D748AD63E';

export interface AffiliateTarget {
  /** Amazon ASIN, or null to fall back to the brand storefront. */
  asin: string | null;
  /** SiteStripe linkId, for per-placement reporting in Associates Central. */
  linkId?: string;
}

/**
 * Build a tagged Amazon URL.
 *
 * `tag` is what pays; `linkCode`/`ref_` mirror SiteStripe's own format so the
 * click is attributed the same way it was on the WordPress site.
 */
export function affiliateUrl({ asin, linkId }: AffiliateTarget): string {
  const base = asin ? `https://www.amazon.com/dp/${asin}` : STORE_PAGE;

  const params = new URLSearchParams({
    linkCode: 'sl1',
    tag: AFFILIATE_TAG,
    language: 'en_US',
    ref_: 'as_li_ss_tl',
  });
  if (linkId) params.set('linkId', linkId);
  if (asin) params.set('th', '1');

  return `${base}?${params.toString()}`;
}

/**
 * Link targets per placement.
 *
 * `asin: null` routes to the verified storefront — a live page that still
 * carries the tag, so clicks keep earning while a listing is being confirmed.
 * Replace with a real ASIN from Associates SiteStripe to deep-link a product.
 */
export const targets = {
  /** Header, hero and footer CTAs. */
  primary: { asin: null } satisfies AffiliateTarget,
  /** Product cards, in page order. */
  product1: { asin: null } satisfies AffiliateTarget,
  product2: { asin: null } satisfies AffiliateTarget,
  product3: { asin: null } satisfies AffiliateTarget,
} as const;

/** FTC + Associates Operating Agreement disclosure. Required wording. */
export const AFFILIATE_DISCLOSURE =
  'As an Amazon Associate we earn from qualifying purchases. Prices and availability are set by Amazon and may change.';
