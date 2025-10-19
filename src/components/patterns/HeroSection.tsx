import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { LogoCloud } from './LogoCloud';
import { ExpertMaintainers } from './ExpertMaintainers';
import { HeroRightContent } from './HeroRightContent';
import { ArrowRight, Shield, Clock } from 'lucide-react';

interface HeroAction {
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  onClick?: () => void;
  icon?: boolean;
}

interface TrustIndicator {
  icon: React.ElementType;
  text: string;
}

interface HeroProps {
  badge?: string;
  headline: string;
  description: string;
  actions?: HeroAction[];
  trustIndicators?: TrustIndicator[];
  imageSrc?: string;
  imageAlt?: string;
  layout?: 'centered' | 'split' | 'enterprise';
  className?: string;
}

export function HeroSection({
  badge,
  headline,
  description,
  actions = [],
  trustIndicators = [],
  imageSrc,
  imageAlt = 'Hero image',
  layout = 'centered',
  className = ''
}: HeroProps) {
  // Enterprise layout - matches the design from the image
  if (layout === 'enterprise') {
    return (
      <section className={`relative py-16 md:py-24 lg:py-32 overflow-hidden ${className}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-brand-primary/5 via-brand-primary/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="max-w-2xl space-y-8">
              {badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 via-brand-accent/5 to-brand-highlight/8 rounded-full border border-brand-primary/20 backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-primary/10">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-brand-primary tracking-wide">
                    {badge}
                  </span>
                </div>
              )}
              
              <div className="space-y-8">
                <Typography.DisplayLarge className="leading-tight">
                  {headline.includes('Expert Maintainers') ? (
                    <>
                      Connect Your Enterprise with{' '}
                      <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent animate-pulse">
                        Expert Maintainers
                      </span>
                    </>
                  ) : (
                    headline
                  )}
                </Typography.DisplayLarge>
                
                <Typography.BodyLarge className="text-muted-foreground max-w-xl leading-relaxed">
                  {description}
                </Typography.BodyLarge>
                
                {actions.length > 0 && (
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch">
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || 'default'}
                        onClick={action.onClick}
                        size="lg"
                        rightIcon={action.icon ? ArrowRight : undefined}
                        icon={action.icon}
                      >
                        {action.text}
                      </Button>
                    ))}
                  </div>
                )}
                
                {/* Trust Indicators */}
                <div className="pt-4">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <span>NDAs Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-muted-foreground rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-background rounded-full" />
                      </div>
                      <span>501(c)(3) Non-Profit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Enterprise SLA</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content - Enterprise or Image */}
            <HeroRightContent
              layout={layout}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              expertsTitle="Meet the Experts"
              expertsSubtitle="Connect directly with the maintainers who built the open source projects you depend on"
            />
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'split') {
    return (
      <section className={`py-12 md:py-20 lg:py-28 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="max-w-lg">
              {badge && (
                <Badge variant="secondary" className="mb-6">
                  {badge}
                </Badge>
              )}
              <Typography.DisplayLarge className="mb-6">
                {headline}
              </Typography.DisplayLarge>
              <Typography.BodyLarge className="text-muted-foreground mb-8">
                {description}
              </Typography.BodyLarge>
              {actions.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant || 'default'}
                      onClick={action.onClick}
                      size="lg"
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Image */}
            {imageSrc && (
              <div className="relative">
                <ImageWithFallback
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-20 lg:py-28 text-center ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {badge && (
            <Badge variant="secondary" className="mb-6">
              {badge}
            </Badge>
          )}
          <Typography.DisplayLarge className="mb-6">
            {headline}
          </Typography.DisplayLarge>
          <Typography.BodyLarge className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </Typography.BodyLarge>
          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'default'}
                  onClick={action.onClick}
                  size="lg"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          )}
          {imageSrc && (
            <div className="mt-12">
              <ImageWithFallback
                src={imageSrc}
                alt={imageAlt}
                className="w-full max-w-4xl mx-auto h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}