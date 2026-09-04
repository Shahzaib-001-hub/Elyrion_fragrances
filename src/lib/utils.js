/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * General Helper Utilities
 * ============================================================================
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes cleanly
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency numbers with PKR / USD / localized display
 * @param {number} amount
 * @param {string} currency - default 'PKR' or 'Rs.'
 */
export function formatPrice(amount, currency = "Rs.") {
  if (amount === undefined || amount === null || isNaN(amount)) return "Rs. 0";
  return `${currency} ${Number(amount).toLocaleString()}`;
}

export const formatPKR = formatPrice;

/**
 * Generate URL-friendly slug from string
 * @param {string} text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

/**
 * Calculate discount percentage
 * @param {number} originalPrice
 * @param {number} salePrice
 */
export function calculateDiscount(originalPrice, salePrice) {
  if (!salePrice || salePrice >= originalPrice) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

/**
 * Truncate long text strings with ellipses
 */
export function truncate(text, length = 100) {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

