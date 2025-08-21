import { Helmet } from 'react-helmet-async';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';

const Terms = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Terms of Service' }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Hidayya</title>
        <meta name="description" content="Read Hidayya's terms of service to understand your rights and responsibilities when shopping for Islamic and modest fashion on our website." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hidayyah.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <StructuredBreadcrumbs items={breadcrumbItems} className="mb-6" />
          
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground font-playfair mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: August 21, 2025
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p>
                  By accessing and using Hidayya's website (hidayyah.com) and services, you agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Our Services</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Eligibility</h3>
                <p>You must be at least 18 years old or have parental consent to use our services. By using our website, you represent that you meet these requirements.</p>

                <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Account Responsibility</h3>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Maintaining the confidentiality of your account</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and current information</li>
                  <li>Notifying us of any unauthorized use</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Prohibited Uses</h3>
                <p>You may not use our services to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious content</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Interfere with service operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Orders and Payments</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Order Acceptance</h3>
                <p>
                  All orders are subject to acceptance by Hidayya. We reserve the right to refuse or cancel 
                  orders for any reason, including product availability, pricing errors, or suspected fraud.
                </p>

                <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Pricing and Payment</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All prices are displayed in the applicable currency</li>
                  <li>Prices may change without notice</li>
                  <li>Payment is due at the time of order</li>
                  <li>We accept major credit cards and approved payment methods</li>
                  <li>Additional fees (taxes, shipping) may apply</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Order Modifications</h3>
                <p>
                  Order modifications or cancellations may not be possible once processing begins. 
                  Contact us immediately if changes are needed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping and Delivery</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Delivery times are estimates and not guaranteed</li>
                  <li>Risk of loss transfers upon delivery to carrier</li>
                  <li>You must inspect orders upon receipt</li>
                  <li>Report any issues within the specified time frame</li>
                  <li>International orders may be subject to customs duties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Exchanges</h2>
                <p>Our return policy includes:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>30-day return window for most items</li>
                  <li>Items must be unworn and in original condition</li>
                  <li>Original tags and packaging must be included</li>
                  <li>Some items may not be eligible for return</li>
                  <li>Return shipping costs may apply</li>
                  <li>Refunds processed within 5-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p>
                  All content on our website, including text, images, designs, and trademarks, is owned by 
                  Hidayya or our licensors. You may not use our intellectual property without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Product Information</h2>
                <p>
                  We strive for accuracy in product descriptions and images. However, we do not warrant that 
                  descriptions are completely accurate or error-free. Colors may vary due to monitor settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Hidayya shall not be liable for any indirect, 
                  incidental, special, or consequential damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we 
                  collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
                <p>
                  Any disputes arising from these terms shall be resolved through binding arbitration in 
                  accordance with applicable arbitration rules, rather than in court.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Material changes will be 
                  communicated via email or website notice. Continued use constitutes acceptance of updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p>
                  These terms are governed by the laws of the jurisdiction where Hidayya is established, 
                  without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium text-foreground">Hidayya Legal Team</p>
                  <p>Email: legal@hidayyah.com</p>
                  <p>Website: <a href="/contact" className="text-primary hover:underline">hidayyah.com/contact</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Severability</h2>
                <p>
                  If any provision of these terms is found to be unenforceable, the remaining provisions 
                  will continue in full force and effect.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;