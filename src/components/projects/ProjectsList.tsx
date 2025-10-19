import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SectionHeader } from '../ui/section-header';
import { 
  Star, 
  GitFork, 
  Users, 
  ExternalLink, 
  GitBranch,
  Search,
  Filter,
  Package,
  Clock,
  Download
} from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  maintainers: number;
  stars: string;
  forks: string;
  language: string;
  status: 'active' | 'featured' | 'new' | 'trending';
  lastUpdated: string;
  githubUrl: string;
  website?: string;
  license: string;
  weeklyDownloads?: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  size?: 'large' | 'medium' | 'small' | 'micro';
}

interface ProjectsListProps {
  title?: string;
  description?: string;
  projects?: Project[];
  variant?: 'simple' | 'detailed' | 'compact' | 'minimal';
  showSearch?: boolean;
  showFilters?: boolean;
  maxProjects?: number;
  className?: string;
}

// Extended mock data with more projects including small/micro projects
const defaultProjects: Project[] = [
  // Large projects
  {
    id: 'react',
    name: 'React',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    category: 'Frontend Framework',
    maintainers: 1500,
    stars: '220k',
    forks: '45k',
    language: 'JavaScript',
    status: 'featured',
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/facebook/react',
    website: 'https://reactjs.org',
    license: 'MIT',
    weeklyDownloads: '18M',
    tags: ['ui', 'components', 'javascript'],
    featured: true,
    size: 'large'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'The Progressive JavaScript Framework for building modern user interfaces.',
    category: 'Frontend Framework',
    maintainers: 900,
    stars: '207k',
    forks: '34k',
    language: 'TypeScript',
    status: 'active',
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/vuejs/vue',
    license: 'MIT',
    weeklyDownloads: '4.2M',
    tags: ['vue', 'javascript', 'framework'],
    size: 'large'
  },
  
  // Medium projects
  {
    id: 'fastapi',
    name: 'FastAPI',
    description: 'Modern, fast web framework for building APIs with Python.',
    category: 'Web Framework',
    maintainers: 450,
    stars: '74k',
    forks: '6.1k',
    language: 'Python',
    status: 'trending',
    lastUpdated: '2 days ago',
    githubUrl: 'https://github.com/tiangolo/fastapi',
    license: 'MIT',
    weeklyDownloads: '1.8M',
    tags: ['api', 'python', 'async'],
    trending: true,
    size: 'medium'
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapidly building custom designs.',
    category: 'CSS Framework',
    maintainers: 120,
    stars: '81k',
    forks: '4.1k',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/tailwindlabs/tailwindcss',
    license: 'MIT',
    weeklyDownloads: '3.2M',
    tags: ['css', 'utilities', 'design'],
    size: 'medium'
  },
  
  // Small projects
  {
    id: 'chalk',
    name: 'Chalk',
    description: 'Terminal string styling library for Node.js.',
    category: 'Utility',
    maintainers: 8,
    stars: '21k',
    forks: '869',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '1 week ago',
    githubUrl: 'https://github.com/chalk/chalk',
    license: 'MIT',
    weeklyDownloads: '45M',
    tags: ['terminal', 'colors', 'styling'],
    size: 'small'
  },
  {
    id: 'lodash',
    name: 'Lodash',
    description: 'A modern JavaScript utility library delivering modularity and performance.',
    category: 'Utility',
    maintainers: 15,
    stars: '59k',
    forks: '7k',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '2 weeks ago',
    githubUrl: 'https://github.com/lodash/lodash',
    license: 'MIT',
    weeklyDownloads: '52M',
    tags: ['utilities', 'helpers', 'functions'],
    size: 'small'
  },
  {
    id: 'axios',
    name: 'Axios',
    description: 'Promise based HTTP client for the browser and node.js.',
    category: 'HTTP Client',
    maintainers: 25,
    stars: '105k',
    forks: '11k',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '3 days ago',
    githubUrl: 'https://github.com/axios/axios',
    license: 'MIT',
    weeklyDownloads: '28M',
    tags: ['http', 'promises', 'ajax'],
    size: 'small'
  },
  
  // Micro projects
  {
    id: 'is-odd',
    name: 'is-odd',
    description: 'Returns true if the given number is odd.',
    category: 'Utility',
    maintainers: 1,
    stars: '328',
    forks: '89',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '6 months ago',
    githubUrl: 'https://github.com/jonschlinkert/is-odd',
    license: 'MIT',
    weeklyDownloads: '2.1M',
    tags: ['math', 'number', 'utility'],
    size: 'micro'
  },
  {
    id: 'left-pad',
    name: 'left-pad',
    description: 'String left pad utility function.',
    category: 'Utility',
    maintainers: 1,
    stars: '4.2k',
    forks: '890',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '8 months ago',
    githubUrl: 'https://github.com/stevemao/left-pad',
    license: 'MIT',
    weeklyDownloads: '1.8M',
    tags: ['string', 'padding', 'utility'],
    size: 'micro'
  },
  {
    id: 'once',
    name: 'once',
    description: 'Only call a function once.',
    category: 'Utility',
    maintainers: 2,
    stars: '2.1k',
    forks: '234',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '4 months ago',
    githubUrl: 'https://github.com/isaacs/once',
    license: 'ISC',
    weeklyDownloads: '48M',
    tags: ['function', 'wrapper', 'utility'],
    size: 'micro'
  },
  {
    id: 'rimraf',
    name: 'rimraf',
    description: 'A deep deletion module for node (like rm -rf).',
    category: 'File System',
    maintainers: 3,
    stars: '5.1k',
    forks: '567',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '2 months ago',
    githubUrl: 'https://github.com/isaacs/rimraf',
    license: 'ISC',
    weeklyDownloads: '22M',
    tags: ['filesystem', 'delete', 'utility'],
    size: 'micro'
  },
  {
    id: 'mkdirp',
    name: 'mkdirp',
    description: 'Recursively mkdir, like mkdir -p.',
    category: 'File System',
    maintainers: 2,
    stars: '2.9k',
    forks: '421',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '3 months ago',
    githubUrl: 'https://github.com/substack/node-mkdirp',
    license: 'MIT',
    weeklyDownloads: '31M',
    tags: ['filesystem', 'directory', 'utility'],
    size: 'micro'
  }
];

