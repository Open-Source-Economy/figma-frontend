import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PlatformStats } from '../projects/PlatformStats';
import { CategoryFilter } from '../projects/CategoryFilter';
import { ProjectSearchBar } from '../projects/ProjectSearchBar';
import { ProjectCategorySection } from '../projects/ProjectCategorySection';
import { Button } from '../ui/button';
import { Plus, MessageCircle } from 'lucide-react';
import { 
  projectsDatabase, 
  categories, 
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

  const handleNavigation = (href: string) => {
    if (onNavItemClick) {
      onNavItemClick(href);
    }
  };

  // Get platform stats
  const stats = React.useMemo(() => getProjectStats(), []);

  // Filter projects based on search and category
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

    // Group by category
    return projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {} as Record<string, typeof projects>);
  }, [searchQuery, selectedCategory]);

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
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {/* Search and Category Row */}
              <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-start">
                <div className="w-full lg:w-80 flex-shrink-0">
                  <ProjectSearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search projects..."
                  />
                </div>
                <div className="hidden lg:block w-px h-8 bg-border flex-shrink-0 mt-1"></div>
                <div className="flex-1">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />
                </div>
              </div>

              {/* Results Summary */}
              {(searchQuery || selectedCategory) && (
                <div className="text-sm text-muted-foreground">
                  {hasResults ? (
                    <span>
                      {Object.values(filteredProjects).reduce((sum, projects) => sum + projects.length, 0)} {Object.values(filteredProjects).reduce((sum, projects) => sum + projects.length, 0) === 1 ? 'project' : 'projects'}
                      {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
                      {selectedCategory && <span> in {selectedCategory}</span>}
                    </span>
                  ) : (
                    <span className="text-brand-warning">
                      No projects found
                      {searchQuery && <span> matching &quot;{searchQuery}&quot;</span>}
                      {selectedCategory && <span> in {selectedCategory}</span>}
                    </span>
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
                  onRequestProject={handleRequestProject}
                />
              </div>
            )}
          </div>
        </section>

        {/* Request Project Section (always shown at bottom) */}
        {hasResults && (
          <section className="py-16 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-foreground mb-3">
                  Can't Find Your Project?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're continuously expanding our network with the world's best open source projects and their expert maintainers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                  <Button
                    onClick={handleRequestProject}
                    className="bg-brand-accent hover:bg-brand-accent-dark text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Request a Project
                  </Button>
                  <Button
                    onClick={handleRequestProject}
                    variant="outline"
                    className="border-border hover:bg-card"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  We typically onboard new projects within 2-4 weeks
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer onNavItemClick={handleNavigation} />
    </div>
  );
}