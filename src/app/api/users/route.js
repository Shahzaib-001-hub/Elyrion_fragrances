/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * User & Staff Management API Route (/api/users)
 * ============================================================================
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/User';

const fallbackUsers = [
  {
    _id: 'usr-1',
    name: 'Shahzaib — Creative Director',
    email: 'admin@elyrionfragrances.com',
    role: 'superadmin',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'usr-2',
    name: 'Scent Curator & Inventory',
    email: 'curator@elyrionfragrances.com',
    role: 'manager',
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    let users = [];
    try {
      await connectDB();
      users = await User.find({}).select('-password').sort({ createdAt: -1 });
      if (users.length === 0) {
        await User.create({
          name: 'Shahzaib — Creative Director',
          email: 'admin@elyrionfragrances.com',
          password: 'elyrion_admin_2026',
          role: 'superadmin',
          isActive: true,
        });
        users = await User.find({}).select('-password');
      }
    } catch (e) {
      users = fallbackUsers;
    }

    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message, users: fallbackUsers },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const existing = await User.findOne({ email: body.email });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    const newUser = await User.create(body);
    const sanitizedUser = newUser.toObject();
    delete sanitizedUser.password;

    return NextResponse.json({ success: true, user: sanitizedUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { id, role, isActive } = body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role, isActive },
      { new: true }
    ).select('-password');

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

