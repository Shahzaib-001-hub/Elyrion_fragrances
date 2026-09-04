'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Staff & User Management (/admin/users) - Light Neumorphic UI
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faPlus,
  faCrown,
  faEnvelope,
  faShieldHalved,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import { seedUsers } from '@/lib/seedData';

export default function AdminUsersPage() {
  const [users, setUsers] = useState(seedUsers);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Staff',
  });

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        if (data.success && data.users?.length > 0) {
          setUsers(data.users);
        }
      } catch (e) {
        console.warn('Users fetch fallback:', e);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setUsers((prev) => [...prev, data.user]);
        setIsAdding(false);
        setFormData({ name: '', email: '', role: 'Staff' });
      } else {
        alert('Failed: ' + data.error);
      }
    } catch (e) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title="Staff & User Management"
        subtitle="Manage access permissions for perfumers, fulfillment team, and executive administrators."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-elyrion-charcoal">
            Atelier Staff Members ({users.length})
          </h3>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>{isAdding ? 'Close Form' : 'Invite Staff Member'}</span>
          </button>
        </div>

        {/* Add User Form */}
        {isAdding && (
          <form onSubmit={handleAddUser} className="p-6 sm:p-8 neu-flat rounded-3xl space-y-4 animate-in fade-in duration-200">
            <h4 className="font-serif text-base font-bold text-elyrion-charcoal">
              Invite New Team Member
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shahzaib"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="perfumer@elyrion.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold"
                />
              </div>

              <div>
                <label className="block text-elyrion-charcoal font-bold mb-1.5">Access Role *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 neu-pressed rounded-xl text-elyrion-charcoal focus:outline-none focus:ring-1 focus:ring-elyrion-gold font-semibold"
                >
                  <option value="Super Admin">Super Admin (Full Access)</option>
                  <option value="Master Perfumer">Master Perfumer (Catalog & Formulations)</option>
                  <option value="Fulfillment Manager">Fulfillment Manager (Orders & Logistics)</option>
                  <option value="Staff">Staff (View Only)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-3 neu-gold-button text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
              >
                Send Invite
              </button>
            </div>
          </form>
        )}

        {/* Users Table */}
        <div className="neu-flat rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-elyrion-charcoal">
              <thead className="bg-[#ECE8DF] border-b border-[#DCD6C8] uppercase text-[10px] tracking-wider text-elyrion-muted font-bold">
                <tr>
                  <th className="py-4 px-6">Member</th>
                  <th className="py-4 px-6">Email Address</th>
                  <th className="py-4 px-6">Role & Permission</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD6C8]/60">
                {users.map((u, idx) => (
                  <tr key={idx} className="hover:bg-white/40 transition-colors">
                    {/* Name & Avatar */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-elyrion-gold/20 border border-elyrion-gold flex items-center justify-center text-elyrion-gold font-bold font-serif shadow-inner">
                          {u.name?.charAt(0) || 'U'}
                        </div>
                        <span className="font-bold text-elyrion-charcoal text-sm">
                          {u.name}
                        </span>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="py-4 px-6 font-mono text-xs text-elyrion-muted">
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faEnvelope} className="text-elyrion-gold text-[10px]" />
                        {u.email}
                      </span>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-elyrion-gold/15 text-elyrion-gold border border-elyrion-gold/30">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-[10px]" />
                        {u.role || 'Staff'}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[9px]" />
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

