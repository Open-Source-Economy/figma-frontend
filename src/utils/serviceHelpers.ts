/**
 * Utility functions for service data formatting
 */

import { 
  Headphones, 
  Code2, 
  Lightbulb, 
  Shield, 
  MessageSquare,
  LucideIcon
} from 'lucide-react';
import { ServiceType } from '../types/DeveloperOnboarding';

export const getServiceTypeIcon = (type: ServiceType): LucideIcon => {
  const icons: Record<ServiceType, LucideIcon> = {
    support: Headphones,
    development: Code2,
    advisory: Lightbulb,
    security_and_compliance: Shield,
    custom: MessageSquare,
  };
  return icons[type] || MessageSquare;
};
