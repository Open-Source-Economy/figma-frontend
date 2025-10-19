import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Star, Download, Calendar, Scale, ExternalLink, Github } from 'lucide-react';

interface ProjectHeroProps {
  name: string;
  tagline: string;
  logo: string;
  category: string[];
  stats: {
    stars: number;
    downloads: string;
    version: string;
    license: string;
  };
  githubUrl: string;
  docsUrl: string;
  onScheduleConsultation?: () => void;
  onDonate?: () => void;
}

export function ProjectHero({
  name,
  tagline,
  logo,
  category,
  stats,
  githubUrl,
  docsUrl,
  onScheduleConsultation,
  onDonate
}: ProjectHeroProps) {
  return (
    <div className="bg-gradient-to-br from-brand-secondary via-brand-card-blue to-brand-secondary-dark border-b border-brand-neutral-300">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-8xl">{logo}</div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>

            {/* Title & Tagline */}
            <h1 className="text-brand-neutral-950 mb-3">{name}</h1>
            <p className="text-brand-neutral-600 mb-6 max-w-2xl">
              {tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Button size="lg" onClick={onScheduleConsultation}>
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" onClick={onDonate}>
                Support This Project
              </Button>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-neutral-500 hover:text-brand-neutral-700 transition-colors text-sm"
              >
                <Github className="h-3.5 w-3.5" />
                <span>View on GitHub</span>
              </a>
              <a 
                href={docsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-neutral-500 hover:text-brand-neutral-700 transition-colors text-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Documentation</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-brand-neutral-700">
                <Star className="h-4 w-4 text-brand-warning" />
                <span>{(stats.stars / 1000).toFixed(0)}k stars</span>
              </div>
              <div className="flex items-center gap-2 text-brand-neutral-700">
                <Download className="h-4 w-4 text-brand-success" />
                <span>{stats.downloads}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-neutral-700">
                <Calendar className="h-4 w-4 text-brand-accent" />
                <span>v{stats.version}</span>
              </div>
              <div className="flex items-center gap-2 text-brand-neutral-700">
                <Scale className="h-4 w-4 text-brand-highlight" />
                <span>{stats.license}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}