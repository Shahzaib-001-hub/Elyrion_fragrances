'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Best Sellers Section
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles as faSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/ui/ProductCard';

export default function BestSellersSection({ products = [], onQuickView }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = ['ALL', 'UNISEX', 'MEN', 'WOMEN'];

  const bestSellers = products
    .filter((p) => p.isBestSeller || true)
    .filter((p) => activeFilter === 'ALL' || p.category?.toUpperCase() === activeFilter);

  return (
    <section id="bestsellers" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#E5E0D5] pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-elyrion-gold animate-ping" />
            <span className="text-xs uppercase tracking-[0.2em] text-elyrion-goldDark font-extrabold">
              Most Loved in Pakistan
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
            Customer Best Sellers
          </h2>
          <p className="text-sm text-[#4B5563] max-w-xl leading-relaxed font-light">
            Pakistan&apos;s most sought-after Extrait de Parfum creations. Formulated with 35% pure perfume oils for deep projection and guaranteed 14+ hours lasting on your clothes.
          </p>
        </div>

        {/* Gender Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#FAF8F5] border border-[#E5E0D5] rounded-2xl self-start md:self-auto shadow-inner">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                activeFilter === tab
                  ? 'neu-gold-button text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
        {bestSellers.slice(0, 6).map((product) => (
          <ProductCard
            key={product._id || product.slug}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-9 py-4 bg-white border border-[#E5E0D5] hover:border-elyrion-gold text-[#111827] hover:text-elyrion-goldDark text-xs uppercase tracking-widest font-bold rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <span>Explore Complete Paradise Catalog</span>
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
