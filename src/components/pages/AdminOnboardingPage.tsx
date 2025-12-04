import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { OnboardingSubmissionCard } from '../admin/OnboardingSubmissionCard';
import {
  Search,
  ShieldCheck,
  AlertCircle,
  Users,
  GitBranch,
  TrendingUp,
  Filter,
  Download
} from 'lucide-react';
import { DeveloperOnboardingData, OnboardingStatus } from '../../types/DeveloperOnboarding';

interface AdminOnboardingPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

/**
 * AdminOnboardingPage - Modern admin interface for onboarding submissions
 * Streamlined design with focus on clarity and quick actions
 */
export function AdminOnboardingPage({
  onNavigateHome,
  onNavItemClick
}: AdminOnboardingPageProps) {
  // Mock data - In production, this would come from an API
  const [submissions, setSubmissions] = React.useState<DeveloperOnboardingData[]>([
    {
      contact: {
        fullName: 'Alice Johnson',
        email: 'alice@example.com',
        termsAccepted: true
      },
      projects: [
        {
          id: 'proj-1',
          projectType: 'github_repo',
          url: 'https://github.com/react/react',
          role: 'core_contributor',
          mainBranchAccess: 'write_with_review',
          ecosystems: ['React', 'JavaScript'],
          verified: true
        },
        {
          id: 'proj-2',
          projectType: 'github_repo',
          url: 'https://github.com/facebook/jest',
          role: 'contributor',
          mainBranchAccess: 'read_only',
          ecosystems: ['Testing', 'JavaScript'],
          verified: false
        }
      ],
      participationModel: ['service_provider'],
      availability: {
        weeklyHours: 15,
        baseHourlyRate: 180,
        currency: 'EUR',
        basicAvailabilityComment: 'Focused on Vue.js ecosystem work',
        openToBiggerOpportunities: false
      },
      services: [
        {
          id: 'svc-1',
          serviceId: 'code-review',
          serviceName: 'Code Review',
          serviceType: 'development',
          hasResponseTime: true,
          enabled: true,
          projectIds: ['proj-1'],
          hourlyRate: 150,
          responseTimeHours: 48
        },
        {
          id: 'svc-2',
          serviceId: 'consulting',
          serviceName: 'Technical Consulting',
          serviceType: 'advisory',
          hasResponseTime: true,
          enabled: true,
          projectIds: ['proj-1', 'proj-2'],
          hourlyRate: 200,
          responseTimeHours: 24
        }
      ],
      createdAt: new Date('2024-01-15'),
      lastModified: new Date('2024-01-16'),
      status: 'approved',
      currentStep: 6,
      completedSteps: [1, 2, 3, 4, 5, 6]
    },
    {
      contact: {
        fullName: 'Bob Smith',
        email: 'bob@example.com',
        termsAccepted: true
      },
      projects: [
        {
          id: 'proj-3',
          projectType: 'github_org',
          url: 'https://github.com/nodejs/node',
          role: 'maintainer',
          mainBranchAccess: 'full_write',
          ecosystems: ['Node.js', 'JavaScript'],
          verified: false
        }
      ],
      participationModel: ['common_pot'],
      createdAt: new Date('2024-01-18'),
      lastModified: new Date('2024-01-18'),
      status: 'submitted',
      currentStep: 4,
      completedSteps: [1, 2, 3, 4]
    },
    {
      contact: {
        fullName: 'Carol Davis',
        email: 'carol@example.com',
        termsAccepted: true
      },
      projects: [
        {
          id: 'proj-4',
          projectType: 'github_repo',
          url: 'https://github.com/vuejs/vue',
          role: 'core_contributor',
          mainBranchAccess: 'write_with_review',
          ecosystems: ['Vue.js', 'JavaScript'],
          verified: false
        },
        {
          id: 'proj-5',
          projectType: 'github_repo',
          url: 'https://github.com/vuejs/pinia',
          role: 'maintainer',
          mainBranchAccess: 'full_write',
          ecosystems: ['Vue.js', 'State Management'],
          verified: false
        }
      ],
      participationModel: ['service_provider'],
      availability: {
        weeklyHours: 15,
        baseHourlyRate: 180,
        currency: 'EUR',
        basicAvailabilityComment: 'Focused on Vue.js ecosystem work',
        openToBiggerOpportunities: false
      },
      services: [
        {
          id: 'svc-3',
          serviceId: 'bug-fixing',
          serviceName: 'Bug Fixing',
          serviceType: 'development',
          hasResponseTime: true,
          enabled: true,
          projectIds: ['proj-4', 'proj-5'],
          responseTimeHours: 72
        }
      ],
      createdAt: new Date('2024-01-20'),
      lastModified: new Date('2024-01-20'),
      status: 'submitted',
      currentStep: 6,
      completedSteps: [1, 2, 3, 4, 5, 6]
    }
  ]);

  const [expandedSubmissions, setExpandedSubmissions] = React.useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState<'all' | OnboardingStatus>('all');
  const [activeTab, setActiveTab] = React.useState('submissions');

  // Statistics
  const stats = React.useMemo(() => {
    const total = submissions.length;
    const verified = submissions.filter(s => s.status === 'approved').length;
    const pending = submissions.filter(s => s.status === 'submitted').length;
    const draft = submissions.filter(s => s.status === 'draft').length;
    const rejected = submissions.filter(s => s.status === 'rejected').length;
    
    const totalProjects = submissions.reduce((sum, s) => sum + s.projects.length, 0);
    const verifiedProjects = submissions.reduce(
      (sum, s) => sum + s.projects.filter(p => p.verified).length,
      0
    );
    
    const activeProviders = submissions.filter(s => s.participationModel?.['service_provider'] === 'yes').length;
    const passiveParticipants = submissions.filter(s => 
      s.participationModel?.['common_pot'] === 'yes' || 
      s.participationModel?.['individual_donation'] === 'yes' || 
      s.participationModel?.['community_supporter'] === 'yes'
    ).length;

    return {
      total,
      verified,
      pending,
      draft,
      rejected,
      totalProjects,
      verifiedProjects,
      activeProviders,
      passiveParticipants,
      verificationRate: total > 0 ? Math.round((verified / total) * 100) : 0
    };
  }, [submissions]);

  // Filter submissions
  const filteredSubmissions = React.useMemo(() => {
    let result = submissions;

    // Apply search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.contact.fullName.toLowerCase().includes(lowerQuery) ||
        s.contact.email.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      result = result.filter(s => s.status === filterStatus);
    }

    // Sort by last modified (newest first)
    result.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());

    return result;
  }, [submissions, searchQuery, filterStatus]);

  const handleToggleExpand = (email: string) => {
    setExpandedSubmissions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(email)) {
        newSet.delete(email);
      } else {
        newSet.add(email);
      }
      return newSet;
    });
  };

  const handleVerifyProfile = (email: string) => {
    setSubmissions(prev =>
      prev.map(s =>
        s.contact.email === email
          ? { ...s, status: 'approved' as OnboardingStatus }
          : s
      )
    );
  };

  const handleUnverifyProfile = (email: string) => {
    setSubmissions(prev =>
      prev.map(s =>
        s.contact.email === email
          ? { ...s, status: 'submitted' as OnboardingStatus }
          : s
      )
    );
  };

  const handleVerifyProject = (email: string, projectId: string) => {
    setSubmissions(prev =>
      prev.map(s =>
        s.contact.email === email
          ? {
              ...s,
              projects: s.projects.map(p =>
                p.id === projectId ? { ...p, verified: true } : p
              )
            }
          : s
      )
    );
  };

  const handleUnverifyProject = (email: string, projectId: string) => {
    setSubmissions(prev =>
      prev.map(s =>
        s.contact.email === email
          ? {
              ...s,
              projects: s.projects.map(p =>
                p.id === projectId ? { ...p, verified: false } : p
              )
            }
          : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      <Header
        onNavItemClick={onNavItemClick}
        ctaText="Back to Home"
        onCtaClick={onNavigateHome}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-dark to-brand-secondary border-b border-brand-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-highlight/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 py-12 max-w-7xl relative">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-white mb-1">Onboarding Review</h1>
                  <p className="text-white/80">
                    Review and verify developer applications
                  </p>
                </div>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Statistics Cards - Modern Glass Morphism Design */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 -mt-20 relative z-10">
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm">Total</CardDescription>
                <div className="p-2 bg-brand-primary/10 rounded-lg">
                  <Users className="w-4 h-4 text-brand-primary" />
                </div>
              </div>
              <CardTitle className="text-4xl mt-2">{stats.total}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{stats.activeProviders} active</span>
                <span className="text-border">•</span>
                <span>{stats.passiveParticipants} passive</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-brand-success/10 to-brand-success/5 backdrop-blur-sm border-brand-success/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-success" />
                  Verified
                </CardDescription>
                <Badge variant="outline" className="bg-brand-success/20 text-brand-success border-brand-success/30 text-xs">
                  {stats.verificationRate}%
                </Badge>
              </div>
              <CardTitle className="text-4xl text-brand-success mt-2">{stats.verified}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-brand-success/70">
                Verification rate {stats.verificationRate}%
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-brand-warning/10 to-brand-warning/5 backdrop-blur-sm border-brand-warning/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-brand-warning" />
                  Pending
                </CardDescription>
                {stats.pending > 0 && (
                  <Badge variant="outline" className="bg-brand-warning/20 text-brand-warning border-brand-warning/30 text-xs">
                    Action needed
                  </Badge>
                )}
              </div>
              <CardTitle className="text-4xl text-brand-warning mt-2">{stats.pending}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-brand-warning/70">
                Awaiting verification
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-brand-accent/10 to-brand-highlight/5 backdrop-blur-sm border-brand-accent/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription className="text-sm flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-brand-accent" />
                  Projects
                </CardDescription>
                <TrendingUp className="w-4 h-4 text-brand-accent" />
              </div>
              <CardTitle className="text-4xl text-brand-accent mt-2">{stats.totalProjects}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-brand-accent/70">
                {stats.verifiedProjects} verified
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <TabsList className="bg-white/60 backdrop-blur-sm border border-white/20">
              <TabsTrigger value="submissions" className="data-[state=active]:bg-white">
                All Submissions
                <Badge variant="secondary" className="ml-2 text-xs">{stats.total}</Badge>
              </TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:bg-white">
                Active
                <Badge variant="secondary" className="ml-2 text-xs">{stats.activeProviders}</Badge>
              </TabsTrigger>
              <TabsTrigger value="passive" className="data-[state=active]:bg-white">
                Common Pot
                <Badge variant="secondary" className="ml-2 text-xs">{stats.passiveParticipants}</Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="submissions" className="space-y-6 mt-6">
            {/* Search and Filters */}
            <Card className="bg-white/60 backdrop-blur-sm border-white/20">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search by name or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/80 border-white/20"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant={filterStatus === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('all')}
                      className={filterStatus === 'all' ? '' : 'bg-white/80'}
                    >
                      All
                    </Button>
                    <Button
                      variant={filterStatus === 'approved' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('approved')}
                      className={filterStatus === 'approved' ? 'bg-brand-success hover:bg-brand-success-dark' : 'bg-white/80'}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                      Verified
                    </Button>
                    <Button
                      variant={filterStatus === 'submitted' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setFilterStatus('submitted')}
                      className={filterStatus === 'submitted' ? 'bg-brand-warning hover:bg-brand-warning-dark' : 'bg-white/80'}
                    >
                      <Filter className="w-3.5 h-3.5 mr-1.5" />
                      Pending
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submissions List */}
            <div className="space-y-4">
              {filteredSubmissions.length > 0 ? (
                filteredSubmissions.map((submission) => (
                  <OnboardingSubmissionCard
                    key={submission.contact.email}
                    submission={submission}
                    isExpanded={expandedSubmissions.has(submission.contact.email)}
                    onToggleExpand={() => handleToggleExpand(submission.contact.email)}
                    onVerifyProfile={() => handleVerifyProfile(submission.contact.email)}
                    onUnverifyProfile={() => handleUnverifyProfile(submission.contact.email)}
                    onVerifyProject={(projectId) => handleVerifyProject(submission.contact.email, projectId)}
                    onUnverifyProject={(projectId) => handleUnverifyProject(submission.contact.email, projectId)}
                  />
                ))
              ) : (
                <Card className="bg-white/60 backdrop-blur-sm border-white/20">
                  <CardContent className="p-16 text-center">
                    <div className="p-4 bg-muted/30 rounded-full w-fit mx-auto mb-4">
                      <AlertCircle className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground mb-2">No submissions found</p>
                    <p className="text-sm text-muted-foreground/60">
                      Try adjusting your search or filters
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-4 mt-6">
            {submissions.filter(s => s.participationModel?.['service_provider'] === 'yes').length > 0 ? (
              submissions.filter(s => s.participationModel?.['service_provider'] === 'yes').map((submission) => (
                <OnboardingSubmissionCard
                  key={submission.contact.email}
                  submission={submission}
                  isExpanded={expandedSubmissions.has(submission.contact.email)}
                  onToggleExpand={() => handleToggleExpand(submission.contact.email)}
                  onVerifyProfile={() => handleVerifyProfile(submission.contact.email)}
                  onUnverifyProfile={() => handleUnverifyProfile(submission.contact.email)}
                  onVerifyProject={(projectId) => handleVerifyProject(submission.contact.email, projectId)}
                  onUnverifyProject={(projectId) => handleUnverifyProject(submission.contact.email, projectId)}
                />
              ))
            ) : (
              <Card className="bg-white/60 backdrop-blur-sm border-white/20">
                <CardContent className="p-16 text-center">
                  <div className="p-4 bg-muted/30 rounded-full w-fit mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">No active service providers yet</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="passive" className="space-y-4 mt-6">
            {submissions.filter(s => 
              s.participationModel?.['common_pot'] === 'yes' ||
              s.participationModel?.['individual_donation'] === 'yes' ||
              s.participationModel?.['community_supporter'] === 'yes'
            ).length > 0 ? (
              submissions.filter(s => 
                s.participationModel?.['common_pot'] === 'yes' ||
                s.participationModel?.['individual_donation'] === 'yes' ||
                s.participationModel?.['community_supporter'] === 'yes'
              ).map((submission) => (
                <OnboardingSubmissionCard
                  key={submission.contact.email}
                  submission={submission}
                  isExpanded={expandedSubmissions.has(submission.contact.email)}
                  onToggleExpand={() => handleToggleExpand(submission.contact.email)}
                  onVerifyProfile={() => handleVerifyProfile(submission.contact.email)}
                  onUnverifyProfile={() => handleUnverifyProfile(submission.contact.email)}
                  onVerifyProject={(projectId) => handleVerifyProject(submission.contact.email, projectId)}
                  onUnverifyProject={(projectId) => handleUnverifyProject(submission.contact.email, projectId)}
                />
              ))
            ) : (
              <Card className="bg-white/60 backdrop-blur-sm border-white/20">
                <CardContent className="p-16 text-center">
                  <div className="p-4 bg-muted/30 rounded-full w-fit mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">No common pot participants yet</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}