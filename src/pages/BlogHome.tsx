import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedArticle } from '@/components/blog/FeaturedArticle';
import { ArticleGrid } from '@/components/blog/ArticleGrid';
import { getFeaturedArticles, getRecentArticles } from '@/data/blog-articles';

const BlogHome = () => {
  // Get articles using helper functions (memoized data)
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles();

  return (
    <>
      <Helmet>
        <title>Hidayyah - Modest Fashion Blog & Style Guides | Islamic Clothing Inspiration</title>
        <meta name="description" content="Discover elegant hijab styles, modest outfit inspiration, and Islamic fashion guides. Expert tips on hijab techniques, fabric selection, and contemporary modest fashion trends." />
        <meta name="keywords" content="modest fashion blog, hijab styles, Islamic fashion, hijab guide, modest outfit ideas, hijab tutorials, islamic clothing, modest wear" />
        <link rel="canonical" href="https://hidayyah.com/" />
        <meta property="og:title" content="Hidayyah - Modest Fashion Blog & Style Guides" />
        <meta property="og:description" content="Your trusted source for hijab styles, modest fashion inspiration, and Islamic clothing guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hidayyah.com/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-sage-light/20 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-medium">Welcome to Hidayyah</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
                Modest Fashion & 
                <span className="text-primary block">Hijab Styles</span>
              </h1>
              
              <p className="text-lg md:text-xl text-warm-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover elegant hijab styles, modest outfit inspiration, and fashion tips that celebrate both tradition and contemporary style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="btn-sage" asChild>
                  <Link to="/blog">
                    Explore Style Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link to="/coming-soon" className="group">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Shop Coming Soon
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide */}
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

        {/* Recent Articles */}
        <ArticleGrid
          articles={recentArticles}
          title="Recent Articles"
          description="Latest modest fashion content and guides"
          columns={3}
          maxItems={3}
        />

        {/* All Articles CTA */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Hidayyah Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                About Hidayyah
              </h2>
              <p className="text-warm-gray text-lg leading-relaxed mb-8">
                Hidayyah is your trusted companion in the journey of modest fashion. We celebrate the beauty of Islamic style through comprehensive guides, thoughtful inspiration, and authentic perspectives on contemporary modest wear.
              </p>
              <Card className="card-elegant bg-sage-light/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary mr-2" />
                    <span className="text-primary font-semibold">Coming Soon</span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3">
                    Hidayyah Modest Fashion Store
                  </h3>
                  <p className="text-warm-gray mb-6">
                    We're carefully curating a collection of authentic, high-quality Islamic clothing and hijabs that honor tradition while embracing contemporary style.
                  </p>
                  <Button className="btn-sage" asChild>
                    <Link to="/coming-soon">
                      Learn More About Our Upcoming Store
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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

export default BlogHome;