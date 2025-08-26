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

interface TableOfContentsProps {
  className?: string;
}

const tocSections = [
  { id: 'face-shape-navigator', title: 'Face Shape Navigator', subsections: [] },
  { id: 'popular-hijab-styles', title: 'Popular Hijab Styles', subsections: [
    { id: 'classic-wrap', title: 'Classic Wrap' },
    { id: 'modern-turban', title: 'Modern Turban' },
    { id: 'turkish-hijab', title: 'Turkish Hijab' },
    { id: 'al-amira-hijab', title: 'Al-Amira Style' },
    { id: 'instant-hijab', title: 'Instant Hijab' },
    { id: 'square-hijab', title: 'Square Hijab' }
  ]},
  { id: 'occasion-styles', title: 'Styles for Occasions', subsections: [] },
  { id: 'hijab-fabrics', title: 'Choose Hijab Fabrics', subsections: [] },
  { id: 'hijab-accessories', title: 'Build Your Hijab Kit', subsections: [] },
  { id: 'face-shape-tips', title: 'Face Shape Tips', subsections: [] },
  { id: 'fashion-trends', title: '2025 Fashion Trends', subsections: [] },
  { id: 'faq', title: 'Frequently Asked Questions', subsections: [] }
];

export const TableOfContents = ({ className }: TableOfContentsProps) => {
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
    tocSections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
      
      // Also observe subsections
      section.subsections.forEach(subsection => {
        const subElement = document.getElementById(subsection.id);
        if (subElement) observer.observe(subElement);
      });
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
  }, []);

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
            {tocSections.map((section) => (
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
                
                {section.subsections.length > 0 && (
                  <div className="ml-3 mt-1 space-y-1">
                    {section.subsections.map((subsection) => (
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
            ))}
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
                      tocSections.find(s => s.id === activeSection)?.title ||
                      tocSections.find(s => s.subsections.some(sub => sub.id === activeSection))?.subsections.find(sub => sub.id === activeSection)?.title ||
                      'Navigate...'
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
                {tocSections.map((section, index) => (
                  <div key={section.id}>
                    <DropdownMenuItem
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "cursor-pointer px-3 py-2 text-sm",
                        activeSection === section.id && "bg-muted text-primary font-medium"
                      )}
                    >
                      {section.title}
                    </DropdownMenuItem>
                    
                    {section.subsections.length > 0 && (
                      <div className="ml-4 border-l border-muted">
                        {section.subsections.map((subsection) => (
                          <DropdownMenuItem
                            key={subsection.id}
                            onClick={() => scrollToSection(subsection.id)}
                            className={cn(
                              "cursor-pointer px-3 py-1.5 text-xs text-muted-foreground",
                              activeSection === subsection.id && "bg-muted text-primary font-medium"
                            )}
                          >
                            • {subsection.title}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    )}
                    
                    {index < tocSections.length - 1 && <DropdownMenuSeparator />}
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