import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { ValidatedInput } from '../../forms/ValidatedInput';
import { Mail, Bell, Loader2, Plus } from 'lucide-react';
import { StatefulAction, ActionState } from '../../ui/StatefulAction';
import { useStateTestingContext } from '../SupportDetailSection';

export function NewsletterDetails() {
  const [email, setEmail] = useState('');
  const [actionState, setActionState] = useState<ActionState>('idle');
  const contextState = useStateTestingContext();
  
  // Use context state if testing is enabled, otherwise use local state
  const currentState = contextState?.isEnabled ? contextState.currentState : actionState;
  const isLoading = currentState === 'loading';

  const handleSubscribe = async () => {
    if (email && email.includes('@')) {
      setActionState('loading');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random success/error for demo
      const isSuccess = Math.random() > 0.2; // 80% success rate
      
      if (isSuccess) {
        setActionState('success');
      } else {
        setActionState('error');
      }
    }
  };

  const handleRetry = () => {
    // Keep the email when retrying
    setActionState('idle');
  };

  const handleAddAnother = () => {
    // Clear email and reset to idle
    setEmail('');
    setActionState('idle');
  };

  return (
    <StatefulAction
      state={actionState}
      successContent={{
        title: "You're Subscribed! 🎉",
        message: "Check your inbox for confirmation. Thank you!",
        resetAction: handleAddAnother,
        resetLabel: "Subscribe Another Email",
      }}
      errorContent={{
        title: "Subscription Failed",
        message: "We couldn't subscribe you right now. Please try again.",
        retry: handleRetry,
        retryLabel: "Try Again",
      }}
    >
      <div className="space-y-4">
        <p className="text-brand-neutral-600">
          Get monthly updates on enterprise partnerships, maintainers funded, and where your support goes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <div className="flex-1 max-w-md">
            <ValidatedInput
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={setEmail}
              validationState={email && !email.includes('@') ? 'error' : undefined}
              errorMessage={email && !email.includes('@') ? 'Valid email required' : undefined}
              leftIcon={Mail}
              disabled={isLoading}
            />
          </div>
          <Button
            onClick={handleSubscribe}
            disabled={!email || !email.includes('@') || isLoading}
            className="bg-brand-highlight hover:bg-brand-highlight/90 text-white sm:w-auto h-11"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Bell className="h-4 w-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>
        </div>
        <p className="text-xs text-brand-neutral-600">
          1 email/month • No spam • Unsubscribe anytime
        </p>
      </div>
    </StatefulAction>
  );
}