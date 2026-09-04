/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Products API Route (/api/products)
 * ============================================================================
 * 
 * Supports:
 * - GET: Filter by category, noteFamily, mood, vibe, search query, bestSeller
 *   Includes graceful fallback to local seed data if MongoDB is connecting.
 * - POST: Create a new luxury perfume (used by Admin Dashboard)
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import { seedProducts } from '@/lib/seedData';
import { slugify } from '@/lib/utils';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category'); // MEN, WOMEN, UNISEX
    const noteFamily = searchParams.get('noteFamily'); // Sweet, Fresh, etc.
    const mood = searchParams.get('mood');
    const vibe = searchParams.get('vibe');
    const note = searchParams.get('note'); // e.g. Vanilla, Coffee, Oud
    const search = searchParams.get('search');
    const bestSeller = searchParams.get('bestSeller');
    const featured = searchParams.get('featured');

    let products = [];
    let isConnected = false;

    try {
      await connectDB();
      isConnected = true;

      const query = {};

      if (category && category !== 'ALL') {
        query.category = category.toUpperCase();
      }
      if (noteFamily && noteFamily !== 'ALL') {
        query.noteFamily = noteFamily;
      }
      if (mood) {
        query.moods = { $in: [mood] };
      }
      if (vibe) {
        query.vibe = vibe;
      }
      if (bestSeller === 'true') {
        query.isBestSeller = true;
      }
      if (featured === 'true') {
        query.isFeatured = true;
      }
      if (note) {
        // Search across top, heart, and base notes
        const noteRegex = new RegExp(note, 'i');
        query.$or = [
          { 'notes.topNotes': noteRegex },
          { 'notes.heartNotes': noteRegex },
          { 'notes.baseNotes': noteRegex },
        ];
      }
      if (search) {
        const searchRegex = new RegExp(search, 'i');
        query.$or = [
          { name: searchRegex },
          { tagline: searchRegex },
          { description: searchRegex },
          { 'notes.topNotes': searchRegex },
          { 'notes.heartNotes': searchRegex },
          { 'notes.baseNotes': searchRegex },
        ];
      }

      products = await Product.find(query).sort({ createdAt: -1 });

      // If DB is empty, automatically seed and return seed data
      if (products.length === 0 && Object.keys(query).length === 0) {
        await Product.insertMany(seedProducts);
        products = await Product.find({}).sort({ createdAt: -1 });
      }
    } catch (dbErr) {
      console.warn('DB query fallback to seed dataset:', dbErr.message);
      products = seedProducts;
    }

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error('Products GET Error:', error);
    return NextResponse.json(
      { success: false, error: error.message, products: seedProducts },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Auto-generate slug if not provided
    if (!body.slug && body.name) {
      body.slug = slugify(body.name);
    }

    // Auto-populate SEO fields if empty
    if (!body.seo?.metaTitle) {
      body.seo = {
        metaTitle: `${body.name} Extrait de Parfum | ELYRION`,
        metaDescription: body.tagline || body.description?.substring(0, 150),
        keywords: [
          body.name.toLowerCase(),
          'elyrion',
          body.category?.toLowerCase(),
          body.noteFamily?.toLowerCase(),
          ...(body.notes?.topNotes || []),
          ...(body.notes?.baseNotes || []),
        ],
        ...body.seo,
      };
    }

    const newProduct = await Product.create(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Luxury perfume created successfully',
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Product POST Error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

