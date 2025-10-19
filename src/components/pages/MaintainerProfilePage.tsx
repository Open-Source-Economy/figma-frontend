import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Badge } from '../ui/badge';
import { 
  MapPin, 
  Clock, 
  Github, 
  Twitter, 
  Linkedin,
  Mail,
  Code2,
  TrendingUp,
  Calendar,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Headphones,
  CodeIcon,
  Lightbulb,
  Shield,
  PieChart,
  ArrowRight
} from 'lucide-react';
import { 
  MaintainerProfile, 
  getRoleColor, 
  getContributionLevel,
  getAvailabilityColor,
  calculatePricing
} from '../../data/maintainerProfileData';

interface MaintainerProfilePageProps {
  profile: MaintainerProfile;
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
  onViewProject?: (slug: string) => void;
}

const categoryIcons = {
  support: Headphones,
  development: CodeIcon,
  advisory: Lightbulb,
  security_and_compliance: Shield
};

const categoryLabels = {
  support: 'Support',
  development: 'Development',
  advisory: 'Advisory',
  security_and_compliance: 'Security & Compliance'
};

export function MaintainerProfilePage({ 
  profile, 
  onNavigateHome, 
  onNavItemClick,
  onViewProject 
}: MaintainerProfilePageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredServices = selectedCategory
    ? profile.services.filter(s => s.category === selectedCategory)
    : profile.services;

  const averageRate = Math.round(
    profile.services.reduce((sum, s) => sum + s.baseRate, 0) / profile.services.length
  );

  return (
    <div className="min-h-screen bg-brand-secondary">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started"
        onCtaClick={() => onNavItemClick('get-started')}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-secondary via-brand-neutral-100 to-brand-accent/10 py-10 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-brand-accent/30">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                <div>
                  <h1 className="text-brand-neutral-950 mb-1">
                    {profile.name}
                  </h1>
                  <p className="text-brand-neutral-600 mb-3">
                    {profile.title}
                  </p>
                </div>
                <Badge className="bg-brand-success/20 text-brand-success border-brand-success/30">
                  Available for Work
                </Badge>
              </div>

              <p className="text-brand-neutral-700 mb-4">
                {profile.bio}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-brand-neutral-600">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-600">
                  <Clock className="h-4 w-4" />
                  <span>{profile.timezone}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-600">
                  <Calendar className="h-4 w-4" />
                  <span>{profile.yearsInOpenSource} years in open source</span>
                </div>
                <div className="flex items-center gap-2 text-brand-neutral-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>{profile.totalContributions.toLocaleString()} contributions</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-2">
                <a 
                  href={`mailto:${profile.contact.email}`}
                  className="px-3 py-1.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
                <a 
                  href={`https://github.com/${profile.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {profile.contact.twitter && (
                  <a 
                    href={`https://twitter.com/${profile.contact.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
                {profile.contact.linkedin && (
                  <a 
                    href={`https://linkedin.com/in/${profile.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Languages */}
      <section className="bg-brand-secondary py-6 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-brand-neutral-900 mb-3">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline"
                    className="bg-brand-accent/10 text-brand-accent border-brand-accent/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-brand-neutral-900 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((lang, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline"
                    className="bg-brand-highlight/10 text-brand-highlight border-brand-highlight/30"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-10 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-6">
            <h2 className="text-brand-neutral-950 mb-2">Contributing Projects</h2>
            <p className="text-brand-neutral-600">
              Open source projects where {profile.name.split(' ')[0]} is actively involved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {profile.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-4 hover:border-brand-accent/50 transition-all cursor-pointer group"
                onClick={() => onViewProject?.(project.projectSlug)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-brand-neutral-900">{project.projectName}</h4>
                      <ArrowRight className="h-4 w-4 text-brand-neutral-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-brand-neutral-600 mb-2">{project.role}</p>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <Badge 
                      variant="outline"
                      className={`bg-brand-${getRoleColor(project.roleType)}/10 text-brand-${getRoleColor(project.roleType)} border-brand-${getRoleColor(project.roleType)}/30`}
                    >
                      {getContributionLevel(project.contributionLevel)}
                    </Badge>
                    <span className="text-brand-neutral-500 text-xs">
                      {project.yearsActive} {project.yearsActive === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                </div>
                <p className="text-brand-neutral-600 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-10 border-b border-brand-neutral-300">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-6">
            <h2 className="text-brand-neutral-950 mb-2">Available Services</h2>
            <p className="text-brand-neutral-600">
              Professional services with transparent pricing that supports the open source ecosystem
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === null
                  ? 'bg-brand-accent border-brand-accent text-white'
                  : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
              }`}
            >
              All Services
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => {
              const Icon = categoryIcons[key as keyof typeof categoryIcons];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                    selectedCategory === key
                      ? 'bg-brand-accent border-brand-accent text-white'
                      : 'bg-brand-card-blue border-brand-neutral-300 text-brand-neutral-700 hover:border-brand-accent/50'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {filteredServices.map((service) => {
              const Icon = categoryIcons[service.category];
              const availabilityIcon = 
                service.availability === 'available' ? CheckCircle2 :
                service.availability === 'limited' ? AlertCircle : XCircle;
              const AvailIcon = availabilityIcon;
              
              return (
                <div
                  key={service.id}
                  className="bg-brand-card-blue border border-brand-neutral-300 rounded-lg p-3 hover:border-brand-accent/50 transition-all"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-brand-neutral-900 mb-0.5 leading-tight">
                        {service.name}
                      </h4>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge 
                          variant="outline"
                          className={`text-xs bg-brand-${getAvailabilityColor(service.availability)}/10 text-brand-${getAvailabilityColor(service.availability)} border-brand-${getAvailabilityColor(service.availability)}/30`}
                        >
                          <AvailIcon className="h-3 w-3 mr-1" />
                          {service.availability === 'available' ? 'Available' : 
                           service.availability === 'limited' ? 'Limited' : 'Unavailable'}
                        </Badge>
                        {service.responseTime && (
                          <span className="text-xs text-brand-neutral-500">
                            {service.responseTime} response
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-brand-neutral-600 text-sm mb-3">
                    {service.description}
                  </p>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-brand-neutral-900">${service.baseRate}</span>
                      <span className="text-brand-neutral-600 text-sm">/hour</span>
                    </div>
                    {service.minHours && (
                      <span className="text-brand-neutral-500 text-xs">
                        Min. {service.minHours}h
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Breakdown */}
      <section className="py-10 bg-gradient-to-br from-brand-accent/5 via-brand-secondary to-brand-highlight/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-brand-card-blue border border-brand-accent/30 rounded-lg p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
                <PieChart className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h2 className="text-brand-neutral-950 mb-2">
                  Transparent Pricing Breakdown
                </h2>
                <p className="text-brand-neutral-600">
                  Every dollar you pay directly supports the open source ecosystem. Here's exactly where your investment goes:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Example Breakdown */}
              <div className="bg-brand-secondary border border-brand-neutral-300 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-brand-neutral-900">Example: ${averageRate}/hour</h3>
                  <Badge variant="outline" className="bg-brand-highlight/10 text-brand-highlight border-brand-highlight/30">
                    Average Rate
                  </Badge>
                </div>

                <div className="space-y-3">
                  {(() => {
                    const breakdown = calculatePricing(averageRate, profile.pricingBreakdown);
                    return (
                      <>
                        <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                            <span className="text-brand-neutral-700">To Project</span>
                          </div>
                          <div className="text-right">
                            <div className="text-brand-neutral-900">${breakdown.toProject.toFixed(0)}</div>
                            <div className="text-brand-neutral-500 text-xs">{profile.pricingBreakdown.projectAllocation}%</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-highlight"></div>
                            <span className="text-brand-neutral-700">To Dependencies</span>
                          </div>
                          <div className="text-right">
                            <div className="text-brand-neutral-900">${breakdown.toDependencies.toFixed(0)}</div>
                            <div className="text-brand-neutral-500 text-xs">{profile.pricingBreakdown.dependenciesAllocation}%</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pb-2 border-b border-brand-neutral-300">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-success"></div>
                            <span className="text-brand-neutral-700">To Maintainer</span>
                          </div>
                          <div className="text-right">
                            <div className="text-brand-neutral-900">${breakdown.toMaintainer.toFixed(0)}</div>
                            <div className="text-brand-neutral-500 text-xs">{profile.pricingBreakdown.maintainerReceives}%</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-brand-neutral-500"></div>
                            <span className="text-brand-neutral-700">Platform Fee</span>
                          </div>
                          <div className="text-right">
                            <div className="text-brand-neutral-900">${breakdown.toPlatform.toFixed(0)}</div>
                            <div className="text-brand-neutral-500 text-xs">{profile.pricingBreakdown.platformFee}%</div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Visual Distribution */}
              <div className="flex flex-col justify-center">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-brand-neutral-700 text-sm">Project Support</span>
                      <span className="text-brand-neutral-900 text-sm">{profile.pricingBreakdown.projectAllocation}%</span>
                    </div>
                    <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-accent rounded-full" 
                        style={{ width: `${profile.pricingBreakdown.projectAllocation}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-brand-neutral-700 text-sm">Dependencies Ecosystem</span>
                      <span className="text-brand-neutral-900 text-sm">{profile.pricingBreakdown.dependenciesAllocation}%</span>
                    </div>
                    <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-highlight rounded-full" 
                        style={{ width: `${profile.pricingBreakdown.dependenciesAllocation}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-brand-neutral-700 text-sm">Maintainer Compensation</span>
                      <span className="text-brand-neutral-900 text-sm">{profile.pricingBreakdown.maintainerReceives}%</span>
                    </div>
                    <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-success rounded-full" 
                        style={{ width: `${profile.pricingBreakdown.maintainerReceives}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-brand-neutral-700 text-sm">Platform Operations</span>
                      <span className="text-brand-neutral-900 text-sm">{profile.pricingBreakdown.platformFee}%</span>
                    </div>
                    <div className="h-2 bg-brand-neutral-300 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-neutral-500 rounded-full" 
                        style={{ width: `${profile.pricingBreakdown.platformFee}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-brand-success/10 border border-brand-success/30 rounded-lg">
                  <p className="text-brand-neutral-700 text-sm">
                    <span className="text-brand-success">✓</span> Your payment sustains the entire open source ecosystem, from the project you use to all its dependencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability CTA */}
      <section className="py-10 bg-brand-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-brand-neutral-950 mb-3">Ready to Work Together?</h2>
          <p className="text-brand-neutral-600 mb-6 max-w-2xl mx-auto">
            Currently available for {profile.availability.hoursPerWeek} hours per week. 
            {profile.availability.preferredSchedule && ` ${profile.availability.preferredSchedule}.`}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`mailto:${profile.contact.email}`}
              className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-colors"
            >
              Start a Conversation
            </a>
            <button
              onClick={() => onNavItemClick('services')}
              className="px-5 py-2.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}
