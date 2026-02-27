import React, { useState } from 'react';
import { ChevronDown, ChevronRight, LucideIcon, Edit, Trash2 } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { DeveloperService, Project, ServiceType } from '../../types/DeveloperOnboarding';
import { Button } from '../ui/button';

interface CollapsibleServiceCategoryProps {
  category: ServiceType;
  categoryLabel: string;
  services: DeveloperService[];
  projects: Project[];
  currency: string;
  formatCurrency: (amount: number, currency: string) => string;
  formatResponseTime: (hours?: number) => string;
  icon?: LucideIcon;
  iconColor?: string;
  defaultExpanded?: boolean;
  onEditService?: (serviceId: string) => void;
  onRemoveService?: (serviceId: string) => void;
  showActions?: boolean;
}

export function CollapsibleServiceCategory({
  category,
  categoryLabel,
  services,
  projects,
  currency,
  formatCurrency,
  formatResponseTime,
  icon: Icon,
  iconColor = 'text-brand-accent',
  defaultExpanded = false,
  onEditService,
  onRemoveService,
  showActions = false,
}: CollapsibleServiceCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (services.length === 0) return null;

  return (
    <div className="rounded-lg overflow-hidden bg-brand-card-blue/20 border border-brand-neutral-300/30">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-brand-card-blue/30 transition-colors cursor-pointer group"
      >
        <div className="flex items-center gap-2.5">
          {Icon && <Icon className={`h-4 w-4 ${iconColor}`} />}
          <span className="text-brand-neutral-900 text-sm">{categoryLabel}</span>
          <span className="text-xs text-brand-neutral-500">
            {services.length}
          </span>
        </div>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-neutral-700 transition-colors" />
        ) : (
          <ChevronRight className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-neutral-700 transition-colors" />
        )}
      </button>

      {/* Services List */}
      {isExpanded && (
        <div className="px-3 pb-2 space-y-0.5">
          {services.map((service) => (
            <div key={service.id} className="relative group">
              <ServiceCard
                service={service}
                projects={projects}
                currency={currency}
                formatCurrency={formatCurrency}
                formatResponseTime={formatResponseTime}
              />
              {showActions && (onEditService || onRemoveService) && (
                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  {onEditService && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2"
                      onClick={() => onEditService(service.id)}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  )}
                  {onRemoveService && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 px-2 text-red-600 hover:text-red-700"
                      onClick={() => onRemoveService(service.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}