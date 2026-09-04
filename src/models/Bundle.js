/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Mongoose Model: Bundle (Curated Gift Sets & Promotional Offers)
 * ============================================================================
 */

import mongoose from 'mongoose';

const BundleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide bundle title'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      default: null,
    },
    badge: {
      type: String,
      default: 'LIMITED BUNDLE',
    },
    category: {
      type: String,
      enum: [
        'Best Seller Bundles',
        'His & Hers Bundles',
        'Everyday Perfume Bundles',
        'Date Night Bundles',
        'Discovery Sets',
        'Gift Bundles',
      ],
      default: 'Best Seller Bundles',
    },
    includedPerfumes: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Bundle || mongoose.model('Bundle', BundleSchema);

