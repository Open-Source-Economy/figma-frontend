import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
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
}

const maintainers: Maintainer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Maintainer',
    project: 'React Query',
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Finally, sustainable income while preserving open source values.",
    enterpriseImpact: "Direct access means faster fixes and priority features.",
    github: '@sarahchen'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Core Contributor',
    project: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Fair compensation for maintaining critical infrastructure.",
    enterpriseImpact: "Companies get exactly what they need, when they need it.",
    github: '@mrodriguez'
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Bridges open source ideals with real-world sustainability.",
    enterpriseImpact: "Enterprise reliability without proprietary lock-in.",
    github: '@apatel'
  }
];

export function MaintainerTestimonialsCompact() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maintainers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maintainers.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maintainers.length) % maintainers.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-brand-primary/3 via-background to-brand-highlight/3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 mb-4">
            <Quote className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-medium text-brand-primary">Compact Testimonials</span>
          </div>
          <h2 className="text-3xl font-semibold mb-4">What Maintainers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quick insights from the experts who power your favorite open source projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maintainers.map((maintainer, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + maintainers.length) % maintainers.length;
              const isNext = index === (currentIndex + 1) % maintainers.length;
              const isVisible = isActive || isPrev || isNext;

              return (
                <Card 
                  key={maintainer.id}
                  className={`p-6 transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'scale-105 shadow-xl shadow-brand-primary/10 border-brand-primary/30 bg-white/90 dark:bg-card/90' 
                      : isVisible
                      ? 'scale-95 opacity-60 hover:opacity-80 hover:scale-100 bg-white/60 dark:bg-card/60'
                      : 'scale-90 opacity-30 hidden lg:block bg-white/40 dark:bg-card/40'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/20">
                        <ImageWithFallback
                          src={maintainer.image}
                          alt={maintainer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {isActive && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-accent rounded-full border-2 border-white">
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base truncate">{maintainer.name}</h3>
                      <p className="text-sm text-brand-primary font-medium truncate">{maintainer.role}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <span>{maintainer.project}</span>
                        {maintainer.github && (
                          <>
                            <span>•</span>
                            <Github className="w-3 h-3" />
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <blockquote className="text-sm text-foreground italic">
                      "{maintainer.whyJoined}"
                    </blockquote>
                    
                    <blockquote className="text-xs text-muted-foreground italic">
                      "{maintainer.enterpriseImpact}"
                    </blockquote>
                  </div>

                  {isActive && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 text-brand-primary" />
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="w-10 h-10 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {maintainers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-brand-primary w-6'
                      : 'bg-brand-primary/30 hover:bg-brand-primary/60'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-10 h-10 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}