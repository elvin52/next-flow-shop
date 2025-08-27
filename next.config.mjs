/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
  },
  
  // Headers for SEO and noindex rules
  async headers() {
    return [
      {
        source: '/coming-soon',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/(men|women)/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag', 
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/product/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      },
      {
        source: '/(cart|checkout|account|products|shop)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          }
        ]
      }
    ];
  },

  // Redirects from vercel.json
  async redirects() {
    const isBlogFirst = process.env.NEXT_PUBLIC_BLOG_FIRST === 'true';
    
    if (isBlogFirst) {
      return [
        {
          source: '/men',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/women', 
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/men/(.*)',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/women/(.*)',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/products',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/product/(.*)',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/cart',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/checkout',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/account',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/shop',
          destination: '/coming-soon',
          permanent: false
        },
        {
          source: '/shop/(.*)',
          destination: '/coming-soon',
          permanent: false
        }
      ];
    }
    
    return [];
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Build configuration
  output: 'standalone'
};

export default nextConfig;