/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Bundles & Promotional Offers API Route (/api/bundles)
 * ============================================================================
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Bundle from '@/models/Bundle';
import { bundles as catalogBundles } from '@/lib/catalog';
import { slugify } from '@/lib/utils';

export async function GET() {
  try {
    let bundles = [];
    try {
      await connectDB();
      bundles = await Bundle.find({}).sort({ orderIndex: 1, createdAt: -1 });
      if (bundles.length === 0) {
        bundles = catalogBundles;
      }
    } catch (e) {
      bundles = catalogBundles;
    }

    return NextResponse.json({
      success: true,
      count: bundles.length,
      bundles,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message, bundles: catalogBundles },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const slug = body.slug || slugify(body.title);

    const newBundle = await Bundle.create({
      ...body,
      slug,
    });

    return NextResponse.json({ success: true, bundle: newBundle }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
