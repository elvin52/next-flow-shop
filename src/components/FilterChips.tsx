import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

interface FilterChipsProps {
  searchTerm: string;
  selectedCategories: string[];
  selectedColors: string[];
  selectedSizes: string[];
  selectedBrands: string[];
  priceRange: 'all' | 'under50' | '50to100' | 'over100';
  showInStock: boolean;
  onRemoveSearch: () => void;
  onRemoveCategory: (categoryId: string) => void;
  onRemoveColor: (color: string) => void;
  onRemoveSize: (size: string) => void;
  onRemoveBrand: (brand: string) => void;
  onRemovePriceRange: () => void;
  onRemoveInStock: () => void;
  onClearAll: () => void;
}

export const FilterChips = ({
  searchTerm,
  selectedCategories,
  selectedColors,
  selectedSizes,
  selectedBrands,
  priceRange,
  showInStock,
  onRemoveSearch,
  onRemoveCategory,
  onRemoveColor,
  onRemoveSize,
  onRemoveBrand,
  onRemovePriceRange,
  onRemoveInStock,
  onClearAll,
}: FilterChipsProps) => {
  const hasAnyFilters = searchTerm || selectedCategories.length > 0 || 
    selectedColors.length > 0 || selectedSizes.length > 0 || selectedBrands.length > 0 ||
    priceRange !== 'all' || showInStock;

  if (!hasAnyFilters) return null;

  const priceRangeLabels = {
    'under50': 'Under $50',
    '50to100': '$50 - $100',
    'over100': 'Over $100',
    'all': '',
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4 p-4 bg-muted/30 rounded-lg">
      <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
      
      {searchTerm && (
        <Badge variant="secondary" className="flex items-center gap-1">
          Search: "{searchTerm}"
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={onRemoveSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      )}

      {selectedCategories.map((categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return (
          <Badge key={categoryId} variant="secondary" className="flex items-center gap-1">
            {category?.name}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
              onClick={() => onRemoveCategory(categoryId)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        );
      })}

      {selectedColors.map((color) => (
        <Badge key={`color-${color}`} variant="secondary" className="flex items-center gap-1">
          Color: {color}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => onRemoveColor(color)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      {selectedSizes.map((size) => (
        <Badge key={`size-${size}`} variant="secondary" className="flex items-center gap-1">
          Size: {size}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => onRemoveSize(size)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      {selectedBrands.map((brand) => (
        <Badge key={`brand-${brand}`} variant="secondary" className="flex items-center gap-1">
          Brand: {brand}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => onRemoveBrand(brand)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}

      {priceRange !== 'all' && (
        <Badge variant="secondary" className="flex items-center gap-1">
          {priceRangeLabels[priceRange]}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={onRemovePriceRange}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      )}

      {showInStock && (
        <Badge variant="secondary" className="flex items-center gap-1">
          In Stock Only
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
            onClick={onRemoveInStock}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={onClearAll}
        className="ml-auto"
      >
        Clear All
      </Button>
    </div>
  );
};