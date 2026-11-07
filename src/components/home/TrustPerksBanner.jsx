'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Pakistan Customer Trust & Perks Banner
 * ============================================================================
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckFast,
  faMoneyBillWave,
  faBottleDroplet,
  faGift,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

const trustPerks = [
  {
    icon: faMoneyBillWave,
    title: 'Cash on Delivery (COD)',
    subtitle: 'Pay at your doorstep in 200+ cities',
    badge: 'NATIONWIDE',
  },
  {
    icon: faBottleDroplet,
    title: '14+ Hours Lasting',
    subtitle: '35% pure oil Extrait de Parfum',
    badge: 'GUARANTEED',
  },
  {
    icon: faGift,
    title: 'Free 5ml Tester',
    subtitle: 'Try first before unsealing full bottle',
    badge: 'EVERY ORDER',
  },
  {
    icon: faTruckFast,
    title: 'Free Express Delivery',
    subtitle: 'On all orders above Rs. 3,500',
    badge: 'FAST 2-4 DAYS',
  },
  {
    icon: faShieldHalved,
    title: '7-Day Easy Exchange',
    subtitle: 'Hassle-free replacement policy',
    badge: '100% SECURE',
  },
];

export default function TrustPerksBanner() {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-[#E8E2D5]/90">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#EFECE4]">
          {trustPerks.map((perk, idx) => (
            <div
              key={perk.title}
              className={`flex items-start gap-3.5 pt-4 md:pt-0 ${
                idx !== 0 ? 'md:pl-4 lg:pl-5' : ''
              }`}
            >
              <div className="w-11 h-11 rounded-2xl bg-[#FAF8F5] border border-elyrion-gold/30 flex items-center justify-center text-elyrion-gold flex-shrink-0 shadow-sm">
                <FontAwesomeIcon icon={perk.icon} className="text-base" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-elyrion-dark tracking-tight">
                  {perk.title}
                </h4>
                <p className="text-[11px] text-elyrion-muted leading-tight">
                  {perk.subtitle}
                </p>
                <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-elyrion-goldDark pt-0.5">
                  {perk.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

