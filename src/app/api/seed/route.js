/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Database Seeder API Route (/api/seed)
 * ============================================================================
 * 
 * Populates MongoDB Atlas with initial high-fashion perfumes, note families,
 * bundles, and an initial superadmin account for instant deployment.
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';
import Category from '@/models/Category';
import Bundle from '@/models/Bundle';
import Mood from '@/models/Mood';
import User from '@/models/User';
import {
  seedProducts,
  seedCategories,
  seedBundles,
  seedMoods,
} from '@/lib/seedData';

export async function POST(req) {
  try {
    await connectDB();

    // 1. Seed Categories & Note Families
    await Category.deleteMany({});
    await Category.insertMany(seedCategories);

    // 2. Seed Moods
    await Mood.deleteMany({});
    await Mood.insertMany(seedMoods);

    // 3. Seed Bundles
    await Bundle.deleteMany({});
    await Bundle.insertMany(seedBundles);

    // 4. Seed Products
    await Product.deleteMany({});
    const insertedProducts = await Product.insertMany(seedProducts);

    // 5. Seed Admin User
    const existingAdmin = await User.findOne({ email: 'admin@elyrionfragrances.com' });
    if (!existingAdmin) {
      await User.create({
        name: 'Shahzaib — Creative Director',
        email: 'admin@elyrionfragrances.com',
        password: 'elyrion_admin_2026', // In production, hash with bcrypt
        role: 'superadmin',
        isActive: true,
      });
    }

    return NextResponse.json({
      success: true,
      message: '✨ ELYRION Database successfully seeded with luxury catalog and admin account.',
      productsCount: insertedProducts.length,
      categoriesCount: seedCategories.length,
      bundlesCount: seedBundles.length,
    });
  } catch (error) {
    console.error('Seed API Error:', error);
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
    message: 'Send a POST request to /api/seed to initialize or reset ELYRION database with seed data.',
  });
}

