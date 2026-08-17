import { faqs, product, site } from '../data/site';

export function getStructuredData() {
  const productImage = `${site.url}/images/apowus/product-1.png`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: 'APOWUS',
        url: site.url,
        logo: `${site.url}/favicon-96.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: 'en-US',
        publisher: { '@id': `${site.url}/#organization` },
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
      {
        '@type': 'Product',
        '@id': `${site.url}/#product`,
        name: product.title,
        description: `${product.text} ${product.seoParagraph}`,
        image: productImage,
        brand: {
          '@type': 'Brand',
          name: product.brand,
        },
        category: 'Portable Nebulizer',
        url: `${site.url}/#product`,
      },
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
