import { buildAmazonLink } from '../config/site';

export const site = {
  name: 'APOWUS Portable Nebulizer',
  title: 'APOWUS Portable Nebulizer — No Longer Sold on Amazon | Alternatives',
  description:
    'APOWUS portable nebulizers are no longer listed on Amazon.com (checked 16 August 2026). ' +
    'This independent page explains what we found and compares portable steam inhalers you can actually buy today.',
  url: 'https://myapowus.com',
  /** Shown as "Copyright © <year> - <owner>"; the year is filled in at build time
   *  and refreshed in the browser, so it never goes stale between deploys. */
  copyrightOwner: 'myapowus.com',
  /**
   * Rendered next to the APOWUS wordmark in the header and again in the footer.
   * The domain, the logo and the brand name together imply an official site, so
   * this has to appear alongside them rather than only far down the page.
   */
  notAffiliated:
    'Independent site — not affiliated with, endorsed by, or operated by APOWUS.',
} as const;

/**
 * Everything published here about APOWUS availability was observed directly, on
 * this date, with the Amazon delivery address set to the United States — a
 * non-US address makes live US listings return the same "Page Not Found", so
 * the check is worthless without it. Re-check before changing any wording.
 */
export const APOWUS_LAST_VERIFIED = '16 August 2026';

/**
 * The observed facts, and nothing beyond them. Deliberately not phrased as a
 * quotation from Amazon: the pages return a 404, not the "Currently
 * unavailable / we don't know when or if this item will be back in stock"
 * state, and attributing that wording to Amazon would be an invention.
 */
export const apowusStatus = {
  eyebrow: 'Status update',
  title: 'APOWUS nebulizers are no longer listed on Amazon',
  findings: [
    'Every APOWUS product page this site previously linked to now returns Amazon’s “Page Not Found”.',
    'A search for “APOWUS nebulizer” on Amazon.com returns results, but none of them are APOWUS products.',
    'The APOWUS brand storefront on Amazon is still online, but its own search for “nebulizer” returns nothing.',
  ],
  caveat:
    'We don’t know why the listings were removed, or whether they will come back. ' +
    'If you are looking for a nebulizer today, the models below are ones we confirmed are actually on sale.',
} as const;

