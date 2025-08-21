import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { memo } from 'react';

interface ProductGridProps {
  products: Product[];
  title: string;
  description?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
}

const ProductGrid = memo(({ products, title, description, showViewAll, viewAllLink }: ProductGridProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Products Grid - Static, no sliders for SEO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link for link juice distribution */}
        {showViewAll && viewAllLink && (
          <div className="text-center">
            <a 
              href={viewAllLink}
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent-hover transition-colors font-medium"
            >
              View All {title}
            </a>
          </div>
        )}
      </div>
    </section>
  );
});

export default ProductGrid;