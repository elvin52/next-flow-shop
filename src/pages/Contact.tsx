import { Helmet } from 'react-helmet-async';
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Contact Us' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Hidayya - Customer Support & Inquiries</title>
        <meta name="description" content="Get in touch with Hidayya for customer support, product inquiries, or feedback about our Islamic and modest fashion collection. We're here to help." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hidayyah.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <StructuredBreadcrumbs items={breadcrumbItems} className="mb-6" />
          
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground font-playfair mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                We're here to help with any questions about our modest fashion collection
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Have a question or need assistance? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      For general inquiries and customer support:
                    </p>
                    <a 
                      href="mailto:support@hidayyah.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      support@hidayyah.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Response Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We typically respond to all inquiries within 24-48 hours during business days.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Customer Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our customer service team is here to help with:
                    </p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Product information and sizing</li>
                      <li>• Order status and tracking</li>
                      <li>• Returns and exchanges</li>
                      <li>• Style advice and recommendations</li>
                      <li>• Wholesale and bulk orders</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Connect With Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Follow us on social media for the latest collections and style inspiration.
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Instagram: @hidayya_fashion</p>
                      <p>Facebook: Hidayya Fashion</p>
                      <p>Pinterest: Hidayya Modest Fashion</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;