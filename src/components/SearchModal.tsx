import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { sampleProducts } from '@/data/products';
import { Product } from '@/types/product';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchModal = ({ open, onOpenChange }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      ).slice(0, 6); // Limit to 6 results
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleProductClick = () => {
    onOpenChange(false);
    setSearchTerm('');
  };

  const handleViewAllResults = () => {
    onOpenChange(false);
    // Navigate to products page with search term
    window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setSearchTerm('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {searchTerm.length < 2 && (
            <div className="text-center text-muted-foreground py-8">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p>Type at least 2 characters to search</p>
            </div>
          )}

          {searchTerm.length >= 2 && searchResults.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <p>No products found for "{searchTerm}"</p>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {searchResults.length} results found
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewAllResults}
                >
                  View All Results
                </Button>
              </div>
              
              <div className="grid gap-2 max-h-96 overflow-y-auto">
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    onClick={handleProductClick}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold text-sm">
                          ${(product.salePrice || product.price).toFixed(2)}
                        </span>
                        {!product.inStock && (
                          <Badge variant="secondary" className="text-xs">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};