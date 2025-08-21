import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from '@/components/common/OptimizedImage';
import type { BlogArticle } from '@/data/blog-articles';

interface ArticleCardProps {
  article: BlogArticle;
  variant?: 'default' | 'compact';
  showImage?: boolean;
  lazy?: boolean;
}

/**
 * Optimized ArticleCard Component
 * Reusable component for displaying blog articles with performance optimizations
 */
export const ArticleCard = React.memo<ArticleCardProps>(({ 
  article, 
  variant = 'default',
  showImage = true,
  lazy = true
}) => {
  const isCompact = variant === 'compact';

  return (
    <Card className="card-elegant hover-lift group">
      <CardContent className="p-0">
        {/* Article Image */}
        {showImage && (
          <div className={isCompact ? "relative h-32" : "relative h-48"}>
            <OptimizedImage
              src={article.image}
              alt={article.imageAlt}
              width={isCompact ? 400 : 600}
              height={isCompact ? 128 : 192}
              className="w-full h-full"
              lazy={lazy}
              placeholder="blur"
            />
          </div>
        )}
        
        {/* Article Content */}
        <div className={isCompact ? "p-4" : "p-6"}>
          {/* Category */}
          <div className="mb-3">
            <span className="text-primary font-medium text-sm">
              {article.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className={`font-playfair font-bold mb-3 group-hover:text-primary transition-colors ${
            isCompact ? "text-lg" : "text-xl"
          }`}>
            <Link to={article.link} className="hover:underline">
              {article.title}
            </Link>
          </h3>
          
          {/* Description */}
          <p className={`text-warm-gray leading-relaxed mb-4 ${
            isCompact ? "text-sm" : "text-sm"
          }`}>
            {article.description}
          </p>
          
          {/* Meta information and CTA */}
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 text-warm-gray ${
              isCompact ? "text-xs" : "text-xs"
            }`}>
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {article.readTime}
              </span>
              <span className="flex items-center">
                <Eye className="h-3 w-3 mr-1" />
                {article.views}
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="group-hover:text-primary transition-colors" 
              asChild
            >
              <Link to={article.link}>
                Read More
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

ArticleCard.displayName = 'ArticleCard';