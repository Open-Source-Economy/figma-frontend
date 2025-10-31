import React from 'react';
import { Badge } from '../../ui/badge';
import { QuickStats } from '../ui/QuickStats';
import { ContactLinks } from '../ui/ContactLinks';
import { MapPin, Clock, Calendar, TrendingUp } from 'lucide-react';

interface ContactInfo {
  email: string;
  github: string;
  twitter?: string;
  linkedin?: string;
}

interface MaintainerHeroSectionProps {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  location: string;
  timezone: string;
  yearsInOpenSource: number;
  totalContributions: number;
  contact: ContactInfo;
  isAvailable?: boolean;
  className?: string;
}

/**
 * MaintainerHeroSection - Complete hero section for maintainer profile
 * Displays avatar, name, title, bio, stats, and contact links
 */
export const MaintainerHeroSection: React.FC<MaintainerHeroSectionProps> = ({
  name,
  title,
  bio,
  avatarUrl,
  location,
  timezone,
  yearsInOpenSource,
  totalContributions,
  contact,
  isAvailable = true,
  className = '',
}) => {
  return (
    <section className={`bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-accent/10 py-10 border-b border-brand-neutral-300 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-brand-accent/30">
              <img 
                src={avatarUrl} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
              <div>
                <h1 className="text-brand-neutral-950 mb-1">
                  {name}
                </h1>
                <p className="text-brand-neutral-600 mb-3">
                  {title}
                </p>
              </div>
              {isAvailable && (
                <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
                  Available for Work
                </Badge>
              )}
            </div>

            <p className="text-brand-neutral-700 mb-4">
              {bio}
            </p>

            {/* Quick Stats */}
            <QuickStats
              stats={[
                { icon: MapPin, label: location },
                { icon: Clock, label: timezone },
                { icon: Calendar, label: `${yearsInOpenSource} years in open source` },
                { icon: TrendingUp, label: `${totalContributions.toLocaleString()} contributions` },
              ]}
              className="mb-4"
            />

            {/* Contact Links */}
            <ContactLinks contact={contact} />
          </div>
        </div>
      </div>
    </section>
  );
};
