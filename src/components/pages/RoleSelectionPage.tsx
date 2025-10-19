import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PortalSelection } from '../patterns/PortalSelection';
import { OtherRolesSection } from '../patterns/OtherRolesSection';
import { 
  Code, 
  Building2, 
  Heart,
  Users
} from 'lucide-react';

interface RoleSelectionPageProps {
  onNavigateHome: () => void;
  onNavigateToRole: (role: string) => void;
}

export function RoleSelectionPage({ onNavigateHome, onNavigateToRole }: RoleSelectionPageProps) {
  // Portal configuration - Two main portals
  const portals = [
    {
      id: 'maintainer',
      title: 'Maintainer Portal',
      description: 'Join as an open source maintainer to monetize your expertise, connect with enterprises, and get funded for your work.',
      icon: <Code className="w-6 h-6" />,
      ctaText: 'Enter Maintainer Portal',
      accentColor: 'accent' as const
    },
    {
      id: 'enterprise',
      title: 'Enterprise Portal',
      description: 'Access expert maintainers under one contract with priority support, custom development, and transparent pricing.',
      icon: <Building2 className="w-6 h-6" />,
      ctaText: 'Enter Enterprise Portal',
      accentColor: 'primary' as const
    }
  ];

  const trustMetrics = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      value: '500+',
      label: 'Expert Maintainers',
      color: 'brand-success'
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      value: '2,000+',
      label: 'Projects Supported',
      color: 'brand-primary'
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      value: 'Enterprise',
      label: 'Ready Platform',
      color: 'brand-accent'
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      value: 'Non-Profit',
      label: 'Mission Driven',
      color: 'brand-highlight'
    }
  ];

  const handleBookCall = () => {
    // In a real app, this would open a calendar booking widget
    window.open('https://calendly.com/opensourceeconomy', '_blank');
  };

  const handleContactForm = () => {
    // In a real app, this would open a contact form modal or navigate to contact page
    console.log('Opening contact form');
  };

  return (
    <div className="min-h-screen">
      <Header 
        onNavItemClick={(href) => href === 'home' && onNavigateHome()}
        ctaText="Back to Home"
        onCtaClick={onNavigateHome}
      />
      
      {/* Portal Selection - Main Content */}
      <PortalSelection 
        portals={portals}
        onSelectPortal={onNavigateToRole}
        className="bg-brand-secondary"
      />

      {/* Other Roles Section */}
      <OtherRolesSection 
        onBookCall={handleBookCall}
        onContactForm={handleContactForm}
        className="bg-brand-neutral-200"
      />

      {/* Trust Indicators */}
      <section className="bg-brand-neutral-200 py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="text-brand-accent">{metric.value}</div>
                    <span className="text-muted-foreground">{metric.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-brand-secondary">
        <Footer onNavItemClick={(href) => href === 'home' && onNavigateHome()} />
      </section>
    </div>
  );
}