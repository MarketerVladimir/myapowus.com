import { alternatives, faqs, product, site } from '../data/site';

export function getStructuredData() {
  const productImage = `${site.url}/images/apowus/product-1.png`;
  const logoImage = `${site.url}/images/apowus/logo.png`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: 'APOWUS',
        url: site.url,
        logo: {
          '@type': 'ImageObject',
          '@id': `${site.url}/#/schema/logo/image/`,
          url: logoImage,
          contentUrl: logoImage,
          width: 80,
          height: 80,
          caption: 'APOWUS',
        },
        image: { '@id': `${site.url}/#/schema/logo/image/` },
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
        about: { '@id': `${site.url}/#organization` },
        inLanguage: 'en-US',
        primaryImageOfPage: { '@id': `${site.url}/#primaryimage` },
        breadcrumb: { '@id': `${site.url}/#breadcrumb` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${site.url}/#primaryimage`,
        url: productImage,
        contentUrl: productImage,
        width: 800,
        height: 808,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${site.url}/#breadcrumb`,
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` }],
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
        '@type': 'ItemList',
        '@id': `${site.url}/#alternatives`,
        name: 'Steam inhalers available on Amazon',
        numberOfItems: alternatives.length,
        itemListElement: alternatives.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: item.title,
            image: `${site.url}${item.image}`,
            url: item.amazonUrl,
          },
        })),
      },
      {
        '@type': 'VideoObject',
        name: 'APOWUS Portable Nebulizer in use',
        description: 'Video showing how the APOWUS Portable Nebulizer works at home.',
        thumbnailUrl: `${site.url}/images/apowus/video-poster.jpg`,
        uploadDate: '2026-08-14T00:00:00+03:00',
        contentUrl: `${site.url}/videos/promo.mp4`,
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
