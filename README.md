# Shop - Premium E-commerce Template

A modern, lightweight e-commerce template built with React, TypeScript, and Tailwind CSS. Features a beautiful design system, shopping cart functionality, and all the essential pages for an online store.

## ✨ Features

### Core Functionality
- **Product Catalog** - Browse products with advanced filtering and search
- **Shopping Cart** - Add, remove, and update quantities with persistent storage
- **Product Details** - Rich product pages with image galleries and specifications
- **Checkout Process** - Complete checkout flow ready for payment integration
- **User Account** - Customer account dashboard and order management

### Design System
- **Modern UI** - Clean, professional design with custom variants
- **Responsive Design** - Mobile-first approach, works on all devices  
- **Dark/Light Mode** - Built-in theme support
- **Custom Components** - Enhanced shadcn/ui components with e-commerce variants
- **Beautiful Animations** - Smooth transitions and hover effects

### Technical Features
- **TypeScript** - Full type safety throughout the application
- **Zustand Store** - Lightweight state management for cart functionality
- **React Router** - Client-side routing with nested layouts
- **SEO Optimized** - Semantic HTML, meta tags, and clean URLs
- **Performance** - Optimized components and lazy loading ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components with custom variants
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Layout.tsx      # Main layout wrapper
│   └── ProductCard.tsx # Product display component
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero and featured products
│   ├── Products.tsx    # Product listing with filters
│   ├── ProductDetail.tsx # Individual product pages
│   ├── Cart.tsx        # Shopping cart
│   ├── Checkout.tsx    # Checkout process
│   └── Account.tsx     # User account dashboard
├── store/              # State management
│   └── cartStore.ts    # Zustand cart store
├── types/              # TypeScript type definitions
│   └── product.ts      # Product and cart types
├── data/               # Sample data
│   └── products.ts     # Mock product data
├── assets/             # Static assets
└── index.css           # Global styles and design system
```

## 🎨 Design System

The template includes a comprehensive design system with:

- **Color Palette** - Primary, secondary, accent, and semantic colors
- **Typography** - Consistent font weights and sizes
- **Spacing** - Uniform margins and padding scale
- **Components** - Custom button variants (hero, cta, cart, checkout)
- **Shadows & Effects** - Card shadows, hover effects, and transitions
- **Gradients** - Beautiful gradient backgrounds and elements

All design tokens are defined in `src/index.css` and can be easily customized.

## 🛍️ E-commerce Features

### Product Management
- Product categories and subcategories
- Advanced filtering (price, category, stock status)
- Product search functionality
- Star ratings and reviews
- Sale pricing and badges

### Shopping Cart
- Persistent cart state (localStorage)
- Add/remove/update quantities
- Price calculations with tax and shipping
- Free shipping thresholds
- Cart item counter in header

### Checkout Process
- Multi-step checkout form
- Shipping and billing information
- Payment method selection (ready for Stripe integration)
- Order summary and total calculations
- Security badges and trust indicators

## 🔧 Customization

### Adding New Products
Edit `src/data/products.ts` to add your own products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  salePrice: 79.99, // Optional
  images: ['/path/to/image.jpg'],
  category: 'category-id',
  subcategory: 'subcategory-name',
  tags: ['tag1', 'tag2'],
  inStock: true,
  rating: 4.5,
  reviewCount: 123,
  featured: true // Show on homepage
}
```

### Styling
The design system is fully customizable through CSS variables in `src/index.css`. Update colors, fonts, spacing, and more:

```css
:root {
  --primary: 240 5.9% 10%;
  --accent: 142 76% 36%;
  --gradient-hero: linear-gradient(135deg, ...);
  /* ... more variables */
}
```

### Payment Integration
The checkout page is ready for payment provider integration:

1. **Stripe** - Add Stripe Elements to the checkout form
2. **PayPal** - Integrate PayPal SDK for alternative payments
3. **Square** - Use Square Web Payments SDK

## 📱 Responsive Design

The template is fully responsive with:
- Mobile-first CSS approach
- Responsive navigation with mobile menu
- Touch-friendly product cards and buttons
- Optimized layouts for all screen sizes

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph data
- Clean, crawlable URLs
- Structured data ready (JSON-LD)
- Image alt attributes
- Canonical tags support

## 🚀 Deployment

The template works great with modern hosting platforms:

### Vercel
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```

## 🤝 Contributing

This is a template project designed to be customized for your specific needs. Feel free to:

- Modify the design system
- Add new components and pages
- Integrate with your preferred backend
- Enhance with additional features

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🛠️ Built With

- [React 18](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [React Router](https://reactrouter.com/) - Client-side routing
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Build tool

---

**Happy selling!** 🛒✨