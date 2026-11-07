'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * "Scent of the Week" — Featured Fragrance
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faWandMagicSparkles as faSparkles,
  faStar,
  faBagShopping,
  faCheck,
  faArrowRight,
  faShieldHalved,
  faTruckFast,
} from '@fortawesome/free-solid-svg-icons';
import OlfactoryPyramid from '@/components/ui/OlfactoryPyramid';
import SillageGauge from '@/components/ui/SillageGauge';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ScentOfTheWeek({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F1E8] to-[#FAF8F5] border-y border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-black bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white uppercase tracking-widest shadow-sm flex items-center gap-1.5 border border-white/20">
              <FontAwesomeIcon icon={faCrown} className="text-[9px]" />
              EDITORIAL SPOTLIGHT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
            Scent of the Week
          </h2>
          <p className="text-sm text-[#4B5563] font-light">
            Every week our master perfumer spotlights one exceptional formulation trending nationwide among connoisseurs.
          </p>
        </div>

        {/* Spotlight Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5E0D5] bg-[#FAF8F5]">
              <img
                src={product.images?.lifestyle || product.images?.studio || product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-elyrion-ruby text-white uppercase tracking-widest shadow-md">
                  TRENDING #1
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E0D5] shadow-sm">
                <p className="text-xs font-serif italic text-[#111827] font-medium leading-relaxed">
                  "{product.tagline}"
                </p>
              </div>
            </div>
          </div>

          {/* Scent Narrative & Olfactory Breakdown (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#6B7280] font-semibold">
                <span className="text-elyrion-goldDark uppercase tracking-widest font-bold">
                  {product.noteFamily} • 35% Extrait Oil
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <FontAwesomeIcon icon={faStar} className="text-xs" />
                  <span className="font-bold text-[#111827]">{product.rating || 4.9}</span>
                  <span className="text-[#9CA3AF]">({product.numReviews || 89} reviews)</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
                {product.name}
              </h3>

              <p className="text-sm text-[#4B5563] leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Performance Gauges */}
            <SillageGauge
              longevityHours={product.longevityHours || 14}
              sillage={product.sillage || 'Intense'}
            />

            {/* Olfactory Pyramid */}
            <OlfactoryPyramid notes={product.notes} />

            {/* Price & Action */}
            <div className="pt-5 border-t border-[#E5E0D5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#6B7280] font-mono font-bold">
                  Special Weekly Offer
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-[#111827]">
                    {formatPrice(product.salePrice || product.price)}
                  </span>
                  {product.salePrice && product.salePrice < product.price && (
                    <span className="text-sm text-[#9CA3AF] line-through">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className="flex-1 sm:flex-none px-8 py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <FontAwesomeIcon icon={added ? faCheck : faBagShopping} />
                  <span>{added ? 'Added to Bag!' : 'Claim Scent of the Week'}</span>
                </button>

                <Link
                  href={`/products/${product.slug}`}
                  className="p-4 bg-[#FAF8F5] border border-[#E0DACE] text-[#111827] hover:border-elyrion-gold rounded-xl transition-colors shadow-sm"
                  title="View Full Product Details"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
