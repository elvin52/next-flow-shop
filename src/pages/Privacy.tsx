import { Helmet } from 'react-helmet-async';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';

const Privacy = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy' }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Hidayya</title>
        <meta name="description" content="Read Hidayya's privacy policy to understand how we collect, use, and protect your personal information when you shop for Islamic and modest fashion." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hidayyah.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <StructuredBreadcrumbs items={breadcrumbItems} className="mb-6" />
          
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground font-playfair mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: August 21, 2025
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p>
                  Hidayya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website hidayyah.com and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Account credentials and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Order history and shipping details</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer service and support</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Improve our website and services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information. We may share information in these situations:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>With trusted service providers who assist in operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights or safety</li>
                  <li>In connection with a business transfer</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                  secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze website usage, 
                  and personalize content. You can control cookie preferences through your browser settings, 
                  though some features may not function properly if disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your information</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13. If we learn we have collected such information, we will 
                  delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">International Users</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place for international transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of material changes 
                  via email or website notice. Your continued use constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium text-foreground">Hidayya Privacy Team</p>
                  <p>Email: privacy@hidayyah.com</p>
                  <p>Website: <a href="/contact" className="text-primary hover:underline">hidayyah.com/contact</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;