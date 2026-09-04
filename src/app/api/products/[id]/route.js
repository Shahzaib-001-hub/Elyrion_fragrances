/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Single Product API Route (/api/products/[id])
 * ============================================================================
 * 
 * Supports ID or Slug lookup, editing, and deletion.
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { seedProducts } from '@/lib/seedData';
import mongoose from 'mongoose';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    let product = null;

    try {
      await connectDB();
      if (mongoose.Types.ObjectId.isValid(id)) {
        product = await Product.findById(id);
      } else {
        // Find by slug
        product = await Product.findOne({ slug: id });
      }
    } catch (e) {
      console.warn('DB lookup failed, checking fallback dataset:', e.message);
    }

    // Seed fallback lookup
    if (!product) {
      product = seedProducts.find(
        (p) => p.slug === id || p._id === id || p.name.toLowerCase() === id.toLowerCase()
      );
    }

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Perfume not found in ELYRION catalog' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const updateData = await req.json();

    let updatedProduct;
    if (mongoose.Types.ObjectId.isValid(id)) {
      updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
      });
    } else {
      updatedProduct = await Product.findOneAndUpdate({ slug: id }, updateData, {
        new: true,
        runValidators: true,
      });
    }

    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Perfume updated successfully',
      product: updatedProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    let deleted;
    if (mongoose.Types.ObjectId.isValid(id)) {
      deleted = await Product.findByIdAndDelete(id);
    } else {
      deleted = await Product.findOneAndDelete({ slug: id });
    }

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Product successfully deleted from catalog',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

