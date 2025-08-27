import { Metadata } from 'next';
import Account from '@/pages/Account';

export const metadata: Metadata = {
  title: 'My Account - Hidayyah',
  description: 'Manage your Hidayyah account, view orders, and update your preferences.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://hidayyah.com/account',
  },
};

export default function AccountPage() {
  return <Account />;
}