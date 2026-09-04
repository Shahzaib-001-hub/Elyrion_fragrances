'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Admin Dashboard Luxury Navigation Sidebar
 * ============================================================================
 */

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faBoxesStacked,
  faLayerGroup,
  faWandMagicSparkles as faSparkles,
  faGift,
  faUsers,
  faBagShopping,
  faCrown,
  faEye,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { name: 'Dashboard Overview', href: '/admin', icon: faChartLine },
  { name: 'Products & Perfumes', href: '/admin/products', icon: faBoxesStacked },
  { name: 'Note Families & Categories', href: '/admin/categories', icon: faLayerGroup },
  { name: 'Moods & Vibes', href: '/admin/moods', icon: faSparkles },
  { name: 'Bundles & Offers', href: '/admin/bundles', icon: faGift },
  { name: 'Orders & Fulfillment', href: '/admin/orders', icon: faBagShopping },
  { name: 'Staff & User Management', href: '/admin/users', icon: faUsers },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#ECE8DF] border-r border-[#DCD6C8] flex flex-col justify-between min-h-screen py-6 px-4 shadow-[4px_0_15px_rgba(180,172,155,0.15)] sticky top-0 h-screen">
      <div className="space-y-8">
        
        {/* Brand Header */}
        <div className="px-2">
          <Link href="/admin" className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xl font-bold tracking-[0.2em] gold-text-gradient">
                ELYRION
              </span>
              <span className="text-[9px] font-bold bg-elyrion-gold/20 text-elyrion-gold border border-elyrion-gold/40 px-1.5 py-0.5 rounded-full">
                PORTAL
              </span>
            </div>
            <span className="text-[9px] tracking-[0.25em] uppercase text-elyrion-gold font-bold mt-0.5">
              The Fragrance of Paradise
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'neu-gold-button text-white font-bold shadow-md'
                    : 'text-elyrion-charcoal/80 hover:text-elyrion-charcoal hover:neu-flat'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className={`text-sm w-4 ${isActive ? 'text-white' : 'text-elyrion-gold'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

      </div>

      {/* Bottom Storefront Shortcut & User Info */}
      <div className="space-y-3 pt-6 border-t border-[#DCD6C8] px-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl neu-button text-xs text-elyrion-charcoal group font-medium"
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEye} className="text-elyrion-gold text-xs" />
            <span>Live Storefront</span>
          </div>
          <span className="text-elyrion-gold text-xs group-hover:translate-x-1 transition-transform">↗</span>
        </Link>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-elyrion-gold/20 border border-elyrion-gold flex items-center justify-center text-elyrion-gold font-bold text-xs font-serif shadow-inner">
              S
            </div>
            <div>
              <span className="text-xs font-bold text-elyrion-charcoal block">Shahzaib</span>
              <span className="text-[10px] text-elyrion-gold font-mono font-semibold">Super Admin</span>
            </div>
          </div>

          <Link
            href="/"
            className="text-elyrion-muted hover:text-rose-600 transition-colors p-1"
            title="Exit Admin"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </div>
      </div>
    </aside>
  );
}

