import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Clock, Bell } from 'lucide-react';

interface ComingSoonProps {
  feature: 'shop' | 'cart' | 'checkout' | 'account' | 'products';
}

const ComingSoon = ({ feature }: ComingSoonProps) => {
  const featureNames = {
    shop: 'Online Shop',
    cart: 'Shopping Cart',
    checkout: 'Checkout',
    account: 'User Account',
    products: 'Product Catalog'
  };

  return (
    <>
      <Helmet>
        <title>Coming Soon - {featureNames[feature]} | Hidayya</title>
        <meta name="description" content={`Our ${featureNames[feature].toLowerCase()} is launching soon. Explore our blog for Islamic fashion insights while you wait.`} />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="canonical" content={`${window.location.origin}${window.location.pathname}`} />
      </Helmet>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-primary/20">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-6 p-4 rounded-full bg-primary/10">
                <ShoppingBag className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold mb-2 font-playfair">
                {featureNames[feature]} Coming Soon
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                We're working hard to bring you the best Islamic fashion shopping experience.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-3 p-4 bg-accent/50 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  Expected Launch: Early 2025
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-playfair">What's Coming</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Premium Islamic clothing collection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Curated hijabs, abayas, and modest wear
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Secure shopping experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Expert styling advice
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild className="gap-2">
                  <Link to="/blog">
                    <Bell className="h-4 w-4" />
                    Read Our Blog
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/">
                    Return Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ComingSoon;