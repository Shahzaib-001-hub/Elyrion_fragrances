'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Shop by Gender — Editorial Category Portals
 * ============================================================================
 */

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faWandMagicSparkles as faSparkles } from '@fortawesome/free-solid-svg-icons';

const genderCollections = [
  {
    title: 'For Him',
    category: 'MEN',
    tagline: 'Bold, Fresh & Commanding',
    description: 'Calabrian bergamot, smoky Cuban tobacco, aged amber, and oceanic minerals tailored for modern masculine elegance.',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=MEN',
  },
  {
    title: 'Unisex Signature',
    category: 'UNISEX',
    tagline: 'Gourmand & Dark Agarwoods',
    description: 'Boundary-defying extraits of melted Belgian chocolate, Cambodian agarwood, roasted espresso, and warm cardamom.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=UNISEX',
    badge: '35% EXTRAIT OIL',
  },
  {
    title: 'For Her',
    category: 'WOMEN',
    tagline: 'Sensual, Sweet & Soft Florals',
    description: 'Wild strawberry marshmallows, sparkling pink champagne, velvety Damask rose petals, and Tahitian bourbon vanilla.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=WOMEN',
  },
];

export default function ShopByGender() {
  return (
    <section id="gender-section" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] border-y border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-elyrion-gold" />
            Tailored Olfactory Expressions
            <span className="w-8 h-[1px] bg-elyrion-gold" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
            Shop by Collection
          </h2>
          <p className="text-sm text-[#4B5563] leading-relaxed font-light">
            Whether you seek intoxicating feminine sweetness, crisp masculine magnetism, or fluid unisex depth, find your signature persona.
          </p>
        </div>

        {/* 3 Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {genderCollections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-[#D4AF37]/30 hover:border-elyrion-gold transition-all duration-500 flex flex-col justify-end p-7 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(197,155,39,0.22)]"
            >
              {/* Background Image with Zoom */}
              <img
                src={col.image}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.62]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

              {col.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-black bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white uppercase tracking-widest shadow-md flex items-center gap-1.5 border border-white/20">
                    <FontAwesomeIcon icon={faSparkles} className="text-[8.5px]" />
                    {col.badge}
                  </span>
                </div>
              )}

              {/* Content Box */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FCD34D]">
                  {col.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
                  {col.title}
                </h3>
                <p className="text-xs text-white/85 leading-relaxed line-clamp-2 font-light">
                  {col.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FCD34D] group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
