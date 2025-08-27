'use client';

import Link from 'next/link';
import { Search, Truck, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import CategoryCard from '@/components/CategoryCard';
import ProductGrid from '@/components/ProductGrid';
import { genders, typesByGender } from '@/data/islamic-taxonomy';
import { getBestSellingProducts, getNewArrivals, getOnSaleProducts } from '@/data/product-selectors';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  // SEO-focused product selections for link juice distribution
  const bestSellers = getBestSellingProducts(6);
  const newArrivals = getNewArrivals(6);  
  const onSaleProducts = getOnSaleProducts(6);

  return (
    <>

      <div className="min-h-screen">
        {/* Hero Section - Minimal banner for SEO focus */}
        <section className="relative bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Authentic Islamic Clothing
                <span className="block text-accent-foreground">For Modern Muslims</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Discover our curated collection of premium abayas, hijabs, thobes, and modest wear. 
                Combining traditional values with contemporary style.
              </p>
              
              {/* Search Bar for enhanced UX */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    type="search" 
                    placeholder="Search for abayas, hijabs, thobes..."
                    className="pl-10 bg-background text-foreground border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Categories - Strategic link juice distribution */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our authentic Islamic clothing collections designed for every occasion
              </p>
            </div>

            {/* Categories by Gender */}
            {genders.map((gender) => (
              <div key={gender.id} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">{gender.name}'s Collection</h3>
                  <Link 
                    href={`/${gender.id}`}
                    className="text-accent hover:text-accent-hover font-medium"
                  >
                    View All {gender.name}'s Items →
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {typesByGender[gender.id].map((category) => (
                    <CategoryCard 
                      key={category.id} 
                      category={category} 
                      gender={gender.id} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Selling Products - Direct links for SEO */}
        <ProductGrid
          products={bestSellers}
          title="Best Sellers"
          description="Our most popular Islamic clothing items loved by customers worldwide"
          showViewAll={true}
          viewAllLink="/products"
        />

        {/* New Arrivals - Fresh content for SEO */}
        <ProductGrid
          products={newArrivals}
          title="New Arrivals"
          description="Discover the latest additions to our Islamic clothing collection"
          showViewAll={true}
          viewAllLink="/products"
        />

        {/* On Sale Products - Strategic link distribution */}
        <ProductGrid
          products={onSaleProducts}
          title="Special Offers"
          description="Premium Islamic clothing at unbeatable prices - limited time offers"
          showViewAll={true}
          viewAllLink="/products"
        />

        {/* Trust Signals - Keeping for conversion optimization */}
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
                  <h3 className="text-lg font-semibold">Authentic Quality</h3>
                  <p className="text-muted-foreground">
                    All our Islamic clothing is sourced from trusted manufacturers with quality guarantee.
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
                    Our customer support team is here to help with your Islamic clothing needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;