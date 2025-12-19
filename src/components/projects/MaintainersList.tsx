import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, Twitter, Linkedin, Star, BadgeCheck, GitMerge, Sparkles, HandHeart } from 'lucide-react';
import type { Maintainer } from '../../data/projectDetailData';

interface MaintainersListProps {
  maintainers: Maintainer[];
  projectName: string;
}

export function MaintainersList({ maintainers, projectName }: MaintainersListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {maintainers.map((maintainer) => (
        <div
          key={maintainer.name}
          className="relative bg-gradient-to-br from-brand-card-blue via-brand-card-blue to-brand-card-blue-light/30 border border-brand-neutral-300/60 rounded-2xl p-6 hover:border-brand-accent/50 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-300 group flex flex-col overflow-hidden backdrop-blur-sm"
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.02] via-transparent to-brand-highlight/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          {/* Availability Badge - Top Right */}
          <div className="absolute top-5 right-5 z-10 flex gap-2">
            {/* Community Supporter Badge */}
            {maintainer.communitySupporter && (
              <Badge className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-500/30 text-xs shadow-sm">
                <HandHeart className="mr-1 h-3 w-3" />
                Community Supporter
              </Badge>
            )}
            
            {/* Availability Badge */}
            {maintainer.availableForConsulting ? (
              <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20 text-xs shadow-sm">
                <Star className="mr-1 h-3 w-3" />
                Available
              </Badge>
            ) : (
              <Badge className="bg-brand-error/10 text-brand-error border-brand-error/20 text-xs shadow-sm">
                <Star className="mr-1 h-3 w-3" />
                Not Available
              </Badge>
            )}
          </div>

          <div className="flex gap-4 flex-1 relative z-[1]">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src={maintainer.photo}
                  alt={maintainer.name}
                  className="w-20 h-20 rounded-xl border border-brand-neutral-300 object-cover shadow-md"
                />
                {maintainer.verified && (
                  <div className="absolute -top-1 -right-1 bg-brand-accent rounded-full p-1 shadow-lg shadow-brand-accent/30">
                    <BadgeCheck className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Header */}
              <div className="mb-3">
                <h3 className="text-brand-neutral-900 mb-0.5">{maintainer.name}</h3>
                <p className="text-brand-neutral-600 mb-2">{maintainer.title}</p>
                
                {/* Inline Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="outline" className="text-xs text-brand-neutral-600 border-brand-neutral-400/30">
                    {maintainer.yearsOnProject} {maintainer.yearsOnProject === 1 ? 'year' : 'years'} on {projectName}
                  </Badge>
                  
                  {maintainer.mergeRights && (
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-brand-neutral-200/20 text-brand-neutral-600 border-brand-neutral-400/30"
                    >
                      <GitMerge className="mr-1 h-3 w-3" />
                      {maintainer.mergeRights}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Bio */}
              {maintainer.bio && (
                <p className="text-brand-neutral-700 mb-3">{maintainer.bio}</p>
              )}

              {/* Community Supporter Message */}
              {maintainer.communitySupporter && maintainer.communitySupporterMessage ? (
                <div className="relative p-4 bg-gradient-to-r from-amber-50/60 to-orange-50/40 border border-amber-500/20 rounded-lg mb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex-shrink-0 mt-0.5">
                      <HandHeart className="h-3.5 w-3.5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-amber-900 leading-relaxed">{maintainer.communitySupporterMessage}</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Highlight Fact - only show if not a community supporter */
                maintainer.highlightFact && (
                  <div className="relative p-4 bg-brand-neutral-100/40 border border-brand-neutral-300/50 rounded-lg mb-3">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-accent/10 flex-shrink-0 mt-0.5">
                        <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-brand-neutral-700 leading-relaxed">{maintainer.highlightFact}</p>
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Expertise Tags */}
              <div className="mb-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-brand-neutral-600 text-xs w-full mb-0.5">Expertise</span>
                  {maintainer.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs bg-brand-neutral-100/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-1.5">
                <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                  <a
                    href={`https://github.com/${maintainer.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group/social"
                  >
                    <Github className="h-3.5 w-3.5 transition-all duration-200 group-hover/social:text-brand-accent" />
                  </a>
                </Button>
                {maintainer.social.twitter && (
                  <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                    <a
                      href={`https://twitter.com/${maintainer.social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="group/social"
                    >
                      <Twitter className="h-3.5 w-3.5 transition-all duration-200 group-hover/social:text-brand-accent" />
                    </a>
                  </Button>
                )}
                {maintainer.social.linkedin && (
                  <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                    <a
                      href={`https://linkedin.com/in/${maintainer.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="group/social"
                    >
                      <Linkedin className="h-3.5 w-3.5 transition-all duration-200 group-hover/social:text-brand-accent" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}