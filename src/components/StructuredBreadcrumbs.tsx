import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface StructuredBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Enhanced breadcrumbs component with JSON-LD structured data
 * Automatically generates Schema.org BreadcrumbList for SEO
 */
const StructuredBreadcrumbs = ({ items, className = '' }: StructuredBreadcrumbsProps) => {
  // Generate JSON-LD structured data
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.href && { "item": `${window.location.origin}${item.href}` })
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbList)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {item.href ? (
              <Link 
                to={item.href} 
                className="hover:text-foreground transition-fast"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-foreground">{item.name}</span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default StructuredBreadcrumbs;