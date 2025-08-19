import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'apparel',
    name: 'Apparel',
    subcategories: ['T-Shirts', 'Hoodies', 'Jeans', 'Dresses']
  },
  {
    id: 'accessories',
    name: 'Accessories',
    subcategories: ['Bags', 'Watches', 'Jewelry', 'Sunglasses']
  },
  {
    id: 'electronics',
    name: 'Electronics',
    subcategories: ['Headphones', 'Smartphones', 'Laptops', 'Cameras']
  },
  {
    id: 'home',
    name: 'Home & Living',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding']
  }
];

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'Ultra-soft premium cotton t-shirt with a modern fit. Perfect for everyday wear with exceptional comfort and durability.',
    price: 29.99,
    salePrice: 24.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'apparel',
    subcategory: 'T-Shirts',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL'],
    brand: 'Premium Basics',
    tags: ['cotton', 'casual', 'comfortable'],
    inStock: true,
    rating: 4.5,
    reviewCount: 128,
    featured: true
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise-cancellation technology and 30-hour battery life.',
    price: 199.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'electronics',
    subcategory: 'Headphones',
    color: 'Black',
    brand: 'AudioTech',
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    inStock: true,
    rating: 4.8,
    reviewCount: 245,
    featured: true
  },
  {
    id: '3',
    name: 'Leather Crossbody Bag',
    description: 'Handcrafted genuine leather crossbody bag with adjustable strap and multiple compartments.',
    price: 89.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'accessories',
    subcategory: 'Bags',
    color: 'Brown',
    brand: 'Artisan Leather Co',
    tags: ['leather', 'crossbody', 'handcrafted'],
    inStock: true,
    rating: 4.3,
    reviewCount: 67,
    featured: false
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking watch with heart rate monitor, GPS, and waterproof design.',
    price: 299.99,
    salePrice: 249.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'electronics',
    subcategory: 'Watches',
    color: 'Silver',
    size: ['38mm', '42mm'],
    brand: 'FitTech',
    tags: ['smartwatch', 'fitness', 'waterproof'],
    inStock: false,
    rating: 4.6,
    reviewCount: 189,
    featured: true
  },
  {
    id: '5',
    name: 'Cozy Knit Hoodie',
    description: 'Super soft knit hoodie with kangaroo pocket and drawstring hood. Perfect for layering.',
    price: 79.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'apparel',
    subcategory: 'Hoodies',
    color: 'Navy',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Comfort Wear',
    tags: ['knit', 'cozy', 'hoodie'],
    inStock: true,
    rating: 4.4,
    reviewCount: 93,
    featured: false
  },
  {
    id: '6',
    name: 'Minimalist Table Lamp',
    description: 'Modern minimalist table lamp with adjustable brightness and USB charging port.',
    price: 149.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'home',
    subcategory: 'Decor',
    color: 'White',
    brand: 'ModernHome',
    tags: ['minimalist', 'lamp', 'modern'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    featured: true
  },
  // Additional products for better filtering demonstration
  {
    id: '7',
    name: 'White Cotton T-Shirt',
    description: 'Classic white cotton t-shirt with premium quality fabric and perfect fit.',
    price: 27.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'apparel',
    subcategory: 'T-Shirts',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Premium Basics',
    tags: ['cotton', 'classic', 'comfortable'],
    inStock: true,
    rating: 4.3,
    reviewCount: 87,
    featured: false
  },
  {
    id: '8',
    name: 'Navy Blue Hoodie',
    description: 'Comfortable navy blue hoodie with front pocket and adjustable hood.',
    price: 69.99,
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'apparel',
    subcategory: 'Hoodies',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL'],
    brand: 'Urban Style',
    tags: ['hoodie', 'navy', 'comfortable'],
    inStock: true,
    rating: 4.2,
    reviewCount: 54,
    featured: false
  }
];