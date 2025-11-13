import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { 
  Heart, 
  Building2, 
  User, 
  CheckCircle2, 
  Star, 
  Award, 
  Crown, 
  Users, 
  Shield, 
  Zap,
  Mail,
  Github,
  ArrowRight,
  TrendingUp,
  Globe,
  Code,
  Package
} from 'lucide-react';

interface SponsorTier {
  name: string;
  icon: React.ComponentType<any>;
  price: number;
  frequency: 'monthly' | 'annual';
  accentColor: string;
  benefits: string[];
  recommended?: boolean;
  cta: string;
}

interface SponsorshipPageProps {
  onNavigate?: (page: string) => void;
}

export function SponsorshipPage({ onNavigate }: SponsorshipPageProps) {
  const individualTiers: SponsorTier[] = [
    {
      name: 'Supporter',
      icon: Heart,
      price: 10,
      frequency: 'monthly',
      accentColor: '#10b981',
      benefits: [
        'Support open source sustainability',
        'Sponsor badge on your profile',
        'Monthly impact reports',
        'Community Discord access'
      ],
      cta: 'Become a Supporter'
    },
    {
      name: 'Advocate',
      icon: Star,
      price: 25,
      frequency: 'monthly',
      accentColor: '#ff7f50',
      benefits: [
        'All Supporter benefits',
        'Early access to new features',
        'Vote on project priorities',
        'Quarterly community calls',
        'Exclusive newsletter insights'
      ],
      recommended: true,
      cta: 'Become an Advocate'
    },
    {
      name: 'Champion',
      icon: Award,
      price: 100,
      frequency: 'monthly',
      accentColor: '#daa520',
      benefits: [
        'All Advocate benefits',
        'Priority support access',
        'Featured on sponsors page',
        'Direct line to maintainers',
        'Annual impact statement',
        'Invitation to annual summit'
      ],
      cta: 'Become a Champion'
    }
  ];

  const enterpriseTiers: SponsorTier[] = [
    {
      name: 'Bronze Partner',
      icon: Building2,
      price: 500,
      frequency: 'monthly',
      accentColor: '#cd7f32',
      benefits: [
        'Logo on website and materials',
        'Quarterly impact reports',
        'Priority email support',
        'Access to beta features',
        'Social media recognition'
      ],
      cta: 'Become a Bronze Partner'
    },
    {
      name: 'Silver Partner',
      icon: Shield,
      price: 2000,
      frequency: 'monthly',
      accentColor: '#c0c0c0',
      benefits: [
        'All Bronze Partner benefits',
        'Featured logo placement',
        'Dedicated account manager',
        'Monthly strategy calls',
        'Co-marketing opportunities',
        'Custom case study'
      ],
      recommended: true,
      cta: 'Become a Silver Partner'
    },
    {
      name: 'Gold Partner',
      icon: Crown,
      price: 5000,
      frequency: 'monthly',
      accentColor: '#ffd700',
      benefits: [
        'All Silver Partner benefits',
        'Premium logo placement',
        'Quarterly executive briefings',
        'Input on roadmap priorities',
        'Speaking opportunities at events',
        'White-glove support',
        'Custom integration support'
      ],
      cta: 'Become a Gold Partner'
    },
    {
      name: 'Platinum Partner',
      icon: Zap,
      price: 10000,
      frequency: 'monthly',
      accentColor: '#e5e4e2',
      benefits: [
        'All Gold Partner benefits',
        'Top-tier logo placement',
        'Board advisor seat',
        'Exclusive strategic partnership',
        'Named program sponsorship',
        'Dedicated maintainer support',
        'Custom SLA agreements',
        'Annual summit keynote slot'
      ],
      cta: 'Contact Sales'
    }
  ];

  const impactStats = [
    {
      icon: Code,
      value: '2,500+',
      label: 'Maintainers Supported',
      description: 'Active open source developers receiving funding'
    },
    {
      icon: Package,
      value: '10,000+',
      label: 'Projects Funded',
      description: 'Critical open source projects sustained'
    },
    {
      icon: Globe,
      value: '$2.5M+',
      label: 'Distributed Annually',
      description: 'Directly to maintainers and projects'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Goes to Developers',
      description: 'Only 5% for platform operations'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-brand-neutral-300">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-highlight/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 text-brand-accent" />
              <span className="text-brand-accent text-sm uppercase tracking-wider">
                Support Open Source
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-brand-neutral-950 mb-6">
              Become a Sponsor of Open Source Economy
            </h1>

            {/* Description */}
            <p className="text-brand-neutral-600 text-xl mb-8 max-w-3xl mx-auto">
              Help us build sustainable infrastructure for open source development. 
              Your sponsorship directly supports maintainers, funds critical projects, 
              and strengthens the entire ecosystem.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => {
                  const element = document.querySelector('#individual-sponsorship');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <User className="h-5 w-5" />
                Individual Sponsorship
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                onClick={() => {
                  const element = document.querySelector('#enterprise-sponsorship');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Building2 className="h-5 w-5" />
                Enterprise Partnership
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 text-brand-neutral-500">
              <Shield className="h-4 w-4 text-brand-success" />
              <span className="text-sm">
                501(c)(3) Non-Profit Organization • 95% of funds go directly to developers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="relative py-16 border-b border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Our Impact</h2>
              <p className="text-brand-neutral-600 text-lg">
                Together, we're making a real difference in the open source community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={idx}
                    className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center p-3 bg-brand-accent/20 rounded-xl mb-4">
                        <IconComponent className="h-6 w-6 text-brand-accent" />
                      </div>
                      <div className="text-3xl text-brand-neutral-950 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-brand-neutral-900 mb-1">
                        {stat.label}
                      </div>
                      <p className="text-brand-neutral-600 text-sm">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Individual Sponsorship Section */}
      <section id="individual-sponsorship" className="relative py-20 border-b border-brand-neutral-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-success/20 border border-brand-success/30 px-4 py-2 rounded-full mb-4">
                <User className="h-4 w-4 text-brand-success" />
                <span className="text-brand-success text-sm uppercase tracking-wider">
                  For Individuals
                </span>
              </div>
              <h2 className="text-brand-neutral-900 mb-4">Individual Sponsorship Tiers</h2>
              <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
                Join our community of individual supporters helping to sustain open source development
              </p>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {individualTiers.map((tier, idx) => {
                const IconComponent = tier.icon;
                return (
                  <Card
                    key={idx}
                    className={`relative border-2 ${
                      tier.recommended 
                        ? 'border-brand-accent shadow-2xl shadow-brand-accent/20 scale-105' 
                        : 'border-brand-neutral-300'
                    } bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark hover:border-brand-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-accent/20`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge 
                          className="bg-brand-accent text-white border-brand-accent px-4 py-1"
                        >
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <div 
                        className="inline-flex items-center justify-center p-4 rounded-2xl mx-auto mb-4"
                        style={{ 
                          backgroundColor: `${tier.accentColor}20`,
                          boxShadow: `0 8px 24px -8px ${tier.accentColor}60`
                        }}
                      >
                        <IconComponent 
                          className="h-8 w-8"
                          style={{ color: tier.accentColor }}
                        />
                      </div>
                      <CardTitle className="text-brand-neutral-950 mb-2">
                        {tier.name}
                      </CardTitle>
                      <div className="mb-2">
                        <span className="text-4xl text-brand-neutral-950">${tier.price}</span>
                        <span className="text-brand-neutral-600">/{tier.frequency}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {tier.benefits.map((benefit, benefitIdx) => (
                          <div key={benefitIdx} className="flex items-start gap-3">
                            <CheckCircle2 
                              className="h-5 w-5 flex-shrink-0 mt-0.5"
                              style={{ color: tier.accentColor }}
                            />
                            <span className="text-brand-neutral-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full mt-6"
                        variant={tier.recommended ? "default" : "outline"}
                      >
                        {tier.cta}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Sponsorship Section */}
      <section id="enterprise-sponsorship" className="relative py-20 border-b border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-highlight/20 border border-brand-highlight/30 px-4 py-2 rounded-full mb-4">
                <Building2 className="h-4 w-4 text-brand-highlight" />
                <span className="text-brand-highlight text-sm uppercase tracking-wider">
                  For Enterprises
                </span>
              </div>
              <h2 className="text-brand-neutral-900 mb-4">Enterprise Partnership Tiers</h2>
              <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
                Strategic partnerships for organizations committed to open source sustainability
              </p>
            </div>

            {/* Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseTiers.map((tier, idx) => {
                const IconComponent = tier.icon;
                return (
                  <Card
                    key={idx}
                    className={`relative border-2 ${
                      tier.recommended 
                        ? 'border-brand-accent shadow-2xl shadow-brand-accent/20' 
                        : 'border-brand-neutral-300'
                    } bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-accent/20`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge 
                          className="bg-brand-accent text-white border-brand-accent px-4 py-1"
                        >
                          Recommended
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div 
                          className="flex items-center justify-center p-4 rounded-2xl"
                          style={{ 
                            backgroundColor: `${tier.accentColor}20`,
                            boxShadow: `0 8px 24px -8px ${tier.accentColor}60`
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8"
                            style={{ color: tier.accentColor }}
                          />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-brand-neutral-950 mb-2">
                            {tier.name}
                          </CardTitle>
                          <div>
                            <span className="text-3xl text-brand-neutral-950">${tier.price.toLocaleString()}</span>
                            <span className="text-brand-neutral-600">/{tier.frequency}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {tier.benefits.map((benefit, benefitIdx) => (
                          <div key={benefitIdx} className="flex items-start gap-3">
                            <CheckCircle2 
                              className="h-5 w-5 flex-shrink-0 mt-0.5"
                              style={{ color: tier.accentColor }}
                            />
                            <span className="text-brand-neutral-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full mt-6"
                        variant={tier.recommended ? "default" : "outline"}
                      >
                        {tier.cta}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How Funds Are Used Section */}
      <section className="relative py-20 border-b border-brand-neutral-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Transparent Fund Distribution</h2>
              <p className="text-brand-neutral-600 text-lg">
                We believe in complete transparency. Here's exactly how your sponsorship is used.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-brand-success/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl text-brand-success mb-3">85%</div>
                  <div className="text-brand-neutral-900 mb-2">Direct to Maintainers</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Paid directly to open source maintainers and contributors
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-accent/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl text-brand-accent mb-3">10%</div>
                  <div className="text-brand-neutral-900 mb-2">Project Infrastructure</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Supporting critical dependencies and ecosystem tools
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-highlight/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl text-brand-highlight mb-3">5%</div>
                  <div className="text-brand-neutral-900 mb-2">Platform Operations</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Minimal overhead to run and improve the platform
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="relative py-20 border-b border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Why Sponsor Open Source Economy?</h2>
              <p className="text-brand-neutral-600 text-lg">
                Your sponsorship creates lasting impact across the entire open source ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-success transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-success/20 rounded-lg">
                      <Code className="h-5 w-5 text-brand-success" />
                    </div>
                    <CardTitle className="text-brand-neutral-950">Sustain Critical Infrastructure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-neutral-600">
                    The software industry depends on open source. Your support ensures maintainers 
                    can focus on building and maintaining the tools we all rely on.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-accent/20 rounded-lg">
                      <Users className="h-5 w-5 text-brand-accent" />
                    </div>
                    <CardTitle className="text-brand-neutral-950">Support Developer Communities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-neutral-600">
                    Enable maintainers to create better documentation, provide support, 
                    and build thriving communities around their projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-highlight transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-highlight/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-brand-highlight" />
                    </div>
                    <CardTitle className="text-brand-neutral-950">Drive Innovation Forward</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-neutral-600">
                    Fund new features, improvements, and breakthrough innovations that 
                    move the entire industry forward.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-success transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-success/20 rounded-lg">
                      <Shield className="h-5 w-5 text-brand-success" />
                    </div>
                    <CardTitle className="text-brand-neutral-950">Enhance Security & Stability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-neutral-600">
                    Support critical security updates, bug fixes, and maintenance that 
                    keep the open source ecosystem secure and reliable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-brand-accent bg-gradient-to-br from-brand-card-blue via-brand-card-blue-dark to-brand-secondary">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-brand-accent/20 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-brand-accent" />
                </div>
                
                <h2 className="text-brand-neutral-950 mb-4">
                  Ready to Make an Impact?
                </h2>
                
                <p className="text-brand-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
                  Join hundreds of individuals and organizations supporting open source sustainability. 
                  Choose your sponsorship tier and start making a difference today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="gap-2">
                    <User className="h-5 w-5" />
                    Individual Sponsorship
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Building2 className="h-5 w-5" />
                    Enterprise Partnership
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-neutral-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>sponsors@opensourceeconomy.org</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>github.com/opensourceeconomy</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
