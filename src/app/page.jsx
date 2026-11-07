import HeroBannerSlider from '@/components/home/HeroBannerSlider';
import TrustPerksBanner from '@/components/home/TrustPerksBanner';
import BestSellersSection from '@/components/home/BestSellersSection';
import ShopByGender from '@/components/home/ShopByGender';
import ShopByNotes from '@/components/home/ShopByNotes';
import MoodVibeSection from '@/components/home/MoodVibeSection';
import NotesYouLove from '@/components/home/NotesYouLove';
import OffersBundlesSection from '@/components/home/OffersBundlesSection';
import SignatureScentQuiz from '@/components/home/SignatureScentQuiz';
import ScentOfTheWeek from '@/components/home/ScentOfTheWeek';
import CustomerReviews from '@/components/home/CustomerReviews';
import InstagramFeed from '@/components/home/InstagramFeed';
import NewsletterVIP from '@/components/home/NewsletterVIP';
import { products as catalogProducts } from '@/lib/catalog';
import { generateOrganizationJsonLd, generateFaqJsonLd } from '@/lib/seo';

// Helper function to fetch products server-side or fallback to rich official catalog
async function getProducts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
    if (!res.ok) return catalogProducts;
    const data = await res.json();
    return data.products && data.products.length > 0 ? data.products : catalogProducts;
  } catch (e) {
    return catalogProducts;
  }
}

export default async function HomePage() {
  const products = await getProducts();
  const organizationSchema = generateOrganizationJsonLd();
  const faqSchema = generateFaqJsonLd();

  // Pick trending product for Scent of the Week
  const featuredProduct = products.find((p) => p.slug === 'cafe-de-nuit') || products[0];

  return (
    <>
      {/* Inject Organization & WebSite JSON-LD Structured Data Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Inject Pakistan FAQ Structured Data Schema for Rich Google Search Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Banner System (Banners 01, 02, 03) */}
      <HeroBannerSlider />

      {/* High-Trust Pakistan Perks Banner (COD, 14+ Hours Lasting, Free 5ml Sample) */}
      <TrustPerksBanner />

      {/* 2. Best Sellers Section */}
      <BestSellersSection products={products} />

      {/* 3. Shop by Gender — Men | Women | Unisex */}
      <ShopByGender />

      {/* 4. Shop by Notes — Sweet | Dark & Intense | Fresh | Floral */}
      <ShopByNotes products={products} />

      {/* 5. Mood / Vibe Section — "What's Your Mood?" & "Choose Your Vibe" */}
      <MoodVibeSection products={products} />

      {/* 6. "Notes You Love" Direct Discovery Pills */}
      <NotesYouLove />

      {/* 7. Offers & Bundles — "More Fragrance. Better Value." + Custom Bundle Builder */}
      <OffersBundlesSection products={products} />

      {/* 8. "Find Your Signature Scent" Interactive Quiz */}
      <SignatureScentQuiz products={products} />

      {/* 9. Scent of the Week Spotlight */}
      <ScentOfTheWeek product={featuredProduct} />

      {/* 10. Customer Reviews / Social Proof */}
      <CustomerReviews />

      {/* 11. Instagram / Aesthetic Lookbook Grid */}
      <InstagramFeed />

      {/* 12. VIP Club & Newsletter */}
      <NewsletterVIP />
    </>
  );
}
