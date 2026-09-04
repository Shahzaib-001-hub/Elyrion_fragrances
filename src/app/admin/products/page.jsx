'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Perfume Catalog Manager (/admin/products) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faBoxesStacked,
  faEye,
  faWandMagicSparkles as faSparkles,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { seedProducts } from '@/lib/seedData';
import { formatPKR } from '@/lib/utils';

export default function AdminProductsPage() {
  const [products, setProducts] = useState(seedProducts);
  const [search, setSearch] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (data.success && data.products?.length > 0) {
          setProducts(data.products);
        }
      } catch (e) {
        console.warn('Products fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleDeleteProduct = async (id, name) => {
    if (!confirm(`Are you sure you want to remove "${name}" from the ELYRION catalog?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setProducts((prev) => prev.filter((p) => (p._id || p.slug) !== id));
      } else {
        alert('Delete failed: ' + data.error);
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.noteFamily?.toLowerCase().includes(search.toLowerCase());
    const matchesFamily = selectedFamily === 'ALL' || p.noteFamily === selectedFamily;
    return matchesSearch && matchesFamily;
  });

  const families = ['ALL', 'Sweet & Dessert-Inspired', 'Deep, Dark & Intense', 'Fresh & Clean', 'Floral & Romantic'];

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Perfume & Extrait Catalog"
        subtitle="Manage formulations, pricing, stock levels, olfactory pyramids, and Google SEO metadata."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        
        {/* Search & Filter Header Bar */}
        <div className="p-6 neu-flat rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-elyrion-muted text-xs"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by perfume name or notes..."
              className="w-full pl-10 pr-4 py-2.5 neu-pressed rounded-xl text-xs text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {families.map((fam) => (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all ${
                  selectedFamily === fam
                    ? 'neu-gold-button text-white font-bold shadow-sm'
                    : 'neu-button text-elyrion-charcoal hover:border-elyrion-gold'
                }`}
              >
                {fam === 'ALL' ? 'All Families' : fam.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Products Table Card */}
        <div className="neu-flat rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-elyrion-charcoal">
              <thead className="bg-[#ECE8DF] border-b border-[#DCD6C8] uppercase text-[10px] tracking-wider text-elyrion-muted font-bold">
                <tr>
                  <th className="py-4 px-6">Perfume</th>
                  <th className="py-4 px-6">Family & Vibe</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Inventory</th>
                  <th className="py-4 px-6">Badges</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD6C8]/60">
                {filteredProducts.map((p) => {
                  const id = p._id || p.slug;
                  const studioImg = p.images?.studio || p.studioImage;

                  return (
                    <tr key={id} className="hover:bg-white/40 transition-colors">
                      {/* Perfume Info */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={studioImg}
                            alt={p.name}
                            className="w-12 h-12 rounded-xl object-cover border border-[#DCD6C8] shadow-sm"
                          />
                          <div>
                            <span className="font-bold text-elyrion-charcoal text-sm block">
                              {p.name}
                            </span>
                            <span className="text-[11px] text-elyrion-muted line-clamp-1 italic font-serif">
                              "{p.tagline}"
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Family & Vibe */}
                      <td className="py-4 px-6 space-y-1">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-elyrion-gold/15 text-elyrion-gold border border-elyrion-gold/30 block w-fit">
                          {p.noteFamily}
                        </span>
                        <span className="text-[11px] text-elyrion-muted block">
                          {p.vibe || p.category}
                        </span>
                      </td>

                      {/* Pricing */}
                      <td className="py-4 px-6 font-mono font-bold text-sm">
                        <div>
                          {p.salePrice ? (
                            <div className="space-y-0.5">
                              <span className="text-elyrion-gold block">{formatPKR(p.salePrice)}</span>
                              <span className="text-elyrion-muted line-through text-[11px] block">
                                {formatPKR(p.price)}
                              </span>
                            </div>
                          ) : (
                            <span>{formatPKR(p.price)}</span>
                          )}
                        </div>
                      </td>

                      {/* Stock */}
                      <td className="py-4 px-6 font-mono">
                        <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full text-[11px] border border-emerald-300">
                          {p.stock || 50} Units
                        </span>
                      </td>

                      {/* Badges */}
                      <td className="py-4 px-6">
                        <div className="flex flex-wrap gap-1">
                          {p.isBestSeller && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/15 text-amber-800 border border-amber-500/30">
                              BEST SELLER
                            </span>
                          )}
                          {p.isNewArrival && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-indigo-500/15 text-indigo-800 border border-indigo-500/30">
                              NEW
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/products/${p.slug}`}
                            target="_blank"
                            className="p-2 neu-button rounded-xl text-elyrion-muted hover:text-elyrion-gold transition-colors text-xs"
                            title="Preview Live Storefront Page"
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                          <Link
                            href={`/admin/products/${id}`}
                            className="p-2 neu-button rounded-xl text-elyrion-charcoal hover:text-elyrion-gold transition-colors text-xs"
                            title="Edit Perfume & Notes Pyramid"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Link>
                          <button
                            onClick={() => handleDeleteProduct(id, p.name)}
                            className="p-2 neu-button rounded-xl text-elyrion-muted hover:text-rose-600 transition-colors text-xs"
                            title="Delete Fragrance"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

