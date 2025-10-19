import React from 'react';
import { Badge } from '../ui/badge';

interface LogoCloudProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function LogoCloud({ title, subtitle, className = "" }: LogoCloudProps) {
  // Popular open source projects
  const projects = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Webpack', category: 'Build Tool' },
    { name: 'ESLint', category: 'Linting' },
    { name: 'Jest', category: 'Testing' },
  ];

  // Technology stack badges
  const techStack = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'Java', color: 'bg-orange-500' },
    { name: 'Go', color: 'bg-cyan-500' },
    { name: 'Rust', color: 'bg-orange-600' },
    { name: 'PHP', color: 'bg-purple-500' },
  ];

  return (
    <div className={`relative ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h3 className="mb-3 text-brand-primary">{title}</h3>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          )}
        </div>
      )}

      <div className="space-y-8">
        {/* Open Source Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`
                group relative p-4 rounded-xl border border-border/50 
                bg-card/50 hover:bg-card hover:border-brand-primary/30 
                transition-all duration-300 hover:scale-105
                ${index % 2 === 0 ? 'animate-pulse' : ''}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '2s'
              }}
            >
              <div className="text-center space-y-2">
                {/* Mock logo placeholder */}
                <div className={`
                  w-8 h-8 mx-auto rounded-lg flex items-center justify-center
                  ${project.name === 'React' ? 'bg-blue-400' :
                    project.name === 'Node.js' ? 'bg-green-500' :
                    project.name === 'TypeScript' ? 'bg-blue-600' :
                    project.name === 'Next.js' ? 'bg-black dark:bg-white' :
                    project.name === 'Express.js' ? 'bg-gray-600' :
                    project.name === 'PostgreSQL' ? 'bg-blue-700' :
                    project.name === 'Redis' ? 'bg-red-500' :
                    project.name === 'Docker' ? 'bg-blue-500' :
                    project.name === 'Kubernetes' ? 'bg-blue-600' :
                    project.name === 'Webpack' ? 'bg-blue-400' :
                    project.name === 'ESLint' ? 'bg-purple-600' :
                    'bg-green-500'
                  }
                `}>
                  <span className="text-white text-xs font-bold">
                    {project.name.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {project.name}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="text-xs mt-1 bg-muted text-muted-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/5 group-hover:to-brand-accent/5 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Technology Stack Row */}
        <div className="space-y-3">
          <div className="text-center">
            <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/20">
              Supported Languages
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech.name}
                className={`
                  ${tech.color} text-white border-0 hover:scale-105 
                  transition-transform duration-200 cursor-default
                `}
                style={{
                  animationDelay: `${(projects.length + index) * 0.1}s`
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="text-center pt-4 border-t border-border/30">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse" />
              <span>500+ Projects Supported</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}