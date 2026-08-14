import { amazonTargets, buildAmazonLink } from '../config/site';

import product1Image from '../assets/product-1.jpg';
import product2Image from '../assets/product-2.jpg';
import product3Image from '../assets/product-3.jpg';
import user4Image from '../assets/user4.jpg';
import user5Image from '../assets/user5.jpg';
import user7Image from '../assets/user7.jpg';

export const site = {
  name: 'APOWUS Nebulizer',
  title: 'APOWUS Portable Nebulizer | Official Site for Adults & Kids',
  description:
    'Shop APOWUS portable mesh nebulizers — quiet, pocket-sized devices for asthma, COPD & travel. 2800 micropores, 3 modes, masks included. Official brand site.',
  url: 'https://myapowus.com',
  phone: '+1-800-284-4873',
  hours: 'MON - FRI: 9AM-5PM (EST)',
  amazonUrl: buildAmazonLink(amazonTargets.primary),
  /** Shown as "Copyright © <year> - <owner>"; the year is filled in at build time
   *  and refreshed in the browser, so it never goes stale between deploys. */
  copyrightOwner: 'Apowus',
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Video', href: '#video' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const heroStats = [
  { value: '2800', label: 'Micropores' },
  { value: '<25dB', label: 'Quiet operation' },
  { value: '3–75', label: 'Age range' },
  { value: '5 μm', label: 'Particle size' },
] as const;

export const hero = {
  eyebrow: 'Official APOWUS brand site',
  title: 'Breathing Innovation, Transforming Lives',
  subtitle:
    'Portable mesh nebulizers engineered for quiet, effective respiratory relief — at home, at work, or on the go.',
  cta: 'Check price on Amazon',
  ctaSecondary: 'Explore products',
} as const;

export const features = [
  {
    title: 'Trusted by families',
    text: 'APOWUS offers dependable products and top-notch services backed by responsive US support.',
    icon: 'home',
  },
  {
    title: 'Ease of use',
    text: 'Three modes with one-button control, smart indicator lights, and a low-battery reminder built in.',
    icon: 'users',
  },
  {
    title: 'Economical choice',
    text: 'Treat at home and save time and money — no bulky hospital-grade equipment required.',
    icon: 'wallet',
  },
] as const;

export const products = [
  {
    title: 'Nebulizer Machine for Adults and Kids Travel and Household Use',
    text: 'The APOWUS portable nebulizer is ideal for both children and adults, offering convenience and versatility wherever and whenever needed. This compact, pocket-sized device is not only easy to transport but also utilizes a blend of micro-holes and ultrasonic mesh technology to provide quiet and efficient relief for a range of respiratory issues.',
    image: product1Image,
    imageAlt: 'APOWUS portable nebulizer for travel and household use',
    amazonUrl: buildAmazonLink(amazonTargets.product1),
    badge: 'Best for travel',
    reverse: false,
  },
  {
    title: 'Nebulizer for Adults and Kids with 3 Modes',
    text: 'The APOWUS nebulizer utilizes a mesh membrane structure containing 2800 micropores, working alongside ultrasonic technology to convert liquid into extremely fine mist particles (with a diameter of 5 μm). This mist is directly delivered to the respiratory tract and lungs, swiftly alleviating symptoms of COPD, asthma, and other respiratory conditions.',
    image: product2Image,
    imageAlt: 'APOWUS portable nebulizer with three nebulization modes',
    amazonUrl: buildAmazonLink(amazonTargets.product2),
    badge: '3 smart modes',
    reverse: true,
  },
  {
    title: 'Nebulizer for Adults and Kids with 3 Nebulizer Masks and Adjustable Nebulization Rate',
    text: 'For individuals experiencing dyspnea, a portable nebulizer can be a game-changing device. Bid farewell to cumbersome nebulizers. The APOWUS portable nebulizer, powered by batteries, is compact enough to fit in the palm of your hand, enabling you to take your treatment with you wherever you need to go. It offers a rapid and efficient solution suitable for ages 3 to 75.',
    image: product3Image,
    imageAlt: 'APOWUS portable nebulizer with three masks and adjustable rate',
    amazonUrl: buildAmazonLink(amazonTargets.product3),
    badge: 'Complete kit',
    reverse: false,
  },
] as const;

