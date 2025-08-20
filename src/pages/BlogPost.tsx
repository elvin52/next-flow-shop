import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getPostBySlug } from '@/data/blog-posts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatContent = (content: string) => {
    // Split content by sections and format
    const sections = content.split('\n\n');
    
    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
            {section.replace('## ', '')}
          </h2>
        );
      } else if (section.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {section.replace('### ', '')}
          </h3>
        );
      } else if (section.startsWith('- **')) {
        // Handle styled list items
        const lines = section.split('\n');
        return (
          <div key={index} className="my-4 space-y-2">
            {lines.map((line, lineIndex) => {
              if (line.startsWith('- **')) {
                const boldText = line.match(/\*\*(.*?)\*\*/)?.[1] || '';
                const restText = line.replace(/- \*\*(.*?)\*\*:?\s*/, '');
                return (
                  <div key={lineIndex} className="flex flex-col sm:flex-row gap-2">
                    <span className="font-semibold text-primary min-w-fit">{boldText}:</span>
                    <span className="text-muted-foreground">{restText}</span>
                  </div>
                );
              }
              return null;
            }).filter(Boolean)}
          </div>
        );
      } else if (section.startsWith('**Pro Tip:**')) {
        return (
          <div key={index} className="bg-primary/5 border-l-4 border-primary p-4 my-4 rounded-r-lg">
            <p className="text-sm">
              <span className="font-semibold text-primary">💡 Pro Tip:</span>
              <span className="ml-2">{section.replace('**Pro Tip:**', '')}</span>
            </p>
          </div>
        );
      } else if (section.includes('**') && section.includes('**')) {
        // Handle bold text within paragraphs
        const formattedText = section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <p key={index} className="mb-4 leading-relaxed text-muted-foreground" 
             dangerouslySetInnerHTML={{ __html: formattedText }} />
        );
      } else {
        return (
          <p key={index} className="mb-4 leading-relaxed text-muted-foreground">
            {section}
          </p>
        );
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content={post.author} />
        <meta name="article:published_time" content={post.publishedDate} />
        <meta name="article:tag" content={post.tags.join(', ')} />
      </Helmet>

      <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary/5 to-secondary/5 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Updated {post.updatedDate}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {formatContent(post.content)}
              </div>
              
              <Separator className="my-8" />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* CTA Section */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Hijab Style Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our curated collection of premium hijabs, accessories, and modest fashion pieces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/women/hijab">Shop Hijab Collection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/women/hijab/f/fabric-modal">Browse Modal Hijabs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </article>
    </>
  );
};

export default BlogPost;