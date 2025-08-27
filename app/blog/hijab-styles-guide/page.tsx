import { Metadata } from 'next';
import HijabStyleGuide from '@/pages/HijabStyleGuide';

export const metadata: Metadata = {
  title: 'Complete Hijab Styles Guide - Classic, Modern & Trendy Techniques',
  description: 'Master every hijab style with our comprehensive guide. Learn classic wraps, modern turbans, square hijab techniques, and Turkish styles with step-by-step instructions.',
  keywords: ['hijab styles', 'hijab guide', 'hijab tutorial', 'hijab wrapping', 'turban hijab', 'square hijab', 'Turkish hijab', 'hijab techniques'],
  alternates: {
    canonical: 'https://hidayyah.com/blog/hijab-styles-guide',
  },
  openGraph: {
    title: 'Complete Hijab Styles Guide - Classic, Modern & Trendy Techniques',
    description: 'Master every hijab style with our comprehensive guide. Learn classic wraps, modern turbans, square hijab techniques, and Turkish styles.',
    type: 'article',
    url: 'https://hidayyah.com/blog/hijab-styles-guide',
  },
};

export default function HijabStyleGuidePage() {
  return <HijabStyleGuide />;
}