/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Mongoose Model: Mood & Vibe (Sensory Discovery Mapping)
 * ============================================================================
 */

import mongoose from 'mongoose';

const MoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // e.g. "Romantic", "Confident", "Mysterious"
    },
    icon: {
      type: String,
      default: 'sparkles',
    },
    description: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      enum: ['mood', 'vibe'],
      default: 'mood',
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

export default mongoose.models.Mood || mongoose.model('Mood', MoodSchema);

