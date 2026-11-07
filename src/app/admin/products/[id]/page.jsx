'use client';

/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Perfume Editor / Creator Page (/admin/products/[id])
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faWandMagicSparkles as faSparkles } from '@fortawesome/free-solid-svg-icons';
import AdminHeader from '@/components/admin/AdminHeader';
import ProductForm from '@/components/admin/ProductForm';
import { products as catalogProducts } from '@/lib/catalog';

export default function AdminProductEditPage() {
  const params = useParams();
  const id = params?.id;
  const isNew = id === 'new';

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (isNew) return;

    async function loadProduct() {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (data.success && data.product) {
          setProduct(data.product);
        } else {
          // Fallback to seed data
          const fallback = catalogProducts.find((p) => p.slug === id || p._id === id);
          if (fallback) setProduct(fallback);
        }
      } catch (e) {
        const fallback = catalogProducts.find((p) => p.slug === id || p._id === id);
        if (fallback) setProduct(fallback);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id, isNew]);

  return (
    <div className="space-y-8 pb-16">
      <AdminHeader
        title={isNew ? 'Create New Perfume Extrait' : `Edit Perfume: ${product?.name || 'Extrait'}`}
        subtitle="Formulate sensory notes pyramid, upload studio & raw ingredient photography, and craft emotional storytelling."
      />

      <div className="px-6 sm:px-8 space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 px-3.5 py-2 neu-button rounded-xl text-xs text-elyrion-charcoal font-semibold hover:text-elyrion-gold transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to Catalog</span>
          </Link>
        </div>

        {loading ? (
          <div className="p-12 neu-flat rounded-3xl text-center text-elyrion-muted text-xs">
            Loading formulation data...
          </div>
        ) : (
          <ProductForm initialData={product} isEdit={!isNew} />
        )}
      </div>
    </div>
  );
}

