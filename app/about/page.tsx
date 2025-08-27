import { Metadata } from 'next';
import About from '@/pages/About';

export const metadata: Metadata = {
  title: 'About Hidayyah - Your Trusted Source for Modest Fashion',
  description: 'Learn about Hidayyah\'s mission to inspire authentic Islamic fashion, provide style guides, and create a community celebrating modest wear with contemporary elegance.',
  keywords: ['about Hidayyah', 'modest fashion mission', 'Islamic clothing brand', 'hijab style guides', 'modest fashion community'],
  alternates: {
    canonical: 'https://hidayyah.com/about',
  },
  openGraph: {
    title: 'About Hidayyah - Your Trusted Source for Modest Fashion',
    description: 'Learn about Hidayyah\'s mission to inspire authentic Islamic fashion and create a community celebrating modest wear.',
    type: 'website',
    url: 'https://hidayyah.com/about',
  },
};

export default function AboutPage() {
  return <About />;
}