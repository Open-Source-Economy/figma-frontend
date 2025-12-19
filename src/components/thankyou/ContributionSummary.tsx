import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Heart } from 'lucide-react';

interface ContributionSummaryProps {
  amount: number;
  frequency: 'monthly' | 'one-time';
}

export function ContributionSummary({ amount, frequency }: ContributionSummaryProps) {
  return (
    <Card className="border-2 border-brand-accent/30 bg-gradient-to-br from-brand-accent/5 to-brand-highlight/5 mb-12">
      <CardContent className="p-6 text-center">
        <div className="inline-flex items-center gap-3 mb-2">
          <Heart className="h-6 w-6 text-brand-accent" />
          <span className="text-3xl text-brand-neutral-950">
            ${amount}{frequency === 'monthly' ? '/month' : ''}
          </span>
          <Heart className="h-6 w-6 text-brand-accent" />
        </div>
        <p className="text-brand-neutral-600">
          {frequency === 'monthly' 
            ? 'Your monthly support helps us plan for long-term impact'
            : 'Your one-time contribution directly supports our mission'
          }
        </p>
      </CardContent>
    </Card>
  );
}
