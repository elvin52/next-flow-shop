import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * OptimizedImage Component
 * Provides lazy loading, proper dimensions, and loading states
 * to improve Core Web Vitals (LCP, CLS)
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  lazy = true,
  priority = false,
  placeholder = 'blur',
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    const currentImg = imgRef.current;
    if (currentImg) {
      observer.observe(currentImg);
    }

    return () => {
      if (currentImg) {
        observer.unobserve(currentImg);
      }
    };
  }, [lazy, priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
    onError?.();
  };

  // Generate srcset for responsive images (if width/height provided)
  const generateSrcSet = (baseSrc: string) => {
    if (!width) return undefined;
    
    // For now, we'll use the original image
    // In a real implementation, you'd have multiple sizes generated
    return `${baseSrc} ${width}w`;
  };

  // Determine container aspect ratio to prevent layout shift
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{
        aspectRatio,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined
      }}
    >
      {/* Loading placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {isInView && !isError && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          srcSet={generateSrcSet(src)}
          sizes={width ? `(max-width: 768px) 100vw, ${width}px` : undefined}
          className={cn(
            "transition-opacity duration-300 max-w-full",
            isLoaded ? "opacity-100" : "opacity-0",
            width && height ? "w-full h-full object-cover" : "w-full h-auto"
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          <span>Failed to load image</span>
        </div>
      )}

      {/* Loading indicator for critical images */}
      {priority && !isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};