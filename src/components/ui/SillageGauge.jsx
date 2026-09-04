/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Neumorphic Sillage & Longevity Gauge Component (Light Theme)
 * ============================================================================
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWind, faCrown } from '@fortawesome/free-solid-svg-icons';

export default function SillageGauge({ longevityHours = 14, sillage = 'Intense', season = 'All Seasons' }) {
  const longevityPercentage = Math.min(100, Math.round((longevityHours / 18) * 100));

  const getSillageRating = (lvl) => {
    switch (lvl?.toLowerCase()) {
      case 'subtle':
        return { percent: 35, label: 'Intimate Skin Scent' };
      case 'moderate':
        return { percent: 65, label: 'Arm’s Length Presence' };
      case 'intense':
        return { percent: 88, label: 'Room-Filling Radiance' };
      case 'enormous':
        return { percent: 100, label: 'Powerhouse Projection' };
      default:
        return { percent: 85, label: 'Intense Presence' };
    }
  };

  const sillageData = getSillageRating(sillage);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 neu-flat rounded-2xl">
      
      {/* Longevity Gauge */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-elyrion-dark font-bold flex items-center gap-1.5">
            <FontAwesomeIcon icon={faClock} className="text-elyrion-gold text-[11px]" />
            Longevity on Skin
          </span>
          <span className="text-elyrion-goldDark font-bold font-mono">
            {longevityHours}+ Hours
          </span>
        </div>
        <div className="w-full h-2.5 bg-[#E2DDD2] rounded-full overflow-hidden neu-pressed">
          <div
            className="h-full bg-gold-gradient rounded-full transition-all duration-700"
            style={{ width: `${longevityPercentage}%` }}
          />
        </div>
        <p className="text-[10px] text-elyrion-muted font-medium">Extrait 35% oil concentration</p>
      </div>

      {/* Sillage Projection Gauge */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-elyrion-dark font-bold flex items-center gap-1.5">
            <FontAwesomeIcon icon={faWind} className="text-elyrion-gold text-[11px]" />
            Sillage & Projection
          </span>
          <span className="text-elyrion-goldDark font-extrabold uppercase tracking-wider text-[11px]">
            {sillage}
          </span>
        </div>
        <div className="w-full h-2.5 bg-[#E2DDD2] rounded-full overflow-hidden neu-pressed">
          <div
            className="h-full bg-gradient-to-r from-amber-600 via-elyrion-gold to-yellow-400 rounded-full transition-all duration-700"
            style={{ width: `${sillageData.percent}%` }}
          />
        </div>
        <p className="text-[10px] text-elyrion-muted font-medium">{sillageData.label}</p>
      </div>

    </div>
  );
}
