'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Luxury Product Card with Dual-State Sensory Photo Hover & Theme Stroke
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faBagShopping,
  faEye,
  faHeart,
  faCheck,
  faWandMagicSparkles as faSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice, calculateDiscount } from '@/lib/utils';

export default function ProductCard({ product, onQuickView }) {
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const studioImage = product.images?.studio || product.image;
  const lifestyleImage = product.images?.lifestyle || studioImage;
  const isWishlisted = isInWishlist(product.slug || product._id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden flex flex-col justify-between bg-white border border-[#E5E0D5] hover:border-elyrion-gold/70 shadow-[0_4px_18px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(197,155,39,0.18)] hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Visual Container with Dual-Photo Switch */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF8F5]">
        {/* Studio Bottle Shot */}
        <img
          src={studioImage}
          alt={`${product.name} studio bottle portrait`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Note-Infused Lifestyle Sensory Shot (Appears on Hover) */}
        <img
          src={lifestyleImage}
          alt={`${product.name} raw note sensory photography`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          loading="lazy"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Category & Badge Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <div className="flex items-center gap-1">
            <span className="px-2.5 py-0.5 rounded-md text-[9.5px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#111827] shadow-sm border border-white/60">
              {product.category || 'UNISEX'}
            </span>
            {product.isBestSeller && (
              <span className="px-2.5 py-0.5 rounded-md text-[9.5px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-elyrion-gold to-amber-600 text-white shadow-sm flex items-center gap-1">
                <FontAwesomeIcon icon={faSparkles} className="text-[7.5px]" />
                BEST SELLER
              </span>
            )}
            {product.isNewArrival && (
              <span className="px-2.5 py-0.5 rounded-md text-[9.5px] font-extrabold uppercase tracking-wider bg-elyrion-ruby text-white shadow-sm">
                NEW
              </span>
            )}
          </div>
          {discount > 0 && (
            <span className="w-max px-2 py-0.5 rounded-md text-[9.5px] font-black bg-emerald-700 text-white shadow-sm">
              SAVE {discount}%
            </span>
          )}
        </div>

        {/* Top-Right Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-[#E5E0D5] flex items-center justify-center text-xs text-[#111827] hover:text-elyrion-gold transition-colors"
          aria-label="Save to Wishlist"
        >
          <FontAwesomeIcon
            icon={isWishlisted ? faHeart : faHeartRegular}
            className={isWishlisted ? 'text-elyrion-ruby' : ''}
          />
        </button>

        {/* Quick Action Overlay (Appears on Hover) */}
        <div className="absolute bottom-3 inset-x-3 z-10 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleQuickAdd}
            disabled={addedAnimation}
            className="flex-1 py-3 neu-gold-button text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={addedAnimation ? faCheck : faBagShopping} />
            <span>{addedAnimation ? 'Added to Bag' : 'Quick Add'}</span>
          </button>
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="p-3 bg-white/95 backdrop-blur-md rounded-xl text-[#111827] hover:text-elyrion-gold transition-colors shadow-sm border border-[#E5E0D5]"
              title="Quick Olfactory Breakdown"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          )}
        </div>
      </div>

      {/* Card Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div>
          {/* Note Family & Star Rating */}
          <div className="flex items-center justify-between text-[11px] text-[#6B7280] mb-1 font-semibold">
            <span className="text-elyrion-goldDark uppercase tracking-widest font-bold text-[9.5px]">
              {product.noteFamily || 'Extrait de Parfum'} (35% Oil)
            </span>
            <div className="flex items-center gap-1 text-amber-500">
              <FontAwesomeIcon icon={faStar} className="text-[10px]" />
              <span className="font-bold text-[#111827]">{product.rating || 4.9}</span>
              <span className="text-[#9CA3AF] text-[10px]">({product.numReviews || 36})</span>
            </div>
          </div>

          {/* Product Name */}
          <Link href={`/products/${product.slug}`} className="block group-hover:text-elyrion-goldDark transition-colors">
            <h3 className="font-serif text-lg font-bold text-[#111827] leading-tight">
              {product.name}
            </h3>
          </Link>

          {/* Emotional Story Tagline */}
          <p className="text-xs text-[#6B7280] line-clamp-2 mt-1 italic font-serif leading-relaxed font-light">
            "{product.tagline}"
          </p>

          {/* Key Featured Notes Preview */}
          {product.notes?.topNotes?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {[
                ...(product.notes.topNotes.slice(0, 1)),
                ...(product.notes.heartNotes?.slice(0, 1) || []),
                ...(product.notes.baseNotes?.slice(0, 1) || []),
              ].map((note) => (
                <span
                  key={note}
                  className="px-2 py-0.5 rounded-md text-[9.5px] bg-[#FAF8F5] border border-[#E5E0D5] text-[#374151] font-medium"
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="pt-3 border-t border-[#E5E0D5] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg font-serif text-[#111827]">
              {formatPrice(product.salePrice || product.price)}
            </span>
            {product.salePrice && product.salePrice < product.price && (
              <span className="text-xs text-[#9CA3AF] line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <span className="text-[10.5px] text-[#6B7280] font-mono font-medium">
            {product.size || '50ml Extrait'}
          </span>
        </div>
      </div>
    </div>
  );
}
