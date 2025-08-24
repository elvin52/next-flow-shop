import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import StructuredBreadcrumbs from '@/components/StructuredBreadcrumbs';
import { ArticleNavigation } from '@/components/common/ArticleNavigation';

// Import images
import heroImage from '@/assets/muslim-men-wear-hero.jpg';
import thobeImage from '@/assets/traditional-thobe-men.jpg';
import kufiImage from '@/assets/kufi-islamic-headwear.jpg';
import jalabiyaImage from '@/assets/jalabiya-traditional-wear.jpg';

const MuslimMenWearArticle = () => {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'What Do Muslim Men Wear?' }
  ];

  // JSON-LD structured data for the article
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Do Muslim Men Wear? Traditional Islamic Clothing Guide",
    "description": "Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide.",
    "image": "https://example.com/muslim-men-traditional-clothing.jpg",
    "author": {
      "@type": "Person",
      "name": "Islamic Fashion Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hidayyah Islamic Store",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    },
    "datePublished": "2025-08-20",
    "dateModified": "2025-08-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://example.com/blog/what-do-muslim-men-wear"
    }
  };

  return (
    <>
      <Helmet>
        <title>What Do Muslim Men Wear? Traditional Islamic Clothing Guide</title>
        <meta name="description" content="Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide." />
        <meta name="keywords" content="muslim men clothing, islamic men wear, traditional thobe, kufi hat, jalabiya, modest men fashion, islamic attire men, muslim traditional dress" />
        <link rel="canonical" href="https://hidayyah.com/blog/what-do-muslim-men-wear" />
        <meta property="og:title" content="What Do Muslim Men Wear? Traditional Islamic Clothing Guide" />
        <meta property="og:description" content="Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide." />
        <meta property="og:image" content={`${window.location.origin}${heroImage}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/blog/what-do-muslim-men-wear" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Do Muslim Men Wear? Traditional Islamic Clothing Guide" />
        <meta name="twitter:description" content="Complete guide to traditional Islamic clothing for men including thobe, kufi, jalabiya, and other modest attire worn by Muslim men worldwide." />
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">

        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumbs */}
          <StructuredBreadcrumbs items={breadcrumbItems} className="mb-8" />
          
          {/* Back button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>

          {/* Article meta */}
          <header className="mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-8 text-foreground">
                What Do Muslim Men Wear?
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Islamic Fashion Expert</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the rich tradition of Islamic men's clothing, from the elegant thobe to practical everyday wear that combines modesty with style.
              </p>
            </div>
          </header>

          {/* Article content */}
          <article className="max-w-4xl mx-auto">
            <Card className="card-elegant mb-12">
              <CardContent className="p-8 md:p-12 prose max-w-none">
                
                <p className="text-lg leading-relaxed mb-6">
                  Islamic men's clothing represents a beautiful blend of modesty, tradition, and practicality. From daily wear to special occasions, Muslim men around the world embrace various traditional garments that reflect their faith and cultural heritage.
                </p>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  Essential Islamic Men's Clothing
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
                  The Thobe: Symbol of Elegance
                </h3>
                
                <p className="leading-relaxed mb-4">
                  The thobe (also spelled thawb) stands as the most recognizable piece of traditional Islamic men's clothing. What is a thobe exactly? This ankle-length garment is a loose-fitting robe that provides complete coverage while allowing freedom of movement. Worn throughout the Middle East, North Africa, and beyond, the thobe embodies the Islamic principles of modesty and comfort.
                </p>

                <p className="leading-relaxed mb-4">
                  Modern Muslim men appreciate the thobe for its versatility. Available in various fabrics from lightweight cotton for summer to wool blends for cooler weather, this garment adapts to different climates and occasions. The classic white thobe remains popular for Friday prayers and formal events, while colored variations suit everyday wear.
                </p>

                <div className="my-6">
                  <img 
                    src={thobeImage} 
                    alt="Traditional white thobe - elegant Islamic men's clothing with loose-fitting ankle-length design for modest wear"
                    title="Traditional Thobe for Muslim Men - Classic Islamic Modest Wear"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
                  Traditional Headwear: The Kufi and Beyond
                </h3>
                
                <p className="leading-relaxed mb-4">
                  The kufi represents one of the most significant pieces of Islamic men's headwear. This close-fitting cap serves both practical and spiritual purposes, worn during prayers and throughout daily life. Available in various styles - from simple cotton versions to ornately embroidered designs - the kufi connects Muslim men to their religious identity.
                </p>

                <p className="leading-relaxed mb-4">
                  Beyond the kufi, many Muslim men wear regional variations of head coverings. The ghutra and keffiyeh, popular in Gulf countries, provide protection from sun and sand while maintaining cultural identity. These traditional garments demonstrate how Islamic clothing adapts to local environments and customs.
                </p>

                <div className="my-6">
                  <img 
                    src={kufiImage} 
                    alt="Collection of traditional Islamic kufi caps and headwear including embroidered prayer caps, ghutra and keffiyeh for Muslim men"
                    title="Traditional Kufi and Islamic Headwear Collection for Men"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
                  The Jalabiya: Comfort Meets Tradition
                </h3>
                
                <p className="leading-relaxed mb-4">
                  Similar to the thobe but often featuring wider sleeves and a more relaxed fit, the jalabiya offers supreme comfort for daily wear. This traditional garment, popular in Egypt and surrounding regions, exemplifies how Islamic clothing prioritizes both modesty and practicality.
                </p>

                <div className="my-6">
                  <img 
                    src={jalabiyaImage} 
                    alt="Traditional jalabiya garment with wide sleeves - comfortable Islamic men's clothing for daily modest wear"
                    title="Traditional Jalabiya - Comfortable Islamic Men's Daily Wear"
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  Regional Variations and Cultural Influence
                </h2>

                <p className="leading-relaxed mb-4">
                  Islamic men's clothing varies significantly across different regions, reflecting local climate, culture, and traditions. In South Asia, the shalwar kameez provides a comfortable alternative to the thobe, featuring loose trousers paired with a long tunic. This ensemble allows for easy movement while maintaining the modesty requirements of Islamic dress.
                </p>

                <p className="leading-relaxed mb-4">
                  Indonesian and Malaysian Muslim men often wear the baju kurung or similar traditional garments that blend Islamic modesty principles with local cultural elements. These variations demonstrate how Islamic clothing adapts while maintaining core principles of coverage and dignity.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
                  Modern Adaptations in Islamic Men's Fashion
                </h3>
                
                <p className="leading-relaxed mb-4">
                  Contemporary Muslim men increasingly seek clothing that honors Islamic principles while fitting modern lifestyles. Many opt for modest Western-style clothing - long-sleeved shirts, full-length trousers, and conservative cuts that provide appropriate coverage without traditional styling.
                </p>

                <p className="leading-relaxed mb-4">
                  The rise of Islamic fashion brands has created innovative solutions that blend traditional elements with contemporary design. These modern interpretations maintain the essence of Islamic modest wear while offering practical options for professional and casual settings.
                </p>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  Formal and Special Occasion Wear
                </h2>

                <p className="leading-relaxed mb-4">
                  For special occasions such as Eid celebrations, weddings, and religious gatherings, Muslim men often choose more elaborate versions of traditional garments. Embroidered thobes, silk jalabiyyas, and ornate kufis showcase the artistic heritage of Islamic culture while maintaining appropriate modesty.
                </p>

                <p className="leading-relaxed mb-4">
                  These formal pieces often feature intricate designs, premium fabrics, and careful craftsmanship that reflect the importance of the occasion. Gold threading, subtle patterns, and rich colors transform simple garments into expressions of cultural pride and religious devotion.
                </p>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  Practical Considerations for Daily Wear
                </h2>

                <p className="leading-relaxed mb-4">
                  When selecting Islamic men's clothing for daily wear, comfort and practicality take priority. Breathable fabrics like cotton and linen work well in warm climates, while wool blends provide warmth in cooler regions. The loose-fitting nature of traditional Islamic garments naturally promotes air circulation and comfort throughout the day.
                </p>

                <p className="leading-relaxed mb-4">
                  Color choices often reflect personal preference and cultural norms. While white remains popular for its associations with purity and its practical benefits in hot weather, earth tones, blues, and grays offer versatile options for everyday wear. Many Muslim men maintain a wardrobe that includes both traditional and modern modest clothing options.
                </p>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  The Spiritual Significance of Islamic Dress
                </h2>

                <p className="leading-relaxed mb-4">
                  Beyond practical considerations, Islamic men's clothing carries deep spiritual meaning. The act of dressing modestly serves as a constant reminder of faith and helps maintain focus on spiritual rather than material concerns. This mindful approach to clothing reflects the Islamic emphasis on inner character over outward appearance.
                </p>

                <p className="leading-relaxed mb-4">
                  Traditional Islamic garments also foster a sense of community and belonging. When Muslim men gather for prayers or religious events, their shared commitment to modest dress creates visual unity that reinforces spiritual bonds and cultural identity.
                </p>

                <h2 className="text-2xl font-playfair font-bold mt-8 mb-4 text-foreground">
                  Caring for Traditional Islamic Clothing
                </h2>

                <p className="leading-relaxed mb-4">
                  Proper care ensures that traditional Islamic garments maintain their appearance and longevity. Most cotton thobes and jalabiyyas benefit from gentle washing and air drying to preserve their shape and color. Embroidered pieces may require special attention to protect decorative elements.
                </p>

                <p className="leading-relaxed mb-6">
                  Regular maintenance, including proper storage and occasional professional cleaning for formal pieces, helps preserve these important cultural and religious garments for years of meaningful wear.
                </p>

                <div className="bg-sage-light/20 p-6 rounded-lg mt-8">
                  <p className="text-center font-medium text-foreground">
                    Islamic men's clothing represents far more than fashion choices - it embodies faith, tradition, and cultural identity while providing practical comfort for daily life.
                  </p>
                </div>

              </CardContent>
            </Card>

            {/* Related articles */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link to="/blog/what-is-an-abaya" className="block p-4 rounded-lg hover:bg-sage-light/10 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">What is an Abaya? Can Non-Muslims Wear an Abaya?</h4>
                    <p className="text-muted-foreground text-sm">Learn about the traditional Islamic women's garment and cultural considerations.</p>
                  </Link>
                  <Link to="/blog/hijab-styles-guide" className="block p-4 rounded-lg hover:bg-sage-light/10 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">The Ultimate Guide to Hijab Styles</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive guide to hijab wrapping techniques and modern styles.</p>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Article Navigation */}
            <div className="mt-16">
              <ArticleNavigation
                nextArticle={{
                  title: "What is an Abaya? Can Non-Muslims Wear an Abaya?",
                  link: "/blog/what-is-an-abaya"
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default MuslimMenWearArticle;