'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Admin Dashboard Top Header Bar
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faWandMagicSparkles as faSparkles,
  faDatabase,
  faCheck,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

export default function AdminHeader({ title, subtitle }) {
  const [seeding, setSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);

  const handleSeedDatabase = async () => {
    if (!confirm('Re-seed the MongoDB database with initial ELYRION perfumes and categories?')) {
      return;
    }

    setSeeding(true);
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setSeedSuccess(true);
        setTimeout(() => {
          setSeedSuccess(false);
          window.location.reload();
        }, 1200);
      } else {
        alert('Seed failed: ' + data.error);
      }
    } catch (e) {
      alert('Error: ' + e.message);
    } finally {
      setSeeding(false);
    }
  };

  return (
    <header className="h-20 bg-[#ECE8DF] border-b border-[#DCD6C8] px-6 sm:px-8 flex items-center justify-between shadow-[0_2px_10px_rgba(180,172,155,0.1)]">
      <div>
        <h1 className="font-serif text-xl sm:text-2xl font-bold text-elyrion-charcoal">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs text-elyrion-muted font-light">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center space-x-3">
        {/* Re-seed / Sync Button */}
        <button
          onClick={handleSeedDatabase}
          disabled={seeding || seedSuccess}
          className="px-3.5 py-2 rounded-xl neu-button text-xs text-elyrion-charcoal transition-colors flex items-center gap-1.5 font-medium"
          title="Seed MongoDB database with default catalog"
        >
          <FontAwesomeIcon
            icon={seedSuccess ? faCheck : faDatabase}
            className={seedSuccess ? 'text-emerald-600' : 'text-elyrion-gold'}
          />
          <span className="hidden sm:inline">
            {seeding ? 'Syncing...' : seedSuccess ? 'Database Synced!' : 'Sync / Seed DB'}
          </span>
        </button>

        {/* Add Product Shortcut */}
        <Link
          href="/admin/products/new"
          className="px-4 py-2 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-md"
        >
          <FontAwesomeIcon icon={faPlus} />
          <span>New Perfume</span>
        </Link>
      </div>
    </header>
  );
}

