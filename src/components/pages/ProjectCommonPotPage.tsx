import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Heart, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap,
  GitBranch,
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Plus,
  ExternalLink,
  Info,
  Sparkles,
  UserPlus,
  Handshake
} from 'lucide-react';
import { Card } from '../ui/card';
import { Avatar } from '../ui/avatar';

interface ProjectCommonPotPageProps {
  projectSlug?: string;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onBecomeProvider?: () => void;
}

export const ProjectCommonPotPage: React.FC<ProjectCommonPotPageProps> = ({
  projectSlug = 'react',
  onNavigateHome,
  onNavItemClick,
  onBecomeProvider
}) => {
  const [selectedTab, setSelectedTab] = React.useState<'overview' | 'contributors' | 'recipients' | 'requests'>('overview');
  const [showRequestForm, setShowRequestForm] = React.useState(false);

  // Mock data - in production, this would come from API
  const potData = {
    projectName: 'React',
    totalPotBalance: 125000,
    monthlyContributions: 18500,
    monthlyDistributions: 12300,
    totalContributors: 8,
    totalRecipients: 23,
    activeRequests: 5,
    fundedRequests: 47
  };

  const contributors = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'SC',
      role: 'Service Provider',
      monthlyContribution: 4500,
      totalContributed: 54000,
      since: '2024-01',
      servicesProvided: ['Enterprise Support', 'Custom Development']
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      avatar: 'MR',
      role: 'Service Provider',
      monthlyContribution: 3800,
      totalContributed: 45600,
      since: '2024-02',
      servicesProvided: ['Code Review', 'Training']
    },
    {
      id: '3',
      name: 'Emily Watson',
      avatar: 'EW',
      role: 'Service Provider',
      monthlyContribution: 3200,
      totalContributed: 38400,
      since: '2024-03',
      servicesProvided: ['Bug Fixes', 'Feature Development']
    },
    {
      id: '4',
      name: 'David Kim',
      avatar: 'DK',
      role: 'Service Provider',
      monthlyContribution: 2800,
      totalContributed: 33600,
      since: '2024-03',
      servicesProvided: ['Architecture Consulting']
    },
    {
      id: '5',
      name: 'Lisa Johnson',
      avatar: 'LJ',
      role: 'Service Provider',
      monthlyContribution: 2100,
      totalContributed: 25200,
      since: '2024-04',
      servicesProvided: ['Documentation', 'Testing']
    }
  ];

  const recipients = [
    {
      id: '1',
      name: 'Alex Thompson',
      avatar: 'AT',
      role: 'Core Maintainer',
      monthlyReceived: 2800,
      totalReceived: 33600,
      contributions: 'Core architecture, performance optimization',
      activeRequests: 2
    },
    {
      id: '2',
      name: 'Jordan Lee',
      avatar: 'JL',
      role: 'Contributor',
      monthlyReceived: 1800,
      totalReceived: 21600,
      contributions: 'Documentation improvements, bug fixes',
      activeRequests: 1
    },
    {
      id: '3',
      name: 'Sam Patel',
      avatar: 'SP',
      role: 'Contributor',
      monthlyReceived: 1500,
      totalReceived: 18000,
      contributions: 'Testing framework, CI/CD improvements',
      activeRequests: 0
    },
    {
      id: '4',
      name: 'Taylor Brown',
      avatar: 'TB',
      role: 'Contributor',
      monthlyReceived: 1200,
      totalReceived: 14400,
      contributions: 'Accessibility features, mobile support',
      activeRequests: 1
    }
  ];

  const fundingRequests = [
    {
      id: '1',
      title: 'Implement Server Components Support',
      requester: 'Alex Thompson',
      requestedAmount: 8000,
      approvedAmount: 8000,
      status: 'approved',
      description: 'Add comprehensive server components support with streaming and suspense integration',
      estimatedHours: 120,
      priority: 'high',
      createdAt: '2024-10-15',
      votesFor: 12,
      votesAgainst: 0
    },
    {
      id: '2',
      title: 'Performance Optimization for Large Lists',
      requester: 'Jordan Lee',
      requestedAmount: 4500,
      approvedAmount: null,
      status: 'pending',
      description: 'Optimize rendering performance for lists with 10k+ items using virtualization',
      estimatedHours: 60,
      priority: 'medium',
      createdAt: '2024-10-20',
      votesFor: 8,
      votesAgainst: 1
    },
    {
      id: '3',
      title: 'Accessibility Audit and Improvements',
      requester: 'Taylor Brown',
      requestedAmount: 3500,
      approvedAmount: null,
      status: 'pending',
      description: 'Complete WCAG 2.1 AA compliance audit and implement necessary improvements',
      estimatedHours: 50,
      priority: 'high',
      createdAt: '2024-10-22',
      votesFor: 10,
      votesAgainst: 0
    },
    {
      id: '4',
      title: 'TypeScript Migration Documentation',
      requester: 'Sam Patel',
      requestedAmount: 2000,
      approvedAmount: null,
      status: 'pending',
      description: 'Create comprehensive guide for migrating from JavaScript to TypeScript',
      estimatedHours: 30,
      priority: 'low',
      createdAt: '2024-10-23',
      votesFor: 5,
      votesAgainst: 2
    },
    {
      id: '5',
      title: 'Mobile Touch Gestures Enhancement',
      requester: 'Taylor Brown',
      requestedAmount: 3000,
      approvedAmount: null,
      status: 'rejected',
      description: 'Improve mobile touch gesture handling and add swipe actions',
      estimatedHours: 45,
      priority: 'low',
      createdAt: '2024-10-18',
      votesFor: 3,
      votesAgainst: 8
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-brand-success/20 text-brand-success';
      case 'pending':
        return 'bg-brand-warning/20 text-brand-warning';
      case 'rejected':
        return 'bg-brand-error/20 text-brand-error';
      default:
        return 'bg-brand-neutral-300/20 text-brand-neutral-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-brand-error';
      case 'medium':
        return 'text-brand-warning';
      case 'low':
        return 'text-brand-neutral-600';
      default:
        return 'text-brand-neutral-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-secondary-dark via-brand-neutral-100 to-brand-card-blue pt-24 pb-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-highlight/10 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-brand-neutral-600 hover:text-brand-neutral-800 mb-6 transition-colors"
          >
            ← Back to Projects
          </button>

          <div className="flex items-start justify-between gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-brand-neutral-900 mb-1">{potData.projectName} Common Pot</h1>
                  <p className="text-sm text-brand-neutral-600">Community-funded development pool</p>
                </div>
              </div>
              
              <p className="text-brand-neutral-700 max-w-2xl">
                The Common Pot is funded by service providers who earn from enterprise contracts. These funds support maintainers and contributors working on community-benefiting features that wouldn't otherwise be funded.
              </p>

              {/* Project Statistics */}
              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-brand-neutral-600">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>220k stars</span>
                </div>

                <span className="text-brand-neutral-400">·</span>

                <div className="flex items-center gap-1.5">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  <span>20M+ weekly</span>
                </div>

                <span className="text-brand-neutral-400">·</span>

                <div className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>v18.2.0</span>
                </div>

                <span className="text-brand-neutral-400">·</span>

                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>MIT</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Button
                  onClick={() => onNavItemClick('contact')}
                  className="bg-gradient-to-r from-brand-highlight to-brand-warning text-white hover:opacity-90"
                  size="lg"
                >
                  Schedule Consultation
                </Button>

                <Button
                  onClick={() => onNavItemClick('sponsorship')}
                  variant="outline"
                  size="lg"
                  className="border-brand-neutral-300 text-brand-neutral-900 hover:bg-brand-card-blue-light"
                >
                  Support This Project
                </Button>

                <button
                  onClick={() => window.open('https://github.com/facebook/react', '_blank')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-brand-neutral-600 hover:text-brand-neutral-700 transition-colors cursor-pointer"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </button>

                <button
                  onClick={() => window.open('https://react.dev', '_blank')}
                  className="inline-flex items-center gap-2 px-4 py-2 text-brand-neutral-700 hover:text-brand-neutral-900 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Documentation</span>
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-brand-neutral-600 mb-1">Current Balance</div>
              <div className="text-3xl text-brand-neutral-900">${potData.totalPotBalance.toLocaleString()}</div>
              <div className="flex items-center justify-end gap-2 mt-2">
                <div className="flex items-center gap-1 text-xs text-brand-success">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>+${potData.monthlyContributions.toLocaleString()}/mo</span>
                </div>
                <span className="text-xs text-brand-neutral-500">·</span>
                <div className="flex items-center gap-1 text-xs text-brand-neutral-600">
                  <ArrowDownRight className="w-3 h-3" />
                  <span>-${potData.monthlyDistributions.toLocaleString()}/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-brand-card-blue/50 backdrop-blur-sm rounded-xl p-4 border border-brand-neutral-300/10">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-brand-accent" />
                <TrendingUp className="w-4 h-4 text-brand-success" />
              </div>
              <div className="text-2xl text-brand-neutral-900 mb-1">{potData.totalContributors}</div>
              <div className="text-xs text-brand-neutral-600">Service Providers</div>
            </div>

            <div className="bg-brand-card-blue/50 backdrop-blur-sm rounded-xl p-4 border border-brand-neutral-300/10">
              <div className="flex items-center justify-between mb-2">
                <Heart className="w-5 h-5 text-brand-highlight" />
                <CheckCircle2 className="w-4 h-4 text-brand-success" />
              </div>
              <div className="text-2xl text-brand-neutral-900 mb-1">{potData.totalRecipients}</div>
              <div className="text-xs text-brand-neutral-600">Active Recipients</div>
            </div>

            <div className="bg-brand-card-blue/50 backdrop-blur-sm rounded-xl p-4 border border-brand-neutral-300/10">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-5 h-5 text-brand-success" />
                <Clock className="w-4 h-4 text-brand-warning" />
              </div>
              <div className="text-2xl text-brand-neutral-900 mb-1">{potData.activeRequests}</div>
              <div className="text-xs text-brand-neutral-600">Pending Requests</div>
            </div>

            <div className="bg-brand-card-blue/50 backdrop-blur-sm rounded-xl p-4 border border-brand-neutral-300/10">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="w-5 h-5 text-brand-success" />
                <Sparkles className="w-4 h-4 text-brand-accent" />
              </div>
              <div className="text-2xl text-brand-neutral-900 mb-1">{potData.fundedRequests}</div>
              <div className="text-xs text-brand-neutral-600">Funded Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-brand-neutral-300/10">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === 'overview'
                  ? 'bg-brand-card-blue text-brand-neutral-900'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('contributors')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === 'contributors'
                  ? 'bg-brand-card-blue text-brand-neutral-900'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800'
              }`}
            >
              Contributors ({contributors.length})
            </button>
            <button
              onClick={() => setSelectedTab('recipients')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === 'recipients'
                  ? 'bg-brand-card-blue text-brand-neutral-900'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800'
              }`}
            >
              Recipients ({recipients.length})
            </button>
            <button
              onClick={() => setSelectedTab('requests')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === 'requests'
                  ? 'bg-brand-card-blue text-brand-neutral-900'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800'
              }`}
            >
              Funding Requests ({fundingRequests.length})
            </button>
          </div>

          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div className="space-y-8">
              {/* How It Works */}
              <div className="bg-brand-card-blue rounded-2xl p-8 border border-brand-neutral-300/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-highlight to-brand-warning rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-brand-neutral-900 mb-2">How the Common Pot Works</h2>
                    <p className="text-sm text-brand-neutral-600">
                      A sustainable funding model that connects enterprise revenue with community development
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-4 h-4 text-brand-success" />
                      </div>
                      <h3 className="text-brand-neutral-800">1. Providers Earn</h3>
                    </div>
                    <p className="text-sm text-brand-neutral-600 pl-11">
                      Service providers earn revenue from enterprise contracts for support, features, and consulting services.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-highlight/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-brand-highlight" />
                      </div>
                      <h3 className="text-brand-neutral-800">2. Automatic Contribution</h3>
                    </div>
                    <p className="text-sm text-brand-neutral-600 pl-11">
                      A percentage of their earnings automatically flows into the project's common pot to fund community work.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-brand-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-brand-accent" />
                      </div>
                      <h3 className="text-brand-neutral-800">3. Community Benefits</h3>
                    </div>
                    <p className="text-sm text-brand-neutral-600 pl-11">
                      Maintainers request funding for important work that benefits everyone but wouldn't otherwise be funded.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-neutral-300/10">
                  <div className="bg-brand-success/5 rounded-xl p-4 border border-brand-success/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-brand-neutral-800 mb-1">
                          <span className="text-brand-neutral-900">This is sustainable and fair:</span> Service providers earn from their enterprise work while automatically supporting the ecosystem. Recipients focus on community-benefiting features without enterprise obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-card-blue rounded-2xl p-6 border border-brand-neutral-300/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-brand-neutral-900">Top Contributors</h3>
                    <button
                      onClick={() => setSelectedTab('contributors')}
                      className="text-sm text-brand-accent hover:text-brand-accent-light transition-colors"
                    >
                      View all →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {contributors.slice(0, 5).map((contributor) => (
                      <div key={contributor.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-card-blue-light transition-colors">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-accent-dark text-white flex items-center justify-center">
                          {contributor.avatar}
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-brand-neutral-900">{contributor.name}</div>
                          <div className="text-xs text-brand-neutral-600">{contributor.servicesProvided.join(', ')}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-brand-success">${contributor.monthlyContribution.toLocaleString()}</div>
                          <div className="text-xs text-brand-neutral-600">/month</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-card-blue rounded-2xl p-6 border border-brand-neutral-300/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-brand-neutral-900">Recent Recipients</h3>
                    <button
                      onClick={() => setSelectedTab('recipients')}
                      className="text-sm text-brand-accent hover:text-brand-accent-light transition-colors"
                    >
                      View all →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {recipients.slice(0, 5).map((recipient) => (
                      <div key={recipient.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-card-blue-light transition-colors">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-brand-highlight to-brand-warning text-white flex items-center justify-center">
                          {recipient.avatar}
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-brand-neutral-900">{recipient.name}</div>
                          <div className="text-xs text-brand-neutral-600 truncate">{recipient.contributions}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-brand-neutral-800">${recipient.monthlyReceived.toLocaleString()}</div>
                          <div className="text-xs text-brand-neutral-600">/month</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contributors Tab */}
          {selectedTab === 'contributors' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-brand-neutral-900 mb-1">Service Providers</h2>
                  <p className="text-sm text-brand-neutral-600">
                    Providers earn from enterprise contracts and contribute to the common pot
                  </p>
                </div>
              </div>

              {contributors.map((contributor) => (
                <div key={contributor.id} className="bg-brand-card-blue rounded-xl p-6 border border-brand-neutral-300/10 hover:border-brand-accent/20 transition-all">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-accent-dark text-white flex items-center justify-center text-lg">
                      {contributor.avatar}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-brand-neutral-900 mb-1">{contributor.name}</h3>
                          <Badge className="bg-brand-accent/20 text-brand-accent border-0 text-xs">
                            {contributor.role}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl text-brand-success">${contributor.monthlyContribution.toLocaleString()}</div>
                          <div className="text-xs text-brand-neutral-600">per month</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-brand-card-blue-dark rounded-lg p-3">
                          <div className="text-xs text-brand-neutral-600 mb-1">Total Contributed</div>
                          <div className="text-lg text-brand-neutral-900">${contributor.totalContributed.toLocaleString()}</div>
                        </div>
                        <div className="bg-brand-card-blue-dark rounded-lg p-3">
                          <div className="text-xs text-brand-neutral-600 mb-1">Contributing Since</div>
                          <div className="text-lg text-brand-neutral-900">
                            {new Date(contributor.since).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-brand-neutral-600 mb-2">Services Provided</div>
                        <div className="flex flex-wrap gap-2">
                          {contributor.servicesProvided.map((service) => (
                            <Badge key={service} className="bg-brand-neutral-200/50 text-brand-neutral-700 border-0 text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Recipients Tab */}
          {selectedTab === 'recipients' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-brand-neutral-900 mb-1">Funding Recipients</h2>
                  <p className="text-sm text-brand-neutral-600">
                    Maintainers receiving funding for community-benefiting work
                  </p>
                </div>
              </div>

              {recipients.map((recipient) => (
                <div key={recipient.id} className="bg-brand-card-blue rounded-xl p-6 border border-brand-neutral-300/10 hover:border-brand-highlight/20 transition-all">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-14 h-14 bg-gradient-to-br from-brand-highlight to-brand-warning text-white flex items-center justify-center text-lg">
                      {recipient.avatar}
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-brand-neutral-900 mb-1">{recipient.name}</h3>
                          <Badge className="bg-brand-highlight/20 text-brand-highlight-dark border-0 text-xs">
                            {recipient.role}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl text-brand-neutral-900">${recipient.monthlyReceived.toLocaleString()}</div>
                          <div className="text-xs text-brand-neutral-600">per month</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-brand-card-blue-dark rounded-lg p-3">
                          <div className="text-xs text-brand-neutral-600 mb-1">Total Received</div>
                          <div className="text-lg text-brand-neutral-900">${recipient.totalReceived.toLocaleString()}</div>
                        </div>
                        <div className="bg-brand-card-blue-dark rounded-lg p-3">
                          <div className="text-xs text-brand-neutral-600 mb-1">Active Requests</div>
                          <div className="text-lg text-brand-neutral-900">{recipient.activeRequests}</div>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-brand-neutral-600 mb-2">Contributions</div>
                        <p className="text-sm text-brand-neutral-700">{recipient.contributions}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Funding Requests Tab */}
          {selectedTab === 'requests' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-brand-neutral-900 mb-1">Funding Requests</h2>
                  <p className="text-sm text-brand-neutral-600">
                    Proposals for community-benefiting development work
                  </p>
                </div>
                <Button
                  onClick={() => setShowRequestForm(!showRequestForm)}
                  className="bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white hover:opacity-90"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Request Funding
                </Button>
              </div>

              {showRequestForm && (
                <div className="bg-brand-card-blue rounded-xl p-6 border border-brand-accent/30 mb-6">
                  <h3 className="text-brand-neutral-900 mb-4">Submit Funding Request</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-brand-neutral-700 mb-2">Project Title</label>
                      <input
                        type="text"
                        className="w-full bg-brand-card-blue-dark border border-brand-neutral-300/20 rounded-lg px-4 py-2.5 text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent"
                        placeholder="e.g., Implement Dark Mode Support"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-brand-neutral-700 mb-2">Description</label>
                      <textarea
                        rows={4}
                        className="w-full bg-brand-card-blue-dark border border-brand-neutral-300/20 rounded-lg px-4 py-2.5 text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent resize-none"
                        placeholder="Describe the work, its benefits to the community, and your approach..."
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm text-brand-neutral-700 mb-2">Requested Amount</label>
                        <input
                          type="number"
                          className="w-full bg-brand-card-blue-dark border border-brand-neutral-300/20 rounded-lg px-4 py-2.5 text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent"
                          placeholder="5000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-brand-neutral-700 mb-2">Estimated Hours</label>
                        <input
                          type="number"
                          className="w-full bg-brand-card-blue-dark border border-brand-neutral-300/20 rounded-lg px-4 py-2.5 text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent"
                          placeholder="80"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-brand-neutral-700 mb-2">Priority</label>
                        <select className="w-full bg-brand-card-blue-dark border border-brand-neutral-300/20 rounded-lg px-4 py-2.5 text-brand-neutral-900 focus:outline-none focus:border-brand-accent">
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button className="bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white hover:opacity-90">
                        Submit Request
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowRequestForm(false)}
                        className="border-brand-neutral-300/20 text-brand-neutral-700 hover:bg-brand-card-blue-light"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {fundingRequests.map((request) => (
                <div key={request.id} className="bg-brand-card-blue rounded-xl p-6 border border-brand-neutral-300/10 hover:border-brand-neutral-300/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-brand-neutral-900">{request.title}</h3>
                        <Badge className={`${getStatusColor(request.status)} border-0 text-xs capitalize`}>
                          {request.status}
                        </Badge>
                        <Badge className={`bg-brand-neutral-200/30 ${getPriorityColor(request.priority)} border-0 text-xs capitalize`}>
                          {request.priority} priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-brand-neutral-600 mb-3">
                        <span>Requested by {request.requester}</span>
                        <span>·</span>
                        <span>{new Date(request.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl text-brand-neutral-900">${request.requestedAmount.toLocaleString()}</div>
                      <div className="text-xs text-brand-neutral-600">{request.estimatedHours}h estimated</div>
                    </div>
                  </div>

                  <p className="text-sm text-brand-neutral-700 mb-4">{request.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-neutral-300/10">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand-success" />
                          <span className="text-brand-neutral-700">{request.votesFor}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <XCircle className="w-4 h-4 text-brand-error" />
                          <span className="text-brand-neutral-700">{request.votesAgainst}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {request.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-brand-success/30 text-brand-success hover:bg-brand-success/10"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-brand-error/30 text-brand-error hover:bg-brand-error/10"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-brand-neutral-300/20 text-brand-neutral-700 hover:bg-brand-card-blue-light"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA for Becoming a Service Provider */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-brand-card-blue via-brand-secondary-dark to-brand-neutral-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-highlight/15 rounded-full blur-3xl opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm mb-6">
            <Handshake className="w-4 h-4" />
            <span>Join as a Service Provider</span>
          </div>

          <h2 className="text-brand-neutral-900 mb-4">
            Earn While Supporting the Ecosystem
          </h2>
          <p className="text-lg text-brand-neutral-700 mb-8 max-w-2xl mx-auto">
            Provide enterprise services to companies, earn competitive revenue, and automatically contribute to the common pot—funding the community work that benefits everyone.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-card-blue/80 backdrop-blur-sm rounded-xl p-6 border border-brand-neutral-300/10">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-brand-neutral-900 mb-2">Earn from Enterprises</h3>
              <p className="text-sm text-brand-neutral-600">
                Get paid for support, features, and consulting work with enterprise clients
              </p>
            </div>

            <div className="bg-brand-card-blue/80 backdrop-blur-sm rounded-xl p-6 border border-brand-neutral-300/10">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-highlight to-brand-warning rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-brand-neutral-900 mb-2">Support Community</h3>
              <p className="text-sm text-brand-neutral-600">
                Automatically fund unfunded work that benefits the entire ecosystem
              </p>
            </div>

            <div className="bg-brand-card-blue/80 backdrop-blur-sm rounded-xl p-6 border border-brand-neutral-300/10">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-success to-brand-success-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-brand-neutral-900 mb-2">Gain Influence</h3>
              <p className="text-sm text-brand-neutral-600">
                Vote on funding decisions and shape the project's future direction
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={onBecomeProvider || (() => onNavItemClick('developer-onboarding'))}
              className="bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white hover:opacity-90"
              size="lg"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Become a Service Provider
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand-neutral-300/30 text-brand-neutral-800 hover:bg-brand-card-blue-light"
              onClick={() => onNavItemClick('how-it-works')}
            >
              Learn More
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-brand-neutral-300/10">
            <p className="text-sm text-brand-neutral-600">
              Already a maintainer but not providing services yet?{' '}
              <button
                onClick={() => onNavItemClick('developer-onboarding')}
                className="text-brand-accent hover:text-brand-accent-light transition-colors"
              >
                Switch to service provider mode →
              </button>
            </p>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};