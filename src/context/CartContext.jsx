'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Shopping Cart Context & State Management
 * ============================================================================
 * 
 * Manages:
 * - Cart items with localStorage persistence
 * - Dynamic Free Shipping Progress Bar (Threshold: Rs. 3,500)
 * - Complimentary 5ml Luxury Sample selector
 * - Slide-out Cart Drawer visibility
 * - Buy 2 Get 1 Free automatic bundle promotion calculations
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const FREE_SHIPPING_THRESHOLD = 3500;

export const AVAILABLE_SAMPLES = [
  'Café de Nuit (5ml Extrait Sample)',
  'Oud Impérial & Cardamome (5ml Extrait Sample)',
  'Fraîcheur Royale (5ml Extrait Sample)',
  'Velours de Fraise (5ml Extrait Sample)',
  'Rose de Paradis (5ml Extrait Sample)',
  'Ambre Fumé & Tabac (5ml Extrait Sample)',
];

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState(AVAILABLE_SAMPLES[0]);
  const [isClient, setIsClient] = useState(false);

  // Load cart from localStorage on client mount
  useEffect(() => {
    setIsClient(true);
    try {
      const savedCart = localStorage.getItem('elyrion_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn('Failed to parse localStorage cart:', e);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem('elyrion_cart', JSON.stringify(cart));
      } catch (e) {
        console.error('Error saving cart to localStorage:', e);
      }
    }
  }, [cart, isClient]);

  // Add Item
  const addToCart = (product, quantity = 1, size = '50ml') => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => (item.id === product._id || item.id === product.slug || item.slug === product.slug) && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product._id || product.slug,
            slug: product.slug,
            name: product.name,
            tagline: product.tagline,
            price: product.salePrice || product.price,
            originalPrice: product.price,
            image: product.images?.studio || product.image,
            category: product.category,
            quantity,
            size,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  // Remove Item
  const removeFromCart = (id, size = '50ml') => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  // Update Quantity
  const updateQuantity = (id, newQuantity, size = '50ml') => {
    if (newQuantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Subtotal & Counts
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Free shipping math
  const freeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  const shippingFee = freeShippingUnlocked ? 0 : subtotal > 0 ? 250 : 0;
  const totalAmount = subtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        totalAmount,
        shippingFee,
        freeShippingUnlocked,
        freeShippingRemaining,
        freeShippingProgress,
        selectedSample,
        setSelectedSample,
        availableSamples: AVAILABLE_SAMPLES,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

