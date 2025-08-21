import { useState } from 'react';
import { Mail, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export const NewsletterAdmin = () => {
  const [webhookUrl, setWebhookUrl] = useState(
    localStorage.getItem('newsletter_webhook') || ''
  );
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const { toast } = useToast();

  // Get stored emails
  const storedEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');

  const handleSaveWebhook = () => {
    localStorage.setItem('newsletter_webhook', webhookUrl);
    toast({
      title: "Webhook Saved",
      description: "Your Zapier webhook URL has been saved successfully.",
    });
  };

  const handleTestWebhook = async () => {
    if (!webhookUrl) {
      toast({
        title: "No Webhook URL",
        description: "Please enter a Zapier webhook URL first.",
        variant: "destructive",
      });
      return;
    }

    setIsTestingWebhook(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: 'test@example.com',
          source: 'Newsletter Admin Test',
          timestamp: new Date().toISOString(),
          test: true,
        }),
      });

      toast({
        title: "Test Sent",
        description: "Test webhook sent to Zapier. Check your Zap history to confirm it was received.",
      });
    } catch (error) {
      console.error('Webhook test error:', error);
      toast({
        title: "Test Failed",
        description: "Failed to send test webhook. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsTestingWebhook(false);
    }
  };

  const exportEmails = () => {
    if (storedEmails.length === 0) {
      toast({
        title: "No Emails",
        description: "No newsletter signups to export.",
        variant: "destructive",
      });
      return;
    }

    const csv = [
      'Email,Subscribed At,Source',
      ...storedEmails.map((entry: any) => 
        `${entry.email || entry},"${entry.subscribedAt || 'Unknown'}","${entry.source || 'Unknown'}"`
      )
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearEmails = () => {
    localStorage.removeItem('newsletter_emails');
    toast({
      title: "Emails Cleared",
      description: "All stored newsletter emails have been cleared.",
    });
    // Refresh the component to update the display
    window.location.reload();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Newsletter Management</h1>
        <p className="text-muted-foreground">
          Manage your newsletter signups and configure integrations.
        </p>
      </div>

      <Tabs defaultValue="signups" className="space-y-6">
        <TabsList>
          <TabsTrigger value="signups">Newsletter Signups</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="signups">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Newsletter Subscribers
                <Badge variant="secondary">{storedEmails.length}</Badge>
              </CardTitle>
              <CardDescription>
                View and manage newsletter signups. These are currently stored locally.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {storedEmails.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex gap-2 mb-4">
                    <Button onClick={exportEmails} variant="outline">
                      Export as CSV
                    </Button>
                    <Button onClick={clearEmails} variant="destructive">
                      Clear All
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg">
                    <div className="grid grid-cols-3 gap-4 p-3 bg-muted font-medium text-sm">
                      <div>Email</div>
                      <div>Subscribed At</div>
                      <div>Source</div>
                    </div>
                    {storedEmails.map((entry: any, index: number) => (
                      <div key={index} className="grid grid-cols-3 gap-4 p-3 border-t text-sm">
                        <div className="font-mono">{entry.email || entry}</div>
                        <div>{entry.subscribedAt ? new Date(entry.subscribedAt).toLocaleString() : 'Unknown'}</div>
                        <div className="text-muted-foreground">{entry.source || 'Unknown'}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Mail className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>No newsletter signups yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Newsletter Settings
              </CardTitle>
              <CardDescription>
                Configure your newsletter integration with Zapier webhook.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="webhook">Zapier Webhook URL</Label>
                <Input
                  id="webhook"
                  type="url"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                />
                <p className="text-sm text-muted-foreground">
                  Create a Zapier webhook trigger and paste the URL here to automatically handle newsletter signups.
                </p>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSaveWebhook}>Save Webhook</Button>
                <Button 
                  onClick={handleTestWebhook} 
                  variant="outline"
                  disabled={isTestingWebhook || !webhookUrl}
                >
                  {isTestingWebhook ? 'Testing...' : 'Test Webhook'}
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Setup Instructions:</h4>
                <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                  <li>Create a new Zap in Zapier</li>
                  <li>Choose "Webhooks by Zapier" as the trigger</li>
                  <li>Select "Catch Hook" as the trigger event</li>
                  <li>Copy the webhook URL and paste it above</li>
                  <li>Connect your email service (Mailchimp, ConvertKit, etc.)</li>
                  <li>Test the connection using the button above</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};