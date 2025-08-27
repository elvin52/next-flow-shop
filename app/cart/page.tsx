import { Metadata } from 'next';
import Cart from '@/pages/Cart';

export const metadata: Metadata = {
  title: 'Shopping Cart - Hidayyah',
  description: 'Review your selected Islamic clothing items and proceed to checkout.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://hidayyah.com/cart',
  },
};

export default function CartPage() {
  return <Cart />;
}