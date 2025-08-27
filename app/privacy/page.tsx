import { Metadata } from 'next';
import Privacy from '@/pages/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy - Hidayyah',
  description: 'Learn how Hidayyah protects your privacy and handles your personal information when using our modest fashion blog and upcoming store.',
  alternates: {
    canonical: 'https://hidayyah.com/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}