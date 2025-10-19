import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

/**
 * PortalCard Component - Streamlined Design
 * 
 * A clean, minimal card component for displaying portal options.
 * Follows DRY principles by:
 * - Using existing UI components (Card, Button) from the design system
 * - Centralizing color logic with Tailwind CSS variables
 * - Data-driven configuration via props
 * - Simple, scannable layout for corporate environments
 * 
 * All branding variables are defined in /styles/globals.css as Tailwind v4 variables.
 */
export interface PortalCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  accentColor?: 'primary' | 'accent';
  onSelect: (id: string) => void;
}

export function PortalCard({
  id,
  title,
  description,
  icon,
  ctaText,
  accentColor = 'primary',
  onSelect
}: PortalCardProps) {
  const colorClasses = {
    primary: {
      icon: 'bg-brand-primary',
      button: 'bg-brand-primary hover:bg-brand-primary-dark'
    },
    accent: {
      icon: 'bg-brand-accent',
      button: 'bg-brand-accent hover:bg-brand-accent-dark'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <Card 
      className="border-border/30 hover:border-brand-accent/30 transition-all duration-300 h-full bg-brand-card-blue shadow-lg hover:shadow-xl"
    >
      <CardContent className="p-10 flex flex-col h-full">
        {/* Icon & Title Row */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-xl ${colors.icon} flex items-center justify-center text-white shadow-lg shadow-${accentColor === 'primary' ? 'brand-primary' : 'brand-accent'}/20 flex-shrink-0`}>
            {icon}
          </div>
          <h3 className="text-2xl text-foreground">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-muted-foreground mb-auto leading-relaxed flex-grow">
          {description}
        </p>

        {/* CTA Button */}
        <Button 
          size="lg"
          className={`w-full ${colors.button} text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-8`}
          onClick={() => onSelect(id)}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}