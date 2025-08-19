// Filter configuration for SEO-friendly URLs and metadata
import { filterOptions } from './islamic-taxonomy';

export interface FilterConfig {
  id: string;
  name: string;
  values: { id: string; name: string }[];
  titleFormat: 'prefix' | 'suffix'; // Where to place the filter value in titles
  indexable: boolean; // Whether single filter pages should be indexed
  seoKeywords: string[]; // Additional keywords for this filter type
}

export const filterConfigs: Record<string, FilterConfig> = {
  color: {
    id: 'color',
    name: 'Color',
    values: filterOptions.colors.map(color => ({ id: color.toLowerCase().replace(/\s+/g, '-'), name: color })),
    titleFormat: 'prefix', // "Black Thobes" sounds better than "Thobes Black"
    indexable: true,
    seoKeywords: ['colored', 'shade', 'tone']
  },
  
  size: {
    id: 'size',
    name: 'Size',
    values: filterOptions.sizes.map(size => ({ id: size.toLowerCase().replace(/\s+/g, '-'), name: size })),
    titleFormat: 'suffix', // "Thobes Size L" sounds better than "Size L Thobes"
    indexable: false, // Size filtering has low search volume
    seoKeywords: ['fit', 'sizing']
  },
  
  fabric: {
    id: 'fabric',
    name: 'Fabric',
    values: filterOptions.fabrics.map(fabric => ({ id: fabric.toLowerCase().replace(/\s+/g, '-'), name: fabric })),
    titleFormat: 'prefix', // "Cotton Thobes" sounds better than "Thobes Cotton"
    indexable: true,
    seoKeywords: ['material', 'textile']
  },
  
  occasion: {
    id: 'occasion',
    name: 'Occasion',
    values: filterOptions.occasions.map(occasion => ({ id: occasion.toLowerCase().replace(/\s+/g, '-'), name: occasion })),
    titleFormat: 'suffix', // "Thobes for Eid" sounds better than "Eid Thobes"
    indexable: true,
    seoKeywords: ['event', 'celebration']
  },
  
  price: {
    id: 'price',
    name: 'Price Range',
    values: filterOptions.priceRanges.map(range => ({ 
      id: range.id, 
      name: range.label 
    })),
    titleFormat: 'suffix', // "Thobes Under $50" sounds better than "Under $50 Thobes"
    indexable: true,
    seoKeywords: ['affordable', 'budget', 'cheap', 'expensive', 'premium']
  }
};

// SEO rules based on filter count
export const getSEORules = (filterCount: number, hasPagination: boolean) => {
  // Single filter pages are valuable landing pages
  if (filterCount === 1 && !hasPagination) {
    return {
      robots: 'index, follow',
      canonicalToSelf: true
    };
  }
  
  // Single filter pagination should not be indexed
  if (filterCount === 1 && hasPagination) {
    return {
      robots: 'noindex, follow',
      canonicalToSelf: false // Points to first page of filter
    };
  }
  
  // Multiple filters create endless loops - block them
  if (filterCount >= 2) {
    return {
      robots: 'noindex, nofollow',
      canonicalToSelf: false // Points back to main category
    };
  }
  
  // No filters (main category)
  if (filterCount === 0 && !hasPagination) {
    return {
      robots: 'index, follow',
      canonicalToSelf: true
    };
  }
  
  // Main category pagination
  if (filterCount === 0 && hasPagination) {
    return {
      robots: 'noindex, follow',
      canonicalToSelf: false // Points to first page
    };
  }
  
  // Default fallback
  return {
    robots: 'noindex, nofollow',
    canonicalToSelf: false
  };
};

export const getFilterConfig = (filterId: string): FilterConfig | null => {
  return filterConfigs[filterId] || null;
};

export const getAllFilterConfigs = (): FilterConfig[] => {
  return Object.values(filterConfigs);
};