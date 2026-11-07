'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Offers & Bundles Section — "More Fragrance. Better Value."
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faTruckFast,
  faCrown,
  faWandMagicSparkles as faSparkles,
  faBagShopping,
  faCheck,
  faPlus,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { bundles as catalogBundles, promotionalOffers } from '@/lib/catalog';

export default function OffersBundlesSection({ products = [] }) {
  const { addToCart } = useCart();
  const [selectedForBundle, setSelectedForBundle] = useState([]);
  const [bundleAdded, setBundleAdded] = useState(false);

  const toggleSelectForBundle = (product) => {
    setSelectedForBundle((prev) => {
      const exists = prev.find((p) => (p._id || p.slug) === (product._id || product.slug));
      if (exists) {
        return prev.filter((p) => (p._id || p.slug) !== (product._id || product.slug));
      } else {
        if (prev.length >= 3) return prev;
        return [...prev, product];
      }
    });
  };

  const bundleItemsCount = selectedForBundle.length;
  const rawBundlePrice = selectedForBundle.reduce(
    (sum, p) => sum + (p.salePrice || p.price),
    0
  );

  let discountedBundlePrice = rawBundlePrice;
  let bundleSavings = 0;
  if (bundleItemsCount === 2) {
    discountedBundlePrice = Math.round(rawBundlePrice * 0.8);
    bundleSavings = rawBundlePrice - discountedBundlePrice;
  } else if (bundleItemsCount === 3) {
    const sortedPrices = selectedForBundle.map((p) => p.salePrice || p.price).sort((a, b) => a - b);
    discountedBundlePrice = rawBundlePrice - sortedPrices[0];
    bundleSavings = sortedPrices[0];
  }

  const handleAddCustomBundleToCart = () => {
    selectedForBundle.forEach((item) => {
      addToCart(item, 1);
    });
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 2000);
  };

  return (
    <section id="offers-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-elyrion-gold" />
          Special Discounts & Offers
          <span className="w-8 h-[1px] bg-elyrion-gold" />
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
          More Fragrance. Better Value.
        </h2>
        <p className="text-sm text-[#4B5563] font-light leading-relaxed">
          Save up to 30% when you purchase your favorite perfumes together. All bundles include free express delivery across Pakistan, Cash on Delivery, and free 5ml tester bottles.
        </p>
      </div>

      {/* Promotional Campaign Cards Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotionalOffers.map((offer, idx) => (
          <div
            key={offer.title}
            className="p-7 rounded-3xl bg-white border border-[#E5E0D5] shadow-sm flex flex-col justify-between space-y-4 hover:border-elyrion-gold/50 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[9.5px] font-black bg-gradient-to-r from-elyrion-gold to-amber-600 text-white uppercase tracking-wider shadow-sm">
                  {offer.badge}
                </span>
                <FontAwesomeIcon
                  icon={idx === 0 ? faGift : idx === 1 ? faCrown : faTruckFast}
                  className="text-elyrion-gold text-base"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111827]">
                {offer.title}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed font-light">
                {offer.description}
              </p>
            </div>
            <div className="pt-3 border-t border-[#E5E0D5]">
              <span className="text-xs font-bold uppercase tracking-wider text-elyrion-goldDark">
                {offer.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-Curated Bundles Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3">
          <h3 className="font-serif text-2xl font-bold text-[#111827]">
            Curated Paradise Sets
          </h3>
          <Link href="/bundles" className="text-xs text-elyrion-goldDark uppercase tracking-wider hover:underline font-bold">
            View All Bundles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-9">
          {catalogBundles.map((bundle) => (
            <div
              key={bundle.title}
              className="bg-white rounded-3xl border border-[#E5E0D5] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-[0_16px_36px_rgba(197,155,39,0.18)] hover:border-elyrion-gold/60 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                <img
                  src={bundle.image}
                  alt={bundle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7]"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black bg-gradient-to-r from-elyrion-gold to-amber-600 text-white uppercase tracking-widest shadow-md">
                    {bundle.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                  Includes: {bundle.includedPerfumes?.join(' + ')}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[10px] text-elyrion-goldDark uppercase tracking-widest font-extrabold block mb-1">
                    {bundle.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#111827]">
                    {bundle.title}
                  </h4>
                  <p className="text-xs text-[#6B7280] mt-2 font-light leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D5] space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-xl font-bold text-[#111827]">
                      {formatPrice(bundle.salePrice)}
                    </span>
                    <span className="text-xs text-[#9CA3AF] line-through">
                      {formatPrice(bundle.price)}
                    </span>
                    <span className="text-[10.5px] text-emerald-700 font-extrabold ml-auto bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Save {formatPrice(bundle.price - bundle.salePrice)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(
                        {
                          _id: bundle.slug,
                          slug: bundle.slug,
                          name: bundle.title,
                          price: bundle.salePrice,
                          image: bundle.image,
                          category: 'BUNDLE',
                        },
                        1,
                        'Set'
                      );
                    }}
                    className="w-full py-3.5 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-sm"
                  >
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span>Add Curated Bundle to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Custom Bundle Builder */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E0D5] space-y-8 shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-elyrion-gold/15 text-elyrion-goldDark border border-elyrion-gold/30">
            Interactive Experience
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827]">
            Build Your Custom Paradise Set
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] font-light">
            Select any <strong>2 perfumes for 20% OFF</strong> or select any <strong>3 perfumes and the 3rd bottle is 100% FREE</strong>!
          </p>
        </div>

        {/* Perfume Selection Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((p) => {
            const isSelected = selectedForBundle.some(
              (item) => (item._id || item.slug) === (p._id || p.slug)
            );
            return (
              <button
                key={p._id || p.slug}
                onClick={() => toggleSelectForBundle(p)}
                className={`p-3.5 rounded-2xl text-center transition-all flex flex-col items-center justify-between ${
                  isSelected
                    ? 'bg-[#FAF8F5] border-2 border-elyrion-gold shadow-md -translate-y-1'
                    : 'bg-white border border-[#E5E0D5] hover:border-elyrion-gold/60 shadow-sm'
                }`}
              >
                <div className="w-16 h-20 rounded-xl overflow-hidden mb-2 relative bg-[#FAF8F5] border border-[#E5E0D5]">
                  <img
                    src={p.images?.studio || p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-elyrion-gold/40 backdrop-blur-[1px] flex items-center justify-center text-white font-bold">
                      <FontAwesomeIcon icon={faCheck} className="text-base bg-elyrion-gold rounded-full p-1 shadow" />
                    </div>
                  )}
                </div>
                <h5 className="text-xs font-serif font-bold text-[#111827] truncate w-full">
                  {p.name}
                </h5>
                <span className="text-[11px] text-elyrion-goldDark font-bold font-mono mt-1">
                  {formatPrice(p.salePrice || p.price)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Calculation Bar */}
        <div className="p-6 bg-[#FAF8F5] border border-[#E5E0D5] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-elyrion-goldDark font-extrabold">
              Selected: {bundleItemsCount} of 3 Fragrances
            </span>
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
                {formatPrice(discountedBundlePrice)}
              </span>
              {bundleSavings > 0 && (
                <>
                  <span className="text-sm text-[#9CA3AF] line-through">
                    {formatPrice(rawBundlePrice)}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-emerald-700 text-white shadow-sm">
                    YOU SAVE {formatPrice(bundleSavings)}
                  </span>
                </>
              )}
            </div>
            <p className="text-[11px] text-[#6B7280] font-medium">
              {bundleItemsCount < 2
                ? 'Select at least 2 perfumes to unlock bundle discounts.'
                : bundleItemsCount === 2
                ? '20% Duo Discount Applied! Add 1 more to get it 100% Free.'
                : '3rd Perfume Free Applied! Ultimate Paradise Value.'}
            </p>
          </div>

          <button
            onClick={handleAddCustomBundleToCart}
            disabled={bundleItemsCount < 2 || bundleAdded}
            className={`px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
              bundleItemsCount >= 2
                ? 'neu-gold-button shadow-md'
                : 'bg-white border border-[#E0DACE] text-[#9CA3AF] cursor-not-allowed opacity-60'
            }`}
          >
            <FontAwesomeIcon icon={bundleAdded ? faCheck : faBagShopping} />
            <span>
              {bundleAdded
                ? 'Custom Bundle Added to Bag!'
                : `Add ${bundleItemsCount} Perfumes to Bag • ${formatPrice(discountedBundlePrice)}`}
            </span>
          </button>
        </div>

      </div>

    </section>
  );
}