const getStatusBadge = (status: Project['status']) => {
  switch (status) {
    case 'featured':
      return <Badge className="bg-brand-primary text-primary-foreground">Featured</Badge>;
    case 'trending':
      return <Badge className="bg-brand-warning text-white">Trending</Badge>;
    case 'new':
      return <Badge className="bg-brand-success text-white">New</Badge>;
    case 'active':
    default:
      return <Badge variant="secondary">Active</Badge>;
  }
};

const getSizeBadge = (size: Project['size']) => {
  switch (size) {
    case 'large':
      return <Badge variant="outline" className="text-xs bg-brand-primary/10 text-brand-primary">Large</Badge>;
    case 'medium':
      return <Badge variant="outline" className="text-xs bg-brand-accent/50 text-brand-primary">Medium</Badge>;
    case 'small':
      return <Badge variant="outline" className="text-xs bg-brand-neutral-100 text-brand-neutral-700">Small</Badge>;
    case 'micro':
      return <Badge variant="outline" className="text-xs bg-brand-neutral-50 text-brand-neutral-600">Micro</Badge>;
    default:
      return null;
  }
};

export function ProjectsList({
  title = "Project Directory",
  description = "Browse our comprehensive collection of open source projects, from large frameworks to essential micro-utilities that power the ecosystem.",
  projects = defaultProjects,
  variant = 'simple',
  showSearch = true,
  showFilters = true,
  maxProjects,
  className = ""
}: ProjectsListProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedSize, setSelectedSize] = React.useState<string>('all');
  const [showAll, setShowAll] = React.useState(false);

  // Filter and search logic
  const filteredProjects = React.useMemo(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (selectedSize !== 'all') {
      filtered = filtered.filter(project => project.size === selectedSize);
    }

    return filtered;
  }, [projects, searchTerm, selectedCategory, selectedSize]);

  const displayedProjects = maxProjects && !showAll 
    ? filteredProjects.slice(0, maxProjects) 
    : filteredProjects;

  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(projects.map(p => p.category)));
    return cats.sort();
  }, [projects]);

  const sizes = React.useMemo(() => {
    const projectSizes = Array.from(new Set(projects.map(p => p.size).filter(Boolean)));
    return projectSizes.sort();
  }, [projects]);

  const stats = React.useMemo(() => {
    const sizeDistribution = {
      large: projects.filter(p => p.size === 'large').length,
      medium: projects.filter(p => p.size === 'medium').length,
      small: projects.filter(p => p.size === 'small').length,
      micro: projects.filter(p => p.size === 'micro').length
    };

    return {
      totalProjects: projects.length,
      filteredProjects: filteredProjects.length,
      ...sizeDistribution
    };
  }, [projects, filteredProjects]);

  // Render variants
  const renderSimpleVariant = () => (
    <div className="space-y-3">
      {displayedProjects.map((project) => (
        <Card key={project.id} className="group hover:shadow-md transition-all duration-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Package size={16} className="text-brand-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium truncate">{project.name}</h3>
                    <div className="flex items-center gap-1">
                      {getStatusBadge(project.status)}
                      {project.size && getSizeBadge(project.size)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground ml-4">
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <Download size={12} />
                  {project.weeklyDownloads || 'N/A'}
                </span>
                <Button variant="ghost" size="sm" className="h-8">
                  <ExternalLink size={14} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderDetailedVariant = () => (
    <div className="space-y-4">
      {displayedProjects.map((project) => (
        <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <Package size={20} className="text-brand-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(project.status)}
                    {project.size && getSizeBadge(project.size)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Project Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-2 bg-brand-neutral-50/50 rounded">
                    <div className="font-medium text-sm">{project.stars}</div>
                    <div className="text-xs text-muted-foreground">Stars</div>
                  </div>
                  <div className="text-center p-2 bg-brand-neutral-50/50 rounded">
                    <div className="font-medium text-sm">{project.forks}</div>
                    <div className="text-xs text-muted-foreground">Forks</div>
                  </div>
                  <div className="text-center p-2 bg-brand-neutral-50/50 rounded">
                    <div className="font-medium text-sm">{project.maintainers}</div>
                    <div className="text-xs text-muted-foreground">Maintainers</div>
                  </div>
                  <div className="text-center p-2 bg-brand-neutral-50/50 rounded">
                    <div className="font-medium text-sm">{project.weeklyDownloads || 'N/A'}</div>
                    <div className="text-xs text-muted-foreground">Weekly DL</div>
                  </div>
                </div>

                {/* Tags and Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    <span>{project.language}</span>
                    <span>•</span>
                    <span>{project.license}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCompactVariant = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {displayedProjects.map((project) => (
        <Card key={project.id} className="group hover:shadow-md transition-all duration-200">
          <CardContent className="p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Package size={14} className="text-brand-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="font-medium text-sm truncate">{project.name}</h4>
                  {project.size && getSizeBadge(project.size)}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={10} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download size={10} />
                    {project.weeklyDownloads || 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderMinimalVariant = () => (
    <div className="space-y-2">
      {displayedProjects.map((project) => (
        <div key={project.id} className="flex items-center justify-between py-2 px-3 hover:bg-brand-neutral-50/50 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-brand-primary/10 rounded flex items-center justify-center">
              <Package size={12} className="text-brand-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{project.name}</span>
                {project.size && getSizeBadge(project.size)}
              </div>
              <span className="text-xs text-muted-foreground">{project.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star size={10} />
              {project.stars}
            </span>
            <span>{project.language}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <SectionHeader
        title={title}
        description={description}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="font-medium">{stats.totalProjects}</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="font-medium">{stats.large}</div>
            <div className="text-xs text-muted-foreground">Large</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="font-medium">{stats.medium}</div>
            <div className="text-xs text-muted-foreground">Medium</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="font-medium">{stats.small}</div>
            <div className="text-xs text-muted-foreground">Small</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="font-medium">{stats.micro}</div>
            <div className="text-xs text-muted-foreground">Micro</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {showSearch && (
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          )}
          {showFilters && (
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {displayedProjects.length} of {filteredProjects.length} projects
        </p>
        {maxProjects && filteredProjects.length > maxProjects && !showAll && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowAll(true)}
          >
            Show All ({filteredProjects.length})
          </Button>
        )}
      </div>

      {/* Projects List */}
      {variant === 'simple' && renderSimpleVariant()}
      {variant === 'detailed' && renderDetailedVariant()}
      {variant === 'compact' && renderCompactVariant()}
      {variant === 'minimal' && renderMinimalVariant()}

      {/* Load More */}
      {maxProjects && showAll && (
        <div className="text-center">
          <Button 
            variant="outline"
            onClick={() => setShowAll(false)}
          >
            Show Less
          </Button>
        </div>
      )}
    </div>
  );
}