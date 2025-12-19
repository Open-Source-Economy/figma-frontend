import React from 'react';
import { Youtube } from 'lucide-react';

export function VideoMessage() {
  return (
    <div className="mb-6">
      <div className="text-center mb-3">
        <p className="inline-flex items-center gap-2 text-sm bg-brand-accent/10 border border-brand-accent/30 rounded-full px-4 py-2">
          <Youtube className="h-4 w-4 text-brand-accent" />
          <span className="text-brand-neutral-900">A personal message for you</span>
        </p>
      </div>
      <div className="aspect-video bg-brand-navy/50 rounded-lg overflow-hidden border border-brand-neutral-300">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Thank You Message from Open Source Economy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
