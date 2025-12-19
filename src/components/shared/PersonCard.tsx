import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

interface PersonCardProps {
  name: string;
  role: string;
  githubUrl: string;
  avatarUrl: string;
  project?: string;
  accentColor: 'brand-success' | 'brand-accent';
  variant: 'large' | 'small';
}

export function PersonCard({
  name,
  role,
  githubUrl,
  avatarUrl,
  project,
  accentColor,
  variant
}: PersonCardProps) {
  const isLarge = variant === 'large';
  
  const hoverBorderClass = accentColor === 'brand-success' 
    ? 'hover:border-brand-success' 
    : 'hover:border-brand-accent';
  
  const hoverBgClass = accentColor === 'brand-success' 
    ? 'hover:bg-brand-success/5' 
    : 'hover:bg-brand-accent/5';
  
  const borderClass = accentColor === 'brand-success' 
    ? 'border-brand-success/30 group-hover:border-brand-success' 
    : 'border-brand-accent/30 group-hover:border-brand-accent';
  
  const textHoverClass = accentColor === 'brand-success' 
    ? 'group-hover:text-brand-success' 
    : 'group-hover:text-brand-accent';

  if (isLarge) {
    return (
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center gap-2 p-3 rounded bg-brand-navy/20 border border-brand-neutral-300/50 ${hoverBorderClass} ${hoverBgClass} hover:shadow-lg transition-all group text-center no-underline cursor-pointer`}
      >
        <ImageWithFallback
          src={avatarUrl}
          alt={name}
          className={`w-12 h-12 rounded-full object-cover border ${borderClass} group-hover:shadow-md transition-all`}
        />
        <div className="w-full min-w-0">
          <div className="flex items-center justify-center gap-1">
            <div className={`text-brand-neutral-900 text-xs truncate ${textHoverClass} transition-colors`}>
              {name}
            </div>
            <ExternalLink className={`h-3 w-3 text-brand-neutral-400 ${textHoverClass} transition-colors flex-shrink-0`} />
          </div>
          <div className="text-brand-neutral-500 text-[10px] truncate">{role}</div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center gap-1 p-2 rounded bg-brand-navy/20 border border-brand-neutral-300/50 ${hoverBorderClass} ${hoverBgClass} transition-all group text-center no-underline cursor-pointer`}
    >
      <ImageWithFallback
        src={avatarUrl}
        alt={name}
        className={`w-10 h-10 rounded-full object-cover border ${borderClass} transition-all`}
      />
      <div className="w-full min-w-0">
        <div className={`text-brand-neutral-900 text-[11px] truncate ${textHoverClass} transition-colors leading-tight`}>
          {name}
        </div>
        {project && (
          <div className={`text-${accentColor} text-[9px] truncate leading-tight`}>
            {project}
          </div>
        )}
      </div>
    </a>
  );
}
