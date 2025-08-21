import React from 'react';
import { ArticleCard } from './ArticleCard';
import type { BlogArticle } from '@/data/blog-articles';

interface ArticleGridProps {
  articles: BlogArticle[];
  title?: string;
  description?: string;
  variant?: 'default' | 'compact';
  columns?: 1 | 2 | 3 | 4;
  showImages?: boolean;
  maxItems?: number;
}

/**
 * Optimized ArticleGrid Component
 * Responsive grid layout for displaying multiple articles with performance optimizations
 */
export const ArticleGrid = React.memo<ArticleGridProps>(({ 
  articles, 
  title,
  description,
  variant = 'default',
  columns = 2,
  showImages = true,
  maxItems
}) => {
  const displayArticles = maxItems ? articles.slice(0, maxItems) : articles;
  
  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-2";
    }
  };

  if (displayArticles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-warm-gray">No articles available at this time.</p>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-warm-gray">{description}</p>
            )}
          </div>
        )}

        {/* Articles Grid */}
        <div className={`grid ${getGridClasses()} gap-8 max-w-4xl mx-auto`}>
          {displayArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant={variant}
              showImage={showImages}
              lazy={index > 2} // First 3 images load immediately, rest are lazy
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ArticleGrid.displayName = 'ArticleGrid';