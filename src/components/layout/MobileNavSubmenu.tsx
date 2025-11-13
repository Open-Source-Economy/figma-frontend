import React from 'react';
import type { NavDropdownItem } from './NavDropdown';

interface MobileNavSubmenuProps {
  title: string;
  items: NavDropdownItem[];
  onItemClick?: (href: string) => void;
  onClose?: () => void;
  variant?: 'default' | 'admin';
}

export function MobileNavSubmenu({ 
  title, 
  items, 
  onItemClick,
  onClose,
  variant = 'default'
}: MobileNavSubmenuProps) {
  const titleClassName = variant === 'admin'
    ? "text-left text-brand-primary px-2 py-1 font-medium"
    : "text-left text-muted-foreground px-2 py-1 font-medium";

  const handleItemClick = (href: string) => {
    onItemClick?.(href);
    onClose?.();
  };

  return (
    <div className="space-y-2">
      <div className={titleClassName}>
        {title}
      </div>
      <div className="pl-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.href}
            onClick={() => handleItemClick(item.href)}
            className="block text-left text-muted-foreground hover:text-brand-primary transition-colors duration-200 px-2 py-1 text-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
