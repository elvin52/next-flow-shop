// SEO Configuration for Filters - Defines title formatting rules

export interface FilterSEOConfig {
  titleFormat: 'PREFIX' | 'SUFFIX';
  preposition?: string;
  indexable: boolean; // Whether single filters of this type should be indexed
}

export const FILTER_SEO_CONFIG: Record<string, FilterSEOConfig> = {
  color: {
    titleFormat: 'PREFIX', // "Black Abayas"
    indexable: true
  },
  brand: {
    titleFormat: 'PREFIX', // "Nike Athletic Wear"  
    indexable: true
  },
  fabric: {
    titleFormat: 'SUFFIX',
    preposition: 'in', // "Abayas in Cotton"
    indexable: true
  },
  size: {
    titleFormat: 'SUFFIX', 
    preposition: 'in Size', // "Abayas in Size Large"
    indexable: false // Size filters are not SEO valuable
  },
  occasion: {
    titleFormat: 'SUFFIX',
    preposition: 'for', // "Abayas for Wedding"
    indexable: true
  },
  feature: {
    titleFormat: 'SUFFIX',
    preposition: 'with', // "Abayas with Pockets"
    indexable: true
  },
  price: {
    titleFormat: 'SUFFIX',
    preposition: 'under', // "Abayas under $100"
    indexable: false // Price filters change too often
  }
};

// Valid filter attributes that can be used in URLs
export const VALID_FILTER_ATTRIBUTES = Object.keys(FILTER_SEO_CONFIG);

// Check if a filter type should be indexed when used alone
export function isFilterIndexable(attribute: string): boolean {
  return FILTER_SEO_CONFIG[attribute]?.indexable || false;
}