import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ComingSoon from '@/components/ComingSoon';
import { User, Package, CreditCard, Settings, Bell, MapPin } from 'lucide-react';

const Account = () => {
  // Check if blog-first mode is enabled
  if (import.meta.env.VITE_BLOG_FIRST === 'true') {
    return <ComingSoon feature="account" />;
  }

  // Mock user data - in a real app, this would come from authentication
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    orders: 12,
    totalSpent: 1847.50
  };

  const recentOrders = [
    {
      id: 'ORDER-001',
      date: '2024-03-15',
      status: 'delivered',
      total: 129.99,
      items: 3
    },
    {
      id: 'ORDER-002',
      date: '2024-03-10',
      status: 'shipped',
      total: 89.99,
      items: 1
    },
    {
      id: 'ORDER-003',
      date: '2024-03-05',
      status: 'processing',
      total: 249.99,
      items: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-success text-success-foreground';
      case 'shipped':
        return 'bg-accent text-accent-foreground';
      case 'processing':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">My Account</h1>
        <p className="text-muted-foreground">
          Manage your account settings and view your order history
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-muted-foreground">{user.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Member since {new Date(user.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{order.id}</span>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString()} • {order.items} items
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${order.total.toFixed(2)}</div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">
                  View All Orders
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Stats */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-price">
                  ${user.totalSpent.toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-semibold">{user.orders}</div>
                  <div className="text-xs text-muted-foreground">Orders</div>
                </div>
                <div>
                  <div className="text-xl font-semibold">4.8</div>
                  <div className="text-xs text-muted-foreground">Avg Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Methods
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Track Orders
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </CardContent>
          </Card>

          {/* Membership Benefits */}
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center mx-auto">
                <span className="text-accent-foreground font-bold">★</span>
              </div>
              <h3 className="font-semibold">Premium Member</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy free shipping, exclusive deals, and priority support.
              </p>
              <Button size="sm" variant="cta">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;