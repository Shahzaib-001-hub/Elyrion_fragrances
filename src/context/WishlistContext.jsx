'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Wishlist Context & State Management
 * ============================================================================
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('elyrion_wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Wishlist storage error:', e);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('elyrion_wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, isClient]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.slug === product.slug || p._id === product._id);
      if (exists) {
        return prev.filter((p) => (p.slug || p._id) !== (product.slug || product._id));
      } else {
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (slugOrId) => {
    return wishlist.some((p) => p.slug === slugOrId || p._id === slugOrId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

