/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Mongoose Model: Product (Luxury Perfume Extrait)
 * ============================================================================
 * 
 * Defines the complete olfactory, visual, emotional, and SEO structure
 * for every fragrance in the ELYRION collection.
 */

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: [true, 'Please provide a fragrance name'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: [true, 'Please provide an emotional sensory tagline'],
      trim: true,
      // e.g. "Smells like walking into a Parisian café on a rainy evening with warm espresso"
    },
    description: {
      type: String,
      required: [true, 'Please provide a detailed editorial description'],
    },
    concentration: {
      type: String,
      default: 'Extrait de Parfum (35% Oil Concentration)',
    },
    size: {
      type: String,
      default: '50ml / 1.7 fl. oz.',
    },

    // Pricing & Inventory
    price: {
      type: Number,
      required: [true, 'Please provide the retail price'],
      min: [0, 'Price must be positive'],
    },
    salePrice: {
      type: Number,
      default: null,
    },
    stock: {
      type: Number,
      required: true,
      default: 50,
      min: [0, 'Stock cannot be negative'],
    },

    // Categorization & Badges
    category: {
      type: String,
      enum: ['MEN', 'WOMEN', 'UNISEX'],
      required: true,
      default: 'UNISEX',
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isNewArrival: {
      type: Boolean,
      default: false,
    },

    // Dual Photography Direction
    images: {
      // Clean studio product shot for catalog grids & white-background precision
      studio: {
        type: String,
        required: [true, 'Please provide a studio product image URL'],
      },
      // Aesthetic lifestyle shot with raw ingredients (e.g. coffee beans, chocolate, strawberries, cardamom)
      lifestyle: {
        type: String,
        required: [true, 'Please provide a note-infused lifestyle image URL'],
      },
      gallery: [String],
    },

    // Olfactory Notes Pyramid
    notes: {
      topNotes: {
        type: [String],
        default: [], // e.g. ["Cardamom", "Bitter Almond", "Roasted Coffee"]
      },
      heartNotes: {
        type: [String],
        default: [], // e.g. ["Belgian Dark Chocolate", "Tonka Bean"]
      },
      baseNotes: {
        type: [String],
        default: [], // e.g. ["Madagascar Bourbon Vanilla", "Amber"]
      },
    },

    // Note Family (Sweet, Dark & Intense, Fresh & Clean, Floral & Romantic)
    noteFamily: {
      type: String,
      enum: [
        'Sweet & Dessert-Inspired',
        'Deep, Dark & Intense',
        'Fresh & Clean',
        'Floral & Romantic',
        'Other'
      ],
      required: true,
      default: 'Sweet & Dessert-Inspired',
    },

    // Moods & Personality Vibes
    moods: {
      type: [String],
      // ["Romantic", "Confident", "Mysterious", "Playful", "Powerful", "Calm", "Fresh", "Seductive"]
      default: ['Confident'],
    },
    vibe: {
      type: String,
      // "The Sweet One", "The Mysterious One", "The Clean One", "The Romantic One", "The Bold One"
      default: 'The Sweet One',
    },

    // Performance & Sillage
    longevityHours: {
      type: Number,
      default: 12,
      min: 1,
      max: 24,
    },
    sillage: {
      type: String,
      enum: ['Subtle', 'Moderate', 'Intense', 'Enormous'],
      default: 'Intense',
    },
    season: {
      type: String,
      default: 'All Seasons / Evening',
    },

    // Social Proof & Ratings
    rating: {
      type: Number,
      default: 4.9,
      min: 1,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 24,
    },

    // SEO Optimization Metadata
    seo: {
      metaTitle: {
        type: String,
        default: '',
      },
      metaDescription: {
        type: String,
        default: '',
      },
      keywords: {
        type: [String],
        default: [],
      },
      canonicalUrl: {
        type: String,
        default: '',
      },
      ogImage: {
        type: String,
        default: '',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation during Next.js hot-reloads
export default mongoose.models.Product || mongoose.model('Product', ProductSchema);

