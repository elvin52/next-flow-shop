export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  // Islamic wear taxonomy
  gender: 'men' | 'women';
  category: string; // thobe, abaya, hijab, etc.
  style?: string; // Palestinian, Butterfly, Khimar, etc.
  // Filter attributes
  color: string;
  size: string[];
  fabric: string;
  occasion: string[];
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
  // Client-side filters (query parameters)
  colors: string[];
  sizes: string[];
  fabrics: string[];
  occasions: string[];
  priceRange: string; // 'all' | 'under50' | '50to100' | etc.
  inStock: boolean;
  tags: string[];
}