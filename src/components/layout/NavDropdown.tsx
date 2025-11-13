import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavDropdownItem[];
  onItemClick?: (href: string) => void;
  variant?: 'default' | 'admin';
}

export function NavDropdown({ 
  title, 
  items, 
  onItemClick,
  variant = 'default'
}: NavDropdownProps) {
  const triggerClassName = variant === 'admin'
    ? "flex items-center gap-1 text-brand-primary hover:text-brand-primary-dark font-medium transition-colors duration-200 cursor-pointer outline-none"
    : "flex items-center gap-1 text-muted-foreground hover:text-brand-primary transition-colors duration-200 cursor-pointer outline-none";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClassName}>
        {title}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href}
            onClick={() => onItemClick?.(item.href)}
            className="cursor-pointer hover:text-brand-primary"
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
