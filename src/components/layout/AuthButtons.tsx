import React from 'react';
import { Button } from '../ui/button';

interface AuthButtonsProps {
  onNavItemClick?: (href: string) => void;
  onCtaClick?: () => void;
  mockLogin?: () => void;
  ctaText?: string;
  variant?: 'desktop' | 'mobile';
}

export function AuthButtons({ 
  onNavItemClick, 
  onCtaClick, 
  mockLogin, 
  ctaText = 'Get Started', 
  variant = 'desktop' 
}: AuthButtonsProps) {
  if (variant === 'mobile') {
    return (
      <>
        <Button 
          onClick={() => onNavItemClick?.('login')} 
          variant="outline"
          className="w-full"
        >
          Log In
        </Button>
        <Button 
          onClick={onCtaClick} 
          variant="default"
          className="w-full"
        >
          {ctaText}
        </Button>
        <Button 
          onClick={mockLogin} 
          variant="ghost"
          size="sm"
          className="w-full text-xs"
        >
          Demo Login
        </Button>
      </>
    );
  }

  return (
    <>
      <Button 
        onClick={() => onNavItemClick?.('auth')} 
        variant="ghost"
        size="sm"
        className="hidden lg:flex"
      >
        Log In
      </Button>
      <Button onClick={onCtaClick} variant="default" size="default">
        {ctaText}
      </Button>
      <Button 
        onClick={mockLogin} 
        variant="outline"
        size="sm"
        className="text-xs hidden xl:flex"
      >
        Demo Login
      </Button>
    </>
  );
}