'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Admin Dashboard Control Center (/admin) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxesStacked,
  faBagShopping,
  faUsers,
  faMoneyBillWave,
  faArrowTrendUp,
  faPlus,
  faEye,
  faClock,
  faGift,
  faWandMagicSparkles as faSparkles,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import StatsCard from '@/components/admin/StatsCard';
import { seedProducts, seedOrders } from '@/lib/seedData';
import { formatPKR } from '@/lib/utils';

export default function AdminDashboardPage() {
  const [products, setProducts] = useState(seedProducts);
  const [orders, setOrders] = useState(seedOrders);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const [prodRes, orderRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/orders'),
        ]);
        const prodData = await prodRes.json();
        const orderData = await orderRes.json();

        if (prodData.success && prodData.products?.length > 0) {
          setProducts(prodData.products);
        }
        if (orderData.success && orderData.orders?.length > 0) {
          setOrders(orderData.orders);
        }
      } catch (err) {
        console.warn('Dashboard fetch fallback:', err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 2485000);

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Atelier Control Center"
        subtitle="Live metrics, olfactory catalog performance, and customer order fulfillment."
      />

      <div className="px-6 sm:px-8 space-y-8 max-w-7xl">
        
        {/* 1. KEY PERFORMANCE METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatsCard
            title="Total Revenue"
            value={formatPKR(totalRevenue)}
            change="+28.4% from last month"
            icon={faMoneyBillWave}
            accentColor="text-elyrion-gold"
          />
          <StatsCard
            title="Active Perfumes"
            value={products.length}
            change="100% in stock"
            icon={faBoxesStacked}
            accentColor="text-amber-600"
          />
          <StatsCard
            title="Orders Fulfilled"
            value="142"
            change="14 pending dispatch"
            icon={faBagShopping}
            accentColor="text-emerald-600"
          />
          <StatsCard
            title="VIP Club Members"
            value="1,280"
            change="+142 this week"
            icon={faUsers}
            accentColor="text-indigo-600"
          />
        </div>

        {/* 2. QUICK ACTIONS BAR */}
        <div className="p-6 neu-flat rounded-3xl flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-elyrion-charcoal">
              Quick Atelier Actions
            </h4>
            <p className="text-xs text-elyrion-muted font-light">
              Add new fragrances, manage scent note families, or configure promotional bundles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/products/new"
              className="px-4 py-2.5 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 shadow-sm"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Create Fragrance</span>
            </Link>
            <Link
              href="/admin/categories"
              className="px-4 py-2.5 neu-button text-elyrion-charcoal text-xs font-semibold uppercase tracking-wider rounded-xl"
            >
              <span>Note Families</span>
            </Link>
            <Link
              href="/admin/bundles"
              className="px-4 py-2.5 neu-button text-elyrion-charcoal text-xs font-semibold uppercase tracking-wider rounded-xl"
            >
              <span>Bundles & Offers</span>
            </Link>
          </div>
        </div>

        {/* 3. TWO COLUMN: RECENT ORDERS & TOP FRAGRANCES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Orders (7 cols) */}
          <div className="lg:col-span-7 neu-flat rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-[#DCD6C8] pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBagShopping} className="text-elyrion-gold text-sm" />
                <h3 className="font-serif text-base font-bold text-elyrion-charcoal">
                  Recent Customer Orders
                </h3>
              </div>
              <Link href="/admin/orders" className="text-xs text-elyrion-gold font-bold hover:underline">
                View All Orders →
              </Link>
            </div>

            <div className="space-y-3">
              {orders.slice(0, 5).map((order, idx) => (
                <div
                  key={idx}
                  className="p-4 neu-pressed rounded-2xl flex items-center justify-between gap-4 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-elyrion-charcoal font-mono">
                        {order.orderId || `#ELY-${1000 + idx}`}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-700 border border-amber-500/30">
                        {order.status || 'Processing'}
                      </span>
                    </div>
                    <span className="text-elyrion-muted block font-medium">
                      {order.customerName || 'Luxury Client'} • {order.city || 'Karachi'}
                    </span>
                    {order.freeSample && (
                      <span className="text-[10px] text-elyrion-gold flex items-center gap-1 font-semibold">
                        <FontAwesomeIcon icon={faGift} className="text-[9px]" />
                        Free Sample: {order.freeSample}
                      </span>
                    )}
                  </div>

                  <div className="text-right space-y-1">
                    <span className="font-bold text-elyrion-charcoal font-mono text-sm block">
                      {formatPKR(order.totalAmount || 4950)}
                    </span>
                    <span className="text-[10px] text-elyrion-muted font-mono block">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Just now'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Perfumes Catalog Summary (5 cols) */}
          <div className="lg:col-span-5 neu-flat rounded-3xl p-6 sm:p-7 space-y-5">
            <div className="flex items-center justify-between border-b border-[#DCD6C8] pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-sm" />
                <h3 className="font-serif text-base font-bold text-elyrion-charcoal">
                  Top Extraits de Parfum
                </h3>
              </div>
              <Link href="/admin/products" className="text-xs text-elyrion-gold font-bold hover:underline">
                Catalog ({products.length}) →
              </Link>
            </div>

            <div className="space-y-3">
              {products.slice(0, 5).map((prod) => (
                <div
                  key={prod._id || prod.slug}
                  className="p-3.5 neu-pressed rounded-2xl flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={prod.images?.studio || prod.studioImage}
                      alt={prod.name}
                      className="w-11 h-11 rounded-xl object-cover border border-[#DCD6C8]"
                    />
                    <div>
                      <h5 className="font-bold text-elyrion-charcoal text-xs line-clamp-1">
                        {prod.name}
                      </h5>
                      <span className="text-[10px] text-elyrion-muted block">
                        {prod.noteFamily}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-elyrion-charcoal font-mono block">
                      {formatPKR(prod.salePrice || prod.price)}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold block">
                      {prod.stock} in stock
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

