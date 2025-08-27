import { Metadata } from 'next';
import IslamicProducts from '@/pages/IslamicProducts';
import ShopComingSoon from '@/pages/ShopComingSoon';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true' 
    ? 'Hidayyah Shop Coming Soon'
    : 'Islamic Products - Modest Wear Collection',
  description: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
    ? 'Hidayyah\'s online Islamic clothing store is launching soon. Be the first to shop our curated collection.'
    : 'Browse our collection of authentic Islamic products including abayas, hijabs, thobes, and modest fashion for the modern Muslim.',
  robots: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true' ? 'noindex, nofollow' : undefined,
  alternates: {
    canonical: 'https://hidayyah.com/products',
  },
};

export default function ProductsPage() {
  const isBlogFirst = process.env.NEXT_PUBLIC_BLOG_FIRST === 'true';
  
  return isBlogFirst ? <ShopComingSoon /> : <IslamicProducts />;
}