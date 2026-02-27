import React from 'react';
import { NavDropdown } from './NavDropdown';
import { MobileNavSubmenu } from './MobileNavSubmenu';
import { dropdownMenus } from './navMenuConfig';

interface NavItem {
  title: string;
  href: string;
}

interface NavItemsProps {
  items: NavItem[];
  onItemClick?: (href: string) => void;
  variant: 'desktop' | 'mobile';
  onMobileClose?: () => void;
}

export function NavItems({ items, onItemClick, variant, onMobileClose }: NavItemsProps) {
  return (
    <>
      {items.map((item) => {
        const menuConfig = dropdownMenus[item.title];
        
        if (menuConfig) {
          if (variant === 'mobile') {
            return (
              <MobileNavSubmenu
                key={item.title}
                title={menuConfig.title}
                items={menuConfig.items}
                onItemClick={onItemClick}
                onClose={onMobileClose!}
                variant={menuConfig.variant}
              />
            );
          }
          
          return (
            <NavDropdown
              key={item.title}
              title={menuConfig.title}
              items={menuConfig.items}
              onItemClick={onItemClick}
              variant={menuConfig.variant}
            />
          );
        }
        
        if (variant === 'mobile') {
          return (
            <button
              key={item.title}
              onClick={() => {
                onItemClick ? onItemClick(item.href) : window.location.href = item.href;
                onMobileClose?.();
              }}
              className="w-full text-left text-foreground hover:text-brand-primary hover:bg-surface/50 transition-colors duration-200 px-4 py-3 border-b border-border/30"
            >
              {item.title}
            </button>
          );
        }
        
        return (
          <button
            key={item.title}
            onClick={() => onItemClick ? onItemClick(item.href) : window.location.href = item.href}
            className="text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
          >
            {item.title}
          </button>
        );
      })}
    </>
  );
}