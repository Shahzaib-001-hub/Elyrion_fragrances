'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Live Search Modal Component (Light Theme)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faXmark,
  faWandMagicSparkles as faSparkles,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '@/lib/utils';

const POPULAR_SEARCH_TAGS = [
  'Vanilla',
  'Coffee',
  'Oud',
  'Cardamom',
  'Strawberry',
  'Bergamot',
  'Rose',
  'Chocolate',
  'Gourmand',
  'Fresh',
  'His & Hers',
];

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products?search=${encodeURIComponent(query.trim())}`);
        const data = await res.json();
        if (data.success) {
          setResults(data.products || []);
        }
      } catch (e) {
        console.error('Search error:', e);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-[#F5F2EB] border border-white/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-neu-lg z-10 space-y-5 animate-in fade-in zoom-in-95 duration-200 text-elyrion-dark">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 text-elyrion-gold text-base" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by perfume name, note (e.g. Vanilla, Coffee, Oud), mood..."
            className="w-full pl-12 pr-12 py-3.5 neu-pressed rounded-2xl text-sm text-elyrion-dark placeholder:text-elyrion-subtle focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 text-elyrion-muted hover:text-elyrion-dark p-1"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

        {/* Popular Quick Discovery Pills */}
        <div>
          <span className="text-[10.5px] uppercase tracking-widest text-elyrion-goldDark font-bold block mb-2">
            Trending Note Discovery:
          </span>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCH_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-3 py-1 rounded-xl text-xs neu-button text-elyrion-muted hover:text-elyrion-dark font-medium transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto space-y-3 pt-2">
          {loading ? (
            <div className="text-center py-8 text-xs text-elyrion-muted flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold animate-spin" />
              <span>Exploring Paradise Notes...</span>
            </div>
          ) : query && results.length === 0 ? (
            <div className="text-center py-8 text-xs text-elyrion-muted">
              No fragrances found matching "{query}". Try searching by note like "Vanilla", "Oud", or "Coffee".
            </div>
          ) : (
            results.map((product) => (
              <Link
                key={product._id || product.slug}
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3.5 rounded-2xl neu-flat hover:neu-pressed transition-all group"
              >
                <img
                  src={product.images?.studio || product.image}
                  alt={product.name}
                  className="w-14 h-16 object-cover rounded-xl border border-[#E2DDD2]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[9.5px] font-bold text-elyrion-goldDark uppercase tracking-wider">
                      {product.category}
                    </span>
                    <span className="text-[10px] text-elyrion-subtle">•</span>
                    <span className="text-[10px] text-elyrion-muted truncate font-medium">
                      {product.noteFamily}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-elyrion-dark group-hover:text-elyrion-goldDark transition-colors truncate">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-elyrion-muted italic truncate font-light">
                    "{product.tagline}"
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-elyrion-goldDark font-mono block">
                    {formatPrice(product.salePrice || product.price)}
                  </span>
                  <span className="text-[10px] text-elyrion-goldDark group-hover:translate-x-1 inline-block transition-transform">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
