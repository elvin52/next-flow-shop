interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: 'square' | '4/3' | '16/9' | 'auto';
}

export const ResponsiveImage = ({ 
  src, 
  alt, 
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = '',
  priority = false,
  aspectRatio = 'auto'
}: ResponsiveImageProps) => {
  const aspectClasses = {
    'square': 'aspect-square',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-video',
    'auto': ''
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};