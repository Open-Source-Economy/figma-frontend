import React from 'react';
import { Logo } from '../brand/Logo';
import { useAuth } from '../../hooks/useAuth';
import { DeveloperBanner } from './DeveloperBanner';
import { NavItems } from './NavItems';
import { MobileMenuButton } from './MobileMenuButton';
import { AuthSection } from './AuthSection';
import { MobileUserMenuDropdown } from './MobileUserMenuDropdown';
import { TokenDisplay } from '../user/TokenDisplay';

interface NavItem {
  title: string;
  href: string;
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaText?: string;
  onCtaClick?: () => void;
  onNavItemClick?: (href: string) => void;
  onDeveloperRegister?: () => void;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { title: 'About', href: '#' },
  { title: 'Services', href: 'services' },
  { title: 'Pricing', href: 'pricing' },
  { title: 'Projects', href: 'projects' },
  { title: 'Maintainers', href: 'maintainer-profile' },
  { title: 'Sponsor', href: 'sponsor' },
  { title: 'Contact', href: 'contact' },
  { title: 'Examples', href: '#' },
  { title: 'Admin', href: 'admin' }
];

export function Header({ 
  navItems = defaultNavItems, 
  ctaText = 'Get Started',
  onCtaClick,
  onNavItemClick,
  onDeveloperRegister,
  className = ''
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileUserMenuOpen, setIsMobileUserMenuOpen] = React.useState(false);
  const { user, isLoading, isAuthenticated, logout, mockLogin } = useAuth();

  return (
    <>
      {/* Developer Banner */}
      <DeveloperBanner onNavItemClick={onNavItemClick} />

      {/* Main Header */}
      <header className={`bg-background border-b border-border sticky top-0 z-50 ${className}`}>
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 max-w-[100vw]">
          <div className="flex items-center justify-between h-20 gap-2 lg:gap-4">
            {/* Logo */}
            <button 
              onClick={() => onNavItemClick ? onNavItemClick('home') : window.location.href = '/'}
              className="hover:opacity-80 transition-opacity duration-200 shrink-0"
              aria-label="Go to homepage"
            >
              <Logo size="sm" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 xl:space-x-6 overflow-x-auto scrollbar-none flex-shrink min-w-0">
              <NavItems 
                items={navItems}
                onItemClick={onNavItemClick}
                variant="desktop"
              />
            </nav>

            {/* Auth Section - Desktop */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2 xl:gap-3 shrink-0">
              <AuthSection
                user={user}
                isLoading={isLoading}
                isAuthenticated={isAuthenticated}
                logout={logout}
                mockLogin={mockLogin}
                onNavItemClick={onNavItemClick}
                onCtaClick={onCtaClick}
                ctaText={ctaText}
                variant="desktop"
              />
            </div>

            {/* Mobile Auth Indicator - Shows avatar when logged in */}
            <div className="flex md:hidden items-center gap-4 shrink-0">
              {isAuthenticated && user && (
                <>
                  <TokenDisplay tokens={user.serviceTokens} variant="compact" />
                  <button
                    onClick={() => setIsMobileUserMenuOpen(true)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent text-white hover:bg-brand-accent-dark transition-colors"
                    aria-label="Open user menu"
                  >
                    <span className="text-sm">{user.initials}</span>
                  </button>
                </>
              )}
              
              {/* Mobile Menu Button */}
              <MobileMenuButton
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Navigation */}
              <nav className="flex flex-col space-y-0">
                <NavItems 
                  items={navItems}
                  onItemClick={onNavItemClick}
                  variant="mobile"
                  onMobileClose={() => setIsMobileMenuOpen(false)}
                />
              </nav>

              {/* Auth Buttons (only for non-logged-in users) */}
              {!isAuthenticated && (
                <div className="px-4 pt-6 mt-6 border-t border-border">
                  <AuthSection
                    user={user}
                    isLoading={isLoading}
                    isAuthenticated={isAuthenticated}
                    logout={logout}
                    mockLogin={mockLogin}
                    onNavItemClick={onNavItemClick}
                    onCtaClick={onCtaClick}
                    ctaText={ctaText}
                    variant="mobile"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile User Menu Dropdown */}
      {isAuthenticated && user && (
        <MobileUserMenuDropdown
          user={user}
          isOpen={isMobileUserMenuOpen}
          onClose={() => setIsMobileUserMenuOpen(false)}
          onNavItemClick={onNavItemClick}
          logout={logout}
        />
      )}
    </>
  );
}