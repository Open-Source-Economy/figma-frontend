import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DropdownMenuSection } from '../ui/dropdown-menu-section';
import { DropdownMenuItemWithIcon } from '../ui/dropdown-menu-item-with-icon';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { UserProfileSection } from './UserProfileSection';
import { TokenDisplay } from '../user/TokenDisplay';
import { userMenuSections, logoutMenuItem } from './userMenuConfig';

interface User {
  name: string;
  email: string;
  initials: string;
  serviceTokens: number;
}

interface UserMenuDropdownProps {
  user: User;
  onNavItemClick?: (href: string) => void;
  logout: () => void;
}

export function UserMenuDropdown({ 
  user,
  onNavItemClick,
  logout 
}: UserMenuDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 hover:opacity-80 transition-opacity outline-none cursor-pointer">
        <Avatar className="h-10 w-10 border-2 border-brand-accent">
          <AvatarFallback className="bg-brand-accent text-white">
            {user.initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* User Header Section */}
        <UserProfileSection 
          name={user.name}
          email={user.email}
          initials={user.initials}
          variant="header"
        />

        {/* Token Display */}
        <div className="px-2 pt-2 pb-3 border-t border-border/50">
          <button 
            className="w-full hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => onNavItemClick?.('#tokens')}
          >
            <TokenDisplay tokens={user.serviceTokens} variant="full" />
          </button>
        </div>

        {/* Menu Sections */}
        {userMenuSections.map((section, index) => (
          <React.Fragment key={section.title}>
            <DropdownMenuSection title={section.title}>
              {section.items.map((item) => (
                <DropdownMenuItemWithIcon
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => onNavItemClick?.(item.href)}
                />
              ))}
            </DropdownMenuSection>
            {index < userMenuSections.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}

        <DropdownMenuSeparator />

        {/* Logout */}
        <div className="px-2 py-2">
          <DropdownMenuItemWithIcon
            icon={logoutMenuItem.icon}
            label={logoutMenuItem.label}
            onClick={logout}
            variant={logoutMenuItem.variant}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}