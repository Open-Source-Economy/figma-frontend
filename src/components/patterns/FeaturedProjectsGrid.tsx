import React from 'react';
import { ExternalLink, Users, Star, GitBranch } from 'lucide-react';
import { Button } from '../ui/button';

interface FeaturedProject {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  maintainers: number;
  stars: string;
  weeklyDownloads: string;
  languages: string[];
  connectUrl?: string;
}

interface FeaturedProjectsGridProps {
  className?: string;
  onConnectClick?: (projectId: string) => void;
}

export function FeaturedProjectsGrid({ className = '', onConnectClick }: FeaturedProjectsGridProps) {
  const featuredProjects: FeaturedProject[] = [
    {
      id: 'nextjs',
      name: 'Next.js',
      description: 'The React framework for production-grade applications with server-side rendering and static generation.',
      category: 'Web Framework',
      logo: '⚡',
      maintainers: 2000,
      stars: '118k',
      weeklyDownloads: '5.2M',
      languages: ['JavaScript', 'TypeScript', 'CSS']
    },
    {
      id: 'django',
      name: 'Django',
      description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
      category: 'Web Framework',
      logo: '🎯',
      maintainers: 2400,
      stars: '75k',
      weeklyDownloads: '2.8M',
      languages: ['Python', 'HTML', 'CSS']
    },
    {
      id: 'log4j',
      name: 'Apache Log4j',
      description: 'Fast, flexible, and reliable logging framework for Java applications used worldwide.',
      category: 'Logging',
      logo: '📝',
      maintainers: 45,
      stars: '3.3k',
      weeklyDownloads: '15M',
      languages: ['Java', 'XML']
    },
    {
      id: 'redis',
      name: 'Redis',
      description: 'Open source in-memory data structure store used as database, cache, and message broker.',
      category: 'Database',
      logo: '🔴',
      maintainers: 450,
      stars: '64k',
      weeklyDownloads: '8.5M',
      languages: ['C', 'Tcl', 'C++']
    },
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      description: 'Open source machine learning framework for everyone, from researchers to production deployments.',
      category: 'Machine Learning',
      logo: '🧠',
      maintainers: 3200,
      stars: '182k',
      weeklyDownloads: '4.1M',
      languages: ['Python', 'C++', 'CUDA']
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      description: 'Container orchestration system for automating deployment, scaling, and management of applications.',
      category: 'DevOps',
      logo: '⚙️',
      maintainers: 3800,
      stars: '106k',
      weeklyDownloads: '1.9M',
      languages: ['Go', 'Shell', 'Python']
    }
  ];

  const handleConnectClick = (projectId: string) => {
    if (onConnectClick) {
      onConnectClick(projectId);
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-neutral-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-brand-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Connect with the maintainers behind the most critical open source projects that power modern software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-2xl p-6 border border-brand-neutral-300/50 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-neutral-200 to-brand-neutral-300 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {project.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-neutral-900 group-hover:text-brand-accent transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="text-sm text-brand-neutral-600">{project.category}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-brand-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Description */}
              <p className="text-sm text-brand-neutral-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="w-3 h-3 text-brand-neutral-500" />
                    <span className="text-xs font-medium text-brand-neutral-900">{project.maintainers}</span>
                  </div>
                  <div className="text-xs text-brand-neutral-600">Maintainers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-3 h-3 text-brand-neutral-500" />
                    <span className="text-xs font-medium text-brand-neutral-900">{project.stars}</span>
                  </div>
                  <div className="text-xs text-brand-neutral-600">Stars</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <GitBranch className="w-3 h-3 text-brand-neutral-500" />
                    <span className="text-xs font-medium text-brand-neutral-900">{project.weeklyDownloads}</span>
                  </div>
                  <div className="text-xs text-brand-neutral-600">Weekly DL</div>
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.languages.map((language) => (
                  <span 
                    key={language}
                    className="px-2 py-1 bg-brand-neutral-200/50 text-xs text-brand-neutral-700 rounded-md border border-brand-neutral-300/30"
                  >
                    {language}
                  </span>
                ))}
              </div>

              {/* Connect Button */}
              <Button 
                onClick={() => handleConnectClick(project.id)}
                className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white group-hover:shadow-md transition-all duration-300"
                size="sm"
              >
                Connect with Maintainers
              </Button>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-brand-neutral-400 text-brand-neutral-800 hover:bg-brand-neutral-200"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}