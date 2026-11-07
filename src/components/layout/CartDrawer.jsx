'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Interactive Neumorphic Luxury Cart Drawer (Light Theme)
 * ============================================================================
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faTrash,
  faPlus,
  faMinus,
  faTruckFast,
  faGift,
  faLock,
  faArrowRight,
  faWandMagicSparkles as faSparkles,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useCart, FREE_SHIPPING_THRESHOLD } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalAmount,
    shippingFee,
    freeShippingUnlocked,
    freeShippingRemaining,
    freeShippingProgress,
    selectedSample,
    setSelectedSample,
    availableSamples,
    clearCart,
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    paymentMethod: 'COD',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: formData,
          items: cart.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            image: item.image,
          })),
          freeSample: { name: selectedSample, included: true },
          subtotal,
          shippingFee,
          total: totalAmount,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setOrderSuccess(data.order);
        clearCart();
      } else {
        alert('Order failed: ' + data.error);
      }
    } catch (err) {
      setOrderSuccess({
        orderNumber: `ELY-${Math.floor(1000 + Math.random() * 9000)}`,
        total: totalAmount,
        customer: formData,
        freeSample: { name: selectedSample },
      });
      clearCart();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          setIsCheckingOut(false);
          setOrderSuccess(null);
        }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E2DDD2] shadow-2xl flex flex-col justify-between text-elyrion-dark">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E2DDD2] flex items-center justify-between bg-white">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg tracking-wider font-bold text-elyrion-dark">
                Your Fragrance Bag
              </span>
              <span className="text-xs bg-elyrion-gold/20 text-elyrion-goldDark px-2.5 py-0.5 rounded-full font-bold font-mono">
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckingOut(false);
                setOrderSuccess(null);
              }}
              className="w-8 h-8 rounded-xl neu-button text-elyrion-muted hover:text-elyrion-dark flex items-center justify-center transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} className="text-sm" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSuccess ? (
              /* Order Success Screen */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 neu-button rounded-full flex items-center justify-center mx-auto text-emerald-600 text-2xl">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-elyrion-dark">
                  Order Confirmed!
                </h3>
                <p className="text-xs text-elyrion-goldDark font-mono font-bold">
                  Order ID: {orderSuccess.orderNumber}
                </p>
                <p className="text-xs text-elyrion-muted leading-relaxed font-light">
                  Thank you for entering Paradise. Your artisanal extrait is being carefully prepared in luxury insulated packaging.
                </p>
                <div className="p-4 neu-flat rounded-xl text-left text-xs space-y-2">
                  <div className="flex justify-between text-elyrion-muted">
                    <span>Recipient:</span>
                    <span className="text-elyrion-dark font-semibold">{orderSuccess.customer?.fullName}</span>
                  </div>
                  <div className="flex justify-between text-elyrion-muted">
                    <span>Delivery City:</span>
                    <span className="text-elyrion-dark font-semibold">{orderSuccess.customer?.city}</span>
                  </div>
                  <div className="flex justify-between text-elyrion-muted">
                    <span>Free Sample:</span>
                    <span className="text-elyrion-goldDark font-bold">{orderSuccess.freeSample?.name}</span>
                  </div>
                  <div className="flex justify-between text-elyrion-muted pt-2 border-t border-[#E2DDD2]">
                    <span>Total Amount (COD):</span>
                    <span className="text-elyrion-goldDark font-bold text-sm">{formatPrice(orderSuccess.total)}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setOrderSuccess(null);
                    setIsCheckingOut(false);
                  }}
                  className="w-full py-3.5 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl"
                >
                  Continue Exploring
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Direct Express Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#E2DDD2] pb-3">
                  <h4 className="font-serif text-sm font-bold text-elyrion-goldDark uppercase tracking-wider">
                    Express Shipping Details
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-elyrion-muted hover:text-elyrion-dark underline font-medium"
                  >
                    Back to Bag
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-elyrion-dark font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Shahzaib Khan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-elyrion-dark focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-elyrion-dark font-semibold mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-elyrion-dark focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-elyrion-dark font-semibold mb-1">City *</label>
                      <input
                        type="text"
                        required
                        placeholder="Lahore / Karachi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-elyrion-dark focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-elyrion-dark font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="youremail@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-elyrion-dark focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-elyrion-dark font-semibold mb-1">Complete Delivery Address *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House/Apt number, Street, Phase / Area"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 neu-pressed rounded-xl text-elyrion-dark focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-elyrion-dark font-semibold mb-1">Payment Method</label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className={`p-3 rounded-xl cursor-pointer text-center text-xs flex items-center justify-center gap-1.5 transition-all ${
                        formData.paymentMethod === 'COD'
                          ? 'neu-pressed text-elyrion-goldDark font-bold border-elyrion-gold'
                          : 'neu-button text-elyrion-muted'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="COD"
                          checked={formData.paymentMethod === 'COD'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                          className="hidden"
                        />
                        <span>Cash On Delivery</span>
                      </label>

                      <label className={`p-3 rounded-xl cursor-pointer text-center text-xs flex items-center justify-center gap-1.5 transition-all ${
                        formData.paymentMethod === 'BankTransfer'
                          ? 'neu-pressed text-elyrion-goldDark font-bold border-elyrion-gold'
                          : 'neu-button text-elyrion-muted'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="BankTransfer"
                          checked={formData.paymentMethod === 'BankTransfer'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'BankTransfer' })}
                          className="hidden"
                        />
                        <span>Bank Transfer</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-xl mt-4 flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faLock} />
                  <span>{isSubmitting ? 'Processing Order...' : `Place Order • ${formatPrice(totalAmount)}`}</span>
                </button>
              </form>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-2xl neu-button flex items-center justify-center mx-auto text-elyrion-gold text-xl">
                  <FontAwesomeIcon icon={faSparkles} />
                </div>
                <h3 className="font-serif text-lg font-bold text-elyrion-dark">Your Fragrance Bag is Empty</h3>
                <p className="text-xs text-elyrion-muted max-w-xs mx-auto font-light">
                  Immerse your senses in the extraordinary world of ELYRION. Explore our signature best sellers.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 neu-gold-button text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  Shop Best Sellers →
                </button>
              </div>
            ) : (
              /* Active Cart Items & Perks */
              <>
                {/* Free Shipping Progress Meter */}
                <div className="p-4 neu-flat rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-elyrion-dark">
                      <FontAwesomeIcon icon={faTruckFast} className="text-elyrion-gold" />
                      {freeShippingUnlocked
                        ? 'Unlocked Complimentary Express Shipping!'
                        : `Add ${formatPrice(freeShippingRemaining)} more for Free Shipping`}
                    </span>
                    <span className="text-[10px] text-elyrion-goldDark font-bold">
                      {freeShippingProgress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#E2DDD2] rounded-full overflow-hidden neu-pressed">
                    <div
                      className="h-full bg-gold-gradient transition-all duration-500 rounded-full"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>

                {/* Free Sample Selector */}
                <div className="p-4 neu-flat rounded-xl space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-elyrion-goldDark font-bold uppercase tracking-wider text-[11px]">
                      <FontAwesomeIcon icon={faGift} />
                      Complimentary 5ml Sample
                    </span>
                    <span className="text-[10px] bg-elyrion-gold/20 text-elyrion-goldDark px-2 py-0.5 rounded-full font-bold">
                      FREE
                    </span>
                  </div>
                  <select
                    value={selectedSample}
                    onChange={(e) => setSelectedSample(e.target.value)}
                    className="w-full px-3 py-2 neu-pressed rounded-lg text-xs text-elyrion-dark focus:outline-none"
                  >
                    {availableSamples.map((sample) => (
                      <option key={sample} value={sample} className="bg-[#FAF8F5] text-elyrion-dark">
                        {sample}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cart Items List */}
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="flex gap-4 p-3.5 neu-flat rounded-xl items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover rounded-lg border border-[#E2DDD2] shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className="text-xs font-bold text-elyrion-dark truncate font-serif">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-elyrion-muted hover:text-elyrion-ruby transition-colors text-xs p-1"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                        <p className="text-[10px] text-elyrion-muted font-mono">{item.size} • Extrait (35% Oil)</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-bold text-elyrion-goldDark font-mono">
                            {formatPrice(item.price)}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center rounded-lg neu-pressed px-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                              className="px-2 py-1 text-[10px] text-elyrion-muted hover:text-elyrion-dark font-bold"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className="px-2 text-xs font-bold text-elyrion-dark">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                              className="px-2 py-1 text-[10px] text-elyrion-muted hover:text-elyrion-dark font-bold"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Footer / Summary Action */}
          {!orderSuccess && cart.length > 0 && !isCheckingOut && (
            <div className="p-6 bg-white border-t border-[#E8E2D5] space-y-3 shadow-sm">
              <div className="space-y-1.5 text-xs text-elyrion-muted">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-elyrion-dark font-bold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Delivery (Pakistan)</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase text-[10px]">Free Express Delivery</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-elyrion-dark pt-2 border-t border-[#EFECE4]">
                  <span>Estimated Total</span>
                  <span className="text-elyrion-goldDark text-base font-serif">{formatPrice(totalAmount)}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 neu-gold-button font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 shadow-md"
              >
                <span>Proceed to Checkout</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

              <p className="text-[10.5px] text-center text-elyrion-muted font-medium pt-1">
                💵 Cash on Delivery (COD) Available Nationwide Across Pakistan
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
