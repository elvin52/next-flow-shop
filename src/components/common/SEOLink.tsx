import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SEOLinkProps {
  to: string;
  children: React.ReactNode;
  priority?: 'high' | 'normal' | 'low';
  isExternal?: boolean;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export const SEOLink = ({ 
  to, 
  children, 
  priority = 'normal',
  isExternal = false,
  className,
  title,
  onClick,
  ...props
}: SEOLinkProps) => {
  const linkClass = cn(
    className,
    priority === 'high' && 'font-semibold text-primary',
    priority === 'normal' && 'hover:text-primary transition-colors',
    priority === 'low' && 'text-muted-foreground hover:text-foreground transition-colors'
  );

  if (isExternal) {
    return (
      <a 
        href={to} 
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={to} 
      className={linkClass}
      title={title}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};