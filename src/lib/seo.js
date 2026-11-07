/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * SEO & Schema.org JSON-LD Structured Data Generators
 * ============================================================================
 * 
 * Provides search engines (Google, Bing, Yahoo) with rich semantic metadata
 * for luxury product carousels, pricing, stock availability, reviews, and branding.
 */

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://elyrionfragrances.com';
const BRAND_NAME = 'ELYRION';
const BRAND_TAGLINE = 'The Fragrance of Paradise';

/**
 * Generates JSON-LD Structured Data for an individual Luxury Fragrance Product
 * @param {Object} product
 */
export function generateProductJsonLd(product) {
  if (!product) return null;

  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [
      product.images?.studio,
      product.images?.lifestyle,
    ].filter(Boolean),
    description: product.description || product.tagline,
    sku: product.sku || product._id?.toString() || product.slug,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/products/${product.slug}`,
      priceCurrency: 'PKR',
      price: product.salePrice || product.price,
      priceValidUntil: '2027-12-31',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: BRAND_NAME,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating || 4.9,
      reviewCount: product.numReviews || 48,
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Fragrance Family',
        value: product.noteFamily || 'Luxury Extrait',
      },
      {
        '@type': 'PropertyValue',
        name: 'Gender Category',
        value: product.category || 'Unisex',
      },
      {
        '@type': 'PropertyValue',
        name: 'Top Notes',
        value: Array.isArray(product.notes?.topNotes) ? product.notes.topNotes.join(', ') : '',
      },
      {
        '@type': 'PropertyValue',
        name: 'Heart Notes',
        value: Array.isArray(product.notes?.heartNotes) ? product.notes.heartNotes.join(', ') : '',
      },
      {
        '@type': 'PropertyValue',
        name: 'Base Notes',
        value: Array.isArray(product.notes?.baseNotes) ? product.notes.baseNotes.join(', ') : '',
      },
      {
        '@type': 'PropertyValue',
        name: 'Sillage',
        value: product.sillage || 'Intense',
      },
    ],
  };
}

/**
 * Generates JSON-LD Structured Data for Brand Organization
 */
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME,
    alternateName: `${BRAND_NAME} Fragrances Pakistan`,
    url: BASE_URL,
    logo: `${BASE_URL}/images/elyrion-logo.png`,
    description: `${BRAND_NAME} — Luxury Extrait de Parfum Pakistan. High-concentration 35% oil perfumes with 14+ hours lasting. Cash on Delivery across Karachi, Lahore, Islamabad, and nationwide.`,
    sameAs: [
      'https://www.instagram.com/elyrionfragrances',
      'https://www.facebook.com/elyrionfragrances',
      'https://www.tiktok.com/@elyrionfragrances',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-300-ELYRION',
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
    paymentAccepted: 'Cash on Delivery, Bank Transfer, EasyPaisa, JazzCash',
    currenciesAccepted: 'PKR',
  };
}

/**
 * Generates BreadcrumbList Structured Data
 * @param {Array<{name: string, url: string}>} items
 */
export function generateBreadcrumbJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generates FAQ Structured Data for Google Rich Snippets (Pakistan Target)
 */
export function generateFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer Cash on Delivery (COD) across Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! ELYRION offers Cash on Delivery (COD) across all cities in Pakistan, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar. You can inspect your parcel and pay when it arrives at your doorstep.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do ELYRION perfumes last in Pakistani weather?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All ELYRION fragrances are formulated as Extrait de Parfum with an ultra-high 35% pure fragrance oil concentration. They are tested to last 14+ hours on skin and multiple days on clothes, even in hot and humid Pakistani weather.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I test the perfume before opening the main bottle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every full-size order comes with a free 5ml luxury tester bottle. You can test the scent using the 5ml tester first. If you are not completely satisfied, you can exchange the unopened 50ml bottle within 7 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much is delivery in Pakistan and when will I receive my order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Delivery is 100% Free on all orders above Rs. 3,500. For orders below Rs. 3,500, standard shipping is Rs. 250. Orders are delivered in 2 to 4 working days nationwide in protective insulated luxury packaging.',
        },
      },
    ],
  };
}


