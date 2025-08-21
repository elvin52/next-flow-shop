import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'inline' | 'card';
  placeholder?: string;
  webhookUrl?: string;
  title?: string;
  description?: string;
}

export const NewsletterSignup = ({
  className = '',
  variant = 'default',
  placeholder = 'Enter your email address',
  webhookUrl,
  title = 'Subscribe to Our Newsletter',
  description = 'Get the latest updates on modest fashion and style guides.'
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      if (webhookUrl) {
        // Use Zapier webhook if provided
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            email,
            source: 'Hidayya Newsletter',
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
          }),
        });

        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter. Check your email for confirmation.",
        });
      } else {
        // Store in localStorage as fallback
        const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
        if (!existingEmails.includes(email)) {
          existingEmails.push({
            email,
            subscribedAt: new Date().toISOString(),
            source: window.location.pathname
          });
          localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails));
        }

        toast({
          title: "Email Saved!",
          description: "Your email has been saved. We'll notify you when our newsletter system is fully set up.",
        });
      }

      setEmail('');
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Subscription Error",
        description: "There was an issue subscribing you to our newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="whitespace-nowrap"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-card rounded-lg p-6 border ${className}`}>
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full btn-sage"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full btn-sage"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};