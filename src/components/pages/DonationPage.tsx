import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Heart,
  ArrowLeft,
  Check,
  PieChart,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Mail,
  CreditCard,
  Lock
} from 'lucide-react';
import {
  DonationTier,
  FundDistribution,
  calculateDonationBreakdown,
  oneTimeDonationTiers,
  monthlyDonationTiers,
  standardFundDistribution,
  defaultImpactMetrics
} from '../../data/donationData';

interface DonationPageProps {
  projectName: string;
  projectSlug: string;
  fundDistribution?: FundDistribution;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onBackToProject: () => void;
}

type DonationType = 'one-time' | 'monthly';

export function DonationPage({
  projectName,
  projectSlug,
  fundDistribution = standardFundDistribution,
  onNavigateHome,
  onNavItemClick,
  onBackToProject
}: DonationPageProps) {
  const [donationType, setDonationType] = React.useState<DonationType>('one-time');
  const [selectedTier, setSelectedTier] = React.useState<DonationTier | null>(null);
  const [customAmount, setCustomAmount] = React.useState<string>('');
  const [email, setEmail] = React.useState('');
  const [showBreakdown, setShowBreakdown] = React.useState(false);

  const tiers = donationType === 'one-time' ? oneTimeDonationTiers : monthlyDonationTiers;
  
  const amount = selectedTier?.isCustom 
    ? parseFloat(customAmount) || 0 
    : selectedTier?.amount || 0;
  
  const breakdown = amount > 0 ? calculateDonationBreakdown(amount, fundDistribution) : null;

  const handleDonate = () => {
    // In a real app, this would integrate with a payment processor
    console.log('Processing donation:', {
      projectSlug,
      donationType,
      amount,
      email,
      breakdown
    });
    alert('Thank you for your donation! (This is a demo - no payment was processed)');
  };

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-accent/10 py-8 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <button
            onClick={onBackToProject}
            className="flex items-center gap-2 text-brand-neutral-600 hover:text-brand-accent transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {projectName}
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
              <Heart className="h-6 w-6 text-brand-accent" />
            </div>
            <div className="flex-1">
              <h1 className="text-brand-neutral-950 mb-2">
                Support {projectName}
              </h1>
              <p className="text-brand-neutral-600">
                Your contribution sustains open source development and supports the entire ecosystem. 
                Every dollar is transparently distributed to maximize impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Type Toggle */}
      <section className="bg-brand-secondary py-6 border-b border-brand-neutral-300 sticky top-0 z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setDonationType('one-time')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                donationType === 'one-time'
                  ? 'bg-brand-accent border-brand-accent text-white'
                  : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
              }`}
            >
              One-Time Donation
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`px-4 py-2 rounded-lg border transition-all ${
                donationType === 'monthly'
                  ? 'bg-brand-accent border-brand-accent text-white'
                  : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
              }`}
            >
              Monthly Support
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Donation Tiers */}
            <div className="lg:col-span-2">
              <h2 className="text-brand-neutral-950 mb-4">Choose Your Contribution</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`bg-brand-card-blue border rounded-lg p-4 text-left transition-all hover:border-brand-accent/50 ${
                      selectedTier?.id === tier.id
                        ? 'border-brand-accent ring-2 ring-brand-accent/20'
                        : 'border-brand-neutral-300'
                    } ${tier.popular ? 'relative' : ''}`}
                  >
                    {tier.popular && (
                      <Badge className="absolute -top-2 right-4 bg-brand-accent text-white border-brand-accent">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-brand-neutral-900">{tier.label}</h3>
                      {!tier.isCustom && (
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-brand-neutral-900 text-2xl">${tier.amount}</span>
                          {donationType === 'monthly' && (
                            <span className="text-brand-neutral-600 text-sm">/mo</span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-brand-neutral-600 text-sm mb-3">
                      {tier.description}
                    </p>
                    
                    <div className="space-y-1.5">
                      {tier.impact.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                          <span className="text-brand-neutral-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              {selectedTier?.isCustom && (
                <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4 mb-6">
                  <label className="block text-brand-neutral-900 mb-2">
                    Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-neutral-600">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      placeholder="50"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 bg-brand-secondary border border-brand-neutral-300 rounded-lg text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Email Input */}
              {amount > 0 && (
                <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4">
                  <h3 className="text-brand-neutral-900 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-brand-neutral-700 text-sm mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-neutral-500" />
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-brand-secondary border border-brand-neutral-300 rounded-lg text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all"
                        />
                      </div>
                      <p className="text-brand-neutral-500 text-xs mt-1.5">
                        We'll send you a receipt and updates about your impact
                      </p>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-brand-success/10 border border-brand-success/30 rounded-lg">
                      <Lock className="h-4 w-4 text-brand-success flex-shrink-0" />
                      <p className="text-brand-success text-sm">
                        Your information is secure and will never be shared
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Summary & Breakdown */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Summary */}
                {amount > 0 && (
                  <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4">
                    <h3 className="text-brand-neutral-900 mb-3">Donation Summary</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-neutral-600">Type:</span>
                        <span className="text-brand-neutral-900">
                          {donationType === 'one-time' ? 'One-Time' : 'Monthly'}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-neutral-600">Tier:</span>
                        <span className="text-brand-neutral-900">{selectedTier?.label}</span>
                      </div>
                      <div className="pt-2 border-t border-brand-neutral-300">
                        <div className="flex justify-between items-baseline">
                          <span className="text-brand-neutral-700">Total:</span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-brand-neutral-950 text-2xl">${amount}</span>
                            {donationType === 'monthly' && (
                              <span className="text-brand-neutral-600 text-sm">/month</span>
                            )}
                          </div>
                        </div>
                        {donationType === 'monthly' && (
                          <p className="text-brand-neutral-500 text-xs text-right mt-1">
                            ${amount * 12}/year
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      onClick={handleDonate}
                      disabled={!email || amount === 0}
                      className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Complete Donation
                    </Button>

                    <p className="text-brand-neutral-500 text-xs text-center mt-3">
                      Secure payment processing
                    </p>
                  </div>
                )}

                {/* Fund Distribution */}
                {amount > 0 && breakdown && (
                  <div className="bg-gradient-to-br from-brand-accent/10 via-brand-card-blue to-brand-highlight/10 border border-brand-accent/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <PieChart className="h-5 w-5 text-brand-accent" />
                      <h3 className="text-brand-neutral-900">Where Your Money Goes</h3>
                    </div>

                    <div className="space-y-2.5 mb-4">
                      <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                          <span className="text-brand-neutral-700 text-sm">To Project</span>
                        </div>
                        <div className="text-right">
                          <div className="text-brand-neutral-900">${breakdown.toProject}</div>
                          <div className="text-brand-neutral-500 text-xs">{fundDistribution.toProject}%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-highlight"></div>
                          <span className="text-brand-neutral-700 text-sm">Dependencies</span>
                        </div>
                        <div className="text-right">
                          <div className="text-brand-neutral-900">${breakdown.toDependencies}</div>
                          <div className="text-brand-neutral-500 text-xs">{fundDistribution.toDependencies}%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-success"></div>
                          <span className="text-brand-neutral-700 text-sm">Maintainers</span>
                        </div>
                        <div className="text-right">
                          <div className="text-brand-neutral-900">${breakdown.toMaintainers}</div>
                          <div className="text-brand-neutral-500 text-xs">{fundDistribution.toMaintainers}%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-brand-neutral-500"></div>
                          <span className="text-brand-neutral-700 text-sm">Platform</span>
                        </div>
                        <div className="text-right">
                          <div className="text-brand-neutral-900">${breakdown.toPlatform}</div>
                          <div className="text-brand-neutral-500 text-xs">{fundDistribution.toPlatform}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-brand-success/10 border border-brand-success/30 rounded-lg">
                      <p className="text-brand-neutral-700 text-xs">
                        <span className="text-brand-success">✓</span> 100% transparency - every dollar is accounted for and distributed to sustain the ecosystem
                      </p>
                    </div>
                  </div>
                )}

                {/* Trust Signals */}
                <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4">
                  <h3 className="text-brand-neutral-900 mb-3">Why Donate?</h3>
                  <div className="space-y-2.5">
                    {defaultImpactMetrics.map((metric, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand-success flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-brand-neutral-900 text-sm">{metric.title}</div>
                          <p className="text-brand-neutral-600 text-xs">{metric.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-gradient-to-br from-brand-accent/5 via-brand-secondary to-brand-highlight/5 border-t border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-6">
            <h2 className="text-brand-neutral-950 mb-2">Your Impact</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Every contribution makes a real difference in sustaining open source development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: TrendingUp,
                title: 'Accelerate Development',
                description: 'Enable faster feature releases and improvements'
              },
              {
                icon: Shield,
                title: 'Enhance Security',
                description: 'Fund security audits and vulnerability fixes'
              },
              {
                icon: Zap,
                title: 'Improve Performance',
                description: 'Support optimization and efficiency work'
              },
              {
                icon: Users,
                title: 'Grow Community',
                description: 'Enable better documentation and support'
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="text-brand-neutral-900 mb-1">{benefit.title}</h3>
                  <p className="text-brand-neutral-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
