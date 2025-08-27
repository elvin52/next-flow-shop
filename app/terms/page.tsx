import { Metadata } from 'next';
import Terms from '@/pages/Terms';

export const metadata: Metadata = {
  title: 'Terms of Service - Hidayyah',
  description: 'Read Hidayyah\'s terms of service for using our modest fashion blog, style guides, and upcoming Islamic clothing store.',
  alternates: {
    canonical: 'https://hidayyah.com/terms',
  },
};

export default function TermsPage() {
  return <Terms />;
}