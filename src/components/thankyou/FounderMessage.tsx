import React from 'react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FounderMessage() {
  return (
    <div className="mb-6 pb-6 border-b border-brand-neutral-300/50">
      <div className="text-center mb-3">
        <p className="text-brand-neutral-900 text-sm">
          <span className="text-brand-accent">•</span> A personal message for you
        </p>
      </div>
      <div className="flex gap-4 items-start">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGZvdW5kZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ4MTUzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Laurie-Anne Mollier"
          className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent/30 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-brand-neutral-900">Laurie-Anne Mollier</h3>
            <Sparkles className="h-4 w-4 text-brand-accent flex-shrink-0" />
          </div>
          <p className="text-brand-neutral-500 text-sm mb-3">Founder & Executive Director, Open Source Economy</p>
          <p className="text-brand-neutral-600 leading-relaxed italic">
            "Thank you from the bottom of my heart. Your support helps us secure sustainable funding for maintainers across the entire dependency tree. Together, we're building infrastructure that ensures the commons can thrive."
          </p>
        </div>
      </div>
    </div>
  );
}
