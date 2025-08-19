import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { TypeConfig, GenderId } from '@/data/islamic-taxonomy';

interface CategoryCardProps {
  category: TypeConfig;
  gender: GenderId;
}

const CategoryCard = ({ category, gender }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-200 border-border/50">
      <Link to={`/${gender}/${category.id}`} className="block">
        <CardContent className="p-6 text-center space-y-4">
          {/* Category icon placeholder - could be replaced with actual icons */}
          <div className="h-16 w-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-accent-foreground">
              {category.name.charAt(0)}
            </span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {category.description}
            </p>
          </div>

          {/* Popular styles as subcategory links */}
          <div className="flex flex-wrap gap-2 justify-center">
            {category.styles.slice(0, 3).map((style) => (
              <Link
                key={style}
                to={`/${gender}/${category.id}/${style.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {style}
              </Link>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;