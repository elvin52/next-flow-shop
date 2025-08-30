import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GenericTableOfContents } from '@/components/common/GenericTableOfContents';
import { BreadcrumbNavigation } from '@/components/common/BreadcrumbNavigation';
import { ArticleNavigation } from '@/components/common/ArticleNavigation';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import hijabFabricsHero from '@/assets/hijab-fabrics-hero.jpg';

const HijabFabricsGuide = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Hijab Fabrics Guide' }
  ];

  const tableOfContents = [
    { id: 'quick-comparison', title: 'Quick Comparison Chart', level: 2 },
    { id: 'fabric-breakdown', title: 'Fabric-by-Fabric Breakdown', level: 2 },
    { id: 'cotton', title: 'Cotton', level: 3 },
    { id: 'jersey', title: 'Jersey (Knit/Viscose)', level: 3 },
    { id: 'chiffon', title: 'Chiffon', level: 3 },
    { id: 'silk-satin', title: 'Silk & Satin', level: 3 },
    { id: 'viscose', title: 'Viscose/Rayon/Modal', level: 3 },
    { id: 'georgette', title: 'Georgette & Crepe', level: 3 },
    { id: 'polyester', title: 'Polyester & Blends', level: 3 },
    { id: 'pashmina', title: 'Pashmina & Wool Blends', level: 3 },
    { id: 'care-tips', title: 'Care & Styling Tips', level: 2 },
    { id: 'choosing-guide', title: 'How to Choose by Season & Occasion', level: 2 },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2 }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hidayyah.com/blog/hijab-fabrics-guide"
    },
    "headline": "Ultimate Guide to Hijab Fabrics: Cotton, Chiffon, Jersey & More",
    "description": "Complete guide to hijab fabrics including cotton, chiffon, silk, jersey, and viscose. Compare materials, care tips, and find the best fabric for every occasion.",
    "image": "https://hidayyah.com/assets/hijab-fabrics-hero.jpg",
    "author": {
      "@type": "Person",
      "name": "Hidayyah Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hidayyah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hidayyah.com/hidayyah-logo.png"
      }
    },
    "datePublished": "2025-08-30",
    "dateModified": "2025-08-30"
  };

  return (
    <>
      <Helmet>
        <title>Ultimate Guide to Hijab Fabrics: Cotton, Chiffon, Jersey & More | Hidayyah</title>
        <meta 
          name="description" 
          content="Complete guide to hijab fabrics including cotton, chiffon, silk, jersey, and viscose. Compare materials, care tips, and find the best fabric for every occasion." 
        />
        <meta name="keywords" content="hijab fabrics, cotton hijab, chiffon hijab, jersey hijab, silk hijab, hijab materials, modest fashion fabrics" />
        <link rel="canonical" href="https://hidayyah.com/blog/hijab-fabrics-guide" />
        <meta property="og:title" content="Ultimate Guide to Hijab Fabrics: Cotton, Chiffon, Jersey & More" />
        <meta property="og:description" content="Complete guide to hijab fabrics including cotton, chiffon, silk, jersey, and viscose. Compare materials, care tips, and find the best fabric for every occasion." />
        <meta property="og:image" content="https://hidayyah.com/assets/hijab-fabrics-hero.jpg" />
        <meta property="og:url" content="https://hidayyah.com/blog/hijab-fabrics-guide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ultimate Guide to Hijab Fabrics: Cotton, Chiffon, Jersey & More" />
        <meta name="twitter:description" content="Complete guide to hijab fabrics including cotton, chiffon, silk, jersey, and viscose. Compare materials, care tips, and find the best fabric for every occasion." />
        <meta name="twitter:image" content="https://hidayyah.com/assets/hijab-fabrics-hero.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={breadcrumbItems} className="mb-6" />
          
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                Fabric Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 islamic-border">
                Ultimate Guide to Hijab Fabrics
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Cotton, Chiffon, Jersey & More
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>By Hidayyah Editorial Team</span>
                <span>•</span>
                <span>Published August 30, 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
            
            <ResponsiveImage
              src={hijabFabricsHero}
              alt="Collection of different hijab fabrics showing texture and drape differences"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <GenericTableOfContents items={tableOfContents} />
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3 prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-lg leading-relaxed">
                  Choosing the right hijab fabric affects comfort, coverage, and confidence — whether you're running errands in summer heat, praying in an air-conditioned mosque, or dressing up for a wedding. This guide breaks down the most common hijab materials, how they behave, and which fabrics work best for everyday wear versus special occasions.
                </p>
              </div>

              <section id="quick-comparison" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 islamic-border">Quick Comparison Chart</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 font-semibold">Fabric</th>
                            <th className="text-left py-3 font-semibold">Feel & Drape</th>
                            <th className="text-center py-3 font-semibold">Slip?</th>
                            <th className="text-center py-3 font-semibold">Breathability</th>
                            <th className="text-left py-3 font-semibold">Best For</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="py-3 font-medium">Cotton</td>
                            <td className="py-3">Soft, matte, structured</td>
                            <td className="py-3 text-center">Low</td>
                            <td className="py-3 text-center">High</td>
                            <td className="py-3">Everyday, hot climates</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Jersey</td>
                            <td className="py-3">Stretchy, cling-free</td>
                            <td className="py-3 text-center">Very Low</td>
                            <td className="py-3 text-center">High</td>
                            <td className="py-3">Active days, no-pin looks</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Chiffon</td>
                            <td className="py-3">Lightweight, elegant, floaty</td>
                            <td className="py-3 text-center">High</td>
                            <td className="py-3 text-center">Medium</td>
                            <td className="py-3">Formal events, layered looks</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Silk/Satin</td>
                            <td className="py-3">Luxurious sheen, fluid drape</td>
                            <td className="py-3 text-center">High</td>
                            <td className="py-3 text-center">Medium</td>
                            <td className="py-3">Weddings, evening wear</td>
                          </tr>
                          <tr>
                            <td className="py-3 font-medium">Viscose/Rayon</td>
                            <td className="py-3">Silky, smooth, good drape</td>
                            <td className="py-3 text-center">Medium</td>
                            <td className="py-3 text-center">High</td>
                            <td className="py-3">Everyday + dressy hybrid</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="fabric-breakdown" className="mb-12">
                <h2 className="text-3xl font-bold mb-8 islamic-border">Fabric-by-Fabric Breakdown</h2>

                <div id="cotton" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Cotton</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Natural, breathable, slightly textured</li>
                        <li><strong>Why people love it:</strong> Comfortable, cool in summer, easy care</li>
                        <li><strong>Style tips:</strong> Use for casual, everyday wraps; great in square or rectangular cuts. Works well with an undercap for extra grip</li>
                        <li><strong>Care:</strong> Machine wash cold; reshape while damp</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="jersey" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Jersey (Knit/Viscose Blends)</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Soft, stretchy, drapes smoothly without pins</li>
                        <li><strong>Why people love it:</strong> Secure, no-fuss; ideal for busy days or travel</li>
                        <li><strong>Style tips:</strong> Perfect for sporty or minimalist looks; avoid very hot weather unless it's a breathable viscose blend</li>
                        <li><strong>Care:</strong> Machine wash gentle; avoid high heat</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="chiffon" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Chiffon</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Featherlight, semi-sheer, graceful movement</li>
                        <li><strong>Why people love it:</strong> Elegant for events; layers beautifully</li>
                        <li><strong>Style tips:</strong> Needs undercap/pins to prevent slipping; pair with opaque underscarf for full coverage</li>
                        <li><strong>Care:</strong> Hand wash or delicate cycle; air dry</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="silk-satin" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Silk & Satin</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Smooth, shiny (satin), or soft matte-sheen (silk)</li>
                        <li><strong>Why people love it:</strong> Luxurious finish — great for formalwear</li>
                        <li><strong>Style tips:</strong> Use for evening events; handle carefully to avoid snags</li>
                        <li><strong>Care:</strong> Dry clean or hand wash per care label</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="viscose" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Viscose/Rayon/Modal</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Silky, breathable, good fall</li>
                        <li><strong>Why people love it:</strong> Affordable "silk-like" option with good drape</li>
                        <li><strong>Style tips:</strong> Excellent for both casual and dressy looks</li>
                        <li><strong>Care:</strong> Hand wash or gentle machine cycle</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="georgette" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Georgette & Crepe</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Slightly textured, flowy, holds shape</li>
                        <li><strong>Why people love it:</strong> Adds subtle structure without stiffness</li>
                        <li><strong>Style tips:</strong> Great when you want an elegant silhouette without glossy sheen</li>
                        <li><strong>Care:</strong> Delicate wash; steam instead of high-heat ironing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="polyester" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Polyester & Blends</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Varies — often wrinkle-resistant and durable</li>
                        <li><strong>Why people buy it:</strong> Budget friendly, easy care, colors hold</li>
                        <li><strong>Style tips:</strong> Look for blends that include natural fibers for breathability</li>
                        <li><strong>Care:</strong> Machine wash; avoid high heat</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div id="pashmina" className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Pashmina & Wool Blends</h3>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li><strong>What it feels like:</strong> Warm, heavier weight, soft texture</li>
                        <li><strong>Why people wear it:</strong> Winter warmth, structured drapes for layering</li>
                        <li><strong>Style tips:</strong> Combine with coats and longer lengths for extra coverage</li>
                        <li><strong>Care:</strong> Hand wash or dry clean depending on label</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="care-tips" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 islamic-border">Care & Styling Tips</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      <li><strong>Stop the slip:</strong> Use an anti-slip undercap, rubber-grip pins, or a tiny silicone strip on slippery fabrics (chiffon, satin)</li>
                      <li><strong>Wash smart:</strong> Delicates (chiffon, silk) → hand wash or use a mesh bag; jerseys and cotton → gentle machine cycles</li>
                      <li><strong>Ironing:</strong> Use low heat for synthetics, steam for crepe, iron silk inside out (or steam)</li>
                      <li><strong>Storage:</strong> Fold chiffon/silk loosely to avoid creases; hang heavier pashminas</li>
                      <li><strong>Color care:</strong> Wash darks separately; cold water minimizes fading</li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <section id="choosing-guide" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 islamic-border">How to Choose by Season & Occasion</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">By Season</h3>
                      <ul className="space-y-3">
                        <li><strong>Summer/Humid:</strong> Cotton, viscose, modal, lightweight chiffon (layered)</li>
                        <li><strong>Winter/Cold:</strong> Pashmina, wool blends, heavier viscose</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">By Occasion</h3>
                      <ul className="space-y-3">
                        <li><strong>Everyday/Work:</strong> Jersey, cotton blends, viscose</li>
                        <li><strong>Formal/Evening:</strong> Silk, satin, chiffon (with undercap)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 islamic-border">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">Which hijab fabric breathes most?</h3>
                      <p>Natural fibers like cotton and viscose generally breathe best, making them ideal for warm weather and everyday wear.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">What fabric slips the most?</h3>
                      <p>Chiffon and satin/silk are prone to slipping. Use undercaps, grip pins, or silicone strips to keep them in place.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">What is best for travel?</h3>
                      <p>Polyester blends or wrinkle-resistant viscose perform well for travel. Jersey is also easy to pack and doesn't require pins.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">How do I wash chiffon?</h3>
                      <p>Hand wash or use a delicate cycle in a mesh bag; air dry flat or hang. Avoid wringing or high heat.</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator className="my-8" />
              
              <ArticleNavigation 
                previousArticle={{ title: "Abaya Styling Guide", link: "/blog/abaya-styling-guide" }}
                nextArticle={{ title: "Hijab Styling Guide", link: "/blog/hijab-styling-guide" }}
              />
            </main>
          </div>
        </div>
      </article>
    </>
  );
};

export default HijabFabricsGuide;