import SignatureScentQuiz from '@/components/home/SignatureScentQuiz';
import { seedProducts } from '@/lib/seedData';

export const metadata = {
  title: 'Find Your Signature Scent — Fragrance Finder Quiz | ELYRION',
  description:
    'Take our 3-step olfactory diagnostic quiz to discover your ideal Extrait de Parfum signature matched with your mood and favorite notes.',
};

export default function QuizPage() {
  return (
    <div className="py-8">
      <SignatureScentQuiz products={seedProducts} />
    </div>
  );
}

