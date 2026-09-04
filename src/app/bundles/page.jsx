import OffersBundlesSection from '@/components/home/OffersBundlesSection';
import { seedProducts } from '@/lib/seedData';

export const metadata = {
  title: 'Curated Perfume Bundles & His & Hers Sets | ELYRION',
  description:
    'Explore curated luxury extrait bundles. Enjoy up to 30% savings with our Best Seller Duo, His & Hers sets, and custom bundle builder.',
};

export default function BundlesPage() {
  return (
    <div className="py-8">
      <OffersBundlesSection products={seedProducts} />
    </div>
  );
}

