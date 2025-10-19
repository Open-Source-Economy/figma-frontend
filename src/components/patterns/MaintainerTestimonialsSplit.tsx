import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Quote, ExternalLink } from 'lucide-react';
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
  company?: string;
}

const maintainers: Maintainer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Maintainer',
    project: 'React Query',
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy finally gives maintainers sustainable income while preserving the open nature of our work. I can focus on building better software instead of worrying about funding.",
    enterpriseImpact: "Enterprise teams now get direct access to the people who actually built their dependencies. No more waiting months for critical bug fixes or feature requests.",
    github: '@sarahchen',
    company: 'Independent'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Core Contributor',
    project: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "After years of maintaining critical infrastructure for free, this platform ensures maintainers get fairly compensated for the value we create for the entire ecosystem.",
    enterpriseImpact: "Companies can now prioritize the exact features they need most. Instead of hoping someone else will build it, they can contract directly with us to make it happen.",
    github: '@mrodriguez',
    company: 'Microsoft'
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "This platform bridges the gap between open source ideals and real-world sustainability. I can maintain my project full-time while keeping it completely open.",
    enterpriseImpact: "Enterprises get enterprise-grade support with open source flexibility. They're not locked into proprietary solutions, but they get the reliability they need for production.",
    github: '@apatel',
    company: 'Tailwind Labs'
  }
];

export function MaintainerTestimonialsSplit() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentQuote, setCurrentQuote] = useState<'personal' | 'enterprise'>('personal');

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentQuote(prev => {
        if (prev === 'personal') {
          return 'enterprise';
        } else {
          setCurrentIndex(prev => (prev + 1) % maintainers.length);
          return 'personal';
        }
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToNext = () => {
    if (currentQuote === 'personal') {
      setCurrentQuote('enterprise');
    } else {
      setCurrentIndex((prev) => (prev + 1) % maintainers.length);
      setCurrentQuote('personal');
    }
    setIsPlaying(false);
  };

  const goToPrev = () => {
    if (currentQuote === 'enterprise') {
      setCurrentQuote('personal');
    } else {
      setCurrentIndex((prev) => (prev - 1 + maintainers.length) % maintainers.length);
      setCurrentQuote('enterprise');
    }
    setIsPlaying(false);
  };

  const currentMaintainer = maintainers[currentIndex];

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-brand-primary/2 to-brand-success/3 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-card/10 backdrop-blur-sm rounded-full border border-border/50 mb-6">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-primary">Split Screen Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Two Perspectives,{' '}
              <span className="bg-gradient-to-r from-brand-primary to-brand-success bg-clip-text text-transparent">
                One Vision
              </span>
            </h2>
          </div>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left side - Large image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 relative">
                <ImageWithFallback
                  src={currentMaintainer.image}
                  alt={currentMaintainer.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Profile info overlay */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                    <h3 className="font-semibold text-2xl mb-2">{currentMaintainer.name}</h3>
                    <p className="text-brand-primary-light font-medium mb-1">{currentMaintainer.role}</p>
                    <p className="text-white/80 text-sm mb-3">{currentMaintainer.project}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        {currentMaintainer.github && (
                          <span className="flex items-center gap-1">
                            {currentMaintainer.github}
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        )}
                        {currentMaintainer.company && (
                          <>
                            <span>•</span>
                            <span>{currentMaintainer.company}</span>
                          </>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                        <span className="text-xs text-white/80">Live</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote indicator */}
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              {/* Quote type indicator */}
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentQuote === 'personal' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-brand-primary/10 text-brand-primary'
                }`}>
                  Personal Impact
                </div>
                <div className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  currentQuote === 'enterprise' 
                    ? 'bg-brand-success text-white' 
                    : 'bg-brand-success/10 text-brand-success'
                }`}>
                  Enterprise Value
                </div>
              </div>

              {/* Main quote */}
              <div className="relative">
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-foreground transition-all duration-500">
                  "{currentQuote === 'personal' ? currentMaintainer.whyJoined : currentMaintainer.enterpriseImpact}"
                </blockquote>
              </div>

              {/* Media controls */}
              <div className="flex items-center gap-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full"
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-14 h-14 rounded-full"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </Button>
                
                <Button
                  variant="outline"
                  size="icon" 
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>

                <div className="ml-4 text-sm text-muted-foreground">
                  {currentIndex + 1} of {maintainers.length} • {currentQuote === 'personal' ? 'Personal' : 'Enterprise'}
                </div>
              </div>

              {/* Progress indicators */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round((((currentIndex * 2) + (currentQuote === 'enterprise' ? 1 : 0) + 1) / (maintainers.length * 2)) * 100)}%</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <div className="text-xs text-brand-primary">Personal Stories</div>
                    <div className="h-1 bg-brand-primary/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-primary transition-all duration-500"
                        style={{ width: `${((currentIndex + (currentQuote === 'personal' ? 1 : 0)) / maintainers.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-brand-success">Enterprise Impact</div>
                    <div className="h-1 bg-brand-success/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-success transition-all duration-500"
                        style={{ width: `${((currentIndex + (currentQuote === 'enterprise' ? 1 : 0)) / maintainers.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}