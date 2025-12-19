import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { ValidatedInput } from '../../forms/ValidatedInput';
import { Mail, Building2, Briefcase, CheckCircle, TrendingUp, Sparkles, Users, Award } from 'lucide-react';

interface AmbassadorDetailsProps {
  onNavigate?: (page: string) => void;
}

export function AmbassadorDetails({ onNavigate }: AmbassadorDetailsProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    { icon: TrendingUp, title: 'Commission', desc: 'Earn rewards' },
    { icon: Sparkles, title: 'Early Access', desc: 'New features' },
    { icon: Users, title: 'Network', desc: 'Exclusive connections' },
    { icon: Award, title: 'Recognition', desc: 'Public credit' }
  ];

  if (submitted) {
    return (
      <div className="bg-brand-success/10 border-2 border-brand-success rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-brand-success mx-auto mb-3" />
        <h3 className="text-brand-neutral-900 mb-2">Application Received! 🎉</h3>
        <p className="text-sm text-brand-neutral-600 mb-4">
          We&apos;ll reach out within 48 hours with your Ambassador Kit.
        </p>
        <Button variant="outline" size="sm" onClick={() => onNavigate?.('services')}>
          View Our Services
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-brand-neutral-600">
        Know an enterprise that relies on open source? Help us connect and become a champion for sustainable funding!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-3 text-center">
              <Icon className="h-5 w-5 text-brand-accent mx-auto mb-1" />
              <div className="text-xs text-brand-neutral-900 mb-0.5">{benefit.title}</div>
              <div className="text-[10px] text-brand-neutral-600">{benefit.desc}</div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <ValidatedInput
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          validationState={email && !email.includes('@') ? 'error' : undefined}
          leftIcon={Mail}
          label="Email"
        />
        <ValidatedInput
          type="text"
          placeholder="Company (optional)"
          leftIcon={Building2}
          label="Target Company"
        />
      </div>

      <Button
        onClick={() => setSubmitted(true)}
        disabled={!email || !email.includes('@')}
        className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white"
      >
        <Briefcase className="h-4 w-4 mr-2" />
        Apply Now
      </Button>
    </div>
  );
}
