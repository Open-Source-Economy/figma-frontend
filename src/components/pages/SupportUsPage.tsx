import React, { useState } from 'react';
import { Heart, Eye, Mail, Share2, Award, Lightbulb, ArrowDown } from 'lucide-react';
import { Header } from '../layout/Header';
import { SupportOptionCard } from '../support/SupportOptionCard';
import { SupportDetailSection } from '../support/SupportDetailSection';
import { VisibilityDetails } from '../support/details/VisibilityDetails';
import { NewsletterDetails } from '../support/details/NewsletterDetails';
import { ShareDetails } from '../support/details/ShareDetails';
import { DonateDetails } from '../support/details/DonateDetails';
import { AmbassadorDetails } from '../support/details/AmbassadorDetails';
import { OtherWaysDetails } from '../support/details/OtherWaysDetails';

interface SupportUsPageProps {
  onNavigate?: (page: string) => void;
}

type SupportOption = 'visibility' | 'newsletter' | 'share' | 'donate' | 'ambassador' | 'other' | null;

export function SupportUsPage({ onNavigate }: SupportUsPageProps) {
  const [activeSection, setActiveSection] = useState<SupportOption>(null);
  const detailsRef = React.useRef<HTMLDivElement>(null);

  const supportOptions = [
    {
      id: 'visibility' as const,
      icon: Eye,
      title: 'Follow Us',
      description: 'Social media follows build credibility',
      color: 'brand-accent',
      time: '5 seconds'
    },
    {
      id: 'newsletter' as const,
      icon: Mail,
      title: 'Newsletter',
      description: 'Monthly updates on our impact',
      color: 'brand-highlight',
      time: '30 seconds'
    },
    {
      id: 'share' as const,
      icon: Share2,
      title: 'Share',
      description: 'Spread the word with pre-written messages',
      color: 'brand-success',
      time: '2 minutes'
    },
    {
      id: 'donate' as const,
      icon: Heart,
      title: 'Donate',
      description: 'Financial support for our mission',
      color: 'brand-highlight',
      time: 'Any amount'
    },
    {
      id: 'ambassador' as const,
      icon: Award,
      title: 'Ambassador',
      description: 'Connect us with enterprises',
      color: 'brand-accent',
      time: 'Ongoing'
    },
    {
      id: 'other' as const,
      icon: Lightbulb,
      title: 'More Ways',
      description: 'Code, write, speak, and more',
      color: 'brand-success',
      time: 'Flexible'
    }
  ];

  const handleOptionClick = (optionId: SupportOption) => {
    setActiveSection(optionId);
    // Scroll to details section after a brief delay for state update
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const renderDetails = () => {
    const components = {
      visibility: <VisibilityDetails />,
      newsletter: <NewsletterDetails />,
      share: <ShareDetails />,
      donate: <DonateDetails onNavigate={onNavigate} />,
      ambassador: <AmbassadorDetails onNavigate={onNavigate} />,
      other: <OtherWaysDetails onNavigate={onNavigate} />
    };

    const titles = {
      visibility: 'Follow Us on Social Media',
      newsletter: 'Subscribe to Our Newsletter',
      share: 'Share Pre-Written Messages',
      donate: 'Support Us Financially',
      ambassador: 'Become an Ambassador',
      other: 'Other Ways to Help'
    };

    const icons = {
      visibility: Eye,
      newsletter: Mail,
      share: Share2,
      donate: Heart,
      ambassador: Award,
      other: Lightbulb
    };

    const colors = {
      visibility: 'brand-accent',
      newsletter: 'brand-highlight',
      share: 'brand-success',
      donate: 'brand-highlight',
      ambassador: 'brand-accent',
      other: 'brand-success'
    };

    if (!activeSection) return null;

    return (
      <SupportDetailSection
        id={activeSection}
        icon={icons[activeSection]}
        title={titles[activeSection]}
        color={colors[activeSection]}
        onClose={() => setActiveSection(null)}
        enableStateTesting={true}
      >
        {components[activeSection]}
      </SupportDetailSection>
    );
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Header onNavItemClick={onNavigate} />
      
      {/* Hero Section with Support Options */}
      <div className="bg-gradient-to-br from-brand-navy via-brand-card-blue-dark to-brand-navy border-b border-brand-neutral-300/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/20 rounded-full mb-4">
                <Heart className="h-8 w-8 text-brand-accent" />
              </div>
              
              <h1 className="text-brand-neutral-950 mb-4">
                Support Open Source Economy
              </h1>
              
              <p className="text-lg text-brand-neutral-600 mb-6">
                Every action helps build sustainable funding for open source maintainers. Pick what works for you!
              </p>

              {!activeSection && (
                <div className="inline-flex items-center gap-2 text-brand-accent animate-bounce">
                  <span className="text-sm">Click an option to get started / Choose How You Want to Help</span>
                  <ArrowDown className="h-4 w-4" />
                </div>
              )}
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {supportOptions.map((option) => (
                <SupportOptionCard
                  key={option.id}
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                  color={option.color}
                  onClick={() => handleOptionClick(option.id)}
                  isActive={activeSection === option.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Details and Closing Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Details Section */}
          <div ref={detailsRef} className="scroll-mt-8">
            {renderDetails()}
          </div>

          {/* Closing Message (only show when no section active) */}
          {!activeSection && (
            <div className="bg-gradient-to-br from-brand-accent/10 via-brand-highlight/10 to-brand-success/10 border-2 border-brand-accent/30 rounded-xl p-6 md:p-8 text-center">
              <Heart className="h-10 w-10 text-brand-accent mx-auto mb-3" />
              <h3 className="text-brand-neutral-900 mb-3">
                Every Action Counts
              </h3>
              <p className="text-brand-neutral-600 max-w-2xl mx-auto">
                Whether you follow us, share a message, donate $5, or become an ambassador—you&apos;re helping build a sustainable future for open source. Thank you! 🌱
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}