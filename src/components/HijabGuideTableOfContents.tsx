import { useState } from 'react';
import { ChevronRight, Book } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface TableOfContentsProps {
  className?: string;
}

export function HijabGuideTableOfContents({ className }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'face-shapes', title: 'Find Your Perfect Style by Face Shape' },
    { id: 'classic-wrap', title: 'Classic Wrap Hijab' },
    { id: 'modern-turban', title: 'Modern Turban Hijab' },
    { id: 'turkish-hijab', title: 'Turkish Hijab' },
    { id: 'al-amira-hijab', title: 'Al-Amira Hijab Style' },
    { id: 'instant-hijab', title: 'Instant Hijab Style' },
    { id: 'square-hijab', title: 'Square Hijab Style' },
    { id: 'hijab-materials', title: 'Hijab Materials & Fabrics' },
    { id: 'hijab-accessories', title: 'Essential Hijab Accessories' },
    { id: 'hijab-face-shapes', title: 'Hijab Styles for Face Shapes' },
    { id: 'occasion-styling', title: 'Hijab Styling by Occasion' },
    { id: 'hijab-care', title: 'Hijab Care & Maintenance' },
    { id: 'faq-section', title: 'Frequently Asked Questions' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <Sidebar className={`w-64 border-r bg-card/50 backdrop-blur-sm ${className}`}>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
            <Book className="h-4 w-4" />
            Table of Contents
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sections.map((section) => (
                <SidebarMenuItem key={section.id}>
                  <SidebarMenuButton
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full justify-start text-left py-2 px-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground ${
                      activeSection === section.id 
                        ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <ChevronRight className={`h-3 w-3 mr-2 transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`} />
                    <span className="text-xs leading-tight">{section.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}