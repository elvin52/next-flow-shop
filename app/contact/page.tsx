import { Metadata } from 'next';
import Contact from '@/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Hidayyah - Get in Touch for Modest Fashion Support',
  description: 'Contact Hidayyah for questions about hijab styles, modest fashion advice, or general inquiries. We\'re here to help with your Islamic clothing needs.',
  keywords: ['contact Hidayyah', 'modest fashion support', 'hijab style help', 'Islamic clothing questions'],
  alternates: {
    canonical: 'https://hidayyah.com/contact',
  },
  openGraph: {
    title: 'Contact Hidayyah - Get in Touch for Modest Fashion Support',
    description: 'Contact Hidayyah for questions about hijab styles, modest fashion advice, or general inquiries.',
    type: 'website',
    url: 'https://hidayyah.com/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}