'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Note Families & Categories Manager (/admin/categories) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLayerGroup, faWandMagicSparkles as faSparkles, faCheck } from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { seedCategories } from '@/lib/seedData';
import { slugify } from '@/lib/utils';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(seedCategories);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    heading: '',
    subheading: '',
    bannerImage: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
    featuredNotes: 'Vanilla, Caramel, Chocolate',
  });

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        if (data.success && data.categories?.length > 0) {
          setCategories(data.categories);
        }
      } catch (e) {
        console.warn('Category fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        slug: slugify(formData.name),
        heading: formData.heading,
        subheading: formData.subheading,
        bannerImage: formData.bannerImage,
        featuredNotes: formData.featuredNotes.split(',').map((s) => s.trim()).filter(Boolean),
      };

      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setCategories((prev) => [...prev, data.category]);
        setIsAdding(false);
        setFormData({
          name: '',
          heading: '',
          subheading: '',
          bannerImage: '',
          featuredNotes: '',
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
        title="Note Families & Collections"
        subtitle="Manage the 4 primary olfactory experience vaults, editorial headlines, and note tags."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            Active Fragrance Note Families ({categories.length})
          </h3>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>{isAdding ? 'Close Form' : 'New Note Family'}</span>
          </button>
        </div>

        {/* Add Category Form */}
        {isAdding && (
          <form onSubmit={handleAddCategory} className="p-6 sm:p-8 neu-flat rounded-3xl space-y-4 animate-in fade-in duration-200">
            <h4 className="font-serif text-base font-bold text-elyrion-charcoal">
              Create New Fragrance Note Family
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Family Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amber & Spiced Orientals"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Editorial Heading * (e.g. "Warmth in Every Drop")</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Deep Notes. Bold Presence."
                  value={formData.heading}
                  onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Subheading Description</label>
                <input
                  type="text"
                  placeholder="Brief description of the aroma profile..."
                  value={formData.subheading}
                  onChange={(e) => setFormData({ ...formData, subheading: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Featured Note Tags (Comma-separated)</label>
                <input
                  type="text"
                  placeholder="Amber, Cardamom, Tobacco, Cinnamon"
                  value={formData.featuredNotes}
                  onChange={(e) => setFormData({ ...formData, featuredNotes: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
              >
                Save Note Family
              </button>
            </div>
          </form>
        )}

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.slug || cat.name}
              className="p-7 rounded-3xl neu-flat-hover flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-elyrion-gold">
                    /{cat.slug}
                  </span>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    ACTIVE
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-elyrion-charcoal">
                  {cat.heading}
                </h4>
                <p className="text-xs text-elyrion-muted font-light leading-relaxed">
                  {cat.subheading}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD6C8]/60 flex flex-wrap gap-1.5">
                {(cat.featuredNotes || []).map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1 rounded-lg text-[10px] neu-pressed text-elyrion-charcoal font-mono font-medium"
                  >
                    #{note}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
