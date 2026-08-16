import { buyUrl, faqs, products, site } from '../data/site';

/**
 * JSON-LD for the home page.
 *
 * Deliberately omitted:
 * - `Offer.price` — the page shows no prices, and Google rejects an Offer
 *   without `price`/`priceCurrency`. Advertising a price we don't control
 *   would also go stale the moment Amazon changes it.
 * - `Review` / `AggregateRating` — we don't review these products ourselves.
 * - Any `Organization`-as-manufacturer claim — this page does not make or
 *   sell anything; it links out to each product's real manufacturer/seller.
 */
export function getStructuredData() {
  const productSchemas = products.map((product) => ({
    '@type': 'Product',
    name: product.title,
    description: product.text,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    url: buyUrl(product.asin),
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { '@id': `${site.url}/#website` },
        inLanguage: 'en-US',
      },
      ...productSchemas,
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
