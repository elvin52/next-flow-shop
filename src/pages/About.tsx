import { Helmet } from 'react-helmet-async';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';

const About = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us' }
  ];

  return (
    <>
      <Helmet>
        <title>About Hidayyah - Islamic Fashion Blog & Future Shop</title>
        <meta name="description" content="Learn about Hidayyah's journey from a modest fashion blog to becoming a premier Islamic clothing destination. Discover our style guides, hijab tutorials, and upcoming shop." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hidayyah.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <StructuredBreadcrumbs items={breadcrumbItems} className="mb-6" />
          
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground font-playfair mb-4">
                About Hidayyah
              </h1>
              <p className="text-xl text-muted-foreground">
                Your trusted source for modest fashion inspiration and Islamic style guides
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Hidayyah, we believe that modest fashion should never compromise on style or inspiration. 
                  Currently, our mission is to provide comprehensive style guides, hijab tutorials, and fashion 
                  inspiration that honors tradition while embracing contemporary design. We serve Muslim men and 
                  women worldwide who seek guidance on clothing that reflects their values and enhances their confidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Journey</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a deep appreciation for Islamic heritage and modest fashion, Hidayyah began as 
                  a passion project to share style guidance and inspiration with the Muslim community. Our name, 
                  derived from the Arabic word meaning "guidance," reflects our commitment to helping individuals 
                  discover and express their modest fashion style. What started as a blog sharing hijab tutorials 
                  and Islamic fashion insights is evolving into a comprehensive platform that will soon offer 
                  carefully curated modest wear for the community we serve.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Currently Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Style Guides & Tutorials</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Comprehensive hijab styling guides</li>
                      <li>• Abaya and modest dress inspiration</li>
                      <li>• Seasonal fashion tips</li>
                      <li>• Traditional and modern style combinations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Fashion Education</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Islamic clothing history and significance</li>
                      <li>• Men's Islamic wear guides</li>
                      <li>• Modest fashion trend analysis</li>
                      <li>• Cultural appreciation and understanding</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium text-foreground mb-2">Coming Soon: Online Shop</h3>
                  <p className="text-muted-foreground">
                    We're excited to announce that we're working on launching our online shop, where you'll find 
                    carefully curated modest wear, hijabs, abayas, and Islamic clothing for both men and women. 
                    Stay tuned for updates!
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground mb-2">Authenticity</h3>
                    <p className="text-muted-foreground">
                      We honor Islamic traditions while creating contemporary designs
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground mb-2">Quality</h3>
                    <p className="text-muted-foreground">
                      Premium materials and expert craftsmanship in every piece
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Building connections through shared values and style
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Community</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hidayyah is more than a fashion blog – we're a growing community of individuals who celebrate 
                  modest fashion and Islamic values. Explore our style guides, learn from our tutorials, 
                  and discover new ways to express your unique style while staying true to your beliefs. 
                  Join us on this journey as we evolve from sharing inspiration to providing the beautiful 
                  modest wear pieces you've been searching for.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;