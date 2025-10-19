import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SectionHeader } from '../ui/section-header';
import { 
  Package,
  Search,
  ChevronRight,
  ChevronDown,
  GitBranch,
  Layers,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

export interface DependencyNode {
  name: string;
  version: string;
  type: 'direct' | 'dev' | 'peer' | 'optional';
  size: 'large' | 'medium' | 'small' | 'micro';
  status: 'active' | 'deprecated' | 'security-issue' | 'outdated';
  description?: string;
  license: string;
  weeklyDownloads?: string;
  lastUpdated: string;
  maintainers: number;
  vulnerabilities?: number;
  children?: DependencyNode[];
  level?: number;
}

export interface DependencyTreeProject {
  id: string;
  name: string;
  description: string;
  version: string;
  language: string;
  packageManager: 'npm' | 'yarn' | 'pip' | 'cargo' | 'maven' | 'go';
  totalDependencies: number;
  directDependencies: number;
  devDependencies: number;
  vulnerabilities: number;
  outdatedDependencies: number;
  dependencies: DependencyNode[];
  lastAnalyzed: string;
}

interface DependencyTreeProps {
  title?: string;
  description?: string;
  projects?: DependencyTreeProject[];
  variant?: 'tree' | 'flat' | 'analysis' | 'security';
  showSearch?: boolean;
  showFilters?: boolean;
  maxDepth?: number;
  className?: string;
}

// Mock data for dependency trees
const defaultDependencyProjects: DependencyTreeProject[] = [
  {
    id: 'react-app',
    name: 'Modern React App',
    description: 'Production React application with comprehensive dependency tree',
    version: '1.2.0',
    language: 'JavaScript',
    packageManager: 'npm',
    totalDependencies: 847,
    directDependencies: 23,
    devDependencies: 45,
    vulnerabilities: 2,
    outdatedDependencies: 8,
    lastAnalyzed: '2 hours ago',
    dependencies: [
      {
        name: 'react',
        version: '18.2.0',
        type: 'direct',
        size: 'large',
        status: 'active',
        description: 'React library for building user interfaces',
        license: 'MIT',
        weeklyDownloads: '18M',
        lastUpdated: '2 weeks ago',
        maintainers: 1500,
        level: 0,
        children: [
          {
            name: 'loose-envify',
            version: '1.4.0',
            type: 'direct',
            size: 'micro',
            status: 'active',
            license: 'MIT',
            weeklyDownloads: '24M',
            lastUpdated: '2 years ago',
            maintainers: 2,
            level: 1,
            children: [
              {
                name: 'js-tokens',
                version: '4.0.0',
                type: 'direct',
                size: 'micro',
                status: 'active',
                license: 'MIT',
                weeklyDownloads: '28M',
                lastUpdated: '5 years ago',
                maintainers: 1,
                level: 2
              }
            ]
          }
        ]
      },
      {
        name: 'react-dom',
        version: '18.2.0',
        type: 'direct',
        size: 'large',
        status: 'active',
        description: 'React DOM rendering',
        license: 'MIT',
        weeklyDownloads: '18M',
        lastUpdated: '2 weeks ago',
        maintainers: 1500,
        level: 0,
        children: [
          {
            name: 'scheduler',
            version: '0.23.0',
            type: 'direct',
            size: 'small',
            status: 'active',
            license: 'MIT',
            weeklyDownloads: '18M',
            lastUpdated: '2 weeks ago',
            maintainers: 1500,
            level: 1
          }
        ]
      },
      {
        name: 'lodash',
        version: '4.17.21',
        type: 'direct',
        size: 'medium',
        status: 'active',
        description: 'JavaScript utility library',
        license: 'MIT',
        weeklyDownloads: '52M',
        lastUpdated: '2 years ago',
        maintainers: 15,
        level: 0
      },
      {
        name: 'axios',
        version: '0.27.2',
        type: 'direct',
        size: 'small',
        status: 'outdated',
        description: 'Promise based HTTP client',
        license: 'MIT',
        weeklyDownloads: '28M',
        lastUpdated: '8 months ago',
        maintainers: 25,
        level: 0,
        children: [
          {
            name: 'follow-redirects',
            version: '1.15.2',
            type: 'direct',
            size: 'micro',
            status: 'security-issue',
            license: 'MIT',
            weeklyDownloads: '35M',
            lastUpdated: '4 months ago',
            maintainers: 3,
            vulnerabilities: 1,
            level: 1
          }
        ]
      },
      {
        name: '@types/react',
        version: '18.2.14',
        type: 'dev',
        size: 'small',
        status: 'active',
        description: 'TypeScript definitions for React',
        license: 'MIT',
        weeklyDownloads: '14M',
        lastUpdated: '1 week ago',
        maintainers: 8,
        level: 0
      }
    ]
  },
  {
    id: 'python-service',
    name: 'FastAPI Service',
    description: 'Python microservice with ML dependencies',
    version: '2.1.3',
    language: 'Python',
    packageManager: 'pip',
    totalDependencies: 234,
    directDependencies: 15,
    devDependencies: 12,
    vulnerabilities: 0,
    outdatedDependencies: 3,
    lastAnalyzed: '1 day ago',
    dependencies: [
      {
        name: 'fastapi',
        version: '0.100.0',
        type: 'direct',
        size: 'medium',
        status: 'active',
        description: 'Modern web framework for APIs',
        license: 'MIT',
        weeklyDownloads: '1.8M',
        lastUpdated: '1 week ago',
        maintainers: 450,
        level: 0,
        children: [
          {
            name: 'pydantic',
            version: '2.0.3',
            type: 'direct',
            size: 'medium',
            status: 'active',
            license: 'MIT',
            weeklyDownloads: '12M',
            lastUpdated: '2 weeks ago',
            maintainers: 89,
            level: 1
          },
          {
            name: 'starlette',
            version: '0.27.0',
            type: 'direct',
            size: 'small',
            status: 'active',
            license: 'BSD',
            weeklyDownloads: '2.1M',
            lastUpdated: '1 month ago',
            maintainers: 34,
            level: 1
          }
        ]
      },
      {
        name: 'uvicorn',
        version: '0.22.0',
        type: 'direct',
        size: 'small',
        status: 'active',
        description: 'Lightning-fast ASGI server',
        license: 'BSD',
        weeklyDownloads: '3.2M',
        lastUpdated: '2 weeks ago',
        maintainers: 23,
        level: 0
      },
      {
        name: 'numpy',
        version: '1.24.3',
        type: 'direct',
        size: 'large',
        status: 'active',
        description: 'Numerical computing with Python',
        license: 'BSD',
        weeklyDownloads: '45M',
        lastUpdated: '3 months ago',
        maintainers: 234,
        level: 0
      },
      {
        name: 'tensorflow',
        version: '2.12.0',
        type: 'direct',
        size: 'large',
        status: 'outdated',
        description: 'Machine learning framework',
        license: 'Apache-2.0',
        weeklyDownloads: '2.1M',
        lastUpdated: '6 months ago',
        maintainers: 2100,
        level: 0,
        children: [
          {
            name: 'protobuf',
            version: '4.23.2',
            type: 'direct',
            size: 'medium',
            status: 'active',
            license: 'BSD',
            weeklyDownloads: '15M',
            lastUpdated: '2 months ago',
            maintainers: 45,
            level: 1
          }
        ]
      }
    ]
  },
  {
    id: 'cli-tool',
    name: 'Developer CLI Tool',
    description: 'Node.js CLI with minimal dependencies',
    version: '3.0.1',
    language: 'JavaScript',
    packageManager: 'npm',
    totalDependencies: 89,
    directDependencies: 8,
    devDependencies: 15,
    vulnerabilities: 0,
    outdatedDependencies: 1,
    lastAnalyzed: '3 hours ago',
    dependencies: [
      {
        name: 'commander',
        version: '10.0.1',
        type: 'direct',
        size: 'small',
        status: 'active',
        description: 'Command-line interface framework',
        license: 'MIT',
        weeklyDownloads: '8.2M',
        lastUpdated: '2 months ago',
        maintainers: 12,
        level: 0
      },
      {
        name: 'chalk',
        version: '5.2.0',
        type: 'direct',
        size: 'micro',
        status: 'active',
        description: 'Terminal string styling',
        license: 'MIT',
        weeklyDownloads: '45M',
        lastUpdated: '8 months ago',
        maintainers: 8,
        level: 0
      },
      {
        name: 'inquirer',
        version: '9.2.7',
        type: 'direct',
        size: 'small',
        status: 'active',
        description: 'Interactive command line prompts',
        license: 'MIT',
        weeklyDownloads: '12M',
        lastUpdated: '1 month ago',
        maintainers: 45,
        level: 0,
        children: [
          {
            name: 'through',
            version: '2.3.8',
            type: 'direct',
            size: 'micro',
            status: 'deprecated',
            license: 'MIT',
            weeklyDownloads: '15M',
            lastUpdated: '8 years ago',
            maintainers: 1,
            level: 1
          }
        ]
      }
    ]
  }
];

const getStatusBadge = (status: DependencyNode['status']) => {
  switch (status) {
    case 'active':
      return <Badge className="bg-brand-success text-white">Active</Badge>;
    case 'deprecated':
      return <Badge className="bg-brand-warning text-white">Deprecated</Badge>;
    case 'security-issue':
      return <Badge className="bg-brand-error text-white">Security Issue</Badge>;
    case 'outdated':
      return <Badge className="bg-brand-neutral-500 text-white">Outdated</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

const getTypeBadge = (type: DependencyNode['type']) => {
  switch (type) {
    case 'direct':
      return <Badge variant="outline" className="text-xs bg-brand-primary/10 text-brand-primary">Direct</Badge>;
    case 'dev':
      return <Badge variant="outline" className="text-xs bg-brand-accent/50">Dev</Badge>;
    case 'peer':
      return <Badge variant="outline" className="text-xs bg-brand-warning/10 text-brand-warning">Peer</Badge>;
    case 'optional':
      return <Badge variant="outline" className="text-xs bg-brand-neutral-200">Optional</Badge>;
    default:
      return <Badge variant="outline" className="text-xs">Unknown</Badge>;
  }
};

const getSizeIcon = (size: DependencyNode['size']) => {
  switch (size) {
    case 'large':
      return <div className="w-3 h-3 bg-brand-primary rounded-full"></div>;
    case 'medium':
      return <div className="w-2.5 h-2.5 bg-brand-accent rounded-full"></div>;
    case 'small':
      return <div className="w-2 h-2 bg-brand-neutral-400 rounded-full"></div>;
    case 'micro':
      return <div className="w-1.5 h-1.5 bg-brand-neutral-300 rounded-full"></div>;
    default:
      return <div className="w-2 h-2 bg-brand-neutral-400 rounded-full"></div>;
  }
};

const getStatusIcon = (status: DependencyNode['status']) => {
  switch (status) {
    case 'active':
      return <CheckCircle size={14} className="text-brand-success" />;
    case 'deprecated':
      return <Clock size={14} className="text-brand-warning" />;
    case 'security-issue':
      return <AlertTriangle size={14} className="text-brand-error" />;
    case 'outdated':
      return <Clock size={14} className="text-brand-neutral-500" />;
    default:
      return <Package size={14} className="text-brand-neutral-400" />;
  }
};

export function DependencyTree({
  title = "Dependency Trees & Analysis",
  description = "Explore project dependencies, identify security issues, and analyze the complete dependency graph for better project management.",
  projects = defaultDependencyProjects,
  variant = 'tree',
  showSearch = true,
  showFilters = true,
  maxDepth = 3,
  className = ""
}: DependencyTreeProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedProject, setSelectedProject] = React.useState<string>(projects[0]?.id || '');
  const [selectedType, setSelectedType] = React.useState<string>('all');
  const [selectedStatus, setSelectedStatus] = React.useState<string>('all');
  const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(new Set());

  const currentProject = projects.find(p => p.id === selectedProject);

  // Filter dependencies
  const filteredDependencies = React.useMemo(() => {
    if (!currentProject) return [];

    const filterNode = (node: DependencyNode): DependencyNode | null => {
      const matchesSearch = !searchTerm || 
        node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || node.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || node.status === selectedStatus;

      if (!matchesSearch || !matchesType || !matchesStatus) {
        return null;
      }

      const filteredChildren = node.children?.map(filterNode).filter(Boolean) || [];
      
      return {
        ...node,
        children: filteredChildren
      };
    };

    return currentProject.dependencies.map(filterNode).filter(Boolean) as DependencyNode[];
  }, [currentProject, searchTerm, selectedType, selectedStatus]);

  const toggleExpanded = (nodeName: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeName)) {
      newExpanded.delete(nodeName);
    } else {
      newExpanded.add(nodeName);
    }
    setExpandedNodes(newExpanded);
  };

  const renderDependencyNode = (node: DependencyNode, depth: number = 0) => {
    const isExpanded = expandedNodes.has(node.name);
    const hasChildren = node.children && node.children.length > 0;
    const indent = depth * 24;

    return (
      <div key={node.name} className="space-y-2">
        <div 
          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-brand-neutral-50/50 transition-colors group"
          style={{ marginLeft: `${indent}px` }}
        >
          {/* Expand/Collapse Button */}
          {hasChildren ? (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => toggleExpanded(node.name)}
            >
              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </Button>
          ) : (
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowRight size={12} className="text-muted-foreground" />
            </div>
          )}

          {/* Status Icon */}
          <div className="flex items-center justify-center w-6 h-6">
            {getStatusIcon(node.status)}
          </div>

          {/* Package Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium font-mono text-sm">{node.name}</span>
              <span className="text-xs text-muted-foreground">v{node.version}</span>
              {getTypeBadge(node.type)}
              {getSizeIcon(node.size)}
            </div>
            {node.description && (
              <p className="text-xs text-muted-foreground line-clamp-1">
                {node.description}
              </p>
            )}
          </div>

          {/* Package Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {node.weeklyDownloads && (
              <span className="flex items-center gap-1">
                <Download size={10} />
                {node.weeklyDownloads}
              </span>
            )}
            <span>{node.license}</span>
            {node.vulnerabilities && node.vulnerabilities > 0 && (
              <span className="flex items-center gap-1 text-brand-error">
                <AlertTriangle size={10} />
                {node.vulnerabilities}
              </span>
            )}
          </div>

          {/* Status Badge */}
          {getStatusBadge(node.status)}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && depth < maxDepth && (
          <div className="space-y-2">
            {node.children!.map(child => renderDependencyNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const renderTreeVariant = () => (
    <div className="space-y-4">
      {filteredDependencies.map(node => renderDependencyNode(node))}
    </div>
  );

  const renderFlatVariant = () => {
    // Flatten the tree
    const flattenedDeps: DependencyNode[] = [];
    
    const flatten = (node: DependencyNode) => {
      flattenedDeps.push(node);
      if (node.children) {
        node.children.forEach(flatten);
      }
    };
    
    filteredDependencies.forEach(flatten);

    return (
      <div className="space-y-2">
        {flattenedDeps.map((node, index) => (
          <div key={`${node.name}-${index}`} className="flex items-center justify-between p-3 border rounded-lg hover:bg-brand-neutral-50/50 transition-colors">
            <div className="flex items-center gap-3">
              {getStatusIcon(node.status)}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium font-mono text-sm">{node.name}</span>
                  <span className="text-xs text-muted-foreground">v{node.version}</span>
                  {getTypeBadge(node.type)}
                  {getSizeIcon(node.size)}
                </div>
                {node.description && (
                  <p className="text-xs text-muted-foreground">{node.description}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground">
                {node.weeklyDownloads && `${node.weeklyDownloads} weekly`}
              </div>
              {getStatusBadge(node.status)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAnalysisVariant = () => {
    if (!currentProject) return null;

    const stats = {
      totalDeps: currentProject.totalDependencies,
      directDeps: currentProject.directDependencies,
      devDeps: currentProject.devDependencies,
      vulnerabilities: currentProject.vulnerabilities,
      outdated: currentProject.outdatedDependencies
    };

    return (
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="font-medium">{stats.totalDeps}</div>
              <div className="text-xs text-muted-foreground">Total Dependencies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="font-medium">{stats.directDeps}</div>
              <div className="text-xs text-muted-foreground">Direct</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="font-medium">{stats.devDeps}</div>
              <div className="text-xs text-muted-foreground">Dev Dependencies</div>
            </CardContent>
          </Card>
          <Card className={stats.vulnerabilities > 0 ? "border-brand-error" : ""}>
            <CardContent className="p-4 text-center">
              <div className={`font-medium ${stats.vulnerabilities > 0 ? 'text-brand-error' : ''}`}>
                {stats.vulnerabilities}
              </div>
              <div className="text-xs text-muted-foreground">Vulnerabilities</div>
            </CardContent>
          </Card>
          <Card className={stats.outdated > 0 ? "border-brand-warning" : ""}>
            <CardContent className="p-4 text-center">
              <div className={`font-medium ${stats.outdated > 0 ? 'text-brand-warning' : ''}`}>
                {stats.outdated}
              </div>
              <div className="text-xs text-muted-foreground">Outdated</div>
            </CardContent>
          </Card>
        </div>

        {/* Issue Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Issues */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-brand-error" />
                Security Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredDependencies.filter(dep => dep.vulnerabilities && dep.vulnerabilities > 0).length === 0 ? (
                <div className="text-center py-4 text-muted-foreground">
                  <CheckCircle size={24} className="mx-auto mb-2 text-brand-success" />
                  No security vulnerabilities detected
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredDependencies
                    .filter(dep => dep.vulnerabilities && dep.vulnerabilities > 0)
                    .map(dep => (
                      <div key={dep.name} className="flex items-center justify-between p-3 border rounded-lg border-brand-error/20">
                        <div>
                          <div className="font-medium text-sm">{dep.name}</div>
                          <div className="text-xs text-muted-foreground">v{dep.version}</div>
                        </div>
                        <Badge className="bg-brand-error text-white">
                          {dep.vulnerabilities} {dep.vulnerabilities === 1 ? 'issue' : 'issues'}
                        </Badge>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Outdated Dependencies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock size={16} className="text-brand-warning" />
                Outdated Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              {filteredDependencies.filter(dep => dep.status === 'outdated').length === 0 ? (
                <div className="text-center py-4 text-muted-foreground">
                  <CheckCircle size={24} className="mx-auto mb-2 text-brand-success" />
                  All dependencies are up to date
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredDependencies
                    .filter(dep => dep.status === 'outdated')
                    .map(dep => (
                      <div key={dep.name} className="flex items-center justify-between p-3 border rounded-lg border-brand-warning/20">
                        <div>
                          <div className="font-medium text-sm">{dep.name}</div>
                          <div className="text-xs text-muted-foreground">Current: v{dep.version}</div>
                        </div>
                        <Badge className="bg-brand-warning text-white">Update Available</Badge>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Dependency Tree */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch size={16} className="text-brand-primary" />
              Dependency Tree
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderTreeVariant()}
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderSecurityVariant = () => {
    if (!currentProject) return null;

    const securityIssues = filteredDependencies.filter(dep => 
      dep.status === 'security-issue' || (dep.vulnerabilities && dep.vulnerabilities > 0)
    );

    return (
      <div className="space-y-6">
        {/* Security Overview */}
        <Card className={currentProject.vulnerabilities > 0 ? "border-brand-error" : "border-brand-success"}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {currentProject.vulnerabilities > 0 ? (
                <AlertTriangle size={16} className="text-brand-error" />
              ) : (
                <CheckCircle size={16} className="text-brand-success" />
              )}
              Security Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className={`font-medium text-2xl ${currentProject.vulnerabilities > 0 ? 'text-brand-error' : 'text-brand-success'}`}>
                  {currentProject.vulnerabilities}
                </div>
                <div className="text-sm text-muted-foreground">Known Vulnerabilities</div>
              </div>
              <div>
                <div className="font-medium text-2xl">{securityIssues.length}</div>
                <div className="text-sm text-muted-foreground">Affected Packages</div>
              </div>
              <div>
                <div className="font-medium text-2xl text-brand-neutral-600">
                  {Math.round((securityIssues.length / currentProject.totalDependencies) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Risk Coverage</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Issues List */}
        {securityIssues.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-error">Critical Security Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityIssues.map(dep => (
                  <div key={dep.name} className="p-4 border rounded-lg border-brand-error/20 bg-brand-error/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-medium">{dep.name} v{dep.version}</div>
                        <div className="text-sm text-muted-foreground">{dep.description}</div>
                      </div>
                      <Badge className="bg-brand-error text-white">
                        {dep.vulnerabilities || 1} {(dep.vulnerabilities || 1) === 1 ? 'vulnerability' : 'vulnerabilities'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Last updated: {dep.lastUpdated} • {dep.maintainers} maintainers
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="text-center py-8">
              <CheckCircle size={48} className="mx-auto mb-4 text-brand-success" />
              <h3 className="font-medium mb-2">No Security Issues Detected</h3>
              <p className="text-sm text-muted-foreground">
                All dependencies have been scanned and no known vulnerabilities were found.
              </p>
            </CardContent>
          </Card>
        )}
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

      {/* Project Selector and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={selectedProject} onValueChange={setSelectedProject}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                {project.name} ({project.totalDependencies} deps)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {showSearch && (
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search dependencies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {showFilters && (
          <div className="flex gap-2">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="direct">Direct</SelectItem>
                <SelectItem value="dev">Dev</SelectItem>
                <SelectItem value="peer">Peer</SelectItem>
                <SelectItem value="optional">Optional</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="outdated">Outdated</SelectItem>
                <SelectItem value="deprecated">Deprecated</SelectItem>
                <SelectItem value="security-issue">Security Issues</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {/* Project Info */}
      {currentProject && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{currentProject.name} v{currentProject.version}</h3>
                <p className="text-sm text-muted-foreground">{currentProject.description}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{currentProject.packageManager.toUpperCase()}</span>
                <span>•</span>
                <span>Last analyzed: {currentProject.lastAnalyzed}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dependency Content */}
      {variant === 'tree' && renderTreeVariant()}
      {variant === 'flat' && renderFlatVariant()}
      {variant === 'analysis' && renderAnalysisVariant()}
      {variant === 'security' && renderSecurityVariant()}
    </div>
  );
}