import React from 'react';
import { Users, Code, ExternalLink } from 'lucide-react';
import { PersonCard } from '../shared/PersonCard';
import { SectionHeader } from '../shared/SectionHeader';

interface Person {
  name: string;
  role: string;
  githubUrl: string;
  avatarUrl: string;
  project?: string;
}

interface TeamSectionProps {
  volunteers: Person[];
  maintainers: Person[];
}

export function TeamSection({ volunteers, maintainers }: TeamSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Volunteers Column */}
      <div>
        <SectionHeader 
          icon={Users}
          iconColor="text-brand-success"
          title="OSE Volunteer Team"
          description="Dedicated volunteers who help run Open Source Economy operations, outreach, and community building"
        />
        <div className="grid grid-cols-2 gap-2.5">
          {volunteers.map((volunteer) => (
            <PersonCard
              key={volunteer.githubUrl}
              name={volunteer.name}
              role={volunteer.role}
              githubUrl={volunteer.githubUrl}
              avatarUrl={volunteer.avatarUrl}
              accentColor="brand-success"
              variant="large"
            />
          ))}
        </div>
      </div>

      {/* Maintainers Column */}
      <div>
        <SectionHeader 
          icon={Code}
          iconColor="text-brand-accent"
          title="Maintainers We Support"
          description="Open source maintainers receiving sustainable funding through OSE enterprise partnerships"
        />
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {maintainers.map((maintainer) => (
              <PersonCard
                key={maintainer.githubUrl}
                name={maintainer.name}
                role={maintainer.role}
                githubUrl={maintainer.githubUrl}
                avatarUrl={maintainer.avatarUrl}
                project={maintainer.project}
                accentColor="brand-accent"
                variant="small"
              />
            ))}
          </div>
          
          {/* Additional maintainers count */}
          <div className="text-center pt-2">
            <a 
              href="https://opensourceeconomy.org/maintainers" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand-accent/10 border border-brand-accent/30 hover:border-brand-accent hover:bg-brand-accent/20 text-brand-accent hover:text-brand-accent text-xs px-3 py-1.5 rounded-full transition-all no-underline"
            >
              <span>+ 52 other maintainers receiving support</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
