import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faWandMagicSparkles as faSparkles,
  faCrown,
  faTruckFast,
  faBottleDroplet,
  faShieldHalved,
  faArrowRight,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { seedProducts } from '@/lib/seedData';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ProductDetailClient from './ProductDetailClient';

// Helper to fetch single product by slug
async function getProductBySlug(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
      return seedProducts.find((p) => p.slug === slug);
    }
    const data = await res.json();
    return data.product || seedProducts.find((p) => p.slug === slug);
  } catch (e) {
    return seedProducts.find((p) => p.slug === slug);
  }
}

// Next.js Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Fragrance Not Found | ELYRION',
    };
  }

  const title = product.seo?.metaTitle || `${product.name} Extrait de Parfum | ELYRION Fragrances`;
  const description =
    product.seo?.metaDescription ||
    product.tagline ||
    `${product.name} by ELYRION. Artisanal 35% oil concentration extrait de parfum.`;

  return {
    title,
    description,
    keywords: product.seo?.keywords || [
      product.name,
      'elyrion',
      product.category,
      product.noteFamily,
      'luxury extrait',
    ],
    openGraph: {
      title,
      description,
      url: `https://elyrionfragrances.com/products/${product.slug}`,
      siteName: 'ELYRION Fragrances',
      images: [
        {
          url: product.images?.studio || product.images?.lifestyle,
          width: 800,
          height: 1000,
          alt: `${product.name} by ELYRION`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.images?.studio || product.images?.lifestyle],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = generateProductJsonLd(product);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Fragrances', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  // Related products from same note family
  const relatedProducts = seedProducts
    .filter((p) => p.slug !== product.slug && (p.noteFamily === product.noteFamily || p.category === product.category))
    .slice(0, 3);

  return (
    <>
      {/* Schema.org Product & Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumb Links */}
        <nav className="flex items-center space-x-2 text-xs text-elyrion-muted">
          <Link href="/" className="hover:text-elyrion-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-elyrion-gold transition-colors">Fragrances</Link>
          <span>/</span>
          <span className="text-elyrion-cream font-medium">{product.name}</span>
        </nav>

        {/* Client Product Interactive Showcase */}
        <ProductDetailClient product={product} />

        {/* Related Fragrance Recommendations */}
        <div className="pt-12 border-t border-elyrion-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-elyrion-gold font-semibold">
                Olfactory Harmony
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-elyrion-cream">
                You May Also Crave
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs text-elyrion-gold uppercase tracking-wider hover:underline font-semibold"
            >
              Explore Full Collection →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className="group p-4 bg-elyrion-card border border-elyrion-border hover:border-elyrion-gold/40 rounded-2xl flex flex-col justify-between transition-all hover:shadow-gold-sm"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 bg-elyrion-black">
                  <img
                    src={rel.images?.studio}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-elyrion-gold tracking-widest">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-elyrion-cream group-hover:text-elyrion-gold transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-elyrion-muted line-clamp-1 italic mt-0.5">
                    "{rel.tagline}"
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

