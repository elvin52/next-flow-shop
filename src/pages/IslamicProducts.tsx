import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, Search, Grid3X3, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { FilterChips } from '@/components/FilterChips';
import { islamicProducts } from '@/data/islamic-products';
import { 
  genders, 
  typesByGender, 
  filterOptions, 
  validateGenderTypeStyle,
  getTypeById,
  type GenderId 
} from '@/data/islamic-taxonomy';
import { getSEORules, getFilterConfig } from '@/data/filter-config';
import { 
  buildBreadcrumbs, 
  generatePageTitle, 
  generateMetaDescription,
  generateFilteredPageTitle,
  generateCanonicalUrl,
  buildFilterUrl,
  buildProductUrl,
  decodeFilters,
  encodeFilters,
  createSlug,
  parseSlug,
  type ActiveFilter
} from '@/lib/slug';
import { Product } from '@/types/product';
import { usePagination } from '@/hooks/usePagination';

const IslamicProducts = () => {
  const { gender: urlGender, category: urlCategory, style: urlStyle, filters: urlFilters, page: urlPage } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Parse URL parameters
  const currentPage = urlPage ? parseInt(urlPage) : 1;
  const activeFilters = decodeFilters(urlFilters || '');
  
  // Client-side filters (UX refinement) - initialize from URL filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>(
    activeFilters.filter(f => f.type === 'color').map(f => f.value)
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    activeFilters.filter(f => f.type === 'size').map(f => f.value)
  );
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>(
    activeFilters.filter(f => f.type === 'fabric').map(f => f.value)
  );
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>(
    activeFilters.filter(f => f.type === 'occasion').map(f => f.value)
  );
  const [priceRange, setPriceRange] = useState<string>(
    activeFilters.find(f => f.type === 'price')?.value || 'all'
  );
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'rating'>('name');
  const [showInStock, setShowInStock] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const ITEMS_PER_PAGE = 12;

  // URL validation and context
  const { validGender, validType, validStyle } = validateGenderTypeStyle(
    urlGender || '', 
    urlCategory, 
    urlStyle
  );

  // CRITICAL: Analyze URL filters for SEO decisions
  // Group filters by type to detect multiple values for same filter
  const activePathFilters = activeFilters.reduce((acc, filter) => {
    if (!acc[filter.type]) acc[filter.type] = [];
    acc[filter.type].push(filter.value);
    return acc;
  }, {} as Record<string, string[]>);
  
  // Determine SEO settings based on filter count and values
  const activeFilterEntries = Object.entries(activePathFilters);
  const totalActiveFiltersCount = activeFilterEntries.length;
  
  // CRITICAL: A true "single filter" page has exactly one filter key with exactly one value
  const isStrictSingleFilter = totalActiveFiltersCount === 1 && activeFilterEntries[0][1].length === 1;
  const isMultiValueOrMultiFilter = !isStrictSingleFilter && totalActiveFiltersCount > 0;
  const hasPagination = currentPage > 1;

  const basePath = buildProductUrl(validGender || '', validType?.id, validStyle || '');

  let robots = 'index,follow';
  let canonicalUrl = basePath;

  if (isMultiValueOrMultiFilter) {
    // Multiple filters OR multiple values for same filter: noindex,nofollow, canonical to parent
    robots = 'noindex,nofollow';
    canonicalUrl = basePath;
  } else if (isStrictSingleFilter && hasPagination) {
    // Single filter with pagination: noindex,follow, canonical to first page of filter
    robots = 'noindex,follow';
    canonicalUrl = buildFilterUrl(basePath, activeFilters);
  } else if (hasPagination) {
    // Main category pagination: noindex,follow, canonical to first page
    robots = 'noindex,follow';
    canonicalUrl = basePath;
  } else if (isStrictSingleFilter) {
    // Single filter, no pagination: index,follow, canonical to self
    canonicalUrl = buildFilterUrl(basePath, activeFilters);
  }
  
  // SEO metadata with filters - use URL filters for title generation
  const pageTitle = generateFilteredPageTitle(validGender || '', validType?.id, validStyle || '', activeFilters);
  const pageDescription = generateMetaDescription(validGender || '', validType?.id, validStyle || '');
  const breadcrumbs = buildBreadcrumbs(validGender || '', validType?.id, validStyle || '');

  // Navigation functions
  const navigateToPage = (page: number) => {
    const url = buildFilterUrl(basePath, activeFilters, page > 1 ? page : undefined);
    navigate(url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFilters = (newFilters: ActiveFilter[]) => {
    const url = buildFilterUrl(basePath, newFilters);
    navigate(url);
  };

  // Get available types for current gender
  const availableTypes = validGender ? typesByGender[validGender] : [];
  const availableStyles = validType ? validType.styles : [];

  // Filtering logic
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = islamicProducts.filter((product: Product) => {
      // URL-based filters (SEO structure)
      if (validGender && product.gender !== validGender) {
        return false;
      }
      
      if (validType && product.category !== validType.id) {
        return false;
      }
      
      if (validStyle && product.style !== validStyle) {
        return false;
      }

      // Client-side filters (UX refinement)
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      if (selectedColors.length > 0 && !selectedColors.includes(product.color)) {
        return false;
      }

      if (selectedSizes.length > 0 && !product.size?.some(s => selectedSizes.includes(s))) {
        return false;
      }

      if (selectedFabrics.length > 0 && !selectedFabrics.includes(product.fabric)) {
        return false;
      }

      if (selectedOccasions.length > 0 && !product.occasion?.some(o => selectedOccasions.includes(o))) {
        return false;
      }

      // Price filter
      if (priceRange !== 'all') {
        const range = filterOptions.priceRanges.find(r => r.id === priceRange);
        if (range) {
          const price = product.salePrice || product.price;
          if (price < range.min || price > range.max) return false;
        }
      }

      if (showInStock && !product.inStock) return false;

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.salePrice || a.price) - (b.salePrice || b.price);
        case 'price-high':
          return (b.salePrice || b.price) - (a.salePrice || a.price);
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    validGender, validType, validStyle, searchTerm, selectedColors, 
    selectedSizes, selectedFabrics, selectedOccasions, priceRange, 
    sortBy, showInStock
  ]);

  // Pagination
  const { totalPages, hasPreviousPage, hasNextPage, startIndex, endIndex } = usePagination({
    totalItems: filteredAndSortedProducts.length,
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage,
  });

  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    navigateToPage(page);
  };

  // Filter handlers
  const handleColorChange = (color: string) => {
    const newColors = selectedColors.includes(color) 
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newColors);
    
    const newFilters = [
      ...newColors.map(c => ({ type: 'color', value: c })),
      ...selectedSizes.map(s => ({ type: 'size', value: s })),
      ...selectedFabrics.map(f => ({ type: 'fabric', value: f })),
      ...selectedOccasions.map(o => ({ type: 'occasion', value: o })),
      ...(priceRange !== 'all' ? [{ type: 'price', value: priceRange }] : [])
    ];
    updateFilters(newFilters);
  };

  const handleSizeChange = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)  
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    
    const newFilters = [
      ...selectedColors.map(c => ({ type: 'color', value: c })),
      ...newSizes.map(s => ({ type: 'size', value: s })),
      ...selectedFabrics.map(f => ({ type: 'fabric', value: f })),
      ...selectedOccasions.map(o => ({ type: 'occasion', value: o })),
      ...(priceRange !== 'all' ? [{ type: 'price', value: priceRange }] : [])
    ];
    updateFilters(newFilters);
  };

  const handleFabricChange = (fabric: string) => {
    const newFabrics = selectedFabrics.includes(fabric)
      ? selectedFabrics.filter(f => f !== fabric)
      : [...selectedFabrics, fabric];
    setSelectedFabrics(newFabrics);
    
    const newFilters = [
      ...selectedColors.map(c => ({ type: 'color', value: c })),
      ...selectedSizes.map(s => ({ type: 'size', value: s })),
      ...newFabrics.map(f => ({ type: 'fabric', value: f })),
      ...selectedOccasions.map(o => ({ type: 'occasion', value: o })),
      ...(priceRange !== 'all' ? [{ type: 'price', value: priceRange }] : [])
    ];
    updateFilters(newFilters);
  };

  const handlePriceChange = (price: string) => {
    setPriceRange(price);
    
    const newFilters = [
      ...selectedColors.map(c => ({ type: 'color', value: c })),
      ...selectedSizes.map(s => ({ type: 'size', value: s })),
      ...selectedFabrics.map(f => ({ type: 'fabric', value: f })),
      ...selectedOccasions.map(o => ({ type: 'occasion', value: o })),
      ...(price !== 'all' ? [{ type: 'price', value: price }] : [])
    ];
    updateFilters(newFilters);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedFabrics([]);
    setSelectedOccasions([]);
    setPriceRange('all');
    setShowInStock(false);
    navigate(basePath);
  };

  // Page header content
  const getPageHeader = () => {
    if (validStyle && validType && validGender) {
      return `${validStyle} ${validType.name} for ${validGender.charAt(0).toUpperCase() + validGender.slice(1)}`;
    }
    if (validType && validGender) {
      return `${validGender.charAt(0).toUpperCase() + validGender.slice(1)}'s ${validType.name}`;
    }
    if (validGender) {
      return `${validGender.charAt(0).toUpperCase() + validGender.slice(1)}'s Islamic Wear`;
    }
    return 'Islamic Clothing & Modest Wear';
  };

  const getIntroText = () => {
    if (validType && validGender) {
      return validType.description;
    }
    if (validGender) {
      const genderInfo = genders.find(g => g.id === validGender);
      return genderInfo?.description || '';
    }
    return 'Discover our premium collection of authentic Islamic clothing for men and women. From traditional thobes and abayas to modern modest wear.';
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={`${window.location.origin}${canonicalUrl}`} />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.label,
              "item": `${window.location.origin}${crumb.url}`
            }))
          })}
        </script>

        {/* Product List Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "numberOfItems": filteredAndSortedProducts.length,
            "itemListElement": filteredAndSortedProducts.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `${window.location.origin}/product/${product.id}`,
              "name": product.name
            }))
          })}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.url} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.url} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{getPageHeader()}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {getIntroText()}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Filters</span>
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    Clear All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4">
                  {/* Gender Navigation */}
                  {!validGender && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Shop by Gender</h3>
                      <div className="space-y-2">
                        {genders.map(gender => (
                          <Link
                            key={gender.id}
                            to={`/${gender.id}`}
                            className="block text-sm text-primary hover:text-primary-hover transition-colors"
                          >
                            {gender.name}'s Islamic Wear
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Category Navigation */}
                  {validGender && !validType && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Categories</h3>
                      <div className="space-y-2">
                        {availableTypes.map(type => (
                          <Link
                            key={type.id}
                            to={`/${validGender}/${type.id}`}
                            className="block text-sm text-primary hover:text-primary-hover transition-colors"
                          >
                            {type.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Style Navigation */}
                  {validGender && validType && !validStyle && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">Styles</h3>
                      <div className="space-y-2">
                        {availableStyles.map(style => (
                          <Link
                            key={style}
                            to={`/${validGender}/${validType.id}/${createSlug(style)}`}
                            className="block text-sm text-primary hover:text-primary-hover transition-colors"
                          >
                            {style}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Color Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Colors</label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                     {filterOptions.colors.map(color => (
                       <div key={color} className="flex items-center space-x-2">
                         <Checkbox
                           id={`color-${color}`}
                           checked={selectedColors.includes(color)}
                           onCheckedChange={() => handleColorChange(color)}
                         />
                         <label 
                           htmlFor={`color-${color}`} 
                           className="text-sm"
                           {...(isMultiValueOrMultiFilter && !selectedColors.includes(color) ? { rel: "nofollow" } : {})}
                         >
                           {color}
                         </label>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sizes</label>
                  <div className="grid grid-cols-3 gap-2">
                     {filterOptions.sizes.map(size => (
                       <div key={size} className="flex items-center space-x-1">
                         <Checkbox
                           id={`size-${size}`}
                           checked={selectedSizes.includes(size)}
                           onCheckedChange={() => handleSizeChange(size)}
                         />
                         <label 
                           htmlFor={`size-${size}`} 
                           className="text-xs"
                           {...(isMultiValueOrMultiFilter && !selectedSizes.includes(size) ? { rel: "nofollow" } : {})}
                         >
                           {size}
                         </label>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Fabric Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Fabrics</label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                     {filterOptions.fabrics.map(fabric => (
                       <div key={fabric} className="flex items-center space-x-2">
                         <Checkbox
                           id={`fabric-${fabric}`}
                           checked={selectedFabrics.includes(fabric)}
                           onCheckedChange={() => handleFabricChange(fabric)}
                         />
                         <label 
                           htmlFor={`fabric-${fabric}`} 
                           className="text-sm"
                           {...(isMultiValueOrMultiFilter && !selectedFabrics.includes(fabric) ? { rel: "nofollow" } : {})}
                         >
                           {fabric}
                         </label>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select value={priceRange} onValueChange={handlePriceChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      {filterOptions.priceRanges.map(range => (
                        <SelectItem key={range.id} value={range.id}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Stock Status */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inStock"
                    checked={showInStock}
                    onCheckedChange={(checked) => setShowInStock(checked === true)}
                  />
                  <label htmlFor="inStock" className="text-sm font-medium">
                    In Stock Only
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters Display */}
            {(searchTerm || selectedColors.length > 0 || priceRange !== 'all' || showInStock) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                )}
                {selectedColors.map(color => (
                  <Badge key={color} variant="secondary" className="flex items-center gap-1">
                    {color}
                    <button onClick={() => handleColorChange(color)} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                ))}
                {priceRange !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {filterOptions.priceRanges.find(r => r.id === priceRange)?.label}
                    <button onClick={() => handlePriceChange('all')} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                )}
                {showInStock && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    In Stock Only
                    <button onClick={() => setShowInStock(false)} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                )}
                <Button variant="outline" size="sm" onClick={clearAllFilters}>Clear All</Button>
              </div>
            )}

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} products found
                  {totalPages > 1 && (
                    <span className="ml-2">
                      (Page {currentPage} of {totalPages})
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No products found</p>
                  <p className="text-sm">Try adjusting your filters or search terms.</p>
                </div>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 mb-8 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={!hasPreviousPage}
                      >
                        Previous
                      </Button>
                      
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={!hasNextPage}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IslamicProducts;