import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';

interface InfoTooltipProps {
  content: React.ReactNode;
  description?: React.ReactNode;
  link?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function InfoTooltip({ content, description, link, className = '' }: InfoTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button 
          type="button"
          className={`inline-flex items-center justify-center shrink-0 ${className}`}
          aria-label="More information"
        >
          <Info className="w-3.5 h-3.5 text-brand-neutral-400 hover:text-brand-accent transition-colors" />
        </button>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="max-w-[220px] bg-brand-card-blue-dark text-brand-neutral-800 shadow-xl px-3 py-2 border border-brand-neutral-300/30"
        sideOffset={6}
      >
        {description ? (
          <div className="space-y-1.5">
            <p className="text-[11px] leading-snug text-brand-neutral-900">{content}</p>
            <p className="text-[10px] leading-snug text-brand-neutral-600">{description}</p>
            {link && (
              <a 
                href={link.href} 
                className="block text-[10px] leading-snug text-brand-accent hover:text-brand-accent-light underline hover:no-underline transition-all" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            )}
          </div>
        ) : (
          <div className="space-y-1.5">
            <p className="text-[11px] leading-snug text-brand-neutral-900">{content}</p>
            {link && (
              <a 
                href={link.href} 
                className="block text-[10px] leading-snug text-brand-accent hover:text-brand-accent-light underline hover:no-underline transition-all" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            )}
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  );
}