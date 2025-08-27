import { Metadata } from 'next';
import NewsletterManagement from '@/pages/NewsletterManagement';

export const metadata: Metadata = {
  title: 'Newsletter Management',
  description: 'Manage newsletter subscribers and send updates.',
  robots: 'noindex, nofollow',
};

export default function NewsletterManagementPage() {
  return <NewsletterManagement />;
}