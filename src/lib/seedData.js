/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * Master Catalog Adapter
 * ============================================================================
 */

import {
  categories,
  moods,
  vibes,
  products,
  bundles,
  reviews,
  promotionalOffers,
} from './catalog';

export {
  categories,
  moods,
  vibes,
  products,
  bundles,
  reviews,
  promotionalOffers,
};

// Aliases for seamless backward compatibility across legacy imports
export const seedCategories = categories;
export const seedMoods = moods;
export const seedVibes = vibes;
export const seedProducts = products;
export const seedBundles = bundles;
export const seedReviews = reviews;

// Fake seed mock data completely cleared
export const seedUsers = [];
export const seedOrders = [];
