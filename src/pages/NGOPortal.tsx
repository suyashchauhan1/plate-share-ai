import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Users, Heart, Search, Filter, AlertTriangle, Clock, Phone, LogIn, UserPlus } from 'lucide-react';
import Header from '@/components/Header';

const NGOPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mockListings = [
    {
      id: 1,
      title: "Wedding Reception Surplus",
      restaurant: "Golden Palace Restaurant",
      quantity: 150,
      location: "Bandra, Mumbai",
      distance: "2.3 km",
      foodType: "North Indian, Chinese",
      postedTime: "30 minutes ago",
      status: "available",
      contact: "+91 98765 43210"
    },
    {
      id: 2,
      title: "Corporate Event Food",
      restaurant: "Spice Garden Catering",
      quantity: 80,
      location: "Andheri, Mumbai",
      distance: "5.1 km",
      foodType: "South Indian, Continental",
      postedTime: "1 hour ago",
      status: "available",
      contact: "+91 98765 43211"
    },
    {
      id: 3,
      title: "Restaurant Daily Surplus",
      restaurant: "Heritage Hotel",
      quantity: 45,
      location: "Juhu, Mumbai",
      distance: "3.8 km",
      foodType: "Multi-cuisine",
      postedTime: "2 hours ago",
      status: "available",
      contact: "+91 98765 43212"
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                NGO Portal
              </h1>
              <p className="text-xl text-muted-foreground">
                Find and collect surplus food donations to serve your community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 text-center">
                <LogIn className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Registered NGO</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign in to access food listings
                </p>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Sign In
                </Button>
              </Card>

              <Card className="p-6 text-center">
                <UserPlus className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">New NGO</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Register your organization
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Register Now
                </Button>
              </Card>
            </div>

            <Card className="p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-4">Access Without Registration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                You can browse available food donations without creating an account
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsLoggedIn(true)}
              >
                Browse Food Listings
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">NGO Dashboard</h1>
              <p className="text-muted-foreground">Find and collect food donations near you</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Food for All Foundation
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">2,340</div>
                <div className="text-sm text-muted-foreground">Meals Collected</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">156</div>
                <div className="text-sm text-muted-foreground">People Fed Today</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Pickups This Week</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground">Pending Collections</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by food type, location, or restaurant..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Map View
            </Button>
          </div>
        </Card>

        {/* Food Listings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Available Food Donations</h2>
          
          <div className="grid gap-6">
            {mockListings.map((listing) => (
              <Card key={listing.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {listing.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by {listing.restaurant}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {listing.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        <span>{listing.quantity} meals</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        <span>{listing.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-accent" />
                        <span>{listing.postedTime}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{listing.contact}</span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm text-muted-foreground">
                        Food Type: {listing.foodType}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Distance: {listing.distance}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-4 lg:mt-0 lg:ml-6">
                    <Button variant="hero" size="sm">
                      I Will Collect This
                    </Button>
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="w-4 h-4 mr-1" />
                      Report Spam
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Listings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOPortal;