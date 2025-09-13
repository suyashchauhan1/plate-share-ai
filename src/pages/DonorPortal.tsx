import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, MapPin, Users, Utensils, Plus, LogIn, UserPlus } from 'lucide-react';
import Header from '@/components/Header';

const DonorPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Utensils className="w-16 h-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Donor Portal
              </h1>
              <p className="text-xl text-muted-foreground">
                Join our community of donors and help reduce food waste while feeding those in need
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 text-center">
                <LogIn className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Existing Donor</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign in to manage your food donations
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
                <h3 className="text-lg font-semibold mb-2">New Donor</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Register your restaurant or organization
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

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Why Join SharingPlate?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div className="font-medium">Community Impact</div>
                  <div className="text-muted-foreground">Feed those in need</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="font-medium">Local NGOs</div>
                  <div className="text-muted-foreground">Connect with verified organizations</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Utensils className="w-4 h-4 text-accent" />
                  </div>
                  <div className="font-medium">Zero Waste</div>
                  <div className="text-muted-foreground">Reduce food wastage</div>
                </div>
              </div>
            </div>
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
              <h1 className="text-3xl font-bold text-foreground">Donor Dashboard</h1>
              <p className="text-muted-foreground">Manage your food donations and impact</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Golden Palace Restaurant
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">1,240</div>
                <div className="text-sm text-muted-foreground">Total Meals Donated</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <CalendarDays className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">23</div>
                <div className="text-sm text-muted-foreground">Events Created</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">Active Listings</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">NGOs Helped</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Create New Event */}
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Plus className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-xl font-semibold">Create Food Donation Event</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Event Name
                </label>
                <Input placeholder="e.g., Wedding Reception Surplus Food" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Food Description
                </label>
                <Textarea placeholder="Describe the type of food available..." />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Quantity (meals)
                  </label>
                  <Input type="number" placeholder="100" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Event Date
                  </label>
                  <Input type="datetime-local" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Location
                </label>
                <Input placeholder="Enter full address" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Contact Information
                </label>
                <Input placeholder="Contact person and phone number" />
              </div>

              <Button variant="hero" className="w-full">
                Create Event
              </Button>
            </form>
          </Card>

          {/* Recent Listings */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Recent Listings</h2>
            
            <div className="space-y-4">
              {[
                {
                  title: "Birthday Party Surplus",
                  quantity: 80,
                  status: "claimed",
                  date: "2 hours ago"
                },
                {
                  title: "Restaurant Daily Surplus",
                  quantity: 45,
                  status: "available",
                  date: "5 hours ago"
                },
                {
                  title: "Corporate Event Food",
                  quantity: 120,
                  status: "completed",
                  date: "1 day ago"
                }
              ].map((listing, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{listing.title}</h3>
                    <Badge 
                      variant={
                        listing.status === 'available' ? 'secondary' :
                        listing.status === 'claimed' ? 'default' : 
                        'outline'
                      }
                      className="text-xs"
                    >
                      {listing.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{listing.quantity} meals</span>
                    <span>{listing.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              View All Listings
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonorPortal;