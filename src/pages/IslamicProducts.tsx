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
import { 
  buildBreadcrumbs, 
  generatePageTitle, 
  generateMetaDescription,
  createSlug,
  parseSlug 
} from '@/lib/slug';
import { 
  parseFilterString,
  buildFilterUrl,
  generateSEOPageInfo,
  isLegacyFilterUrl,
  convertLegacyParams,
  type ParsedFilters
} from '@/lib/seo-utils';
import { Product } from '@/types/product';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';
import { usePagination } from '@/hooks/usePagination';

const IslamicProducts = () => {
  const { 
    gender: urlGender, 
    category: urlCategory, 
    style: urlStyle,
    filters: urlFilters,
    page: urlPage
  } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Parse URL parameters
  const currentPage = parseInt(urlPage || '1', 10);
  const parsedFilters = parseFilterString(urlFilters || '');
  
  // Client-side filters (UX refinement)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    colors: [],
    sizes: [],
    fabrics: [],
    occasions: []
  });
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'rating'>('name');
  const [showInStock, setShowInStock] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const ITEMS_PER_PAGE = 12;

  // Handle legacy URLs with query parameters
  useEffect(() => {
    if (isLegacyFilterUrl(searchParams)) {
      const legacyFilters = convertLegacyParams(searchParams);
      if (urlGender && urlCategory && Object.keys(legacyFilters).length > 0) {
        const newUrl = buildFilterUrl(urlGender, urlCategory, legacyFilters);
        navigate(newUrl, { replace: true });
      }
    }
  }, [searchParams, urlGender, urlCategory, navigate]);

  // URL validation and context
  const { validGender, validType, validStyle } = validateGenderTypeStyle(
    urlGender || '', 
    urlCategory, 
    urlStyle
  );

  // SEO page info generation
  const seoInfo = generateSEOPageInfo(
    validGender || '',
    validType?.id || '',
    parsedFilters,
    currentPage,
    window.location.origin
  );

  const breadcrumbs = buildBreadcrumbs(validGender || '', validType?.id, validStyle || '');
  
  // Get available types for current gender
  const availableTypes = validGender ? typesByGender[validGender] : [];
  const availableStyles = validType ? validType.styles : [];

  // Filter navigation handlers
  const handleFilterNavigation = (attribute: string, value: string) => {
    const newFilters = { ...parsedFilters };
    
    if (newFilters[attribute]?.includes(value)) {
      // Remove the value
      newFilters[attribute] = newFilters[attribute].filter(v => v !== value);
      if (newFilters[attribute].length === 0) {
        delete newFilters[attribute];
      }
    } else {
      // Replace with single value (replacement semantics for SEO)
      newFilters[attribute] = [value];
    }
    
    const newUrl = buildFilterUrl(
      validGender || '',
      validType?.id || '',
      newFilters
    );
    navigate(newUrl);
  };

  // Pagination handler
  const handlePageChange = (page: number) => {
    const newUrl = buildFilterUrl(
      validGender || '',
      validType?.id || '',
      parsedFilters,
      page > 1 ? page : undefined
    );
    navigate(newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      // URL filter parameters
      if (parsedFilters.color && !parsedFilters.color.includes(product.color)) {
        return false;
      }
      
      if (parsedFilters.fabric && !parsedFilters.fabric.includes(product.fabric)) {
        return false;
      }
      
      if (parsedFilters.size && (!product.size || !parsedFilters.size.some(s => product.size?.includes(s)))) {
        return false;
      }
      
      if (parsedFilters.occasion && (!product.occasion || !parsedFilters.occasion.some(o => product.occasion?.includes(o)))) {
        return false;
      }

      // Client-side filters (UX refinement) 
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      if (selectedFilters.colors.length > 0 && !selectedFilters.colors.includes(product.color)) {
        return false;
      }

      if (selectedFilters.sizes.length > 0 && !product.size?.some(s => selectedFilters.sizes.includes(s))) {
        return false;
      }

      if (selectedFilters.fabrics.length > 0 && !selectedFilters.fabrics.includes(product.fabric)) {
        return false;
      }

      if (selectedFilters.occasions.length > 0 && !product.occasion?.some(o => selectedFilters.occasions.includes(o))) {
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
    validGender, validType, validStyle, parsedFilters, searchTerm, selectedFilters, 
    priceRange, sortBy, showInStock
  ]);

  // Pagination
  const { totalPages, hasPreviousPage, hasNextPage, startIndex, endIndex } = usePagination({
    totalItems: filteredAndSortedProducts.length,
    itemsPerPage: ITEMS_PER_PAGE,
    currentPage,
  });

  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  // Filter handlers for client-side filters
  const handleFilterChange = <T extends string>(
    value: T, 
    currentList: T[], 
    setList: (list: T[]) => void
  ) => {
    if (currentList.includes(value)) {
      setList(currentList.filter(item => item !== value));
    } else {
      setList([...currentList, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedFilters({
      colors: [],
      sizes: [],
      fabrics: [],
      occasions: []
    });
    setPriceRange('all');
    setShowInStock(false);
    
    // Navigate to base category without filters
    if (validGender && validType) {
      navigate(`/${validGender}/${validType.id}`);
    }
  };

  // Filter chip handlers
  const handleRemoveFilter = (attribute: string, value: string) => {
    const currentList = selectedFilters[`${attribute}s` as keyof typeof selectedFilters] || [];
    const newList = currentList.filter(item => item !== value);
    setSelectedFilters(prev => ({
      ...prev,
      [`${attribute}s`]: newList
    }));
  };

  return (
    <>
      <Helmet>
        <title>{seoInfo.title}</title>
        <meta name="description" content={generateMetaDescription(validGender || '', validType?.id, validStyle || '')} />
        <meta name="robots" content={seoInfo.robots} />
        <link rel="canonical" href={seoInfo.canonical} />
        
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
        <StructuredBreadcrumbs
          items={breadcrumbs.map(crumb => ({
            name: crumb.label,
            href: crumb.url
          }))}
          className="mb-6"
        />

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{seoInfo.h1}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {validType?.description || 'Discover our premium collection of authentic Islamic clothing.'}
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

                {/* SEO Filter Links */}
                {validGender && validType && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Shop by Color</h3>
                      <div className="space-y-2">
                        {filterOptions.colors.slice(0, 6).map(color => {
                          const isActive = parsedFilters.color?.includes(color);
                          const hasExistingFilters = Object.values(parsedFilters).reduce((sum, values) => sum + values.length, 0) > 0;
                          const wouldCreateMultiFilter = hasExistingFilters && !isActive;
                          
                          return (
                            <Link
                              key={color}
                              to={buildFilterUrl(validGender || '', validType?.id || '', {
                                ...parsedFilters,
                                color: isActive 
                                  ? parsedFilters.color?.filter(c => c !== color) || []
                                  : [color]
                              })}
                              className={`block text-sm transition-colors ${
                                isActive
                                  ? 'text-primary font-medium' 
                                  : 'text-muted-foreground hover:text-primary'
                              }`}
                              rel={wouldCreateMultiFilter ? 'nofollow' : undefined}
                            >
                              {color} {validType.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Shop by Fabric</h3>
                      <div className="space-y-2">
                        {filterOptions.fabrics.slice(0, 4).map(fabric => {
                          const isActive = parsedFilters.fabric?.includes(fabric);
                          const hasExistingFilters = Object.values(parsedFilters).reduce((sum, values) => sum + values.length, 0) > 0;
                          const wouldCreateMultiFilter = hasExistingFilters && !isActive;
                          
                          return (
                            <Link
                              key={fabric}
                              to={buildFilterUrl(validGender || '', validType?.id || '', {
                                ...parsedFilters,
                                fabric: isActive 
                                  ? parsedFilters.fabric?.filter(f => f !== fabric) || []
                                  : [fabric]
                              })}
                              className={`block text-sm transition-colors ${
                                isActive
                                  ? 'text-primary font-medium' 
                                  : 'text-muted-foreground hover:text-primary'
                              }`}
                              rel={wouldCreateMultiFilter ? 'nofollow' : undefined}
                            >
                              {validType.name} in {fabric}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

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

                {/* Client-side UX Filters */}
                <div className="border-t pt-4 space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Refine Results</h3>
                  
                  {/* Color Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Colors</label>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {filterOptions.colors.map(color => (
                        <div key={color} className="flex items-center space-x-2">
                          <Checkbox
                            id={`color-${color}`}
                            checked={selectedFilters.colors.includes(color)}
                            onCheckedChange={() => handleFilterChange(color, selectedFilters.colors, (colors) => setSelectedFilters(prev => ({ ...prev, colors })))}
                          />
                          <label htmlFor={`color-${color}`} className="text-sm">
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
                            checked={selectedFilters.sizes.includes(size)}
                            onCheckedChange={() => handleFilterChange(size, selectedFilters.sizes, (sizes) => setSelectedFilters(prev => ({ ...prev, sizes })))}
                          />
                          <label htmlFor={`size-${size}`} className="text-xs">
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
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
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters Display */}
            {(searchTerm || Object.values(selectedFilters).some(arr => arr.length > 0) || priceRange !== 'all' || showInStock) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="ml-1 hover:text-destructive"
                      aria-label="Remove search filter"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {Object.entries(selectedFilters).map(([attribute, values]) => 
                  values.map(value => (
                    <Badge key={`${attribute}-${value}`} variant="secondary" className="flex items-center gap-1">
                      {value}
                      <button 
                        onClick={() => handleRemoveFilter(attribute.slice(0, -1), value)}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))
                )}
                {priceRange !== 'all' && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Price: {priceRange}
                    <button onClick={() => setPriceRange('all')} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                )}
                {showInStock && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    In Stock Only
                    <button onClick={() => setShowInStock(false)} className="ml-1 hover:text-destructive">×</button>
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-6 px-2 text-xs">
                  Clear All
                </Button>
              </div>
            )}

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products
              </p>
              
              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as typeof sortBy)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex rounded-lg border">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Display */}
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">No products found</p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 mb-8 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {paginatedProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!hasPreviousPage}
                    >
                      Previous
                    </Button>
                    
                    <div className="flex space-x-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const page = i + 1;
                        return (
                          <Button
                            key={page}
                            variant={currentPage === page ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!hasNextPage}
                    >
                      Next
                    </Button>
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