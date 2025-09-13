import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Medal, Award, ExternalLink, Users, Utensils } from 'lucide-react';

interface LeaderboardEntry {
  id: number;
  name: string;
  quantity: number;
  location: string;
  website?: string;
  verified: boolean;
  type: 'donor' | 'ngo';
}

const mockDonors: LeaderboardEntry[] = [
  {
    id: 1,
    name: "Golden Palace Restaurant",
    quantity: 12840,
    location: "Mumbai, Maharashtra",
    website: "https://goldenpalace.com",
    verified: true,
    type: 'donor'
  },
  {
    id: 2,
    name: "Grand Wedding Hall",
    quantity: 9650,
    location: "Delhi, Delhi",
    website: "https://grandwedding.in",
    verified: true,
    type: 'donor'
  },
  {
    id: 3,
    name: "Spice Garden Catering",
    quantity: 8230,
    location: "Bangalore, Karnataka",
    website: "https://spicegarden.co.in",
    verified: true,
    type: 'donor'
  },
  {
    id: 4,
    name: "Royal Banquet",
    quantity: 7890,
    location: "Chennai, Tamil Nadu",
    website: "https://royalbanquet.com",
    verified: false,
    type: 'donor'
  },
  {
    id: 5,
    name: "Heritage Hotel",
    quantity: 6540,
    location: "Jaipur, Rajasthan",
    website: "https://heritagehotel.in",
    verified: true,
    type: 'donor'
  }
];

const mockNGOs: LeaderboardEntry[] = [
  {
    id: 1,
    name: "Food for All Foundation",
    quantity: 15670,
    location: "Mumbai, Maharashtra",
    website: "https://foodforall.org",
    verified: true,
    type: 'ngo'
  },
  {
    id: 2,
    name: "Hunger Relief Society",
    quantity: 13240,
    location: "Delhi, Delhi",
    website: "https://hungerrelief.in",
    verified: true,
    type: 'ngo'
  },
  {
    id: 3,
    name: "Nourish India",
    quantity: 11890,
    location: "Bangalore, Karnataka",
    website: "https://nourishindia.org",
    verified: true,
    type: 'ngo'
  },
  {
    id: 4,
    name: "Care & Share",
    quantity: 10560,
    location: "Chennai, Tamil Nadu",
    website: "https://careshare.org",
    verified: true,
    type: 'ngo'
  },
  {
    id: 5,
    name: "Hope Kitchen",
    quantity: 9320,
    location: "Pune, Maharashtra",
    website: "https://hopekitchen.in",
    verified: false,
    type: 'ngo'
  }
];

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<'donors' | 'ngos'>('donors');

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-accent" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-400" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const currentData = activeTab === 'donors' ? mockDonors : mockNGOs;

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Community Champions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our top contributors who are making a real difference in fighting hunger
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted p-1 rounded-lg">
            <Button
              variant={activeTab === 'donors' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('donors')}
              className="rounded-md"
            >
              <Utensils className="w-4 h-4 mr-2" />
              Top Donors
            </Button>
            <Button
              variant={activeTab === 'ngos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('ngos')}
              className="rounded-md"
            >
              <Users className="w-4 h-4 mr-2" />
              Top NGOs
            </Button>
          </div>
        </div>

        {/* Leaderboard Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentData.map((entry, index) => (
            <Card 
              key={entry.id} 
              className={`p-6 transition-all duration-300 hover:shadow-lg ${
                index === 0 ? 'shadow-primary border-primary/20' : 
                index === 1 ? 'shadow-secondary border-secondary/20' : 
                'shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div className="flex-shrink-0">
                    {getRankIcon(index + 1)}
                  </div>

                  {/* Organization Info */}
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {entry.name}
                      </h3>
                      {entry.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {entry.location}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {entry.quantity.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activeTab === 'donors' ? 'meals donated' : 'meals distributed'}
                    </div>
                  </div>

                  {/* Website Link */}
                  {entry.website && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(entry.website, '_blank')}
                      className="flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View Complete Leaderboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;