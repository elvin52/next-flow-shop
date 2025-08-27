import { Metadata } from 'next';
import Blog from '@/pages/Blog';

export const metadata: Metadata = {
  title: 'Modest Fashion & Hijab Style Guides',
  description: 'Discover comprehensive hijab styling tutorials, modest fashion inspiration, and Islamic clothing guides. Expert tips for contemporary Muslim women.',
  keywords: ['modest fashion', 'hijab styles', 'Islamic fashion', 'hijab guide', 'modest outfit ideas', 'hijab tutorials'],
  alternates: {
    canonical: 'https://hidayyah.com/blog',
  },
  openGraph: {
    title: 'Modest Fashion & Hijab Style Guides - Hidayyah',
    description: 'Discover comprehensive hijab styling tutorials, modest fashion inspiration, and Islamic clothing guides.',
    type: 'website',
    url: 'https://hidayyah.com/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}