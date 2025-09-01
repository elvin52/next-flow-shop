import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, Eye, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';
import { ArticleNavigation } from '@/components/common/ArticleNavigation';

// Import images
import heroImage from '@/assets/abaya-article-hero.jpg';
import traditionalAbaya from '@/assets/traditional-abaya.jpg';
import modernAbaya from '@/assets/modern-abaya.jpg';
import butterflyAbaya from '@/assets/butterfly-abaya.jpg';
import kimonoStyleAbaya from '@/assets/kimono-style-abaya.jpg';

const AbayaArticle = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'What is an Abaya?' }
  ];

  const article = {
    title: "What is an Abaya? Can Non-Muslims Wear an Abaya?",
    readTime: "8 min read",
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
        <meta name="description" content="Learn what an abaya is, its cultural role in modest fashion, popular styles, and whether non-Muslims can wear one respectfully." />
        <meta name="keywords" content="what is an abaya, Islamic modest fashion, modest wear, religious wear, modern abaya, cultural appreciation, daily wear, can a non-muslim wear an abaya, modest clothing, muslim women wear, cultural identity, Saudi Arabia" />
        <link rel="canonical" href="https://hidayyah.com/blog/what-is-an-abaya" />
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
                <Button variant="ghost" size="sm" className="ml-auto" onClick={() => navigator.share?.({
                  title: article.title,
                  url: window.location.href
                }) || navigator.clipboard?.writeText(window.location.href)}>
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative h-64 md:h-96 overflow-hidden">
          <img 
            src={heroImage} 
            alt="What is an abaya - elegant Islamic modest fashion and religious wear for Muslim women"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
                What is an Abaya?
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Understanding Islamic modest fashion and cultural significance
              </p>
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
                    The abaya is one of the most well-known garments in Islamic modest fashion. Many people wonder about its origins, meaning, and whether non-Muslims can wear this traditional dress. This guide covers everything about this elegant religious wear and its place in modest clothing today.
                  </p>
                </div>

                {/* What is an Abaya Section */}
                <Card className="mb-8 p-6 bg-sage-light/10">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">What is an Abaya?</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      An abaya is a loose-fitting, long-sleeved dress that covers the whole body except for the face, feet, and hands. This modest wear traditionally comes in black. Today's modern abaya styles include various colors, fabrics, and designs while keeping their modest coverage.
                    </p>
                    <p>
                      The word "abaya" comes from Arabic and means "cloak." Designers create this garment to provide coverage while allowing easy movement. This makes it both practical and elegant for daily wear.
                    </p>
                    <p>
                      Muslim women wear this religious clothing across the world. In Saudi Arabia and other Middle Eastern countries, the abaya serves as both traditional dress and cultural identity symbol.
                    </p>
                  </div>
                </Card>

                {/* Cultural Significance */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Cultural and Religious Significance</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The abaya holds deep cultural and religious meaning in Islamic tradition. This religious wear represents modesty (hijab). Modesty is a key principle in Islam that goes beyond clothing. It includes behavior and how people interact with others.
                    </p>
                    <p>
                      In many Middle Eastern countries, especially in the Gulf region, the abaya serves as more than religious clothing. This modest clothing also acts as a cultural symbol. It connects women to their heritage and cultural identity. Many Muslim women wear the abaya as part of their daily life and cultural practice.
                    </p>
                    <p>
                      In the United States and other Western countries, the abaya has become a fashion statement too. It shows how Islamic modest fashion has grown globally. Women choose this modest wear for both religious reasons and as a fashion trend.
                    </p>
                  </div>
                </div>

                {/* History and Origins */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">History and Origins of the Abaya</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The abaya has ancient roots in the Arabian Peninsula. For centuries, both men and women wore similar loose robes to protect against the desert climate. Over time, this evolved into specific garments for different genders.
                    </p>
                    <p>
                      In Saudi Arabia, the abaya became a national dress for women. The government required women to wear it in public spaces. However, recent changes have made wearing the abaya a personal choice rather than a legal requirement in some regions.
                    </p>
                    <p>
                      Today, the modern abaya reflects cross cultural influences. Designers blend traditional styles with contemporary fashion. This creates new looks while respecting the garment's religious and cultural heritage.
                    </p>
                  </div>
                </div>

                {/* Abaya vs Other Islamic Clothing */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">How Abayas Differ from Other Islamic Clothing</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Many people confuse the abaya with other Islamic clothing. Here are the key differences:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground">Abaya vs Hijab</h3>
                        <p className="text-sm text-muted-foreground">A hijab covers the hair and neck. An abaya covers the entire body. Muslim women often wear both together.</p>
                      </Card>
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground">Abaya vs Burqa</h3>
                        <p className="text-sm text-muted-foreground">A burqa covers the entire face and body. An abaya leaves the face visible and uncovered.</p>
                      </Card>
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground">Abaya vs Kaftan</h3>
                        <p className="text-sm text-muted-foreground">A kaftan is looser and more decorative. An abaya is more fitted and traditionally modest.</p>
                      </Card>
                      <Card className="p-4">
                        <h3 className="font-semibold mb-2 text-foreground">Abaya vs Jilbab</h3>
                        <p className="text-sm text-muted-foreground">A jilbab is similar but often has a hood. An abaya typically does not include head coverage.</p>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Different Styles */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Different Styles of Abayas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="p-4">
                      <div className="mb-4">
                        <img 
                          src={traditionalAbaya} 
                          alt="Traditional black abaya with simple design and minimal embellishments - classic Islamic modest wear"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">Traditional Abaya</h3>
                      <p className="text-sm text-muted-foreground">Simple, black, loose-fitting design with minimal embellishments</p>
                    </Card>
                    <Card className="p-4">
                      <div className="mb-4">
                        <img 
                          src={modernAbaya} 
                          alt="Modern abaya with contemporary cut, elegant embroidery and stylish design - Islamic fashion"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">Modern Abaya</h3>
                      <p className="text-sm text-muted-foreground">Contemporary cuts with embroidery, prints, and varied colors</p>
                    </Card>
                    <Card className="p-4">
                      <div className="mb-4">
                        <img 
                          src={butterflyAbaya} 
                          alt="Butterfly abaya with wide flowing sleeves resembling butterfly wings - elegant Islamic modest fashion"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-semibold mb-2 text-foreground">Butterfly Abaya</h3>
                      <p className="text-sm text-muted-foreground">Features wide, flowing sleeves that resemble butterfly wings</p>
                    </Card>
                    <Card className="p-4">
                      <div className="mb-4">
                        <img 
                          src={kimonoStyleAbaya} 
                          alt="Kimono style abaya with wide sleeves and belt inspired by Japanese design - cross-cultural Islamic fashion"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
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
                        Many Muslim scholars and community members welcome non-Muslims wearing abayas. This works best when done with respect and understanding of the garment's meaning. Here are some important things to consider:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Learn about the cultural and religious meaning</li>
                        <li>Wear it with respect and modesty</li>
                        <li>Avoid wearing it as a costume or for wrong occasions</li>
                        <li>Show respect for the tradition it represents</li>
                        <li>Consider cultural exchange and cultural appreciation</li>
                        <li>Understand it as religious practices worn by Muslims</li>
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
                      <li>Choose suitable fabrics and cuts</li>
                      <li>Ensure proper coverage and modesty</li>
                      <li>Pair with suitable footwear and accessories</li>
                      <li>Learn about the cultural context</li>
                      <li>Understand it as religious clothing for special occasions</li>
                      <li>Respect it as worn by Muslim women worldwide</li>
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

                {/* Shopping Guide */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Where to Find Quality Abayas</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      When shopping for an abaya, quality matters. Look for garments made from breathable fabrics like cotton, chiffon, or high-quality polyester blends. These materials work well for both hot climates and air-conditioned spaces.
                    </p>
                    <p>
                      Online stores often offer the widest selection of modern abaya styles. Many specialize in Islamic modest fashion and understand the needs of Muslim women. Local Islamic clothing stores in your area may also carry quality options and offer fitting services.
                    </p>
                    <p>
                      Consider factors like season, occasion, and personal style when choosing. Summer abayas should be lightweight and breathable. Winter options can include heavier fabrics and layering possibilities.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4 text-foreground">Final Thoughts</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The abaya represents not only attire but also embodies modesty, heritage, and cultural significance. People of all backgrounds can appreciate this garment as a beautiful form of modest fashion when they wear it with respect and understanding.
                    </p>
                    <p>
                      Whether you're Muslim or non-Muslim, approach the abaya with respect. Learn its meaning and wear it with care. This creates cultural appreciation rather than cultural misuse. The abaya continues to evolve while keeping its core values of modesty and respect.
                    </p>
                  </div>
                </div>

                {/* Related Articles */}
                <Card className="p-6 bg-primary/5 border border-primary/20">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-foreground">Related Articles</h3>
                  <div className="space-y-4">
                    <Link to="/blog/hijab-styles-guide" className="block p-4 rounded-lg hover:bg-sage-light/10 transition-colors">
                      <h4 className="font-semibold text-foreground mb-2">Complete Hijab Style Guide 2025 - Modern & Classic</h4>
                      <p className="text-muted-foreground text-sm">Master hijab styling with step-by-step tutorials, fabric tips, and accessory guides.</p>
                    </Link>
                    <Link to="/blog/what-do-muslim-men-wear" className="block p-4 rounded-lg hover:bg-sage-light/10 transition-colors">
                      <h4 className="font-semibold text-foreground mb-2">What Do Muslim Men Wear? Traditional Islamic Clothing Guide</h4>
                      <p className="text-muted-foreground text-sm">Complete guide to traditional Islamic clothing for men including thobe, kufi, and jalabiya.</p>
                    </Link>
                    <Link to="/blog" className="block p-4 rounded-lg hover:bg-sage-light/10 transition-colors">
                      <h4 className="font-semibold text-foreground mb-2">More Modest Fashion Articles</h4>
                      <p className="text-muted-foreground text-sm">Explore our complete collection of Islamic fashion guides and cultural insights.</p>
                    </Link>
                  </div>
                </Card>

                {/* Article Navigation */}
                <div className="mt-16">
                  <ArticleNavigation
                    nextArticle={{
                      title: "The Ultimate Guide to Hijab Styles",
                      link: "/blog/hijab-styles-guide"
                    }}
                    previousArticle={{
                      title: "What Do Muslim Men Wear? Traditional Islamic Clothing Guide",
                      link: "/blog/what-do-muslim-men-wear"
                    }}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AbayaArticle;