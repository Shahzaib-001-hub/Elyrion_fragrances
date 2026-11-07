'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Fragrance Catalog Page (/products)
 * ============================================================================
 */

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faSliders,
  faWandMagicSparkles as faSparkles,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import ProductCard from '@/components/ui/ProductCard';
import QuickViewModal from '@/components/ui/QuickViewModal';
import { seedProducts } from '@/lib/seedData';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';
  const initialFamily = searchParams.get('noteFamily') || 'ALL';
  const initialFilter = searchParams.get('filter') || '';

  const [products, setProducts] = useState(seedProducts);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFamily, setSelectedFamily] = useState(initialFamily);
  const [selectedMood, setSelectedMood] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success && data.products?.length > 0) {
          setProducts(data.products);
        }
      } catch (err) {
        console.warn('API fetch error, using local dataset:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter Logic
  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'ALL' && p.category?.toUpperCase() !== selectedCategory.toUpperCase()) {
      return false;
    }
    if (selectedFamily !== 'ALL' && p.noteFamily !== selectedFamily) {
      return false;
    }
    if (selectedMood !== 'ALL' && !p.moods?.includes(selectedMood)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name?.toLowerCase().includes(q);
      const matchTagline = p.tagline?.toLowerCase().includes(q);
      const matchNotes = [
        ...(p.notes?.topNotes || []),
        ...(p.notes?.heartNotes || []),
        ...(p.notes?.baseNotes || []),
      ].some((n) => n.toLowerCase().includes(q));
      if (!matchName && !matchTagline && !matchNotes) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedFamily('ALL');
    setSelectedMood('ALL');
    setSearchQuery('');
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
          The Extrait Collection • Pakistan
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-elyrion-dark">
          All Fragrances
        </h1>
        <p className="text-xs sm:text-sm text-elyrion-muted font-light leading-relaxed">
          High-concentration Extrait de Parfum (35% pure perfume oils) formulated for 14+ hours of projection in Pakistani weather. Cash on Delivery available nationwide with a free 5ml tester in every box.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="p-6 rounded-3xl bg-white border border-[#E8E2D5] shadow-sm space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Gender Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-elyrion-goldDark mb-1.5">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD2] rounded-xl text-xs text-elyrion-dark font-medium focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            >
              <option value="ALL">All Categories</option>
              <option value="UNISEX">Unisex</option>
              <option value="MEN">Men</option>
              <option value="WOMEN">Women</option>
            </select>
          </div>

          {/* Note Family Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-elyrion-goldDark mb-1.5">
              Fragrance Note Family
            </label>
            <select
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD2] rounded-xl text-xs text-elyrion-dark font-medium focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            >
              <option value="ALL">All Note Families</option>
              <option value="Sweet & Dessert-Inspired">Sweet & Dessert-Inspired</option>
              <option value="Deep, Dark & Intense">Deep, Dark & Intense</option>
              <option value="Fresh & Clean">Fresh & Clean</option>
              <option value="Floral & Romantic">Floral & Romantic</option>
            </select>
          </div>

          {/* Mood Filter */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-elyrion-goldDark mb-1.5">
              Mood & Persona
            </label>
            <select
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD2] rounded-xl text-xs text-elyrion-dark font-medium focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            >
              <option value="ALL">All Moods</option>
              <option value="Romantic">Romantic</option>
              <option value="Confident">Confident</option>
              <option value="Mysterious">Mysterious</option>
              <option value="Playful">Playful</option>
              <option value="Powerful">Powerful</option>
              <option value="Calm">Calm</option>
              <option value="Fresh">Fresh</option>
              <option value="Seductive">Seductive</option>
            </select>
          </div>

          {/* Search by Keyword */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-elyrion-goldDark mb-1.5">
              Search by Note / Name
            </label>
            <input
              type="text"
              placeholder="e.g. Vanilla, Coffee, Oud..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E2DDD2] rounded-xl text-xs text-elyrion-dark placeholder:text-elyrion-subtle font-medium focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

        </div>

        {/* Results count & reset */}
        <div className="pt-3 border-t border-[#EFECE4] flex items-center justify-between text-xs text-elyrion-muted">
          <span>Showing <strong>{filteredProducts.length}</strong> of {products.length} Fragrances</span>
          <button
            onClick={resetFilters}
            className="text-elyrion-goldDark font-bold hover:underline flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faRotateLeft} className="text-[10px]" />
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 space-y-4 bg-white border border-[#E8E2D5] rounded-3xl shadow-sm">
          <p className="text-sm text-elyrion-muted font-light">No fragrances matched your selected filters.</p>
          <button
            onClick={resetFilters}
            className="px-7 py-3.5 neu-gold-button text-elyrion-dark text-xs font-bold uppercase tracking-wider rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id || product.slug}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}

    </div>
  );
}

export default function ProductsCatalogPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-elyrion-muted">Loading Paradise Catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}
