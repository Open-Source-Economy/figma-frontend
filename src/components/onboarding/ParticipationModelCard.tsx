import React from 'react';
import { Badge } from '../ui/badge';
import { ParticipationSelectionState } from '../../types/DeveloperOnboarding';

interface ParticipationModelCardProps {
  title: string;
  description: string;
  colorScheme: 'accent' | 'highlight' | 'primary' | 'success';
  selectionState?: ParticipationSelectionState;
}

const colorClasses = {
  accent: {
    border: 'border-brand-accent/30',
    badge: 'bg-brand-accent/20 border-brand-accent/30 text-brand-accent'
  },
  highlight: {
    border: 'border-brand-highlight/30',
    badge: 'bg-brand-highlight/20 border-brand-highlight/30 text-brand-highlight'
  },
  primary: {
    border: 'border-brand-primary/30',
    badge: 'bg-brand-primary/20 border-brand-primary/30 text-brand-primary'
  },
  success: {
    border: 'border-brand-success/30',
    badge: 'bg-brand-success/20 border-brand-success/30 text-brand-success'
  }
};

const selectionStateConfig = {
  yes: {
    label: 'Yes',
    badge: 'bg-brand-success/20 border-brand-success/30 text-brand-success'
  },
  maybe: {
    label: 'Maybe Later',
    badge: 'bg-brand-warning/20 border-brand-warning/30 text-brand-warning'
  },
  not_interested: {
    label: 'Not Interested',
    badge: 'bg-brand-neutral-400/20 border-brand-neutral-400/30 text-brand-neutral-600'
  }
};

export function ParticipationModelCard({ title, description, colorScheme, selectionState }: ParticipationModelCardProps) {
  const colors = colorClasses[colorScheme];
  const stateConfig = selectionState ? selectionStateConfig[selectionState] : null;
  
  return (
    <div className={`border-l-2 ${colors.border} pl-3 py-2.5 my-2 transition-colors hover:bg-brand-neutral-100/50`}>
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <h4 className="text-brand-neutral-900 text-sm">
          {title}
        </h4>
        {stateConfig && (
          <Badge 
            variant="outline" 
            className={`${stateConfig.badge} text-xs px-2 py-0.5 self-center`}
          >
            {stateConfig.label}
          </Badge>
        )}
      </div>
      <p className="text-brand-neutral-600 text-xs">
        {description}
      </p>
    </div>
  );
}