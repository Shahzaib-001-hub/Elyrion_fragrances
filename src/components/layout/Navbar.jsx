'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Neumorphic Luxury Navbar with Centered Logo
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faBars,
  faXmark,
  faWandMagicSparkles as faSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const leftNavLinks = [
    { name: 'Best Sellers', href: '/#bestsellers' },
    { name: 'Shop by Notes', href: '/#notes-family' },
    { name: 'Collections', href: '/#gender-section' },
  ];

  const rightNavLinks = [
    { name: 'Mood & Vibe', href: '/#mood-section' },
    { name: 'Bundles & Sets', href: '/bundles' },
    { name: 'Scent Finder', href: '/quiz' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D5]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EFECE4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-24">
          
          {/* LEFT NAV (Desktop) & Mobile Hamburger */}
          <div className="flex items-center">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl neu-button text-elyrion-dark hover:text-elyrion-gold transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-lg" />
            </button>

            {/* Desktop Left Nav Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-[0.18em] font-semibold text-elyrion-muted">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-elyrion-gold transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-elyrion-gold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER LOGO — Prominently Centered with Royal Serif Typography */}
          <div className="flex flex-col items-center justify-center text-center">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl tracking-[0.25em] font-black gold-text-gradient group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                ELYRION
              </span>
              <span className="text-[8px] sm:text-[9.5px] tracking-[0.35em] uppercase text-elyrion-muted font-medium mt-0.5">
                The Fragrance of Paradise
              </span>
            </Link>
          </div>

          {/* RIGHT NAV (Desktop) & Utility Actions */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-4">
            {/* Desktop Right Nav Links */}
            <nav className="hidden xl:flex items-center space-x-6 text-xs uppercase tracking-[0.18em] font-semibold text-elyrion-muted mr-3">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-elyrion-gold transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-elyrion-gold"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Neumorphic Search Button */}
            <button
              onClick={onOpenSearch}
              className="w-10 h-10 rounded-xl neu-button text-elyrion-dark hover:text-elyrion-gold flex items-center justify-center transition-all"
              title="Search Fragrances by Note or Mood"
              aria-label="Search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
            </button>

            {/* Neumorphic Wishlist Button */}
            <Link
              href="/products?filter=wishlist"
              className="w-10 h-10 rounded-xl neu-button text-elyrion-dark hover:text-elyrion-gold hidden sm:flex items-center justify-center relative transition-all"
              title="Saved Fragrances"
            >
              <FontAwesomeIcon icon={faHeart} className="text-sm" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-elyrion-ruby text-[9px] text-white font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </Link>



            {/* Neumorphic Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3.5 py-2.5 rounded-xl neu-gold-button font-bold flex items-center justify-center gap-2"
              aria-label="Shopping Bag"
            >
              <FontAwesomeIcon icon={faBagShopping} className="text-sm" />
              <span className="text-xs font-bold font-mono">
                {totalItemsCount}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-6 py-6 space-y-3 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {[...leftNavLinks, ...rightNavLinks].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-bold text-elyrion-dark hover:text-elyrion-gold py-2.5 px-3 rounded-xl neu-button flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-elyrion-gold text-xs">→</span>
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
