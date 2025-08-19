import { Product } from '@/types/product';
import { islamicProducts } from './islamic-products';

// SEO-focused product selectors for homepage link juice distribution

export function getBestSellingProducts(limit = 6): Product[] {
  return islamicProducts
    .filter(product => product.inStock)
    .sort((a, b) => b.reviewCount - a.reviewCount) // Sort by review count as proxy for best sellers
    .slice(0, limit);
}

export function getNewArrivals(limit = 6): Product[] {
  // Simulate new arrivals - in real app would sort by creation date
  return islamicProducts
    .filter(product => product.inStock)
    .sort((a, b) => a.id.localeCompare(b.id)) // Stable sort for consistency
    .slice(0, limit);
}

export function getOnSaleProducts(limit = 6): Product[] {
  return islamicProducts
    .filter(product => product.inStock && product.salePrice)
    .sort((a, b) => {
      const discountA = product => product.salePrice ? ((product.price - product.salePrice) / product.price) * 100 : 0;
      const discountB = product => product.salePrice ? ((product.price - product.salePrice) / product.price) * 100 : 0;
      return discountB(b) - discountA(a); // Sort by highest discount percentage
    })
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return islamicProducts
    .filter(product => product.featured && product.inStock)
    .slice(0, limit);
}