'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Comprehensive Product & SEO Editor Form (Admin) - Light Neumorphic UI
 * ============================================================================
 * 
 * Features:
 * - Olfactory Notes Pyramid (Top, Heart, Base)
 * - Dual Photography (Studio Bottle + Raw Note Sensory Lifestyle)
 * - Emotional Storytelling Narrative
 * - Live Google SERP Preview & SEO Meta Fields
 */

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faWandMagicSparkles as faSparkles,
  faCrown,
  faMagnifyingGlass,
  faImage,
  faLayerGroup,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { slugify } from '@/lib/utils';

export default function ProductForm({ initialData = null, isEdit = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    tagline: initialData?.tagline || '',
    description: initialData?.description || '',
    price: initialData?.price || '',
    salePrice: initialData?.salePrice || '',
    stock: initialData?.stock || 50,
    category: initialData?.category || 'UNISEX',
    isBestSeller: initialData?.isBestSeller || false,
    isFeatured: initialData?.isFeatured || false,
    isNewArrival: initialData?.isNewArrival || false,
    concentration: initialData?.concentration || 'Extrait de Parfum (35% Oil Concentration)',
    size: initialData?.size || '50ml / 1.7 fl. oz.',
    noteFamily: initialData?.noteFamily || 'Sweet & Dessert-Inspired',
    vibe: initialData?.vibe || 'The Sweet One',
    longevityHours: initialData?.longevityHours || 14,
    sillage: initialData?.sillage || 'Intense',
    season: initialData?.season || 'All Seasons / Evening',

    // Images
    studioImage:
      initialData?.images?.studio ||
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    lifestyleImage:
      initialData?.images?.lifestyle ||
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',

    // Notes
    topNotes: initialData?.notes?.topNotes?.join(', ') || 'Roasted Coffee, Cardamom',
    heartNotes: initialData?.notes?.heartNotes?.join(', ') || 'Belgian Dark Chocolate, Hazelnut',
    baseNotes: initialData?.notes?.baseNotes?.join(', ') || 'Madagascar Bourbon Vanilla, Warm Amber',

    // Mood Tags
    moods: initialData?.moods || ['Romantic', 'Mysterious'],

    // SEO
    metaTitle: initialData?.seo?.metaTitle || '',
    metaDescription: initialData?.seo?.metaDescription || '',
    keywords: initialData?.seo?.keywords?.join(', ') || 'luxury perfume, extrait de parfum, elyrion',
  });

  // Auto-slug on name change
  const handleNameChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({
      ...prev,
      name: val,
      slug: isEdit ? prev.slug : slugify(val),
    }));
  };

  const handleMoodToggle = (mood) => {
    setFormData((prev) => {
      const exists = prev.moods.includes(mood);
      return {
        ...prev,
        moods: exists ? prev.moods.filter((m) => m !== mood) : [...prev.moods, mood],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      slug: formData.slug || slugify(formData.name),
      tagline: formData.tagline,
      description: formData.description,
      price: Number(formData.price),
      salePrice: formData.salePrice ? Number(formData.salePrice) : null,
      stock: Number(formData.stock),
      category: formData.category,
      isBestSeller: formData.isBestSeller,
      isFeatured: formData.isFeatured,
      isNewArrival: formData.isNewArrival,
      concentration: formData.concentration,
      size: formData.size,
      noteFamily: formData.noteFamily,
      vibe: formData.vibe,
      longevityHours: Number(formData.longevityHours),
      sillage: formData.sillage,
      season: formData.season,
      moods: formData.moods,
      images: {
        studio: formData.studioImage,
        lifestyle: formData.lifestyleImage,
      },
      notes: {
        topNotes: formData.topNotes.split(',').map((s) => s.trim()).filter(Boolean),
        heartNotes: formData.heartNotes.split(',').map((s) => s.trim()).filter(Boolean),
        baseNotes: formData.baseNotes.split(',').map((s) => s.trim()).filter(Boolean),
      },
      seo: {
        metaTitle: formData.metaTitle || `${formData.name} Extrait | ELYRION`,
        metaDescription: formData.metaDescription || formData.tagline,
        keywords: formData.keywords.split(',').map((s) => s.trim()).filter(Boolean),
      },
    };

    try {
      const endpoint = isEdit ? `/api/products/${initialData._id || initialData.slug}` : '/api/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        alert(isEdit ? '✨ Perfume updated successfully!' : '✨ New Perfume created successfully!');
        router.push('/admin/products');
        router.refresh();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const availableMoods = ['Romantic', 'Confident', 'Mysterious', 'Playful', 'Powerful', 'Calm', 'Fresh', 'Seductive'];

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-5xl mx-auto pb-20">
      
      {/* 1. BASIC INFORMATION & STORYTELLING */}
      <div className="p-6 sm:p-8 neu-flat rounded-3xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#DCD6C8] pb-3">
          <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-base" />
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            1. Fragrance Profile & Sensory Storytelling
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Fragrance Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={handleNameChange}
              placeholder="e.g. Café de Nuit"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-medium"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">URL Slug *</label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="cafe-de-nuit"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-elyrion-gold font-bold mb-1.5">
              Emotional Sensory Tagline * (e.g. "Smells like walking into a café on a rainy evening...")
            </label>
            <input
              type="text"
              required
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              placeholder='e.g. "Smells like walking into a Parisian café on a rainy evening with warm espresso and dark chocolate."'
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold italic font-serif"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Detailed Editorial Description *</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the mood, ingredients, and olfactory evolution on skin..."
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* 2. PRICING, INVENTORY & CATEGORIZATION */}
      <div className="p-6 sm:p-8 neu-flat rounded-3xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#DCD6C8] pb-3">
          <FontAwesomeIcon icon={faCrown} className="text-elyrion-gold text-base" />
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            2. Pricing, Inventory & Badges
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Retail Price (PKR) *</label>
            <input
              type="number"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="4950"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono font-bold"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Sale Price (Optional PKR)</label>
            <input
              type="number"
              value={formData.salePrice}
              onChange={(e) => setFormData({ ...formData, salePrice: e.target.value })}
              placeholder="3950"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Stock Quantity *</label>
            <input
              type="number"
              required
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              placeholder="50"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono font-bold"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Gender Category *</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-semibold"
            >
              <option value="UNISEX">UNISEX</option>
              <option value="MEN">MEN</option>
              <option value="WOMEN">WOMEN</option>
            </select>
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Note Family Collection *</label>
            <select
              value={formData.noteFamily}
              onChange={(e) => setFormData({ ...formData, noteFamily: e.target.value })}
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-semibold"
            >
              <option value="Sweet & Dessert-Inspired">Sweet & Dessert-Inspired</option>
              <option value="Deep, Dark & Intense">Deep, Dark & Intense</option>
              <option value="Fresh & Clean">Fresh & Clean</option>
              <option value="Floral & Romantic">Floral & Romantic</option>
            </select>
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">Vibe Category *</label>
            <select
              value={formData.vibe}
              onChange={(e) => setFormData({ ...formData, vibe: e.target.value })}
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-semibold"
            >
              <option value="The Sweet One">The Sweet One</option>
              <option value="The Mysterious One">The Mysterious One</option>
              <option value="The Clean One">The Clean One</option>
              <option value="The Romantic One">The Romantic One</option>
              <option value="The Bold One">The Bold One</option>
            </select>
          </div>
        </div>

        {/* Checkbox Badges */}
        <div className="flex flex-wrap gap-4 pt-2">
          <label className="flex items-center gap-2 cursor-pointer text-xs text-elyrion-charcoal font-medium">
            <input
              type="checkbox"
              checked={formData.isBestSeller}
              onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
              className="rounded accent-[#C59B27]"
            />
            <span>Best Seller Badge</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-xs text-elyrion-charcoal font-medium">
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
              className="rounded accent-[#C59B27]"
            />
            <span>Featured on Homepage</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-xs text-elyrion-charcoal font-medium">
            <input
              type="checkbox"
              checked={formData.isNewArrival}
              onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
              className="rounded accent-[#C59B27]"
            />
            <span>New Arrival Badge</span>
          </label>
        </div>
      </div>

      {/* 3. DUAL-PHOTOGRAPHY IMAGE URLS */}
      <div className="p-6 sm:p-8 neu-flat rounded-3xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#DCD6C8] pb-3">
          <FontAwesomeIcon icon={faImage} className="text-elyrion-gold text-base" />
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            3. Dual Photography Direction (Studio + Note-Infused Lifestyle)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">
              Studio Product Shot URL * (Clean bottle shot)
            </label>
            <input
              type="url"
              required
              value={formData.studioImage}
              onChange={(e) => setFormData({ ...formData, studioImage: e.target.value })}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
            />
          </div>

          <div>
            <label className="block text-elyrion-gold font-bold mb-1.5">
              Note-Infused Lifestyle Sensory Shot URL * (Bottle with raw ingredients)
            </label>
            <input
              type="url"
              required
              value={formData.lifestyleImage}
              onChange={(e) => setFormData({ ...formData, lifestyleImage: e.target.value })}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
            />
          </div>
        </div>
      </div>

      {/* 4. OLFACTORY NOTES PYRAMID BUILDER */}
      <div className="p-6 sm:p-8 neu-flat rounded-3xl space-y-6">
        <div className="flex items-center gap-2.5 border-b border-[#DCD6C8] pb-3">
          <FontAwesomeIcon icon={faLayerGroup} className="text-elyrion-gold text-base" />
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            4. Olfactory Notes Architecture Pyramid
          </h3>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-amber-700 font-bold mb-1.5">
              TOP NOTES (Comma-separated — e.g. Cardamom, Bitter Almond, Roasted Coffee)
            </label>
            <input
              type="text"
              required
              value={formData.topNotes}
              onChange={(e) => setFormData({ ...formData, topNotes: e.target.value })}
              placeholder="Cardamom, Bitter Almond, Roasted Coffee"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div>
            <label className="block text-rose-700 font-bold mb-1.5">
              HEART / MIDDLE NOTES (Comma-separated — e.g. Belgian Dark Chocolate, Tonka Bean)
            </label>
            <input
              type="text"
              required
              value={formData.heartNotes}
              onChange={(e) => setFormData({ ...formData, heartNotes: e.target.value })}
              placeholder="Belgian Dark Chocolate, Tonka Bean, Turkish Rose"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div>
            <label className="block text-amber-900 font-bold mb-1.5">
              BASE NOTES (Comma-separated — e.g. Madagascar Bourbon Vanilla, Warm Amber, Oud)
            </label>
            <input
              type="text"
              required
              value={formData.baseNotes}
              onChange={(e) => setFormData({ ...formData, baseNotes: e.target.value })}
              placeholder="Madagascar Bourbon Vanilla, Warm Amber, Smoked Cedar"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>
        </div>

        {/* Mood Tags Multi-Select */}
        <div className="pt-2">
          <label className="block text-elyrion-charcoal font-bold mb-2 text-xs">
            Assigned Mood Tags (Used in "What's Your Mood?" Filter)
          </label>
          <div className="flex flex-wrap gap-2">
            {availableMoods.map((mood) => {
              const active = formData.moods.includes(mood);
              return (
                <button
                  type="button"
                  key={mood}
                  onClick={() => handleMoodToggle(mood)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    active
                      ? 'neu-gold-button text-white font-bold shadow-md'
                      : 'neu-button text-elyrion-charcoal hover:border-elyrion-gold'
                  }`}
                >
                  {mood}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. ENTERPRISE-GRADE SEO OPTIMIZER */}
      <div className="p-6 sm:p-8 neu-flat rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-[#DCD6C8] pb-3">
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-elyrion-gold text-base" />
            <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
              5. Search Engine Optimization (SEO & Google SERP)
            </h3>
          </div>
          <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
            Next.js SSR Ready
          </span>
        </div>

        {/* Live Google Search Preview Card */}
        <div className="p-4 bg-white text-slate-800 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <span className="text-[11px] text-slate-500 block font-mono">
            https://elyrionfragrances.com › products › {formData.slug || 'product-slug'}
          </span>
          <h4 className="text-blue-800 hover:underline text-base font-medium cursor-pointer line-clamp-1">
            {formData.metaTitle || `${formData.name || 'Perfume Name'} Extrait de Parfum | ELYRION`}
          </h4>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {formData.metaDescription || formData.tagline || 'Experience luxury extrait de parfum by ELYRION. Formulated with 35% oil concentration for 14+ hour longevity.'}
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">
              Custom Meta Title (Google Search & Browser Tabs)
            </label>
            <input
              type="text"
              value={formData.metaTitle}
              onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
              placeholder="Café de Nuit Extrait — ELYRION Fragrances of Paradise"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">
              Meta Description (Search snippet — 150-160 characters)
            </label>
            <textarea
              rows={2}
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              placeholder="Experience Café de Nuit by ELYRION. An artisanal gourmand featuring Belgian chocolate, dark roasted coffee, and bourbon vanilla..."
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-elyrion-charcoal font-bold mb-1.5">
              Target SEO Keywords (Comma-separated)
            </label>
            <input
              type="text"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              placeholder="coffee perfume, chocolate fragrance, vanilla extrait, luxury perfume pakistan"
              className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-mono"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={() => router.push('/admin/products')}
          className="px-6 py-3.5 rounded-xl neu-button text-xs uppercase tracking-wider text-elyrion-charcoal font-semibold"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="px-10 py-4 neu-gold-button text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md"
        >
          <FontAwesomeIcon icon={faCheck} />
          <span>{loading ? 'Saving Fragrance...' : isEdit ? 'Update Perfume' : 'Publish to Catalog'}</span>
        </button>
      </div>

    </form>
  );
}

