import React from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/button';
import { Menu, X, Code2 } from 'lucide-react';

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
  { title: 'How It Works', href: 'how-it-works' },
  { title: 'Mission', href: 'mission' },
  { title: 'Services', href: 'services' },
  { title: 'Projects', href: 'projects' },
  { title: 'Maintainers', href: 'maintainer-profile' },
  { title: 'Blog', href: 'blog' },
  { title: 'FAQ', href: 'faq' },
  { title: 'Contact', href: 'contact' },
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

  return (
    <>
      {/* Developer Banner */}
      <div className="bg-gradient-to-r from-brand-accent to-brand-highlight border-b border-brand-accent-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12 gap-3">
            <Code2 className="w-4 h-4 text-white" />
            <span className="text-white">Are you a developer?</span>
            <Button 
              onClick={onDeveloperRegister}
              variant="outline"
              size="sm"
              className="bg-white text-brand-accent hover:bg-brand-neutral-950 hover:text-brand-accent border-white h-8"
            >
              Register Here
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-background border-b border-border sticky top-0 z-50 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => onNavItemClick ? onNavItemClick('home') : window.location.href = '/'}
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Go to homepage"
            >
              <Logo size="sm" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => onNavItemClick ? onNavItemClick(item.href) : window.location.href = item.href}
                  className={`text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer ${
                    item.title === 'Admin' ? 'text-brand-primary hover:text-brand-primary-dark font-medium' : ''
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button onClick={onCtaClick} variant="default">
                {ctaText}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => {
                      onNavItemClick ? onNavItemClick(item.href) : window.location.href = item.href;
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 ${
                      item.title === 'Admin' ? 'text-brand-primary hover:text-brand-primary-dark font-medium' : ''
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    onClick={() => {
                      onCtaClick?.();
                      setIsMobileMenuOpen(false);
                    }} 
                    variant="default"
                    className="w-full"
                  >
                    {ctaText}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}