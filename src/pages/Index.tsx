import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Leaderboard from '@/components/Leaderboard';
import DonationCTA from '@/components/DonationCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Leaderboard />
      <DonationCTA />
    </div>
  );
};

export default Index;
