import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WaitlistSignup from '@/components/WaitlistSignup';
import hijabStyleHero from '@/assets/hijab-style-guide-hero.jpg';
import abayaHero from '@/assets/abaya-article-hero.jpg';
import muslimMenHero from '@/assets/muslim-men-wear-hero.jpg';

const BlogHome = () => {
  const featuredArticles = [
    {
      title: "Complete Hijab Styling Guide: 5 Modern Styles for Every Occasion",
      excerpt: "Master the art of hijab styling with our comprehensive guide featuring 5 versatile styles perfect for work, casual outings, and special events.",
      image: hijabStyleHero,
      link: "/blog/hijab-styles-guide",
      category: "Styling Guide",
      readTime: "8 min read"
    },
    {
      title: "What is an Abaya? Understanding Islamic Modest Wear",
      excerpt: "Discover the rich history, cultural significance, and modern interpretations of the abaya in Islamic fashion and modest wear.",
      image: abayaHero,
      link: "/blog/what-is-an-abaya",
      category: "Education",
      readTime: "6 min read"
    },
    {
      title: "What Do Muslim Men Wear? A Guide to Islamic Men's Fashion",
      excerpt: "Explore traditional and contemporary Islamic clothing for men, from thobes and kurtas to modern modest fashion choices.",
      image: muslimMenHero,
      link: "/blog/what-do-muslim-men-wear",
      category: "Men's Fashion",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hidayya - The Ultimate Guide to Islamic Fashion & Modest Wear</title>
        <meta name="description" content="Your trusted source for Islamic fashion insights, hijab styling guides, and modest wear inspiration. Discover authentic Islamic clothing traditions and modern styling tips." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Hidayya - The Ultimate Guide to Islamic Fashion" />
        <meta property="og:description" content="Expert guides on Islamic fashion, modest wear, and authentic styling tips for modern Muslims." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Islamic fashion blog, hijab styling guide, modest wear, abaya styles, Islamic clothing, Muslim fashion, modest fashion blog" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Hidayya Islamic Fashion Blog",
            "description": "The ultimate guide to Islamic fashion, modest wear, and authentic styling for modern Muslims.",
            "url": "https://hidayyah.com",
            "author": {
              "@type": "Organization",
              "name": "Hidayya"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hidayya",
              "url": "https://hidayyah.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">Islamic Fashion Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                The Ultimate Guide to
                <span className="block text-accent-foreground">Islamic Fashion</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Discover authentic Islamic fashion insights, hijab styling guides, and modest wear inspiration. 
                Your trusted source for navigating Islamic clothing with confidence and style.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/blog">Explore Articles</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/blog/hijab-styles-guide">Hijab Styling Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive guides to help you navigate Islamic fashion with confidence and authenticity
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <Card key={index} className="card-elegant hover-lift overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link to={article.link} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" asChild className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                      <Link to={article.link} className="flex items-center gap-1">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild className="btn-sage">
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Shop Coming Soon Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">Coming Soon</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Premium Islamic Clothing Store</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  While we provide you with expert fashion guidance, we're also curating a premium collection 
                  of authentic Islamic clothing. Be the first to access our carefully selected pieces.
                </p>
              </div>
              
              <WaitlistSignup className="max-w-2xl mx-auto" />
              
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/shop-coming-soon">Learn More About Our Shop</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Why Trust Hidayya?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're passionate about helping modern Muslims navigate Islamic fashion with authenticity and confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-0 shadow-card">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Expert Knowledge</h3>
                  <p className="text-muted-foreground">
                    Deep understanding of Islamic fashion traditions and modern modest wear trends.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-card">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Community Focused</h3>
                  <p className="text-muted-foreground">
                    Building a supportive community of Muslims who value both faith and fashion.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-card">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Authentic Approach</h3>
                  <p className="text-muted-foreground">
                    Combining traditional Islamic values with contemporary style guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogHome;