import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { Table, TableBody, TableCell as BaseTableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { TableActions } from '../tables/TableActions';
import { TableCell } from '../tables/TableCell';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { 
  Github, 
  Globe, 
  Star, 
  GitBranch, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Download,
  ExternalLink,
  Calendar,
  Folder,
  Code,
  Database,
  Shield
} from 'lucide-react';
import { cn } from '../ui/utils';

// Mock data for different table examples
const repositoryData = [
  {
    id: 1,
    name: 'react-components',
    description: 'Modern React component library with TypeScript support',
    language: 'TypeScript',
    stars: 2847,
    forks: 342,
    status: 'active',
    lastCommit: '2 hours ago',
    private: false
  },
  {
    id: 2,
    name: 'design-system',
    description: 'Comprehensive design system for open source projects',
    language: 'CSS',
    stars: 1203,
    forks: 89,
    status: 'active',
    lastCommit: '1 day ago',
    private: false
  },
  {
    id: 3,
    name: 'api-gateway',
    description: 'Scalable API gateway with authentication and rate limiting',
    language: 'Go',
    stars: 892,
    forks: 156,
    status: 'maintenance',
    lastCommit: '5 days ago',
    private: true
  },
  {
    id: 4,
    name: 'mobile-app',
    description: 'Cross-platform mobile application built with React Native',
    language: 'JavaScript',
    stars: 456,
    forks: 78,
    status: 'deprecated',
    lastCommit: '2 months ago',
    private: false
  }
];

const teamData = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    role: 'Lead Developer',
    department: 'Engineering',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    email: 'marcus.j@example.com',
    role: 'UI/UX Designer',
    department: 'Design',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    email: 'elena.r@example.com',
    role: 'Product Manager',
    department: 'Product',
    status: 'away',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david.kim@example.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    status: 'inactive',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
  }
];

const projectData = [
  {
    id: 1,
    name: 'E-commerce Platform',
    client: 'Tech Corp',
    progress: 85,
    budget: '$125,000',
    deadline: '2024-02-15',
    status: 'on-track',
    team: 8
  },
  {
    id: 2,
    name: 'Mobile Banking App',
    client: 'Finance Inc',
    progress: 60,
    budget: '$89,000',
    deadline: '2024-03-20',
    status: 'at-risk',
    team: 6
  },
  {
    id: 3,
    name: 'Healthcare Dashboard',
    client: 'MedTech Solutions',
    progress: 95,
    budget: '$156,000',
    deadline: '2024-01-30',
    status: 'completed',
    team: 12
  },
  {
    id: 4,
    name: 'Education Portal',
    client: 'EduNext',
    progress: 25,
    budget: '$67,000',
    deadline: '2024-04-10',
    status: 'delayed',
    team: 4
  }
];

function getStatusIcon(status: string) {
  switch (status) {
    case 'active':
    case 'on-track':
    case 'completed':
      return { icon: CheckCircle, color: 'text-brand-success' };
    case 'at-risk':
    case 'away':
      return { icon: AlertTriangle, color: 'text-brand-warning' };
    case 'maintenance':
      return { icon: Clock, color: 'text-brand-secondary' };
    case 'deprecated':
    case 'inactive':
    case 'delayed':
      return { icon: XCircle, color: 'text-brand-error' };
    default:
      return { icon: Clock, color: 'text-muted-foreground' };
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case 'active':
    case 'on-track':
      return { text: status, variant: 'default' as const };
    case 'completed':
      return { text: status, variant: 'default' as const };
    case 'at-risk':
    case 'away':
      return { text: status, variant: 'outline' as const };
    case 'maintenance':
      return { text: status, variant: 'secondary' as const };
    case 'deprecated':
    case 'inactive':
    case 'delayed':
      return { text: status, variant: 'destructive' as const };
    default:
      return { text: status, variant: 'secondary' as const };
  }
}

function getLanguageColor(language: string) {
  const colors: Record<string, string> = {
    TypeScript: 'text-blue-600',
    JavaScript: 'text-yellow-600',
    CSS: 'text-pink-600',
    Go: 'text-cyan-600',
    Python: 'text-green-600',
    Rust: 'text-orange-600'
  };
  return colors[language] || 'text-muted-foreground';
}

