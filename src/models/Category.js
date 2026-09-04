/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Mongoose Model: Category (Fragrance Note Families & Collections)
 * ============================================================================
 */

import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide category name'],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    heading: {
      type: String,
      required: true,
      // e.g. "Sweet Enough to Crave" or "Deep Notes. Bold Presence."
    },
    subheading: {
      type: String,
      default: '',
    },
    bannerImage: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#D4AF37',
    },
    featuredNotes: {
      type: [String],
      default: [],
    },
    orderIndex: {
      type: Number,
      default: 0,
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

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);

