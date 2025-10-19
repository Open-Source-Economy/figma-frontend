import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Star, 
  ExternalLink
} from 'lucide-react';

export interface MinimalProject {
  id: string;
  name: string;
  category: string;
  stars: string;
  language: string;
  status: 'active' | 'featured' | 'new' | 'trending';
  githubUrl: string;
  website?: string;
}

interface ProjectsMinimalProps {
  title?: string;
  description?: string;
  projects?: MinimalProject[];
  variant?: 'grid' | 'list' | 'compact';
  maxProjects?: number;
  className?: string;
}

// Minimal mock data
const defaultMinimalProjects: MinimalProject[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    stars: '220k',
    language: 'JavaScript',
    status: 'featured',
    githubUrl: 'https://github.com/facebook/react',
    website: 'https://reactjs.org'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    stars: '207k',
    language: 'TypeScript',
    status: 'active',
    githubUrl: 'https://github.com/vuejs/vue',
    website: 'https://vuejs.org'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Runtime',
    stars: '105k',
    language: 'JavaScript',
    status: 'active',
    githubUrl: 'https://github.com/nodejs/node',
    website: 'https://nodejs.org'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Infrastructure',
    stars: '108k',
    language: 'Go',
    status: 'featured',
    githubUrl: 'https://github.com/kubernetes/kubernetes',
    website: 'https://kubernetes.io'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ML',
    stars: '185k',
    language: 'Python',
    status: 'active',
    githubUrl: 'https://github.com/tensorflow/tensorflow',
    website: 'https://tensorflow.org'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database',
    stars: '15k',
    language: 'C',
    status: 'active',
    githubUrl: 'https://github.com/postgres/postgres',
    website: 'https://postgresql.org'
  }
];

const getStatusBadge = (status: MinimalProject['status']) => {
  switch (status) {
    case 'featured':
      return <Badge className="bg-brand-primary text-primary-foreground text-xs">Featured</Badge>;
    case 'trending':
      return <Badge className="bg-brand-warning text-white text-xs">Trending</Badge>;
    case 'new':
      return <Badge className="bg-brand-success text-white text-xs">New</Badge>;
    case 'active':
    default:
      return <Badge variant="secondary" className="text-xs">Active</Badge>;
  }
};

export function ProjectsMinimal({
  title = "Projects",
  description,
  projects = defaultMinimalProjects,
  variant = 'grid',
  maxProjects,
  className = ""
}: ProjectsMinimalProps) {
  const displayedProjects = maxProjects ? projects.slice(0, maxProjects) : projects;

  // Grid variant - minimal cards
  const renderGridVariant = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
      {displayedProjects.map((project) => (
        <div key={project.id} className="group p-3 border border-border rounded-lg hover:border-brand-primary/20 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium truncate">{project.name}</h4>
            {project.status === 'featured' && (
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-2">{project.category}</p>
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-muted-foreground">
              <Star size={10} />
              {project.stars}
            </span>
            <span className="text-muted-foreground">{project.language}</span>
          </div>
        </div>
      ))}
    </div>
  );

  // List variant - compact rows
  const renderListVariant = () => (
    <div className="space-y-2">
      {displayedProjects.map((project) => (
        <div key={project.id} className="flex items-center justify-between p-2 border border-border rounded hover:border-brand-primary/20 transition-colors">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium truncate">{project.name}</h4>
                {project.status === 'featured' && getStatusBadge(project.status)}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{project.category}</span>
                <span className="flex items-center gap-1">
                  <Star size={10} />
                  {project.stars}
                </span>
                <span>{project.language}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            {project.website && (
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <ExternalLink size={12} />
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  // Compact variant - very minimal
  const renderCompactVariant = () => (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
      {displayedProjects.map((project) => (
        <div key={project.id} className="group p-2 border border-border rounded text-center hover:border-brand-primary/20 transition-colors">
          <h4 className="text-xs font-medium truncate mb-1">{project.name}</h4>
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Star size={8} />
            <span>{project.stars}</span>
          </div>
          {project.status === 'featured' && (
            <div className="w-1 h-1 bg-brand-primary rounded-full mx-auto mt-1"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className={`py-8 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || description) && (
          <div className="mb-6">
            {title && <h2 className="mb-2">{title}</h2>}
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {/* Projects Display */}
        <div className="mb-6">
          {variant === 'grid' && renderGridVariant()}
          {variant === 'list' && renderListVariant()}
          {variant === 'compact' && renderCompactVariant()}
        </div>

        {/* Show more indicator */}
        {maxProjects && projects.length > maxProjects && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Showing {maxProjects} of {projects.length} projects
            </p>
          </div>
        )}
      </div>
    </section>
  );
}