import { Link } from 'react-router-dom';
import { NewsletterSignup } from './NewsletterSignup';

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/hidayyah-logo-ill.png" 
                alt="Hidayyah Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-xl">Hidayyah</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for modest fashion inspiration, hijab styles, and Islamic clothing guides.
            </p>
          </div>

          {/* Popular Guides */}
          <div className="space-y-4">
            <h3 className="font-semibold">Popular Guides</h3>
            <div className="space-y-2">
              <Link to="/blog/hijab-styles-guide" className="block text-muted-foreground hover:text-foreground transition-fast">
                Hijab Style Guide
              </Link>
              <Link to="/blog/what-do-muslim-men-wear" className="block text-muted-foreground hover:text-foreground transition-fast">
                Muslim Men's Wear
              </Link>
              <Link to="/blog/what-is-an-abaya" className="block text-muted-foreground hover:text-foreground transition-fast">
                Understanding Abayas
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-fast">
                All Style Guides
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold">About</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-fast">
                About Hidayyah
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-fast">
                Contact Us
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-fast">
                Privacy Policy
              </Link>
              <Link to="/coming-soon" className="block text-muted-foreground hover:text-foreground transition-fast text-xs">
                Shop (Coming Soon)
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <NewsletterSignup 
              variant="default"
              title="Newsletter"
              description="Get the latest modest fashion tips, hijab tutorials, and style inspiration."
              placeholder="Enter your email"
              webhookUrl={localStorage.getItem('newsletter_webhook') || undefined}
            />
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Hidayyah. All rights reserved. Inspiring modest fashion with purpose.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;