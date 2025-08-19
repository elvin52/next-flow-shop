import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, Search, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { sampleProducts, categories } from '@/data/products';
import { Product } from '@/types/product';

// Helper functions
const getCategoryById = (id: string) => categories.find(cat => cat.id === id);

const getSubcategoryLabel = (category: string, subcategory: string) => {
  const cat = getCategoryById(category);
  return cat?.subcategories?.includes(subcategory) ? subcategory : null;
};

const titleCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Products = () => {
  const { category: urlCategory, subcategory: urlSubcategory } = useParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<'all' | 'under50' | '50to100' | 'over100'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'rating'>('name');
  const [showInStock, setShowInStock] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get current category/subcategory info
  const currentCategory = urlCategory ? getCategoryById(urlCategory) : null;
  const currentSubcategory = urlSubcategory && currentCategory ? 
    getSubcategoryLabel(urlCategory, urlSubcategory) : null;

  // Generate SEO metadata
  const getPageTitle = () => {
    if (currentSubcategory && currentCategory) {
      return `${titleCase(currentSubcategory)} ${titleCase(currentCategory.name)} | Shop Online`;
    }
    if (currentCategory) {
      return `${titleCase(currentCategory.name)} | Shop Online`;
    }
    return 'All Products | Shop Online';
  };

  const getPageDescription = () => {
    if (currentSubcategory && currentCategory) {
      return `Shop the best ${currentSubcategory} ${currentCategory.name.toLowerCase()} online. Fast shipping, secure checkout, premium quality products.`;
    }
    if (currentCategory) {
      return `Discover our premium ${currentCategory.name.toLowerCase()} collection. Fast shipping, secure checkout, top-rated products.`;
    }
    return 'Discover our complete collection of premium products for modern living. Fast shipping, secure checkout.';
  };

  const getCanonicalUrl = () => {
    const baseUrl = window.location.origin;
    if (currentSubcategory && currentCategory) {
      return `${baseUrl}/shop/${urlCategory}/${urlSubcategory}`;
    }
    if (currentCategory) {
      return `${baseUrl}/shop/${urlCategory}`;
    }
    return `${baseUrl}/products`;
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sampleProducts.filter((product: Product) => {
      // URL-based category filter (primary filter - not client-side)
      if (urlCategory && product.category !== urlCategory) {
        return false;
      }
      
      // URL-based subcategory filter (primary filter - not client-side)
      if (urlSubcategory && product.subcategory !== urlSubcategory) {
        return false;
      }

      // Search filter (client-side)
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Additional category filter for client-side filtering (only when no URL category)
      if (!urlCategory && selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Price range filter (client-side)
      const price = product.salePrice || product.price;
      if (priceRange === 'under50' && price >= 50) return false;
      if (priceRange === '50to100' && (price < 50 || price > 100)) return false;
      if (priceRange === 'over100' && price <= 100) return false;

      // Stock filter (client-side)
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
  }, [searchTerm, selectedCategories, priceRange, sortBy, showInStock, urlCategory, urlSubcategory]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setPriceRange('all');
    setShowInStock(false);
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getPageDescription()} />
        <link rel="canonical" href={getCanonicalUrl()} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin
              },
              currentCategory && {
                "@type": "ListItem", 
                "position": 2,
                "name": titleCase(currentCategory.name),
                "item": `${window.location.origin}/shop/${urlCategory}`
              },
              currentSubcategory && {
                "@type": "ListItem",
                "position": 3, 
                "name": titleCase(currentSubcategory),
                "item": `${window.location.origin}/shop/${urlCategory}/${urlSubcategory}`
              }
            ].filter(Boolean)
          })}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {currentSubcategory && currentCategory 
              ? `${titleCase(currentSubcategory)} ${titleCase(currentCategory.name)}`
              : currentCategory 
                ? titleCase(currentCategory.name)
                : 'All Products'
            }
          </h1>
          <p className="text-muted-foreground">
            {getPageDescription()}
          </p>
        </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Filters</span>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear
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

              {/* Categories */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Categories</label>
                <div className="space-y-3">
                  {!urlCategory ? (
                    // Show crawlable category links when not on a category page
                    categories.map((category) => (
                      <div key={category.id}>
                        <Link 
                          to={`/shop/${category.id}`}
                          className="block text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                        >
                          {category.name}
                        </Link>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <div className="ml-4 mt-1 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <Link
                                key={subcategory}
                                to={`/shop/${category.id}/${subcategory}`}
                                className="block text-xs text-muted-foreground hover:text-primary transition-colors"
                              >
                                {titleCase(subcategory)}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    // Show checkboxes for additional filtering when already on a category page
                    categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <Select value={priceRange} onValueChange={(value: any) => setPriceRange(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under50">Under $50</SelectItem>
                    <SelectItem value="50to100">$50 - $100</SelectItem>
                    <SelectItem value="over100">Over $100</SelectItem>
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
                <label
                  htmlFor="inStock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  In Stock Only
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredAndSortedProducts.length} products found
              </span>
              {selectedCategories.length > 0 && (
                <div className="flex gap-1">
                  {selectedCategories.map((categoryId) => {
                    const category = categories.find(c => c.id === categoryId);
                    return (
                      <Badge key={categoryId} variant="secondary" className="text-xs">
                        {category?.name}
                      </Badge>
                    );
                  })}
                </div>
              )}
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
                <p className="text-sm">Try adjusting your filters or search terms</p>
              </div>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Products;