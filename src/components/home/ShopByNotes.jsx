'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Shop by Fragrance Notes — Sensory Experience (Light Theme)
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles as faSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/ui/ProductCard';

const noteFamilies = [
  {
    id: 'sweet',
    name: 'Sweet & Dessert-Inspired',
    heading: 'Sweet Enough to Crave',
    subheading: 'Decadent gourmands of melted Belgian chocolate, Madagascar bourbon vanilla, wild strawberry marshmallow, and roasted coffee.',
    notes: ['Chocolate', 'Strawberry', 'Vanilla', 'Caramel', 'Honey', 'Coffee', 'Praline', 'Marshmallow'],
    banner: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'dark',
    name: 'Deep, Dark & Intense',
    heading: 'Deep Notes. Bold Presence.',
    subheading: 'Powerhouse accords of Cambodian agarwood (oud), crushed green cardamom, smoked Cuban tobacco, and aged amber resin.',
    notes: ['Oud', 'Cardamom', 'Leather', 'Amber', 'Tobacco', 'Incense', 'Patchouli', 'Woods'],
    banner: 'https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'fresh',
    name: 'Fresh & Clean',
    heading: 'Fresh. Clean. Effortless.',
    subheading: 'Crisp Calabrian bergamot, morning ocean sea salt, sparkling Sicilian lemon, and crushed spearmint.',
    notes: ['Citrus', 'Bergamot', 'Lemon', 'Mint', 'Aquatic', 'Green Notes', 'Orange'],
    banner: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'floral',
    name: 'Floral & Romantic',
    heading: 'Made for Soft Moments',
    subheading: 'Velvety Damask rose petals, midnight tuberose, white jasmine blossoms, and powdery French lavender.',
    notes: ['Rose', 'Jasmine', 'Peony', 'Tuberose', 'Lavender', 'Orange Blossom', 'Violet'],
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ShopByNotes({ products = [], onQuickView }) {
  const [activeTab, setActiveTab] = useState('Sweet & Dessert-Inspired');

  const currentFamily = noteFamilies.find((f) => f.name === activeTab) || noteFamilies[0];

  const familyProducts = products.filter(
    (p) => p.noteFamily?.toLowerCase() === activeTab.toLowerCase() || p.noteFamily === currentFamily.name
  );

  return (
    <section id="notes-family" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
          Sensory Note Discovery
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-elyrion-dark">
          Shop by Fragrance Notes
        </h2>
        <p className="text-xs sm:text-sm text-elyrion-muted leading-relaxed font-light">
          Instead of just browsing by gender, discover your next signature extrait based on the raw aroma profiles you crave.
        </p>
      </div>

      {/* Note Family Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {noteFamilies.map((family) => (
          <button
            key={family.id}
            onClick={() => setActiveTab(family.name)}
            className={`px-5 sm:px-7 py-3 rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 font-bold ${
              activeTab === family.name
                ? 'neu-gold-button text-white shadow-md'
                : 'neu-button text-elyrion-muted hover:text-elyrion-dark'
            }`}
          >
            {family.name}
          </button>
        ))}
      </div>

      {/* Thematic Editorial Banner */}
      <div className="relative rounded-3xl overflow-hidden neu-flat mb-12 p-8 sm:p-12 flex flex-col justify-end min-h-[260px] sm:min-h-[300px]">
        <img
          src={currentFamily.banner}
          alt={currentFamily.heading}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 space-y-3 max-w-2xl text-white">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-elyrion-gold text-white">
            {currentFamily.name}
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold">
            {currentFamily.heading}
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
            {currentFamily.subheading}
          </p>
          
          {/* Note Badges Pill List */}
          <div className="flex flex-wrap gap-2 pt-2">
            {currentFamily.notes.map((note) => (
              <span
                key={note}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/90 backdrop-blur-md text-elyrion-dark shadow-sm"
              >
                #{note}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid in this Family */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
        {(familyProducts.length > 0 ? familyProducts : products.slice(0, 3)).map((product) => (
          <ProductCard
            key={product._id || product.slug}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* Note Family Link */}
      <div className="mt-12 text-center">
        <Link
          href={`/products?noteFamily=${encodeURIComponent(currentFamily.name)}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-elyrion-goldDark hover:text-elyrion-gold transition-colors"
        >
          <span>View All {currentFamily.name} Fragrances</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