export const navLinks = [
  { label: 'APOWUS status', href: '#apowus-status' },
  { label: 'Alternatives', href: '#products' },
  { label: 'How to choose', href: '#how-to-choose' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const hero = {
  eyebrow: `Checked ${APOWUS_LAST_VERIFIED}`,
  title: 'Looking for an APOWUS portable nebulizer?',
  subtitle:
    'They are no longer listed on Amazon.com — we checked, and the product pages return “Page Not Found”. ' +
    'Here is exactly what we found, and portable steam inhalers you can still buy today.',
  cta: 'See what we found',
  ctaSecondary: 'Skip to alternatives',
} as const;

/**
 * What this page helps a reader evaluate — not device specs, since those vary by
 * model and brand and belong on the product's own listing, not here.
 */
export const features = [
  {
    title: 'Steam vs. mesh',
    text: 'Steam inhalers heat water into vapor; mesh nebulizers vibrate liquid through a membrane. Steam is simpler and needs no medication; mesh nebulizers can atomize prescribed solutions.',
    icon: 'droplet',
  },
  {
    title: 'Noise and portability',
    text: 'Check the listing for decibel rating, battery vs. cord, and weight if you plan to travel with it or use it at night without waking anyone.',
    icon: 'wallet',
  },
  {
    title: 'What is actually included',
    text: 'Kits vary: masks, mouthpieces, aromatherapy pads and carry cases are sometimes bundled and sometimes sold separately. Read the listing\'s contents list before buying.',
    icon: 'home',
  },
] as const;

export interface Product {
  /** Real ASIN, verified live on Amazon at the time this page was written. */
  asin: string;
  brand: string;
  title: string;
  /** Plain facts only — pulled from the product's own Amazon listing, not invented. */
  text: string;
  badge?: string;
}

export const products: Product[] = [
  {
    asin: 'B07WGXM2TT',
    brand: 'Mypurmist',
    title: 'Mypurmist Free Cordless Steam & Sinus Inhaler Essential Kit',
    text: 'A cordless, battery-powered personal steam inhaler aimed at sinus congestion, cold symptoms, and vocal-care steaming for singers. No cord means it can be used away from an outlet.',
    badge: 'Cordless',
  },
  {
    asin: 'B08MWX3SQ5',
    brand: 'Mypurmist',
    title: 'Mypurmist Premium Value Pack — Handheld Ultrapure Instant Steam Inhaler',
    text: 'A corded, handheld steam inhaler positioned for allergy, nasal congestion, cold, cough and sinus relief, plus general vaporizer/humidifier use. Listed as FSA/HSA eligible.',
    badge: 'FSA/HSA eligible',
  },
  {
    asin: 'B003C1IIQM',
    brand: 'Vicks',
    title: 'Vicks Waterless Vaporizer V1800',
    text: 'A plug-in personal vaporizer from Vicks, compatible with Vicks VapoPads for scented vapor. A corded, tabletop alternative to a handheld inhaler.',
    badge: 'VapoPad compatible',
  },
];

export const buyUrl = (asin: string) => buildAmazonLink(asin);

/** Short, honest editorial note — this is what replaces brand self-promotion. */
export const about = {
  title: 'About this page',
  intro:
    'This site was originally built around APOWUS portable nebulizers. Those listings have since ' +
    'disappeared from Amazon, so rather than keep sending people to buttons that lead nowhere, the page ' +
    'now says plainly what we found and points to portable steam inhalers that are genuinely on sale.',
  points: [
    {
      title: 'We are not APOWUS, and not affiliated with them',
      text: 'The APOWUS name and logo belong to APOWUS and are used here only to identify the product this page is about. For anything official — warranty, support, current lineup — go to APOWUS directly.',
    },
    {
      title: 'We do not manufacture or sell anything ourselves',
      text: 'Every "Buy" link goes to the product\'s own Amazon listing, run by that brand or its authorized seller — not to us.',
    },
    {
      title: 'We only state what the listing states',
      text: 'Specs, included accessories and claims come from each product\'s own Amazon page. We do not test devices or invent numbers.',
    },
    {
      title: 'We earn a commission, and say so',
      text: 'As an Amazon Associate we earn from qualifying purchases made through these links, at no extra cost to you.',
    },
  ],
} as const;

export const faqs = [
  {
    question: 'Can I still buy an APOWUS portable nebulizer?',
    answer:
      `Not on Amazon.com, as of ${APOWUS_LAST_VERIFIED}. Every APOWUS product page we had linked to returns Amazon's "Page Not Found", a search for "APOWUS nebulizer" returns no APOWUS products, and the APOWUS brand storefront — which is still online — returns nothing for its own search for "nebulizer". We don't know whether the listings will return. APOWUS may still sell through other channels; this page only reports what we could observe on Amazon.`,
  },
  {
    question: 'Is this the official APOWUS site?',
    answer:
      'No. Despite the domain name, this is an independent page and is not affiliated with, endorsed by, or operated by APOWUS. The APOWUS name and logo are used to identify the product this page is about. For official information, warranty or support, contact APOWUS directly.',
  },
  {
    question: 'What is the difference between a steam inhaler and a mesh nebulizer?',
    answer:
      'A steam inhaler heats water and delivers warm vapor to the face — no medication is required. A mesh nebulizer vibrates liquid through a fine membrane to create a mist, which is how it can atomize prescribed solutions like saline or albuterol. Check the specific listing to see which type a given model is.',
  },
  {
    question: 'Is this the official site for Mypurmist or Vicks?',
    answer:
      'No. APOWUS, Mypurmist and Vicks are trademarks of their respective owners. Their own sites and Amazon storefronts are the authoritative source for their products, warranties and support.',
  },
  {
    question: 'Why don\'t you show prices here?',
    answer:
      'Amazon prices change frequently and vary by account, location and promotions. Rather than show a number that could be stale or wrong, every listing links straight to Amazon so you see the current price before buying.',
  },
  {
    question: 'How did you pick these products?',
    answer:
      'We looked for portable, personal-use steam inhalers currently sold on Amazon.com from established manufacturers. We have not tested these devices ourselves — read the reviews on each Amazon listing before deciding.',
  },
] as const;
