'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * "What's Your Mood?" & "Choose Your Vibe"
 * ============================================================================
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faCrown,
  faMoon,
  faWandMagicSparkles as faSparkles,
  faShieldHalved,
  faLeaf,
  faDroplet,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/ui/ProductCard';

const moodsList = [
  { name: 'Romantic', icon: faHeart, color: 'text-rose-600', desc: 'Soft florals & warm vanilla' },
  { name: 'Confident', icon: faCrown, color: 'text-amber-600', desc: 'Commanding spices & woods' },
  { name: 'Mysterious', icon: faMoon, color: 'text-indigo-600', desc: 'Dark smoky oud & leather' },
  { name: 'Playful', icon: faSparkles, color: 'text-pink-600', desc: 'Sweet strawberry & marshmallow' },
  { name: 'Powerful', icon: faShieldHalved, color: 'text-yellow-600', desc: 'Intense agarwood powerhouse' },
  { name: 'Calm', icon: faLeaf, color: 'text-emerald-600', desc: 'Clean musk & green tea' },
  { name: 'Fresh', icon: faDroplet, color: 'text-cyan-600', desc: 'Calabrian bergamot & sea salt' },
  { name: 'Seductive', icon: faFire, color: 'text-red-600', desc: 'Roasted coffee & chocolate' },
];

const vibesList = [
  { name: 'The Sweet One', desc: 'For pure gourmand & dessert lovers', tag: 'Chocolate & Marshmallow' },
  { name: 'The Mysterious One', desc: 'For dark, deep, and smoky signatures', tag: 'Tobacco & Amber' },
  { name: 'The Clean One', desc: 'For crisp, airy, and effortless aura', tag: 'Bergamot & Citrus' },
  { name: 'The Romantic One', desc: 'For tender florals & soft moments', tag: 'Damask Rose & Jasmine' },
  { name: 'The Bold One', desc: 'For intense, commanding sillage', tag: 'Cambodian Oud & Cardamom' },
];

export default function MoodVibeSection({ products = [], onQuickView }) {
  const [selectedMood, setSelectedMood] = useState('Romantic');
  const [selectedVibe, setSelectedVibe] = useState(null);

  const matchedProducts = products.filter((p) => {
    if (selectedVibe) {
      return p.vibe === selectedVibe;
    }
    return p.moods?.includes(selectedMood);
  });

  return (
    <section id="mood-section" className="py-24 bg-[#FAF8F5] border-y border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION A: What's Your Mood? */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-elyrion-gold" />
              Emotional Perfumery
              <span className="w-8 h-[1px] bg-elyrion-gold" />
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
              What’s Your Mood Today?
            </h2>
            <p className="text-sm text-[#4B5563] font-light">
              Fragrance is an extension of emotion. Select how you want to feel and let our alchemy guide you.
            </p>
          </div>

          {/* Mood Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {moodsList.map((m) => {
              const isSelected = selectedMood === m.name && !selectedVibe;
              return (
                <button
                  key={m.name}
                  onClick={() => {
                    setSelectedMood(m.name);
                    setSelectedVibe(null);
                  }}
                  className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-white border-2 border-elyrion-gold text-elyrion-goldDark shadow-[0_6px_20px_rgba(197,155,39,0.22)] -translate-y-1'
                      : 'bg-white border border-[#E5E0D5] text-[#4B5563] hover:border-elyrion-gold/60 hover:-translate-y-0.5 shadow-sm'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={m.icon}
                    className={`text-xl mb-2 ${isSelected ? 'text-elyrion-gold' : m.color}`}
                  />
                  <span className={`text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-elyrion-goldDark' : 'text-[#111827]'}`}>
                    {m.name}
                  </span>
                  <span className="text-[9.5px] text-[#6B7280] mt-1 leading-tight hidden sm:block font-light">
                    {m.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION B: Choose Your Vibe */}
        <div className="space-y-6 pt-6 border-t border-[#E5E0D5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-elyrion-goldDark font-extrabold">
                Signature Persona
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
                Choose Your Vibe
              </h3>
            </div>
            {selectedVibe && (
              <button
                onClick={() => setSelectedVibe(null)}
                className="text-xs text-elyrion-goldDark font-bold hover:underline self-start sm:self-auto"
              >
                Clear Vibe Filter ×
              </button>
            )}
          </div>

          {/* Vibe Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {vibesList.map((v) => {
              const isVibeActive = selectedVibe === v.name;
              return (
                <button
                  key={v.name}
                  onClick={() => {
                    setSelectedVibe(isVibeActive ? null : v.name);
                  }}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between ${
                    isVibeActive
                      ? 'bg-white border-2 border-elyrion-gold text-[#111827] shadow-[0_6px_20px_rgba(197,155,39,0.22)] -translate-y-1'
                      : 'bg-white border border-[#E5E0D5] text-[#111827] hover:border-elyrion-gold/60 hover:-translate-y-0.5 shadow-sm'
                  }`}
                >
                  <div>
                    <span className={`text-[9.5px] uppercase font-bold tracking-widest block mb-1 ${isVibeActive ? 'text-elyrion-goldDark' : 'text-elyrion-gold'}`}>
                      {v.tag}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#111827]">
                      {v.name}
                    </h4>
                  </div>
                  <p className="text-xs mt-2 text-[#6B7280] font-light leading-relaxed">
                    {v.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Fragrance Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3">
            <h4 className="text-xs uppercase tracking-widest text-elyrion-goldDark font-bold">
              Curated for: {selectedVibe ? selectedVibe : `Mood "${selectedMood}"`}
            </h4>
            <span className="text-xs text-[#6B7280] font-mono font-medium">
              {(matchedProducts.length > 0 ? matchedProducts : products).length} Fragrances Found
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9">
            {(matchedProducts.length > 0 ? matchedProducts : products.slice(0, 3)).map((product) => (
              <ProductCard
                key={product._id || product.slug}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
