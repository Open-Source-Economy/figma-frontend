import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { 
  Heart, 
  DollarSign, 
  Globe, 
  Shield, 
  Users, 
  BarChart3, 
  Zap, 
  ArrowLeft,
  PieChart,
  TrendingUp,
  CheckCircle,
  FileText,
  Download
} from 'lucide-react';

interface FundRedistributionPageProps {
  onNavigateHome: () => void;
  onNavItemClick?: (href: string) => void;
}

export function FundRedistributionPage({ onNavigateHome, onNavItemClick }: FundRedistributionPageProps) {
  const fundAllocation = [
    {
      category: 'Direct Service Delivery',
      percentage: 65,
      amount: '$65',
      description: 'Payment to expert maintainers for direct service delivery',
      color: 'brand-primary',
      icon: <Users className="w-6 h-6" />
    },
    {
      category: 'Project Sustainability',
      percentage: 20,
      amount: '$20',
      description: 'Funding for ongoing project maintenance and essential infrastructure',
      color: 'brand-success',
      icon: <Heart className="w-6 h-6" />
    },
    {
      category: 'Ecosystem Dependencies',
      percentage: 10,
      amount: '$10',
      description: 'Support for critical dependencies that projects rely on',
      color: 'brand-accent',
      icon: <Globe className="w-6 h-6" />
    },
    {
      category: 'Platform Operations',
      percentage: 5,
      amount: '$5',
      description: 'Non-profit operational costs and platform infrastructure',
      color: 'brand-warning',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const impactMetrics = [
    { value: '2.4M+', label: 'Developers Supported', description: 'Through funded projects' },
    { value: '850+', label: 'Projects Funded', description: 'Across the ecosystem' },
    { value: '$12M+', label: 'Redistributed', description: 'To maintainers & projects' },
    { value: '99.2%', label: 'Transparency Score', description: 'Audited fund allocation' }
  ];

  const recentDistributions = [
    {
      project: 'React',
      amount: '$45,000',
      purpose: 'Performance optimization and bug fixes',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      project: 'Vue.js',
      amount: '$32,000',
      purpose: 'TypeScript improvements and documentation',
      date: '2024-01-12',
      status: 'In Progress'
    },
    {
      project: 'Express.js',
      amount: '$28,000',
      purpose: 'Security updates and dependency maintenance',
      date: '2024-01-10',
      status: 'Completed'
    },
    {
      project: 'Node.js Dependencies',
      amount: '$15,000',
      purpose: 'Critical dependency security patches',
      date: '2024-01-08',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavItemClick={onNavItemClick || (() => {})}
        ctaText="Get Started Today"
        onCtaClick={onNavigateHome}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              onClick={onNavigateHome}
              className="mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>

            <SectionHeader
              badge="100% Transparent"
              title="How We Redistribute Funds"
              description="As a non-profit, every dollar you pay is transparently allocated to strengthen the open source ecosystem"
              spacing="lg"
              titleLevel="h1"
              align="center"
              maxWidth="4xl"
              className="[&_h1]:text-display-medium [&_h1]:md:text-display-large"
            />
          </div>
        </div>
      </section>

      {/* Fund Allocation Breakdown */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Fund Allocation"
              title="Where Every Dollar Goes"
              description="Complete transparency in how your payment contributes to open source sustainability"
              spacing="lg"
              titleLevel="h2"
              align="center"
              maxWidth="3xl"
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Visual Chart Representation */}
              <div className="relative">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="font-semibold mb-2">Example: $100 Service Payment</h3>
                      <p className="text-sm text-muted-foreground">How funds are distributed</p>
                    </div>
                    
                    {/* Simplified pie chart representation */}
                    <div className="relative w-64 h-64 mx-auto mb-8">
                      <div className="absolute inset-0 rounded-full border-8 border-brand-primary" 
                           style={{ 
                             background: `conic-gradient(
                               var(--brand-primary) 0% 65%,
                               var(--brand-success) 65% 85%,
                               var(--brand-accent) 85% 95%,
                               var(--brand-warning) 95% 100%
                             )` 
                           }}>
                      </div>
                      <div className="absolute inset-8 bg-background rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <PieChart className="w-8 h-8 mx-auto mb-2 text-brand-primary" />
                          <div className="font-semibold">100%</div>
                          <div className="text-xs text-muted-foreground">Allocated</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Badge variant="outline" className="text-brand-success border-brand-success/20">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Audited Monthly
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-4">
                {fundAllocation.map((item) => (
                  <Card key={item.category} className={`border-${item.color}/20 hover:border-${item.color}/40 transition-colors`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-${item.color}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{item.category}</h4>
                            <div className="text-right">
                              <div className={`text-lg font-bold text-${item.color}`}>{item.percentage}%</div>
                              <div className="text-sm text-muted-foreground">{item.amount}</div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          
                          {/* Progress bar */}
                          <div className="mt-3 w-full bg-border/30 rounded-full h-2">
                            <div 
                              className={`bg-${item.color} h-2 rounded-full transition-all duration-500`}
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Our Impact"
              title="Ecosystem Health Metrics"
              description="Real-time tracking of how funds strengthen the open source ecosystem"
              spacing="lg"
              titleLevel="h2"
              align="center"
              maxWidth="3xl"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric) => (
                <Card key={metric.label} className="border-brand-primary/20 hover:border-brand-primary/40 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-2">{metric.value}</div>
                    <div className="font-semibold mb-1">{metric.label}</div>
                    <div className="text-sm text-muted-foreground">{metric.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Distributions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Recent Activity"
              title="Latest Fund Distributions"
              description="Transparent tracking of recent payments to projects and maintainers"
              spacing="lg"
              titleLevel="h2"
              align="center"
              maxWidth="3xl"
            />

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-6 font-semibold">Project</th>
                        <th className="text-left p-6 font-semibold">Amount</th>
                        <th className="text-left p-6 font-semibold">Purpose</th>
                        <th className="text-left p-6 font-semibold">Date</th>
                        <th className="text-left p-6 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentDistributions.map((distribution, index) => (
                        <tr key={index} className="border-b border-border/30 hover:bg-muted/50 transition-colors">
                          <td className="p-6">
                            <div className="font-semibold">{distribution.project}</div>
                          </td>
                          <td className="p-6">
                            <div className="font-semibold text-brand-success">{distribution.amount}</div>
                          </td>
                          <td className="p-6">
                            <div className="text-sm text-muted-foreground max-w-xs">
                              {distribution.purpose}
                            </div>
                          </td>
                          <td className="p-6">
                            <div className="text-sm">{distribution.date}</div>
                          </td>
                          <td className="p-6">
                            <Badge 
                              variant={distribution.status === 'Completed' ? 'default' : 'outline'}
                              className={distribution.status === 'Completed' ? 'bg-brand-success text-white' : 'border-brand-warning text-brand-warning'}
                            >
                              {distribution.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-brand-primary/20 bg-gradient-to-r from-brand-primary/5 to-brand-success/10 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <Badge variant="outline" className="mb-6 text-brand-primary border-brand-primary/20">
                Join Our Mission
              </Badge>
              <SectionHeader
                title="Ready to Support Open Source Sustainably?"
                description="Every enterprise service you purchase directly strengthens the open source ecosystem while solving your business challenges."
                spacing="lg"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="px-8" onClick={onNavigateHome}>
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download Impact Report
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-6 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-brand-success" />
                  <span>100% Transparent</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-brand-success" />
                  <span>Monthly Audits</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-brand-success" />
                  <span>Open Source Impact</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}