import React from 'react';
import { Skeleton } from '../ui/skeleton';
import { UserMenuDropdown } from './UserMenuDropdown';
import { AuthButtons } from './AuthButtons';
import { TokenDisplay } from '../user/TokenDisplay';

interface User {
  name: string;
  email: string;
  initials: string;
  serviceTokens: number;
}

interface AuthSectionProps {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  onNavItemClick?: (href: string) => void;
  onCtaClick?: () => void;
  logout: () => void;
  mockLogin: () => void;
  ctaText: string;
  variant: 'desktop' | 'mobile';
}

export function AuthSection({
  isLoading,
  isAuthenticated,
  user,
  onNavItemClick,
  onCtaClick,
  logout,
  mockLogin,
  ctaText,
  variant
}: AuthSectionProps) {
  if (isLoading) {
    return variant === 'desktop' ? (
      <Skeleton className="h-10 w-10 rounded-full" />
    ) : (
      <Skeleton className="h-10 w-full" />
    );
  }

  if (isAuthenticated && user) {
    if (variant === 'mobile') {
      const { MobileUserMenu } = require('./MobileUserMenu');
      return (
        <MobileUserMenu
          user={user}
          onNavItemClick={onNavItemClick}
          logout={logout}
        />
      );
    }

    return (
      <div className="flex items-center gap-3">
        <TokenDisplay tokens={user.serviceTokens} variant="badge" />
        <UserMenuDropdown
          user={user}
          onNavItemClick={onNavItemClick}
          logout={logout}
        />
      </div>
    );
  }

  return (
    <AuthButtons
      onNavItemClick={onNavItemClick}
      onCtaClick={onCtaClick}
      mockLogin={mockLogin}
      ctaText={ctaText}
      variant={variant}
    />
  );
}