import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Clock, Eye, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsletterSignup } from '@/components/NewsletterSignup';

// Import images for featured articles
import classicWrapImage from '@/assets/classic-wrap-hijab-style.jpg';
import modernTurbanImage from '@/assets/jalabiya-traditional-wear.jpg';
import accessoriesImage from '@/assets/abaya-without-person.jpg';

const BlogHome = () => {
  const featuredArticles = [
    {
      title: "What Do Muslim Men Wear? Traditional Islamic Clothing Guide",
      description: "Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide.",
      image: modernTurbanImage,
      readTime: "10 min read",
      views: "856 views",
      category: "Cultural Guide",
      featured: true,
      link: "/blog/what-do-muslim-men-wear"
    },
    {
      title: "What is an Abaya? Can Non-Muslims Wear an Abaya?",
      description: "Comprehensive guide about abayas, their cultural significance, and whether non-Muslims can respectfully wear this traditional Islamic garment.",
      image: accessoriesImage,
      readTime: "12 min read",
      views: "1.2K views",
      category: "Cultural Guide",
      featured: false,
      link: "/blog/what-is-an-abaya"
    },
    {
      title: "The Ultimate Guide to Hijab Styles",
      description: "Comprehensive guide covering classic wraps, modern turbans, and trendsetting looks with detailed techniques for each style.",
      image: classicWrapImage,
      readTime: "15 min read",
      views: "2.4K views",
      category: "Style Guide",
      featured: false,
      link: "/blog/hijab-styles-guide"
    }
  ];

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

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                Featured Guide
              </h2>
              <p className="text-warm-gray">Our most comprehensive style guide</p>
            </div>

            <Card className="card-elegant overflow-hidden max-w-6xl mx-auto">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-96">
                    <img 
                      src={featuredArticles[0].image} 
                      alt={featuredArticles[0].title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-primary font-medium text-sm">{featuredArticles[0].category}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                      {featuredArticles[0].title}
                    </h3>
                    
                    <p className="text-warm-gray mb-6 leading-relaxed">
                      {featuredArticles[0].description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-warm-gray mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticles[0].readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {featuredArticles[0].views}
                      </div>
                    </div>
                    
                    <Button className="btn-sage group" asChild>
                      <Link to={featuredArticles[0].link}>
                        Read Complete Guide
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-gradient-to-b from-background to-sage-light/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                Recent Articles
              </h2>
              <p className="text-warm-gray">Latest modest fashion content and guides</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredArticles.slice(1).map((article, index) => (
                <Card key={index} className="card-elegant hover-lift group">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover rounded-t-lg"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="text-primary font-medium text-sm">{article.category}</span>
                      </div>
                      
                      <h3 className="font-playfair text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-warm-gray text-sm mb-4 leading-relaxed line-clamp-2">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-warm-gray">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {article.views}
                          </span>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="group-hover:text-primary" asChild>
                          <Link to={article.link}>
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
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
            <NewsletterSignup />
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogHome;