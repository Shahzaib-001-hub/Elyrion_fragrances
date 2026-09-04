/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Moods & Vibes API Route (/api/moods)
 * ============================================================================
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Mood from '@/models/Mood';
import { seedMoods, seedVibes } from '@/lib/seedData';

export async function GET() {
  try {
    let moods = [];
    try {
      await connectDB();
      moods = await Mood.find({});
      if (moods.length === 0) {
        await Mood.insertMany(seedMoods);
        moods = await Mood.find({});
      }
    } catch (e) {
      moods = seedMoods;
    }

    return NextResponse.json({
      success: true,
      moods,
      vibes: seedVibes,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message, moods: seedMoods, vibes: seedVibes },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const newMood = await Mood.create(body);
    return NextResponse.json({ success: true, mood: newMood }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

