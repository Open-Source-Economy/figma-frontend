import React from 'react';
import { Badge } from '../ui/badge';
import { MapPin, Code2, TrendingUp, ArrowRight } from 'lucide-react';
import { MaintainerProfile } from '../../data/maintainerProfileData';

interface MaintainerCardProps {
  profile: MaintainerProfile;
  onViewProfile?: (id: string) => void;
  compact?: boolean;
}

export function MaintainerCard({ profile, onViewProfile, compact = false }: MaintainerCardProps) {
  const averageRate = Math.round(
    profile.services.reduce((sum, s) => sum + s.baseRate, 0) / profile.services.length
  );

  const primaryProjects = profile.projects.filter(p => p.contributionLevel === 'primary');
  const topExpertise = profile.expertise.slice(0, compact ? 3 : 4);
  const topLanguages = profile.languages.slice(0, compact ? 3 : 4);

  return (
    <div 
      className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4 hover:border-brand-accent/50 transition-all cursor-pointer group"
      onClick={() => onViewProfile?.(profile.id)}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-16 h-16 rounded-lg overflow-hidden border border-brand-neutral-300 flex-shrink-0">
          <img 
            src={profile.avatarUrl} 
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-brand-neutral-900 group-hover:text-brand-accent transition-colors">
              {profile.name}
            </h3>
            <ArrowRight className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>
          <p className="text-brand-neutral-600 mb-2">
            {profile.title}
          </p>
        </div>
      </div>

      {/* Bio */}
      {!compact && (
        <p className="text-brand-neutral-700 text-sm mb-3 line-clamp-2">
          {profile.bio}
        </p>
      )}

      {/* Quick Stats */}
      <div className="flex flex-wrap gap-3 mb-3 text-sm">
        <div className="flex items-center gap-1.5 text-brand-neutral-600">
          <MapPin className="h-3.5 w-3.5" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-neutral-600">
          <Code2 className="h-3.5 w-3.5" />
          <span>{primaryProjects.length} primary {primaryProjects.length === 1 ? 'project' : 'projects'}</span>
        </div>
        <div className="flex items-center gap-1.5 text-brand-neutral-600">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>{profile.yearsInOpenSource} years</span>
        </div>
      </div>

      {/* Expertise */}
      <div className="mb-3">
        <div className="text-brand-neutral-700 text-sm mb-1.5">Expertise:</div>
        <div className="flex flex-wrap gap-1.5">
          {topExpertise.map((skill, idx) => (
            <Badge 
              key={idx} 
              variant="outline"
              className="bg-brand-accent/10 text-brand-accent border-brand-accent/30 text-xs"
            >
              {skill}
            </Badge>
          ))}
          {profile.expertise.length > topExpertise.length && (
            <Badge 
              variant="outline"
              className="bg-brand-neutral-300/20 text-brand-neutral-600 border-brand-neutral-300 text-xs"
            >
              +{profile.expertise.length - topExpertise.length} more
            </Badge>
          )}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-3">
        <div className="text-brand-neutral-700 text-sm mb-1.5">Languages:</div>
        <div className="flex flex-wrap gap-1.5">
          {topLanguages.map((lang, idx) => (
            <Badge 
              key={idx} 
              variant="outline"
              className="bg-brand-highlight/10 text-brand-highlight border-brand-highlight/30 text-xs"
            >
              {lang}
            </Badge>
          ))}
          {profile.languages.length > topLanguages.length && (
            <Badge 
              variant="outline"
              className="bg-brand-neutral-300/20 text-brand-neutral-600 border-brand-neutral-300 text-xs"
            >
              +{profile.languages.length - topLanguages.length}
            </Badge>
          )}
        </div>
      </div>

      {/* Services & Pricing */}
      <div className="pt-3 border-t border-brand-neutral-300">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-brand-neutral-700 text-sm">Starting from</div>
            <div className="flex items-baseline gap-1">
              <span className="text-brand-neutral-900">${averageRate}</span>
              <span className="text-brand-neutral-600 text-sm">/hour</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-brand-neutral-700 text-sm">{profile.services.length} services</div>
            <Badge 
              variant="outline"
              className="bg-brand-success/10 text-brand-success border-brand-success/30 text-xs mt-1"
            >
              Available
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
