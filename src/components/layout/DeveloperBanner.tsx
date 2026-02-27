import React from 'react';
import { Button } from '../ui/button';
import { Code2 } from 'lucide-react';

interface DeveloperBannerProps {
  onNavItemClick?: (href: string) => void;
}

export function DeveloperBanner({ onNavItemClick }: DeveloperBannerProps) {
  return (
    <div className="bg-gradient-to-r from-brand-accent to-brand-highlight border-b border-brand-accent-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 gap-3">
          <Code2 className="w-4 h-4 text-white" />
          <span className="text-white">Are you a developer?</span>
          <Button
            onClick={() => onNavItemClick?.('maintainer-registration')}
            variant="outline"
            size="sm"
            className="bg-brand-neutral-900 text-brand-accent hover:bg-brand-neutral-950 hover:text-brand-accent border-brand-neutral-900 h-8"
          >
            Register Here
          </Button>
        </div>
      </div>
    </div>
  );
}