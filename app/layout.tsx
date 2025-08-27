import type { Metadata } from 'next';
import { Providers } from './providers';
import IslamicHeader from '@/components/IslamicHeader';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hidayyah.com'),
  title: {
    template: '%s | Hidayyah',
    default: 'Hidayyah - Premium Islamic Clothing & Modest Fashion Store'
  },
  description: 'Discover authentic Islamic clothing, hijab styles, and modest fashion at Hidayyah. Shop premium abayas, hijabs, thobes, and traditional Islamic wear with style guides and tutorials.',
  keywords: ['Islamic clothing', 'modest fashion', 'hijab styles', 'abaya', 'thobe', 'Islamic wear', 'Muslim fashion', 'halal fashion'],
  authors: [{ name: 'Hidayyah' }],
  creator: 'Hidayyah',
  publisher: 'Hidayyah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hidayyah.com',
    siteName: 'Hidayyah',
    title: 'Hidayyah - Premium Islamic Clothing & Modest Fashion Store',
    description: 'Discover authentic Islamic clothing, hijab styles, and modest fashion at Hidayyah. Shop premium abayas, hijabs, thobes, and traditional Islamic wear with style guides and tutorials.',
    images: [
      {
        url: '/hidayyah-logo-ill.png',
        width: 1200,
        height: 630,
        alt: 'Hidayyah - Premium Islamic Clothing & Modest Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hidayyah - Premium Islamic Clothing & Modest Fashion Store',
    description: 'Discover authentic Islamic clothing, hijab styles, and modest fashion at Hidayyah. Shop premium abayas, hijabs, thobes, and traditional Islamic wear with style guides and tutorials.',
    images: ['/hidayyah-logo-ill.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hidayyah.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <IslamicHeader />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}