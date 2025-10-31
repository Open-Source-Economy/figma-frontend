import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { 
  ArrowRight, 
  ChevronDown, 
  Search, 
  SlidersHorizontal,
  Grid3x3,
  List,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { MaintainerProject } from '../../data/maintainerProfileData';
import { getRoleColor, getContributionLevel } from '../../data/maintainerProfileData';

interface MaintainerProjectsListProps {
  projects: MaintainerProject[];
  maintainerFirstName: string;
  onViewProject?: (slug: string) => void;
}

type ViewMode = 'grid' | 'compact';
type SortOption = 'recent' | 'name' | 'contribution';
type FilterOption = 'all' | 'primary' | 'secondary' | 'occasional';
type VerificationFilter = 'all' | 'verified' | 'unverified';

const ITEMS_PER_PAGE = 6;

/**
 * MaintainerProjectsList - Displays maintainer's projects with filtering, sorting, and pagination
 * Designed to handle large numbers of projects gracefully
 */
export const MaintainerProjectsList: React.FC<MaintainerProjectsListProps> = ({
  projects,
  maintainerFirstName,
  onViewProject
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState<SortOption>('contribution');
  const [filterBy, setFilterBy] = React.useState<FilterOption>('all');
  const [verificationFilter, setVerificationFilter] = React.useState<VerificationFilter>('all');
  const [viewMode, setViewMode] = React.useState<ViewMode>('grid');
  const [displayedCount, setDisplayedCount] = React.useState(ITEMS_PER_PAGE);
  const [showFilters, setShowFilters] = React.useState(false);

  // Filter projects
  const filteredProjects = React.useMemo(() => {
    let result = projects;

    // Apply search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.projectName.toLowerCase().includes(lowerQuery) ||
        p.role.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply contribution level filter
    if (filterBy !== 'all') {
      result = result.filter(p => p.contributionLevel === filterBy);
    }

    // Apply verification filter
    if (verificationFilter === 'verified') {
      result = result.filter(p => p.verified === true);
    } else if (verificationFilter === 'unverified') {
      result = result.filter(p => !p.verified);
    }

    // Apply sorting
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.projectName.localeCompare(b.projectName);
        case 'contribution':
          const levels = { primary: 3, secondary: 2, occasional: 1 };
          return levels[b.contributionLevel] - levels[a.contributionLevel];
        case 'recent':
          return b.yearsActive - a.yearsActive;
        default:
          return 0;
      }
    });

    return result;
  }, [projects, searchQuery, sortBy, filterBy, verificationFilter]);

  // Paginated projects
  const displayedProjects = filteredProjects.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProjects.length;

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + ITEMS_PER_PAGE);
  };

  const handleShowAll = () => {
    setDisplayedCount(filteredProjects.length);
  };

  // Reset pagination when filters change
  React.useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [searchQuery, sortBy, filterBy, verificationFilter]);

  // Count by contribution level
  const contributionCounts = React.useMemo(() => {
    return {
      primary: projects.filter(p => p.contributionLevel === 'primary').length,
      secondary: projects.filter(p => p.contributionLevel === 'secondary').length,
      occasional: projects.filter(p => p.contributionLevel === 'occasional').length
    };
  }, [projects]);

  // Count by verification status
  const verificationCounts = React.useMemo(() => {
    return {
      verified: projects.filter(p => p.verified === true).length,
      unverified: projects.filter(p => !p.verified).length
    };
  }, [projects]);

  return (
    <div>
      {/* Header with Search and Controls */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-brand-neutral-950 mb-2">Contributing Projects</h2>
            <p className="text-brand-neutral-600">
              Open source projects where {maintainerFirstName} is actively involved ({filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'})
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-1 p-1 bg-brand-neutral-200/30 rounded-lg border border-brand-neutral-300/30">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-accent/20 text-brand-accent'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800 hover:bg-brand-neutral-300/20'
              }`}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded-md transition-all ${
                viewMode === 'compact'
                  ? 'bg-brand-accent/20 text-brand-accent'
                  : 'text-brand-neutral-600 hover:text-brand-neutral-800 hover:bg-brand-neutral-300/20'
              }`}
              aria-label="Compact view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-neutral-500" />
          <input
            type="text"
            placeholder="Search projects by name, role, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg text-brand-neutral-900 placeholder:text-brand-neutral-500 focus:outline-none focus:border-brand-accent/60 focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-1.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg text-brand-neutral-700 hover:border-brand-accent/60 transition-all text-sm"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          {/* Contribution Level Filter */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterBy('all')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                filterBy === 'all'
                  ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilterBy('primary')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                filterBy === 'primary'
                  ? 'bg-brand-success/20 text-brand-success border border-brand-success/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              Primary ({contributionCounts.primary})
            </button>
            <button
              onClick={() => setFilterBy('secondary')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                filterBy === 'secondary'
                  ? 'bg-brand-highlight/20 text-brand-highlight border border-brand-highlight/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              Secondary ({contributionCounts.secondary})
            </button>
            <button
              onClick={() => setFilterBy('occasional')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                filterBy === 'occasional'
                  ? 'bg-brand-warning/20 text-brand-warning border border-brand-warning/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              Occasional ({contributionCounts.occasional})
            </button>
          </div>

          {/* Verification Filter */}
          <div className="flex items-center gap-1.5 border-l border-brand-neutral-300/30 pl-3">
            <button
              onClick={() => setVerificationFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
                verificationFilter === 'all'
                  ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setVerificationFilter('verified')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
                verificationFilter === 'verified'
                  ? 'bg-brand-success/20 text-brand-success border border-brand-success/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              Verified ({verificationCounts.verified})
            </button>
            <button
              onClick={() => setVerificationFilter('unverified')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1.5 ${
                verificationFilter === 'unverified'
                  ? 'bg-brand-neutral-400/20 text-brand-neutral-700 border border-brand-neutral-400/30'
                  : 'bg-brand-neutral-200/30 text-brand-neutral-600 hover:bg-brand-neutral-300/30'
              }`}
            >
              <AlertCircle className="w-3 h-3" />
              Pending ({verificationCounts.unverified})
            </button>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-1.5 bg-brand-card-blue border border-brand-neutral-300/40 rounded-lg text-sm text-brand-neutral-800 focus:outline-none focus:border-brand-accent/60 focus:ring-2 focus:ring-brand-accent/20 transition-all"
          >
            <option value="contribution">By Contribution Level</option>
            <option value="name">By Name (A-Z)</option>
            <option value="recent">By Years Active</option>
          </select>
        </div>
      </div>

      {/* Projects Display */}
      {displayedProjects.length > 0 ? (
        <>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {displayedProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4 hover:border-brand-accent/50 transition-all cursor-pointer group"
                  onClick={() => onViewProject?.(project.projectSlug)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-brand-neutral-900">{project.projectName}</h4>
                        {project.verified ? (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex-shrink-0">
                                  <ShieldCheck className="h-4 w-4 text-brand-success" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="text-xs">
                                  <p className="font-medium">Verified Contribution</p>
                                  {project.verifiedBy && (
                                    <p className="text-brand-neutral-500">By: {project.verifiedBy}</p>
                                  )}
                                  {project.verificationDate && (
                                    <p className="text-brand-neutral-500">Date: {new Date(project.verificationDate).toLocaleDateString()}</p>
                                  )}
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ) : (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex-shrink-0">
                                  <AlertCircle className="h-4 w-4 text-brand-neutral-500" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Pending verification</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        <ArrowRight className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-brand-neutral-600 text-sm mb-2">{project.role}</p>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <Badge 
                        variant="outline"
                        className={`bg-brand-${getRoleColor(project.roleType)}/10 text-brand-${getRoleColor(project.roleType)} border-brand-${getRoleColor(project.roleType)}/30 text-xs`}
                      >
                        {getContributionLevel(project.contributionLevel)}
                      </Badge>
                      <span className="text-brand-neutral-500 text-xs">
                        {project.yearsActive} {project.yearsActive === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-neutral-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 mb-6">
              {displayedProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-3 hover:border-brand-accent/50 transition-all cursor-pointer group flex items-center justify-between gap-4"
                  onClick={() => onViewProject?.(project.projectSlug)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-brand-neutral-900 text-sm">{project.projectName}</h4>
                      {project.verified ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex-shrink-0">
                                <ShieldCheck className="h-3.5 w-3.5 text-brand-success" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="text-xs">
                                <p className="font-medium">Verified Contribution</p>
                                {project.verifiedBy && (
                                  <p className="text-brand-neutral-500">By: {project.verifiedBy}</p>
                                )}
                                {project.verificationDate && (
                                  <p className="text-brand-neutral-500">Date: {new Date(project.verificationDate).toLocaleDateString()}</p>
                                )}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex-shrink-0">
                                <AlertCircle className="h-3.5 w-3.5 text-brand-neutral-500" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Pending verification</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      <Badge 
                        variant="outline"
                        className={`bg-brand-${getRoleColor(project.roleType)}/10 text-brand-${getRoleColor(project.roleType)} border-brand-${getRoleColor(project.roleType)}/30 text-xs flex-shrink-0`}
                      >
                        {getContributionLevel(project.contributionLevel)}
                      </Badge>
                    </div>
                    <p className="text-brand-neutral-600 text-xs line-clamp-1">{project.role} • {project.yearsActive} {project.yearsActive === 1 ? 'year' : 'years'}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Load More / Show All */}
          {hasMore && (
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  size="lg"
                  className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
                >
                  Load More Projects
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleShowAll}
                  variant="ghost"
                  size="lg"
                  className="text-brand-accent hover:text-brand-accent-light hover:bg-brand-accent/10"
                >
                  Show All ({filteredProjects.length})
                </Button>
              </div>
              <p className="text-sm text-brand-neutral-600 mt-3">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-brand-card-blue/30 rounded-lg border border-brand-neutral-300/40">
          <p className="text-brand-neutral-600">
            No projects match your search criteria
          </p>
          {searchQuery && (
            <Button
              onClick={() => setSearchQuery('')}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Clear Search
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
