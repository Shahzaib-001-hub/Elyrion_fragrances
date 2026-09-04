'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * "Find Your Signature Scent" — Interactive Quiz (Light Theme)
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles as faSparkles,
  faCrown,
  faCheck,
  faRotateLeft,
  faBagShopping,
  faArrowRight,
  faHeart,
  faFire,
  faDroplet,
  faLeaf,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function SignatureScentQuiz({ products = [] }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFamily, setSelectedFamily] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedIntensity, setSelectedIntensity] = useState('');
  const [resultProduct, setResultProduct] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleCalculateMatch = () => {
    let match = products.find((p) => {
      if (selectedFamily === 'Sweet' && p.noteFamily?.includes('Sweet')) return true;
      if (selectedFamily === 'Deep & Intense' && p.noteFamily?.includes('Deep')) return true;
      if (selectedFamily === 'Fresh' && p.noteFamily?.includes('Fresh')) return true;
      if (selectedFamily === 'Floral' && p.noteFamily?.includes('Floral')) return true;
      return false;
    });

    if (!match) match = products[0];
    setResultProduct(match);
    setCurrentStep(4);
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setSelectedFamily('');
    setSelectedOccasion('');
    setSelectedIntensity('');
    setResultProduct(null);
    setAdded(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="p-8 sm:p-14 rounded-3xl neu-flat space-y-8 relative overflow-hidden">
        
        {/* Step Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-xs" />
            <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
              Olfactory Diagnostic Finder
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-elyrion-dark">
            Find Your Signature Scent
          </h2>
          <p className="text-xs sm:text-sm text-elyrion-muted font-light">
            Answer 3 quick sensory questions to receive your tailored extrait recommendation.
          </p>
        </div>

        {/* Step Progress Bar */}
        {currentStep <= 3 && (
          <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                  currentStep >= step ? 'bg-elyrion-gold' : 'neu-pressed'
                }`}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Fragrance Family */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="font-serif text-lg text-center text-elyrion-dark font-bold">
              Step 1 of 3: What kind of fragrance note profiles do you crave?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Sweet & Gourmand', value: 'Sweet', desc: 'Belgian Chocolate, Bourbon Vanilla, Marshmallow & Coffee', icon: faHeart },
                { name: 'Deep & Intense', value: 'Deep & Intense', desc: 'Cambodian Oud, Spiced Cardamom, Amber & Tobacco', icon: faMoon },
                { name: 'Fresh & Clean', value: 'Fresh', desc: 'Calabrian Bergamot, Sea Salt, Lemon & Spearmint', icon: faDroplet },
                { name: 'Floral & Romantic', value: 'Floral', desc: 'Damask Roses, Night Jasmine & Pink Champagne', icon: faLeaf },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSelectedFamily(opt.value);
                    setCurrentStep(2);
                  }}
                  className="p-6 rounded-2xl neu-button text-left transition-all group"
                >
                  <FontAwesomeIcon icon={opt.icon} className="text-elyrion-gold text-xl mb-3" />
                  <h4 className="font-serif text-base font-bold text-elyrion-dark group-hover:text-elyrion-goldDark transition-colors">
                    {opt.name}
                  </h4>
                  <p className="text-xs text-elyrion-muted mt-1 leading-relaxed font-light">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Occasion */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-elyrion-muted hover:text-elyrion-dark font-bold"
              >
                ← Back
              </button>
              <h3 className="font-serif text-lg text-center text-elyrion-dark font-bold">
                Step 2 of 3: Where will you wear this perfume most?
              </h3>
              <div className="w-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Everyday Signature', value: 'Everyday', desc: 'Work, casual luxury, daily compliment magnet' },
                { label: 'Date Night & Intimate Romance', value: 'DateNight', desc: 'Intoxicating warmth, closeness, captivating charm' },
                { label: 'Black Tie & Power Occasions', value: 'Formal', desc: 'Royal presence, unforgettable sillage, luxury statements' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSelectedOccasion(opt.value);
                    setCurrentStep(3);
                  }}
                  className="p-6 rounded-2xl neu-button text-left transition-all group"
                >
                  <h4 className="font-serif text-base font-bold text-elyrion-dark group-hover:text-elyrion-goldDark transition-colors">
                    {opt.label}
                  </h4>
                  <p className="text-xs text-elyrion-muted mt-2 font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Sillage Intensity */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-elyrion-muted hover:text-elyrion-dark font-bold"
              >
                ← Back
              </button>
              <h3 className="font-serif text-lg text-center text-elyrion-dark font-bold">
                Step 3 of 3: How intense do you like your fragrance aura?
              </h3>
              <div className="w-8" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Moderate & Elegant', value: 'Moderate', desc: 'Gentle projection, intimate skin scent (8-10 hours)' },
                { label: 'Intense & Radiating', value: 'Intense', desc: 'Leaves a noticeable scent trail in every room (12-14 hours)' },
                { label: 'Powerhouse Extrait', value: 'Enormous', desc: 'Maximum sillage and staying power (16+ hours)' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSelectedIntensity(opt.value);
                    handleCalculateMatch();
                  }}
                  className="p-6 rounded-2xl neu-button text-left transition-all group"
                >
                  <h4 className="font-serif text-base font-bold text-elyrion-dark group-hover:text-elyrion-goldDark transition-colors">
                    {opt.label}
                  </h4>
                  <p className="text-xs text-elyrion-muted mt-2 font-light leading-relaxed">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Personalized Match Result */}
        {currentStep === 4 && resultProduct && (
          <div className="space-y-6 animate-in zoom-in-95 duration-500">
            <div className="p-6 sm:p-8 neu-pressed rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Product Visual */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden neu-flat bg-[#EAE5DB]">
                <img
                  src={resultProduct.images?.studio || resultProduct.image}
                  alt={resultProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-elyrion-gold text-white uppercase tracking-widest shadow-md">
                    YOUR PERFECT MATCH
                  </span>
                </div>
              </div>

              {/* Match Story & Notes */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-elyrion-goldDark font-extrabold">
                    100% Olfactory Compatibility
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-elyrion-dark mt-1">
                    {resultProduct.name}
                  </h3>
                  <p className="text-xs text-elyrion-muted italic font-serif mt-1 font-light">
                    "{resultProduct.tagline}"
                  </p>
                </div>

                <div className="p-3.5 neu-flat rounded-xl space-y-1 text-xs">
                  <span className="text-[10.5px] uppercase tracking-wider text-elyrion-goldDark font-bold">
                    Key Olfactory Accord:
                  </span>
                  <p className="text-elyrion-dark font-medium">
                    {[
                      ...(resultProduct.notes?.topNotes || []),
                      ...(resultProduct.notes?.heartNotes || []),
                    ].join(' • ')}
                  </p>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-bold text-elyrion-goldDark">
                    {formatPrice(resultProduct.salePrice || resultProduct.price)}
                  </span>
                  <span className="text-xs text-elyrion-muted font-mono font-medium">
                    50ml Extrait (35% Oil Concentration)
                  </span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => {
                      addToCart(resultProduct, 1);
                      setAdded(true);
                      setTimeout(() => setAdded(false), 1500);
                    }}
                    disabled={added}
                    className="flex-1 py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={added ? faCheck : faBagShopping} />
                    <span>{added ? 'Added to Fragrance Bag!' : 'Claim Your Match'}</span>
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="px-5 py-4 neu-button text-elyrion-dark hover:text-elyrion-gold rounded-xl text-xs uppercase tracking-wider font-bold flex items-center gap-1.5"
                  >
                    <FontAwesomeIcon icon={faRotateLeft} />
                    <span>Retake</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
