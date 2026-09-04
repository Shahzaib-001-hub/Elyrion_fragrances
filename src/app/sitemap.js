import { seedProducts, seedCategories } from '@/lib/seedData';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://elyrionfragrances.com';

  // Static Routes
  const staticRoutes = [
    '',
    '/products',
    '/bundles',
    '/quiz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages
  const productRoutes = seedProducts.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Programmatic SEO Note Routes
  const noteRoutes = [
    'vanilla',
    'coffee',
    'oud',
    'strawberry',
    'cardamom',
    'bergamot',
    'rose',
    'chocolate',
  ].map((note) => ({
    url: `${baseUrl}/notes/${note}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes, ...noteRoutes];
}

