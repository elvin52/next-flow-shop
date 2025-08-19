import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium lifestyle products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Premium Products
            <span className="block text-accent">Delivered Fast</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our curated collection of high-quality products designed for modern living.
            Shop with confidence and enjoy exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="xl">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="xl">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="space-y-4">
                <div className="h-12 w-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto">
                  <Truck className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on all orders over $50. Fast and reliable delivery worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="space-y-4">
                <div className="h-12 w-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Secure Shopping</h3>
                <p className="text-muted-foreground">
                  Your payment information is secure with our encrypted checkout process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="space-y-4">
                <div className="h-12 w-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our customer support team is here to help you anytime, anywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium products that our customers love most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="cta" size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, exclusive offers, and special events.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-foreground bg-background border-0"
            />
            <Button variant="cta" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;