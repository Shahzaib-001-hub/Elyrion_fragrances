import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import AppLayoutClient from '@/components/layout/AppLayoutClient';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://elyrionfragrances.com'),
  title: {
    default: 'ELYRION — Luxury Long Lasting Perfumes in Pakistan | Extrait de Parfum',
    template: '%s | ELYRION Fragrances Pakistan',
  },
  description:
    'Discover Pakistan’s finest long-lasting perfumes. Handcrafted Extrait de Parfum (35% pure oil) with 14+ hours lasting. Free 5ml luxury tester bottle included with every order. Cash on Delivery (COD) available nationwide.',
  keywords: [
    'best perfumes in pakistan',
    'luxury perfumes pakistan',
    'long lasting perfume for men pakistan',
    'long lasting perfume for women pakistan',
    'buy perfumes online pakistan',
    'cash on delivery perfumes pakistan',
    'extrait de parfum pakistan',
    'designer perfume impressions pakistan',
    'oud perfume pakistan',
    'vanilla gourmand perfume pakistan',
    'affordable luxury perfumes karachi lahore islamabad',
    'elyrion fragrances',
    'elyrion pakistan',
  ],
  authors: [{ name: 'ELYRION Fragrances Pakistan' }],
  creator: 'ELYRION Fragrances House',
  publisher: 'ELYRION Fragrances Pakistan',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://elyrionfragrances.com',
    siteName: 'ELYRION Fragrances Pakistan',
    title: 'ELYRION — Luxury Long Lasting Perfumes in Pakistan',
    description:
      'Artisanal Extrait de Parfum crafted with 35% oil concentration for 14+ hours lasting. Free 5ml tester with every order. Cash on Delivery across Pakistan.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'ELYRION Luxury Perfumes Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELYRION — Luxury Long Lasting Perfumes in Pakistan',
    description: '35% Oil Concentration Extrait de Parfum. 14+ hours lasting. Cash on Delivery across Pakistan.',
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
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#111827] antialiased selection:bg-elyrion-gold selection:text-white">
        <CartProvider>
          <WishlistProvider>
            <AppLayoutClient>{children}</AppLayoutClient>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
