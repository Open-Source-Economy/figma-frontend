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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="max-w-2xl space-y-8">
              {badge && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-card-blue rounded-full border border-brand-neutral-300">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span className="text-sm text-brand-neutral-800">
                    {badge}
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <Typography.DisplayLarge className="leading-tight">
                  {headline}
                </Typography.DisplayLarge>
                
                <Typography.BodyLarge className="text-brand-neutral-600 max-w-xl">
                  {description}
                </Typography.BodyLarge>
                
                {actions.length > 0 && (
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch pt-2">
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
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-6 text-sm text-brand-neutral-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-brand-neutral-500" />
                      <span>NDAs Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-brand-neutral-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-brand-secondary rounded-full" />
                      </div>
                      <span>501(c)(3) Non-Profit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-neutral-500" />
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
      <section className={`relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden ${className}`}>
        {/* Full-width background image - aligned with header top */}
        {imageSrc && (
          <>
            <div className="absolute inset-0 z-0">
              <ImageWithFallback
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Multi-layer gradient overlay for optimal text readability and image visibility */}
            <div className="absolute inset-0 z-10">
              {/* Horizontal gradient - stronger on left where content is */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 via-brand-secondary/50 to-transparent"></div>
              {/* Vertical gradient - subtle darkening at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/60 via-transparent to-transparent"></div>
              {/* Radial gradient - focused protection around text area */}
              <div className="absolute inset-y-0 left-0 right-1/2 bg-gradient-to-r from-brand-secondary/70 to-transparent"></div>
            </div>
          </>
        )}

        {/* Content overlay */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-end">
          <div className="max-w-2xl space-y-6 pb-16 md:pb-20 lg:pb-24 w-full">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300">
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <span className="text-xs text-white/70 tracking-wide">
                  {badge}
                </span>
              </div>
            )}
            
            <div className="space-y-6 max-w-2xl">
              <div className="relative inline-block">
                {/* Backdrop glow for better visibility */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/20 via-brand-highlight/20 to-brand-accent/20 blur-3xl opacity-60 rounded-3xl" />
                
                <Typography.DisplayLarge className="relative leading-[1.1] text-white" style={{
                  textShadow: '0 0 80px rgba(255, 127, 80, 0.6), 0 0 40px rgba(218, 165, 32, 0.5), 0 4px 30px rgba(0, 0, 0, 0.9), 0 2px 15px rgba(0, 0, 0, 1), 0 8px 40px rgba(255, 127, 80, 0.3)'
                }}>
                  {headline}
                </Typography.DisplayLarge>
              </div>
              
              <Typography.BodyLarge className="text-brand-neutral-800 leading-[1.7] max-w-xl drop-shadow-xl">
                {description}
              </Typography.BodyLarge>
            </div>
            
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
                    className="shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300"
                  >
                    {action.text}
                  </Button>
                ))}
              </div>
            )}

            {/* Trust Indicators */}
            {trustIndicators && trustIndicators.length > 0 && (
              <div className="pt-8 border-t border-brand-neutral-700/30">
                <div className="flex flex-wrap items-center gap-8 lg:gap-10">
                  {trustIndicators.map((indicator, index) => {
                    const Icon = indicator.icon;
                    // Semantic colors for each indicator type
                    const isSecurityIndicator = indicator.text.toLowerCase().includes('soc') || indicator.text.toLowerCase().includes('compliant');
                    const isNonProfitIndicator = indicator.text.toLowerCase().includes('non-profit') || indicator.text.toLowerCase().includes('501');
                    const isSupportIndicator = indicator.text.toLowerCase().includes('support') || indicator.text.toLowerCase().includes('24');
                    
                    let iconColor = 'text-brand-neutral-600';
                    let bgColor = 'bg-brand-neutral-600/15';
                    let borderColor = 'border-brand-neutral-600/30';
                    let hoverBgColor = 'group-hover:bg-brand-neutral-600/20';
                    
                    if (isNonProfitIndicator) {
                      // Green for non-profit = sustainability, trust, mission-driven
                      iconColor = 'text-brand-success-light';
                      bgColor = 'bg-brand-success/15';
                      borderColor = 'border-brand-success/30';
                      hoverBgColor = 'group-hover:bg-brand-success/20';
                    } else if (isSecurityIndicator) {
                      // Accent color for security = professional, certified
                      iconColor = 'text-brand-accent-light';
                      bgColor = 'bg-brand-accent/10';
                      borderColor = 'border-brand-accent/25';
                      hoverBgColor = 'group-hover:bg-brand-accent/15';
                    }
                    
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 group cursor-default"
                      >
                        <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${bgColor} backdrop-blur-sm border ${borderColor} shadow-xl ${hoverBgColor} group-hover:scale-105 transition-all duration-300`}>
                          <Icon className={`w-4.5 h-4.5 ${iconColor} drop-shadow-lg`} />
                        </div>
                        <span className="text-sm text-brand-neutral-700 drop-shadow-lg tracking-wide group-hover:text-brand-neutral-600 transition-colors duration-300">
                          {indicator.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
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