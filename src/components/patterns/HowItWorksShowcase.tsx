import React from 'react';
import { Separator } from '../ui/separator';
import { SectionHeader } from '../ui/section-header';
import { HowItWorksTimeline } from './HowItWorksTimeline';
import { HowItWorksInteractive } from './HowItWorksInteractive';
import { HowItWorksHero } from './HowItWorksHero';
import { HowItWorksCompact } from './HowItWorksCompact';
import { HowItWorksSplit } from './HowItWorksSplit';
import { HowItWorksCustomerStory } from './HowItWorksCustomerStory';
import { HowItWorksCalculator } from './HowItWorksCalculator';
import { HowItWorksSecurity } from './HowItWorksSecurity';
import { HowItWorksExperts } from './HowItWorksExperts';
import { HowItWorksROI } from './HowItWorksROI';
import { HowItWorksLiveSupport } from './HowItWorksLiveSupport';
import { HowItWorksIndustry } from './HowItWorksIndustry';
import { HowItWorksIntegrationTimeline } from './HowItWorksIntegrationTimeline';
import { HowItWorksServiceConfigurator } from './HowItWorksServiceConfigurator';
import { HowItWorksComparison } from './HowItWorksComparison';
import { HowItWorksEnterpriseAddons } from './HowItWorksEnterpriseAddons';
import { HowItWorksFundAllocation } from './HowItWorksFundAllocation';
import { HowItWorksTransparencyDashboard } from './HowItWorksTransparencyDashboard';
import { HowItWorksDashboard } from './HowItWorksDashboard';
import { HowItWorksCarousel } from './HowItWorksCarousel';
import { HowItWorksTabs } from './HowItWorksTabs';
import { HowItWorksAccordion } from './HowItWorksAccordion';
import { HowItWorksTable } from './HowItWorksTable';

interface HowItWorksShowcaseProps {
  className?: string;
  onNavigation?: (href: string) => void;
}

export function HowItWorksShowcase({ className = '', onNavigation }: HowItWorksShowcaseProps) {
  return (
    <div className={`space-y-0 ${className}`}>
      <div className="pb-6">
        <SectionHeader
          title="How It Works - Design Variations"
          description="Multiple design approaches for the 'How It Works' section, showcasing different layouts, interactions, and visual styles."
          spacing="md"
        />
      </div>

      <Separator />

      {/* Alternative 1: Timeline Design */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Timeline Design</h3>
          <p className="text-muted-foreground text-sm">A streamlined timeline process with alternating left/right layout and connecting dots</p>
        </div>
        <HowItWorksTimeline onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 2: Interactive Cards */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Interactive Cards</h3>
          <p className="text-muted-foreground text-sm">Hover-based interactions with comprehensive service portfolio showcase</p>
        </div>
        <HowItWorksInteractive onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 3: Hero Style */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Hero Style</h3>
          <p className="text-muted-foreground text-sm">Video-style hero section with play button and service highlights</p>
        </div>
        <HowItWorksHero onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 4: Compact Design */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Compact Design</h3>
          <p className="text-muted-foreground text-sm">Simple numbered list with comprehensive services and call-to-action</p>
        </div>
        <HowItWorksCompact onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 5: Split Layout */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Split Layout with Dashboard</h3>
          <p className="text-muted-foreground text-sm">Process steps on the left with live enterprise dashboard on the right</p>
        </div>
        <HowItWorksSplit onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 6: Cards Carousel Style */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Cards Carousel Style</h3>
          <p className="text-muted-foreground text-sm">Horizontal scrolling service cards with enterprise features</p>
        </div>
        <HowItWorksCarousel onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 7: Tabbed Interface with Enterprise Add-ons */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Tabbed Interface with Enterprise Add-ons</h3>
          <p className="text-muted-foreground text-sm">Interactive service categories featuring NDAs, SLAs, dedicated support channels, and premium enterprise features</p>
        </div>
        <HowItWorksTabs onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 8: Accordion Style */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Accordion Style</h3>
          <p className="text-muted-foreground text-sm">Expandable service breakdown with detailed descriptions</p>
        </div>
        <HowItWorksAccordion onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 9: Dashboard Style */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Dashboard Style</h3>
          <p className="text-muted-foreground text-sm">Real-time enterprise dashboard with live metrics</p>
        </div>
        <HowItWorksDashboard onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 10: Comparison Table Style */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Comparison Table Style</h3>
          <p className="text-muted-foreground text-sm">Service plan comparison with detailed feature breakdown</p>
        </div>
        <HowItWorksTable onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 11: Customer Success Story */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Customer Success Story</h3>
          <p className="text-muted-foreground text-sm">TechCorp case study with ROI metrics and testimonial</p>
        </div>
        <HowItWorksCustomerStory onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 12: Interactive Service Calculator */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Interactive Service Calculator</h3>
          <p className="text-muted-foreground text-sm">Team size and pricing configurator with real-time estimates</p>
        </div>
        <HowItWorksCalculator onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 13: Security & Compliance Focus */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Security & Compliance Focus</h3>
          <p className="text-muted-foreground text-sm">SOC 2, GDPR, and VEX/CVE support with enterprise security features</p>
        </div>
        <HowItWorksSecurity onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 14: Live Expert Profiles */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Live Expert Profiles</h3>
          <p className="text-muted-foreground text-sm">Dan Abramov, Evan You, Ryan Dahl - direct access to maintainers</p>
        </div>
        <HowItWorksExperts onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 15: ROI Calculator */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">ROI Calculator</h3>
          <p className="text-muted-foreground text-sm">Interactive sliders with cost breakdown and savings analysis</p>
        </div>
        <HowItWorksROI onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 16: Live Support Interface */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Live Support Interface</h3>
          <p className="text-muted-foreground text-sm">Mock chat interface with maintainer and support features</p>
        </div>
        <HowItWorksLiveSupport onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 17: Industry Solutions */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Industry Solutions</h3>
          <p className="text-muted-foreground text-sm">Financial, Healthcare, E-commerce specific compliance and solutions</p>
        </div>
        <HowItWorksIndustry onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 18: Integration Timeline */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Integration Timeline</h3>
          <p className="text-muted-foreground text-sm">Implementation progress tracking and success milestones</p>
        </div>
        <HowItWorksIntegrationTimeline onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 19: Service Configurator */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Service Configurator</h3>
          <p className="text-muted-foreground text-sm">Interactive service selection with real-time pricing</p>
        </div>
        <HowItWorksServiceConfigurator onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 20: Vendor Comparison */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Vendor Comparison</h3>
          <p className="text-muted-foreground text-sm">Traditional support vs Open Source Economy benefits</p>
        </div>
        <HowItWorksComparison onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 21: Enterprise Add-ons & Customization */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Enterprise Add-ons & Customization</h3>
          <p className="text-muted-foreground text-sm">NDAs, SLAs, and brand recognition campaigns</p>
        </div>
        <HowItWorksEnterpriseAddons onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 22: Non-Profit Fund Allocation */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Non-Profit Fund Allocation</h3>
          <p className="text-muted-foreground text-sm">Where every dollar goes for ecosystem health - transparency breakdown</p>
        </div>
        <HowItWorksFundAllocation onNavigation={onNavigation} />
      </div>

      <Separator />

      {/* Alternative 23: Complete Transparency Dashboard */}
      <div className="py-8">
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Complete Transparency Dashboard</h3>
          <p className="text-muted-foreground text-sm">Real-time impact tracking and fund distribution with live metrics</p>
        </div>
        <HowItWorksTransparencyDashboard onNavigation={onNavigation} />
      </div>
    </div>
  );
}