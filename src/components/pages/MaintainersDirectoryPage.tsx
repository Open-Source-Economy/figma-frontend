import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { MaintainerDirectoryCard } from '../maintainers/MaintainerDirectoryCard';
import { MaintainerFilters } from '../maintainers/MaintainerFilters';
import { Button } from '../ui/button';
import { Users, ShieldCheck, ChevronDown } from 'lucide-react';
import { MOCK_MAINTAINERS, MaintainerDirectoryEntry, searchMaintainers, sortMaintainers } from '../../data/maintainersDirectoryData';

interface MaintainersDirectoryPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  isAdmin?: boolean;
}

const ITEMS_PER_PAGE = 12;

/**
 * MaintainersDirectoryPage - Directory of all open source maintainers
 * Features search, filtering, verification system, and pagination
 */
export const MaintainersDirectoryPage: React.FC<MaintainersDirectoryPageProps> = ({
  onNavigateHome,
  onNavItemClick,
  isAdmin = false
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [verificationFilter, setVerificationFilter] = React.useState<'all' | 'verified' | 'unverified'>('all');
  const [sortBy, setSortBy] = React.useState<'name' | 'verified' | 'projects' | 'recent'>('verified');
  const [displayedItems, setDisplayedItems] = React.useState(ITEMS_PER_PAGE);
  const [maintainers, setMaintainers] = React.useState<MaintainerDirectoryEntry[]>(MOCK_MAINTAINERS);

  // Debounced search
  const [debouncedQuery, setDebouncedQuery] = React.useState('');
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter and sort maintainers
  const filteredMaintainers = React.useMemo(() => {
    let result = maintainers;

    // Apply search
    if (debouncedQuery) {
      result = searchMaintainers(debouncedQuery);
    }

    // Apply verification filter
    if (verificationFilter !== 'all') {
      result = result.filter(m => 
        verificationFilter === 'verified' ? m.isVerified : !m.isVerified
      );
    }

    // Apply sorting
    result = sortMaintainers(result, sortBy);

    return result;
  }, [maintainers, debouncedQuery, verificationFilter, sortBy]);

  // Paginated results
  const displayedMaintainers = filteredMaintainers.slice(0, displayedItems);
  const hasMore = displayedItems < filteredMaintainers.length;

  const handleLoadMore = () => {
    setDisplayedItems(prev => prev + ITEMS_PER_PAGE);
  };

  const handleVerify = (maintainerId: string) => {
    setMaintainers(prev => prev.map(m => 
      m.id === maintainerId 
        ? { ...m, isVerified: true, verifiedAt: new Date().toISOString(), verifiedBy: 'admin' }
        : m
    ));
  };

  const handleUnverify = (maintainerId: string) => {
    setMaintainers(prev => prev.map(m => 
      m.id === maintainerId 
        ? { ...m, isVerified: false, verifiedAt: undefined, verifiedBy: undefined }
        : m
    ));
  };

  const handleViewProfile = (maintainerId: string) => {
    // Navigate to maintainer profile
    onNavItemClick('maintainer-profile');
  };

  // Reset pagination when filters change
  React.useEffect(() => {
    setDisplayedItems(ITEMS_PER_PAGE);
  }, [debouncedQuery, verificationFilter, sortBy]);

  // Statistics
  const verifiedCount = maintainers.filter(m => m.isVerified).length;
  const totalProjects = maintainers.reduce((acc, m) => acc + m.projects.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-secondary-dark to-brand-neutral-100">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('contact')}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-card-blue">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-highlight/15 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
              <Users className="w-4 h-4 text-brand-accent-light" />
              <span className="text-brand-accent-light text-sm">Maintainers Directory</span>
            </div>
            <h1 className="text-brand-neutral-950 mb-6">
              Open Source Maintainers
            </h1>
            <p className="text-brand-neutral-700 text-lg max-w-3xl mx-auto mb-8">
              Connect with verified open source project maintainers. Browse by expertise, 
              view their projects, and understand their roles and contributions to the ecosystem.
            </p>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-card-blue/50 border border-brand-neutral-300/30">
                <Users className="w-5 h-5 text-brand-accent" />
                <div className="text-left">
                  <div className="text-brand-neutral-950">{maintainers.length}</div>
                  <div className="text-xs text-brand-neutral-600">Maintainers</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-card-blue/50 border border-brand-neutral-300/30">
                <ShieldCheck className="w-5 h-5 text-brand-success" />
                <div className="text-left">
                  <div className="text-brand-neutral-950">{verifiedCount}</div>
                  <div className="text-xs text-brand-neutral-600">Verified</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-card-blue/50 border border-brand-neutral-300/30">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-highlight" />
                </div>
                <div className="text-left">
                  <div className="text-brand-neutral-950">{totalProjects}</div>
                  <div className="text-xs text-brand-neutral-600">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 bg-gradient-to-b from-brand-card-blue via-brand-secondary to-brand-neutral-200">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Filters */}
          <div className="mb-12">
            <MaintainerFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              verificationFilter={verificationFilter}
              onVerificationFilterChange={setVerificationFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalCount={maintainers.length}
              filteredCount={filteredMaintainers.length}
            />
          </div>

          {/* Maintainers Grid */}
          {displayedMaintainers.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {displayedMaintainers.map((maintainer) => (
                  <MaintainerDirectoryCard
                    key={maintainer.id}
                    maintainer={maintainer}
                    isAdmin={isAdmin}
                    onVerify={handleVerify}
                    onUnverify={handleUnverify}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center">
                  <Button
                    onClick={handleLoadMore}
                    size="lg"
                    variant="outline"
                    className="gap-2 border-brand-neutral-400/40 hover:border-brand-accent/60 hover:bg-brand-accent/10"
                  >
                    Load More Maintainers
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <p className="text-sm text-brand-neutral-600 mt-4">
                    Showing {displayedMaintainers.length} of {filteredMaintainers.length} maintainers
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-neutral-300/20 mb-4">
                <Users className="w-8 h-8 text-brand-neutral-500" />
              </div>
              <h3 className="text-brand-neutral-900 mb-2">No maintainers found</h3>
              <p className="text-brand-neutral-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setVerificationFilter('all');
                }}
                variant="outline"
                className="hover:border-brand-accent/60 hover:bg-brand-accent/10"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Admin Notice */}
      {isAdmin && (
        <section className="relative py-12 bg-gradient-to-b from-brand-neutral-200 to-brand-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10 border border-brand-accent/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-brand-neutral-950 mb-2">Admin Mode Active</h3>
                  <p className="text-brand-neutral-700 text-sm leading-relaxed mb-4">
                    You have admin privileges. You can verify (attest) maintainers to confirm their roles and merging rights in their listed projects. 
                    Verification helps build trust in the directory and ensures accurate information.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-brand-neutral-600">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-success/15 border border-brand-success/30">
                      <ShieldCheck className="w-3 h-3 text-brand-success" />
                      <span className="text-brand-success">Verify = Attest to roles & rights</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-error/15 border border-brand-error/30">
                      <span className="text-brand-error">Remove = Revoke attestation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};
