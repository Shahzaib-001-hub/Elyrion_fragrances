'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Orders & Customer Fulfillment (/admin/orders) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
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
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { seedOrders } from '@/lib/seedData';
import { formatPKR } from '@/lib/utils';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(seedOrders);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const res = await fetch('/api/orders');
        const data = await res.json();
        if (data.success && data.orders?.length > 0) {
          setOrders(data.orders);
        }
      } catch (e) {
        console.warn('Orders fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await fetch(`/api/orders`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setOrders((prev) =>
          prev.map((o) => (o._id === orderId || o.orderId === orderId ? { ...o, status: newStatus } : o))
        );
      }
    } catch (e) {
      // Local state update fallback
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId || o.orderId === orderId ? { ...o, status: newStatus } : o))
      );
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.orderId?.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName?.toLowerCase().includes(search.toLowerCase()) ||
      o.city?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Orders & Customer Fulfillment"
        subtitle="Track artisanal orders, dispatch status, complimentary 5ml sample requests, and customer delivery details."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        
        {/* Search & Filter Bar */}
        <div className="p-6 neu-flat rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
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
              className="w-full pl-10 pr-4 py-2.5 neu-pressed rounded-xl text-xs text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['ALL', 'Processing', 'Dispatched', 'Delivered'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  statusFilter === st
                    ? 'neu-gold-button text-white font-bold shadow-sm'
                    : 'neu-button text-elyrion-charcoal hover:border-elyrion-gold'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="neu-flat rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-elyrion-charcoal">
              <thead className="bg-[#ECE8DF] border-b border-[#DCD6C8] uppercase text-[10px] tracking-wider text-elyrion-muted font-bold">
                <tr>
                  <th className="py-4 px-6">Order ID & Date</th>
                  <th className="py-4 px-6">Customer & Destination</th>
                  <th className="py-4 px-6">Items & Free 5ml Sample</th>
                  <th className="py-4 px-6">Total (PKR)</th>
                  <th className="py-4 px-6">Fulfillment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD6C8]/60">
                {filteredOrders.map((ord, idx) => {
                  const id = ord._id || ord.orderId || `#ELY-${1000 + idx}`;
                  return (
                    <tr key={idx} className="hover:bg-white/40 transition-colors">
                      {/* Order ID */}
                      <td className="py-4 px-6 space-y-1">
                        <span className="font-bold text-elyrion-charcoal font-mono block text-sm">
                          {ord.orderId || `#ELY-${1000 + idx}`}
                        </span>
                        <span className="text-[11px] text-elyrion-muted font-mono flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} className="text-elyrion-gold text-[9px]" />
                          {ord.createdAt ? new Date(ord.createdAt).toLocaleDateString() : 'Sep 4, 2026'}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="py-4 px-6 space-y-1">
                        <span className="font-bold text-elyrion-charcoal block">
                          {ord.customerName || 'Luxury Client'}
                        </span>
                        <div className="flex items-center gap-3 text-[11px] text-elyrion-muted">
                          <span className="flex items-center gap-1 font-mono">
                            <FontAwesomeIcon icon={faPhone} className="text-elyrion-gold text-[9px]" />
                            {ord.phone || '+92 300 1234567'}
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faMapPin} className="text-rose-500 text-[9px]" />
                            {ord.city || 'Karachi'}
                          </span>
                        </div>
                      </td>

                      {/* Items & Free Sample */}
                      <td className="py-4 px-6 space-y-1">
                        <div className="text-elyrion-charcoal font-medium">
                          {(ord.items || ['Café de Nuit (50ml)']).map((item, i) => (
                            <div key={i}>
                              {typeof item === 'string' ? item : `${item.name} (${item.quantity}x)`}
                            </div>
                          ))}
                        </div>
                        {ord.freeSample && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-elyrion-gold font-semibold bg-elyrion-gold/10 border border-elyrion-gold/30 px-2 py-0.5 rounded-full">
                            <FontAwesomeIcon icon={faGift} className="text-[8px]" />
                            Free Sample: {ord.freeSample}
                          </span>
                        )}
                      </td>

                      {/* Total */}
                      <td className="py-4 px-6 font-mono font-bold text-sm text-elyrion-charcoal">
                        {formatPKR(ord.totalAmount || 4950)}
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-4 px-6">
                        <select
                          value={ord.status || 'Processing'}
                          onChange={(e) => handleStatusChange(id, e.target.value)}
                          className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider neu-pressed focus:outline-none ${
                            ord.status === 'Delivered'
                              ? 'text-emerald-800'
                              : ord.status === 'Dispatched'
                              ? 'text-indigo-800'
                              : 'text-amber-800'
                          }`}
                        >
                          <option value="Processing">Processing</option>
                          <option value="Dispatched">Dispatched</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

