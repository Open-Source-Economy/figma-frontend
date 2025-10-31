import React from 'react';
import { Play } from 'lucide-react';

interface VideoExplanationProps {
  title?: string;
  description?: string;
  videoId: string;
  className?: string;
}

/**
 * VideoExplanation - A reusable component for embedding YouTube videos
 * Following DRY principles for consistent video presentation
 * Features responsive aspect ratio and premium dark theme styling
 */
export const VideoExplanation: React.FC<VideoExplanationProps> = ({
  title = "Watch Our Explainer Video",
  description = "See how Open Source Economy connects enterprises with expert maintainers in just a few minutes.",
  videoId,
  className = ''
}) => {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-highlight/10 rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
            <Play className="w-4 h-4 text-brand-accent-light" />
            <span className="text-brand-accent-light text-sm">Video Overview</span>
          </div>
          <h2 className="text-brand-neutral-950 mb-4">{title}</h2>
          <p className="text-brand-neutral-700 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          {/* Glow effect on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 via-brand-highlight/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Video Frame */}
          <div className="relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300/40 rounded-2xl p-2 overflow-hidden">
            {/* 16:9 Aspect Ratio Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Open Source Economy Explainer Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Optional Call-to-Action below video */}
        <div className="mt-8 text-center">
          <p className="text-brand-neutral-600 text-sm">
            Have questions? <button className="text-brand-accent hover:text-brand-accent-light transition-colors">Contact our team</button>
          </p>
        </div>
      </div>
    </section>
  );
};
