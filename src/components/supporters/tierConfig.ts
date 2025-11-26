import { 
  Heart, 
  Building2, 
  Users, 
  Sparkles, 
  Star, 
  Award, 
  Crown,
  LucideIcon 
} from 'lucide-react';

export interface TierConfig {
  label: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  bgColor: string;
  badgeClass: string;
}

export type TierType = 
  | 'founding' 
  | 'enterprise' 
  | 'partner' 
  | 'community'
  | 'platinum'
  | 'gold'
  | 'silver'
  | 'bronze';

export function getTierConfig(tier: string): TierConfig {
  const normalizedTier = tier.toLowerCase() as TierType;
  
  switch (normalizedTier) {
    case 'founding':
      return {
        label: 'Founding Supporter',
        icon: Heart,
        color: 'text-brand-success',
        borderColor: 'border-brand-success/30',
        bgColor: 'bg-brand-success/5',
        badgeClass: 'bg-brand-success/20 text-brand-success border-brand-success/40'
      };
    
    case 'enterprise':
      return {
        label: 'Enterprise Partner',
        icon: Building2,
        color: 'text-brand-highlight',
        borderColor: 'border-brand-highlight/30',
        bgColor: 'bg-brand-highlight/5',
        badgeClass: 'bg-brand-highlight/20 text-brand-highlight border-brand-highlight/40'
      };
    
    case 'partner':
      return {
        label: 'Strategic Partner',
        icon: Sparkles,
        color: 'text-brand-accent',
        borderColor: 'border-brand-accent/30',
        bgColor: 'bg-brand-accent/5',
        badgeClass: 'bg-brand-accent/20 text-brand-accent border-brand-accent/40'
      };
    
    case 'community':
      return {
        label: 'Community Supporter',
        icon: Users,
        color: 'text-brand-primary',
        borderColor: 'border-brand-primary/30',
        bgColor: 'bg-brand-primary/5',
        badgeClass: 'bg-brand-primary/20 text-brand-primary border-brand-primary/40'
      };

    case 'platinum':
      return {
        label: 'Platinum Supporter',
        icon: Crown,
        color: 'text-brand-success',
        borderColor: 'border-brand-success/30',
        bgColor: 'bg-brand-success/5',
        badgeClass: 'bg-brand-success/20 text-brand-success border-brand-success/40'
      };

    case 'gold':
      return {
        label: 'Gold Supporter',
        icon: Award,
        color: 'text-brand-highlight',
        borderColor: 'border-brand-highlight/30',
        bgColor: 'bg-brand-highlight/5',
        badgeClass: 'bg-brand-highlight/20 text-brand-highlight border-brand-highlight/40'
      };

    case 'silver':
      return {
        label: 'Silver Supporter',
        icon: Star,
        color: 'text-brand-accent',
        borderColor: 'border-brand-accent/30',
        bgColor: 'bg-brand-accent/5',
        badgeClass: 'bg-brand-accent/20 text-brand-accent border-brand-accent/40'
      };

    case 'bronze':
      return {
        label: 'Bronze Supporter',
        icon: Sparkles,
        color: 'text-brand-primary',
        borderColor: 'border-brand-primary/30',
        bgColor: 'bg-brand-primary/5',
        badgeClass: 'bg-brand-primary/20 text-brand-primary border-brand-primary/40'
      };
    
    default:
      return {
        label: 'Supporter',
        icon: Heart,
        color: 'text-brand-primary',
        borderColor: 'border-brand-primary/30',
        bgColor: 'bg-brand-primary/5',
        badgeClass: 'bg-brand-primary/20 text-brand-primary border-brand-primary/40'
      };
  }
}

// Helper to extract the raw color hex value from CSS variable name
export function getAccentColor(tier: string): string {
  const normalized = tier.toLowerCase();
  switch (normalized) {
    case 'founding':
    case 'platinum':
      return '#10b981'; // brand-success
    case 'enterprise':
    case 'gold':
      return '#daa520'; // brand-highlight
    case 'partner':
    case 'silver':
      return '#ff7f50'; // brand-accent
    case 'community':
    case 'bronze':
      return '#3b82f6'; // brand-primary
    default:
      return '#3b82f6'; // brand-primary
  }
}

export function getTierOrder(tierName: string): number {
  const normalized = tierName.toLowerCase();
  switch (normalized) {
    case 'founding':
    case 'platinum': 
      return 1;
    case 'enterprise':
    case 'gold': 
      return 2;
    case 'partner':
    case 'silver': 
      return 3;
    case 'community':
    case 'bronze': 
      return 4;
    default: 
      return 999;
  }
}

export function getSizeFromTier(tierName: string): 'default' | 'small' | 'medium' | 'large' | 'xlarge' {
  const normalized = tierName.toLowerCase();
  switch (normalized) {
    case 'founding':
    case 'platinum':
      return 'xlarge';
    case 'enterprise':
    case 'gold':
      return 'large';
    case 'partner':
    case 'silver':
      return 'medium';
    case 'community':
    case 'bronze':
      return 'small';
    default:
      return 'default';
  }
}