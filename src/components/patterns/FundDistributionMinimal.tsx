import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  ArrowRight, 
  DollarSign, 
  Users, 
  Building2, 
  GitBranch, 
  Layers,
  Eye,
  Info
} from 'lucide-react';

interface FundDistributionMinimalProps {
  className?: string;
  onViewDetails?: () => void;
}

export function FundDistributionMinimal({ className = '', onViewDetails }: FundDistributionMinimalProps) {
  const fundAllocations = [
    {
      percentage: 55,
      title: 'Service Provider',
      subtitle: 'Maintainers & Experts',
      icon: <Users className="w-5 h-5" />,
      color: 'brand-accent'
    },
    {
      percentage: 20,
      title: 'Open Source Economy',
      subtitle: 'Platform Operations',
      icon: <Building2 className="w-5 h-5" />,
      color: 'brand-primary'
    },
    {
      percentage: 15,
      title: 'Open Source Project',
      subtitle: 'Project Development',
      icon: <GitBranch className="w-5 h-5" />,
      color: 'brand-success'
    },
    {
      percentage: 10,
      title: 'Project Dependencies',
      subtitle: 'Ecosystem Support',
      icon: <Layers className="w-5 h-5" />,
      color: 'brand-highlight'
    }
  ];

  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-brand-success/10 to-brand-accent/10 border border-brand-success/20 rounded-full mb-4">
            <DollarSign className="w-4 h-4 text-brand-success" />
            <span className="text-sm font-medium text-brand-success">Fund Transparency</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-foreground to-brand-accent bg-clip-text text-transparent">
            Where Your Investment Goes
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complete transparency on fund allocation. 85% goes directly to open source maintainers and projects.
          </p>
        </div>

        {/* Fund Allocation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fundAllocations.map((allocation, index) => {
            // Define fund usage explanations for each category
            const fundUsage = [
              // Service Provider (55%)
              ['Direct payments to maintainers', 'Expert consultation fees', 'Priority support delivery'],
              // Open Source Economy (20%)
              ['Platform development & security', 'Customer support operations', 'Quality assurance & compliance'],
              // Open Source Project (15%)
              ['Core project improvements', 'Bug fixes & feature development', 'Documentation & tooling'],
              // Project Dependencies (10%)
              ['Supporting critical dependencies', 'Ecosystem health initiatives', 'Upstream contribution funding']
            ];

            return (
              <Card key={index} className={`group border border-border/50 hover:border-${allocation.color}/30 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with Icon on Left and Percentage on Right */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${allocation.color}/10 to-${allocation.color}/20 flex items-center justify-center text-${allocation.color} group-hover:scale-110 transition-transform duration-300`}>
                      {allocation.icon}
                    </div>
                    
                    <div className={`text-3xl font-bold text-${allocation.color}`}>
                      {allocation.percentage}%
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1">
                    {allocation.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {index === 0 && "Direct compensation and priority support from expert maintainers"}
                    {index === 1 && "Platform development, security, and customer support operations"}
                    {index === 2 && "Core improvements, bug fixes, and feature development"}
                    {index === 3 && "Supporting critical dependencies and ecosystem health"}
                  </p>
                  
                  {/* Bottom Section - Always Aligned */}
                  <div className="mt-auto">
                    <Progress 
                      value={allocation.percentage} 
                      className={`h-2 bg-brand-neutral-300 [&>div]:bg-${allocation.color} mb-3`}
                    />
                    
                    {/* Fund Usage Bullet Points */}
                    <div className="text-left space-y-1">
                      {fundUsage[index].map((usage, usageIndex) => (
                        <div key={usageIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className={`w-1 h-1 rounded-full bg-${allocation.color} mt-1.5 flex-shrink-0`}></div>
                          <span>{usage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary & CTA */}
        <Card className="border border-brand-accent/20 bg-gradient-to-br from-card to-brand-accent/5">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-brand-accent" />
              <span className="text-brand-accent font-medium">Non-Profit Transparency</span>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-2">
              85% Direct Impact to Open Source
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Every dollar is tracked and reported. See our live dashboard for real-time fund distribution and project impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={onViewDetails}
                className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white"
              >
                <Info className="w-4 h-4 mr-2" />
                View Live Dashboard
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
              >
                Download Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}