import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Coffee, Star } from 'lucide-react';
import { Button } from '../ui/button';

interface MaintainerSlide {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  image: string;
  personality: string;
  accessibility: 'usually-unavailable' | 'exclusive-access' | 'open-to-chat';
  github?: string;
  funFact?: string;
}

interface RotatingHeroBannerProps {
  slides: MaintainerSlide[];
  autoRotateInterval?: number;
  onBookCall?: () => void;
  onExploreSolutions?: () => void;
}

// Default maintainer data with human, personal touches
const defaultMaintainers: MaintainerSlide[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Creator & Solo Maintainer',
    project: 'React Query',
    quote: "I used to ignore most enterprise requests because I was completely overwhelmed. Now I can actually help the teams that depend on my work every day.",
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    personality: 'Night owl coder • Coffee addict',
    accessibility: 'usually-unavailable',
    github: '@tanstack',
    funFact: 'Gets 200+ DMs per week, responds to ~5'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'TypeScript Core Team',
    project: 'TypeScript',
    quote: "Microsoft keeps me pretty busy, but through this platform I can finally work directly with the teams building amazing things with TypeScript.",
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    personality: 'Type safety evangelist • Weekend pianist',
    accessibility: 'exclusive-access',
    github: '@microsoft',
    funFact: 'Helped build the language millions of devs use daily'
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Independent Creator',
    project: 'Tailwind CSS',
    quote: "Building Tailwind was just the beginning. Now I get to see how real teams use it and help them solve problems I never even thought of.",
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    personality: 'Design systems obsessed • Dog mom',
    accessibility: 'open-to-chat',
    github: '@tailwindlabs',
    funFact: 'Designs in Figma, codes in Vim'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Vercel Staff Engineer',
    project: 'Next.js',
    quote: "I love seeing what people build with Next.js, but I never had time to help individual teams until now. This changes everything.",
    image: 'https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTI0MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    personality: 'Performance nerd • Rock climbing enthusiast',
    accessibility: 'exclusive-access',
    github: '@vercel',
    funFact: 'Optimized React for millions of production apps'
  },
  {
    id: '5',
    name: 'Elena Volkov',
    role: 'Webpack Core Maintainer',
    project: 'Webpack',
    quote: "For years I've been debugging webpack configs in my spare time for free. Now I can actually dedicate proper time to helping teams get their builds right.",
    image: 'https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MjQwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    personality: 'Build tool wizard • Chess player',
    accessibility: 'usually-unavailable',
    github: '@webpack',
    funFact: 'Maintains the bundler that powers the web'
  }
];

