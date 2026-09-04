import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StatsCard({ title, value, change, icon, accentColor = 'text-elyrion-gold' }) {
  return (
    <div className="p-6 rounded-3xl neu-flat-hover flex items-center justify-between">
      <div className="space-y-1">
        <span className="text-[11px] uppercase tracking-wider text-elyrion-muted font-bold">
          {title}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-elyrion-charcoal">
          {value}
        </h3>
        {change && (
          <span className="text-[11px] text-emerald-600 font-mono font-semibold block">
            {change}
          </span>
        )}
      </div>

      <div className={`w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center ${accentColor} text-xl shadow-inner`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}

