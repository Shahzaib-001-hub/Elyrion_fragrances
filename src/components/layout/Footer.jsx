'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Neumorphic Luxury Light Footer Component
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles as faSparkles,
  faCrown,
  faShieldHalved,
  faCheck,
  faArrowRight,
  faTruckFast,
  faBottleDroplet,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const noteLinks = [
    { label: 'Vanilla Fragrances', href: '/notes/vanilla' },
    { label: 'Dark Coffee Scents', href: '/notes/coffee' },
    { label: 'Royal Oud Extrait', href: '/notes/oud' },
    { label: 'Sweet Strawberry', href: '/notes/strawberry' },
    { label: 'Spiced Cardamom', href: '/notes/cardamom' },
    { label: 'Calabrian Bergamot', href: '/notes/bergamot' },
    { label: 'Damask Roses', href: '/notes/rose' },
    { label: 'Warm Amber & Tobacco', href: '/notes/amber' },
  ];

  return (
    <footer className="bg-[#EBE6DC] border-t border-[#DDD6C8] text-elyrion-dark pt-16 pb-12 mt-12">
      {/* Brand Pillars Bar - Neumorphic Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6 px-6 neu-flat rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl neu-button flex items-center justify-center text-elyrion-gold text-base">
              <FontAwesomeIcon icon={faBottleDroplet} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-elyrion-dark">35% Extrait Oil</h4>
              <p className="text-[11px] text-elyrion-muted">Lasts 14+ hours on skin</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl neu-button flex items-center justify-center text-elyrion-gold text-base">
              <FontAwesomeIcon icon={faSparkles} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-elyrion-dark">Free Luxury Sample</h4>
              <p className="text-[11px] text-elyrion-muted">Included in every order</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl neu-button flex items-center justify-center text-elyrion-gold text-base">
              <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-elyrion-dark">Express Shipping</h4>
              <p className="text-[11px] text-elyrion-muted">Insulated luxury packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl neu-button flex items-center justify-center text-elyrion-gold text-base">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-elyrion-dark">100% Satisfaction</h4>
              <p className="text-[11px] text-elyrion-muted">Pure artisanal formulas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#D8D1C2]">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-cinzel text-3xl font-black tracking-[0.22em] gold-text-gradient">
                ELYRION
              </span>
              <span className="text-[9.5px] tracking-[0.3em] uppercase text-elyrion-goldDark font-semibold mt-0.5">
                The Fragrance of Paradise
              </span>
            </div>
            <p className="text-xs leading-relaxed text-elyrion-muted max-w-sm font-light">
              Artisanal French & Oriental perfumery crafted with high-concentration natural extracts. ELYRION transcends conventional scents to deliver memorable olfactory journeys.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl neu-button flex items-center justify-center text-elyrion-dark hover:text-elyrion-gold transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl neu-button flex items-center justify-center text-elyrion-dark hover:text-elyrion-gold transition-colors">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl neu-button flex items-center justify-center text-elyrion-dark hover:text-elyrion-gold transition-colors">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl neu-button flex items-center justify-center text-elyrion-dark hover:text-elyrion-gold transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-elyrion-goldDark font-bold mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs text-elyrion-muted font-medium">
              <li><Link href="/#bestsellers" className="hover:text-elyrion-dark transition-colors">Best Sellers</Link></li>
              <li><Link href="/#gender-section" className="hover:text-elyrion-dark transition-colors">Men's Extrait</Link></li>
              <li><Link href="/#gender-section" className="hover:text-elyrion-dark transition-colors">Women's Extrait</Link></li>
              <li><Link href="/#gender-section" className="hover:text-elyrion-dark transition-colors">Unisex Masterpieces</Link></li>
              <li><Link href="/bundles" className="hover:text-elyrion-dark transition-colors">Curated Bundles</Link></li>
              <li><Link href="/quiz" className="hover:text-elyrion-dark transition-colors">Fragrance Finder Quiz</Link></li>
            </ul>
          </div>

          {/* Notes Directory */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-elyrion-goldDark font-bold mb-4">
              Notes Directory
            </h3>
            <ul className="space-y-2.5 text-xs text-elyrion-muted font-medium">
              {noteLinks.slice(0, 6).map((note) => (
                <li key={note.label}>
                  <Link href={note.href} className="hover:text-elyrion-dark transition-colors flex items-center justify-between">
                    <span>{note.label}</span>
                    <span className="text-[10px] text-elyrion-gold font-bold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* VIP Club Signup */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-widest text-elyrion-goldDark font-bold mb-3">
              The Paradise Vault
            </h3>
            <p className="text-xs text-elyrion-muted mb-3 leading-relaxed font-light">
              Join our private olfactory circle for 10% off your first order and exclusive seasonal drops.
            </p>
            {subscribed ? (
              <div className="p-3 neu-pressed rounded-xl text-xs text-elyrion-dark flex items-center gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-emerald-600" />
                <span>Welcome! Code: <strong className="text-elyrion-gold font-bold">PARADISE10</strong></span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-xs text-elyrion-dark placeholder:text-elyrion-subtle focus:outline-none focus:ring-1 focus:ring-elyrion-gold pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 neu-gold-button rounded-lg text-xs font-bold"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-elyrion-muted gap-4">
          <p>© {new Date().getFullYear()} ELYRION Fragrances. All Rights Reserved. Crafted with Extrait Excellence.</p>
          <div className="flex items-center space-x-6 font-medium">
            <Link href="/admin" className="text-elyrion-goldDark font-bold hover:underline">
              Admin Portal
            </Link>
            <Link href="/products" className="hover:text-elyrion-dark">
              Privacy Policy
            </Link>
            <Link href="/products" className="hover:text-elyrion-dark">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
