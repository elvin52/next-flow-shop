import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { genders, typesByGender } from '@/data/islamic-taxonomy';
import { useCartStore } from '@/store/cartStore';

const IslamicHeader = () => {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold text-primary font-playfair">
            Hidayya
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Gender-based navigation */}
            {genders.map(gender => (
              <DropdownMenu key={gender.id}>
                <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition-colors">
                  {gender.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to={`/${gender.id}`}>All {gender.name}'s Wear</Link>
                  </DropdownMenuItem>
                  {typesByGender[gender.id].map(type => (
                    <DropdownMenuItem key={type.id} asChild>
                      <Link to={`/${gender.id}/${type.id}`}>{type.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            
            <Link to="/hijab-style-guide" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Style Guide
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default IslamicHeader;