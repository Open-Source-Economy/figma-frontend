import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { 
  Star, 
  GitFork, 
  Users, 
  ExternalLink, 
  ArrowRight,
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Zap,
  Cpu,
  Shield,
  Smartphone,
  Plus,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { Project } from './ProjectsShowcase';

interface ProjectsShowcaseCompactProps {
  title?: string;
  description?: string;
  maxProjects?: number;
  onNavigateToProjects?: () => void;
  onViewProject?: (slug: string) => void;
  className?: string;
}

// Featured projects for compact showcase
const featuredProjects: Project[] = [
  {
    id: 'react',
    name: 'React',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    category: 'Frontend Framework',
    maintainers: 1500,
    stars: '220k',
    forks: '45k',
    language: 'JavaScript',
    languages: ['JavaScript', 'TypeScript'],
    status: 'featured',
    icon: Code2,
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/facebook/react',
    website: 'https://reactjs.org',
    license: 'MIT',
    tags: ['ui', 'components', 'javascript'],
    featured: true,
    trending: true
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'Production-Grade Container Orchestration for automating deployment and scaling.',
    category: 'Infrastructure',
    maintainers: 3200,
    stars: '108k',
    forks: '39k',
    language: 'Go',
    languages: ['Go', 'Shell'],
    status: 'featured',
    icon: Layers,
    lastUpdated: '1 hour ago',
    githubUrl: 'https://github.com/kubernetes/kubernetes',
    website: 'https://kubernetes.io',
    license: 'Apache-2.0',
    tags: ['containers', 'orchestration', 'devops'],
    featured: true,
    trending: true
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'An end-to-end open source platform for machine learning applications.',
    category: 'Machine Learning',
    maintainers: 2100,
    stars: '185k',
    forks: '74k',
    language: 'Python',
    languages: ['Python', 'C++'],
    status: 'featured',
    icon: Cpu,
    lastUpdated: '3 hours ago',
    githubUrl: 'https://github.com/tensorflow/tensorflow',
    website: 'https://tensorflow.org',
    license: 'Apache-2.0',
    tags: ['machine-learning', 'ai', 'python'],
    featured: true
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine for scalable applications.',
    category: 'Runtime',
    maintainers: 1800,
    stars: '105k',
    forks: '28k',
    language: 'JavaScript',
    languages: ['JavaScript', 'C++'],
    status: 'active',
    icon: Terminal,
    lastUpdated: '6 hours ago',
    githubUrl: 'https://github.com/nodejs/node',
    website: 'https://nodejs.org',
    license: 'MIT',
    tags: ['runtime', 'javascript', 'backend']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'The world\'s most advanced open source relational database system.',
    category: 'Database',
    maintainers: 1,
    stars: '15k',
    forks: '4.2k',
    language: 'C',
    languages: ['C', 'SQL'],
    status: 'active',
    icon: Database,
    lastUpdated: '4 hours ago',
    githubUrl: 'https://github.com/postgres/postgres',
    website: 'https://postgresql.org',
    license: 'PostgreSQL',
    tags: ['database', 'sql', 'relational']
  },
  {
    id: 'rust',
    name: 'Rust',
    description: 'A language for building reliable and efficient software with memory safety.',
    category: 'Programming Language',
    maintainers: 3,
    stars: '96k',
    forks: '12k',
    language: 'Rust',
    languages: ['Rust', 'C++'],
    status: 'featured',
    icon: Cpu,
    lastUpdated: '1 hour ago',
    githubUrl: 'https://github.com/rust-lang/rust',
    website: 'https://rust-lang.org',
    license: 'MIT',
    tags: ['systems', 'memory-safe', 'performance'],
    featured: true
  }
];

const getStatusBadge = (status: Project['status']) => {
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

const getProjectIcon = (project: Project) => {
  const IconComponent = project.icon;
  return (
    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
      <IconComponent size={16} className="text-brand-primary" />
    </div>
  );
};

export function ProjectsShowcaseCompact({
  title = "Featured Open Source Projects",
  description = "Explore our curated selection of enterprise-grade open source projects with direct access to expert maintainers.",
  maxProjects = 6,
  onNavigateToProjects,
  onViewProject,
  className = ""
}: ProjectsShowcaseCompactProps) {
  const displayedProjects = featuredProjects.slice(0, maxProjects);
  const [openMaintainers, setOpenMaintainers] = React.useState<Record<string, boolean>>({});

  const toggleMaintainers = (projectId: string) => {
    setOpenMaintainers(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const stats = React.useMemo(() => {
    const totalStars = featuredProjects.reduce((sum, p) => sum + parseInt(p.stars.replace('k', '000').replace('M', '000000')), 0);
    const totalMaintainers = featuredProjects.reduce((sum, p) => sum + p.maintainers, 0);
    return {
      totalProjects: `${featuredProjects.length}+`,
      totalStars: totalStars > 1000000 ? `${(totalStars / 1000000).toFixed(1)}M` : `${Math.round(totalStars / 1000)}k`,
      totalMaintainers: `${(totalMaintainers / 1000).toFixed(1)}k`
    };
  }, []);

  return (
    <section className={`py-16 md:py-24 transition-all duration-1000 ease-in-out ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeader
            title={title}
            description={description}
            centered
          />
        </div>

        {/* Projects Grid - Compact Version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-brand-primary/20 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Project Header with Logo & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 rounded-lg flex items-center justify-center border border-border/30">
                    {getProjectIcon(project)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <p className="text-xs text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(project.status)}
                    <button
                      onClick={() => window.open(`https://github.com/${project.name.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                      className="opacity-40 hover:opacity-70 transition-opacity p-1 rounded text-muted-foreground hover:text-foreground"
                      title="View on GitHub"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* GitHub Stats */}
                <div className="flex items-center gap-2 mb-3 opacity-50 ml-12">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-brand-highlight" />
                    <span className="text-xs font-medium text-foreground">{project.stars}</span>
                    <span className="text-xs text-muted-foreground">stars</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork className="w-3 h-3 text-brand-accent" />
                    <span className="text-xs font-medium text-foreground">{project.forks || Math.floor(parseInt(project.stars.replace('k', '000').replace(',', '')) * 0.1)}</span>
                    <span className="text-xs text-muted-foreground">forks</span>
                  </div>
                </div>

                {/* Expert Maintainers */}
                <div className="mb-2 flex-grow">
                  <Collapsible open={openMaintainers[project.id]} onOpenChange={() => toggleMaintainers(project.id)}>
                    <div className="flex items-center gap-2 mb-3 p-2 -mx-2 rounded-lg hover:bg-brand-accent/5 transition-colors cursor-pointer">
                      <span className="font-medium text-foreground hover:text-brand-accent transition-colors">3 Expert maintainers <span className="text-muted-foreground">onboarded</span></span>
                      <CollapsibleTrigger asChild>
                        <button className="ml-auto p-1 hover:bg-brand-accent/10 rounded transition-colors">
                          {openMaintainers[project.id] ? (
                            <ChevronUp className="w-4 h-4 text-brand-accent" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-brand-accent" />
                          )}
                        </button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <div className={`${(() => {
                        const maintainerCount = Math.min(3, parseInt(project.maintainers) || 1);
                        return maintainerCount === 1 ? 'space-y-3' : maintainerCount === 2 ? 'space-y-2.5' : 'space-y-2';
                      })()}`}>
                        {Array.from({ length: Math.min(3, parseInt(project.maintainers) || 1) }, (_, index) => {
                          const maintainerCount = Math.min(3, parseInt(project.maintainers) || 1);
                          const names = ['Sarah Chen', 'Marcus Rodriguez', 'Priya Patel', 'Alex Thompson', 'Jordan Kim', 'Emma Williams'];
                          const roles = ['Core Maintainer', 'Security Expert', 'Performance Lead', 'API Specialist', 'DevOps Expert', 'Architecture Lead'];
                          const roleIcons = ['C', 'S', 'P', 'A', 'D', 'A'];
                          const specialties = ['Full-stack expertise', 'Security & compliance', 'Performance optimization', 'API & integrations', 'Infrastructure & scaling', 'System architecture'];
                          
                          return (
                            <div key={index} className={`flex items-center justify-between ${
                              maintainerCount === 1 ? 'p-3 bg-gradient-to-r from-brand-accent/5 to-brand-highlight/5 rounded-lg border border-brand-accent/20' : ''
                            }`}>
                              <div className="flex items-center gap-3">
                                <div className={`${
                                  maintainerCount === 1 ? 'w-10 h-10' : 'w-8 h-8'
                                } rounded-full overflow-hidden border-2 border-brand-accent/20 flex-shrink-0`}>
                                  <img 
                                    src={[
                                      "https://images.unsplash.com/photo-1743850765931-4a00e4809a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTk4NTY2NTR8MA&ixlib=rb-4.1.0&q=80&w=400",
                                      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTkxNzc2M3ww&ixlib=rb-4.1.0&q=80&w=400",
                                      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTkxNzc2Nnww&ixlib=rb-4.1.0&q=80&w=400"
                                    ][index % 3]} 
                                    alt={`${names[index]} - ${roles[index]}`}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className={`${
                                    maintainerCount === 1 ? 'text-base' : 'text-sm'
                                  } font-medium text-foreground`}>{names[index] || 'Expert Maintainer'}</div>
                                  <div className={`${
                                    maintainerCount === 1 ? 'text-sm' : 'text-xs'
                                  } text-muted-foreground`}>
                                    {roles[index] || 'Maintainer'}
                                  </div>
                                  {maintainerCount === 2 && index === 0 && (
                                    <div className="text-xs text-brand-accent font-medium mt-0.5">Lead Expert</div>
                                  )}
                                </div>
                              </div>

                            </div>
                          );
                        })}
                        {parseInt(project.maintainers) > 3 && (
                          <div>
                            <div className="text-xs text-muted-foreground ml-11">
                              +1 more available
                            </div>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Primary Action */}
                <div className="pt-2 border-t border-border/30">
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white shadow-md"
                    onClick={() => {
                      if (onViewProject) {
                        onViewProject(project.id);
                      } else {
                        console.log(`Viewing ${project.name} details`);
                      }
                    }}
                  >
                    Connect with Experts
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action with Stats */}
        <div className="text-center rounded-2xl p-8 border border-brand-accent/20">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">
                Ready to explore <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-highlight bg-clip-text text-transparent">all projects</span>?
              </h3>
              <p className="text-muted-foreground text-lg">
                Discover hundreds of open source projects with comprehensive filtering, search capabilities, and detailed maintainer insights.
              </p>
            </div>
            
            {/* Stats Integration */}
            <div className="flex items-center justify-center gap-8 lg:gap-12 py-6">
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 rounded-xl flex items-center justify-center border border-brand-primary/30 group-hover:border-brand-accent/50 transition-all duration-300">
                    <Code2 className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl mb-1 bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-accent bg-clip-text text-transparent group-hover:from-brand-accent group-hover:to-brand-primary transition-all duration-300 font-semibold">
                  {stats.totalProjects}
                </div>
                <div className="text-muted-foreground text-sm font-medium">Projects</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 rounded-xl flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-highlight/50 transition-all duration-300">
                    <Star className="w-5 h-5 text-brand-accent group-hover:text-brand-highlight transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl mb-1 bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-highlight bg-clip-text text-transparent group-hover:from-brand-highlight group-hover:to-brand-accent transition-all duration-300 font-semibold">
                  {stats.totalStars}
                </div>
                <div className="text-muted-foreground text-sm font-medium">Combined Stars</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-highlight/20 to-brand-success/20 rounded-xl flex items-center justify-center border border-brand-highlight/30 group-hover:border-brand-success/50 transition-all duration-300">
                    <Users className="w-5 h-5 text-brand-highlight group-hover:text-brand-success transition-colors duration-300" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl mb-1 bg-gradient-to-r from-brand-highlight via-brand-highlight-light to-brand-success bg-clip-text text-transparent group-hover:from-brand-success group-hover:to-brand-highlight transition-all duration-300 font-semibold">
                  {stats.totalMaintainers}
                </div>
                <div className="text-muted-foreground text-sm font-medium">Maintainers</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-brand-accent to-brand-accent-dark hover:from-brand-accent-dark hover:to-brand-accent text-white shadow-lg"
                onClick={onNavigateToProjects}
              >
                Browse All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10"
                onClick={() => {
                  // In a real app, this would navigate to a custom search or request page
                  console.log('Request custom project');
                }}
              >
                Request Custom Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}