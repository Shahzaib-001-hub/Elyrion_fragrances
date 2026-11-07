import SignatureScentQuiz from '@/components/home/SignatureScentQuiz';
import { seedProducts } from '@/lib/seedData';

export const metadata = {
  title: 'Perfume Finder Quiz — Find Your Signature Scent in Pakistan | ELYRION',
  description:
    'Take our 1-minute quiz to discover your ideal long-lasting perfume based on your personal style, mood, and favorite notes. Tested for Pakistani weather.',
};

export default function QuizPage() {
  return (
    <div className="py-8">
      <SignatureScentQuiz products={seedProducts} />
    </div>
  );
}

