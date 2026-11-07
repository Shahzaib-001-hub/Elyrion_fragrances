'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Customer Reviews & Social Proof Section (Section 10)
 * ============================================================================
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCircleCheck,
  faQuoteLeft,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { seedReviews } from '@/lib/seedData';

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
          Tested & Loved Across Pakistan
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-elyrion-dark">
          What Our Customers Say
        </h2>
        <p className="text-xs sm:text-sm text-elyrion-muted font-light leading-relaxed">
          Real reviews from fragrance lovers in Karachi, Lahore, Islamabad, and across Pakistan who wear ELYRION daily.
        </p>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {seedReviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl neu-flat-hover flex flex-col justify-between space-y-6 relative group"
          >
            <FontAwesomeIcon icon={faQuoteLeft} className="text-elyrion-gold/20 text-4xl absolute top-6 right-6" />

            <div className="space-y-4 relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                {[...Array(rev.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>

              {/* Fragrance Reviewed Tag */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-elyrion-gold/10 text-elyrion-goldDark border border-elyrion-gold/30">
                  {rev.perfume}
                </span>
                <span className="text-[10px] text-elyrion-muted font-mono flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} className="text-elyrion-gold text-[9px]" />
                  {rev.longevityScore}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-elyrion-dark leading-relaxed font-light italic">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-elyrion-gold/15 border border-elyrion-gold/40 flex items-center justify-center text-elyrion-goldDark font-serif font-bold text-xs shadow-inner">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-elyrion-dark block text-xs">
                    {rev.author} {rev.city && <span className="text-elyrion-muted font-normal">({rev.city})</span>}
                  </span>
                  <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-medium">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[9px]" /> Verified Buyer
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-elyrion-muted font-mono">{rev.date}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

