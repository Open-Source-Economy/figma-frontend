import React from 'react';
import { cn } from '../ui/utils';

interface SectionLayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl'
};

const spacingClasses = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16', 
  xl: 'py-20'
};

export function SectionLayout({ 
  title, 
  description, 
  children, 
  className,
  maxWidth = '4xl',
  spacing = 'md'
}: SectionLayoutProps) {
  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', spacingClasses[spacing], className)}>
      <div className={cn('mx-auto', maxWidthClasses[maxWidth])}>
        {(title || description) && (
          <div className="mb-12">
            {title && <h1 className="mb-4">{title}</h1>}
            {description && (
              <p className="text-muted-foreground text-lg">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}