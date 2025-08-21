import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Gift, Users, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WaitlistSignupProps {
  className?: string;
}

const WaitlistSignup = ({ className = '' }: WaitlistSignupProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Using Formspree for email collection (free tier available)
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'demo';
      
      if (formspreeId === 'demo') {
        // Demo mode - just show success message
        setTimeout(() => {
          setIsSubmitted(true);
          setIsSubmitting(false);
          toast({
            title: "You're on the waitlist!",
            description: "We'll notify you when our shop launches.",
          });
        }, 1000);
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'waitlist_signup',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "You're on the waitlist!",
          description: "We'll notify you when our shop launches.",
        });
      } else {
        throw new Error('Signup failed');
      }
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`card-elegant ${className}`}>
        <CardContent className="text-center py-8">
          <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Welcome to the waitlist!</h3>
          <p className="text-muted-foreground">
            You'll be among the first to know when we launch, plus receive a special welcome gift with your first order.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Shop Waitlist - Hidayya Islamic Clothing",
            "description": "Join our waitlist to be the first to access our curated collection of premium Islamic clothing.",
            "url": window.location.href,
            "mainEntity": {
              "@type": "Organization",
              "name": "Hidayya",
              "url": "https://hidayyah.com"
            }
          })}
        </script>
      </Helmet>

      <Card className={`card-elegant ${className}`}>
        <CardHeader className="text-center">
          <div className="h-12 w-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-accent-foreground" />
          </div>
          <CardTitle className="text-2xl mb-2">Join Our Exclusive Waitlist</CardTitle>
          <p className="text-muted-foreground">
            Be the first to access our curated collection of premium Islamic clothing
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Early Access</p>
              <p className="text-xs text-muted-foreground">Shop before everyone else</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Gift className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Welcome Gift</p>
              <p className="text-xs text-muted-foreground">Special gift with first order</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium">Exclusive Updates</p>
              <p className="text-xs text-muted-foreground">First to know about launches</p>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || !email}
                className="btn-sage"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default WaitlistSignup;