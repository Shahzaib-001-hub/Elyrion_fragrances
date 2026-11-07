'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Admin Dashboard Control Center (/admin)
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
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import StatsCard from '@/components/admin/StatsCard';
import { formatPKR } from '@/lib/utils';
import { products as catalogProducts } from '@/lib/catalog';

export default function AdminDashboardPage() {
  const [products, setProducts] = useState(catalogProducts);
  const [orders, setOrders] = useState([]);
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

        if (prodData.success && Array.isArray(prodData.products) && prodData.products.length > 0) {
          setProducts(prodData.products);
        }
        if (orderData.success && Array.isArray(orderData.orders)) {
          setOrders(orderData.orders);
        }
      } catch (err) {
        console.warn('Dashboard fetch notice:', err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const totalRevenue = orders.reduce(
    (sum, o) => sum + (o.total || o.totalAmount || 0),
    0
  );
  const fulfilledCount = orders.filter((o) => o.status === 'Delivered').length;
  const pendingCount = orders.filter((o) => o.status !== 'Delivered').length;

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
            change={orders.length > 0 ? `${orders.length} total orders` : 'Real-time sync'}
            icon={faMoneyBillWave}
            accentColor="text-elyrion-gold"
          />
          <StatsCard
            title="Active Extraits"
            value={products.length}
            change="35% oil concentration"
            icon={faBoxesStacked}
            accentColor="text-amber-600"
          />
          <StatsCard
            title="Orders Fulfilled"
            value={fulfilledCount}
            change={`${pendingCount} pending dispatch`}
            icon={faBagShopping}
            accentColor="text-emerald-600"
          />
          <StatsCard
            title="Catalog Status"
            value="100% In Stock"
            change="Complimentary 5ml with every order"
            icon={faSparkles}
            accentColor="text-indigo-600"
          />
        </div>

        {/* 2. QUICK ACTIONS BAR */}
        <div className="p-6 bg-white border border-[#E5E0D5] rounded-3xl shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-elyrion-dark">
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
              className="px-4 py-2.5 bg-[#FAF8F5] border border-[#E0DACE] text-elyrion-dark text-xs font-semibold uppercase tracking-wider rounded-xl hover:border-elyrion-gold transition-colors"
            >
              <span>Note Families</span>
            </Link>
            <Link
              href="/admin/bundles"
              className="px-4 py-2.5 bg-[#FAF8F5] border border-[#E0DACE] text-elyrion-dark text-xs font-semibold uppercase tracking-wider rounded-xl hover:border-elyrion-gold transition-colors"
            >
              <span>Bundles & Offers</span>
            </Link>
          </div>
        </div>

        {/* 3. TWO COLUMN: RECENT ORDERS & TOP FRAGRANCES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Orders (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E0D5] rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBagShopping} className="text-elyrion-gold text-sm" />
                <h3 className="font-serif text-base font-bold text-elyrion-dark">
                  Recent Customer Orders
                </h3>
              </div>
              <Link href="/admin/orders" className="text-xs text-elyrion-goldDark font-bold hover:underline">
                View All Orders →
              </Link>
            </div>

            {loading ? (
              <div className="py-12 text-center text-elyrion-muted text-xs space-y-2">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-elyrion-gold text-lg" />
                <p>Loading recent orders...</p>
              </div>
            ) : orders.length === 0 ? (
              <div className="py-12 px-4 text-center space-y-2 bg-[#FAF8F5] rounded-2xl border border-dashed border-[#E0DACE]">
                <p className="font-serif text-sm font-bold text-elyrion-dark">
                  No Customer Orders Placed Yet
                </p>
                <p className="text-xs text-elyrion-muted max-w-sm mx-auto font-light">
                  Orders placed through your online storefront with Cash on Delivery or online payment will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {orders.slice(0, 5).map((order, idx) => {
                  const id = order.orderNumber || order.orderId || order._id || `#ELY-${1000 + idx}`;
                  const customerName = order.customer?.fullName || order.customerName || 'Customer';
                  const city = order.customer?.city || order.city || 'Pakistan';
                  const total = order.total || order.totalAmount || 0;
                  const sample =
                    typeof order.freeSample === 'object'
                      ? order.freeSample?.name
                      : order.freeSample;

                  return (
                    <div
                      key={id}
                      className="p-4 bg-[#FAF8F5] border border-[#E5E0D5] rounded-2xl flex items-center justify-between gap-4 text-xs hover:border-elyrion-gold/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-elyrion-dark font-mono">
                            {id}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-50 text-amber-800 border border-amber-200">
                            {order.status || 'Pending'}
                          </span>
                        </div>
                        <span className="text-elyrion-muted block font-medium">
                          {customerName} • {city}
                        </span>
                        {sample && (
                          <span className="text-[10px] text-elyrion-goldDark flex items-center gap-1 font-semibold">
                            <FontAwesomeIcon icon={faGift} className="text-[9px]" />
                            Free Sample: {sample}
                          </span>
                        )}
                      </div>

                      <div className="text-right space-y-1">
                        <span className="font-bold text-elyrion-dark font-mono text-sm block">
                          {formatPKR(total)}
                        </span>
                        <span className="text-[10px] text-elyrion-muted font-mono block">
                          {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Recent'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Top Perfumes Catalog Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E0D5] rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-[#E5E0D5] pb-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faSparkles} className="text-elyrion-gold text-sm" />
                <h3 className="font-serif text-base font-bold text-elyrion-dark">
                  Active Extraits Catalog
                </h3>
              </div>
              <Link href="/admin/products" className="text-xs text-elyrion-goldDark font-bold hover:underline">
                Catalog ({products.length}) →
              </Link>
            </div>

            <div className="space-y-3">
              {products.slice(0, 5).map((prod) => (
                <div
                  key={prod._id || prod.slug}
                  className="p-3.5 bg-[#FAF8F5] border border-[#E5E0D5] rounded-2xl flex items-center justify-between gap-3 text-xs hover:border-elyrion-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={prod.images?.studio || prod.image}
                      alt={prod.name}
                      className="w-11 h-11 rounded-xl object-cover border border-[#E5E0D5]"
                    />
                    <div>
                      <h5 className="font-bold text-elyrion-dark text-xs line-clamp-1">
                        {prod.name}
                      </h5>
                      <span className="text-[10px] text-elyrion-muted block">
                        {prod.noteFamily}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-elyrion-dark font-mono block">
                      {formatPKR(prod.salePrice || prod.price)}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold block">
                      {prod.stock || 25} in stock
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
