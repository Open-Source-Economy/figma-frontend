import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { Button } from '../ui/button';
import { ArrowRight, Users, Building2, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

interface TestimonialsSectionProps {
  onReadMoreStories?: () => void;
  className?: string;
}

export function TestimonialsSection({
  onReadMoreStories,
  className = ''
}: TestimonialsSectionProps) {
  
  const developerTestimonials = [
    {
      quote: "Open Source Economy changed everything for me. Instead of burning out maintaining my project for free, I now have sustainable income that lets me focus on what I love - writing great code. The platform handles all the business complexity.",
      author: "Sarah Chen",
      role: "Core Maintainer",
      company: "React Query",
      category: 'developer' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1629885477352-9e48ac5719ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdGVyJTIwc3Vuc2V0fGVufDF8fHx8MTc1OTkzODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "I was skeptical at first, but the consistent funding has allowed me to dedicate 30+ hours per week to my open source work. The community gets better software, and I can actually pay my bills. It's a win-win.",
      author: "Marcus Thompson",
      role: "Lead Developer",
      company: "GraphQL Tools",
      category: 'developer' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1598084279344-76b059aad31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGJsdWV8ZW58MXx8fHwxNzU5OTEwODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const enterpriseTestimonials = [
    {
      quote: "When our critical authentication library had a security vulnerability, we got direct access to the maintainer within hours. The fix was deployed the same day. That level of expert support is invaluable for mission-critical applications.",
      author: "Jennifer Martinez",
      role: "VP of Engineering",
      company: "FinTech Solutions Inc",
      category: 'enterprise' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc1OTkxNjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      quote: "We needed custom features for our data processing pipeline. Through Open Source Economy, we worked directly with the library authors to implement exactly what we needed. No more forking or waiting for community contributions.",
      author: "David Park",
      role: "CTO",
      company: "DataScale Analytics",
      category: 'enterprise' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODU4MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  // Combine all testimonials for carousel
  const allTestimonials = [...developerTestimonials, ...enterpriseTestimonials];

  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Header with Better Hierarchy */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            <span className="text-brand-accent">Testimonials</span>
          </div>
          <h2 className="mb-4">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground text-lg">
            Real feedback from developers and enterprises using Open Source Economy
          </p>
        </div>

        {/* Peek Carousel with Adjacent Slides Visible */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allTestimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-[85%] md:basis-[75%] lg:basis-[70%]"
                >
                  <div className="transition-all duration-300 hover:scale-[1.02]">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Arrows */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-secondary/90 backdrop-blur-sm border-brand-neutral-300/50 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all shadow-lg z-10" />
              <CarouselNext className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-secondary/90 backdrop-blur-sm border-brand-neutral-300/50 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all shadow-lg z-10" />
            </div>
          </Carousel>

          {/* Modern Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-12 bg-brand-accent'
                    : 'w-1.5 bg-brand-neutral-400 hover:bg-brand-neutral-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {current + 1} of {count}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}