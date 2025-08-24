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
    <div className={`${aspectClasses[aspectRatio]} overflow-hidden min-h-[calc(100%+70px)] ${className}`}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        style={{ objectPosition: src.includes('instant-hijab') ? 'center 20%' : 'center center' }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
};