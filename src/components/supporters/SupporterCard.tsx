import React from 'react';
import { Badge } from '../ui/badge';
import { LucideIcon, ExternalLink } from 'lucide-react';

interface SupporterCardProps {
  name: string;
  displayName?: string;
  domain?: string;
  description?: string;
  contribution?: string;
  badge?: string;
  tagline?: string;
  since?: string;
  ctaText?: string;
  ctaUrl?: string;
  tier: string;
  icon: LucideIcon;
  accentColor: string;
  size?: 'default' | 'small' | 'medium' | 'large' | 'xlarge';
  variant?: 'featured' | 'standard';
  onClick?: () => void;
}

const sizeConfigs = {
  default: {
    cardPadding: 'px-6 py-4',
    cardWidth: 'w-64',
    textSize: 'text-base',
    iconSize: 'h-5 w-5',
    iconPadding: 'p-2',
    descriptionSize: 'text-xs',
    descriptionLines: 1,
    logoSize: 'h-10 w-10'
  },
  small: {
    cardPadding: 'px-6 py-5',
    cardWidth: 'w-72',
    textSize: 'text-lg',
    iconSize: 'h-6 w-6',
    iconPadding: 'p-2.5',
    descriptionSize: 'text-xs',
    descriptionLines: 2,
    logoSize: 'h-12 w-12'
  },
  medium: {
    cardPadding: 'px-8 py-6',
    cardWidth: 'w-80',
    textSize: 'text-xl',
    iconSize: 'h-7 w-7',
    iconPadding: 'p-3',
    descriptionSize: 'text-sm',
    descriptionLines: 2,
    logoSize: 'h-12 w-12'
  },
  large: {
    cardPadding: 'px-10 py-8',
    cardWidth: 'w-[360px]',
    textSize: 'text-2xl',
    iconSize: 'h-8 w-8',
    iconPadding: 'p-3.5',
    descriptionSize: 'text-sm',
    descriptionLines: 3,
    logoSize: 'h-12 w-12'
  },
  xlarge: {
    cardPadding: 'px-12 py-10',
    cardWidth: 'w-[420px]',
    textSize: 'text-3xl',
    iconSize: 'h-10 w-10',
    iconPadding: 'p-4',
    descriptionSize: 'text-base',
    descriptionLines: 4,
    logoSize: 'h-12 w-12'
  }
};

