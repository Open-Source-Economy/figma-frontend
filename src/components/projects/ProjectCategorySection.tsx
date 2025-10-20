import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Star, 
  GitFork, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MessageCircle
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  category: string;
  maintainers: number;
  stars: string;
  forks: string;
  language: string;
  languages: string[];
  status: 'featured' | 'trending' | 'new' | 'active';
  icon: React.ElementType;
  lastUpdated: string;
  githubUrl: string;
  website?: string;
  license: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
}

interface ProjectCategorySectionProps {
  category: string;
  projects: ProjectData[];
  initialShowCount?: number;
  onViewProject?: (slug: string) => void;
  className?: string;
}

export function ProjectCategorySection({
  category,
  projects,
  initialShowCount = 4,
  onViewProject,
  className = ''
}: ProjectCategorySectionProps) {
  const [showAll, setShowAll] = React.useState(false);
  const [openMaintainers, setOpenMaintainers] = React.useState<Record<string, boolean>>({});

  const displayedProjects = showAll ? projects : projects.slice(0, initialShowCount);
  const hasMore = projects.length > initialShowCount;

  const toggleMaintainers = (projectId: string) => {
    setOpenMaintainers(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const getStatusBadge = (status: ProjectData['status']) => {
    switch (status) {
      case 'featured':
        return null;
      case 'trending':
        return <Badge className="bg-brand-warning text-white">Trending</Badge>;
      case 'new':
        return <Badge className="bg-brand-success text-white">New</Badge>;
      case 'active':
      default:
        return null;
    }
  };

  const getProjectIcon = (project: ProjectData) => {
    const IconComponent = project.icon;
    return (
      <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
        <IconComponent size={16} className="text-brand-primary" />
      </div>
    );
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {/* Category Header */}
      <div className="mb-8">
        <h2 className="text-foreground mb-1">{category}</h2>
        <p className="text-sm text-muted-foreground">
          {projects.length} {projects.length === 1 ? 'project' : 'projects'}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 items-start">
        {displayedProjects.map((project) => (
          <Card 
            key={project.id} 
            className="group hover:shadow-lg transition-all duration-300 border-border hover:border-brand-primary/20 cursor-pointer"
            onClick={() => onViewProject?.(project.id)}
          >
            <CardContent className="p-5 h-full flex flex-col">
              {/* Project Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {getProjectIcon(project)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground truncate">{project.name}</h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="opacity-40 hover:opacity-100 transition-opacity p-1 rounded text-muted-foreground hover:text-foreground flex-shrink-0"
                  title="View on GitHub"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                {project.description}
              </p>

              {/* GitHub Stats */}
              <div className="flex items-center gap-4 pb-3 mb-3 border-b border-border/50 text-xs opacity-60">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-brand-warning/70" />
                  <span className="text-muted-foreground">{project.stars}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-3 h-3 text-brand-accent/70" />
                  <span className="text-muted-foreground">{project.forks}</span>
                </div>
                <div className="ml-auto">
                  <Badge variant="outline" className="text-xs py-0 opacity-80 border-border/50">
                    {project.language}
                  </Badge>
                </div>
              </div>

              {/* Expert Maintainers */}
              <div className="mt-auto">
                <Collapsible open={openMaintainers[project.id]} onOpenChange={() => toggleMaintainers(project.id)}>
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center gap-2 py-1 px-2 -mx-2 rounded-lg cursor-pointer group/maintainers hover:bg-brand-accent/5 transition-colors">
                      <span className="text-sm text-muted-foreground group-hover/maintainers:text-brand-accent transition-colors">
                        3 Expert maintainers
                      </span>
                      <div className="ml-auto p-1 hover:bg-brand-accent/10 rounded transition-colors">
                        {openMaintainers[project.id] ? (
                          <ChevronUp className="w-3.5 h-3.5 text-brand-accent" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent onClick={(e) => e.stopPropagation()}>
                    <div className="space-y-2 mt-2">
                      {Array.from({ length: Math.min(3, project.maintainers || 1) }, (_, index) => {
                        const names = ['Sarah Chen', 'Marcus Rodriguez', 'Priya Patel'];
                        const roles = ['Core Maintainer', 'Security Expert', 'Performance Lead'];
                        
                        return (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-brand-accent/20 flex-shrink-0">
                              <img 
                                src={[
                                  "https://images.unsplash.com/photo-1743850765931-4a00e4809a5f?w=400",
                                  "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400",
                                  "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=400"
                                ][index % 3]} 
                                alt={names[index]}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-foreground truncate">{names[index]}</p>
                              <p className="text-xs text-muted-foreground truncate">{roles[index]}</p>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* View All Maintainers Link */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewProject?.(project.id);
                        }}
                        className="flex items-center gap-1 text-xs text-brand-accent hover:text-brand-accent-dark transition-colors mt-1 py-1"
                      >
                        <span>+ 2 more maintainers</span>
                      </button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Talk to Maintainers Button */}
                <div className="mt-3 pt-3 border-t border-border">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Navigate to contact or open dialog
                      window.location.href = '#contact';
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full border-brand-accent/30 hover:bg-brand-accent/10 hover:border-brand-accent text-brand-accent"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2" />
                    Talk to Maintainers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-brand-accent/30 hover:bg-brand-accent/5"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show {projects.length - initialShowCount} More {projects.length - initialShowCount === 1 ? 'Project' : 'Projects'}
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
