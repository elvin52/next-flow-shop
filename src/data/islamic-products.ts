import { Product } from '@/types/product';

// Import asset images
import abayaHero from '@/assets/abaya-article-hero.jpg';
import classicWrapHijab from '@/assets/classic-wrap-hijab.jpg';
import hijabAccessories from '@/assets/hijab-accessories.jpg';
import hijabStyleGuideHero from '@/assets/hijab-style-guide-hero.jpg';
import knotBowHijab from '@/assets/knot-bow-hijab.jpg';
import layeredHijab from '@/assets/layered-hijab.jpg';
import modernTurbanHijab from '@/assets/modern-turban-hijab.jpg';
import muslimMenWearHero from '@/assets/muslim-men-wear-hero.jpg';
import turkishHijab from '@/assets/turkish-hijab.jpg';

export const islamicProducts: Product[] = [
  // Men's Thobes
  {
    id: 'thobe-1',
    name: 'Authentic Palestinian Thobe',
    description: 'Traditional Palestinian thobe with intricate embroidery. Perfect for prayers and cultural events. Comfortable cotton blend with modern fit.',
    price: 89.99,
    salePrice: 74.99,
    images: [muslimMenWearHero, muslimMenWearHero],
    gender: 'men',
    category: 'thobe',
    style: 'Palestinian',
    color: 'White',
    size: ['M', 'L', 'XL', 'XXL'],
    fabric: 'Cotton',
    occasion: ['Prayer', 'Formal', 'Cultural'],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    featured: true,
    tags: ['palestinian', 'embroidered', 'traditional', 'cultural']
  },
  {
    id: 'thobe-2',
    name: 'Saudi Style White Thobe',
    description: 'Classic Saudi-style thobe in premium white fabric. Ideal for daily prayers and formal occasions. Breathable and comfortable.',
    price: 69.99,
    images: [muslimMenWearHero, muslimMenWearHero],
    gender: 'men',
    category: 'thobe',
    style: 'Saudi',
    color: 'White',
    size: ['S', 'M', 'L', 'XL'],
    fabric: 'Polyester',
    occasion: ['Prayer', 'Everyday', 'Formal'],
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
    featured: true,
    tags: ['saudi', 'classic', 'prayer', 'formal']
  },
  {
    id: 'thobe-3',
    name: 'Moroccan Kaftan Thobe',
    description: 'Elegant Moroccan-style kaftan with traditional patterns. Perfect for Eid celebrations and special occasions.',
    price: 125.99,
    salePrice: 99.99,
    images: [muslimMenWearHero, muslimMenWearHero],
    gender: 'men',
    category: 'thobe',
    style: 'Moroccan',
    color: 'Cream',
    size: ['M', 'L', 'XL'],
    fabric: 'Linen',
    occasion: ['Eid', 'Wedding', 'Formal'],
    inStock: true,
    rating: 4.9,
    reviewCount: 87,
    featured: true,
    tags: ['moroccan', 'kaftan', 'eid', 'luxury']
  },
  
  // Men's Kurtas
  {
    id: 'kurta-1',
    name: 'Pakistani Embroidered Kurta',
    description: 'Beautiful Pakistani kurta with traditional embroidery. Modern cut with classic design elements.',
    price: 45.99,
    images: [muslimMenWearHero, muslimMenWearHero],
    gender: 'men',
    category: 'kurta',
    style: 'Pakistani',
    color: 'Navy',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: 'Cotton',
    occasion: ['Casual', 'Formal', 'Prayer'],
    inStock: true,
    rating: 4.5,
    reviewCount: 134,
    featured: false,
    tags: ['pakistani', 'embroidered', 'casual', 'comfortable']
  },

  // Women's Abayas
  {
    id: 'abaya-1',
    name: 'Elegant Butterfly Abaya',
    description: 'Flowing butterfly abaya with wide sleeves. Perfect for modest fashion and everyday wear. Comfortable and stylish.',
    price: 79.99,
    salePrice: 64.99,
    images: [abayaHero, abayaHero],
    gender: 'women',
    category: 'abaya',
    style: 'Butterfly',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL'],
    fabric: 'Crepe',
    occasion: ['Everyday', 'Prayer', 'Casual'],
    inStock: true,
    rating: 4.7,
    reviewCount: 298,
    featured: true,
    tags: ['butterfly', 'modest', 'comfortable', 'everyday']
  },
  {
    id: 'abaya-2',
    name: 'Dubai Open Abaya',
    description: 'Modern Dubai-style open abaya with elegant details. Can be worn open or closed for versatile styling.',
    price: 95.99,
    images: [abayaHero, abayaHero],
    gender: 'women',
    category: 'abaya',
    style: 'Open',
    color: 'Navy',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Viscose',
    occasion: ['Formal', 'Work', 'Everyday'],
    inStock: true,
    rating: 4.8,
    reviewCount: 176,
    featured: true,
    tags: ['dubai', 'open', 'modern', 'versatile']
  },
  {
    id: 'abaya-3',
    name: 'Turkish Embroidered Abaya',
    description: 'Beautiful Turkish-style abaya with intricate embroidery and beading. Perfect for special occasions.',
    price: 149.99,
    salePrice: 119.99,
    images: [abayaHero, turkishHijab],
    gender: 'women',
    category: 'abaya',
    style: 'Turkish',
    color: 'Maroon',
    size: ['S', 'M', 'L', 'XL'],
    fabric: 'Chiffon',
    occasion: ['Wedding', 'Formal', 'Party'],
    inStock: false,
    rating: 4.9,
    reviewCount: 92,
    featured: true,
    tags: ['turkish', 'embroidered', 'luxury', 'special']
  },

  // Women's Hijabs
  {
    id: 'hijab-1',
    name: 'Premium Modal Hijab',
    description: 'Ultra-soft modal hijab that drapes beautifully. Breathable and comfortable for all-day wear.',
    price: 24.99,
    salePrice: 19.99,
    images: [turkishHijab, abayaHero],
    gender: 'women',
    category: 'hijab',
    style: 'Rectangle',
    color: 'Black',
    size: ['One Size'],
    fabric: 'Modal',
    occasion: ['Everyday', 'Prayer', 'Work'],
    inStock: true,
    rating: 4.8,
    reviewCount: 412,
    featured: true,
    tags: ['modal', 'soft', 'breathable', 'premium']
  },
  {
    id: 'hijab-2',
    name: 'Instant Khimar Hijab',
    description: 'Easy-to-wear instant khimar with built-in cap. Perfect for active lifestyle and convenience.',
    price: 34.99,
    images: [classicWrapHijab, modernTurbanHijab],
    gender: 'women',
    category: 'hijab',
    style: 'Khimar',
    color: 'Grey',
    size: ['One Size'],
    fabric: 'Jersey',
    occasion: ['Everyday', 'Active', 'Prayer'],
    inStock: true,
    rating: 4.6,
    reviewCount: 267,
    featured: false,
    tags: ['instant', 'khimar', 'convenient', 'active']
  },
  {
    id: 'hijab-3',
    name: 'Square Chiffon Hijab',
    description: 'Lightweight chiffon square hijab available in multiple colors. Perfect for formal occasions.',
    price: 18.99,
    images: [layeredHijab, knotBowHijab],
    gender: 'women',
    category: 'hijab',
    style: 'Square',
    color: 'Beige',
    size: ['One Size'],
    fabric: 'Chiffon',
    occasion: ['Formal', 'Wedding', 'Party'],
    inStock: true,
    rating: 4.4,
    reviewCount: 189,
    featured: false,
    tags: ['square', 'chiffon', 'lightweight', 'formal']
  },

  // Women's Modest Dresses
  {
    id: 'dress-1',
    name: 'Long Sleeve Maxi Dress',
    description: 'Modest long-sleeve maxi dress perfect for any occasion. Comfortable fit with elegant design.',
    price: 59.99,
    salePrice: 47.99,
    images: [modernTurbanHijab, hijabStyleGuideHero],
    gender: 'women',
    category: 'dress',
    style: 'Maxi',
    color: 'Navy',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Cotton',
    occasion: ['Casual', 'Work', 'Prayer'],
    inStock: true,
    rating: 4.5,
    reviewCount: 156,
    featured: false,
    tags: ['maxi', 'long-sleeve', 'modest', 'comfortable']
  },

  // Men's Accessories
  {
    id: 'kufi-1',
    name: 'Traditional Cotton Kufi',
    description: 'Classic cotton kufi cap for prayer and daily wear. Available in multiple colors.',
    price: 15.99,
    images: [abayaHero, modernTurbanHijab],
    gender: 'men',
    category: 'accessories',
    style: 'Kufi',
    color: 'White',
    size: ['One Size'],
    fabric: 'Cotton',
    occasion: ['Prayer', 'Everyday'],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
    featured: false,
    tags: ['kufi', 'prayer-cap', 'traditional', 'cotton']
  },

  // Women's Modest Swimwear
  {
    id: 'burkini-1',
    name: 'Full Coverage Burkini',
    description: 'Complete modest swimwear set with full coverage. Chlorine-resistant and quick-dry fabric.',
    price: 89.99,
    salePrice: 74.99,
    images: [hijabAccessories, muslimMenWearHero],
    gender: 'women',
    category: 'swimwear',
    style: 'Burkini',
    color: 'Navy',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Polyester',
    occasion: ['Swimming', 'Beach', 'Pool'],
    inStock: true,
    rating: 4.6,
    reviewCount: 134,
    featured: false,
    tags: ['burkini', 'modest', 'full-coverage', 'swimwear']
  }
];

// Helper functions
export function getProductsByGender(gender: string): Product[] {
  return islamicProducts.filter(product => product.gender === gender);
}

export function getProductsByCategory(gender: string, category: string): Product[] {
  return islamicProducts.filter(product => 
    product.gender === gender && product.category === category
  );
}

export function getProductsByStyle(gender: string, category: string, style: string): Product[] {
  return islamicProducts.filter(product => 
    product.gender === gender && 
    product.category === category && 
    product.style === style
  );
}

export function getFeaturedProducts(): Product[] {
  return islamicProducts.filter(product => product.featured);
}

export function getUniqueValues<K extends keyof Product>(key: K): Product[K][] {
  const values = islamicProducts.map(product => product[key]);
  return Array.from(new Set(values));
}