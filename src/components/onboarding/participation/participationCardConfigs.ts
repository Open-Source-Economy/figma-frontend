import { Coins, Heart, Users, Zap } from 'lucide-react';
import { ParticipationCardConfig } from './ParticipationCard';

/**
 * Configuration for all participation card options
 */
export const participationCardConfigs: Record<string, ParticipationCardConfig> = {
  service_provider: {
    title: 'Service Provider',
    description: 'Provide services to enterprises and your earnings automatically fund both visible and invisible open source work across the ecosystem',
    icon: Zap,
    features: [
      'Earn from enterprise contracts',
      'Fund your project\'s pot',
      'Support dependencies automatically',
      'Governance rights included'
    ],
    colorScheme: {
      primary: 'brand-accent',
      primaryDark: 'brand-accent-dark'
    }
  },
  common_pot: {
    title: 'Common Pot Participant',
    description: 'Receive funding from service providers to support your community work and open source contributions',
    icon: Coins,
    features: [
      'Funded by enterprise contracts',
      'Focus on your open source work',
      'Support unfunded critical projects'
    ],
    colorScheme: {
      primary: 'brand-accent',
      primaryDark: 'brand-accent-dark'
    }
  },
  individual_donation: {
    title: 'Individual Donation',
    description: 'Accept individual donations directly from supporters who value your open source work',
    icon: Heart,
    features: [
      'Receive direct financial support',
      'Build a community of supporters',
      'Transparent donation tracking'
    ],
    colorScheme: {
      primary: 'brand-highlight',
      primaryDark: 'brand-highlight-dark'
    }
  },
  community_supporter: {
    title: 'Community Supporter',
    description: 'Support the open source community through non-financial contributions and lend credibility to funding efforts',
    icon: Users,
    features: [
      'Provide PR reviews and feedback',
      'Participate in mentoring and brainstorming',
      'Increase credibility with your endorsement'
    ],
    colorScheme: {
      primary: 'brand-success',
      primaryDark: 'brand-success-dark'
    }
  }
};
