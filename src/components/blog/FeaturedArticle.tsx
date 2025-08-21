import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import type { BlogArticle } from '@/data/blog-articles';

interface FeaturedArticleProps {
  article: BlogArticle;
}

/**
 * Optimized FeaturedArticle Component
 * Large format article display for featured content with performance optimizations
 */
export const FeaturedArticle = React.memo<FeaturedArticleProps>(({ article }) => {
  return (
    <Card className="card-elegant overflow-hidden max-w-6xl mx-auto">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Featured Image */}
          <div className="relative h-80 lg:h-96">
            <OptimizedImage
              src={article.image}
              alt={article.imageAlt}
              width={800}
              height={600}
              className="w-full h-full"
              priority={true} // Featured image should load immediately
              placeholder="blur"
            />
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Category */}
            <div className="mb-4">
              <span className="text-primary font-medium text-sm">
                {article.category}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              <Link to={article.link} className="hover:text-primary transition-colors">
                {article.title}
              </Link>
            </h3>
            
            {/* Description */}
            <p className="text-warm-gray mb-6 leading-relaxed">
              {article.description}
            </p>
            
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-warm-gray mb-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {article.views}
              </div>
              {article.publishDate && (
                <div>
                  Published {new Date(article.publishDate).toLocaleDateString()}
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <Button className="btn-sage group" asChild>
              <Link to={article.link}>
                Read Complete Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

FeaturedArticle.displayName = 'FeaturedArticle';