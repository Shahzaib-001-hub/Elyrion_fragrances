'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Shop by Gender — Editorial Category Portals (Light Theme)
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
    description: 'Crisp bergamot, dark smoky tobacco, Cuban amber, and oceanic minerals tailored for modern masculine elegance.',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=MEN',
  },
  {
    title: 'Unisex Signature',
    category: 'UNISEX',
    tagline: 'Gourmand & Dark Agarwoods',
    description: 'Fluid, boundary-defying masterpieces of melted dark chocolate, Cambodian oud, and spiced cardamom for everyone.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=UNISEX',
    badge: 'SIGNATURE EXTRAIT',
  },
  {
    title: 'For Her',
    category: 'WOMEN',
    tagline: 'Sensual, Sweet & Soft Florals',
    description: 'Wild strawberry marshmallows, sparkling pink champagne, Damask roses, and creamy Tahitian vanilla.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop',
    link: '/products?category=WOMEN',
  },
];

export default function ShopByGender() {
  return (
    <section id="gender-section" className="py-20 bg-[#ECE7DC] border-y border-[#DDD7C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
            Tailored Olfactory Expressions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-elyrion-dark">
            Shop by Collection
          </h2>
          <p className="text-xs sm:text-sm text-elyrion-muted leading-relaxed font-light">
            Whether you seek intoxicating feminine sweetness, crisp masculine magnetism, or fluid unisex depth, find your signature persona.
          </p>
        </div>

        {/* 3 Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {genderCollections.map((col) => (
            <Link
              key={col.title}
              href={col.link}
              className="group relative h-[420px] rounded-3xl overflow-hidden neu-flat hover:shadow-neu-lg transition-all duration-500 flex flex-col justify-end p-7 sm:p-8"
            >
              {/* Background Image with Zoom */}
              <img
                src={col.image}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.6]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {col.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold bg-elyrion-gold text-white uppercase tracking-widest shadow-md flex items-center gap-1">
                    <FontAwesomeIcon icon={faSparkles} className="text-[8px]" />
                    {col.badge}
                  </span>
                </div>
              )}

              {/* Content Box */}
              <div className="relative z-10 space-y-2 text-white">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                  {col.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {col.title}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed line-clamp-2 font-light">
                  {col.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
