import { Metadata } from 'next';
import AbayaArticle from '@/pages/AbayaArticle';

export const metadata: Metadata = {
  title: 'What is an Abaya? Can Non-Muslims Wear an Abaya?',
  description: 'Comprehensive guide about abayas, their cultural significance, and whether non-Muslims can respectfully wear this traditional Islamic garment.',
  keywords: ['abaya', 'Islamic clothing', 'Muslim dress', 'abaya meaning', 'non-Muslims wearing abaya', 'Islamic garment', 'modest fashion'],
  alternates: {
    canonical: 'https://hidayyah.com/blog/what-is-an-abaya',
  },
  openGraph: {
    title: 'What is an Abaya? Can Non-Muslims Wear an Abaya?',
    description: 'Comprehensive guide about abayas, their cultural significance, and whether non-Muslims can respectfully wear this traditional Islamic garment.',
    type: 'article',
    url: 'https://hidayyah.com/blog/what-is-an-abaya',
  },
};

export default function AbayaArticlePage() {
  return <AbayaArticle />;
}