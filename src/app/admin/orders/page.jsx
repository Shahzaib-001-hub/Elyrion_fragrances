'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Orders & Customer Fulfillment (/admin/orders)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faGift,
  faPhone,
  faMapPin,
  faCheckCircle,
  faClock,
  faTruckFast,
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { formatPKR } from '@/lib/utils';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch('/api/orders');
        const data = await res.json();
        if (data.success && Array.isArray(data.orders)) {
          setOrders(data.orders);
        }
      } catch (e) {
        console.warn('Orders fetch note:', e);
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch('/api/orders', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setOrders((prev) =>
          prev.map((o) =>
            o._id === orderId || o.orderNumber === orderId ? { ...o, status: newStatus } : o
          )
        );
      }
    } catch (e) {
      setOrders((prev) =>
        prev.map((o) =>
          o._id === orderId || o.orderNumber === orderId ? { ...o, status: newStatus } : o
        )
      );
    }
  };

  const filteredOrders = orders.filter((o) => {
    const orderNum = o.orderNumber || o._id || '';
    const custName = o.customer?.fullName || o.customerName || '';
    const city = o.customer?.city || o.city || '';

    const matchesSearch =
      orderNum.toLowerCase().includes(search.toLowerCase()) ||
      custName.toLowerCase().includes(search.toLowerCase()) ||
      city.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' || (o.status || 'Pending').toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Orders & Customer Fulfillment"
        subtitle="Manage customer orders, Cash on Delivery fulfillment, complimentary 5ml sample preferences, and logistics dispatch."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="p-6 bg-white rounded-3xl border border-[#E5E0D5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-elyrion-muted text-xs"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Order ID, customer, city..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] border border-[#E0DACE] rounded-xl text-xs text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['ALL', 'Pending', 'Processing', 'Dispatched', 'Delivered'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  statusFilter === st
                    ? 'neu-gold-button text-white font-bold shadow-sm'
                    : 'bg-white border border-[#E0DACE] text-elyrion-dark hover:border-elyrion-gold'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="bg-white rounded-3xl border border-[#E5E0D5] shadow-sm overflow-hidden">
          {loading ? (
            <div className="py-24 text-center space-y-3">
              <FontAwesomeIcon icon={faSpinner} className="text-2xl text-elyrion-gold animate-spin" />
              <p className="text-xs text-elyrion-muted uppercase tracking-widest font-bold">
                Loading customer orders...
              </p>
            </div>
          ) : filteredOrders.length === 0 ? (
            /* Professional Empty State */
            <div className="py-20 px-6 text-center max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#FAF8F5] border border-[#E5E0D5] flex items-center justify-center mx-auto text-elyrion-gold text-2xl shadow-inner">
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-elyrion-dark">
                  {search || statusFilter !== 'ALL'
                    ? 'No Matching Orders Found'
                    : 'No Customer Orders Yet'}
                </h4>
                <p className="text-xs text-elyrion-muted leading-relaxed font-light">
                  {search || statusFilter !== 'ALL'
                    ? 'Try adjusting your search criteria or filter to locate the order.'
                    : 'When customers place orders via Cash on Delivery or online payment, they will appear here in real time with complimentary 5ml tester preferences and shipping addresses.'}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FAF8F5] border border-elyrion-gold/40 text-elyrion-dark hover:border-elyrion-gold transition-colors"
                >
                  <span>Visit Online Storefront</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-elyrion-charcoal">
                <thead className="bg-[#FAF8F5] border-b border-[#E5E0D5] uppercase text-[10px] tracking-wider text-elyrion-muted font-bold">
                  <tr>
                    <th className="py-4 px-6">Order ID & Date</th>
                    <th className="py-4 px-6">Customer & Destination</th>
                    <th className="py-4 px-6">Items & Free 5ml Sample</th>
                    <th className="py-4 px-6">Total (PKR)</th>
                    <th className="py-4 px-6">Fulfillment Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D5]/60">
                  {filteredOrders.map((ord, idx) => {
                    const id = ord._id || ord.orderNumber || ord.orderId;
                    const customerName = ord.customer?.fullName || ord.customerName || 'Customer';
                    const phone = ord.customer?.phone || ord.phone || 'N/A';
                    const city = ord.customer?.city || ord.city || 'Pakistan';
                    const total = ord.total || ord.totalAmount || 0;
                    const items = Array.isArray(ord.items) ? ord.items : [];
                    const sampleName =
                      typeof ord.freeSample === 'object'
                        ? ord.freeSample?.name
                        : ord.freeSample;

                    return (
                      <tr key={id || idx} className="hover:bg-[#FAF8F5]/80 transition-colors">
                        {/* Order ID & Date */}
                        <td className="py-4 px-6 space-y-1">
                          <span className="font-bold text-elyrion-dark font-mono block text-sm">
                            {ord.orderNumber || ord.orderId || id}
                          </span>
                          <span className="text-[11px] text-elyrion-muted font-mono flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} className="text-elyrion-gold text-[9px]" />
                            {ord.createdAt
                              ? new Date(ord.createdAt).toLocaleDateString()
                              : 'Recent'}
                          </span>
                        </td>

                        {/* Customer & Destination */}
                        <td className="py-4 px-6 space-y-1">
                          <span className="font-bold text-elyrion-dark block">
                            {customerName}
                          </span>
                          <div className="flex items-center gap-3 text-[11px] text-elyrion-muted">
                            <span className="flex items-center gap-1 font-mono">
                              <FontAwesomeIcon icon={faPhone} className="text-elyrion-gold text-[9px]" />
                              {phone}
                            </span>
                            <span className="flex items-center gap-1">
                              <FontAwesomeIcon icon={faMapPin} className="text-rose-500 text-[9px]" />
                              {city}
                            </span>
                          </div>
                        </td>

                        {/* Items & Free 5ml Sample */}
                        <td className="py-4 px-6 space-y-1">
                          <div className="text-elyrion-dark font-medium">
                            {items.map((item, i) => (
                              <div key={i}>
                                {typeof item === 'string'
                                  ? item
                                  : `${item.name} (${item.quantity || 1}x)`}
                              </div>
                            ))}
                          </div>
                          {sampleName && (
                            <span className="inline-flex items-center gap-1 text-[10px] text-elyrion-goldDark font-semibold bg-elyrion-gold/10 border border-elyrion-gold/30 px-2 py-0.5 rounded-full">
                              <FontAwesomeIcon icon={faGift} className="text-[8px]" />
                              Free 5ml: {sampleName}
                            </span>
                          )}
                        </td>

                        {/* Total */}
                        <td className="py-4 px-6 font-mono font-bold text-sm text-elyrion-dark">
                          {formatPKR(total)}
                        </td>

                        {/* Status Dropdown */}
                        <td className="py-4 px-6">
                          <select
                            value={ord.status || 'Pending'}
                            onChange={(e) => handleStatusChange(id, e.target.value)}
                            className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider border focus:outline-none ${
                              ord.status === 'Delivered'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : ord.status === 'Dispatched' || ord.status === 'Shipped'
                                ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                                : 'bg-amber-50 text-amber-800 border-amber-200'
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
