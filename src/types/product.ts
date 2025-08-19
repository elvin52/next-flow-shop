export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  color?: string;
  size?: string[];
  brand?: string;
  tags: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  subcategories?: string[];
}

export interface Filter {
  priceRange: [number, number];
  categories: string[];
  colors: string[];
  sizes: string[];
  brands: string[];
  tags: string[];
  inStock: boolean;
}