'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Moods & Vibes Manager (/admin/moods) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faWandMagicSparkles as faSparkles, faHeart, faTag } from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { seedMoods } from '@/lib/seedData';

export default function AdminMoodsPage() {
  const [moods, setMoods] = useState(seedMoods);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    color: '#C59B27',
  });

  useEffect(() => {
    async function loadMoods() {
      try {
        const res = await fetch('/api/moods');
        const data = await res.json();
        if (data.success && data.moods?.length > 0) {
          setMoods(data.moods);
        }
      } catch (e) {
        console.warn('Mood fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadMoods();
  }, []);

  const handleAddMood = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/moods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setMoods((prev) => [...prev, data.mood]);
        setIsAdding(false);
        setFormData({ name: '', tagline: '', color: '#C59B27' });
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
        title="Moods & Emotional Vibes"
        subtitle="Manage sensory vibes that power the customer journey 'What's Your Mood?' matching engine."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            Active Olfactory Moods ({moods.length})
          </h3>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>{isAdding ? 'Close Form' : 'New Mood / Vibe'}</span>
          </button>
        </div>

        {isAdding && (
          <form onSubmit={handleAddMood} className="p-6 sm:p-8 neu-flat rounded-3xl space-y-4 animate-in fade-in duration-200">
            <h4 className="font-serif text-base font-bold text-elyrion-charcoal">
              Add New Olfactory Vibe
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Vibe Name * (e.g. "The Majestic One")</label>
                <input
                  type="text"
                  required
                  placeholder="The Majestic One"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Emotional Tagline *</label>
                <input
                  type="text"
                  required
                  placeholder="Royal presence, spiced saffron, imperial aura"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
              >
                Save Mood Vibe
              </button>
            </div>
          </form>
        )}

        {/* Mood Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moods.map((m, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl neu-flat-hover flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl neu-pressed flex items-center justify-center text-elyrion-gold text-sm shadow-inner">
                    <FontAwesomeIcon icon={faSparkles} />
                  </div>
                  <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    MATCHING ENGINE
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-elyrion-charcoal">
                  {m.name}
                </h4>
                <p className="text-xs text-elyrion-muted font-light leading-relaxed">
                  {m.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCD6C8]/60 flex items-center justify-between text-xs text-elyrion-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <FontAwesomeIcon icon={faTag} className="text-elyrion-gold text-[10px]" />
                  Tag #{m.name?.replace(/\s+/g, '')}
                </span>
                <span className="font-mono text-[10px] text-elyrion-charcoal font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

