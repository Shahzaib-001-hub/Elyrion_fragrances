'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Product Detail Page — Interactive Client Controller
 * ============================================================================
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faBagShopping,
  faHeart,
  faCheck,
  faWandMagicSparkles as faSparkles,
  faGift,
  faTruckFast,
  faBottleDroplet,
  faRotateLeft,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import OlfactoryPyramid from '@/components/ui/OlfactoryPyramid';
import SillageGauge from '@/components/ui/SillageGauge';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice, calculateDiscount } from '@/lib/utils';

export default function ProductDetailClient({ product }) {
  const [activePhoto, setActivePhoto] = useState('studio'); // 'studio' or 'lifestyle'
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const studioImage = product.images?.studio || product.image;
  const lifestyleImage = product.images?.lifestyle || studioImage;
  const isWishlisted = isInWishlist(product.slug || product._id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      
      {/* LEFT: Dual Photography Showcase */}
      <div className="lg:col-span-6 space-y-4">
        {/* Main Display Image */}
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-elyrion-border bg-elyrion-black shadow-2xl">
          <img
            src={activePhoto === 'studio' ? studioImage : lifestyleImage}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-in-out"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-elyrion-black/80 backdrop-blur-md text-elyrion-cream border border-elyrion-border">
              {product.category}
            </span>
            {product.isBestSeller && (
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-elyrion-gold text-elyrion-black shadow-md flex items-center gap-1.5">
                <FontAwesomeIcon icon={faSparkles} className="text-[8px]" />
                BEST SELLER
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-elyrion-black/80 backdrop-blur-md border border-elyrion-border text-elyrion-cream hover:text-elyrion-gold flex items-center justify-center transition-colors"
          >
            <FontAwesomeIcon
              icon={isWishlisted ? faHeart : faHeartRegular}
              className={isWishlisted ? 'text-elyrion-ruby' : ''}
            />
          </button>
        </div>

        {/* Dual-State Photo Switcher Tabs */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setActivePhoto('studio')}
            className={`p-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activePhoto === 'studio'
                ? 'border-elyrion-gold bg-elyrion-gold/10 text-elyrion-gold shadow-gold-sm'
                : 'border-elyrion-border bg-elyrion-card text-elyrion-muted hover:text-elyrion-cream'
            }`}
          >
            <span>Studio Bottle Portrait</span>
          </button>

          <button
            onClick={() => setActivePhoto('lifestyle')}
            className={`p-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              activePhoto === 'lifestyle'
                ? 'border-elyrion-gold bg-elyrion-gold/10 text-elyrion-gold shadow-gold-sm'
                : 'border-elyrion-border bg-elyrion-card text-elyrion-muted hover:text-elyrion-cream'
            }`}
          >
            <span>Note-Infused Mood Shot</span>
          </button>
        </div>
      </div>

      {/* RIGHT: Olfactory Breakdown & Purchase Actions */}
      <div className="lg:col-span-6 space-y-6">
        
        {/* Header Details */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-elyrion-muted">
            <span className="text-elyrion-gold uppercase tracking-widest font-semibold">
              {product.noteFamily}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <FontAwesomeIcon icon={faStar} className="text-xs" />
              <span className="font-bold text-elyrion-cream">{product.rating || 4.9}</span>
              <span className="text-elyrion-subtle">({product.numReviews || 48} Verified Reviews)</span>
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elyrion-cream leading-tight">
            {product.name}
          </h1>

          {/* Emotional Narrative */}
          <p className="text-sm text-elyrion-gold/90 italic font-serif leading-relaxed pt-1">
            "{product.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-elyrion-muted leading-relaxed font-light pt-2">
            {product.description}
          </p>
        </div>

        {/* Pricing & Bottle Specs */}
        <div className="p-4 bg-elyrion-card border border-elyrion-border rounded-2xl flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-wider text-elyrion-muted">Price (Extrait de Parfum)</span>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-elyrion-gold">
                {formatPrice(product.salePrice || product.price)}
              </span>
              {product.salePrice && product.salePrice < product.price && (
                <span className="text-sm text-elyrion-subtle line-through">
                  {formatPrice(product.price)}
                </span>
              )}
              {discount > 0 && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-black">
                  SAVE {discount}%
                </span>
              )}
            </div>
          </div>

          <div className="text-right text-xs text-elyrion-muted space-y-1">
            <span className="block font-mono text-elyrion-cream font-bold">{product.size || '50ml / 1.7 fl. oz.'}</span>
            <span className="block text-[10px] text-emerald-400 font-semibold">In Stock • Ships in 24h</span>
          </div>
        </div>

        {/* Sillage & Longevity Gauges */}
        <SillageGauge
          longevityHours={product.longevityHours || 14}
          sillage={product.sillage || 'Intense'}
        />

        {/* Olfactory Notes Architecture Pyramid */}
        <OlfactoryPyramid notes={product.notes} />

        {/* Quantity and Add to Bag Bar */}
        <div className="space-y-3 pt-2">
          <div className="flex gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center border border-elyrion-border rounded-xl bg-elyrion-card px-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-2 text-sm text-elyrion-muted hover:text-elyrion-gold"
              >
                -
              </button>
              <span className="px-3 text-sm font-bold text-elyrion-cream">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-2 text-sm text-elyrion-muted hover:text-elyrion-gold"
              >
                +
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className="flex-1 py-4 bg-gold-gradient text-elyrion-black font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl hover:shadow-gold-md hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={added ? faCheck : faBagShopping} />
              <span>{added ? 'Added to Fragrance Bag!' : `Add to Bag • ${formatPrice((product.salePrice || product.price) * quantity)}`}</span>
            </button>
          </div>

          {/* Complimentary Perks Reminder */}
          <div className="flex items-center justify-between text-[11px] text-elyrion-muted px-2 pt-1">
            <span className="flex items-center gap-1 text-elyrion-gold">
              <FontAwesomeIcon icon={faGift} className="text-[10px]" />
              Includes Free 5ml Luxury Sample
            </span>
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faTruckFast} className="text-[10px]" />
              Free Express Delivery above Rs. 3,500
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}

