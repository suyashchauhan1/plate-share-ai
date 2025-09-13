import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Copy, Check, CreditCard, Smartphone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DonationCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const bankDetails = {
    accountName: "SharingPlate Foundation",
    accountNumber: "1234567890123456",
    ifsc: "HDFC0001234",
    bankName: "HDFC Bank",
    branch: "Mumbai Central",
    upiId: "sharingplate@hdfc"
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
      duration: 2000,
    });
    
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="donation"
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-elegant animate-float h-14 px-6 text-base font-semibold"
        >
          <Heart className="w-5 h-5 mr-2" fill="currentColor" />
          Support Our Mission
        </Button>
      </div>

      {/* Donation Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center mb-2">
              <Heart className="w-6 h-6 mr-2 text-primary" fill="currentColor" />
              Support SharingPlate
            </DialogTitle>
            <p className="text-center text-muted-foreground">
              Your donation helps us fight hunger and reduce food waste in communities
            </p>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">₹100</div>
                <div className="text-sm text-muted-foreground">feeds 10 people</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">₹500</div>
                <div className="text-sm text-muted-foreground">feeds 50 people</div>
              </Card>
            </div>

            {/* Bank Transfer */}
            <Card className="p-4">
              <div className="flex items-center mb-3">
                <Building className="w-5 h-5 mr-2 text-primary" />
                <h3 className="font-semibold">Bank Transfer</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Account Name:</span>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{bankDetails.accountName}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.accountName, 'Account Name')}
                      className="h-6 w-6 p-0"
                    >
                      {copiedField === 'Account Name' ? (
                        <Check className="w-3 h-3 text-secondary" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Account Number:</span>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{bankDetails.accountNumber}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.accountNumber, 'Account Number')}
                      className="h-6 w-6 p-0"
                    >
                      {copiedField === 'Account Number' ? (
                        <Check className="w-3 h-3 text-secondary" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">IFSC Code:</span>
                  <div className="flex items-center">
                    <span className="font-medium mr-2">{bankDetails.ifsc}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(bankDetails.ifsc, 'IFSC Code')}
                      className="h-6 w-6 p-0"
                    >
                      {copiedField === 'IFSC Code' ? (
                        <Check className="w-3 h-3 text-secondary" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Bank:</span>
                  <span className="font-medium">{bankDetails.bankName} - {bankDetails.branch}</span>
                </div>
              </div>
            </Card>

            {/* UPI Transfer */}
            <Card className="p-4">
              <div className="flex items-center mb-3">
                <Smartphone className="w-5 h-5 mr-2 text-primary" />
                <h3 className="font-semibold">UPI Transfer</h3>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">UPI ID:</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">{bankDetails.upiId}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.upiId, 'UPI ID')}
                    className="h-6 w-6 p-0"
                  >
                    {copiedField === 'UPI ID' ? (
                      <Check className="w-3 h-3 text-secondary" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Trust Badges */}
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                🔒 Secure Payments
              </Badge>
              <Badge variant="secondary" className="text-xs">
                📄 80G Tax Benefits
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ✅ Verified NGO
              </Badge>
            </div>

            {/* Footer */}
            <p className="text-xs text-center text-muted-foreground">
              SharingPlate is a registered non-profit organization. Your donations are tax-deductible under 80G.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonationCTA;