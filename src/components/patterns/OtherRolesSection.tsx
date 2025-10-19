import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SectionHeader } from '../ui/section-header';
import { 
  Phone, 
  Mail, 
  Handshake, 
  Users, 
  GraduationCap, 
  Heart, 
  Building 
} from 'lucide-react';

/**
 * OtherRolesSection Component
 * 
 * Provides alternative pathways for users who don't fit the main portals.
 * Follows DRY principles by:
 * - Using reusable UI components (Card, Button, SectionHeader)
 * - Data-driven role list configuration
 * - Tailwind CSS variables for all styling
 * - Simple, scannable layout
 */

interface OtherRolesSectionProps {
  onBookCall: () => void;
  onContactForm: () => void;
  className?: string;
}

export function OtherRolesSection({ 
  onBookCall, 
  onContactForm, 
  className = '' 
}: OtherRolesSectionProps) {
  const otherRoles = [
    { icon: <Handshake className="w-4 h-4" />, label: 'Foundation' },
    { icon: <Users className="w-4 h-4" />, label: 'Community Builder' },
    { icon: <GraduationCap className="w-4 h-4" />, label: 'Researcher' },
    { icon: <Heart className="w-4 h-4" />, label: 'Donor' },
    { icon: <Building className="w-4 h-4" />, label: 'Other Stakeholder' }
  ];

  return (
    <section className={className}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Don't See Your Role?"
            description="We work with various stakeholders across the open source ecosystem. Let's discuss how we can collaborate."
            spacing="md"
            align="center"
            maxWidth="2xl"
          />

          {/* Modern Role Cards Grid */}
          <div className="grid grid-cols-5 gap-4 mb-8">
            {otherRoles.map((role, index) => (
              <div 
                key={index}
                className="group relative bg-brand-neutral-200/50 rounded-lg p-4 border border-brand-neutral-300/20 hover:border-brand-accent/40 transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-3 group-hover:bg-brand-accent/20 transition-colors duration-200">
                  <div className="text-brand-accent">
                    {role.icon}
                  </div>
                </div>
                
                {/* Role Name */}
                <h4 className="text-foreground group-hover:text-brand-accent transition-colors duration-200">
                  {role.label}
                </h4>
              </div>
            ))}
          </div>

          {/* Premium CTA Card */}
          <Card className="border-brand-accent/20 bg-gradient-to-br from-brand-card-blue-dark to-brand-card-blue overflow-hidden relative">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-highlight to-brand-accent"></div>
            
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left side - Icon and Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 rounded-full border border-brand-accent/20 mb-4">
                    <Handshake className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider">Let's Connect</span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">
                    Ready to Start a Conversation?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Whether you're an enterprise partner, academic institution, or open source advocate, we'd love to explore collaboration opportunities.
                  </p>
                </div>

                {/* Right side - CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-brand-accent/40 text-brand-accent hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-brand-accent/20"
                    onClick={onBookCall}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book a Call
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white shadow-lg shadow-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/30 transition-all duration-300"
                    onClick={onContactForm}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}