import { getImage } from 'astro:assets';
import { STORE_PAGE } from '../config/site';
import { about, faqs, products, site } from '../data/site';

/**
 * JSON-LD for the home page.
 *
 * Deliberately omitted:
 * - `Offer.price` — the page shows no prices, and Google rejects an Offer
 *   without `price`/`priceCurrency`. Advertising a price we don't control
 *   would also go stale the moment Amazon changes it.
 * - `Review` / `AggregateRating` — the testimonials are customer reviews of
 *   our own product, which Google's structured-data policy excludes from
 *   rich results. They stay on the page as plain HTML.
 */
export async function getStructuredData() {
  const productSchemas = await Promise.all(
    products.map(async (product) => {
      // Reuse a rendition the page already ships, so the crawler image costs no extra build output.
      const image = await getImage({ src: product.image, format: 'jpeg', width: 500 });

      return {
        '@type': 'Product',
        name: product.title,
        description: product.text,
        image: new URL(image.src, site.url).href,
        brand: {
          '@type': 'Brand',
          name: 'APOWUS',
        },
        category: 'Portable Mesh Nebulizer',
        url: `${site.url}/#products`,
      };
    }),
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/apple-touch-icon.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: site.phone,
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        },
        sameAs: [STORE_PAGE],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { '@id': `${site.url}/#website` },
        about: { '@id': `${site.url}/#organization` },
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
      {
        '@type': 'MedicalWebPage',
        name: about.title,
        description: about.intro,
        about: {
          '@type': 'MedicalDevice',
          name: 'APOWUS Portable Mesh Nebulizer',
          manufacturer: { '@id': `${site.url}/#organization` },
        },
      },
    ],
  };
}
