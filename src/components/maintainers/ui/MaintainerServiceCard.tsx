import React from 'react';
import { LucideIcon, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { Badge } from '../../ui/badge';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  baseRate: number;
  availability: 'available' | 'limited' | 'unavailable';
  responseTime?: string;
  minHours?: number;
}

interface MaintainerServiceCardProps {
  service: Service;
  categoryIcon: LucideIcon;
  availabilityColor: string;
  className?: string;
}

/**
 * MaintainerServiceCard - Displays a single service offered by a maintainer
 * Shows service details, pricing, availability, and response time
 */
export const MaintainerServiceCard: React.FC<MaintainerServiceCardProps> = ({
  service,
  categoryIcon: Icon,
  availabilityColor,
  className = '',
}) => {
  const availabilityIcon = 
    service.availability === 'available' ? CheckCircle2 :
    service.availability === 'limited' ? AlertCircle : XCircle;
  const AvailIcon = availabilityIcon;

  return (
    <div
      className={`bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-3 hover:border-brand-accent/50 transition-all ${className}`}
    >
      <div className="flex items-start gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4 text-brand-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-brand-neutral-900 mb-0.5 leading-tight">
            {service.name}
          </h4>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge 
              variant="outline"
              className={`text-xs bg-brand-${availabilityColor}/10 text-brand-${availabilityColor} border-brand-${availabilityColor}/30`}
            >
              <AvailIcon className="h-3 w-3 mr-1" />
              {service.availability === 'available' ? 'Available' : 
               service.availability === 'limited' ? 'Limited' : 'Unavailable'}
            </Badge>
            {service.responseTime && (
              <span className="text-xs text-brand-neutral-500">
                {service.responseTime} response
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-brand-neutral-600 text-sm mb-3">
        {service.description}
      </p>

      <div className="flex items-baseline justify-between">
        <div>
          <span className="text-brand-neutral-900">${service.baseRate}</span>
          <span className="text-brand-neutral-600 text-sm">/hour</span>
        </div>
        {service.minHours && (
          <span className="text-brand-neutral-500 text-xs">
            Min. {service.minHours}h
          </span>
        )}
      </div>
    </div>
  );
};
