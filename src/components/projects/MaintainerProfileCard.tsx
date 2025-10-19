import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Github, Twitter, Linkedin, ExternalLink, Star } from 'lucide-react';
import type { Maintainer } from '../../data/projectDetailData';

interface MaintainerProfileCardProps {
  maintainer: Maintainer;
  projectName: string;
}

export function MaintainerProfileCard({ maintainer, projectName }: MaintainerProfileCardProps) {
  return (
    <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-xl bg-brand-secondary border border-brand-neutral-300 flex items-center justify-center text-6xl">
            {maintainer.photo}
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-brand-neutral-900 mb-1">{maintainer.name}</h3>
              <p className="text-brand-neutral-600 mb-2">{maintainer.title}</p>
              {maintainer.availableForConsulting && (
                <Badge className="bg-brand-success/10 text-brand-success border-brand-success/20">
                  <Star className="mr-1 h-3 w-3" />
                  Available for Consulting
                </Badge>
              )}
            </div>
          </div>

          {/* Bio */}
          <p className="text-brand-neutral-700 mb-4">{maintainer.bio}</p>

          {/* Years on Project */}
          <div className="p-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg mb-6">
            <p className="text-brand-neutral-700">
              <strong className="text-brand-accent">
                {maintainer.yearsOnProject} years
              </strong>{' '}
              maintaining {projectName}
            </p>
          </div>

          {/* Expertise Tags */}
          <div className="mb-6">
            <h5 className="text-brand-neutral-800 mb-3">Areas of Expertise</h5>
            <div className="flex flex-wrap gap-2">
              {maintainer.expertise.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://github.com/${maintainer.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {maintainer.social.twitter && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://twitter.com/${maintainer.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>
            )}
            {maintainer.social.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`https://linkedin.com/in/${maintainer.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
