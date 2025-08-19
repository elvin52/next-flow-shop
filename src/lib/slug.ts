// URL slug utilities for Islamic wear store

export interface ActiveFilter {
  type: string;
  value: string;
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function parseSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function createGenderSlug(gender: string): string {
  return gender.toLowerCase();
}

export function createCategorySlug(category: string): string {
  return createSlug(category);
}

export function createStyleSlug(style: string): string {
  return createSlug(style);
}

// URL building helpers
export function buildProductUrl(gender: string, category?: string, style?: string): string {
  let url = `/${gender.toLowerCase()}`;
  
  if (category) {
    url += `/${createCategorySlug(category)}`;
  }
  
  if (style) {
    url += `/${createStyleSlug(style)}`;
  }
  
  return url;
}

// Breadcrumb helpers
export function buildBreadcrumbs(gender?: string, category?: string, style?: string) {
  const breadcrumbs = [
    { label: 'Home', url: '/' }
  ];

  if (gender) {
    breadcrumbs.push({
      label: gender.charAt(0).toUpperCase() + gender.slice(1),
      url: `/${gender.toLowerCase()}`
    });

    if (category) {
      breadcrumbs.push({
        label: parseSlug(category),
        url: `/${gender.toLowerCase()}/${category}`
      });

      if (style) {
        breadcrumbs.push({
          label: parseSlug(style),
          url: `/${gender.toLowerCase()}/${category}/${createStyleSlug(style)}`
        });
      }
    }
  }

  return breadcrumbs;
}

// SEO helpers
export function generatePageTitle(gender?: string, category?: string, style?: string, siteName: string = 'Islamic Wear Store'): string {
  if (!gender) {
    return `Premium Islamic Clothing & Modest Wear | ${siteName}`;
  }

  const genderTitle = gender.charAt(0).toUpperCase() + gender.slice(1) + "'s";
  
  if (!category) {
    return `${genderTitle} Islamic Clothing & Modest Wear | ${siteName}`;
  }

  const categoryTitle = parseSlug(category);
  
  if (!style) {
    return `${genderTitle} ${categoryTitle} - Islamic Clothing | ${siteName}`;
  }

  const styleTitle = parseSlug(style);
  return `${styleTitle} ${categoryTitle} for ${gender.charAt(0).toUpperCase() + gender.slice(1)} | ${siteName}`;
}

export function generateMetaDescription(gender?: string, category?: string, style?: string): string {
  if (!gender) {
    return 'Discover premium Islamic clothing and modest wear for men and women. Shop authentic thobes, abayas, hijabs, and accessories with fast shipping.';
  }

  const genderText = gender.charAt(0).toUpperCase() + gender.slice(1) + "'s";
  
  if (!category) {
    return `Shop ${genderText.toLowerCase()} Islamic clothing including ${gender === 'men' ? 'thobes, kurtas, and accessories' : 'abayas, hijabs, and modest dresses'}. Premium quality with authentic designs.`;
  }

  const categoryTitle = parseSlug(category);
  
  if (!style) {
    return `Explore our collection of ${genderText.toLowerCase()} ${categoryTitle.toLowerCase()}. High-quality Islamic clothing with traditional and modern designs. Free shipping available.`;
  }

  const styleTitle = parseSlug(style);
  return `Shop authentic ${styleTitle} ${categoryTitle.toLowerCase()} for ${gender}. Premium Islamic clothing with traditional craftsmanship and modern comfort. Fast worldwide shipping.`;
}

// Filter URL encoding/decoding

export function encodeFilters(filters: ActiveFilter[]): string {
  if (!filters.length) return '';
  
  return filters
    .map(f => `${f.type}-${createSlug(f.value)}`)
    .join('+');
}

export function decodeFilters(filterString: string): ActiveFilter[] {
  if (!filterString) return [];
  
  return filterString
    .split('+')
    .map(part => {
      const [type, ...valueParts] = part.split('-');
      const value = valueParts.join('-');
      return { type, value: parseSlug(value) };
    })
    .filter(f => f.type && f.value);
}

// SEO-friendly filter URL building
export function buildFilterUrl(
  basePath: string, 
  filters: ActiveFilter[], 
  page?: number
): string {
  let url = basePath;
  
  if (filters.length > 0) {
    url += `/f/${encodeFilters(filters)}`;
  }
  
  if (page && page > 1) {
    url += `/page/${page}`;
  }
  
  return url;
}

// Generate SEO titles with filters
export function generateFilteredPageTitle(
  gender?: string, 
  category?: string, 
  style?: string, 
  filters: ActiveFilter[] = [],
  siteName: string = 'Islamic Wear Store'
): string {  
  let baseTitle = generatePageTitle(gender, category, style, siteName);
  
  if (filters.length === 0) {
    return baseTitle;
  }
  
  // For single filter, modify the title appropriately
  if (filters.length === 1) {
    const filter = filters[0];
    const filterValue = filter.value;
    const categoryName = style ? parseSlug(style) : category ? parseSlug(category) : 
                       gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s Islamic Wear` : 'Islamic Wear';
    
    // Simple logic: color and fabric as prefix, others as suffix
    if (filter.type === 'color' || filter.type === 'fabric') {
      return `${filterValue} ${categoryName} | ${siteName}`;
    } else {
      return `${categoryName} ${filterValue} | ${siteName}`;
    }
  }
  
  // Multiple filters - just add "Filtered" to indicate it's a filtered view
  return `Filtered ${baseTitle.split(' | ')[0]} | ${siteName}`;
}

// Generate canonical URLs for SEO
export function generateCanonicalUrl(
  basePath: string,
  filters: ActiveFilter[],
  page?: number,
  seoRules?: { canonicalToSelf: boolean }
): string {
  // If SEO rules say not to canonical to self, return base path
  if (seoRules && !seoRules.canonicalToSelf) {
    return basePath;
  }
  
  // For paginated single filter, canonical should point to first page of filter
  if (filters.length === 1 && page && page > 1) {
    return buildFilterUrl(basePath, filters);
  }
  
  // Otherwise, canonical points to current URL
  return buildFilterUrl(basePath, filters, page);
}