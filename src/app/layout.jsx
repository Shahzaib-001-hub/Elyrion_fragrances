import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import AppLayoutClient from '@/components/layout/AppLayoutClient';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://elyrionfragrances.com'),
  title: {
    default: 'ELYRION — The Fragrance of Paradise | Artisanal Luxury Extrait de Parfum',
    template: '%s | ELYRION Fragrances',
  },
  description:
    'Step into Paradise with ELYRION. Artisanal Extrait de Parfum crafted with high-concentration natural extracts (35% Oil), 14+ hour longevity, raw note visual discovery, and bespoke bundles.',
  keywords: [
    'ELYRION',
    'elyrion fragrances',
    'the fragrance of paradise',
    'luxury perfume pakistan',
    'extrait de parfum',
    'gourmand perfume',
    'oud perfume',
    'cardamom fragrance',
    'long lasting perfume',
  ],
  authors: [{ name: 'ELYRION Fragrances' }],
  creator: 'ELYRION Creative House',
  publisher: 'ELYRION Fragrances',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elyrionfragrances.com',
    siteName: 'ELYRION Fragrances',
    title: 'ELYRION — The Fragrance of Paradise',
    description:
      'Artisanal Extrait de Parfum crafted with 35% oil concentration for extraordinary sillage and longevity.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'ELYRION Luxury Fragrances of Paradise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELYRION — The Fragrance of Paradise',
    description: 'Artisanal Extrait de Parfum with 35% oil concentration.',
    images: ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A171E] antialiased selection:bg-elyrion-gold selection:text-white">
        <CartProvider>
          <WishlistProvider>
            <AppLayoutClient>{children}</AppLayoutClient>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
