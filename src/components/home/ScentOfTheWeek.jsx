'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * "Scent of the Week" — Featured Fragrance (Light Theme)
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
    <section className="py-20 bg-[#ECE7DC] border-y border-[#DDD7C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold bg-elyrion-gold text-white uppercase tracking-widest shadow-md flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCrown} className="text-[9px]" />
              EDITORIAL SPOTLIGHT
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-elyrion-dark">
            Scent of the Week
          </h2>
          <p className="text-xs sm:text-sm text-elyrion-muted font-light">
            Every week our master perfumer spotlights one exceptional formulation trending among connoisseurs.
          </p>
        </div>

        {/* Spotlight Showcase Card */}
        <div className="neu-flat rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 bg-[#F2EFE8]">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden neu-flat bg-[#EAE5DB]">
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

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-sm">
                <p className="text-xs font-serif italic text-elyrion-dark font-medium">
                  "{product.tagline}"
                </p>
              </div>
            </div>
          </div>

          {/* Scent Narrative & Olfactory Breakdown (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-elyrion-muted font-semibold">
                <span className="text-elyrion-goldDark uppercase tracking-widest font-bold">
                  {product.noteFamily} • Extrait de Parfum
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  <FontAwesomeIcon icon={faStar} className="text-xs" />
                  <span className="font-bold text-elyrion-dark">{product.rating || 4.9}</span>
                  <span className="text-elyrion-subtle">({product.numReviews || 89} reviews)</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-elyrion-dark">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-elyrion-muted leading-relaxed font-light">
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
            <div className="pt-4 border-t border-[#E2DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-widest text-elyrion-muted font-mono font-bold">Special Weekly Price</span>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-elyrion-goldDark">
                    {formatPrice(product.salePrice || product.price)}
                  </span>
                  {product.salePrice && product.salePrice < product.price && (
                    <span className="text-sm text-elyrion-subtle line-through">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className="flex-1 sm:flex-none px-8 py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={added ? faCheck : faBagShopping} />
                  <span>{added ? 'Added to Bag!' : 'Claim Scent of the Week'}</span>
                </button>

                <Link
                  href={`/products/${product.slug}`}
                  className="p-4 neu-button text-elyrion-dark hover:text-elyrion-gold rounded-xl transition-colors"
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
