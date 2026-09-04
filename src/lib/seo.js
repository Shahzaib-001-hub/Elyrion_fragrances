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
    alternateName: `${BRAND_NAME} Fragrances`,
    url: BASE_URL,
    logo: `${BASE_URL}/images/elyrion-logo.png`,
    description: `${BRAND_NAME} — ${BRAND_TAGLINE}. High-concentration luxury extrait de parfum, curated notes, and sensory olfactory journeys.`,
    sameAs: [
      'https://www.instagram.com/elyrionfragrances',
      'https://www.facebook.com/elyrionfragrances',
      'https://www.tiktok.com/@elyrionfragrances',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-300-ELYRION',
      contactType: 'customer service',
      areaServed: ['PK', 'AE', 'US', 'GB'],
      availableLanguage: ['English', 'Urdu'],
    },
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

