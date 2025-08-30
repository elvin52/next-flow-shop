import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen, ChevronUp, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface GenericTableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export const GenericTableOfContents = ({ items, className }: GenericTableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Show/hide based on scroll position
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  // Group items by level for better display
  const mainSections = items.filter(item => item.level === 2);
  const subSections = items.filter(item => item.level === 3);

  return (
    <>
      {/* Desktop - Fixed right sidebar */}
      <div className={cn(
        "hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 w-64 max-h-[70vh] overflow-y-auto z-40",
        className
      )}>
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <BookOpen className="h-4 w-4 text-primary" />
            <h3 className="font-medium text-sm">Table of Contents</h3>
          </div>
          
          <nav className="space-y-1">
            {mainSections.map((section) => {
              const relatedSubSections = subSections.filter(sub => 
                sub.id.startsWith(section.id) || section.id.includes(sub.id.split('-')[0])
              );
              
              return (
                <div key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left text-sm px-2 py-1.5 rounded transition-colors hover:bg-muted",
                      activeSection === section.id ? "text-primary bg-muted font-medium" : "text-muted-foreground"
                    )}
                  >
                    {section.title}
                  </button>
                  
                  {relatedSubSections.length > 0 && (
                    <div className="ml-3 mt-1 space-y-1">
                      {relatedSubSections.map((subsection) => (
                        <button
                          key={subsection.id}
                          onClick={() => scrollToSection(subsection.id)}
                          className={cn(
                            "w-full text-left text-xs px-2 py-1 rounded transition-colors hover:bg-muted",
                            activeSection === subsection.id ? "text-primary bg-muted font-medium" : "text-muted-foreground"
                          )}
                        >
                          • {subsection.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile/Tablet - Bottom sticky navigation */}
      <div className="xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-background/95 backdrop-blur-sm border border-border rounded-full px-3 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-8 px-3 text-sm font-medium justify-between min-w-[120px] hover:bg-muted/50"
                >
                  <span className="truncate">
                    {activeSection ? 
                      items.find(item => item.id === activeSection)?.title || 'Navigate...'
                      : 'Navigate...'
                    }
                  </span>
                  <ChevronDown className="h-3 w-3 ml-1 flex-shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent 
                align="center" 
                className="w-64 max-h-80 overflow-y-auto bg-background/98 backdrop-blur-sm border border-border"
                sideOffset={8}
              >
                {items.map((item, index) => (
                  <div key={item.id}>
                    <DropdownMenuItem
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "cursor-pointer px-3 py-2 text-sm",
                        item.level === 3 && "ml-4 text-xs text-muted-foreground",
                        activeSection === item.id && "bg-muted text-primary font-medium"
                      )}
                    >
                      {item.level === 3 ? `• ${item.title}` : item.title}
                    </DropdownMenuItem>
                    
                    {index < items.length - 1 && item.level === 2 && items[index + 1]?.level === 2 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="h-8 w-8 p-0 flex-shrink-0 hover:bg-muted/50"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};