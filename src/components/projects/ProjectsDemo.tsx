import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ProjectsShowcase } from './ProjectsShowcase';
import { ProjectsMinimal } from './ProjectsMinimal';
import { DependencyTree } from './DependencyTree';
import { SectionLayout } from '../layout/SectionLayout';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { 
  Grid3X3, 
  List, 
  Star, 
  BarChart3, 
  Layers, 
  Minimize2,
  Layout,
  Filter,
  Search,
  TrendingUp,
  GitBranch,
  Shield
} from 'lucide-react';

interface ProjectsDemoProps {
  className?: string;
}

// Original showcase variants
const showcaseVariants = [
  {
    id: 'grid',
    name: 'Grid Layout',
    description: 'Classic card grid showing detailed project information',
    icon: Grid3X3,
    features: ['Project cards', 'Status badges', 'GitHub stats', 'Technology tags', 'Quick actions']
  },
  {
    id: 'list',
    name: 'List Layout',
    description: 'Compact horizontal list format for browsing many projects',
    icon: List,
    features: ['Horizontal layout', 'Condensed information', 'Quick scanning', 'Action buttons']
  },
  {
    id: 'featured',
    name: 'Featured Layout',
    description: 'Highlights featured projects with detailed stats and descriptions',
    icon: Star,
    features: ['Featured section', 'Enhanced project details', 'Download metrics', 'Priority display']
  },
  {
    id: 'compact',
    name: 'Compact Layout',
    description: 'Minimal cards perfect for displaying many projects at once',
    icon: Minimize2,
    features: ['Space efficient', 'Logo focused', 'Essential stats only', 'Clean design']
  },
  {
    id: 'stats',
    name: 'Stats Layout',
    description: 'Data-heavy layout focusing on project metrics and analytics',
    icon: BarChart3,
    features: ['Detailed statistics', 'Download metrics', 'Maintainer info', 'Performance data']
  },
  {
    id: 'category',
    name: 'Category Layout',
    description: 'Projects organized by technology category for easy navigation',
    icon: Layers,
    features: ['Category grouping', 'Organized display', 'Technology focus', 'Easy browsing']
  },
  {
    id: 'minimal',
    name: 'Minimal Layout',
    description: 'Ultra-compact display showing only essential project information',
    icon: Minimize2,
    features: ['Minimal information', 'Maximum density', 'Quick overview', 'Essential data only']
  }
] as const;



// Dependency tree variants
const dependencyVariants = [
  {
    id: 'tree',
    name: 'Tree View',
    description: 'Interactive hierarchical dependency tree',
    icon: GitBranch,
    features: ['Tree structure', 'Expandable nodes', 'Hierarchy display', 'Depth control']
  },
  {
    id: 'flat',
    name: 'Flat List',
    description: 'Flattened list of all dependencies',
    icon: List,
    features: ['Flat structure', 'All dependencies', 'Search & filter', 'Status indicators']
  },
  {
    id: 'analysis',
    name: 'Analysis View',
    description: 'Comprehensive dependency analysis with issues',
    icon: BarChart3,
    features: ['Dependency stats', 'Issue detection', 'Outdated packages', 'Security overview']
  },
  {
    id: 'security',
    name: 'Security Focus',
    description: 'Security-focused dependency analysis',
    icon: Shield,
    features: ['Vulnerability detection', 'Security issues', 'Risk assessment', 'Critical alerts']
  }
] as const;

export function ProjectsDemo({ className = "" }: ProjectsDemoProps) {
  const [showcaseVariant, setShowcaseVariant] = React.useState<string>('grid');
  const [dependencyVariant, setDependencyVariant] = React.useState<string>('tree');

  const renderVariantSelector = (variants: readonly any[], selectedVariant: string, onSelect: (id: string) => void, title: string, description: string) => (
    <ShowcaseCard 
      title={title}
      description={description}
    >
      {/* Variant Selection Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {variants.map((variant) => {
          const IconComponent = variant.icon;
          return (
            <Button
              key={variant.id}
              variant={selectedVariant === variant.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onSelect(variant.id)}
              className="flex items-center gap-2"
            >
              <IconComponent size={14} />
              {variant.name}
            </Button>
          );
        })}
      </div>

      {/* Current Selection Info */}
      <div className="bg-brand-primary/5 rounded-lg p-4 border border-brand-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-brand-primary rounded-md flex items-center justify-center">
            {React.createElement(variants.find(v => v.id === selectedVariant)?.icon || Layout, { size: 12, color: 'white' })}
          </div>
          <h4 className="font-medium">
            {variants.find(v => v.id === selectedVariant)?.name} - Currently Selected
          </h4>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          {variants.find(v => v.id === selectedVariant)?.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {variants.find(v => v.id === selectedVariant)?.features.map((feature: string, index: number) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </ShowcaseCard>
  );

  return (
    <div className={`space-y-8 ${className}`}>
      <SectionLayout 
        title="Projects Showcase Variations"
        description="Comprehensive project display components supporting everything from large frameworks to micro-utilities, with complete dependency tree analysis and technology stack visualization."
      >
        <Tabs defaultValue="showcase" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="showcase" className="flex items-center gap-2">
              <Grid3X3 size={16} />
              Project Showcase
            </TabsTrigger>
            <TabsTrigger value="dependencies" className="flex items-center gap-2">
              <GitBranch size={16} />
              Dependency Analysis
            </TabsTrigger>
          </TabsList>

          {/* Original Projects Showcase */}
          <TabsContent value="showcase" className="space-y-6 mt-6">
            {renderVariantSelector(
              showcaseVariants,
              showcaseVariant,
              setShowcaseVariant,
              "Project Showcase Layouts",
              "Rich showcase layouts for highlighting projects with detailed information"
            )}

            <Separator />

            {/* Live Demo */}
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Live Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive preview of the {showcaseVariants.find(v => v.id === showcaseVariant)?.name.toLowerCase()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Search size={12} />
                    Search Enabled
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Filter size={12} />
                    Filters Enabled
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <TrendingUp size={12} />
                    Stats Enabled
                  </Badge>
                </div>
              </div>

              {showcaseVariant === 'minimal' ? (
                <ProjectsMinimal
                  variant="grid"
                  maxProjects={24}
                />
              ) : (
                <ProjectsShowcase
                  variant={showcaseVariant as any}
                  showSearch={true}
                  showFilters={true}
                  showStats={true}
                  maxProjects={showcaseVariant === 'compact' ? undefined : 9}
                />
              )}
            </div>
          </TabsContent>



          {/* Dependency Trees */}
          <TabsContent value="dependencies" className="space-y-6 mt-6">
            {renderVariantSelector(
              dependencyVariants,
              dependencyVariant,
              setDependencyVariant,
              "Dependency Analysis Layouts",
              "Comprehensive dependency tree analysis with security and issue detection"
            )}

            <Separator />

            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-medium mb-1">Dependency Analysis Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    {dependencyVariants.find(v => v.id === dependencyVariant)?.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <GitBranch size={12} />
                    Tree Structure
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Shield size={12} />
                    Security Analysis
                  </Badge>
                </div>
              </div>

              <DependencyTree
                variant={dependencyVariant as any}
                showSearch={true}
                showFilters={true}
                maxDepth={3}
              />
            </div>
          </TabsContent>
        </Tabs>


      </SectionLayout>
    </div>
  );
}