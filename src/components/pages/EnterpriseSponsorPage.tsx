import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Building2, 
  CheckCircle2, 
  Shield, 
  Crown,
  Zap,
  TrendingUp,
  Globe,
  Users,
  Sparkles,
  Award,
  Target,
  Lightbulb,
  BarChart3
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

interface EnterpriseSponsorPageProps {
  onNavigate?: (page: string) => void;
}

export function EnterpriseSponsorPage({ onNavigate }: EnterpriseSponsorPageProps) {
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

  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-brand-neutral-300">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-highlight/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-highlight/20 border border-brand-highlight/30 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-4 w-4 text-brand-highlight" />
              <span className="text-brand-highlight text-sm uppercase tracking-wider">
                Enterprise Partnership
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-brand-neutral-950 mb-6">
              Strategic Partnerships for Open Source Leaders
            </h1>

            {/* Description */}
            <p className="text-brand-neutral-600 text-xl mb-8 max-w-3xl mx-auto">
              Align your brand with open source sustainability. Demonstrate your commitment 
              to the ecosystem your business depends on while gaining visibility, influence, 
              and strategic advantages.
            </p>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 text-brand-neutral-500">
              <Shield className="h-4 w-4 text-brand-success" />
              <span className="text-sm">
                501(c)(3) Non-Profit Organization • Tax-deductible partnerships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative py-20 border-b border-brand-neutral-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Why Partner With Us</h2>
              <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
                Beyond CSR: Strategic benefits for organizations committed to open source sustainability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 mb-4">
                    <Target className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Brand Visibility</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Position your brand alongside the open source projects that power modern software development
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-highlight transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-highlight/10 mb-4">
                    <Users className="h-6 w-6 text-brand-highlight" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Developer Goodwill</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Build authentic connections with the developer community through meaningful support
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-success transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-success/10 mb-4">
                    <Lightbulb className="h-6 w-6 text-brand-success" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Thought Leadership</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Access speaking opportunities, co-marketing initiatives, and industry recognition
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 mb-4">
                    <BarChart3 className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Ecosystem Health</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Ensure the sustainability of the open source tools your business depends on
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-highlight transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-highlight/10 mb-4">
                    <TrendingUp className="h-6 w-6 text-brand-highlight" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Strategic Influence</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Gain input on project priorities and direct access to key maintainers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-success transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-success/10 mb-4">
                    <Globe className="h-6 w-6 text-brand-success" />
                  </div>
                  <h3 className="text-lg text-brand-neutral-950 mb-2">Market Differentiation</h3>
                  <p className="text-brand-neutral-600 text-sm">
                    Stand out as a leader in corporate responsibility and open source stewardship
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="relative py-20 border-b border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Partnership Tiers</h2>
              <p className="text-brand-neutral-600 text-lg">
                Strategic partnerships for organizations committed to open source sustainability
              </p>
            </div>

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
                          className="bg-brand-accent text-white border-brand-accent px-4 py-1 gap-1"
                        >
                          <Sparkles className="h-3 w-3" />
                          <span>Most Popular</span>
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

            {/* Custom Partnership CTA */}
            <div className="mt-12 text-center">
              <Card className="border-2 border-brand-highlight/30 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-brand-highlight mx-auto mb-4" />
                  <h3 className="text-xl text-brand-neutral-950 mb-2">
                    Custom Partnership Opportunities
                  </h3>
                  <p className="text-brand-neutral-600 mb-6 max-w-2xl mx-auto">
                    Looking for a tailored partnership that aligns with your specific goals? 
                    Let's discuss custom sponsorship packages, named programs, or strategic initiatives.
                  </p>
                  <Button size="lg" variant="outline">
                    Contact Our Partnership Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context Section */}
      <section className="relative py-20 border-b border-brand-neutral-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">The Open Source Economy Opportunity</h2>
              <p className="text-brand-neutral-600 text-lg">
                Understanding the market dynamics and our mission
              </p>
            </div>

            <div className="space-y-6 text-brand-neutral-600 text-lg leading-relaxed">
              <p>
                The open-source services market is experiencing explosive growth—<strong className="text-brand-neutral-800">$27B in 2022, projected to reach $44B by 2027</strong>. Yet this wealth remains largely privatized, controlled by enterprises with disproportionately small amounts flowing back to the commons.
              </p>

              <p>
                When funds do flow back, they only reach top-level visible projects, leaving foundational dependencies—maintained by volunteers—without sustainable support. This creates resource mismatches that disadvantage commons-based solutions.
              </p>

              <p>
                <strong className="text-brand-neutral-800">We're building the infrastructure to change this.</strong> Our nonprofit introduces a new building block for the internet commons: sustainable funding that ensures maintainers at all levels can continue their essential work.
              </p>

              <p className="text-brand-accent-hover">
                By partnering with us, you're not just sponsoring projects—you're investing in the fundamental infrastructure that powers your business and the entire software industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Transparency Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Transparent Fund Distribution</h2>
              <p className="text-brand-neutral-600 text-lg">
                See exactly how your partnership investment creates impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-brand-success/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark text-center">
                <CardContent className="p-6">
                  <div className="text-5xl text-brand-success mb-3">85%</div>
                  <div className="text-brand-neutral-900 mb-2">Direct to Maintainers</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Paid to developers and contributors
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-accent/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark text-center">
                <CardContent className="p-6">
                  <div className="text-5xl text-brand-accent mb-3">10%</div>
                  <div className="text-brand-neutral-900 mb-2">Infrastructure</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Dependencies and ecosystem
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-highlight/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark text-center">
                <CardContent className="p-6">
                  <div className="text-5xl text-brand-highlight mb-3">5%</div>
                  <div className="text-brand-neutral-900 mb-2">Operations</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Platform maintenance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-accent/30 bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark text-center">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-1 text-5xl text-brand-accent mb-3">
                    <span>95%</span>
                  </div>
                  <div className="text-brand-neutral-900 mb-2">To Ecosystem</div>
                  <p className="text-brand-neutral-600 text-sm">
                    Combined developer support
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-brand-accent mx-auto mb-3" />
                  <div className="text-3xl text-brand-neutral-950 mb-2">2,500+</div>
                  <div className="text-brand-neutral-700 text-sm">Maintainers Supported</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue text-center">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-brand-highlight mx-auto mb-3" />
                  <div className="text-3xl text-brand-neutral-950 mb-2">10,000+</div>
                  <div className="text-brand-neutral-700 text-sm">Projects Funded</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue text-center">
                <CardContent className="p-6">
                  <BarChart3 className="h-8 w-8 text-brand-success mx-auto mb-3" />
                  <div className="text-3xl text-brand-neutral-950 mb-2">$2.5M+</div>
                  <div className="text-brand-neutral-700 text-sm">Distributed Annually</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
