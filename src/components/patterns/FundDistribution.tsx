import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  ArrowRight, 
  DollarSign, 
  Users, 
  Building2, 
  GitBranch, 
  Layers,
  TrendingUp,
  Shield,
  Heart,
  Eye,
  CheckCircle,
  Info
} from 'lucide-react';

interface FundDistributionProps {
  className?: string;
  onViewDetails?: () => void;
}

export function FundDistribution({ className = '', onViewDetails }: FundDistributionProps) {
  const fundAllocations = [
    {
      percentage: 55,
      title: 'Service Provider',
      subtitle: 'Maintainers & Experts',
      description: 'Direct compensation for maintainers providing services, ensuring sustainable income for open source creators.',
      icon: <Users className="w-8 h-8" />,
      color: 'brand-accent',
      features: [
        'Direct maintainer compensation',
        'Fair hourly rates and project fees',
        'Long-term sustainability support',
        'Recognition for expertise'
      ]
    },
    {
      percentage: 20,
      title: 'Open Source Economy',
      subtitle: 'Platform Operations',
      description: 'Platform maintenance, infrastructure, security, and operational costs to ensure reliable service delivery.',
      icon: <Building2 className="w-8 h-8" />,
      color: 'brand-primary',
      features: [
        'Platform development & maintenance',
        'Security & compliance infrastructure',
        'Customer support & success',
        'Quality assurance processes'
      ]
    },
    {
      percentage: 15,
      title: 'Open Source Project',
      subtitle: 'Project Development',
      description: 'Funding for the specific project development, maintenance, and improvement initiatives.',
      icon: <GitBranch className="w-8 h-8" />,
      color: 'brand-success',
      features: [
        'Core project development',
        'Bug fixes & improvements',
        'Documentation & testing',
        'Community support'
      ]
    },
    {
      percentage: 10,
      title: 'Project Dependencies',
      subtitle: 'Ecosystem Support',
      description: 'Supporting the broader ecosystem by funding critical dependencies and upstream projects.',
      icon: <Layers className="w-8 h-8" />,
      color: 'brand-highlight',
      features: [
        'Upstream dependency support',
        'Critical infrastructure funding',
        'Security patches for dependencies',
        'Ecosystem health initiatives'
      ]
    }
  ];

  const totalImpact = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '85% to Open Source',
      description: 'Directly benefits maintainers and projects'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Full Transparency',
      description: 'Every dollar tracked and reported'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Non-Profit Mission',
      description: 'Focused on ecosystem sustainability'
    }
  ];

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const prefix = type === 'bg' ? 'bg-' : type === 'text' ? 'text-' : 'border-';
    return `${prefix}${color}`;
  };

  return (
    <section className={`py-20 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-success/10 via-brand-accent/10 to-brand-highlight/10 border border-brand-success/20 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-brand-success" />
            <span className="text-sm font-medium text-brand-success">Fund Transparency</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground via-brand-success to-brand-accent bg-clip-text text-transparent">
            Where Your Investment Goes
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a non-profit organization, we're committed to complete transparency. Here's exactly how every dollar is allocated to create maximum impact for the open source ecosystem.
          </p>
        </div>

        {/* Fund Allocation Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {fundAllocations.map((allocation, index) => (
            <Card key={index} className={`group border border-border/50 hover:border-${allocation.color}/30 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card via-card to-${allocation.color}/5`}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${allocation.color}/10 to-${allocation.color}/20 flex items-center justify-center text-${allocation.color} group-hover:scale-110 transition-transform duration-300`}>
                      {allocation.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {allocation.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {allocation.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold text-${allocation.color}`}>
                      {allocation.percentage}%
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {allocation.description}
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Allocation</span>
                    <span className={`text-${allocation.color} font-medium`}>
                      {allocation.percentage}%
                    </span>
                  </div>
                  <Progress 
                    value={allocation.percentage} 
                    className={`h-3 bg-muted [&>div]:bg-${allocation.color}`}
                  />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-success" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {allocation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 bg-${allocation.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {totalImpact.map((impact, index) => (
            <Card key={index} className="text-center border border-border/50 hover:border-brand-success/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-success/10 to-brand-success/20 flex items-center justify-center text-brand-success mx-auto mb-4">
                  {impact.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {impact.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Fund Flow */}
        <Card className="border border-brand-success/20 bg-gradient-to-br from-card via-card to-brand-success/5 mb-16">
          <CardHeader>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Fund Flow Visualization
              </h3>
              <p className="text-muted-foreground">
                See how your investment creates a sustainable cycle of open source development
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Total Investment Flow */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-accent/10 to-brand-accent/20 rounded-2xl border border-brand-accent/20">
                  <DollarSign className="w-6 h-6 text-brand-accent" />
                  <span className="text-lg font-semibold text-foreground">Your Investment</span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>

              {/* Allocation Breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {fundAllocations.map((allocation, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${allocation.color}/10 to-${allocation.color}/20 flex items-center justify-center text-${allocation.color} mx-auto mb-2`}>
                      {React.cloneElement(allocation.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div className={`text-lg font-bold text-${allocation.color} mb-1`}>
                      {allocation.percentage}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {allocation.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Arrow */}
              <div className="text-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-success/10 to-brand-success/20 rounded-full border border-brand-success/20">
                  <Heart className="w-4 h-4 text-brand-success" />
                  <span className="text-sm font-medium text-brand-success">Sustainable Open Source Ecosystem</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border border-brand-accent/20 bg-gradient-to-br from-card via-card to-brand-accent/5 p-8">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-brand-accent" />
                <span className="text-brand-accent font-medium">Complete Transparency</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground">
                See Real-Time Fund Distribution
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Access our live transparency dashboard to see exactly how funds are allocated, track project progress, and measure ecosystem impact in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={onViewDetails}
                  className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white"
                >
                  <Info className="w-5 h-5 mr-2" />
                  View Live Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
                >
                  Download Impact Report
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  All financial data audited by independent third parties • Updated monthly • Full non-profit transparency
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}