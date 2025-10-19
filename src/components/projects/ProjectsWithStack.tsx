import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SectionHeader } from '../ui/section-header';
import { Separator } from '../ui/separator';
import { 
  Star, 
  GitFork, 
  Users, 
  ExternalLink, 
  Package,
  Search,
  Layers,
  Code2,
  Database,
  Globe,
  Terminal,
  Zap,
  Cpu,
  Shield,
  ChevronRight,
  ChevronDown,
  Download,
  ArrowRight
} from 'lucide-react';

export interface StackItem {
  name: string;
  type: 'framework' | 'library' | 'tool' | 'service' | 'language' | 'runtime';
  description?: string;
  version?: string;
  downloads?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface ProjectWithStack {
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
  stack: StackItem[];
  dependencies?: string[];
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface ProjectsWithStackProps {
  title?: string;
  description?: string;
  projects?: ProjectWithStack[];
  variant?: 'stack-grid' | 'stack-list' | 'dependencies' | 'ecosystem';
  showSearch?: boolean;
  showFilters?: boolean;
  maxProjects?: number;
  className?: string;
}

// Extended mock data with stack information
const defaultProjectsWithStack: ProjectWithStack[] = [
  {
    id: 'react-app',
    name: 'Modern React App',
    description: 'Full-stack React application with modern tooling and best practices.',
    category: 'Web Application',
    maintainers: 45,
    stars: '12k',
    forks: '2.1k',
    language: 'TypeScript',
    status: 'featured',
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/example/react-app',
    license: 'MIT',
    weeklyDownloads: '180k',
    tags: ['react', 'typescript', 'fullstack'],
    featured: true,
    size: 'large',
    icon: Code2,
    stack: [
      { name: 'React', type: 'framework', version: '18.2.0', downloads: '18M', icon: Code2 },
      { name: 'TypeScript', type: 'language', version: '5.0.0', downloads: '25M', icon: Terminal },
      { name: 'Vite', type: 'tool', version: '4.3.0', downloads: '2.1M', icon: Zap },
      { name: 'Tailwind CSS', type: 'framework', version: '3.3.0', downloads: '3.2M', icon: Globe },
      { name: 'React Router', type: 'library', version: '6.8.0', downloads: '8.5M', icon: Code2 },
      { name: 'Zustand', type: 'library', version: '4.3.0', downloads: '890k', icon: Database }
    ],
    dependencies: ['react', 'typescript', 'vite', 'tailwindcss', 'react-router-dom', 'zustand']
  },
  {
    id: 'fastapi-service',
    name: 'FastAPI Microservice',
    description: 'High-performance API service with async capabilities and automatic documentation.',
    category: 'Backend Service',
    maintainers: 23,
    stars: '8.5k',
    forks: '1.2k',
    language: 'Python',
    status: 'trending',
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/example/fastapi-service',
    license: 'MIT',
    weeklyDownloads: '450k',
    tags: ['api', 'python', 'microservice'],
    trending: true,
    size: 'medium',
    icon: Zap,
    stack: [
      { name: 'FastAPI', type: 'framework', version: '0.100.0', downloads: '1.8M', icon: Zap },
      { name: 'Python', type: 'language', version: '3.11', downloads: '50M', icon: Terminal },
      { name: 'Pydantic', type: 'library', version: '2.0.0', downloads: '12M', icon: Shield },
      { name: 'PostgreSQL', type: 'service', version: '15.0', downloads: 'N/A', icon: Database },
      { name: 'SQLAlchemy', type: 'library', version: '2.0.0', downloads: '3.2M', icon: Database },
      { name: 'Redis', type: 'service', version: '7.0', downloads: 'N/A', icon: Database }
    ],
    dependencies: ['fastapi', 'pydantic', 'sqlalchemy', 'psycopg2', 'redis', 'uvicorn']
  },
  {
    id: 'kubernetes-app',
    name: 'Cloud Native App',
    description: 'Containerized application deployed on Kubernetes with monitoring and scaling.',
    category: 'Cloud Infrastructure',
    maintainers: 67,
    stars: '15k',
    forks: '3.4k',
    language: 'Go',
    status: 'active',
    lastUpdated: '6 hours ago',
    githubUrl: 'https://github.com/example/k8s-app',
    license: 'Apache-2.0',
    tags: ['kubernetes', 'docker', 'cloud-native'],
    size: 'large',
    icon: Layers,
    stack: [
      { name: 'Kubernetes', type: 'runtime', version: '1.27.0', downloads: 'N/A', icon: Layers },
      { name: 'Docker', type: 'tool', version: '24.0.0', downloads: 'N/A', icon: Layers },
      { name: 'Go', type: 'language', version: '1.20.0', downloads: 'N/A', icon: Terminal },
      { name: 'Prometheus', type: 'service', version: '2.44.0', downloads: 'N/A', icon: Cpu },
      { name: 'Grafana', type: 'service', version: '10.0.0', downloads: 'N/A', icon: Cpu },
      { name: 'Helm', type: 'tool', version: '3.12.0', downloads: 'N/A', icon: Package }
    ],
    dependencies: ['kubernetes', 'docker', 'prometheus', 'grafana', 'helm', 'ingress-nginx']
  },
  {
    id: 'ml-pipeline',
    name: 'ML Training Pipeline',
    description: 'Machine learning pipeline for model training, validation, and deployment.',
    category: 'Machine Learning',
    maintainers: 34,
    stars: '9.2k',
    forks: '1.8k',
    language: 'Python',
    status: 'active',
    lastUpdated: '12 hours ago',
    githubUrl: 'https://github.com/example/ml-pipeline',
    license: 'MIT',
    weeklyDownloads: '320k',
    tags: ['machine-learning', 'pytorch', 'mlops'],
    size: 'medium',
    icon: Cpu,
    stack: [
      { name: 'PyTorch', type: 'framework', version: '2.0.0', downloads: '3.8M', icon: Cpu },
      { name: 'Python', type: 'language', version: '3.10', downloads: '50M', icon: Terminal },
      { name: 'MLflow', type: 'tool', version: '2.4.0', downloads: '890k', icon: Database },
      { name: 'Jupyter', type: 'tool', version: '1.0.0', downloads: '2.1M', icon: Code2 },
      { name: 'NumPy', type: 'library', version: '1.24.0', downloads: '45M', icon: Cpu },
      { name: 'Pandas', type: 'library', version: '2.0.0', downloads: '38M', icon: Database }
    ],
    dependencies: ['torch', 'numpy', 'pandas', 'mlflow', 'jupyter', 'scikit-learn', 'matplotlib']
  },
  {
    id: 'cli-tool',
    name: 'Developer CLI Tool',
    description: 'Command-line interface tool for development workflow automation.',
    category: 'Developer Tool',
    maintainers: 12,
    stars: '4.3k',
    forks: '567',
    language: 'JavaScript',
    status: 'active',
    lastUpdated: '3 days ago',
    githubUrl: 'https://github.com/example/cli-tool',
    license: 'MIT',
    weeklyDownloads: '890k',
    tags: ['cli', 'node', 'automation'],
    size: 'small',
    icon: Terminal,
    stack: [
      { name: 'Node.js', type: 'runtime', version: '18.16.0', downloads: '25M', icon: Terminal },
      { name: 'JavaScript', type: 'language', version: 'ES2022', downloads: 'N/A', icon: Code2 },
      { name: 'Commander.js', type: 'library', version: '10.0.0', downloads: '8.2M', icon: Terminal },
      { name: 'Chalk', type: 'library', version: '5.2.0', downloads: '45M', icon: Terminal },
      { name: 'Inquirer', type: 'library', version: '9.2.0', downloads: '12M', icon: Terminal }
    ],
    dependencies: ['commander', 'chalk', 'inquirer', 'fs-extra', 'glob', 'semver']
  }
];

const getStatusBadge = (status: ProjectWithStack['status']) => {
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

const getStackTypeBadge = (type: StackItem['type']) => {
  switch (type) {
    case 'framework':
      return <Badge variant="outline" className="text-xs bg-brand-primary/10 text-brand-primary">Framework</Badge>;
    case 'library':
      return <Badge variant="outline" className="text-xs bg-brand-accent/50">Library</Badge>;
    case 'tool':
      return <Badge variant="outline" className="text-xs bg-brand-success/10 text-brand-success">Tool</Badge>;
    case 'service':
      return <Badge variant="outline" className="text-xs bg-brand-warning/10 text-brand-warning">Service</Badge>;
    case 'language':
      return <Badge variant="outline" className="text-xs bg-brand-error/10 text-brand-error">Language</Badge>;
    case 'runtime':
      return <Badge variant="outline" className="text-xs bg-brand-neutral-200 text-brand-neutral-700">Runtime</Badge>;
    default:
      return <Badge variant="outline" className="text-xs">Other</Badge>;
  }
};

export function ProjectsWithStack({
  title = "Projects & Technology Stacks",
  description = "Explore projects with their complete technology stacks, dependencies, and ecosystem relationships.",
  projects = defaultProjectsWithStack,
  variant = 'stack-grid',
  showSearch = true,
  showFilters = true,
  maxProjects,
  className = ""
}: ProjectsWithStackProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [selectedStackType, setSelectedStackType] = React.useState<string>('all');
  const [expandedProjects, setExpandedProjects] = React.useState<Set<string>>(new Set());
  const [showAll, setShowAll] = React.useState(false);

  // Filter and search logic
  const filteredProjects = React.useMemo(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.stack.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (selectedStackType !== 'all') {
      filtered = filtered.filter(project => 
        project.stack.some(item => item.type === selectedStackType)
      );
    }

    return filtered;
  }, [projects, searchTerm, selectedCategory, selectedStackType]);

  const displayedProjects = maxProjects && !showAll 
    ? filteredProjects.slice(0, maxProjects) 
    : filteredProjects;

  const categories = React.useMemo(() => {
    const cats = Array.from(new Set(projects.map(p => p.category)));
    return cats.sort();
  }, [projects]);

  const stackTypes = React.useMemo(() => {
    const types = Array.from(new Set(projects.flatMap(p => p.stack.map(s => s.type))));
    return types.sort();
  }, [projects]);

  const toggleExpanded = (projectId: string) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  // Render variants
  const renderStackGridVariant = () => (
    <div className="space-y-6">
      {displayedProjects.map((project) => {
        const isExpanded = expandedProjects.has(project.id);
        const IconComponent = project.icon || Package;
        
        return (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <IconComponent size={24} className="text-brand-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      {getStatusBadge(project.status)}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(project.id)}
                  className="h-8 w-8 p-0"
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </Button>
              </div>
              
              {/* Project Stats */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star size={14} />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {project.maintainers} maintainers
                </span>
                <span className="flex items-center gap-1">
                  <Download size={14} />
                  {project.weeklyDownloads || 'N/A'} weekly
                </span>
                <span>{project.category}</span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              {/* Technology Stack */}
              <div className="mb-4">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Layers size={16} className="text-brand-primary" />
                  Technology Stack ({project.stack.length} components)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.stack.slice(0, isExpanded ? undefined : 6).map((stackItem, index) => {
                    const StackIcon = stackItem.icon || Package;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-brand-neutral-50/50 transition-colors">
                        <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                          <StackIcon size={14} className="text-brand-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{stackItem.name}</span>
                            {getStackTypeBadge(stackItem.type)}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            {stackItem.version && <span>v{stackItem.version}</span>}
                            {stackItem.downloads && (
                              <>
                                <span>•</span>
                                <span>{stackItem.downloads} DL</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {!isExpanded && project.stack.length > 6 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(project.id)}
                    className="mt-3 w-full"
                  >
                    Show {project.stack.length - 6} more components
                  </Button>
                )}
              </div>

              {/* Dependencies (when expanded) */}
              {isExpanded && project.dependencies && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Package size={16} className="text-brand-primary" />
                    Dependencies ({project.dependencies.length})
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.dependencies.map((dep, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {dep}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tags and Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={14} />
                  </Button>
                  <Button variant="outline" size="sm">
                    View Stack Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  const renderStackListVariant = () => (
    <div className="space-y-4">
      {displayedProjects.map((project) => {
        const IconComponent = project.icon || Package;
        
        return (
          <Card key={project.id} className="group hover:shadow-md transition-all duration-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <IconComponent size={20} className="text-brand-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{project.name}</h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-1 flex-wrap">
                    <span className="text-xs text-muted-foreground">Stack:</span>
                    {project.stack.slice(0, 5).map((stackItem, index) => (
                      <React.Fragment key={index}>
                        <Badge variant="outline" className="text-xs">
                          {stackItem.name}
                        </Badge>
                        {index < Math.min(4, project.stack.length - 1) && (
                          <ArrowRight size={10} className="text-muted-foreground" />
                        )}
                      </React.Fragment>
                    ))}
                    {project.stack.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.stack.length - 5} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers size={12} />
                    {project.stack.length} components
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  const renderDependenciesVariant = () => (
    <div className="space-y-6">
      {displayedProjects.map((project) => {
        const IconComponent = project.icon || Package;
        
        return (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <IconComponent size={24} className="text-brand-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{project.name}</h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Package size={14} />
                      {project.dependencies?.length || 0} dependencies
                    </span>
                  </div>
                </div>
              </div>

              {/* Dependency Tree */}
              {project.dependencies && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Package size={16} className="text-brand-primary" />
                    Dependency Tree
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {project.dependencies.map((dep, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 border rounded text-sm">
                        <Package size={12} className="text-brand-primary" />
                        <span className="font-mono">{dep}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  const renderEcosystemVariant = () => {
    // Group projects by primary technology
    const ecosystemGroups = React.useMemo(() => {
      const groups: Record<string, ProjectWithStack[]> = {};
      
      displayedProjects.forEach(project => {
        const primaryTech = project.stack[0]?.name || project.language;
        if (!groups[primaryTech]) {
          groups[primaryTech] = [];
        }
        groups[primaryTech].push(project);
      });
      
      return groups;
    }, [displayedProjects]);

    return (
      <div className="space-y-8">
        {Object.entries(ecosystemGroups).map(([tech, techProjects]) => (
          <div key={tech} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Layers size={16} className="text-brand-primary" />
              </div>
              <h3 className="font-medium">{tech} Ecosystem ({techProjects.length} projects)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techProjects.map((project) => {
                const IconComponent = project.icon || Package;
                return (
                  <Card key={project.id} className="group hover:shadow-md transition-all duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent size={16} className="text-brand-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-1">
                            <h4 className="font-medium text-sm truncate">{project.name}</h4>
                            {getStatusBadge(project.status)}
                          </div>
                          <p className="text-xs text-muted-foreground">{project.category}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Star size={10} />
                          {project.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers size={10} />
                          {project.stack.length}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.stack.slice(0, 3).map((stackItem, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {stackItem.name}
                          </Badge>
                        ))}
                        {project.stack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.stack.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <SectionHeader
        title={title}
        description={description}
      />

      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {showSearch && (
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies, or dependencies..."
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
              <Select value={selectedStackType} onValueChange={setSelectedStackType}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Stack Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {stackTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
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
          Showing {displayedProjects.length} projects with technology stacks
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

      {/* Projects with Stack */}
      {variant === 'stack-grid' && renderStackGridVariant()}
      {variant === 'stack-list' && renderStackListVariant()}
      {variant === 'dependencies' && renderDependenciesVariant()}
      {variant === 'ecosystem' && renderEcosystemVariant()}

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