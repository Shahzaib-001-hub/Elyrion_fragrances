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
    text: 'FREE EXPRESS SHIPPING ACROSS PAKISTAN ON ORDERS ABOVE RS. 3,500',
    highlight: 'DELIVERY NATIONWIDE',
  },
  {
    icon: faCrown,
    text: 'CASH ON DELIVERY (COD) AVAILABLE IN ALL CITIES ACROSS PAKISTAN',
    highlight: 'PAY AT DOORSTEP',
  },
  {
    icon: faGift,
    text: 'TRY RISK-FREE: COMPLIMENTARY 5ML TESTER INCLUDED IN EVERY ORDER',
    highlight: 'FREE TESTER',
  },
  {
    icon: faSparkles,
    text: 'CRAFTED FOR PAKISTANI WEATHER — 35% EXTRAIT OIL WITH 14+ HOURS LASTING',
    highlight: 'EXTRAIT DE PARFUM',
  },
  {
    icon: faGift,
    text: 'BUY 2 PERFUMES & RECEIVE THE 3RD FREE — APPLIED AUTOMATICALLY',
    highlight: 'LIMITED BUNDLE OFFER',
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
    <div className="bg-[#F3EFE6] border-b border-[#E8E2D5] text-elyrion-dark py-2.5 px-4 text-xs tracking-wider transition-all duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[9.5px] font-extrabold bg-white text-elyrion-goldDark uppercase tracking-widest border border-elyrion-gold/40 shadow-sm">
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
