import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SEOLink } from './SEOLink';

interface ArticleNavigationProps {
  previousArticle?: {
    title: string;
    link: string;
  };
  nextArticle?: {
    title: string;
    link: string;
  };
}

export const ArticleNavigation = ({ previousArticle, nextArticle }: ArticleNavigationProps) => {
  if (!previousArticle && !nextArticle) return null;

  return (
    <Card className="card-elegant mt-16">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Previous Article */}
          <div className="flex justify-start">
            {previousArticle && (
              <SEOLink to={previousArticle.link} priority="normal" className="group block">
                <Button variant="outline" className="h-auto p-4 text-left group-hover:border-primary transition-all">
                  <div className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Previous Guide</div>
                      <div className="font-medium text-sm line-clamp-2 group-hover:text-primary">
                        {previousArticle.title}
                      </div>
                    </div>
                  </div>
                </Button>
              </SEOLink>
            )}
          </div>

          {/* Next Article */}
          <div className="flex justify-end">
            {nextArticle && (
              <SEOLink to={nextArticle.link} priority="normal" className="group block">
                <Button variant="outline" className="h-auto p-4 text-right group-hover:border-primary transition-all">
                  <div className="flex items-center">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Next Guide</div>
                      <div className="font-medium text-sm line-clamp-2 group-hover:text-primary">
                        {nextArticle.title}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 ml-3 text-primary flex-shrink-0" />
                  </div>
                </Button>
              </SEOLink>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};