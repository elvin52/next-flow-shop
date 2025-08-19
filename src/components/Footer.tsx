import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Shop</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your one-stop destination for premium products and exceptional shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/products" className="block text-muted-foreground hover:text-foreground transition-fast">
                All Products
              </Link>
              <Link to="/categories" className="block text-muted-foreground hover:text-foreground transition-fast">
                Categories
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-foreground transition-fast">
                Shopping Cart
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-fast">
                Contact Us
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-foreground transition-fast">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-foreground transition-fast">
                Returns
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm hover:bg-accent-hover transition-fast">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Shop. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;