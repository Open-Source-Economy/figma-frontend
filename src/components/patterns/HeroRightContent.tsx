import React from 'react';
import { ExpertMaintainers } from './ExpertMaintainers';
import { EnhancedImageContainer } from '../ui/enhanced-image-container';
import { DecorativeOrb } from '../ui/decorative-orb';

interface HeroRightContentProps {
  layout: 'enterprise' | 'image';
  imageSrc?: string;
  imageAlt?: string;
  expertsTitle?: string;
  expertsSubtitle?: string;
  className?: string;
}

export function HeroRightContent({
  layout,
  imageSrc,
  imageAlt = '',
  expertsTitle = "Meet the Experts",
  expertsSubtitle = "Connect directly with the maintainers who built the open source projects you depend on",
  className = ''
}: HeroRightContentProps) {
  if (layout === 'enterprise') {
    return (
      <div className={`relative lg:order-last min-h-[500px] flex items-center ${className}`}>
        {/* Main Content */}
        <div className="relative z-10 w-full">
          <ExpertMaintainers 
            title={expertsTitle}
            subtitle={expertsSubtitle}
          />
        </div>
        
        {/* Enterprise Decorative Elements */}
        <DecorativeOrb
          size="large"
          position="top-right"
          variant="primary"
          intensity="medium"
          animated={true}
        />
        
        <DecorativeOrb
          size="medium"
          position="bottom-left"
          variant="accent"
          intensity="medium"
          animated={false}
        />
        
        {/* Additional subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-success/5 rounded-3xl blur-3xl opacity-40" />
      </div>
    );
  }

  if (layout === 'image' && imageSrc) {
    return (
      <div className={`relative lg:order-last min-h-[400px] flex items-center ${className}`}>
        {/* Main Content */}
        <div className="relative z-10 w-full">
          <EnhancedImageContainer
            src={imageSrc}
            alt={imageAlt}
            variant="enterprise"
            showDecorations={true}
            className="w-full"
          />
        </div>
        
        {/* Image Decorative Elements */}
        <DecorativeOrb
          size="small"
          position="top-left"
          variant="success"
          intensity="medium"
          animated={false}
          className="-top-6 -left-6"
        />
        
        <DecorativeOrb
          size="medium"
          position="bottom-right"
          variant="gradient"
          intensity="subtle"
          animated={true}
          className="-bottom-8 -right-8"
        />
        
        {/* Subtle ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-accent/10 via-transparent to-brand-primary/5 rounded-3xl blur-2xl opacity-30" />
      </div>
    );
  }

  // Fallback content
  return (
    <div className={`relative lg:order-last min-h-[400px] flex items-center justify-center ${className}`}>
      <div className="text-center space-y-4">
        <div className="w-32 h-32 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-full mx-auto" />
        <p className="text-muted-foreground">Content placeholder</p>
      </div>
    </div>
  );
}