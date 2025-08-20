import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, Clock, Share2, BookOpen, Play, Heart, Star, Sparkles } from 'lucide-react';

// Import images
import classicWrapImage from '@/assets/classic-wrap-hijab.jpg';
import modernTurbanImage from '@/assets/modern-turban-hijab.jpg';
import layeredHijabImage from '@/assets/layered-hijab.jpg';
import knotBowImage from '@/assets/knot-bow-hijab.jpg';
import turkishHijabImage from '@/assets/turkish-hijab.jpg';
import accessoriesImage from '@/assets/hijab-accessories.jpg';

const HijabStyleGuide = () => {
  const hijabStyles = [
    {
      id: 'classic-wrap',
      title: "Classic Wrap Hijab",
      image: classicWrapImage,
      technique: "Place hijab over head with one side longer. Wrap longer side around and secure under chin.",
      whyItWorks: "Works with any fabric—silk for luxury or chiffon for summer comfort.",
      bestFor: "Daily wear, all fabrics",
      difficulty: "Easy",
      time: "2 minutes",
      faceShapes: "All face shapes"
    },
    {
      id: 'modern-turban',
      title: "Modern Turban Hijab",
      image: modernTurbanImage,
      technique: "Fold rectangular hijab into triangle, wrap like turban, tuck ends neatly.",
      whyItWorks: "Minimal style perfect for casual looks with undercap stability.",
      bestFor: "Casual outings",
      difficulty: "Medium",
      time: "3 minutes",
      faceShapes: "Round and square faces"
    },
    {
      id: 'turkish-hijab',
      title: "Turkish Hijab",
      image: turkishHijabImage,
      technique: "Focus on neat symmetry. You pin the Turkish hijab at sides for refined structure.",
      whyItWorks: "Reflects cultural heritage, pairs with modern and traditional outfits.",
      bestFor: "Formal events",
      difficulty: "Medium",
      time: "5 minutes",
      faceShapes: "All faces, especially round"
    },
    {
      id: 'al-amira-hijab',
      title: "Al-Amira Hijab Style",
      image: modernTurbanImage,
      technique: "Two-piece hijab: close-fitting cap with tube-like scarf worn over.",
      whyItWorks: "Excellent coverage, stays secure all day without adjustment.",
      bestFor: "Active lifestyles, sports",
      difficulty: "Easy",
      time: "1 minute",
      faceShapes: "Round and square faces"
    },
    {
      id: 'instant-hijab',
      title: "Instant Hijab Style",
      image: layeredHijabImage,
      technique: "Pre-sewn hijab with built-in cap slips on without pins or wrapping.",
      whyItWorks: "Perfect for busy mornings, provides polished look with minimal effort.",
      bestFor: "Quick styling, beginners",
      difficulty: "Easy",
      time: "30 seconds",
      faceShapes: "All face shapes"
    },
    {
      id: 'square-hijab',
      title: "Square Hijab Style",
      image: knotBowImage,
      technique: "Fold square hijab at an angle to create triangle, then wrap and style.",
      whyItWorks: "Versatile shape for multiple styling options from casual to formal.",
      bestFor: "Fashion-forward looks",
      difficulty: "Medium",
      time: "4 minutes",
      faceShapes: "Oval and heart-shaped"
    }
  ];

  const materials = [
    {
      name: "Jersey Hijab",
      features: "Soft, stretchy, comfortable with excellent grip - won't slip.",
      styleTip: "Perfect for beginners, easy to style without pins.",
      bestFor: "Daily wear, active lifestyles",
      care: "Machine washable"
    },
    {
      name: "Silk Hijab", 
      features: "Luxurious with natural sheen, ideal for formal events.",
      styleTip: "Use minimal accessories to showcase fabric beauty.",
      bestFor: "Formal events, evening wear",
      care: "Dry clean recommended"
    },
    {
      name: "Chiffon Hijab",
      features: "Lightweight, airy, perfect for warm weather with excellent drape.",
      styleTip: "Great for layered styles creating soft, draped looks.",
      bestFor: "Summer wear, layering",
      care: "Hand wash, air dry"
    },
    {
      name: "Modal Hijab",
      features: "Beech tree fiber, incredibly soft with moisture-wicking properties.",
      styleTip: "Excellent for sensitive skin, maintains shape after washing.",
      bestFor: "Daily wear, hot climates",
      care: "Machine washable, color-fast"
    }
  ];

  const accessories = [
    {
      name: "Hijab Undercap",
      purpose: "Provides extra grip and maintains style all day.",
      tip: "Choose undercap matching your skin tone for natural look.",
      price: "$5-12",
      mustHave: true
    },
    {
      name: "Hijab Magnets",
      purpose: "Secure hijab without visible pins for seamless finish.",
      tip: "Quality magnets keep hijab secure even on windy days.",
      price: "$8-15",
      mustHave: true
    },
    {
      name: "Safety Pins",
      purpose: "Essential backup for emergency fixes throughout day.",
      tip: "Keep neutral-colored pins in bag for quick adjustments.",
      price: "$2-5",
      mustHave: true
    },
    {
      name: "Decorative Pins",
      purpose: "Add elegance while securing hijab beautifully.",
      tip: "Choose pins that complement outfit colors and formality.",
      price: "$10-25",
      mustHave: false
    }
  ];

  const occasionStyles = [
    {
      occasion: "Office & Professional",
      styles: ["Classic Wrap", "Shayla", "Al-Amira"],
      fabrics: ["Jersey", "Georgette", "Modal"],
      tips: "Choose neutral colors and structured styles that complement business attire.",
      shopLink: "/womens-clothing/hijab"
    },
    {
      occasion: "Wedding & Formal Events",
      styles: ["Turkish Hijab", "Layered Trendsetter", "Square Hijab"],
      fabrics: ["Silk", "Satin", "Chiffon"],
      tips: "Opt for luxurious fabrics with decorative pins and elegant draping.",
      shopLink: "/womens-clothing/islamic-wedding-clothes"
    },
    {
      occasion: "Sports & Active Wear",
      styles: ["Al-Amira", "Instant Hijab", "Modern Turban"],
      fabrics: ["Jersey", "Modal"],
      tips: "Choose moisture-wicking fabrics and secure styles that won't shift during activity.",
      shopLink: "/womens-clothing/hijab-swimming-cap"
    },
    {
      occasion: "Travel & Casual",
      styles: ["Instant Hijab", "Classic Wrap", "Modern Turban"],
      fabrics: ["Jersey", "Modal", "Georgette"],
      tips: "Prioritize comfort and easy styling with wrinkle-resistant fabrics.",
      shopLink: "/womens-clothing/hijab"
    }
  ];

  const faqData = [
    {
      question: "Which hijab style suits my face shape?",
      answer: "Oval faces can wear any style. Round faces look great with Turkish and Al-Amira styles. Square faces benefit from soft Classic Wrap. Heart-shaped faces suit styles with bottom volume."
    },
    {
      question: "How do I style a hijab without pins?",
      answer: "Use jersey hijabs for grip, hijab magnets for invisible securing, or instant hijabs with built-in caps."
    },
    {
      question: "What's best for hot weather?",
      answer: "Choose lightweight chiffon or modal. Classic wrap and Al-Amira provide airflow. Use breathable cotton undercaps."
    },
    {
      question: "How do I prevent slipping?",
      answer: "Use undercap for grip, choose textured jersey fabric, use magnets strategically, ensure proper wrapping."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Complete Hijab Style Guide 2025 - Modern & Classic | Hidayya</title>
        <meta name="description" content="Master hijab styling with step-by-step tutorials, fabric tips, and accessory guides. From classic wraps to modern trends." />
        <meta name="keywords" content="hijab styles, hijab tutorial, Islamic fashion, modest fashion, hijab accessories, Muslim women clothing" />
        <link rel="canonical" href="/hijab-style-guide" />
      </Helmet>

      <Header />
      
      {/* Breadcrumb and back navigation */}
      <div className="container mx-auto px-4 sm:px-6 pt-8">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modest Fashion
        </Button>
        <nav className="text-sm text-[hsl(var(--warm-gray))] mb-8">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/fashion" className="hover:text-primary transition-colors">Modest Fashion</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Hijab Styles Guide</span>
        </nav>
      </div>

      <article className="container mx-auto px-4 sm:px-6 pb-16">
        {/* Article header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
              Complete Hijab Style Guide 2025 - Modern & Classic
            </h1>
            <p className="text-xl text-[hsl(var(--warm-gray))] mb-8 max-w-3xl mx-auto leading-relaxed">
              Master hijab styling with step-by-step tutorials, fabric tips, and accessory guides. From classic wraps to modern trends.
            </p>
            
            {/* Article meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[hsl(var(--warm-gray))]">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>10.5 min read</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Complete Style Guide</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-2" />
                <span>Updated January 2025</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Hijab styles express your personality while blending tradition with modern fashion. This guide covers <strong>classic Shayla hijab</strong>, <strong>Al-Amira style</strong>, <strong>instant hijabs</strong>, and <strong>square hijab</strong> techniques to master hijab fashion in 2025.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Style your <strong>jersey hijab</strong> for daily wear, <strong>silk hijab</strong> for special events, or explore <strong>hijab styles for work</strong>, <strong>sports</strong>, and <strong>weddings</strong> with our tutorials and tips.
              </p>
            </div>
          </div>

          {/* What Are Hijab Styles */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 islamic-border pt-6">
              What Are Hijab Styles?
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              <strong>Hijab styles</strong> refer to various ways Muslim women wrap and style their head coverings. People often use "hijab and scarf" as the same thing; however, a hijab is more than a scarf—it symbolizes modesty and cultural identity. Modern hijab styles range from simple daily wraps to detailed layered looks using quality fabrics and accessories.
            </p>
          </section>

          {/* Popular Hijab Styles */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              Popular Hijab Styles for Every Occasion
            </h2>
            
            <div className="space-y-12">
              {hijabStyles.map((style, index) => {
                
                return (
                  <Card key={index} className="card-elegant overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative h-80 lg:h-96">
                          <img 
                            src={style.image} 
                            alt={style.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 lg:p-12">
                          <h3 className="text-2xl font-playfair font-bold mb-4">
                            {index + 1}. {style.title}
                          </h3>
                          
                          <div className="space-y-4 mb-6">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div className="text-center p-3 bg-primary/5 rounded-lg">
                                <div className="font-semibold text-primary">{style.difficulty}</div>
                                <div className="text-sm text-[hsl(var(--warm-gray))]">Difficulty</div>
                              </div>
                              <div className="text-center p-3 bg-primary/5 rounded-lg">
                                <div className="font-semibold text-primary">{style.time}</div>
                                <div className="text-sm text-[hsl(var(--warm-gray))]">Styling Time</div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Technique:</h4>
                              <p className="text-[hsl(var(--warm-gray))]">{style.technique}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Why It Works:</h4>
                              <p className="text-[hsl(var(--warm-gray))]">{style.whyItWorks}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Best Face Shapes:</h4>
                              <p className="text-[hsl(var(--warm-gray))] text-sm">{style.faceShapes}</p>
                            </div>
                            
                            <div className="bg-[hsl(var(--sage-light))]/20 p-4 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-2">Perfect For:</h4>
                              <p className="text-sm text-foreground">{style.bestFor}</p>
                            </div>
                          </div>

                          {/* Video Tutorial Placeholder */}
                          <div className="mt-8">
                            <div className="bg-gradient-to-r from-primary/5 to-[hsl(var(--gold-light))]/10 p-6 rounded-lg">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Play className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-lg">Video Tutorial Available</h4>
                                  <p className="text-sm text-[hsl(var(--warm-gray))]">Step-by-step visual guide • {style.difficulty} • {style.time}</p>
                                </div>
                              </div>
                              
                              {/* Tutorial Steps Preview */}
                              <div className="space-y-3">
                                <h5 className="font-semibold text-foreground">Quick Steps:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                  <div className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-semibold">1</span>
                                    <span className="text-[hsl(var(--warm-gray))]">Prepare & Position</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                                    <span className="text-[hsl(var(--warm-gray))]">Wrap & Secure</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                                    <span className="text-[hsl(var(--warm-gray))]">Adjust & Style</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                                    <span className="text-[hsl(var(--warm-gray))]">Final Touches</span>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-4 pt-4 border-t border-primary/10">
                                <p className="text-xs text-[hsl(var(--warm-gray))] mb-3">
                                  💡 <strong>Pro Tip:</strong> Practice this style 2-3 times to master the technique. Start slowly and focus on each step.
                                </p>
                                <Button variant="outline" size="sm" className="w-full">
                                  <Play className="h-4 w-4 mr-2" />
                                  Watch Video Tutorial
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Hijab Styles for Different Occasions */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              Hijab Styles for Every Occasion
            </h2>
            
            <div className="relative">
              {/* Journey Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden lg:block"></div>
              
              <div className="space-y-16">
                {occasionStyles.map((occasion, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 hidden lg:block"></div>
                    
                    {/* Content */}
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <div className="bg-gradient-to-br from-[hsl(var(--sage-light))]/10 to-[hsl(var(--gold-light))]/10 p-8 rounded-2xl shadow-lg border border-[hsl(var(--sage-light))]/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">{index + 1}</span>
                          </div>
                          <h3 className="text-2xl font-playfair font-bold text-primary">
                            {occasion.occasion}
                          </h3>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-background/50 p-4 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Star className="h-4 w-4 mr-2 text-primary" />
                                Recommended Styles
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {occasion.styles.map((style, styleIndex) => (
                                  <span key={styleIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                    {style}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-background/50 p-4 rounded-lg">
                              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                <Heart className="h-4 w-4 mr-2 text-primary" />
                                Best Fabrics
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {occasion.fabrics.map((fabric, fabricIndex) => (
                                  <span key={fabricIndex} className="bg-[hsl(var(--sage-light))]/20 text-foreground px-3 py-1 rounded-full text-sm">
                                    {fabric}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-primary/5 to-[hsl(var(--gold-light))]/10 p-6 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Styling Tips
                            </h4>
                            <p className="text-[hsl(var(--warm-gray))] leading-relaxed mb-4">{occasion.tips}</p>
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                              <Heart className="h-4 w-4 mr-2" />
                              Shop {occasion.occasion} Collection
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty space for the other side on desktop */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Materials and Fabrics */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              How to Choose Hijab Fabrics: Complete Material Guide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className="card-elegant hover-lift">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-4 text-primary">
                      {material.name}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Features:</h4>
                        <p className="text-[hsl(var(--warm-gray))] text-sm">{material.features}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Style Tip:</h4>
                        <p className="text-[hsl(var(--warm-gray))] text-sm">{material.styleTip}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Perfect For:</h4>
                        <p className="text-[hsl(var(--warm-gray))] text-sm">{material.bestFor}</p>
                      </div>
                      <div className="bg-[hsl(var(--sage-light))]/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-1 text-xs">Care Instructions:</h4>
                        <p className="text-[hsl(var(--warm-gray))] text-xs">{material.care}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Accessories */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              Build Your Perfect Hijab Kit: Essential Shopping Guide
            </h2>
            
            {/* Kit Builder Header */}
            <div className="bg-gradient-to-r from-primary/5 to-[hsl(var(--sage-light))]/10 p-8 rounded-2xl mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Complete Starter Kit</h3>
                <p className="text-[hsl(var(--warm-gray))] max-w-2xl mx-auto">
                  Build your perfect hijab styling kit with our curated essentials and optional accessories. 
                  Start with must-haves, then add extras to elevate your style.
                </p>
                <div className="mt-6 flex justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">Must-Have Essentials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[hsl(var(--sage-light))] rounded-full"></div>
                    <span className="text-foreground font-medium">Style Enhancers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Items */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary">Essential Items (Start Here)</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Total: $25-50
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accessories.filter(acc => acc.mustHave).map((accessory, index) => (
                  <div key={index} className="bg-background border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{accessory.name}</h4>
                          <span className="text-primary font-bold">{accessory.price}</span>
                        </div>
                      </div>
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                        Essential
                      </span>
                    </div>
                    
                    <p className="text-[hsl(var(--warm-gray))] mb-3 text-sm leading-relaxed">{accessory.purpose}</p>
                    
                    <div className="bg-[hsl(var(--sage-light))]/10 p-3 rounded-lg">
                      <p className="text-xs text-foreground">
                        <strong>Pro Tip:</strong> {accessory.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Style Enhancers */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[hsl(var(--sage-light))] rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-foreground">Style Enhancers (Level Up)</h3>
                <span className="bg-[hsl(var(--sage-light))]/20 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Total: $15-40
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accessories.filter(acc => !acc.mustHave).map((accessory, index) => (
                  <div key={index} className="bg-background border border-[hsl(var(--sage-light))]/30 rounded-xl p-6 hover:border-[hsl(var(--sage-light))]/60 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[hsl(var(--sage-light))]/10 rounded-full flex items-center justify-center">
                          <Star className="h-5 w-5 text-[hsl(var(--sage-light))]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{accessory.name}</h4>
                          <span className="text-[hsl(var(--sage-light))] font-bold">{accessory.price}</span>
                        </div>
                      </div>
                      <span className="bg-[hsl(var(--sage-light))]/20 text-foreground text-xs px-2 py-1 rounded-full">
                        Optional
                      </span>
                    </div>
                    
                    <p className="text-[hsl(var(--warm-gray))] mb-3 text-sm leading-relaxed">{accessory.purpose}</p>
                    
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <p className="text-xs text-foreground">
                        <strong>Style Tip:</strong> {accessory.tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shopping CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-[hsl(var(--gold-light))]/20 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-playfair font-bold text-primary mb-4">Ready to Build Your Kit?</h3>
              <p className="text-[hsl(var(--warm-gray))] mb-6 max-w-lg mx-auto">
                Start with the essentials and gradually add style enhancers to create your perfect hijab styling collection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Heart className="h-4 w-4 mr-2" />
                  Shop Essential Kit ($25-50)
                </Button>
                <Button variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Browse All Accessories
                </Button>
              </div>
            </div>
            
            <div className="relative mt-8">
              <img 
                src={accessoriesImage} 
                alt="Complete collection of hijab accessories including magnets, undercaps, volumizing scrunchies, decorative pins, and safety pins"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">Complete Accessory Collection</h4>
                  <p className="text-sm opacity-90">Everything you need for perfect hijab styling</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hijab Styles for Face Shapes */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              Hijab Styles for Oval, Round & Heart-Shaped Faces
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-primary">Oval Face Shape</h3>
                  <p className="text-[hsl(var(--warm-gray))] mb-4">Lucky you! Oval faces can wear almost any hijab style.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Classic Wrap Hijab</li>
                    <li>• Layered Trendsetter</li>
                    <li>• Chic Knot and Bow</li>
                    <li>• Square Hijab styles</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-primary">Round Face Shape</h3>
                  <p className="text-[hsl(var(--warm-gray))] mb-4">Add height and avoid width at the sides.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Modern Turban Hijab</li>
                    <li>• Turkish Hijab</li>
                    <li>• Al-Amira with height</li>
                    <li>• Avoid: Wide horizontal wraps</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-primary">Heart-Shaped Face</h3>
                  <p className="text-[hsl(var(--warm-gray))] mb-4">Balance a wider forehead with volume at the jawline.</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Classic Wrap with volume</li>
                    <li>• Chic Knot and Bow</li>
                    <li>• Square Hijab draped low</li>
                    <li>• Avoid: Tight wraps at temples</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Modern Trends */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 islamic-border pt-6">
              2025 Hijab Fashion Trends
            </h2>
            
            <div className="bg-gradient-to-r from-[hsl(var(--sage-light))]/20 to-[hsl(var(--gold-light))]/20 p-8 rounded-2xl">              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Seasonal Styles:</strong> Chiffon for summer, layered wool for winter</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Sustainable Fashion:</strong> Eco-friendly modal and organic cotton</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Tech Fabrics:</strong> Moisture-wicking for active wear</div>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Minimalist Style:</strong> Clean lines with jersey and invisible magnets</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Cultural Fusion:</strong> Turkish precision meets modern cuts</div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <div><strong>Bold Colors:</strong> Color blocking and creative layering</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8 islamic-border pt-6">
              Frequently Asked Questions About Hijab Styling
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card-elegant border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[hsl(var(--warm-gray))]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default HijabStyleGuide;
