'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Bundles & Promotional Offers Manager (/admin/bundles) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faGift,
  faCrown,
  faCheck,
  faTrash,
  faWandMagicSparkles as faSparkles,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { bundles as catalogBundles } from '@/lib/catalog';
import { formatPKR } from '@/lib/utils';

export default function AdminBundlesPage() {
  const [bundles, setBundles] = useState(catalogBundles);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    price: '',
    originalPrice: '',
    badge: 'EXCLUSIVE DUO',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    includes: 'Café de Nuit (50ml) + Oud Impérial (50ml) + Free 5ml Velvet Damask Sample',
  });

  useEffect(() => {
    async function loadBundles() {
      try {
        const res = await fetch('/api/bundles');
        const data = await res.json();
        if (data.success && data.bundles?.length > 0) {
          setBundles(data.bundles);
        }
      } catch (e) {
        console.warn('Bundle fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadBundles();
  }, []);

  const handleAddBundle = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        title: formData.title,
        subtitle: formData.subtitle,
        price: Number(formData.price),
        originalPrice: Number(formData.originalPrice),
        badge: formData.badge,
        image: formData.image,
        includes: formData.includes.split('+').map((s) => s.trim()).filter(Boolean),
      };

      const res = await fetch('/api/bundles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setBundles((prev) => [...prev, data.bundle]);
        setIsAdding(false);
        setFormData({
          title: '',
          subtitle: '',
          price: '',
          originalPrice: '',
          badge: 'EXCLUSIVE DUO',
          image: '',
          includes: '',
        });
      } else {
        alert('Failed: ' + data.error);
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Bundles & Promotional Vault"
        subtitle="Configure curated multi-bottle sets, complimentary discovery gifts, and limited campaign discounts."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            Active Promotional Bundles ({bundles.length})
          </h3>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>{isAdding ? 'Close Form' : 'New Bundle Offer'}</span>
          </button>
        </div>

        {/* Add Bundle Form */}
        {isAdding && (
          <form onSubmit={handleAddBundle} className="p-6 sm:p-8 neu-flat rounded-3xl space-y-4 animate-in fade-in duration-200">
            <h4 className="font-serif text-base font-bold text-elyrion-charcoal">
              Create Promotional Bundle Offer
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Bundle Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Royal Duo (His & Hers)"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Badge Text (e.g. SAVE 25%)</label>
                <input
                  type="text"
                  placeholder="SAVE 25% • BEST SELLER"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Bundle Price (PKR) *</label>
                <input
                  type="number"
                  required
                  placeholder="7950"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Original Retail Value (PKR) *</label>
                <input
                  type="number"
                  required
                  placeholder="9900"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Sensory Subtitle</label>
                <input
                  type="text"
                  placeholder="Two complementary extraits featuring Oud Impérial and Café de Nuit..."
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Included Items (Separated by '+')</label>
                <input
                  type="text"
                  placeholder="Café de Nuit (50ml) + Oud Impérial (50ml) + Free 5ml Sample"
                  value={formData.includes}
                  onChange={(e) => setFormData({ ...formData, includes: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
              >
                Publish Bundle
              </button>
            </div>
          </form>
        )}

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((b, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl neu-flat-hover flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-800 border border-amber-500/30">
                    {b.badge || 'SPECIAL BUNDLE'}
                  </span>
                  <div className="text-right">
                    <span className="font-mono font-bold text-elyrion-charcoal text-base block">
                      {formatPKR(b.price)}
                    </span>
                    <span className="text-[11px] text-elyrion-muted line-through font-mono">
                      {formatPKR(b.originalPrice)}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-elyrion-charcoal">
                  {b.title}
                </h4>
                <p className="text-xs text-elyrion-muted font-light leading-relaxed">
                  {b.subtitle}
                </p>

                {/* Inclusions List */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-elyrion-gold uppercase tracking-wider block">
                    Included in Set:
                  </span>
                  {(b.includes || []).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-elyrion-charcoal">
                      <FontAwesomeIcon icon={faCheck} className="text-elyrion-gold text-[10px]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCD6C8]/60 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold bg-emerald-100 px-2.5 py-1 rounded-full text-[10px] border border-emerald-300">
                  Free 5ml Sample Included
                </span>
                <span className="text-[10px] text-elyrion-muted font-mono">Active Promotion</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
