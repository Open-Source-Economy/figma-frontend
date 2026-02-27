import React from 'react';
import { Button } from '../ui/button';
import { UserProfileSection } from './UserProfileSection';
import { userMenuSections, logoutMenuItem } from './userMenuConfig';

interface User {
  name: string;
  email: string;
  initials: string;
}

interface MobileUserMenuProps {
  user: User;
  onNavItemClick?: (href: string) => void;
  logout: () => void;
}

export function MobileUserMenu({ 
  user,
  onNavItemClick,
  logout
}: MobileUserMenuProps) {
  const handleItemClick = (href: string) => {
    onNavItemClick?.(href);
  };

  return (
    <>
      <UserProfileSection 
        name={user.name}
        email={user.email}
        initials={user.initials}
        variant="inline"
      />
      
      {userMenuSections.map((section) => (
        <React.Fragment key={section.title}>
          {section.items.map((item) => {
            const Icon = item.icon;
            return (
              <Button 
                key={item.label}
                onClick={() => handleItemClick(item.href)} 
                variant="outline"
                className="w-full justify-start"
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </React.Fragment>
      ))}
      
      <Button 
        onClick={logout} 
        variant="outline"
        className="w-full justify-start text-red-600 hover:text-red-700"
      >
        <logoutMenuItem.icon className="mr-2 h-4 w-4" />
        {logoutMenuItem.label}
      </Button>
    </>
  );
}