import React, { useState } from 'react';
import { Quote, CheckCircle, ArrowRight, Github } from 'lucide-react';
import { Button } from '../ui/button';
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
  joinDate: string;
}

const maintainers: Maintainer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Maintainer',
    project: 'React Query',
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy transformed my ability to maintain React Query full-time. The sustainable funding model means I can focus on what matters most - building great software.",
    enterpriseImpact: "Enterprise teams get direct access to priority support and custom features. No more waiting months for critical updates.",
    github: '@sarahchen',
    joinDate: 'March 2024'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Core Contributor',
    project: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "After years of maintaining TypeScript for free, this platform ensures maintainers get fairly compensated for the immense value we create.",
    enterpriseImpact: "Companies can now contract directly with us for the exact features they need most. It's a game-changer for enterprise development.",
    github: '@mrodriguez',
    joinDate: 'January 2024'
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "This platform bridges the gap between open source ideals and real-world sustainability. I can maintain Tailwind openly while earning a living.",
    enterpriseImpact: "Enterprises get enterprise-grade support with open source flexibility. No vendor lock-in, but all the reliability they need.",
    github: '@apatel',
    joinDate: 'February 2024'
  }
];

export function MaintainerTestimonialsTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-brand-primary/2 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-success/10 rounded-full border border-brand-success/20 mb-6">
            <CheckCircle className="w-4 h-4 text-brand-success" />
            <span className="text-sm font-medium text-brand-success">Timeline Stories</span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">Journey to Sustainability</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the stories of maintainers who transformed their open source work into sustainable careers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-success transform md:-translate-x-1/2"></div>

            {maintainers.map((maintainer, index) => (
              <div 
                key={maintainer.id}
                className={`relative mb-12 transition-all duration-500 ${
                  index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 transform md:-translate-x-1/2 z-10 transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-brand-primary border-white shadow-lg shadow-brand-primary/30' 
                    : 'bg-brand-primary/30 border-white'
                }`}>
                  {index === activeIndex && (
                    <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}>
                  <div 
                    className={`bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? 'border-brand-primary/30 shadow-xl shadow-brand-primary/10' : ''
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-brand-primary/20 shadow-md">
                          <ImageWithFallback
                            src={maintainer.image}
                            alt={maintainer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-success rounded-full border-2 border-white flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-xl text-foreground">{maintainer.name}</h3>
                          <div className="px-2 py-1 bg-brand-primary/10 rounded-full">
                            <span className="text-xs font-medium text-brand-primary">{maintainer.joinDate}</span>
                          </div>
                        </div>
                        <p className="text-brand-primary font-medium">{maintainer.role}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{maintainer.project}</span>
                          {maintainer.github && (
                            <>
                              <span>•</span>
                              <div className="flex items-center gap-1">
                                <Github className="w-3 h-3" />
                                <span>{maintainer.github}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <Quote className="w-8 h-8 text-brand-primary/40 flex-shrink-0" />
                    </div>

                    {/* Journey section */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-brand-primary-dark text-sm uppercase tracking-wide mb-3">
                          Why I Joined Open Source Economy
                        </h4>
                        <blockquote className="text-foreground leading-relaxed">
                          "{maintainer.whyJoined}"
                        </blockquote>
                      </div>

                      <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-gradient-to-r from-brand-primary/20 to-brand-success/20"></div>
                        <ArrowRight className="w-4 h-4 text-brand-accent" />
                        <div className="flex-1 h-px bg-gradient-to-r from-brand-success/20 to-brand-primary/20"></div>
                      </div>

                      <div>
                        <h4 className="font-medium text-brand-success-dark text-sm uppercase tracking-wide mb-3">
                          Impact for Enterprise Teams
                        </h4>
                        <blockquote className="text-foreground leading-relaxed">
                          "{maintainer.enterpriseImpact}"
                        </blockquote>
                      </div>
                    </div>

                    {/* CTA */}
                    {index === activeIndex && (
                      <div className="mt-6 pt-6 border-t border-border/50">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-brand-primary border-brand-primary/20 hover:bg-brand-primary/5"
                        >
                          Connect with {maintainer.name.split(' ')[0]}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}