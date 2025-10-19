import React, { useState } from 'react';
import { Quote, Star, Github, ExternalLink, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Maintainer {
  id: string;
  name: string;
  role: string;
  project: string;
  image: string;
  whyJoined: string;
  enterpriseImpact: string;
  github?: string;
  rating: number;
  supporters: number;
}

const maintainers: Maintainer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Maintainer',
    project: 'React Query',
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy finally gives maintainers sustainable income while preserving the open nature of our work.",
    enterpriseImpact: "Enterprise teams now get direct access to the people who actually built their dependencies.",
    github: '@sarahchen',
    rating: 4.9,
    supporters: 1250
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Core Contributor',
    project: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "After years of maintaining critical infrastructure for free, this platform ensures fair compensation.",
    enterpriseImpact: "Companies can now prioritize the exact features they need most with direct maintainer access.",
    github: '@mrodriguez',
    rating: 4.8,
    supporters: 980
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "This platform bridges the gap between open source ideals and real-world sustainability perfectly.",
    enterpriseImpact: "Enterprises get enterprise-grade support with open source flexibility and no vendor lock-in.",
    github: '@apatel',
    rating: 4.9,
    supporters: 1450
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Security Lead',
    project: 'Next.js',
    image: 'https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTI0MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "The transparency in funding distribution means I know exactly how my work contributes to the ecosystem.",
    enterpriseImpact: "Security vulnerabilities get addressed immediately with dedicated resources and expert attention.",
    github: '@dkim',
    rating: 4.7,
    supporters: 890
  },
  {
    id: '5',
    name: 'Elena Volkov',
    role: 'Performance Engineer',
    project: 'Webpack',
    image: 'https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcm9ncmFtbWVyJTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MjQwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy aligns incentives perfectly - the more value I create, the more sustainable my work becomes.",
    enterpriseImpact: "Performance optimizations that used to take months now happen in weeks with direct collaboration.",
    github: '@evolkov',
    rating: 4.8,
    supporters: 1120
  },
  {
    id: '6',
    name: 'James Thompson',
    role: 'Core Maintainer',
    project: 'Vue.js',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MjQwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Finally, a model that supports both community growth and individual maintainer sustainability.",
    enterpriseImpact: "Teams get guaranteed response times and priority access to new features and bug fixes.",
    github: '@jthompson',
    rating: 4.6,
    supporters: 760
  }
];

export function MaintainerTestimonialsGrid() {
  const [selectedMaintainer, setSelectedMaintainer] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-brand-secondary-light via-background to-brand-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-success/10 rounded-full border border-brand-primary/20 mb-6">
            <Star className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">Grid Testimonials</span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">Community Voices</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what expert maintainers are saying about their journey with Open Source Economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {maintainers.map((maintainer) => (
            <Card 
              key={maintainer.id}
              className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/10 cursor-pointer ${
                selectedMaintainer === maintainer.id 
                  ? 'scale-105 shadow-xl shadow-brand-primary/10 border-brand-primary/30' 
                  : 'hover:border-brand-primary/20'
              }`}
              onClick={() => setSelectedMaintainer(
                selectedMaintainer === maintainer.id ? null : maintainer.id
              )}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-brand-primary/20 shadow-sm">
                        <ImageWithFallback
                          src={maintainer.image}
                          alt={maintainer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-success rounded-full border-2 border-white">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base">{maintainer.name}</h3>
                      <p className="text-sm text-brand-primary font-medium">{maintainer.role}</p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-brand-primary/40 flex-shrink-0" />
                </div>

                {/* Project and stats */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {maintainer.project}
                  </Badge>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-brand-warning" />
                      <span>{maintainer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-brand-error" />
                      <span>{maintainer.supporters}</span>
                    </div>
                  </div>
                </div>

                {/* Why joined quote */}
                <blockquote className="text-sm text-foreground leading-relaxed mb-4 italic">
                  "{maintainer.whyJoined}"
                </blockquote>

                {/* Expandable enterprise impact */}
                {selectedMaintainer === maintainer.id && (
                  <div className="border-t border-border/50 pt-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                    <h4 className="font-medium text-brand-success-dark text-xs uppercase tracking-wide mb-2">
                      Enterprise Impact
                    </h4>
                    <blockquote className="text-sm text-foreground leading-relaxed italic mb-4">
                      "{maintainer.enterpriseImpact}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Github className="w-3 h-3" />
                        <span>{maintainer.github}</span>
                      </div>
                      
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Connect
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Hover indicator */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-semibold text-brand-primary mb-2">
                {maintainers.length}+
              </div>
              <div className="text-sm text-muted-foreground">Expert Maintainers</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-brand-success mb-2">
                {maintainers.reduce((acc, m) => acc + m.supporters, 0).toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Community Supporters</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-brand-warning mb-2">
                {(maintainers.reduce((acc, m) => acc + m.rating, 0) / maintainers.length).toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}