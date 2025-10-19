import React, { useState, useEffect } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  category: 'personal' | 'enterprise';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Lead Maintainer',
    project: 'React Query',
    quote: "Open Source Economy finally gives maintainers sustainable income while preserving the open nature of our work. I can focus on building better software instead of worrying about funding.",
    category: 'personal'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Lead Maintainer', 
    project: 'React Query',
    quote: "Enterprise teams now get direct access to the people who actually built their dependencies. No more waiting months for critical bug fixes or feature requests.",
    category: 'enterprise'
  },
  {
    id: '3',
    name: 'Marcus Rodriguez',
    role: 'Core Contributor',
    project: 'TypeScript',
    quote: "After years of maintaining critical infrastructure for free, this platform ensures maintainers get fairly compensated for the value we create for the entire ecosystem.",
    category: 'personal'
  },
  {
    id: '4',
    name: 'Marcus Rodriguez', 
    role: 'Core Contributor',
    project: 'TypeScript',
    quote: "Companies can now prioritize the exact features they need most. Instead of hoping someone else will build it, they can contract directly with us to make it happen.",
    category: 'enterprise'
  },
  {
    id: '5',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS',
    quote: "This platform bridges the gap between open source ideals and real-world sustainability. I can maintain my project full-time while keeping it completely open.",
    category: 'personal'
  },
  {
    id: '6',
    name: 'Aisha Patel',
    role: 'Creator & Maintainer',
    project: 'Tailwind CSS', 
    quote: "Enterprises get enterprise-grade support with open source flexibility. They're not locked into proprietary solutions, but they get the reliability they need for production.",
    category: 'enterprise'
  }
];

export function MaintainerTestimonialsMinimal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-brand-primary/3 relative overflow-hidden">
      {/* Minimal background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-primary/3 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-success/3 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Simple header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 rounded-full border border-brand-primary/10 mb-8">
              <Quote className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-primary">Minimal Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
              Simply{' '}
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-success bg-clip-text text-transparent">
                Powerful
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The voices that matter most - maintainers and enterprises working together.
            </p>
          </div>

          {/* Large quote display */}
          <div className="relative mb-16">
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8">
              <Quote className="w-16 h-16 md:w-20 md:h-20 text-brand-primary/20" />
            </div>
            
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-12 relative z-10">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 rotate-180">
              <Quote className="w-16 h-16 md:w-20 md:h-20 text-brand-success/20" />
            </div>
          </div>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${
                currentTestimonial.category === 'personal' 
                  ? 'bg-brand-primary' 
                  : 'bg-brand-success'
              }`}></div>
              <div className="text-center">
                <div className="font-semibold text-xl text-foreground mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-muted-foreground">
                  {currentTestimonial.role}, {currentTestimonial.project}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                currentTestimonial.category === 'personal'
                  ? 'bg-brand-primary/10 text-brand-primary'
                  : 'bg-brand-success/10 text-brand-success'
              }`}>
                {currentTestimonial.category === 'personal' ? 'Personal' : 'Enterprise'}
              </div>
            </div>
          </div>

          {/* Simple navigation */}
          <div className="flex items-center justify-center gap-8">
            <Button
              variant="ghost"
              size="lg"
              onClick={goToPrev}
              className="w-14 h-14 rounded-full border border-border/50 hover:border-brand-primary/30 hover:bg-brand-primary/5"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-brand-primary rounded-full'
                      : 'w-2 h-2 bg-brand-primary/30 rounded-full hover:bg-brand-primary/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost" 
              size="lg"
              onClick={goToNext}
              className="w-14 h-14 rounded-full border border-border/50 hover:border-brand-primary/30 hover:bg-brand-primary/5"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Testimonial</span>
              <span>{currentIndex + 1} of {testimonials.length}</span>
            </div>
            <div className="w-full h-1 bg-brand-primary/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-primary to-brand-success transition-all duration-500 ease-out"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}