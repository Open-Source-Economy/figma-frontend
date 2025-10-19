import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, Twitter, Linkedin, Star } from 'lucide-react';
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
          className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img
                src={maintainer.photo}
                alt={maintainer.name}
                className="w-24 h-24 rounded-lg border border-brand-neutral-300 object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="text-brand-neutral-900 mb-1">{maintainer.name}</h3>
                <p className="text-brand-neutral-600 mb-2">{maintainer.title}</p>
                {maintainer.availableForConsulting ? (
                  <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20">
                    <Star className="mr-1 h-3 w-3" />
                    Available for Consulting
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-brand-neutral-200/50 text-brand-neutral-500 border-brand-neutral-400/30">
                    Currently Unavailable
                  </Badge>
                )}
              </div>

              {/* Bio */}
              <p className="text-brand-neutral-700 mb-4">{maintainer.bio}</p>

              {/* Years on Project */}
              <div className="p-3 bg-brand-accent/5 border border-brand-accent/20 rounded-lg mb-4">
                <p className="text-brand-neutral-700">
                  <strong className="text-brand-accent">
                    {maintainer.yearsOnProject} years
                  </strong>{' '}
                  on {projectName}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-4">
                <h5 className="text-brand-neutral-800 mb-2">Expertise</h5>
                <div className="flex flex-wrap gap-2">
                  {maintainer.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={`https://github.com/${maintainer.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                {maintainer.social.twitter && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://twitter.com/${maintainer.social.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {maintainer.social.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://linkedin.com/in/${maintainer.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
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