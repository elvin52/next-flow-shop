import { ChevronRight } from 'lucide-react';
import { SEOLink } from './SEOLink';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbNavigation = ({ items, className = '' }: BreadcrumbNavigationProps) => {
  // Don't render if only one item (just current page)
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center space-x-1 md:space-x-2 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 mx-1 text-muted-foreground flex-shrink-0" />
            )}
            {item.href ? (
              <SEOLink 
                to={item.href} 
                priority="normal"
                className="text-xs md:text-sm hover:text-primary truncate max-w-32 md:max-w-none"
              >
                {item.label}
              </SEOLink>
            ) : (
              <span className="text-xs md:text-sm text-muted-foreground font-medium truncate max-w-32 md:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};