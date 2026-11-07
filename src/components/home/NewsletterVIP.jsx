'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * VIP Club Newsletter Signup (Section 12 / 13)
 * ============================================================================
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faCheck, faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons';

export default function NewsletterVIP() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="p-8 sm:p-14 rounded-3xl neu-flat text-center space-y-6 relative overflow-hidden">
        
        <div className="w-14 h-14 rounded-2xl bg-elyrion-gold/15 border border-elyrion-gold/30 flex items-center justify-center mx-auto text-elyrion-gold text-2xl shadow-inner">
          <FontAwesomeIcon icon={faCrown} />
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
            Join the ELYRION Club
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-elyrion-dark">
            Get 10% Off Your First Order
          </h2>
          <p className="text-xs sm:text-sm text-elyrion-muted font-light leading-relaxed">
            Subscribe to receive private discount codes, early access to new perfume drops, and exclusive bundle promotions.
          </p>
        </div>

        {submitted ? (
          <div className="p-5 max-w-md mx-auto bg-emerald-500/10 border border-emerald-500/30 text-elyrion-dark rounded-2xl space-y-2 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-center gap-2 text-emerald-700 text-base font-bold">
              <FontAwesomeIcon icon={faCheck} />
              <span>Welcome to ELYRION!</span>
            </div>
            <p className="text-xs text-elyrion-dark font-light">
              Use code at checkout for 10% off: <strong className="text-elyrion-goldDark font-mono text-sm font-bold">PARADISE10</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 neu-pressed rounded-xl text-xs sm:text-sm text-elyrion-dark placeholder:text-elyrion-muted focus:outline-none focus:border-elyrion-gold"
            />
            <button
              type="submit"
              className="px-8 py-4 neu-gold-button text-elyrion-dark font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get 10% Off</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </button>
          </form>
        )}

        <div className="pt-2 flex items-center justify-center gap-4 sm:gap-6 text-[11px] text-elyrion-muted flex-wrap">
          <span className="flex items-center gap-1.5">
            <FontAwesomeIcon icon={faGift} className="text-elyrion-gold text-[10px]" />
            Free 5ml Tester Included
          </span>
          <span>•</span>
          <span>Cash on Delivery Nationwide</span>
          <span>•</span>
          <span>No Spam Ever</span>
        </div>

      </div>
    </section>
  );
}

