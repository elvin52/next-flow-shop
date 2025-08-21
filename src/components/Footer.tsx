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
                <span className="text-accent-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">Hidayyah</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for modest fashion inspiration, hijab styles, and Islamic clothing guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground transition-fast">
                Style Guides
              </Link>
              <Link to="/blog/hijab-styles-guide" className="block text-muted-foreground hover:text-foreground transition-fast">
                Hijab Tutorials
              </Link>
              <Link to="/coming-soon" className="block text-muted-foreground hover:text-foreground transition-fast">
                Shop (Coming Soon)
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
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest modest fashion tips, hijab tutorials, and style inspiration.
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
          <p>&copy; 2024 Hidayyah. All rights reserved. Inspiring modest fashion with purpose.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;