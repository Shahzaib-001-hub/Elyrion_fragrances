'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * "Notes You Love" Direct Navigation Pills
 * ============================================================================
 */

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles as faSparkles, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const notePills = [
  { note: 'Vanilla', label: 'Love Vanilla?', desc: 'Creamy Bourbon & Tahitian Vanilla', count: '4 Scents', href: '/notes/vanilla' },
  { note: 'Coffee', label: 'Love Coffee?', desc: 'Dark Roasted Espresso & Mocha', count: '3 Scents', href: '/notes/coffee' },
  { note: 'Oud', label: 'Love Oud?', desc: 'Cambodian & Royal Agarwood', count: '4 Scents', href: '/notes/oud' },
  { note: 'Strawberry', label: 'Love Strawberry?', desc: 'Wild Strawberry & Marshmallow', count: '2 Scents', href: '/notes/strawberry' },
  { note: 'Cardamom', label: 'Love Cardamom?', desc: 'Green Spiced Warmth', count: '3 Scents', href: '/notes/cardamom' },
  { note: 'Bergamot', label: 'Love Bergamot?', desc: 'Calabrian Sunlit Citrus', count: '3 Scents', href: '/notes/bergamot' },
  { note: 'Rose', label: 'Love Rose?', desc: 'Velvet Damask Rose & Lychee', count: '3 Scents', href: '/notes/rose' },
  { note: 'Chocolate', label: 'Love Chocolate?', desc: 'Belgian Dark Cocoa & Praline', count: '2 Scents', href: '/notes/chocolate' },
];

export default function NotesYouLove() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E0D5] space-y-8 relative overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-xs" />
              <span className="text-xs uppercase tracking-[0.2em] text-elyrion-goldDark font-extrabold">
                Direct Olfactory Search
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#111827]">
              Notes You Love
            </h3>
          </div>
          <p className="text-sm text-[#4B5563] max-w-md font-light leading-relaxed">
            Already know your favorite aroma? Click directly into our curated note vaults to discover extraits built around the scents you love most.
          </p>
        </div>

        {/* Note Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {notePills.map((item) => (
            <Link
              key={item.note}
              href={item.href}
              className="group p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5E0D5] flex flex-col justify-between hover:border-elyrion-gold hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm sm:text-base font-serif font-bold text-[#111827] group-hover:text-elyrion-goldDark transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-elyrion-goldDark font-mono font-bold bg-elyrion-gold/15 px-2 py-0.5 rounded-full border border-elyrion-gold/25">
                    {item.count}
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E0D5] flex items-center justify-between text-xs text-elyrion-goldDark font-bold uppercase tracking-wider">
                <span>Shop {item.note}</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs group-hover:translate-x-1.5 transition-transform"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
