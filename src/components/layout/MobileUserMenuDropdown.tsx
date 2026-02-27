import React from 'react';
import { X } from 'lucide-react';
import { UserProfileSection } from './UserProfileSection';
import { TokenDisplay } from '../user/TokenDisplay';
import { userMenuSections, logoutMenuItem } from './userMenuConfig';
import { Button } from '../ui/button';

interface User {
  name: string;
  email: string;
  initials: string;
  serviceTokens: number;
}

interface MobileUserMenuDropdownProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick?: (href: string) => void;
  logout: () => void;
}

export function MobileUserMenuDropdown({ 
  user,
  isOpen,
  onClose,
  onNavItemClick,
  logout
}: MobileUserMenuDropdownProps) {
  if (!isOpen) return null;

  const handleItemClick = (href: string) => {
    onNavItemClick?.(href);
    onClose();
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown Panel */}
      <div className="fixed top-16 right-3 z-50 w-80 max-w-[calc(100vw-1.5rem)] bg-card border border-border rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-foreground">Account Menu</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-brand-neutral-400 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain scroll-smooth scrollbar-thin scrollbar-thumb-brand-neutral-400 scrollbar-track-transparent hover:scrollbar-thumb-brand-neutral-500">
          {/* User Profile */}
          <UserProfileSection 
            name={user.name}
            email={user.email}
            initials={user.initials}
            variant="inline"
          />
          
          {/* Token Display */}
          <button 
            className="w-full hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => handleItemClick('#tokens')}
          >
            <TokenDisplay tokens={user.serviceTokens} variant="full" />
          </button>
          
          {/* Menu Sections */}
          {userMenuSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <h4 className="text-xs text-muted-foreground px-2 mb-2">{section.title}</h4>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleItemClick(item.href)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-brand-neutral-400 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
          
          {/* Logout */}
          <div className="pt-2 border-t border-border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-500/10 rounded-md transition-colors text-red-600"
            >
              <logoutMenuItem.icon className="h-4 w-4" />
              <span>{logoutMenuItem.label}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}