export function TableShowcase() {
  const handleEdit = (id: number, type: string) => {
    console.log(`Edit ${type} with ID:`, id);
  };

  const handleDelete = (id: number, type: string) => {
    console.log(`Delete ${type} with ID:`, id);
  };

  return (
    <div className="space-y-8">
      {/* Basic Table */}
      <ShowcaseCard
        title="Basic Table"
        description="Simple table with action buttons and status indicators"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Repository</TableHead>
              <TableHead>Language</TableHead>
              <TableHead className="text-center">Stars</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {repositoryData.map((repo) => {
              const statusConfig = getStatusIcon(repo.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <TableRow key={repo.id}>
                  <TableCell icon={Github} iconColor="text-foreground">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{repo.name}</span>
                        {repo.private && <Shield className="h-3 w-3 text-muted-foreground" />}
                      </div>
                      <div className="text-sm text-muted-foreground">{repo.description}</div>
                    </div>
                  </TableCell>
                  <BaseTableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn("w-3 h-3 rounded-full", getLanguageColor(repo.language).replace('text-', 'bg-'))} />
                      <span>{repo.language}</span>
                    </div>
                  </BaseTableCell>
                  <TableCell align="center">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{repo.stars.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell align="center" icon={StatusIcon} iconColor={statusConfig.color}>
                    {repo.status}
                  </TableCell>
                  <BaseTableCell className="text-right">
                    <TableActions
                      onEdit={() => handleEdit(repo.id, 'repository')}
                      onDelete={() => handleDelete(repo.id, 'repository')}
                    />
                  </BaseTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ShowcaseCard>

      {/* Advanced Table with Selection */}
      <ShowcaseCard
        title="Advanced Table"
        description="Table with selection, avatars, badges, and dropdown actions"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Team Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamData.map((member) => {
              const statusBadge = getStatusBadge(member.status);
              
              return (
                <TableRow key={member.id}>
                  <BaseTableCell>
                    <Checkbox />
                  </BaseTableCell>
                  <BaseTableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.email}</div>
                      </div>
                    </div>
                  </BaseTableCell>
                  <BaseTableCell>{member.role}</BaseTableCell>
                  <TableCell icon={Folder} iconColor="text-brand-secondary">
                    {member.department}
                  </TableCell>
                  <TableCell align="center" badge={statusBadge} />
                  <BaseTableCell className="text-right">
                    <TableActions
                      variant="dropdown"
                      onEdit={() => handleEdit(member.id, 'member')}
                      onDelete={() => handleDelete(member.id, 'member')}
                    />
                  </BaseTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ShowcaseCard>

      {/* Project Table with Progress */}
      <ShowcaseCard
        title="Project Management Table"
        description="Complex table with progress bars, dates, and financial data"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead className="text-center">Team</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectData.map((project) => {
              const statusConfig = getStatusIcon(project.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <TableRow key={project.id}>
                  <TableCell icon={Code} iconColor="text-brand-primary">
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.client}</div>
                    </div>
                  </TableCell>
                  <BaseTableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full transition-all duration-300",
                            project.progress >= 90 ? "bg-brand-success" :
                            project.progress >= 70 ? "bg-brand-primary" :
                            project.progress >= 50 ? "bg-brand-warning" :
                            "bg-brand-error"
                          )}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </BaseTableCell>
                  <BaseTableCell className="font-medium">{project.budget}</BaseTableCell>
                  <TableCell icon={Calendar} iconColor="text-muted-foreground">
                    {new Date(project.deadline).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center" icon={Users} iconColor="text-brand-secondary">
                    {project.team}
                  </TableCell>
                  <TableCell align="center" icon={StatusIcon} iconColor={statusConfig.color}>
                    {project.status}
                  </TableCell>
                  <BaseTableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <TableActions
                        onEdit={() => handleEdit(project.id, 'project')}
                        onDelete={() => handleDelete(project.id, 'project')}
                      />
                    </div>
                  </BaseTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ShowcaseCard>

      {/* Compact Table Variants */}
      <ShowcaseGrid columns={2}>
        <ShowcaseCard
          title="Compact Table"
          description="Dense table layout for data-heavy interfaces"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="h-8">Resource</TableHead>
                <TableHead className="h-8 text-center">Type</TableHead>
                <TableHead className="h-8 text-right">Size</TableHead>
                <TableHead className="h-8 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell icon={Database} iconColor="text-brand-secondary">
                  database.sql
                </TableCell>
                <BaseTableCell className="text-center">
                  <Badge variant="outline" className="text-xs">SQL</Badge>
                </BaseTableCell>
                <BaseTableCell className="text-right text-sm">2.3 MB</BaseTableCell>
                <BaseTableCell className="text-right">
                  <TableActions size="sm" />
                </BaseTableCell>
              </TableRow>
              <TableRow>
                <TableCell icon={Code} iconColor="text-brand-accent">
                  app.tsx
                </TableCell>
                <BaseTableCell className="text-center">
                  <Badge variant="outline" className="text-xs">TSX</Badge>
                </BaseTableCell>
                <BaseTableCell className="text-right text-sm">45 KB</BaseTableCell>
                <BaseTableCell className="text-right">
                  <TableActions size="sm" />
                </BaseTableCell>
              </TableRow>
              <TableRow>
                <TableCell icon={Globe} iconColor="text-brand-primary">
                  index.html
                </TableCell>
                <BaseTableCell className="text-center">
                  <Badge variant="outline" className="text-xs">HTML</Badge>
                </BaseTableCell>
                <BaseTableCell className="text-right text-sm">12 KB</BaseTableCell>
                <BaseTableCell className="text-right">
                  <TableActions size="sm" />
                </BaseTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ShowcaseCard>

        <ShowcaseCard
          title="Minimal Table"
          description="Clean table design with minimal styling"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-b-brand-neutral-200">
                <TableHead>Service</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-brand-neutral-100">
                <TableCell icon={Database}>
                  PostgreSQL
                </TableCell>
                <BaseTableCell className="text-right">
                  <Badge className="bg-brand-success text-white">Active</Badge>
                </BaseTableCell>
              </TableRow>
              <TableRow className="border-b-brand-neutral-100">
                <TableCell icon={Globe}>
                  Redis Cache
                </TableCell>
                <BaseTableCell className="text-right">
                  <Badge className="bg-brand-success text-white">Active</Badge>
                </BaseTableCell>
              </TableRow>
              <TableRow className="border-b-brand-neutral-100">
                <TableCell icon={Code}>
                  API Gateway
                </TableCell>
                <BaseTableCell className="text-right">
                  <Badge variant="destructive">Down</Badge>
                </BaseTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ShowcaseCard>
      </ShowcaseGrid>
    </div>
  );
}