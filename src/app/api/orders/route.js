/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Orders API Route (/api/orders)
 * ============================================================================
 * 
 * Supports:
 * - GET: Fetch live customer orders
 * - POST: Create a new customer order with complimentary 5ml tester
 * - PUT: Update order fulfillment status
 */

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Order from '@/models/Order';

export async function GET() {
  try {
    let orders = [];
    try {
      await connectDB();
      orders = await Order.find({}).sort({ createdAt: -1 });
    } catch (dbErr) {
      console.warn('Orders DB connection warning:', dbErr.message);
      orders = [];
    }

    return NextResponse.json({
      success: true,
      count: orders.length,
      orders: orders || [],
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message, orders: [] },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const timestamp = Date.now().toString().slice(-4);
    const random = Math.floor(100 + Math.random() * 900);
    const orderNumber = body.orderNumber || `ELY-${timestamp}-${random}`;

    const orderData = {
      orderNumber,
      customer: {
        fullName: body.fullName || body.customer?.fullName || 'Valued Customer',
        email: body.email || body.customer?.email || 'customer@elyrion.pk',
        phone: body.phone || body.customer?.phone || '',
        address: body.address || body.customer?.address || '',
        city: body.city || body.customer?.city || 'Karachi',
        notes: body.notes || body.customer?.notes || '',
      },
      items: body.items || [],
      freeSample: {
        name: body.freeSample || 'Café de Nuit (5ml Complimentary Sample)',
        included: true,
      },
      subtotal: Number(body.subtotal) || 0,
      shippingFee: Number(body.shippingFee) || 0,
      discount: Number(body.discount) || 0,
      total: Number(body.total || body.totalAmount) || 0,
      paymentMethod: body.paymentMethod || 'COD',
      status: body.status || 'Pending',
    };

    const newOrder = await Order.create(orderData);

    return NextResponse.json({
      success: true,
      message: 'Order created successfully',
      order: newOrder,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const { orderId, status } = await req.json();
    await connectDB();

    const updated = await Order.findOneAndUpdate(
      { $or: [{ _id: orderId }, { orderNumber: orderId }] },
      { $set: { status } },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order status updated',
      order: updated,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
