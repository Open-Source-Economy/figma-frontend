import React, { ReactNode } from 'react';

interface TimelineStepProps {
  stepNumber: number;
  difficulty: 'easy' | 'medium' | 'hard';
  title: string;
  description: string | ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBorderColor: string;
  hoverBgColor: string;
  connectorColor: string;
  children: ReactNode;
  isLast?: boolean;
  showPrewrittenBadge?: boolean;
}

export function TimelineStep({
  stepNumber,
  difficulty,
  title,
  description,
  color,
  bgColor,
  borderColor,
  hoverBorderColor,
  hoverBgColor,
  connectorColor,
  children,
  isLast = false,
  showPrewrittenBadge = false
}: TimelineStepProps) {
  const difficultyLabels = {
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard 🔥'
  };

  const difficultyStyles = {
    easy: 'bg-brand-success text-white',
    medium: 'bg-brand-accent text-white',
    hard: 'bg-gradient-to-r from-brand-highlight to-orange-600 text-white'
  };

  return (
    <div className={`relative ${!isLast ? 'mb-8' : ''}`}>
      <div className="flex items-start gap-4 mb-3">
        <div className="flex-shrink-0 flex flex-col items-center relative z-10 w-10">
          <div className={`w-10 h-10 rounded-full ${bgColor} text-white flex items-center justify-center shadow-md border-4 border-brand-card-blue`}>
            <span className="text-lg">{stepNumber}</span>
          </div>
          <div className={`${difficultyStyles[difficulty]} text-[10px] px-2 py-0.5 rounded-full text-center uppercase tracking-wide whitespace-nowrap mt-1.5`}>
            {difficultyLabels[difficulty]}
          </div>
        </div>
        
        {/* Horizontal connector line */}
        <div className={`absolute left-10 top-5 w-4 h-0.5 ${connectorColor}`} />
        
        <div className="flex-1 pt-2">
          <h4 className="text-brand-neutral-900 mb-1">{title}</h4>
          <p className="text-brand-neutral-500 text-xs leading-relaxed">
            {description}
          </p>
          {showPrewrittenBadge && (
            <div className="mt-2">
              <span className="inline-flex items-center gap-1.5 bg-brand-highlight/10 border border-brand-highlight/30 rounded-full px-3 py-1 text-[10px] text-brand-neutral-700">
                <span className="text-brand-highlight">✍️</span>
                <span>We've pre-written the message for you</span>
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="ml-14">
        {children}
      </div>
    </div>
  );
}