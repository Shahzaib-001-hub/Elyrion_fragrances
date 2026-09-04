'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Quick View Olfactory Modal Component (Light Theme)
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBagShopping,
  faStar,
  faHeart,
  faCheck,
  faArrowRight,
  faWandMagicSparkles as faSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import OlfactoryPyramid from './OlfactoryPyramid';
import SillageGauge from './SillageGauge';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice, calculateDiscount } from '@/lib/utils';

export default function QuickViewModal({ product, onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState('studio');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const studioImage = product.images?.studio || product.image;
  const lifestyleImage = product.images?.lifestyle || studioImage;
  const isWishlisted = isInWishlist(product.slug || product._id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false),
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#F5F2EB] border border-white/80 rounded-3xl max-w-4xl w-full overflow-hidden shadow-neu-lg z-10 animate-in fade-in zoom-in-95 duration-200 text-elyrion-dark">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl neu-button text-elyrion-dark hover:text-elyrion-gold flex items-center justify-center transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Dual Photography View */}
          <div className="p-6 sm:p-8 bg-[#EFECE4] flex flex-col justify-between space-y-4 border-r border-[#E2DDD2]">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden neu-flat bg-[#EAE5DB]">
              <img
                src={selectedPhoto === 'studio' ? studioImage : lifestyleImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-md text-[9.5px] font-extrabold bg-white text-elyrion-dark shadow-sm">
                  {product.category || 'UNISEX'}
                </span>
                {product.isBestSeller && (
                  <span className="px-2.5 py-0.5 rounded-md text-[9.5px] font-extrabold bg-elyrion-gold text-white flex items-center gap-1 shadow-sm">
                    <FontAwesomeIcon icon={faSparkles} className="text-[7.5px]" />
                    BEST SELLER
                  </span>
                )}
              </div>
            </div>

            {/* Photo Switcher Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedPhoto('studio')}
                className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  selectedPhoto === 'studio'
                    ? 'neu-pressed text-elyrion-goldDark'
                    : 'neu-button text-elyrion-muted hover:text-elyrion-dark'
                }`}
              >
                Studio Bottle Shot
              </button>
              <button
                onClick={() => setSelectedPhoto('lifestyle')}
                className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                  selectedPhoto === 'lifestyle'
                    ? 'neu-pressed text-elyrion-goldDark'
                    : 'neu-button text-elyrion-muted hover:text-elyrion-dark'
                }`}
              >
                Note-Infused Mood Shot
              </button>
            </div>
          </div>

          {/* Right: Olfactory Details & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              
              <div>
                <div className="flex items-center justify-between text-xs text-elyrion-muted mb-1 font-semibold">
                  <span className="text-elyrion-goldDark uppercase tracking-widest font-bold text-[10px]">
                    {product.noteFamily || 'Luxury Extrait'}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <FontAwesomeIcon icon={faStar} className="text-xs" />
                    <span className="font-bold text-elyrion-dark">{product.rating || 4.9}</span>
                    <span className="text-elyrion-subtle text-xs">({product.numReviews || 48} reviews)</span>
                  </div>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-elyrion-dark">
                  {product.name}
                </h2>

                <p className="text-xs text-elyrion-muted italic font-serif mt-1.5 leading-relaxed font-light">
                  "{product.tagline}"
                </p>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 pb-3 border-b border-[#E2DDD2]">
                <span className="font-serif text-2xl font-bold text-elyrion-goldDark">
                  {formatPrice(product.salePrice || product.price)}
                </span>
                {product.salePrice && product.salePrice < product.price && (
                  <span className="text-sm text-elyrion-subtle line-through">
                    {formatPrice(product.price)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="px-2 py-0.5 rounded-md text-[9.5px] font-bold bg-emerald-600 text-white">
                    SAVE {discount}%
                  </span>
                )}
                <span className="text-xs text-elyrion-muted font-mono ml-auto">
                  50ml / 1.7 fl. oz.
                </span>
              </div>

              {/* Sillage & Longevity */}
              <SillageGauge
                longevityHours={product.longevityHours || 14}
                sillage={product.sillage || 'Intense'}
              />

              {/* Olfactory Notes Pyramid */}
              <OlfactoryPyramid notes={product.notes} />
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#E2DDD2] space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={addedAnimation}
                  className="flex-1 py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={addedAnimation ? faCheck : faBagShopping} />
                  <span>{addedAnimation ? 'Added to Bag' : 'Add to Bag'}</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className="w-12 h-12 rounded-xl neu-button flex items-center justify-center text-elyrion-dark hover:text-elyrion-gold transition-colors"
                >
                  <FontAwesomeIcon
                    icon={isWishlisted ? faHeart : faHeartRegular}
                    className={isWishlisted ? 'text-elyrion-ruby' : ''}
                  />
                </button>
              </div>

              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="block text-center text-xs text-elyrion-muted hover:text-elyrion-goldDark font-semibold transition-colors py-1"
              >
                View Full Olfactory Editorial & Reviews <FontAwesomeIcon icon={faArrowRight} className="ml-1 text-[10px]" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
