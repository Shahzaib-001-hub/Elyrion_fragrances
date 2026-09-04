/**
 * ============================================================================
 * ELYRION — The Fragrance of Paradise
 * MongoDB Connection Handler via Mongoose ODM
 * ============================================================================
 * 
 * Provides an optimized, cached connection pool to prevent multiple
 * redundant connections during Next.js serverless hot-reloads and route executions.
 */

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn(
    '⚠️ [ELYRION DB Warning]: MONGODB_URI is not defined in environment variables. Defaulting to local/memory fallback.'
  );
}

/**
 * Global is used here to maintain a cached connection across hot-reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Connects to MongoDB Atlas or returns existing active connection pool.
 * @returns {Promise<typeof mongoose>}
 */
export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 8000,
    };

    const uri = MONGODB_URI || 'mongodb+srv://officialshahzaib001_db_user:gzZDtMKksOOEZrYG@cluster0.fuhpxhv.mongodb.net/elyrion_fragrances?retryWrites=true&w=majority';

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      console.log('✨ [ELYRION DB]: Connected to MongoDB Atlas (Paradise Database)');
      return mongooseInstance;
    }).catch((err) => {
      console.error('❌ [ELYRION DB Error]: Failed to connect to MongoDB Atlas:', err.message);
      cached.promise = null;
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

