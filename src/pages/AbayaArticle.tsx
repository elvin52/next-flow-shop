import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Eye, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';

// Import a placeholder image for now
import modernTurbanImage from '@/assets/modern-turban-hijab.jpg';

const AbayaArticle = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'What is an Abaya?' }
  ];

  const article = {
    title: "What is an Abaya? Can Non-Muslims Wear an Abaya?",
    readTime: "12 min read",
    views: "1.2K views",
    publishDate: "August 20, 2025",
    category: "Cultural Guide"
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": {
      "@type": "Organization",
      "name": "Islamic Wear Store"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Islamic Wear Store",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/favicon.ico`
      }
    },
    "datePublished": "2025-08-20",
    "dateModified": "2025-08-20",
    "description": "Comprehensive guide about abayas, their cultural significance, and whether non-Muslims can respectfully wear them.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  return (
    <>
      <Helmet>
        <title>What is an Abaya? Can Non-Muslims Wear an Abaya? | Islamic Wear Store</title>
        <meta name="description" content="Learn about the abaya's cultural significance, different styles, and whether non-Muslims can respectfully wear this traditional Islamic garment." />
        <meta name="keywords" content="abaya, Islamic clothing, modest fashion, cultural appropriation, non-Muslim, traditional dress" />
        <link rel="canonical" href={`${window.location.origin}/blog/what-is-an-abaya`} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <StructuredBreadcrumbs 
              items={breadcrumbItems} 
              className="mb-6" 
            />
            
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="text-primary font-medium text-sm">{article.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {article.views}
                </div>
                <div>Published {article.publishDate}</div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                <img 
                  src={modernTurbanImage} 
                  alt="Beautiful abaya styles and modest fashion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The abaya is one of the most recognizable garments in Islamic modest fashion, but many people wonder about its origins, significance, and whether it's appropriate for non-Muslims to wear. In this comprehensive guide, we'll explore everything you need to know about this elegant traditional garment.
                  </p>
                </div>

                {/* What is an Abaya Section */}
                <Card className="mb-8 p-6 bg-sage-light/10">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">What is an Abaya?</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      An abaya is a loose-fitting, long-sleeved robe-like dress that covers the entire body except for the face, feet, and hands. Traditionally black, modern abayas come in various colors, fabrics, and designs while maintaining their modest coverage.
                    </p>
                    <p>
                      The word "abaya" comes from Arabic and literally means "cloak." It's designed to provide coverage while allowing freedom of movement, making it both practical and elegant for daily wear.
                    </p>
                  </div>
                </Card>

                {/* Cultural Significance */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Cultural and Religious Significance</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The abaya holds deep cultural and religious significance in Islamic tradition. It represents modesty (hijab), which is an important principle in Islam that extends beyond clothing to encompass behavior and interactions.
                    </p>
                    <p>
                      In many Middle Eastern countries, particularly in the Gulf region, the abaya is not just religious wear but also a cultural symbol that connects women to their heritage and identity.
                    </p>
                  </div>
                </div>

                {/* Different Styles */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Different Styles of Abayas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Traditional Abaya</h3>
                      <p className="text-sm text-muted-foreground">Simple, black, loose-fitting design with minimal embellishments</p>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Modern Abaya</h3>
                      <p className="text-sm text-muted-foreground">Contemporary cuts with embroidery, prints, and varied colors</p>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Butterfly Abaya</h3>
                      <p className="text-sm text-muted-foreground">Features wide, flowing sleeves that resemble butterfly wings</p>
                    </Card>
                    <Card className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Kimono Style</h3>
                      <p className="text-sm text-muted-foreground">Inspired by Japanese kimono with wide sleeves and belt</p>
                    </Card>
                  </div>
                </div>

                {/* Can Non-Muslims Wear Abayas */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Can Non-Muslims Wear an Abaya?</h2>
                  <Card className="p-6 bg-primary/5 border border-primary/20">
                    <div className="space-y-4 text-muted-foreground">
                      <p className="font-medium text-foreground">
                        The short answer is: Yes, but with respect and understanding.
                      </p>
                      <p>
                        Many Muslim scholars and community members welcome non-Muslims wearing abayas, especially when done respectfully and with appreciation for the garment's significance. Here are some important considerations:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Understand the cultural and religious significance</li>
                        <li>Wear it appropriately and modestly</li>
                        <li>Avoid wearing it as a costume or for inappropriate occasions</li>
                        <li>Show respect for the tradition it represents</li>
                      </ul>
                    </div>
                  </Card>
                </div>

                {/* When and How to Wear */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">When and How to Wear an Abaya Respectfully</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-lg font-semibold text-foreground">Appropriate Occasions:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Visiting mosques or Islamic cultural centers</li>
                      <li>Traveling to Middle Eastern countries where it's customary</li>
                      <li>Modest fashion events or cultural celebrations</li>
                      <li>As everyday modest wear for personal preference</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold text-foreground mt-6">How to Wear Respectfully:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Choose appropriate fabrics and cuts</li>
                      <li>Ensure proper coverage and modesty</li>
                      <li>Pair with appropriate footwear and accessories</li>
                      <li>Learn about the cultural context</li>
                    </ul>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Benefits of Wearing an Abaya</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 text-center">
                      <h3 className="font-semibold mb-2 text-foreground">Comfort</h3>
                      <p className="text-sm text-muted-foreground">Loose fit allows air circulation and freedom of movement</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <h3 className="font-semibold mb-2 text-foreground">Versatility</h3>
                      <p className="text-sm text-muted-foreground">Can be dressed up or down for various occasions</p>
                    </Card>
                    <Card className="p-4 text-center">
                      <h3 className="font-semibold mb-2 text-foreground">Elegance</h3>
                      <p className="text-sm text-muted-foreground">Timeless design that exudes grace and sophistication</p>
                    </Card>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Final Thoughts</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The abaya is more than just a piece of clothing—it's a symbol of modesty, tradition, and cultural identity. When worn with respect and understanding, it can be appreciated by people of all backgrounds as a beautiful expression of modest fashion.
                    </p>
                    <p>
                      Whether you're Muslim or non-Muslim, the key is to approach the abaya with respect, understanding its significance, and wearing it appropriately. This fosters cultural appreciation rather than appropriation.
                    </p>
                  </div>
                </div>

                {/* Related Articles */}
                <Card className="p-6 bg-background border">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-foreground">Related Articles</h3>
                  <div className="space-y-3">
                    <Link to="/blog/hijab-styles-guide" className="block hover:text-primary transition-colors">
                      <div className="flex items-center justify-between">
                        <span>The Ultimate Guide to Hijab Styles</span>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </div>
                    </Link>
                    <Link to="/blog" className="block hover:text-primary transition-colors">
                      <div className="flex items-center justify-between">
                        <span>More Modest Fashion Articles</span>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </div>
                    </Link>
                  </div>
                </Card>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AbayaArticle;