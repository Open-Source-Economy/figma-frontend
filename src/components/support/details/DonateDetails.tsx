import React from 'react';
import { Button } from '../../ui/button';
import { Heart, TrendingUp, Zap, Users, ArrowRight } from 'lucide-react';

interface DonateDetailsProps {
  onNavigate?: (page: string) => void;
}

export function DonateDetails({ onNavigate }: DonateDetailsProps) {
  const tiers = [
    { amount: '$10', title: 'Coffee Supporter', icon: Heart, color: 'brand-accent' },
    { amount: '$25/mo', title: 'Community Builder', icon: Users, color: 'brand-highlight', popular: true },
    { amount: '$100', title: 'Impact Maker', icon: TrendingUp, color: 'brand-success' },
    { amount: 'Custom', title: 'Your Choice', icon: Zap, color: 'brand-accent' }
  ];

  return (
    <div className="space-y-6">
      <p className="text-brand-neutral-600">
        Your support helps secure enterprise partnerships that fund maintainers across the entire dependency tree.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.title}
              className={`relative bg-brand-card-blue-light/30 border-2 rounded-lg p-4 text-center ${
                tier.popular ? 'border-brand-highlight' : 'border-brand-neutral-300/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand-highlight text-white text-xs px-2 py-0.5 rounded">
                  Popular
                </div>
              )}
              <Icon className={`h-6 w-6 text-${tier.color} mx-auto mb-2`} />
              <div className="text-brand-neutral-900 mb-1">{tier.amount}</div>
              <div className="text-xs text-brand-neutral-600">{tier.title}</div>
            </div>
          );
        })}
      </div>

      <Button
        onClick={() => onNavigate?.('donation')}
        className="w-full bg-brand-highlight hover:bg-brand-highlight/90 text-white"
        size="lg"
      >
        <Heart className="h-4 w-4 mr-2" />
        Donate Now
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>

      <div className="grid grid-cols-3 gap-3 text-center text-xs">
        <div className="bg-brand-card-blue-light/30 rounded p-2">
          <div className="text-brand-accent mb-1">100%</div>
          <div className="text-brand-neutral-600">Non-profit</div>
        </div>
        <div className="bg-brand-card-blue-light/30 rounded p-2">
          <div className="text-brand-success mb-1">Transparent</div>
          <div className="text-brand-neutral-600">Fund tracking</div>
        </div>
        <div className="bg-brand-card-blue-light/30 rounded p-2">
          <div className="text-brand-highlight mb-1">Tax-deductible</div>
          <div className="text-brand-neutral-600">Receipts</div>
        </div>
      </div>
    </div>
  );
}
