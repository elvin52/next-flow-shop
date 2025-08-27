import { Metadata } from 'next';
import Home from '@/pages/Home';
import BlogHome from '@/pages/BlogHome';

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true' 
    ? 'Hidayyah - Modest Fashion Blog & Style Guides | Islamic Clothing Inspiration'
    : 'Islamic Clothing Store | Modest Wear, Abayas, Hijabs & Thobes',
  description: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
    ? 'Discover elegant hijab styles, modest outfit inspiration, and Islamic fashion guides. Expert tips on hijab techniques, fabric selection, and contemporary modest fashion trends.'
    : 'Shop authentic Islamic clothing including abayas, hijabs, thobes, and modest wear. Premium quality Islamic fashion with worldwide shipping.',
  keywords: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
    ? ['modest fashion blog', 'hijab styles', 'Islamic fashion', 'hijab guide', 'modest outfit ideas', 'hijab tutorials', 'islamic clothing', 'modest wear']
    : ['Islamic clothing', 'modest wear', 'abaya', 'hijab', 'thobe', 'Islamic fashion', 'Muslim clothing', 'modest dress'],
  alternates: {
    canonical: 'https://hidayyah.com',
  },
  openGraph: {
    title: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
      ? 'Hidayyah - Modest Fashion Blog & Style Guides'
      : 'Islamic Clothing Store - Premium Modest Wear',
    description: process.env.NEXT_PUBLIC_BLOG_FIRST === 'true'
      ? 'Your trusted source for hijab styles, modest fashion inspiration, and Islamic clothing guides.'
      : 'Discover our collection of authentic Islamic clothing. High-quality abayas, hijabs, thobes and modest wear for the modern Muslim.',
    type: 'website',
    url: 'https://hidayyah.com',
  },
};

export default function HomePage() {
  const isBlogFirst = process.env.NEXT_PUBLIC_BLOG_FIRST === 'true';
  
  return isBlogFirst ? <BlogHome /> : <Home />;
}