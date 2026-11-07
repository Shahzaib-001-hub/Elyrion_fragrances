'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Shop by Fragrance Notes — Sensory Experience
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
    subheading: 'Calabrian bergamot, ocean sea spray, sparkling Sicilian lemon, and crushed spearmint for hot weather projection.',
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
    <section id="notes-family" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-elyrion-gold" />
          Sensory Note Discovery
          <span className="w-8 h-[1px] bg-elyrion-gold" />
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
          Shop by Fragrance Notes
        </h2>
        <p className="text-sm text-[#4B5563] leading-relaxed font-light">
          Instead of just browsing by gender, discover your signature extrait based on the raw aroma profiles you crave.
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
                ? 'neu-gold-button text-white shadow-md -translate-y-0.5'
                : 'bg-white border border-[#E5E0D5] text-[#111827] hover:border-elyrion-gold/60 shadow-sm'
            }`}
          >
            {family.name}
          </button>
        ))}
      </div>

      {/* Thematic Editorial Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/35 mb-12 p-8 sm:p-12 flex flex-col justify-end min-h-[280px] sm:min-h-[320px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
        <img
          src={currentFamily.banner}
          alt={currentFamily.heading}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
        
        <div className="relative z-10 space-y-3 max-w-2xl text-white">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-sm border border-white/20">
            {currentFamily.name}
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white drop-shadow-sm">
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
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/95 backdrop-blur-md text-[#111827] shadow-sm border border-white/60"
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
