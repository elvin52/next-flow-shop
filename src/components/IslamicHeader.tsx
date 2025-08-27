'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { genders, typesByGender } from '@/data/islamic-taxonomy';
import { useCartStore } from '@/store/cartStore';
import { useResponsive } from '@/hooks/useResponsive';
import { SEOLink } from '@/components/common/SEOLink';
import { useState } from 'react';

const IslamicHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useResponsive();
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  
  const isBlogFirst = process.env.NEXT_PUBLIC_BLOG_FIRST === 'true';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <SEOLink to="/" priority="high" className="flex items-center space-x-2">
            <img 
              src="/hidayyah-logo-ill.png" 
              alt="Hidayyah - Premium Islamic Clothing and Modest Fashion Store" 
              title="Hidayyah - Your trusted source for authentic Islamic wear"
              className="h-16 w-auto"
            />
            <span className="text-xl font-bold text-foreground font-playfair">Hidayyah</span>
          </SEOLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <SEOLink to="/blog" priority="high" className="text-sm font-medium">
              Style Guides
            </SEOLink>
            
            {!isBlogFirst && (
              /* Gender-based navigation - only show when not in blog-first mode */
              genders.map(gender => (
                <DropdownMenu key={gender.id}>
                  <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                    {gender.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <SEOLink to={`/${gender.id}`} priority="normal">All {gender.name}'s Wear</SEOLink>
                    </DropdownMenuItem>
                    {typesByGender[gender.id].map(type => (
                      <DropdownMenuItem key={type.id} asChild>
                        <SEOLink to={`/${gender.id}/${type.id}`} priority="normal">{type.name}</SEOLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))
            )}
            
            <SEOLink to="/blog/hijab-styles-guide" priority="high" className="text-sm font-medium">
              Hijab Tutorials
            </SEOLink>
            
            {isBlogFirst && (
              <SEOLink to="/coming-soon" priority="normal" className="text-sm font-medium">
                Shop (Coming Soon)
              </SEOLink>
            )}
            
            <SEOLink to="/about" priority="normal" className="text-sm font-medium">
              About
            </SEOLink>
            
            <SEOLink to="/contact" priority="normal" className="text-sm font-medium">
              Contact
            </SEOLink>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  <SEOLink 
                    to="/blog" 
                    priority="high" 
                    className="text-lg font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Style Guides
                  </SEOLink>
                  
                  {!isBlogFirst && genders.map(gender => (
                    <div key={gender.id} className="space-y-2">
                      <SEOLink 
                        to={`/${gender.id}`} 
                        priority="normal"
                        className="text-lg font-medium py-2 block"
                        onClick={() => setIsOpen(false)}
                      >
                        {gender.name}
                      </SEOLink>
                      <div className="ml-4 space-y-1">
                        {typesByGender[gender.id].map(type => (
                          <SEOLink 
                            key={type.id}
                            to={`/${gender.id}/${type.id}`} 
                            priority="low"
                            className="block py-1 text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {type.name}
                          </SEOLink>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <SEOLink 
                    to="/blog/hijab-styles-guide" 
                    priority="high" 
                    className="text-lg font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Hijab Tutorials
                  </SEOLink>
                  
                  {isBlogFirst && (
                    <SEOLink 
                      to="/coming-soon" 
                      priority="normal" 
                      className="text-lg font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Shop (Coming Soon)
                    </SEOLink>
                  )}
                  
                  <SEOLink 
                    to="/about" 
                    priority="normal" 
                    className="text-lg font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </SEOLink>
                  
                  <SEOLink 
                    to="/contact" 
                    priority="normal" 
                    className="text-lg font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </SEOLink>
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Cart Icon */}
          <SEOLink to={isBlogFirst ? "/coming-soon" : "/cart"} className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              title={isBlogFirst ? 'Coming Soon' : 'Shopping Cart'}
              className="h-10 w-10 md:h-9 md:w-9"
            >
              <ShoppingCart className="h-5 w-5" />
              {!isBlogFirst && totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 md:h-6 md:w-6 rounded-full p-0 flex items-center justify-center text-xs">
                  {totalItems > 99 ? '99+' : totalItems}
                </Badge>
              )}
            </Button>
          </SEOLink>

          {/* Account Icon */}
          <SEOLink to={isBlogFirst ? "/coming-soon" : "/account"}>
            <Button 
              variant="ghost" 
              size="icon" 
              title={isBlogFirst ? 'Coming Soon' : 'Account'}
              className="h-10 w-10 md:h-9 md:w-9"
            >
              <User className="h-5 w-5" />
            </Button>
          </SEOLink>
        </div>
      </div>
    </header>
  );
};

export default IslamicHeader;