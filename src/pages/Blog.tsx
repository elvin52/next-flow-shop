import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedArticle } from '@/components/blog/FeaturedArticle';
import { ArticleGrid } from '@/components/blog/ArticleGrid';
import { BLOG_ARTICLES, BLOG_CATEGORIES, getFeaturedArticles, getRecentArticles } from '@/data/blog-articles';

const Blog = () => {
  // Get articles using helper functions (memoized data)
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles();
  const categories = BLOG_CATEGORIES;

  return (
    <>
      <Helmet>
        <title>Modest Fashion Blog | Hijab Styles & Islamic Wear Guides</title>
        <meta name="description" content="Discover elegant hijab styles, modest outfit inspiration, and fashion tips. Expert guides on hijab techniques, fabric selection, and Islamic fashion trends." />
        <meta name="keywords" content="modest fashion blog, hijab styles, Islamic fashion, hijab guide, modest outfit ideas, hijab tutorials" />
        <link rel="canonical" href="https://hidayyah.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sage-light/20 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
                Modest Fashion & 
                <span className="text-primary block">Hijab Styles</span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover elegant hijab styles, modest outfit inspiration, and fashion tips that celebrate both tradition and contemporary style.
              </p>
              <Button size="lg" className="btn-sage">
                Explore Our Latest Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                Featured Guide
              </h2>
              <p className="text-warm-gray">Our most comprehensive style guide</p>
            </div>

            {featuredArticles.length > 0 && (
              <FeaturedArticle article={featuredArticles[0]} />
            )}
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-sage-light/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                Browse by Category
              </h2>
              <p className="text-warm-gray">Find exactly what you're looking for</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="card-elegant hover-lift group">
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium text-sm">{category.count}</span>
                      <ArrowRight className="h-4 w-4 text-warm-gray group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <ArticleGrid
          articles={recentArticles}
          title="Recent Articles"
          description="Latest modest fashion content and guides"
          columns={2}
        />

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-sage-light/20 to-gold-light/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Never Miss a Style Update
              </h2>
              <p className="text-warm-gray mb-8">
                Get the latest modest fashion tips, hijab tutorials, and style guides delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button className="btn-sage">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Blog;