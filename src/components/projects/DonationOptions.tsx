import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Heart, Check } from 'lucide-react';
import type { DonationTier } from '../../data/projectDetailData';

interface DonationOptionsProps {
  projectName: string;
  oneTimeTiers: number[];
  monthlyTiers: DonationTier[];
  onDonate?: (amount: number, type: 'one-time' | 'monthly') => void;
}

export function DonationOptions({
  projectName,
  oneTimeTiers,
  monthlyTiers,
  onDonate
}: DonationOptionsProps) {
  const [selectedOneTime, setSelectedOneTime] = useState<number | null>(null);
  const [customOneTime, setCustomOneTime] = useState('');
  const [selectedMonthly, setSelectedMonthly] = useState<number | null>(null);

  const handleOneTimeDonation = () => {
    const amount = selectedOneTime === -1 ? parseInt(customOneTime) : selectedOneTime;
    if (amount && onDonate) {
      onDonate(amount, 'one-time');
    }
  };

  const handleMonthlyDonation = (amount: number) => {
    if (onDonate) {
      onDonate(amount, 'monthly');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* One-Time Donation */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-brand-accent/10 rounded-lg">
            <Heart className="h-5 w-5 text-brand-accent" />
          </div>
          <div>
            <h3 className="text-brand-neutral-900">One-Time Donation</h3>
            <p className="text-brand-neutral-600">Support ongoing development</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {oneTimeTiers.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedOneTime(amount);
                  setCustomOneTime('');
                }}
                className={`px-4 py-3 rounded-lg border transition-all ${
                  selectedOneTime === amount
                    ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                    : 'border-brand-neutral-300 bg-brand-secondary hover:border-brand-accent/50'
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-brand-neutral-600">Custom Amount</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-neutral-500">
                  $
                </span>
                <input
                  type="number"
                  value={customOneTime}
                  onChange={(e) => {
                    setCustomOneTime(e.target.value);
                    setSelectedOneTime(-1);
                  }}
                  placeholder="Enter amount"
                  className="w-full h-11 pl-7 pr-4 bg-form-background border border-form-border rounded-lg text-brand-neutral-900 transition-colors hover:border-form-border-hover focus:border-form-border-focus focus:outline-none"
                  min="1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-brand-secondary rounded-lg">
          <p className="text-brand-neutral-600">
            <strong className="text-brand-neutral-800">Impact:</strong> ${selectedOneTime || parseInt(customOneTime) || 0} ≈ {Math.floor((selectedOneTime || parseInt(customOneTime) || 0) / 25)} hours of maintenance time
          </p>
        </div>

        <Button
          className="w-full"
          onClick={handleOneTimeDonation}
          disabled={!selectedOneTime && !customOneTime}
        >
          <Heart className="mr-2 h-4 w-4" />
          Donate {selectedOneTime || customOneTime ? `$${selectedOneTime === -1 ? customOneTime : selectedOneTime}` : ''}
        </Button>
      </div>

      {/* Monthly Sponsorship */}
      <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-3">Recurring Support</Badge>
          <h3 className="text-brand-neutral-900 mb-2">Monthly Sponsorship</h3>
          <p className="text-brand-neutral-600">
            Ongoing support for {projectName}
          </p>
        </div>

        <div className="space-y-3">
          {monthlyTiers.map((tier, index) => (
            <button
              key={tier.amount}
              onClick={() => setSelectedMonthly(index)}
              className={`w-full p-4 rounded-lg border transition-all text-left ${
                selectedMonthly === index
                  ? 'border-brand-accent bg-brand-accent/10'
                  : 'border-brand-neutral-300 bg-brand-secondary hover:border-brand-accent/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-brand-neutral-900">
                  ${tier.amount}/month
                </span>
                {selectedMonthly === index && (
                  <div className="p-1 bg-brand-accent rounded-full">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              <ul className="space-y-1.5">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-brand-neutral-600">
                    <Check className="h-4 w-4 text-brand-success mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <Button
          className="w-full mt-6"
          onClick={() => selectedMonthly !== null && handleMonthlyDonation(monthlyTiers[selectedMonthly].amount)}
          disabled={selectedMonthly === null}
        >
          <Heart className="mr-2 h-4 w-4" />
          Become a Sponsor
        </Button>

        <p className="text-brand-neutral-500 text-center mt-4">
          Cancel anytime. 100% goes to project support.
        </p>
      </div>
    </div>
  );
}