export function SupporterCard({
  name,
  displayName,
  domain,
  description,
  contribution,
  badge,
  tagline,
  since,
  ctaText,
  ctaUrl,
  tier,
  icon: Icon,
  accentColor,
  size = 'default',
  variant = 'standard',
  onClick
}: SupporterCardProps) {
  const sizeConfig = sizeConfigs[size];
  const showCTA = ctaText && ctaUrl && (size === 'large' || size === 'xlarge');
  const showTagline = tagline && (size === 'large' || size === 'xlarge');

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (domain) {
      window.open(`https://${domain}`, '_blank', 'noopener,noreferrer');
    }
  };

  const getBorderColorClass = () => {
    // Convert hex color to Tailwind-compatible border
    return 'border-brand-neutral-300';
  };

  return (
    <div
      className={`bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border ${getBorderColorClass()} rounded-2xl ${sizeConfig.cardPadding} hover:scale-[1.02] hover:shadow-2xl relative group ${sizeConfig.cardWidth} transition-all duration-500 ease-out overflow-hidden ${onClick || domain ? 'cursor-pointer' : ''}`}
      style={{
        boxShadow: variant === 'featured' 
          ? `0 10px 40px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05) inset, 0 0 30px -10px ${accentColor}15`
          : undefined,
        borderTopColor: variant === 'standard' ? accentColor : undefined,
        borderTopWidth: variant === 'standard' ? '4px' : undefined
      }}
      onClick={handleClick}
    >
      {/* Background gradient overlay */}
      <div 
        className={`absolute inset-0 opacity-[0.03] pointer-events-none ${variant === 'featured' ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, transparent 50%)`
        }}
      />
      
      {/* Left border accent */}
      {variant === 'standard' && (
        <div 
          className="absolute left-0 top-0 bottom-0 w-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: `linear-gradient(180deg, ${accentColor} 0%, transparent 100%)`
          }}
        />
      )}
      
      {/* Hover icon in bottom right */}
      {variant === 'standard' && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-20 transition-all duration-300 z-0">
          <Icon className="h-8 w-8" style={{ color: accentColor }} />
        </div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 ${variant === 'featured' ? '' : 'flex flex-col items-center gap-5'}`}>
        {/* Header section for featured variant */}
        {variant === 'featured' && (
          <div className="flex items-start justify-between mb-4">
            <div 
              className="p-3 rounded-xl border"
              style={{
                backgroundColor: `${accentColor}0D`, // 5% opacity
                borderColor: `${accentColor}4D` // 30% opacity
              }}
            >
              <Icon className={`w-6 h-6`} style={{ color: accentColor }} />
            </div>
            {since && (
              <span className="text-xs text-brand-neutral-500 bg-brand-neutral-200/50 px-3 py-1 rounded-full">
                Since {since}
              </span>
            )}
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className={`${variant === 'featured' ? 'mb-3' : 'w-full flex justify-center -mt-2 mb-1'}`}>
            <SupporterCardBadge badge={badge} tier={tier} accentColor={accentColor} size={size} />
          </div>
        )}
        
        {/* Logo and Name */}
        {variant === 'standard' && domain ? (
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="flex-shrink-0">
              <img
                src={`https://logo.clearbit.com/${domain}`}
                alt={`${name} logo`}
                className={`${sizeConfig.logoSize} object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div 
                className={`${sizeConfig.logoSize} rounded-lg bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 border border-brand-neutral-300 flex items-center justify-center`}
                style={{ display: 'none' }}
              >
                <span className="text-brand-neutral-900">
                  {name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="relative">
              <p 
                className={`text-brand-neutral-900 ${sizeConfig.textSize} relative group-hover:text-brand-neutral-950 transition-colors`}
                style={{ lineHeight: '1.3' }}
              >
                {name}
              </p>
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  transform: 'translateY(8px)',
                  background: `linear-gradient(90deg, ${accentColor}, transparent)`
                }}
              />
            </div>
          </div>
        ) : (
          <h3 
            className={`${sizeConfig.textSize} tracking-widest text-brand-neutral-800 group-hover:text-brand-neutral-950 transition-colors duration-300 ${variant === 'featured' ? 'mb-3' : ''}`}
          >
            {displayName || name}
          </h3>
        )}

        {/* Tagline */}
        {showTagline && (
          <div className="w-full flex justify-center">
            {size === 'xlarge' ? (
              <p 
                className="text-sm italic text-center px-4 py-2 rounded-lg"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}10, transparent)`,
                  color: accentColor
                }}
              >
                {tagline}
              </p>
            ) : (
              <p className="text-xs italic text-brand-neutral-600 text-center px-2">
                {tagline}
              </p>
            )}
          </div>
        )}
        
        {/* Description or Contribution */}
        {(description || contribution) && (
          <p 
            className={`text-brand-neutral-600 ${sizeConfig.descriptionSize} ${variant === 'featured' ? 'mb-4' : 'text-center'} leading-relaxed w-full`}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: sizeConfig.descriptionLines,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {description || contribution}
          </p>
        )}
        
        {/* Tier Badge for featured variant */}
        {variant === 'featured' && badge && (
          <Badge 
            variant="outline" 
            className="bg-opacity-20 border-opacity-40"
            style={{
              backgroundColor: `${accentColor}33`,
              borderColor: `${accentColor}66`,
              color: accentColor
            }}
          >
            {badge}
          </Badge>
        )}

        {/* CTA Link */}
        {showCTA && (
          <div 
            className="w-full flex justify-center mt-1"
            onClick={(e) => {
              e.stopPropagation();
              if (ctaUrl) window.open(ctaUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            {size === 'xlarge' ? (
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group/cta"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                  border: `1px solid ${accentColor}40`
                }}
              >
                <span className="text-xs" style={{ color: accentColor }}>
                  {ctaText}
                </span>
                <ExternalLink 
                  className="h-3.5 w-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" 
                  style={{ color: accentColor }} 
                />
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 text-xs text-brand-neutral-600 hover:text-brand-neutral-800 transition-colors cursor-pointer group/cta">
                <span>{ctaText}</span>
                <ExternalLink className="h-3 w-3 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Corner accent */}
      <div 
        className={`absolute ${variant === 'featured' ? 'top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-3xl group-hover:opacity-10' : 'top-0 right-0 w-16 h-16 opacity-15 rounded-tr-2xl'} pointer-events-none transition-opacity duration-500`}
        style={{
          background: variant === 'featured' 
            ? accentColor 
            : `linear-gradient(225deg, ${accentColor}60 0%, transparent 70%)`
        }}
      />
    </div>
  );
}

interface SupporterCardBadgeProps {
  badge: string;
  tier: string;
  accentColor: string;
  size: string;
}

function SupporterCardBadge({ badge, tier, accentColor, size }: SupporterCardBadgeProps) {
  if (size === 'xlarge' && tier === 'Platinum') {
    return (
      <div 
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl transition-all duration-300 group-hover:shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40, ${accentColor}20)`,
          border: `1.5px solid ${accentColor}60`,
          boxShadow: `0 0 25px -5px ${accentColor}50, 0 10px 20px -10px ${accentColor}30`
        }}
      >
        <span className="text-brand-neutral-800 tracking-wide uppercase text-[10px]" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          {badge}
        </span>
      </div>
    );
  }
  
  if (size === 'large' && tier === 'Gold') {
    return (
      <div 
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-sm border shadow-md transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${accentColor}25, ${accentColor}15)`,
          borderColor: `${accentColor}50`
        }}
      >
        <span className="text-brand-neutral-700 tracking-wide text-[10px] uppercase">{badge}</span>
      </div>
    );
  }
  
  if (size === 'medium' && tier === 'Silver') {
    return (
      <div 
        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] border backdrop-blur-sm"
        style={{
          background: `${accentColor}12`,
          borderColor: `${accentColor}35`
        }}
      >
        <span className="text-brand-neutral-600 uppercase tracking-wide">{badge}</span>
      </div>
    );
  }

  // Default badge
  return (
    <Badge 
      variant="outline" 
      className="text-xs"
      style={{
        backgroundColor: `${accentColor}20`,
        borderColor: `${accentColor}40`,
        color: accentColor
      }}
    >
      {badge}
    </Badge>
  );
}
