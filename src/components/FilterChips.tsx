import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

interface FilterChipsProps {
  searchTerm: string;
  selectedCategories: string[];
  priceRange: 'all' | 'under50' | '50to100' | 'over100';
  showInStock: boolean;
  onRemoveSearch: () => void;
  onRemoveCategory: (categoryId: string) => void;
  onRemovePriceRange: () => void;
  onRemoveInStock: () => void;
  onClearAll: () => void;
}

export const FilterChips = ({
  searchTerm,
  selectedCategories,
  priceRange,
  showInStock,
  onRemoveSearch,
  onRemoveCategory,
  onRemovePriceRange,
  onRemoveInStock,
  onClearAll,
}: FilterChipsProps) => {
  const hasAnyFilters = searchTerm || selectedCategories.length > 0 || priceRange !== 'all' || showInStock;

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