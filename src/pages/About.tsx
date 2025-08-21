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
        <title>About Hidayyah - Premium Islamic & Modest Fashion</title>
        <meta name="description" content="Learn about Hidayyah's mission to provide authentic, high-quality Islamic and modest fashion for men and women. Discover our commitment to tradition, style, and community." />
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
                Your trusted destination for authentic Islamic and modest fashion
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Hidayyah, we believe that modest fashion should never compromise on style or quality. 
                  Our mission is to provide authentic, beautifully crafted Islamic wear that honors tradition 
                  while embracing contemporary design. We serve Muslim men and women worldwide who seek 
                  clothing that reflects their values and enhances their confidence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Founded with a deep appreciation for Islamic heritage and modest fashion, Hidayyah emerged 
                  from the desire to bridge traditional craftsmanship with modern style. Our name, derived 
                  from the Arabic word meaning "guidance," reflects our commitment to helping individuals 
                  express their faith through beautiful, modest clothing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">For Women</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Premium hijabs in various styles</li>
                      <li>• Elegant abayas and modest dresses</li>
                      <li>• Contemporary modest wear</li>
                      <li>• Traditional and modern designs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">For Men</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Traditional thobes and dishdashas</li>
                      <li>• Contemporary Islamic wear</li>
                      <li>• Prayer caps and accessories</li>
                      <li>• Formal and casual options</li>
                    </ul>
                  </div>
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
                  Hidayyah is more than a fashion brand – we're a community of individuals who celebrate 
                  modest fashion and Islamic values. Follow our style guides, connect with fellow customers, 
                  and discover new ways to express your unique style while staying true to your beliefs.
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