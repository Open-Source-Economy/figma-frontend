import React from 'react';
import { Button } from '../ui/button';
import { ValidatedInput } from '../forms/ValidatedInput';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  email: string;
  subscribed: boolean;
  onEmailChange: (email: string) => void;
  onSignup: () => void;
}

export function NewsletterSignup({
  email,
  subscribed,
  onEmailChange,
  onSignup
}: NewsletterSignupProps) {
  if (subscribed) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-brand-success/20 border border-brand-success/30 px-4 py-2.5 rounded-lg">
          <CheckCircle className="h-5 w-5 text-brand-success" />
          <span className="text-brand-success">You&apos;re in! 🎉</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <ValidatedInput
        name="newsletter-email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="your.email@example.com"
        leftIcon={Mail}
        required
      />
      <Button 
        size="sm"
        onClick={onSignup}
        disabled={!email}
        className="w-full gap-2"
      >
        <CheckCircle className="h-4 w-4" />
        Subscribe Now
      </Button>
    </div>
  );
}