export function RotatingHeroBanner({ 
  slides = defaultMaintainers, 
  autoRotateInterval = 8000,
  onBookCall,
  onExploreSolutions
}: RotatingHeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPersonality, setShowPersonality] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setShowPersonality(false);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoRotateInterval, isPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPersonality(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowPersonality(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setShowPersonality(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setShowPersonality(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlideData = slides[currentSlide];

  // Natural developer workspace backgrounds
  const backgroundImages = [
    'https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBjb2Rpbmd8ZW58MXx8fHwxNzU5NTE2OTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1681165232934-c09dfa5ee694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwY2FzdWFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU5NTE2OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const getAccessibilityColor = (accessibility: string) => {
    switch (accessibility) {
      case 'usually-unavailable':
        return 'bg-brand-error/20 text-brand-error border-brand-error/30';
      case 'exclusive-access':
        return 'bg-brand-warning/20 text-brand-warning border-brand-warning/30';
      case 'open-to-chat':
        return 'bg-brand-success/20 text-brand-success border-brand-success/30';
      default:
        return 'bg-brand-accent/20 text-brand-accent border-brand-accent/30';
    }
  };

  const getAccessibilityText = (accessibility: string) => {
    switch (accessibility) {
      case 'usually-unavailable':
        return '🔒 Usually Unavailable';
      case 'exclusive-access':
        return '⭐ Exclusive Access';
      case 'open-to-chat':
        return '💬 Open to Chat';
      default:
        return '🤝 Available';
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with warm, personal feel */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-out"
          style={{ 
            backgroundImage: `url(${backgroundImages[currentSlide % backgroundImages.length]})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/85 via-brand-secondary/75 to-brand-secondary/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/70 via-transparent to-brand-secondary/50"></div>
        
        {/* Subtle warm glow */}
        <div className="absolute inset-0 bg-gradient-radial from-brand-accent/5 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Floating Personal Touch Controls */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        <div className="px-3 py-1 bg-brand-accent/20 backdrop-blur-sm text-brand-accent rounded-full border border-brand-accent/30 text-xs font-medium">
          <Heart className="w-3 h-3 inline mr-1" />
          Real People
        </div>
        
        <button
          onClick={goToPrevious}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
          aria-label="Meet previous maintainer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <button
          onClick={goToNext}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-brand-accent/50"
          aria-label="Meet next maintainer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content - Human-Centered */}
      <div className="relative z-20 h-[80vh] flex items-center justify-start">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          {/* Maintainer Profile Section - Left Aligned */}
          <div className="space-y-8 max-w-4xl">
            
            {/* Creator Badge - Prominent */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-accent/20 text-brand-accent backdrop-blur-sm rounded-xl border-2 border-brand-accent/30 shadow-lg">
                <Star className="w-5 h-5" />
                <span className="font-semibold text-lg">Creator & Maintainer</span>
              </div>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-brand-primary/20 to-brand-highlight/20 text-white backdrop-blur-sm rounded-lg border border-brand-primary/30">
                <div className="text-2xl font-bold">{currentSlideData.project}</div>
              </div>
            </div>

            {/* Maintainer Info - Prominent Name */}
            <div className="space-y-4">
              <div className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {currentSlideData.name}
              </div>
              <div className="text-xl text-brand-neutral-400">
                {currentSlideData.role}
              </div>
              
              {/* Availability Status */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border ${getAccessibilityColor(currentSlideData.accessibility)}`}>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{getAccessibilityText(currentSlideData.accessibility)}</span>
              </div>
            </div>

            {/* Quote Section */}
            <div className="space-y-6">
              <div className="relative max-w-3xl">
                <div className="absolute -top-4 -left-4 text-6xl text-brand-accent/20 font-serif pointer-events-none">"</div>
                <blockquote 
                  key={currentSlide}
                  className="text-xl lg:text-2xl font-normal leading-relaxed text-white pl-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 italic"
                >
                  {currentSlideData.quote}
                </blockquote>
              </div>
              
              {/* Fun Personality Touch */}
              {showPersonality && currentSlideData.personality && (
                <div 
                  className="animate-in fade-in-0 slide-in-from-bottom-1 duration-500 delay-700"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-brand-highlight/20 text-brand-highlight rounded-full text-sm font-medium border border-brand-highlight/30">
                    <Coffee className="w-3 h-3" />
                    {currentSlideData.personality}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Section - Left Aligned */}
            <div className="space-y-6">
              <p className="text-xl text-brand-neutral-300 max-w-2xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-600">
                Connect directly with maintainers like {currentSlideData.name.split(' ')[0]} who usually only work with select teams.
              </p>
              
              <div 
                key={`${currentSlide}-cta`}
                className="flex flex-col sm:flex-row gap-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-700"
              >
                <Button 
                  size="lg" 
                  onClick={onBookCall}
                  className="bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-4 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-fit"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Connect with Maintainers
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onExploreSolutions}
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 text-lg font-medium transition-all duration-300 w-fit"
                >
                  <Star className="w-4 h-4 mr-2" />
                  See Who's Available
                </Button>
              </div>
            </div>

            {/* Navigation Indicators - Left Aligned */}
            <div className="flex gap-3 pt-8">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 group ${
                    index === currentSlide 
                      ? 'w-12 h-3 bg-brand-accent rounded-full shadow-lg' 
                      : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125'
                  }`}
                  aria-label={`Meet ${slide.name}`}
                  title={slide.name}
                >
                  {index === currentSlide && (
                    <div className="w-full h-full bg-gradient-to-r from-brand-accent to-brand-highlight rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Warm Invitation to Continue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white/90 transition-colors duration-300">
          <div className="text-xs font-medium tracking-wider">Meet More Amazing People</div>
          <div className="w-px h-8 bg-gradient-to-b from-brand-accent/60 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Personal Connection Progress */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide 
                  ? 'w-2 h-10 bg-gradient-to-b from-brand-accent to-brand-highlight shadow-lg' 
                  : 'w-1 h-6 bg-white/30 hover:bg-white/50 hover:w-2'
              }`}
              aria-label={`Meet ${slide.name}`}
              title={slide.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}