export const about = {
  title: 'Welcome to Apowus – Your Trusted Source for Portable Nebulizers',
  intro:
    'At Apowus, we’re dedicated to revolutionizing respiratory care with our innovative line of portable nebulizers. As experienced marketers in the healthcare industry, we understand the importance of accessible and reliable respiratory solutions, which is why we’re proud to offer cutting-edge nebulizer technology tailored to meet the needs of modern lifestyles.',
  sections: [
    {
      heading: 'Our Portable Nebulizers: Empowering Health on the Go',
      text: 'Designed for convenience and efficacy, our portable nebulizers empower individuals to take control of their respiratory health wherever they go. Whether you’re managing chronic respiratory conditions like asthma or COPD, or simply seeking relief from occasional respiratory issues, our nebulizers deliver targeted medication directly to the lungs for fast and effective relief.',
    },
    {
      heading: 'Why Choose Apowus Portable Nebulizers?',
      items: [
        {
          title: 'Superior Performance',
          text: 'Engineered with advanced technology and precision engineering, Apowus portable nebulizers ensure optimal medication delivery with every use. Experience superior performance and consistent results you can rely on.',
        },
        {
          title: 'Compact and Lightweight Design',
          text: 'Say goodbye to bulky, cumbersome nebulizers. Our portable devices boast a sleek, compact design that fits seamlessly into your lifestyle. Whether you’re traveling, commuting, or simply on-the-go, our nebulizers offer unmatched portability without compromising on performance.',
        },
        {
          title: 'Whisper-Quiet Operation',
          text: 'Enjoy discreet and peaceful nebulization therapy thanks to our whisper-quiet operation. Our nebulizers are designed to deliver medication quietly and efficiently, allowing you to use them anytime, anywhere without disrupting your daily activities or those around you.',
        },
        {
          title: 'Easy to Use',
          text: 'At Apowus, we believe in making respiratory care as simple and straightforward as possible. That’s why our portable nebulizers are incredibly easy to use, featuring intuitive controls and hassle-free maintenance for a stress-free experience.',
        },
        {
          title: 'Long-lasting Battery Life',
          text: 'Never be caught off guard by low battery again. Our portable nebulizers are equipped with long-lasting battery life, ensuring uninterrupted use when you need it most. Stay powered up and prepared for whatever the day brings with Apowus.',
        },
      ],
    },
    {
      heading: 'Experience the Apowus Difference Today',
      text: 'Discover the future of respiratory care with Apowus portable nebulizers. Whether you’re a healthcare professional seeking innovative solutions for your patients or an individual looking to enhance your respiratory wellness, we invite you to explore our range of products and experience the Apowus difference for yourself. Transform the way you breathe, one nebulizer at a time.',
    },
  ],
} as const;

export const faqs = [
  {
    question: 'What is an APOWUS portable nebulizer?',
    answer:
      'APOWUS portable nebulizers are handheld mesh devices that convert liquid medication into a fine mist (around 5 μm particles) for direct delivery to the lungs. They are designed for adults and children ages 3 to 75.',
  },
  {
    question: 'Is the APOWUS nebulizer quiet enough for children?',
    answer:
      'Yes. APOWUS devices operate below 25 dB — quieter than a whisper — making them suitable for nighttime or travel use without disturbing sleep.',
  },
  {
    question: 'Where can I buy APOWUS nebulizers?',
    answer:
      'APOWUS products are available on Amazon.com (US). Use the Buy Now buttons on this official site to reach the correct listings with our authorized seller partners.',
  },
  {
    question: 'Does APOWUS offer customer support?',
    answer:
      'Yes. Contact our US support line at +1-800-284-4873, Monday through Friday, 9 AM to 5 PM EST.',
  },
  {
    question: 'Can I use the APOWUS nebulizer while traveling?',
    answer:
      'Absolutely. The device is pocket-sized, battery/USB powered, and includes a storage bag — ideal for home, office, and travel.',
  },
] as const;

export const testimonials = [
  {
    name: 'Martha Andrews',
    role: 'Verified customer',
    image: user4Image,
    text: 'I absolutely adore this product. It’s completely silent—no noise whatsoever! It’s also incredibly user-friendly. However, it’s crucial to use rechargeable batteries. Despite the claim that alkaline batteries are compatible, they didn’t work for me, even when brand new. So, I switched to rechargeable ones. The best aspect, though, is that it’s rechargeable, so you rarely need batteries unless there’s a power outage.',
  },
  {
    name: 'George Moss',
    role: 'Verified customer',
    image: user5Image,
    text: 'I needed a nebulizer for asthma and recently developed bronchitis, so I decided to try this portable nebulizer. It’s fantastic! Whisper-quiet and weighs only a few ounces. Compared to the bulky old 6-pound nebulizer with tubes and a medicine cup, it’s like night and day! It comes with a nice selection of mask sizes, plus a mouthpiece, USB cord, and handy storage bag. Easy to fill and clean. Works like a charm, and I highly recommend it.',
  },
  {
    name: 'Jennifer Anderson',
    role: 'Verified customer',
    image: user7Image,
    text: 'I’ve been eyeing a portable nebulizer for some time now, and after seeing the positive reviews, I decided to purchase this one. It’s compact in size, and even my 5-year-old can hold it comfortably. The nebulizer operates almost silently, with only the sound of mist being emitted, and I’m impressed by how quickly it works. Overall, I’m extremely satisfied with my new nebulizer.',
  },
] as const;
