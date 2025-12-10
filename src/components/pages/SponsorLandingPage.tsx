import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Heart, 
  Building2, 
  User, 
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp
} from 'lucide-react';

interface SponsorLandingPageProps {
  onNavigate?: (page: string) => void;
}

export function SponsorLandingPage({ onNavigate }: SponsorLandingPageProps) {
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
              Support the Future of Open Source
            </h1>

            {/* Description */}
            <p className="text-brand-neutral-600 text-xl mb-12 max-w-3xl mx-auto">
              Join us in building sustainable infrastructure for open source development. 
              Choose the path that fits your goals.
            </p>

            {/* Trust Indicator */}
            <div className="flex items-center justify-center gap-2 text-brand-neutral-500 mb-16">
              <Shield className="h-4 w-4 text-brand-success" />
              <span className="text-sm">
                501(c)(3) Non-Profit Organization • 95% of funds go directly to developers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Path Selection Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-brand-neutral-900 mb-4">Choose Your Path</h2>
              <p className="text-brand-neutral-600 text-lg max-w-2xl mx-auto">
                Whether you're an individual developer or an enterprise organization, 
                we have tailored options for your support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Individual Path */}
              <Card className="relative border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue hover:border-brand-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-accent/20 overflow-hidden group">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                
                <CardContent className="p-8 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-accent/10 mb-6">
                    <User className="h-8 w-8 text-brand-accent" />
                  </div>

                  <h3 className="text-2xl text-brand-neutral-950 mb-3">
                    Individual Supporter
                  </h3>

                  <p className="text-brand-neutral-600 mb-6">
                    Join a community of developers and enthusiasts supporting the open source ecosystem.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Flexible monthly or one-time donations
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Community recognition and badges
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Impact reports and updates
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Early access to features
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm text-brand-neutral-600">Starting at</span>
                    <span className="text-3xl text-brand-neutral-950">$10</span>
                    <span className="text-brand-neutral-600">/month</span>
                  </div>

                  <Button 
                    className="w-full gap-2 group/btn"
                    onClick={() => onNavigate?.('sponsor-individual')}
                  >
                    <span>Support as Individual</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Path */}
              <Card className="relative border-2 border-brand-accent bg-gradient-to-br from-brand-card-blue to-brand-card-blue-dark hover:shadow-2xl hover:shadow-brand-accent/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
                {/* Recommended Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 bg-brand-accent text-white px-3 py-1 rounded-full text-xs">
                    <Sparkles className="h-3 w-3" />
                    <span>Strategic</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-highlight/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-500" />
                
                <CardContent className="p-8 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-highlight/20 mb-6">
                    <Building2 className="h-8 w-8 text-brand-highlight" />
                  </div>

                  <h3 className="text-2xl text-brand-neutral-950 mb-3">
                    Enterprise Partner
                  </h3>

                  <p className="text-brand-neutral-600 mb-6">
                    Build strategic partnerships that align your business with open source sustainability.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Premium brand visibility and logo placement
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Dedicated account management
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Co-marketing and thought leadership
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-highlight flex-shrink-0 mt-0.5" />
                      <span className="text-brand-neutral-700 text-sm">
                        Custom partnership opportunities
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm text-brand-neutral-600">Starting at</span>
                    <span className="text-3xl text-brand-neutral-950">$500</span>
                    <span className="text-brand-neutral-600">/month</span>
                  </div>

                  <Button 
                    className="w-full gap-2 group/btn"
                    onClick={() => onNavigate?.('sponsor-enterprise')}
                  >
                    <span>Partner as Enterprise</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-transparent to-brand-card-blue-dark border-t border-brand-neutral-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl text-brand-neutral-900 mb-12">
              Our Collective Impact
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6">
                <div className="text-4xl text-brand-accent mb-2">2,500+</div>
                <div className="text-brand-neutral-700 text-sm">Maintainers Supported</div>
              </div>
              <div className="p-6">
                <div className="text-4xl text-brand-highlight mb-2">10,000+</div>
                <div className="text-brand-neutral-700 text-sm">Projects Funded</div>
              </div>
              <div className="p-6">
                <div className="text-4xl text-brand-success mb-2">$2.5M+</div>
                <div className="text-brand-neutral-700 text-sm">Distributed Annually</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center gap-1 text-4xl text-brand-accent mb-2">
                  <span>95%</span>
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="text-brand-neutral-700 text-sm">To Developers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
