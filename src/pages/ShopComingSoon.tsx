import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, Clock, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Hidayyah Modest Fashion Store - Coming Soon</title>
        <meta name="description" content="Hidayyah's curated collection of authentic Islamic clothing and hijabs is launching soon. Discover our commitment to quality modest fashion." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="/coming-soon" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-sage-light/20 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary mr-3" />
                <span className="text-primary font-medium">Coming Soon</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
                Hidayyah Modest
                <span className="text-primary block">Fashion Store</span>
              </h1>
              
              <p className="text-lg md:text-xl text-warm-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                We're carefully curating a collection of authentic, high-quality Islamic clothing and hijabs that honor tradition while embracing contemporary style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="btn-sage" asChild>
                  <Link to="/blog">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Our Style Guides
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link to="/">
                    Return Home
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 islamic-border pt-6">
                  What to Expect
                </h2>
                <p className="text-warm-gray">Our vision for authentic modest fashion</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="card-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3">
                      Curated Quality
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Every piece will be carefully selected for its quality, comfort, and authentic Islamic aesthetic.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3">
                      Timeless Designs
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Classic pieces that honor tradition while fitting seamlessly into modern life.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elegant text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3">
                      Style Guidance
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Expert styling tips and cultural context to help you make informed choices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gradient-to-b from-background to-sage-light/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-8">
                Launch Timeline
              </h2>
              
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold mb-2">Content & Community (Current)</h3>
                        <p className="text-warm-gray text-sm">
                          Building our community through valuable style guides and modest fashion inspiration.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold mb-2">Product Curation (Coming Soon)</h3>
                        <p className="text-warm-gray text-sm">
                          Carefully selecting and sourcing authentic pieces from trusted artisans and brands.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-warm-gray text-sm font-bold">3</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold mb-2">Store Launch (2024)</h3>
                        <p className="text-warm-gray text-sm">
                          Official launch of our modest fashion collection with exclusive pieces.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Be the First to Know
              </h2>
              <p className="text-warm-gray mb-8">
                Join our newsletter for exclusive early access, style tips, and updates on our store launch.
              </p>
              
              <Card className="card-elegant">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <Button className="btn-sage">
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-warm-gray mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-sage-light/20 to-gold-light/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Start Your Style Journey Today
              </h2>
              <p className="text-warm-gray mb-8">
                While you wait for our store, explore our comprehensive style guides and modest fashion inspiration.
              </p>
              <Button size="lg" className="btn-sage" asChild>
                <Link to="/blog">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Our Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopComingSoon;