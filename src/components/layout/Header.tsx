import React from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/button';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

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
              {navItems.map((item) => {
                // Projects dropdown
                if (item.title === 'Projects') {
                  return (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer outline-none">
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('projects') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Browse Projects
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('common-pot') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Common Pot Example
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('request-project') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Request a Project
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                // Maintainers dropdown
                if (item.title === 'Maintainers') {
                  return (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer outline-none">
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('maintainers-directory') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Browse Directory
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('maintainer-profile') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          View Profile Example
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('maintainer-registration') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Register as Maintainer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                // Examples dropdown
                if (item.title === 'Examples') {
                  return (
                    <DropdownMenu key={item.title}>
                      <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer outline-none">
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('error-examples') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Server Error Alert
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('loading-examples') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Loading States
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('heading-levels') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Typography Levels
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('developer-onboarding') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Developer Onboarding
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onNavItemClick ? onNavItemClick('onboarding-success') : {}}
                          className="cursor-pointer hover:text-brand-primary"
                        >
                          Onboarding Success
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                return (
                  <button
                    key={item.title}
                    onClick={() => onNavItemClick ? onNavItemClick(item.href) : window.location.href = item.href}
                    className={`text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer ${
                      item.title === 'Admin' ? 'text-brand-primary hover:text-brand-primary-dark font-medium' : ''
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
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
                {navItems.map((item) => {
                  // Projects submenu in mobile
                  if (item.title === 'Projects') {
                    return (
                      <div key={item.title} className="space-y-2">
                        <div className="text-left text-muted-foreground px-2 py-1 font-medium">
                          {item.title}
                        </div>
                        <div className="pl-4 space-y-2">
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('projects') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Browse Projects
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('common-pot') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Common Pot Example
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('request-project') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Request a Project
                          </button>
                        </div>
                      </div>
                    );
                  }
                  
                  // Maintainers submenu in mobile
                  if (item.title === 'Maintainers') {
                    return (
                      <div key={item.title} className="space-y-2">
                        <div className="text-left text-muted-foreground px-2 py-1 font-medium">
                          {item.title}
                        </div>
                        <div className="pl-4 space-y-2">
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('maintainers-directory') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Browse Directory
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('maintainer-profile') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            View Profile Example
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('maintainer-registration') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Register as Maintainer
                          </button>
                        </div>
                      </div>
                    );
                  }
                  
                  // Examples submenu in mobile
                  if (item.title === 'Examples') {
                    return (
                      <div key={item.title} className="space-y-2">
                        <div className="text-left text-muted-foreground px-2 py-1 font-medium">
                          {item.title}
                        </div>
                        <div className="pl-4 space-y-2">
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('error-examples') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Server Error Alert
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('loading-examples') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Loading States
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('heading-levels') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Typography Levels
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('developer-onboarding') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Developer Onboarding
                          </button>
                          <button
                            onClick={() => {
                              onNavItemClick ? onNavItemClick('onboarding-success') : {};
                              setIsMobileMenuOpen(false);
                            }}
                            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
                          >
                            Onboarding Success
                          </button>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
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
                  );
                })}
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