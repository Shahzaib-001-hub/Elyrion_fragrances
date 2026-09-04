import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles as faSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/ui/ProductCard';
import { seedProducts } from '@/lib/seedData';
import { generateBreadcrumbJsonLd } from '@/lib/seo';

const NOTE_DESCRIPTIONS = {
  vanilla: {
    title: 'Bourbon & Tahitian Vanilla Fragrances',
    heading: 'Love Vanilla? Experience Decadent Warmth.',
    description:
      'Immerse in the rich, intoxicating world of Madagascar Bourbon and Tahitian Vanilla extraits. Creamy, comforting, sensual, and long-lasting.',
  },
  coffee: {
    title: 'Roasted Dark Espresso & Coffee Fragrances',
    heading: 'Love Coffee? Indulge in Rich Roasted Aromas.',
    description:
      'Discover artisanal extraits featuring freshly ground dark espresso beans, Belgian mocha, and spiced cardamom notes.',
  },
  oud: {
    title: 'Royal Cambodian Agarwood & Oud Fragrances',
    heading: 'Love Oud? Command Attention with Royal Agarwood.',
    description:
      'Masterpieces of rare Cambodian oud, smoky incense, amber crystals, and aged leather with legendary powerhouse projection.',
  },
  strawberry: {
    title: 'Sweet Wild Strawberry & Gourmand Fragrances',
    heading: 'Love Strawberry? Savor Sweet Fruity Decadence.',
    description:
      'Ripe wild strawberries dipped in marshmallow cream, spun sugar, and velvety vanilla musk.',
  },
  cardamom: {
    title: 'Green Spiced Cardamom Extrait Fragrances',
    heading: 'Love Cardamom? Warm Spiced Allure.',
    description:
      'Crushed green cardamom pods harmonized with rich woods, espresso beans, and amber.',
  },
  bergamot: {
    title: 'Calabrian Bergamot & Fresh Citrus Fragrances',
    heading: 'Love Bergamot? Crisp Sunlit Radiance.',
    description:
      'Invigorating Calabrian bergamot, Sicilian lemon, and crystalline ocean minerals.',
  },
  rose: {
    title: 'Damask Rose & Floral Romantic Fragrances',
    heading: 'Love Rose? Velvety Floral Elegance.',
    description:
      'Midnight Damask rose petals, pink champagne, and golden honeyed sandalwood.',
  },
  chocolate: {
    title: 'Belgian Dark Chocolate & Cocoa Fragrances',
    heading: 'Love Chocolate? Decadent Gourmand Sensations.',
    description:
      'Melted Belgian dark cocoa, praline, tonka bean, and warm amber resins.',
  },
};

export async function generateMetadata({ params }) {
  const noteKey = params.note.toLowerCase();
  const info = NOTE_DESCRIPTIONS[noteKey] || {
    title: `${params.note.toUpperCase()} Fragrances | ELYRION`,
    description: `Shop luxury artisanal ${params.note} fragrances by ELYRION. Extrait de parfum with 35% oil concentration.`,
  };

  return {
    title: `${info.title} | ELYRION Fragrances`,
    description: info.description,
    keywords: [
      `${noteKey} perfume`,
      `${noteKey} fragrance`,
      `best ${noteKey} perfume pakistan`,
      'elyrion perfumes',
    ],
    openGraph: {
      title: `${info.title} | ELYRION Fragrances`,
      description: info.description,
      url: `https://elyrionfragrances.com/notes/${noteKey}`,
    },
  };
}

export default async function NoteSeoLandingPage({ params }) {
  const noteKey = params.note.toLowerCase();
  const noteInfo = NOTE_DESCRIPTIONS[noteKey] || {
    title: `${params.note} Fragrances`,
    heading: `Fragrances Featuring Note: ${params.note}`,
    description: `Explore our artisanal formulations highlighting premium ${params.note} extracts.`,
  };

  // Find matching products containing this note in top, heart, or base notes
  const matched = seedProducts.filter((p) => {
    const allNotes = [
      ...(p.notes?.topNotes || []),
      ...(p.notes?.heartNotes || []),
      ...(p.notes?.baseNotes || []),
    ].map((n) => n.toLowerCase());

    return allNotes.some((n) => n.includes(noteKey)) || p.noteFamily?.toLowerCase().includes(noteKey);
  });

  const productsToShow = matched.length > 0 ? matched : seedProducts.slice(0, 3);

  const breadcrumbs = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Notes Directory', url: '/#notes-family' },
    { name: `${params.note} Fragrances`, url: `/notes/${noteKey}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-elyrion-muted">
          <Link href="/" className="hover:text-elyrion-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-elyrion-gold transition-colors">Notes</Link>
          <span>/</span>
          <span className="text-elyrion-cream font-medium capitalize">{params.note}</span>
        </nav>

        {/* Hero Banner for this Note */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-elyrion-card via-elyrion-black to-elyrion-darker border border-elyrion-gold/30 space-y-4 text-center max-w-4xl mx-auto shadow-luxury">
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-xs" />
            <span className="text-xs uppercase tracking-[0.25em] text-elyrion-gold font-semibold">
              Olfactory Focus Vault
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elyrion-cream">
            {noteInfo.heading}
          </h1>
          <p className="text-xs sm:text-sm text-elyrion-muted font-light max-w-2xl mx-auto leading-relaxed">
            {noteInfo.description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-elyrion-border pb-3">
            <h2 className="font-serif text-2xl font-bold text-elyrion-cream">
              Curated Fragrances with {params.note}
            </h2>
            <span className="text-xs text-elyrion-muted font-mono">
              {productsToShow.length} Formulations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {productsToShow.map((product) => (
              <ProductCard key={product._id || product.slug} product={product} />
            ))}
          </div>
        </div>

        {/* Link back to all notes */}
        <div className="pt-8 text-center">
          <Link
            href="/#notes-family"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-elyrion-card border border-elyrion-border hover:border-elyrion-gold text-elyrion-cream hover:text-elyrion-gold text-xs uppercase tracking-widest font-semibold rounded-xl transition-all"
          >
            <span>Explore All 4 Fragrance Note Families</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </Link>
        </div>
      </div>
    </>
  );
}

