import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PlatformStats } from '../projects/PlatformStats';
import { CategoryFilter } from '../projects/CategoryFilter';
import { LanguageFilter } from '../projects/LanguageFilter';
import { ProjectSearchBar } from '../projects/ProjectSearchBar';
import { ProjectCategorySection } from '../projects/ProjectCategorySection';
import { RequestProjectSection } from '../projects/RequestProjectSection';
import { Button } from '../ui/button';
import { Plus, MessageCircle } from 'lucide-react';
import { 
  projectsDatabase, 
  categories, 
  languages,
  getProjectsByCategory, 
  searchProjects, 
  getProjectStats 
} from '../../data/projectsData';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onNavItemClick?: (href: string) => void;
  onViewProject?: (slug: string) => void;
}

export function ProjectsPage({ onNavigateHome, onNavItemClick, onViewProject }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState<string | null>(null);

  const handleNavigation = (href: string) => {
    if (onNavItemClick) {
      onNavItemClick(href);
    }
  };

  // Get platform stats
  const stats = React.useMemo(() => getProjectStats(), []);

  // Filter projects based on search, category, and language
  const filteredProjects = React.useMemo(() => {
    let projects = projectsDatabase;

    // Apply search filter
    if (searchQuery) {
      projects = searchProjects(searchQuery);
    }

    // Apply category filter
    if (selectedCategory) {
      projects = projects.filter(p => p.category === selectedCategory);
    }

    // Apply language filter
    if (selectedLanguage) {
      projects = projects.filter(p => p.language === selectedLanguage);
    }

    // Group by category
    return projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {} as Record<string, typeof projects>);
  }, [searchQuery, selectedCategory, selectedLanguage]);

  const hasResults = Object.keys(filteredProjects).length > 0;

  const handleRequestProject = () => {
    // Navigate to request project page
    handleNavigation('request-project');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavItemClick={handleNavigation}
        ctaText="Get Started Today"
        onCtaClick={onNavigateHome}
      />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="mb-4 text-foreground">
                Open Source Projects Directory
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Discover and connect with the world's most important open source projects. Get direct access to expert maintainers, explore comprehensive project insights, and support sustainable open source ecosystems.
              </p>

              {/* Platform Statistics - Inline with hero */}
              <div className="pt-8 border-t border-border">
                <PlatformStats
                  totalStars={stats.totalStars}
                  totalMaintainers={stats.totalMaintainers}
                  totalProjects={stats.totalProjects}
                  totalForks={stats.totalForks}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 border-b border-border bg-gradient-to-b from-brand-card-blue/30 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Search Bar with Enhanced Styling */}
              <div className="max-w-2xl mx-auto">
                <ProjectSearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search projects by name, description, or tags..."
                />
              </div>

              {/* Filters Section with Better Visual Organization */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 bg-[rgba(26,41,66,0)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Refine your search</span>
                  </div>
                  {(selectedCategory || selectedLanguage) && (
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedLanguage(null);
                      }}
                      className="text-xs text-brand-accent hover:text-brand-accent-light transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-brand-accent/10"
                    >
                      <span>Clear all</span>
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-accent/20 text-xs">
                        {(selectedCategory ? 1 : 0) + (selectedLanguage ? 1 : 0)}
                      </span>
                    </button>
                  )}
                </div>
                
                {/* Combined Filters Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Category</label>
                      {selectedCategory && (
                        <span className="text-xs text-brand-accent">({selectedCategory})</span>
                      )}
                    </div>
                    <CategoryFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onSelectCategory={setSelectedCategory}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-muted-foreground uppercase tracking-wider">Language</label>
                      {selectedLanguage && (
                        <span className="text-xs text-brand-accent">({selectedLanguage})</span>
                      )}
                    </div>
                    <LanguageFilter
                      languages={languages}
                      selectedLanguage={selectedLanguage}
                      onSelectLanguage={setSelectedLanguage}
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Results Summary */}
              {(searchQuery || selectedCategory || selectedLanguage) && (
                <div className="flex items-center justify-center gap-3 py-3">
                  {hasResults ? (
                    <>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-success/10 border border-brand-success/20">
                          <span className="text-brand-success">
                            {Object.values(filteredProjects).reduce((sum, projects) => sum + projects.length, 0)}
                          </span>
                        </div>
                        <span className="text-muted-foreground">
                          {Object.values(filteredProjects).reduce((sum, projects) => sum + projects.length, 0) === 1 ? 'project found' : 'projects found'}
                        </span>
                      </div>
                      {(searchQuery || selectedCategory || selectedLanguage) && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-brand-neutral-500">•</span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {searchQuery && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-accent/10 text-brand-accent">
                                &quot;{searchQuery}&quot;
                              </span>
                            )}
                            {selectedCategory && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-accent/10 text-brand-accent">
                                {selectedCategory}
                              </span>
                            )}
                            {selectedLanguage && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-brand-accent/10 text-brand-accent">
                                {selectedLanguage}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-warning/10 border border-brand-warning/20">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-warning/20">
                        <span className="text-brand-warning text-sm">0</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-brand-warning">No projects found</span>
                        {(searchQuery || selectedCategory || selectedLanguage) && (
                          <span className="text-muted-foreground ml-2">
                            Try adjusting your filters
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects by Category */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {hasResults ? (
              <div className="space-y-16">
                {Object.entries(filteredProjects)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([category, projects]) => (
                    <ProjectCategorySection
                      key={category}
                      category={category}
                      projects={projects}
                      initialShowCount={4}
                      onViewProject={onViewProject}
                    />
                  ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <RequestProjectSection
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  selectedLanguage={selectedLanguage}
                  onRequestProject={handleRequestProject}
                />
              </div>
            )}
          </div>
        </section>

        {/* Request Project Section (always shown at bottom) */}
        {hasResults && (
          <section className="py-20 border-t border-border bg-gradient-to-br from-brand-card-blue via-brand-card-blue-light to-brand-accent/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center bg-brand-card-blue-dark/50 border border-brand-accent/20 rounded-2xl p-12 shadow-lg shadow-brand-accent/10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6">
                  <Plus className="w-8 h-8 text-brand-accent" />
                </div>
                
                <h2 className="text-brand-neutral-950 mb-4">
                  Can't Find Your Project?
                </h2>
                <p className="text-brand-neutral-700 mb-10 max-w-2xl mx-auto">
                  We're continuously expanding our network with the world's best open source projects and their expert maintainers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button
                    onClick={handleRequestProject}
                    className="bg-brand-accent hover:bg-brand-accent-dark text-white shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/30 transition-all"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Request a Project
                  </Button>
                  <Button
                    onClick={handleRequestProject}
                    variant="outline"
                    className="border-brand-accent/40 hover:bg-brand-accent/10 hover:border-brand-accent/60 text-brand-neutral-900 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-brand-neutral-600 bg-brand-success/10 border border-brand-success/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse"></div>
                  We typically onboard new projects within 2-4 weeks
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer onNavItemClick={handleNavigation} />
    </div>
  );
}