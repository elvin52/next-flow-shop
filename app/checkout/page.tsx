import { Metadata } from 'next';
import Checkout from '@/pages/Checkout';

export const metadata: Metadata = {
  title: 'Checkout - Hidayyah',
  description: 'Complete your Islamic clothing purchase with secure checkout.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://hidayyah.com/checkout',
  },
};

export default function CheckoutPage() {
  return <Checkout />;
}