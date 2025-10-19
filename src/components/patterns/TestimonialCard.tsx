import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  backgroundImage?: string;
  category: 'developer' | 'enterprise';
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  backgroundImage,
  category,
  className = ''
}: TestimonialCardProps) {
  // Default background images based on category if not provided
  const defaultBackgrounds = {
    developer: 'https://images.unsplash.com/photo-1629885477352-9e48ac5719ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdGVyJTIwc3Vuc2V0fGVufDF8fHx8MTc1OTkzODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    enterprise: 'https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc1OTkxNjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  };

  const bgImage = backgroundImage || defaultBackgrounds[category];

  return (
    <div className={`relative h-[400px] overflow-hidden rounded-2xl group ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/60 via-brand-secondary/75 to-brand-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-12">
        {/* Avatar - Circular and Prominent */}
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <ImageWithFallback
              src={avatar || "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTkzNjkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-brand-neutral-950 text-lg leading-relaxed mb-6 max-w-2xl">
          "{quote}"
        </blockquote>

        {/* Author Info */}
        <div className="space-y-1">
          <div className="text-brand-neutral-950">{author}</div>
          <div className="text-sm text-brand-neutral-700 uppercase tracking-wider">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
