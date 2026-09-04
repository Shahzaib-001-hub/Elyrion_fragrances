'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * App Layout Client Coordinator
 * ============================================================================
 */

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import SearchModal from '@/components/ui/SearchModal';
import QuickViewModal from '@/components/ui/QuickViewModal';

export default function AppLayoutClient({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const pathname = usePathname();

  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <AnnouncementBar />}
      {!isAdminRoute && <Navbar onOpenSearch={() => setSearchOpen(true)} />}

      <main className="flex-1">{children}</main>

      {!isAdminRoute && <Footer />}

      {/* Global Client Drawers & Modals */}
      <CartDrawer />
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => {
          setSearchOpen(false);
          setQuickViewProduct(p);
        }}
      />
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </>
  );
}

