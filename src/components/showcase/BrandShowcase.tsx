import React from 'react';
import { BrandGradient } from '../ui/brand-gradient';
import { BrandCard } from '../ui/brand-card';
import { TrustBadge } from '../ui/trust-badge';
import { StatusIndicator } from '../ui/status-indicator';
import { MetricDisplay } from '../ui/metric-display';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Typography } from '../ui/typography';
import { SectionHeader } from '../ui/section-header';

export function BrandShowcase() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Brand System Overview */}
        <SectionHeader
          title="Open Source Economy Brand System"
          description="Blue-to-Green professional design system showcasing enterprise trust transitioning to open source sustainability"
          spacing="lg"
          titleLevel="h1"
          align="center"
          maxWidth="4xl"
        />

        {/* Color Palette Section */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Color System</Typography.HeadlineLarge>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Blues - Enterprise Trust */}
            <BrandCard variant="primary" glow className="p-6">
              <Typography.TitleMedium className="mb-4 text-brand-primary">Primary Blues</Typography.TitleMedium>
              <Typography.BodySmall className="text-muted-foreground mb-4">Enterprise Trust & Reliability</Typography.BodySmall>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-primary border border-border"></div>
                  <span className="text-sm font-mono">brand-primary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-primary-light border border-border"></div>
                  <span className="text-sm font-mono">brand-primary-light</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-primary-dark border border-border"></div>
                  <span className="text-sm font-mono">brand-primary-dark</span>
                </div>
              </div>
            </BrandCard>

            {/* Accent Greens - Growth & Sustainability */}
            <BrandCard variant="accent" glow className="p-6">
              <Typography.TitleMedium className="mb-4 text-brand-accent">Accent Greens</Typography.TitleMedium>
              <Typography.BodySmall className="text-muted-foreground mb-4">Growth & Sustainability</Typography.BodySmall>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-accent border border-border"></div>
                  <span className="text-sm font-mono">brand-accent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-accent-light border border-border"></div>
                  <span className="text-sm font-mono">brand-accent-light</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-accent-dark border border-border"></div>
                  <span className="text-sm font-mono">brand-accent-dark</span>
                </div>
              </div>
            </BrandCard>

            {/* Success & Support Colors */}
            <BrandCard variant="success" glow className="p-6">
              <Typography.TitleMedium className="mb-4 text-brand-success">Success Colors</Typography.TitleMedium>
              <Typography.BodySmall className="text-muted-foreground mb-4">Funding & Achievement</Typography.BodySmall>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-success border border-border"></div>
                  <span className="text-sm font-mono">brand-success</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-success-light border border-border"></div>
                  <span className="text-sm font-mono">brand-success-light</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-brand-success-dark border border-border"></div>
                  <span className="text-sm font-mono">brand-success-dark</span>
                </div>
              </div>
            </BrandCard>
          </div>
        </section>

        {/* Gradient System */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Gradient System</Typography.HeadlineLarge>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BrandGradient variant="primary" direction="to-r" intensity="strong" asBackground className="p-6 rounded-xl">
              <Typography.TitleMedium className="text-white">Primary Gradient</Typography.TitleMedium>
              <Typography.BodySmall className="text-white/80">Enterprise Focus</Typography.BodySmall>
            </BrandGradient>
            
            <BrandGradient variant="accent" direction="to-br" intensity="strong" asBackground className="p-6 rounded-xl">
              <Typography.TitleMedium className="text-white">Accent Gradient</Typography.TitleMedium>
              <Typography.BodySmall className="text-white/80">Growth Focused</Typography.BodySmall>
            </BrandGradient>
            
            <BrandGradient variant="enterprise" direction="to-r" intensity="medium" asBackground className="p-6 rounded-xl">
              <Typography.TitleMedium className="text-brand-primary">Enterprise Blend</Typography.TitleMedium>
              <Typography.BodySmall className="text-muted-foreground">Blue to Green</Typography.BodySmall>
            </BrandGradient>
            
            <BrandGradient variant="subtle" direction="to-bl" intensity="medium" asBackground className="p-6 rounded-xl border border-border">
              <Typography.TitleMedium>Subtle Background</Typography.TitleMedium>
              <Typography.BodySmall className="text-muted-foreground">Content Areas</Typography.BodySmall>
            </BrandGradient>
          </div>
        </section>

        {/* Component Examples */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Brand Components</Typography.HeadlineLarge>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trust Badges */}
            <BrandCard variant="glass" className="p-6">
              <Typography.TitleMedium className="mb-4">Trust Badges</Typography.TitleMedium>
              <div className="flex flex-wrap gap-3">
                <TrustBadge type="security" />
                <TrustBadge type="verified" />
                <TrustBadge type="featured" />
                <TrustBadge type="premium" />
                <TrustBadge type="fast" />
                <TrustBadge type="popular" />
              </div>
            </BrandCard>

            {/* Status Indicators */}
            <BrandCard variant="glass" className="p-6">
              <Typography.TitleMedium className="mb-4">Status Indicators</Typography.TitleMedium>
              <div className="space-y-3">
                <StatusIndicator status="available" showLabel />
                <StatusIndicator status="busy" showLabel />
                <StatusIndicator status="offline" showLabel />
                <StatusIndicator status="success" showLabel />
                <StatusIndicator status="warning" showLabel />
                <StatusIndicator status="error" showLabel />
              </div>
            </BrandCard>
          </div>
        </section>

        {/* Metrics Display */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Metrics & KPIs</Typography.HeadlineLarge>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricDisplay
              value="500+"
              label="Active Projects"
              variant="primary"
              trend="up"
              trendValue="12% this month"
            />
            
            <MetricDisplay
              value="24/7"
              label="Expert Support"
              variant="accent"
              trend="neutral"
              trendValue="Always available"
            />
            
            <MetricDisplay
              value="$2.5M"
              label="Funds Distributed"
              variant="success"
              trend="up"
              trendValue="15% increase"
            />
            
            <MetricDisplay
              value="99.9%"
              label="Uptime SLA"
              variant="primary"
              trend="up"
              trendValue="Above target"
            />
          </div>
        </section>

        {/* Button Variations */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Interactive Elements</Typography.HeadlineLarge>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BrandCard variant="enterprise" className="p-6">
              <Typography.TitleMedium className="mb-4">Primary Actions</Typography.TitleMedium>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary">
                  Get Started Today
                </Button>
                <Button variant="outline" className="w-full border-brand-primary text-brand-primary hover:bg-brand-primary/5">
                  Schedule Demo
                </Button>
                <Button variant="secondary" className="w-full bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20">
                  Learn More
                </Button>
              </div>
            </BrandCard>

            <BrandCard variant="enterprise" className="p-6">
              <Typography.TitleMedium className="mb-4">Status Badges</Typography.TitleMedium>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brand-primary text-white">Primary</Badge>
                <Badge variant="outline" className="border-brand-accent text-brand-accent">Growth</Badge>
                <Badge variant="secondary" className="bg-brand-success/10 text-brand-success">Success</Badge>
                <Badge variant="destructive" className="bg-brand-error text-white">Critical</Badge>
              </div>
            </BrandCard>
          </div>
        </section>

        {/* Typography with Brand Colors */}
        <section className="space-y-8">
          <Typography.HeadlineLarge className="text-center">Brand Typography</Typography.HeadlineLarge>
          
          <BrandCard variant="glass" className="p-8 text-center">
            <BrandGradient variant="enterprise" className="mb-4">
              <Typography.DisplayLarge>
                Connect Your Enterprise with Expert Maintainers
              </Typography.DisplayLarge>
            </BrandGradient>
            
            <Typography.BodyLarge className="text-muted-foreground max-w-2xl mx-auto">
              Professional platform bridging enterprise needs with open source sustainability. 
              From corporate reliability to community growth.
            </Typography.BodyLarge>
            
            <div className="flex justify-center gap-4 mt-8">
              <Button size="lg" className="bg-gradient-to-r from-brand-primary to-brand-accent text-white">
                Enterprise Access
              </Button>
              <Button size="lg" variant="outline" className="border-brand-success text-brand-success">
                Support Open Source
              </Button>
            </div>
          </BrandCard>
        </section>

      </div>
    </div>
  );
}