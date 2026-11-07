/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Database Catalog Sync API Route (/api/seed)
 * ============================================================================
 * 
 * Populates MongoDB Atlas with official luxury perfume catalog, note families,
 * bundles, and initial superadmin account. Does NOT insert mock orders.
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import Category from '@/models/Category';
import Bundle from '@/models/Bundle';
import Mood from '@/models/Mood';
import User from '@/models/User';
import {
  products as catalogProducts,
  categories as catalogCategories,
  bundles as catalogBundles,
  moods as catalogMoods,
} from '@/lib/catalog';

export async function POST(req) {
  try {
    await connectDB();

    // 1. Sync Categories & Note Families
    await Category.deleteMany({});
    await Category.insertMany(catalogCategories);

    // 2. Sync Moods
    await Mood.deleteMany({});
    await Mood.insertMany(catalogMoods);

    // 3. Sync Bundles
    await Bundle.deleteMany({});
    await Bundle.insertMany(catalogBundles);

    // 4. Sync Products
    await Product.deleteMany({});
    const insertedProducts = await Product.insertMany(catalogProducts);

    // 5. Ensure Superadmin
    const existingAdmin = await User.findOne({ email: 'admin@elyrionfragrances.com' });
    if (!existingAdmin) {
      await User.create({
        name: 'Shahzaib — Creative Director',
        email: 'admin@elyrionfragrances.com',
        password: 'elyrion_admin_2026',
        role: 'superadmin',
        isActive: true,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'ELYRION official catalog and admin account successfully synchronized with MongoDB Atlas.',
      productsCount: insertedProducts.length,
      categoriesCount: catalogCategories.length,
      bundlesCount: catalogBundles.length,
    });
  } catch (error) {
    console.error('Catalog Sync Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Send a POST request to /api/seed to sync official catalog with MongoDB Atlas.',
  });
}
