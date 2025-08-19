// Legacy products - now using Islamic wear products as the main data source
import { Product, Category } from '@/types/product';
import { islamicProducts } from './islamic-products';

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
  }
];

// Export Islamic products as the main product source
export const sampleProducts: Product[] = islamicProducts;