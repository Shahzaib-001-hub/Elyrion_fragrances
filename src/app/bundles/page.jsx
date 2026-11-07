import OffersBundlesSection from '@/components/home/OffersBundlesSection';
import { seedProducts } from '@/lib/seedData';

export const metadata = {
  title: 'Luxury Perfume Bundles & Gift Sets in Pakistan | ELYRION',
  description:
    'Save up to 30% on curated luxury perfume bundles and His & Hers sets in Pakistan. Nationwide Cash on Delivery (COD), free delivery, and free 5ml tester with every bundle.',
};

export default function BundlesPage() {
  return (
    <div className="py-8">
      <OffersBundlesSection products={seedProducts} />
    </div>
  );
}

