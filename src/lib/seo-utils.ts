// SEO utilities for filter URLs and meta tags

import { FILTER_SEO_CONFIG, isFilterIndexable } from '@/data/filter-seo-config';
import { validateGenderTypeStyle } from '@/data/islamic-taxonomy';

export interface ParsedFilters {
  [attribute: string]: string[];
}

export interface SEOPageInfo {
  robots: string;
  canonical: string;
  title: string;
  h1: string;
}

// Parse filter string like "color-black+fabric-cotton" into object
export function parseFilterString(filterString: string): ParsedFilters {
  if (!filterString) return {};
  
  const filters: ParsedFilters = {};
  const filterPairs = filterString.split('+');
  
  for (const pair of filterPairs) {
    const [attribute, value] = pair.split('-');
    if (attribute && value && FILTER_SEO_CONFIG[attribute]) {
      const decodedValue = decodeURIComponent(value.replace(/\+/g, ' '));
      if (!filters[attribute]) {
        filters[attribute] = [];
      }
      // Avoid duplicates
      if (!filters[attribute].includes(decodedValue)) {
        filters[attribute].push(decodedValue);
      }
    }
  }
  
  return filters;
}

// Encode filter object back to URL string
export function encodeFiltersToString(filters: ParsedFilters): string {
  const filterPairs = Object.entries(filters)
    .filter(([attr, values]) => attr && values.length > 0 && FILTER_SEO_CONFIG[attr])
    .flatMap(([attr, values]) => 
      values.map(value => `${attr}-${encodeURIComponent(value.replace(/ /g, '+'))}`)
    )
    .sort(); // Sort for consistent URLs
  
  return filterPairs.join('+');
}

// Build filter URL for navigation
export function buildFilterUrl(
  gender: string, 
  category: string, 
  filters: ParsedFilters, 
  page?: number
): string {
  let url = `/${gender}/${category}`;
  
  const filterString = encodeFiltersToString(filters);
  if (filterString) {
    url += `/f/${filterString}`;
  }
  
  if (page && page > 1) {
    url += `/page/${page}`;
  }
  
  return url;
}

// Generate canonical URL based on SEO rules
export function generateCanonicalUrl(
  gender: string,
  category: string,
  filters: ParsedFilters,
  page: number,
  baseUrl: string = ''
): string {
  const totalFilterValues = Object.values(filters).reduce((sum, values) => sum + values.length, 0);
  const filterAttributeCount = Object.keys(filters).length;
  
  // Multi-value or multi-filter pages: canonical points to base category
  if (totalFilterValues > 1) {
    return `${baseUrl}/${gender}/${category}`;
  }
  
  // Single filter pages: canonical points to filter page 1
  if (filterAttributeCount === 1 && totalFilterValues === 1) {
    const filterString = encodeFiltersToString(filters);
    return `${baseUrl}/${gender}/${category}/f/${filterString}`;
  }
  
  // Base category pages: canonical points to category page 1
  return `${baseUrl}/${gender}/${category}`;
}

// Generate robots meta tag based on SEO rules
export function generateRobotsTag(
  filters: ParsedFilters,
  page: number
): string {
  const totalFilterValues = Object.values(filters).reduce((sum, values) => sum + values.length, 0);
  const filterAttributeCount = Object.keys(filters).length;
  
  // Multi-value pages (same or different attributes): noindex, nofollow
  if (totalFilterValues > 1) {
    return 'noindex, nofollow';
  }
  
  // Pagination (page 2+): noindex, follow
  if (page > 1) {
    return 'noindex, follow';
  }
  
  // Single non-indexable filter: noindex, follow
  if (filterAttributeCount === 1 && totalFilterValues === 1) {
    const [attribute] = Object.keys(filters);
    if (!isFilterIndexable(attribute)) {
      return 'noindex, follow';
    }
  }
  
  // Base pages and indexable single filters: index, follow
  return 'index, follow';
}

// Build filtered page title
export function buildFilteredTitle(
  categoryName: string,
  filters: ParsedFilters,
  gender?: string,
  siteName: string = 'Islamic Wear Store'
): string {
  const totalFilterValues = Object.values(filters).reduce((sum, values) => sum + values.length, 0);
  const filterAttributeCount = Object.keys(filters).length;
  
  // No filters: use base category title
  if (totalFilterValues === 0) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName} | ${siteName}`;
  }
  
  // Multiple values or attributes: use base category (these pages shouldn't be indexed anyway)
  if (totalFilterValues > 1) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName} | ${siteName}`;
  }
  
  // Single filter: use configured title format
  const [attribute, values] = Object.entries(filters)[0];
  const config = FILTER_SEO_CONFIG[attribute];
  
  if (!config) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName} | ${siteName}`;
  }
  
  const formattedValue = values[0].charAt(0).toUpperCase() + values[0].slice(1);
  
  if (config.titleFormat === 'PREFIX') {
    return `${formattedValue} ${categoryName} | ${siteName}`;
  } else {
    const preposition = config.preposition || 'with';
    return `${categoryName} ${preposition} ${formattedValue} | ${siteName}`;
  }
}

// Build H1 heading (similar to title but without site name)
export function buildFilteredH1(
  categoryName: string,
  filters: ParsedFilters,
  gender?: string
): string {
  const totalFilterValues = Object.values(filters).reduce((sum, values) => sum + values.length, 0);
  const filterAttributeCount = Object.keys(filters).length;
  
  // No filters: use base category H1
  if (totalFilterValues === 0) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName}`;
  }
  
  // Multiple values or attributes: use base category
  if (totalFilterValues > 1) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName}`;
  }
  
  // Single filter: use configured format
  const [attribute, values] = Object.entries(filters)[0];
  const config = FILTER_SEO_CONFIG[attribute];
  
  if (!config) {
    const genderText = gender ? `${gender.charAt(0).toUpperCase() + gender.slice(1)}'s ` : '';
    return `${genderText}${categoryName}`;
  }
  
  const formattedValue = values[0].charAt(0).toUpperCase() + values[0].slice(1);
  
  if (config.titleFormat === 'PREFIX') {
    return `${formattedValue} ${categoryName}`;
  } else {
    const preposition = config.preposition || 'with';
    return `${categoryName} ${preposition} ${formattedValue}`;
  }
}

// Generate complete SEO page info
export function generateSEOPageInfo(
  gender: string,
  category: string,
  filters: ParsedFilters,
  page: number,
  baseUrl: string = ''
): SEOPageInfo {
  const { validGender, validType } = validateGenderTypeStyle(gender, category);
  const categoryName = validType?.name || category;
  
  return {
    robots: generateRobotsTag(filters, page),
    canonical: generateCanonicalUrl(gender, category, filters, page, baseUrl),
    title: buildFilteredTitle(categoryName, filters, validGender || undefined),
    h1: buildFilteredH1(categoryName, filters, validGender || undefined)
  };
}

// Check if URL represents a legacy query parameter format
export function isLegacyFilterUrl(searchParams: URLSearchParams): boolean {
  const legacyParams = ['color', 'size', 'fabric', 'brand', 'price', 'occasion'];
  return legacyParams.some(param => searchParams.has(param));
}

// Convert legacy query params to new filter object
export function convertLegacyParams(searchParams: URLSearchParams): ParsedFilters {
  const filters: ParsedFilters = {};
  
  for (const [key, value] of searchParams.entries()) {
    if (FILTER_SEO_CONFIG[key] && value) {
      filters[key] = [value];
    }
  }
  
  return filters;
}