import React from 'react';

type AuthStep = 'initial' | 'existing-user' | 'new-user';

interface AuthStepHeaderProps {
  step: AuthStep;
}

const stepContent = {
  'initial': {
    title: 'Welcome',
    description: 'Sign in or create your account'
  },
  'existing-user': {
    title: 'Welcome Back',
    description: 'Enter your password to continue'
  },
  'new-user': {
    title: 'Create Account',
    description: 'Set up your account details'
  }
};

export function AuthStepHeader({ step }: AuthStepHeaderProps) {
  const { title, description } = stepContent[step];
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-brand-neutral-900 mb-2">{title}</h1>
      <p className="text-brand-neutral-600">{description}</p>
    </div>
  );
}