import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Alert, AlertDescription } from '../ui/alert';
import {
  ShieldCheck,
  ShieldX,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  AlertCircle,
  User,
  Calendar,
  MapPin,
  ChevronRight,
  Eye,
  Trash2,
  GitBranch,
  Clock
} from 'lucide-react';
import { MOCK_MAINTAINERS, type MaintainerDirectoryEntry, type MaintainerProject } from '../../data/maintainersDirectoryData';
import { sampleMaintainerProfile, type MaintainerProject as ProfileProject } from '../../data/maintainerProfileData';

interface AdminVerificationPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

/**
 * AdminVerificationPage - Comprehensive admin interface for verifying maintainer profiles and projects
 * Features:
 * - View all maintainers with verification status
 * - Verify/unverify maintainer profiles
 * - Verify/unverify individual project contributions
 * - Search and filter capabilities
 * - Audit trail of verification actions
 */
export function AdminVerificationPage({
  onNavigateHome,
  onNavItemClick
}: AdminVerificationPageProps) {
  // In a real app, this would come from a state management solution or API
  const [maintainers, setMaintainers] = React.useState<MaintainerDirectoryEntry[]>(MOCK_MAINTAINERS);
  const [selectedMaintainer, setSelectedMaintainer] = React.useState<MaintainerDirectoryEntry | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState<'all' | 'verified' | 'unverified'>('all');
  const [activeTab, setActiveTab] = React.useState('overview');
  const [recentActions, setRecentActions] = React.useState<Array<{
    id: string;
    action: 'verify-profile' | 'unverify-profile' | 'verify-project' | 'unverify-project';
    maintainerName: string;
    projectName?: string;
    timestamp: Date;
  }>>([]);

  // Filter maintainers based on search and status
  const filteredMaintainers = React.useMemo(() => {
    let result = maintainers;

    // Apply search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(lowerQuery) ||
        m.username.toLowerCase().includes(lowerQuery) ||
        m.bio?.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply status filter
    if (filterStatus === 'verified') {
      result = result.filter(m => m.isVerified);
    } else if (filterStatus === 'unverified') {
      result = result.filter(m => !m.isVerified);
    }

    return result;
  }, [maintainers, searchQuery, filterStatus]);

  // Statistics
  const stats = React.useMemo(() => {
    const total = maintainers.length;
    const verified = maintainers.filter(m => m.isVerified).length;
    const unverified = total - verified;
    const totalProjects = maintainers.reduce((sum, m) => sum + m.projects.length, 0);
    
    return {
      total,
      verified,
      unverified,
      verificationRate: total > 0 ? Math.round((verified / total) * 100) : 0,
      totalProjects
    };
  }, [maintainers]);

  // Verify maintainer profile
  const handleVerifyProfile = (maintainerId: string) => {
    setMaintainers(prev =>
      prev.map(m =>
        m.id === maintainerId
          ? {
              ...m,
              isVerified: true,
              verifiedAt: new Date().toISOString().split('T')[0],
              verifiedBy: 'admin'
            }
          : m
      )
    );

    const maintainer = maintainers.find(m => m.id === maintainerId);
    if (maintainer) {
      setRecentActions(prev => [
        {
          id: `action-${Date.now()}`,
          action: 'verify-profile',
          maintainerName: maintainer.name,
          timestamp: new Date()
        },
        ...prev.slice(0, 9) // Keep last 10 actions
      ]);
    }
  };

  // Unverify maintainer profile
  const handleUnverifyProfile = (maintainerId: string) => {
    setMaintainers(prev =>
      prev.map(m =>
        m.id === maintainerId
          ? {
              ...m,
              isVerified: false,
              verifiedAt: undefined,
              verifiedBy: undefined
            }
          : m
      )
    );

    const maintainer = maintainers.find(m => m.id === maintainerId);
    if (maintainer) {
      setRecentActions(prev => [
        {
          id: `action-${Date.now()}`,
          action: 'unverify-profile',
          maintainerName: maintainer.name,
          timestamp: new Date()
        },
        ...prev.slice(0, 9)
      ]);
    }
  };

  // For project verification, this would need to be extended to handle the project-specific verification
  // In a real app, you'd have a separate data structure for project verifications
  const handleVerifyProject = (maintainerId: string, projectSlug: string) => {
    // This is a simplified version - in production, you'd update the actual project verification data
    const maintainer = maintainers.find(m => m.id === maintainerId);
    const project = maintainer?.projects.find(p => p.projectSlug === projectSlug);
    
    if (maintainer && project) {
      setRecentActions(prev => [
        {
          id: `action-${Date.now()}`,
          action: 'verify-project',
          maintainerName: maintainer.name,
          projectName: project.projectName,
          timestamp: new Date()
        },
        ...prev.slice(0, 9)
      ]);
    }
  };

  const handleUnverifyProject = (maintainerId: string, projectSlug: string) => {
    const maintainer = maintainers.find(m => m.id === maintainerId);
    const project = maintainer?.projects.find(p => p.projectSlug === projectSlug);
    
    if (maintainer && project) {
      setRecentActions(prev => [
        {
          id: `action-${Date.now()}`,
          action: 'unverify-project',
          maintainerName: maintainer.name,
          projectName: project.projectName,
          timestamp: new Date()
        },
        ...prev.slice(0, 9)
      ]);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case 'verify-profile':
        return 'Verified Profile';
      case 'unverify-profile':
        return 'Removed Profile Verification';
      case 'verify-project':
        return 'Verified Project';
      case 'unverify-project':
        return 'Removed Project Verification';
      default:
        return action;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'verify-profile':
      case 'verify-project':
        return <ShieldCheck className="w-4 h-4 text-brand-success" />;
      case 'unverify-profile':
      case 'unverify-project':
        return <ShieldX className="w-4 h-4 text-brand-error" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header
        onNavItemClick={onNavItemClick}
        ctaText="Back to Home"
        onCtaClick={onNavigateHome}
      />

      <div className="container mx-auto px-6 py-10 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-accent/20 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h1 className="text-brand-neutral-950">Admin Verification Dashboard</h1>
              <p className="text-brand-neutral-600">
                Manage maintainer profile and project contribution verifications
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-brand-card-blue border-brand-neutral-300">
            <CardHeader className="pb-3">
              <CardDescription>Total Maintainers</CardDescription>
              <CardTitle className="text-3xl text-brand-neutral-950">{stats.total}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-neutral-600">
                Across {stats.totalProjects} projects
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card-blue border-brand-success/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-success" />
                Verified
              </CardDescription>
              <CardTitle className="text-3xl text-brand-success">{stats.verified}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-neutral-600">
                {stats.verificationRate}% verification rate
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card-blue border-brand-warning/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-brand-warning" />
                Pending
              </CardDescription>
              <CardTitle className="text-3xl text-brand-warning">{stats.unverified}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-neutral-600">
                Awaiting verification
              </p>
            </CardContent>
          </Card>

          <Card className="bg-brand-card-blue border-brand-neutral-300">
            <CardHeader className="pb-3">
              <CardDescription>Recent Actions</CardDescription>
              <CardTitle className="text-3xl text-brand-neutral-950">{recentActions.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-neutral-600">
                Last 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-brand-neutral-200">
            <TabsTrigger value="overview">Maintainers Overview</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          {/* Maintainers Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-neutral-500" />
                <Input
                  type="text"
                  placeholder="Search by name, username, or bio..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-brand-card-blue border-brand-neutral-300"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('all')}
                  className={filterStatus === 'all' ? '' : 'border-brand-neutral-300'}
                >
                  All ({maintainers.length})
                </Button>
                <Button
                  variant={filterStatus === 'verified' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('verified')}
                  className={filterStatus === 'verified' ? 'bg-brand-success hover:bg-brand-success-dark' : 'border-brand-neutral-300'}
                >
                  <ShieldCheck className="w-4 h-4 mr-1" />
                  Verified ({stats.verified})
                </Button>
                <Button
                  variant={filterStatus === 'unverified' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('unverified')}
                  className={filterStatus === 'unverified' ? 'bg-brand-warning hover:bg-brand-warning-dark' : 'border-brand-neutral-300'}
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Pending ({stats.unverified})
                </Button>
              </div>
            </div>

            {/* Maintainers List */}
            <div className="space-y-4">
              {filteredMaintainers.length > 0 ? (
                filteredMaintainers.map((maintainer) => (
                  <Card
                    key={maintainer.id}
                    className="bg-brand-card-blue border-brand-neutral-300 hover:border-brand-accent/50 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          {/* Avatar */}
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-brand-neutral-200 flex-shrink-0">
                            {maintainer.avatar ? (
                              <img
                                src={maintainer.avatar}
                                alt={maintainer.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <User className="w-8 h-8 text-brand-neutral-500" />
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-brand-neutral-950">{maintainer.name}</h3>
                              {maintainer.isVerified ? (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <ShieldCheck className="w-5 h-5 text-brand-success" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <div className="text-xs">
                                        <p className="font-medium">Verified Profile</p>
                                        <p className="text-brand-neutral-500">
                                          Verified on {formatDate(maintainer.verifiedAt)}
                                        </p>
                                        {maintainer.verifiedBy && (
                                          <p className="text-brand-neutral-500">By: {maintainer.verifiedBy}</p>
                                        )}
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              ) : (
                                <Badge variant="outline" className="bg-brand-warning/10 text-brand-warning border-brand-warning/30">
                                  Pending
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-brand-neutral-600 mb-2">@{maintainer.username}</p>
                            {maintainer.bio && (
                              <p className="text-sm text-brand-neutral-700 mb-3">{maintainer.bio}</p>
                            )}
                            <div className="flex flex-wrap gap-4 text-xs text-brand-neutral-600">
                              {maintainer.location && (
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {maintainer.location}
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                Joined {formatDate(maintainer.joinedDate)}
                              </div>
                              <div className="flex items-center gap-1">
                                <GitBranch className="w-3 h-3" />
                                {maintainer.projects.length} {maintainer.projects.length === 1 ? 'project' : 'projects'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 flex-shrink-0">
                          {maintainer.isVerified ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleUnverifyProfile(maintainer.id)}
                                    className="border-brand-error/30 text-brand-error hover:bg-brand-error/10"
                                  >
                                    <ShieldX className="w-4 h-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-xs">Remove verification</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleVerifyProfile(maintainer.id)}
                              className="border-brand-success/30 text-brand-success hover:bg-brand-success/10"
                            >
                              <ShieldCheck className="w-4 h-4 mr-1" />
                              Verify Profile
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedMaintainer(
                              selectedMaintainer?.id === maintainer.id ? null : maintainer
                            )}
                          >
                            {selectedMaintainer?.id === maintainer.id ? 'Hide' : 'View'} Projects
                            <ChevronRight
                              className={`w-4 h-4 ml-1 transition-transform ${
                                selectedMaintainer?.id === maintainer.id ? 'rotate-90' : ''
                              }`}
                            />
                          </Button>
                        </div>
                      </div>

                      {/* Projects Section (Expandable) */}
                      {selectedMaintainer?.id === maintainer.id && (
                        <div className="mt-4 pt-4 border-t border-brand-neutral-300">
                          <h4 className="text-brand-neutral-900 mb-3 flex items-center gap-2">
                            <GitBranch className="w-4 h-4" />
                            Project Contributions ({maintainer.projects.length})
                          </h4>
                          <div className="space-y-2">
                            {maintainer.projects.map((project, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 bg-brand-secondary rounded-lg border border-brand-neutral-300/30"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-brand-neutral-900">{project.projectName}</span>
                                    <Badge variant="outline" className="text-xs">
                                      {project.role}
                                    </Badge>
                                  </div>
                                  <p className="text-xs text-brand-neutral-600">
                                    Merging rights: {project.mergingRights}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => handleVerifyProject(maintainer.id, project.projectSlug)}
                                          className="text-brand-success hover:bg-brand-success/10"
                                        >
                                          <CheckCircle2 className="w-4 h-4" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="text-xs">Verify this contribution</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                  <TooltipProvider>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={() => handleUnverifyProject(maintainer.id, project.projectSlug)}
                                          className="text-brand-error hover:bg-brand-error/10"
                                        >
                                          <XCircle className="w-4 h-4" />
                                        </Button>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p className="text-xs">Remove verification</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-brand-card-blue border-brand-neutral-300">
                  <CardContent className="p-12 text-center">
                    <AlertCircle className="w-12 h-12 text-brand-neutral-500 mx-auto mb-3" />
                    <p className="text-brand-neutral-600">
                      No maintainers found matching your criteria
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit" className="space-y-4">
            <Card className="bg-brand-card-blue border-brand-neutral-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Verification Actions
                </CardTitle>
                <CardDescription>
                  Audit trail of all verification and unverification actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentActions.length > 0 ? (
                  <div className="space-y-3">
                    {recentActions.map((action) => (
                      <div
                        key={action.id}
                        className="flex items-start gap-3 p-3 bg-brand-secondary rounded-lg border border-brand-neutral-300/30"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {getActionIcon(action.action)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-brand-neutral-900">
                            {getActionLabel(action.action)}
                          </p>
                          <p className="text-xs text-brand-neutral-600">
                            Maintainer: {action.maintainerName}
                            {action.projectName && ` • Project: ${action.projectName}`}
                          </p>
                          <p className="text-xs text-brand-neutral-500 mt-1">
                            {action.timestamp.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="w-12 h-12 text-brand-neutral-500 mx-auto mb-3" />
                    <p className="text-brand-neutral-600">No recent actions recorded</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
