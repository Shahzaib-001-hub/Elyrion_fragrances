'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Rotating Luxury Announcement Ticker (Light Theme)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles as faSparkles,
  faTruckFast,
  faGift,
  faCrown,
} from '@fortawesome/free-solid-svg-icons';

const announcements = [
  {
    icon: faTruckFast,
    text: 'COMPLIMENTARY EXPRESS SHIPPING ON ALL ORDERS ABOVE RS. 3,500',
    highlight: 'LIMITED TIME',
  },
  {
    icon: faGift,
    text: 'BUY 2 PERFUMES & RECEIVE THE 3RD FREE — AUTOMATIC AT CHECKOUT',
    highlight: 'PARADISE OFFER',
  },
  {
    icon: faCrown,
    text: 'FREE 5ML LUXURY EXTRAIT SAMPLE WITH EVERY FULL BOTTLE ORDER',
    highlight: 'VIP PERK',
  },
  {
    icon: faSparkles,
    text: 'HIGH CONCENTRATION EXTRAIT DE PARFUM (35% OIL) — 14+ HOUR LONGEVITY',
    highlight: 'ARTISANAL LUXURY',
  },
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = announcements[index];

  return (
    <div className="bg-[#ECE7DC] border-b border-[#DDD7C8] text-elyrion-dark py-2 px-4 text-xs tracking-wider transition-all duration-500 overflow-hidden relative shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9.5px] font-extrabold bg-[#F8F5EE] text-elyrion-goldDark uppercase tracking-widest border border-elyrion-gold/30 shadow-sm">
          {current.highlight}
        </span>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={current.icon} className="text-elyrion-gold text-[11px]" />
          <span className="font-semibold uppercase tracking-[0.14em] text-[10.5px] sm:text-[11.5px] text-elyrion-dark">
            {current.text}
          </span>
        </div>
      </div>
    </div>
  );
}
