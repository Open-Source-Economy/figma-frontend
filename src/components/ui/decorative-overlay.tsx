import React from 'react';

interface DecorativeOverlayProps {
  variant?: 'primary-accent' | 'accent-success' | 'primary-success' | 'warm-gradient' | 'cool-gradient';
  opacity?: 'subtle' | 'medium' | 'visible';
  direction?: 'tl' | 'tr' | 'br' | 'bl' | 'tb' | 'lr';
  className?: string;
}

/**
 * DecorativeOverlay - Subtle gradient overlays for section backgrounds
 * Follows DRY principles and brand color system
 * 
 * @param variant - Color combination preset
 * @param opacity - Intensity of the gradient overlay
 * @param direction - Gradient direction (tl = top-left, tr = top-right, etc.)
 */
export function DecorativeOverlay({ 
  variant = 'warm-gradient',
  opacity = 'subtle',
  direction = 'tl',
  className = '' 
}: DecorativeOverlayProps) {
  
  const opacityMap = {
    subtle: '3',
    medium: '5',
    visible: '8'
  };
  
  const directionMap = {
    tl: 'bg-gradient-to-tl',
    tr: 'bg-gradient-to-tr',
    br: 'bg-gradient-to-br',
    bl: 'bg-gradient-to-bl',
    tb: 'bg-gradient-to-b',
    lr: 'bg-gradient-to-r'
  };
  
  const getGradientClasses = () => {
    const op = opacityMap[opacity];
    const dir = directionMap[direction];
    
    switch (variant) {
      case 'primary-accent':
        return `${dir} from-brand-primary/${op} via-transparent to-brand-accent/${op}`;
      case 'accent-success':
        return `${dir} from-brand-accent/${op} via-transparent to-brand-success/${op}`;
      case 'primary-success':
        return `${dir} from-brand-primary/${op} via-transparent to-brand-success/${op}`;
      case 'warm-gradient':
        // Warm palette: Sienna -> Coral -> Goldenrod
        return `${dir} from-brand-primary/${op} via-brand-accent/2 to-brand-highlight/${op}`;
      case 'cool-gradient':
        // Cool palette: Success green -> Accent purple
        return `${dir} from-brand-success/${op} via-transparent to-brand-accent/${op}`;
      default:
        return `${dir} from-brand-accent/${op} via-transparent to-brand-success/${op}`;
    }
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${getGradientClasses()} ${className}`}
      aria-hidden="true"
    />
  );
}
