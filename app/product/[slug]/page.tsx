import { Metadata } from 'next';
import ProductDetail from '@/pages/ProductDetail';
import ShopComingSoon from '@/pages/ShopComingSoon';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true' 
    ? 'Hidayyah Shop Coming Soon'
    : 'Product Details - Hidayyah',
  description: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
    ? 'Hidayyah\'s online Islamic clothing store is launching soon.'
    : 'View detailed information about our Islamic clothing products.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://hidayyah.com/product',
  },
};

export default function ProductDetailPage() {
  const isBlogFirst = process.env.NEXT_PUBLIC_BLOG_FIRST === 'true';
  
  return isBlogFirst ? <ShopComingSoon /> : <ProductDetail />;
}