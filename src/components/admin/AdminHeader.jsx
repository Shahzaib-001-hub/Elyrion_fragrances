'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Admin Dashboard Top Header Bar
 * ============================================================================
 */

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

export default function AdminHeader({ title, subtitle }) {
  return (
    <header className="h-20 bg-white border-b border-[#E8E2D5] px-6 sm:px-8 flex items-center justify-between shadow-sm">
      <div>
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-elyrion-dark">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-elyrion-muted font-light mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center space-x-3">
        {/* View Storefront Link */}
        <Link
          href="/"
          target="_blank"
          className="px-3.5 py-2 rounded-xl border border-[#E2DDD2] bg-[#FAF8F5] hover:bg-white text-xs text-elyrion-dark transition-all flex items-center gap-1.5 font-semibold shadow-sm"
          title="Open live customer store in new tab"
        >
          <FontAwesomeIcon icon={faEye} className="text-elyrion-goldDark text-xs" />
          <span className="hidden sm:inline">View Store</span>
        </Link>

        {/* Add Product Shortcut */}
        <Link
          href="/admin/products/new"
          className="px-4 py-2 neu-gold-button text-elyrion-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-md"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>New Perfume</span>
        </Link>
      </div>
    </header>
  );
}
