import React from 'react';
import { Logo } from '../brand/Logo';
import { Button } from '../ui/button';
import { Menu, X, Code2, User, LogOut, FolderPlus, Folder } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import { useAuth } from '../../hooks/useAuth';
import { NavDropdown } from './NavDropdown';
import { MobileNavSubmenu } from './MobileNavSubmenu';
import { dropdownMenus } from './navMenuConfig';

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
  { title: 'Sponsor', href: 'sponsorship' },
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
  const { user, isLoading, isAuthenticated, logout, mockLogin } = useAuth();

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
                // Check if this is a dropdown menu
                const menuConfig = dropdownMenus[item.title];
                if (menuConfig) {
                  return (
                    <NavDropdown
                      key={item.title}
                      title={menuConfig.title}
                      items={menuConfig.items}
                      onItemClick={onNavItemClick}
                      variant={menuConfig.variant}
                    />
                  );
                }
                
                return (
                  <button
                    key={item.title}
                    onClick={() => onNavItemClick ? onNavItemClick(item.href) : window.location.href = item.href}
                    className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer"
                  >
                    {item.title}
                  </button>
                );
              })}
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center gap-3">
              {isLoading ? (
                <Skeleton className="h-10 w-10 rounded-full" />
              ) : isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none">
                    <Avatar className="h-10 w-10 border-2 border-brand-accent">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-brand-accent text-white">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5">
                      <p className="text-sm text-brand-neutral-950">{user.name}</p>
                      <p className="text-xs text-brand-neutral-600">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onNavItemClick?.('maintainer-dashboard')}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onNavItemClick?.('maintainer-dashboard')}
                      className="cursor-pointer"
                    >
                      <Folder className="mr-2 h-4 w-4" />
                      My Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onNavItemClick?.('add-project')}
                      className="cursor-pointer"
                    >
                      <FolderPlus className="mr-2 h-4 w-4" />
                      Add Project
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={logout}
                      className="cursor-pointer text-red-600 focus:text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button 
                    onClick={() => onNavItemClick?.('login')} 
                    variant="ghost"
                  >
                    Log In
                  </Button>
                  <Button onClick={onCtaClick} variant="default">
                    {ctaText}
                  </Button>
                  {/* Demo: Quick login button */}
                  <Button 
                    onClick={mockLogin} 
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Demo Login
                  </Button>
                </>
              )}
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
                  // Check if this is a dropdown menu
                  const menuConfig = dropdownMenus[item.title];
                  if (menuConfig) {
                    return (
                      <MobileNavSubmenu
                        key={item.title}
                        title={menuConfig.title}
                        items={menuConfig.items}
                        onItemClick={onNavItemClick}
                        onClose={() => setIsMobileMenuOpen(false)}
                        variant={menuConfig.variant}
                      />
                    );
                  }
                  
                  return (
                    <button
                      key={item.title}
                      onClick={() => {
                        onNavItemClick ? onNavItemClick(item.href) : window.location.href = item.href;
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1"
                    >
                      {item.title}
                    </button>
                  );
                })}
                <div className="pt-4 space-y-2">
                  {isLoading ? (
                    <Skeleton className="h-10 w-full" />
                  ) : isAuthenticated && user ? (
                    <>
                      <div className="px-2 py-2 border-b border-brand-neutral-300">
                        <p className="text-sm text-brand-neutral-950">{user.name}</p>
                        <p className="text-xs text-brand-neutral-600">{user.email}</p>
                      </div>
                      <Button 
                        onClick={() => {
                          onNavItemClick?.('maintainer-dashboard');
                          setIsMobileMenuOpen(false);
                        }} 
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                      </Button>
                      <Button 
                        onClick={() => {
                          onNavItemClick?.('add-project');
                          setIsMobileMenuOpen(false);
                        }} 
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <FolderPlus className="mr-2 h-4 w-4" />
                        Add Project
                      </Button>
                      <Button 
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }} 
                        variant="outline"
                        className="w-full justify-start text-red-600 hover:text-red-700"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        onClick={() => {
                          onNavItemClick?.('login');
                          setIsMobileMenuOpen(false);
                        }} 
                        variant="outline"
                        className="w-full"
                      >
                        Log In
                      </Button>
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
                      <Button 
                        onClick={() => {
                          mockLogin();
                          setIsMobileMenuOpen(false);
                        }} 
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs"
                      >
                        Demo Login
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}