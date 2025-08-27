import { Metadata } from 'next';
import ShopComingSoon from '@/pages/ShopComingSoon';

export const metadata: Metadata = {
  title: 'Hidayyah Shop Coming Soon - Islamic Clothing Store',
  description: 'Hidayyah\'s online Islamic clothing store is launching soon. Be the first to shop our curated collection of abayas, hijabs, and modest fashion.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://hidayyah.com/coming-soon',
  },
};

export default function ComingSoonPage() {
  return <ShopComingSoon />;
}