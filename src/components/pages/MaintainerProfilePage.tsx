import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { MaintainerHeroSection } from '../maintainers/sections/MaintainerHeroSection';
import { MaintainerExpertiseSection } from '../maintainers/sections/MaintainerExpertiseSection';
import { MaintainerProjectsSection } from '../maintainers/sections/MaintainerProjectsSection';
import { MaintainerServicesSection } from '../maintainers/sections/MaintainerServicesSection';
import { MaintainerPricingSection } from '../maintainers/sections/MaintainerPricingSection';
import { MaintainerAvailabilityCTA } from '../maintainers/sections/MaintainerAvailabilityCTA';
import { 
  Headphones,
  CodeIcon,
  Lightbulb,
  Shield
} from 'lucide-react';
import { MaintainerProfile } from '../../data/maintainerProfileData';

interface MaintainerProfilePageProps {
  profile: MaintainerProfile;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onViewProject?: (slug: string) => void;
}

const categoryIcons = {
  support: Headphones,
  development: CodeIcon,
  advisory: Lightbulb,
  security_and_compliance: Shield
};

const categoryOptions = [
  { key: 'support', label: 'Support', icon: Headphones },
  { key: 'development', label: 'Development', icon: CodeIcon },
  { key: 'advisory', label: 'Advisory', icon: Lightbulb },
  { key: 'security_and_compliance', label: 'Security & Compliance', icon: Shield },
];

export function MaintainerProfilePage({ 
  profile, 
  onNavigateHome, 
  onNavItemClick,
  onViewProject 
}: MaintainerProfilePageProps) {
  const averageRate = Math.round(
    profile.services.reduce((sum, s) => sum + s.baseRate, 0) / profile.services.length
  );

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      <MaintainerHeroSection
        name={profile.name}
        title={profile.title}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
        location={profile.location}
        timezone={profile.timezone}
        yearsInOpenSource={profile.yearsInOpenSource}
        totalContributions={profile.totalContributions}
        contact={profile.contact}
        isAvailable={true}
      />

      <MaintainerExpertiseSection
        expertise={profile.expertise}
        languages={profile.languages}
      />

      <MaintainerProjectsSection
        projects={profile.projects}
        maintainerFirstName={profile.name.split(' ')[0]}
        onViewProject={onViewProject}
      />

      <MaintainerServicesSection
        services={profile.services}
        categoryOptions={categoryOptions}
        categoryIcons={categoryIcons}
      />

      <MaintainerPricingSection
        averageRate={averageRate}
        pricingBreakdown={profile.pricingBreakdown}
      />

      <MaintainerAvailabilityCTA
        email={profile.contact.email}
        availability={profile.availability}
        onViewServices={() => onNavItemClick('services')}
      />

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
