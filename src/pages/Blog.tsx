import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllPosts, getFeaturedPosts } from '@/data/blog-posts';

const Blog = () => {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();

  return (
    <>
      <Helmet>
        <title>Islamic Fashion Blog | Hijab Styling Guides & Modest Wear Tips</title>
        <meta 
          name="description" 
          content="Discover hijab styling guides, modest fashion tips, and Islamic wear trends. Expert tutorials on hijab styles, fabric care, and modest wardrobe building." 
        />
        <meta name="keywords" content="hijab styling, modest fashion, Islamic wear, hijab guide, Muslim fashion, modest wardrobe" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Islamic Fashion & Style
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert guides on hijab styling, modest fashion trends, and Islamic wear tips to help you express your style with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" className="group">
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        Read Article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of premium hijabs and modest fashion pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/women/hijab">Shop Hijabs</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/women">Browse All Collections</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;