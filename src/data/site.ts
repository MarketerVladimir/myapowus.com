export const site = {
  name: 'APOWUS Portable Nebulizer',
  title: 'APOWUS Portable Nebulizer Official Website | Availability & Alternatives',
  description:
    'Discover the APOWUS Portable Nebulizer, a compact mesh nebulizer for home and travel. Explore product features, specifications, video and availability.',
  url: 'https://myapowus.com',
  copyrightOwner: 'myapowus.com',
} as const;

export const AFFILIATE_TAG = 'AFFILIATE_TAG';

export const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Why APOWUS', href: '#why-apowus' },
  { label: 'Specifications', href: '#specifications' },
  { label: 'Alternatives', href: '#alternatives' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const hero = {
  eyebrow: 'PORTABLE MESH NEBULIZER',
  title: 'APOWUS Portable Nebulizer',
  subtitle:
    'Quiet, compact mesh nebulizer technology designed for respiratory care at home and while traveling.',
  cta: 'Explore APOWUS',
  ctaSecondary: 'View alternatives',
} as const;

export const features = [
  {
    title: 'Portable by design',
    text: 'Compact, mesh-based nebulizer meant to travel with you, not just sit on a shelf.',
    icon: 'droplet',
  },
  {
    title: 'Built for daily use',
    text: 'Designed for repeat use at home — check the product page for battery, charging and maintenance details once listed.',
    icon: 'wallet',
  },
  {
    title: 'Simple to operate',
    text: 'Straightforward setup aimed at people who need a nebulizer to just work, without a learning curve.',
    icon: 'home',
  },
] as const;

export interface Product {
  brand: string;
  title: string;
  text: string;
  badge?: string;
  seoParagraph: string;
}

export const product: Product = {
  brand: 'APOWUS',
  title: 'APOWUS Portable Nebulizer',
  badge: 'CURRENTLY UNAVAILABLE ON AMAZON',
  text:
    'A compact, portable mesh nebulizer from APOWUS. Full specifications, included accessories and ' +
    'pricing are confirmed on the live product listing when availability returns.',
  seoParagraph:
    'The APOWUS Portable Nebulizer is a compact mesh nebulizer built for everyday respiratory care at home ' +
    'and on the go. This portable nebulizer uses mesh technology to create a fine aerosol from compatible ' +
    'liquids, with a handheld design that fits easily into a bag or bedside drawer. Published APOWUS materials ' +
    'highlight a lightweight build, quiet operation, and simple one-button use, along with mask options for ' +
    'different users in the kit. On this page you can watch the product in use, review key specifications such as ' +
    'mesh-hole count and weight, and see how the APOWUS Portable Nebulizer is designed for home and travel before ' +
    'checking current availability.',
};

export interface AlternativeProduct {
  title: string;
  badge: string;
  bullets: readonly string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  amazonUrl: string;
}

export const alternatives: readonly AlternativeProduct[] = [
  {
    title: 'Vicks Sinus Inhaler V1200',
    badge: 'Most popular',
    bullets: [
      'Variable steam control',
      'Works with menthol VapoPads (1 included)',
      'Filter-free design; uses tap water; 5–15 minute sessions',
    ],
    image: '/images/alternatives/vicks-v1200.png',
    imageAlt: 'Vicks Sinus Inhaler V1200',
    imageWidth: 500,
    imageHeight: 500,
    amazonUrl:
      'https://www.amazon.com/Vicks-Personal-Targeted-Problems-Congestion/dp/B075FYVVFH?tag=AFFILIATE_TAG',
  },
  {
    title: 'Mypurmist Free — Ultrapure Cordless',
    badge: 'Cordless',
    bullets: [
      'Cordless and rechargeable',
      'Instant warm steam',
      'Adjustable steam control',
    ],
    image: '/images/alternatives/mypurmist-free-ultrapure.webp',
    imageAlt: 'Mypurmist Free Ultrapure Cordless steam inhaler',
    imageWidth: 1022,
    imageHeight: 1200,
    amazonUrl: 'https://www.amazon.com/dp/B07WGXM2TT?tag=AFFILIATE_TAG',
  },
  {
    title: 'Mypurmist Premium Value Pack',
    badge: 'Full kit',
    bullets: [
      'Handheld plug-in steam inhaler',
      'Bundle with additional accessories',
      'Uses ultrapure steam technology',
    ],
    image: '/images/alternatives/mypurmist-premium-value-pack.webp',
    imageAlt: 'Mypurmist Premium Value Pack steam inhaler',
    imageWidth: 1200,
    imageHeight: 1080,
    amazonUrl: 'https://www.amazon.com/dp/B08MWX3SQ5?tag=AFFILIATE_TAG',
  },
] as const;

export const alternativesSection = {
  eyebrow: 'AVAILABLE ALTERNATIVES',
  title: 'Steam inhalers available on Amazon',
  description:
    'While APOWUS is unavailable, these steam inhalers offer non-medicated warm steam comfort. They use a different technology and are not replacements for a mesh nebulizer.',
  callout:
    'Steam inhalers produce warm water vapor. Mesh nebulizers create a fine aerosol and may be used with compatible saline or prescribed nebulizer medication.',
  affiliateNote: 'As an Amazon Associate I earn from qualifying purchases.',
} as const;

export const faqs = [
  {
    id: 'what-is-apowus',
    question: 'What is the APOWUS Portable Nebulizer?',
    answer:
      'The APOWUS Portable Nebulizer is a compact mesh nebulizer from APOWUS, designed for portable respiratory care at home and while traveling.',
  },
  {
    id: 'how-mesh-works',
    question: 'How does the APOWUS mesh nebulizer work?',
    answer:
      'It uses mesh technology to vibrate liquid through a fine membrane, creating a mist for nebulization. APOWUS materials reference an advanced mesh structure with 2800 micro-holes.',
  },
  {
    id: 'home-and-travel',
    question: 'Is the APOWUS portable nebulizer suitable for home and travel?',
    answer:
      'Yes. APOWUS describes it as a compact, handheld portable nebulizer built for everyday use at home and on the go, with a lightweight design and included mask options in the kit.',
  },
  {
    id: 'how-quiet',
    question: 'How quiet is the APOWUS portable nebulizer?',
    answer:
      'APOWUS lists quiet operation at around 25 dB, making it suitable for everyday use at home.',
  },
  {
    id: 'how-to-clean',
    question: 'How should I clean the APOWUS portable nebulizer?',
    answer:
      'Follow the cleaning and maintenance instructions provided by APOWUS for your specific kit. Detailed steps are confirmed in the manufacturer materials for the product.',
  },
  {
    id: 'steam-vs-mesh-faq',
    question: 'Is a steam inhaler the same as a mesh nebulizer?',
    answer:
      'No. A steam inhaler produces warm water vapor for comfort during congestion. A mesh nebulizer creates a fine aerosol from saline or medication intended for nebulization. A steam inhaler cannot deliver nebulized medication and should not replace a prescribed nebulizer.',
  },
  {
    id: 'where-to-buy',
    question: 'Where can I buy the APOWUS Portable Nebulizer?',
    answer:
      'The APOWUS Portable Nebulizer is currently unavailable through the Amazon listing linked from this website. Availability may change. Steam inhaler alternatives are listed below.',
  },
] as const;

export const footerLegal = {
  affiliate: 'As an Amazon Associate I earn from qualifying purchases.',
  official: 'Official APOWUS Portable Nebulizer website.',
} as const;
