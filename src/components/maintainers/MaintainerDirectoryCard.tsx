import React from 'react';
import { MaintainerDirectoryEntry } from '../../data/maintainersDirectoryData';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ShieldCheck, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface MaintainerDirectoryCardProps {
  maintainer: MaintainerDirectoryEntry;
  isAdmin?: boolean;
  onVerify?: (maintainerId: string) => void;
  onUnverify?: (maintainerId: string) => void;
  onViewProfile?: (maintainerId: string) => void;
}

/**
 * MaintainerDirectoryCard - Display maintainer information in directory
 * Following DRY principles for consistent maintainer card presentation
 */
export const MaintainerDirectoryCard: React.FC<MaintainerDirectoryCardProps> = ({
  maintainer,
  isAdmin = false,
  onVerify,
  onUnverify,
  onViewProfile
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'Core Team':
      case 'Admin':
        return 'bg-brand-accent/20 text-brand-accent border-brand-accent/30';
      case 'Maintainer':
        return 'bg-brand-highlight/20 text-brand-highlight border-brand-highlight/30';
      case 'Contributor':
        return 'bg-brand-success/20 text-brand-success border-brand-success/30';
      default:
        return 'bg-brand-neutral-300/20 text-brand-neutral-600 border-brand-neutral-300/30';
    }
  };

  const getMergingRightsText = (rights: string) => {
    const rightsMap = {
      'none': 'No merge rights',
      'review': 'Review only',
      'merge': 'Can merge',
      'admin': 'Admin access'
    };
    return rightsMap[rights as keyof typeof rightsMap] || rights;
  };

  return (
    <div className="group relative bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark border border-brand-neutral-300/40 rounded-2xl p-6 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
      {/* Verification Badge */}
      {maintainer.isVerified && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-success/15 border border-brand-success/30">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-success" />
            <span className="text-xs text-brand-success">Verified</span>
          </div>
        </div>
      )}

      {/* Maintainer Header */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-16 h-16 border-2 border-brand-neutral-300/30">
          <AvatarImage src={maintainer.avatar} alt={maintainer.name} />
          <AvatarFallback className="bg-brand-neutral-300/20 text-brand-neutral-700">
            {getInitials(maintainer.name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 min-w-0">
          <h3 className="text-brand-neutral-950 mb-1">{maintainer.name}</h3>
          <p className="text-sm text-brand-neutral-600">@{maintainer.username}</p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-brand-neutral-600">
            {maintainer.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{maintainer.location}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>Joined {new Date(maintainer.joinedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      {maintainer.bio && (
        <p className="text-sm text-brand-neutral-700 mb-4 line-clamp-2">
          {maintainer.bio}
        </p>
      )}

      {/* Projects */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm text-brand-neutral-800">
            Projects ({maintainer.projects.length})
          </h4>
        </div>
        
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {maintainer.projects.map((project, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2.5 rounded-lg bg-brand-neutral-200/30 border border-brand-neutral-300/20"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-brand-neutral-900 mb-0.5">{project.projectName}</p>
                <div className="flex items-center gap-2 text-xs text-brand-neutral-600">
                  <Badge variant="outline" className={`text-xs py-0 ${getRoleBadgeColor(project.role)}`}>
                    {project.role}
                  </Badge>
                  <span>•</span>
                  <span>{getMergingRightsText(project.mergingRights)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-4 border-t border-brand-neutral-300/30">
        {isAdmin && (
          <>
            {maintainer.isVerified ? (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onUnverify?.(maintainer.id)}
                className="text-xs border-brand-error/40 text-brand-error hover:bg-brand-error/10 hover:border-brand-error/60"
              >
                Remove Attestation
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onVerify?.(maintainer.id)}
                className="text-xs border-brand-success/40 text-brand-success hover:bg-brand-success/10 hover:border-brand-success/60"
              >
                <ShieldCheck className="w-3 h-3 mr-1" />
                Verify Maintainer
              </Button>
            )}
          </>
        )}
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => onViewProfile?.(maintainer.id)}
          className="ml-auto text-xs hover:border-brand-accent/60 hover:bg-brand-accent/10"
        >
          View Profile
          <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};
