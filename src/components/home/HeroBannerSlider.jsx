'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Triple Banner Hero System (Light Theme)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faWandMagicSparkles as faSparkles,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

const banners = [
  {
    id: 1,
    badge: 'MOST POPULAR IN PAKISTAN',
    tag: 'BEST SELLERS',
    title: 'Luxury Perfumes That Last All Day & Night',
    subtitle: 'Crafted with 35% pure perfume oils for extraordinary projection. Tested to last 14+ hours in Pakistani weather. Cash on Delivery available nationwide.',
    ctaText: 'Shop Best Sellers',
    ctaLink: '#bestsellers',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600&auto=format&fit=crop',
    perk: '35% Extrait Oil • 14+ Hours Lasting',
  },
  {
    id: 2,
    badge: 'LIMITED TIME OFFER',
    tag: 'BUY 2 GET 1 FREE',
    title: 'Buy Any 2 Fragrances & Receive The 3rd Free',
    subtitle: 'Add 3 perfumes to your cart and the 3rd is 100% free. Every order includes a complimentary 5ml tester bottle so you can test before breaking the box seal.',
    ctaText: 'Claim 3-Bottle Deal',
    ctaLink: '#offers-section',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600&auto=format&fit=crop',
    perk: 'Free 5ml Tester In Every Order',
  },
  {
    id: 3,
    badge: 'LUXURY BUNDLES',
    tag: 'SAVE UP TO 30%',
    title: 'Curated Perfume Sets & His & Hers Duos',
    subtitle: 'The perfect gift for weddings, birthdays, and anniversaries. Explore our top pairs: Coffee & Vanilla Gourmands, Royal Oud & Cardamom, and Crisp Summer Florals.',
    ctaText: 'Explore Perfume Bundles',
    ctaLink: '/bundles',
    image: 'https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=1600&auto=format&fit=crop',
    perk: 'Nationwide Cash On Delivery',
  },
];

export default function HeroBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const slide = banners[currentSlide];

  return (
    <section className="relative w-full h-[600px] sm:h-[660px] lg:h-[700px] overflow-hidden bg-[#EFECE4]">
      {/* Slide Images with Crossfade */}
      {banners.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center brightness-[0.55]"
          />
          {/* Soft Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left-6 duration-700 text-white">
          
          {/* Badge & Tag */}
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-elyrion-gold text-white shadow-md flex items-center gap-1.5">
              <FontAwesomeIcon icon={faSparkles} className="text-[9px]" />
              {slide.tag}
            </span>
            <span className="text-xs font-mono text-amber-200 tracking-wider uppercase font-semibold hidden sm:inline">
              {slide.perk}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight drop-shadow-md">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed font-light max-w-xl drop-shadow">
            {slide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={slide.ctaLink}
              className="px-7 sm:px-9 py-4 neu-gold-button font-bold text-xs sm:text-sm uppercase tracking-widest rounded-2xl flex items-center gap-2 group"
            >
              <span>{slide.ctaText}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </Link>

            <Link
              href="/quiz"
              className="px-6 sm:px-8 py-4 bg-white/90 hover:bg-white text-elyrion-dark font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <FontAwesomeIcon icon={faCrown} className="text-elyrion-gold text-xs" />
              <span>Take Scent Finder Quiz</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Manual Slide Controls & Indicators */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center space-x-3">
        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md text-elyrion-dark hover:text-elyrion-gold flex items-center justify-center transition-colors shadow-md"
          aria-label="Previous banner"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-elyrion-gold' : 'w-2 bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md text-elyrion-dark hover:text-elyrion-gold flex items-center justify-center transition-colors shadow-md"
          aria-label="Next banner"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
        </button>
      </div>

    </section>
  );
}
