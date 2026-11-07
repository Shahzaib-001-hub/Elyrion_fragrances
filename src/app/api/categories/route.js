/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Categories & Note Families API Route (/api/categories)
 * ============================================================================
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Category from '@/models/Category';
import { categories as catalogCategories } from '@/lib/catalog';
import { slugify } from '@/lib/utils';

export async function GET() {
  try {
    let cats = [];
    try {
      await connectDB();
      cats = await Category.find({}).sort({ orderIndex: 1 });
      if (cats.length === 0) {
        cats = catalogCategories;
      }
    } catch (e) {
      cats = catalogCategories;
    }

    return NextResponse.json({
      success: true,
      categories: cats,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message, categories: catalogCategories },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const slug = body.slug || slugify(body.name);

    const newCategory = await Category.create({
      ...body,
      slug,
    });

    return NextResponse.json({ success: true, category: newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
