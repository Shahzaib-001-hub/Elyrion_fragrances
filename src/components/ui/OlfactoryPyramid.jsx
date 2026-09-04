/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Neumorphic Olfactory Pyramid Visualizer Component (Light Theme)
 * ============================================================================
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles as faSparkles, faHeart, faCrown } from '@fortawesome/free-solid-svg-icons';

export default function OlfactoryPyramid({ notes }) {
  if (!notes) return null;

  const topNotes = notes.topNotes || [];
  const heartNotes = notes.heartNotes || [];
  const baseNotes = notes.baseNotes || [];

  return (
    <div className="w-full space-y-3 p-5 neu-flat rounded-2xl">
      <div className="flex items-center justify-between border-b border-[#E2DDD2] pb-2">
        <h4 className="text-xs uppercase tracking-widest text-elyrion-goldDark font-bold flex items-center gap-1.5">
          <FontAwesomeIcon icon={faSparkles} className="text-[10px]" />
          <span>Olfactory Architecture (Notes Pyramid)</span>
        </h4>
        <span className="text-[10px] text-elyrion-muted font-mono font-medium">Extrait Evolution</span>
      </div>

      <div className="space-y-2.5 text-xs">
        {/* TOP NOTES (The First Impression - 0-30 mins) */}
        <div className="p-3.5 neu-pressed rounded-xl">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-bold text-amber-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              TOP NOTES • First Impression (0–30 mins)
            </span>
            <span className="text-[10px] text-elyrion-muted font-medium">Light & Sparkling</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {topNotes.map((note) => (
              <span
                key={note}
                className="px-2.5 py-0.5 rounded-md bg-white border border-[#E2DDD2] text-elyrion-dark text-[11px] font-semibold shadow-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* HEART / MIDDLE NOTES (The Fragrance Character - 1-5 hours) */}
        <div className="p-3.5 neu-pressed rounded-xl">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-bold text-rose-800 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faHeart} className="text-rose-600 text-[10px]" />
              HEART NOTES • Signature Character (1–5 hrs)
            </span>
            <span className="text-[10px] text-elyrion-muted font-medium">Full Body</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {heartNotes.map((note) => (
              <span
                key={note}
                className="px-2.5 py-0.5 rounded-md bg-white border border-rose-200 text-elyrion-dark text-[11px] font-semibold shadow-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* BASE NOTES (The Lingering Memory - 6-16+ hours) */}
        <div className="p-3.5 neu-pressed rounded-xl">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-bold text-amber-900 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCrown} className="text-amber-700 text-[10px]" />
              BASE NOTES • Lingering Sillage (6–16+ hrs)
            </span>
            <span className="text-[10px] text-elyrion-muted font-medium">Heavy & Long-lasting</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {baseNotes.map((note) => (
              <span
                key={note}
                className="px-2.5 py-0.5 rounded-md bg-white border border-amber-300 text-elyrion-dark text-[11px] font-semibold shadow-sm"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
