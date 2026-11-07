'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Aesthetic Sensory Lookbook Grid
 * ============================================================================
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faWandMagicSparkles as faSparkles } from '@fortawesome/free-solid-svg-icons';

const instagramPosts = [
  {
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop',
    title: 'Café de Nuit & Dark Chocolate',
    likes: '1,420',
  },
  {
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
    title: 'Roasted Coffee Beans & Amber Glow',
    likes: '984',
  },
  {
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop',
    title: 'Velours de Fraise — Strawberry Fluff',
    likes: '2,130',
  },
  {
    image: 'https://images.unsplash.com/photo-1594913785162-e678a0c23ecb?q=80&w=600&auto=format&fit=crop',
    title: 'Oud Impérial & Cardamom Pods',
    likes: '1,890',
  },
  {
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=600&auto=format&fit=crop',
    title: 'Fraîcheur Royale & Coastal Citrus',
    likes: '1,120',
  },
  {
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    title: 'Rose de Paradis — Velvet Damask',
    likes: '1,650',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 border-t border-[#E5E0D5] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faInstagram} className="text-elyrion-gold text-sm" />
            <span className="text-xs uppercase tracking-[0.25em] text-elyrion-goldDark font-extrabold">
              @ELYRIONFRAGRANCES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111827]">
            The Sensory Lookbook
          </h2>
          <p className="text-sm text-[#4B5563] font-light">
            Tag #ElyrionParadise to be featured on our official nationwide visual feed.
          </p>
        </div>

        {/* 6-Grid Lookbook */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-[#E5E0D5] hover:border-elyrion-gold shadow-sm hover:shadow-[0_10px_25px_rgba(197,155,39,0.2)] transition-all block"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#111827]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center space-y-2">
                <FontAwesomeIcon icon={faInstagram} className="text-elyrion-gold text-xl" />
                <span className="text-[10px] text-white font-medium leading-tight">
                  {post.title}
                </span>
                <span className="text-[10px] text-amber-300 flex items-center gap-1 font-semibold">
                  <FontAwesomeIcon icon={faHeart} className="text-rose-400 text-[9px]" />
                  {post.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
