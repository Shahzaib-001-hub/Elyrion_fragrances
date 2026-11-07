'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * WhatsApp Assistance Concierge (Pakistan E-Commerce)
 * ============================================================================
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923000000000'; // Brand WhatsApp number
  const prefilledMessage = encodeURIComponent(
    'Assalam-o-Alaikum! I have a question regarding ELYRION perfumes & Cash on Delivery.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <aside aria-label="Customer Support" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-emerald-100 text-xs text-elyrion-dark animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium">Need help or advice? <strong>Chat on WhatsApp</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-elyrion-subtle hover:text-elyrion-dark p-1 text-[11px]"
            aria-label="Dismiss advice message"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-2xl"
        aria-label="Order or Inquire on WhatsApp"
        title="Chat with Fragrance Specialist on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </aside>
  );
}

