import { MessageSquare, Handshake, Heart, type LucideIcon } from 'lucide-react';

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: MessageSquare,
    title: 'Connect',
    description: 'Chat directly with maintainers under NDA protection. Get expert consultation from the people who built the tools you use.',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    description: 'Receive consultancy, support, and custom code solutions. Work together to solve your specific challenges.',
  },
  {
    icon: Heart,
    title: 'Support',
    description: 'Your investment flows back to sustain projects. Ensure the long-term viability of your dependencies.',
  },
];

export const howItWorksFeatures: string[] = [
  'Easy payment processing',
  'Full transparency',
  'NDA protection',
  '100% open source output code',
];
