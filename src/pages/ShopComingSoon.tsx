import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Package, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WaitlistSignup from '@/components/WaitlistSignup';

const ShopComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Shop Coming Soon - Hidayya Islamic Clothing</title>
        <meta name="description" content="Our curated collection of premium Islamic clothing is launching soon. Join our waitlist for early access and exclusive offers." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/shop-coming-soon" />
        <meta property="og:title" content="Shop Coming Soon - Hidayya Islamic Clothing" />
        <meta property="og:description" content="Premium Islamic clothing launching soon. Join our waitlist for early access." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Shop Coming Soon - Hidayya",
            "description": "Our curated collection of premium Islamic clothing is launching soon. Join our waitlist for early access.",
            "url": "https://hidayyah.com/shop-coming-soon",
            "mainEntity": {
              "@type": "Organization",
              "name": "Hidayya",
              "url": "https://hidayyah.com",
              "description": "Premium Islamic clothing and modest wear"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-8">
          {/* Back to Home */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="h-20 w-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="h-10 w-10 text-accent-foreground" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our Shop is
                <span className="block text-transparent bg-gradient-hero bg-clip-text">
                  Coming Soon
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're carefully curating a premium collection of authentic Islamic clothing. 
                While you wait, explore our blog for modest fashion inspiration and style guides.
              </p>

              {/* Launch Timeline */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-medium">Expected Launch: Early 2025</span>
              </div>
            </div>

            {/* What to Expect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center p-6 border-0 shadow-card hover-lift">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Authentic Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Hand-picked Islamic clothing from trusted manufacturers with quality guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-card hover-lift">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Package className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Curated Collection</h3>
                  <p className="text-muted-foreground text-sm">
                    Carefully selected abayas, hijabs, thobes, and modest wear for modern Muslims.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-card hover-lift">
                <CardContent className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Worth the Wait</h3>
                  <p className="text-muted-foreground text-sm">
                    We're taking time to ensure every piece meets our high standards for quality and modesty.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Waitlist Signup */}
            <div className="mb-12">
              <WaitlistSignup />
            </div>

            {/* Blog CTA */}
            <div className="text-center bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">While You Wait...</h2>
              <p className="text-muted-foreground mb-6">
                Explore our blog for modest fashion inspiration, hijab styling guides, 
                and insights into Islamic clothing traditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-sage">
                  <Link to="/blog">Read Our Blog</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/blog/hijab-styles-guide">Hijab Styling Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopComingSoon;