import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExpertBadge } from '../ui/expert-badge';

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
    role: 'Project Founder',
    project: 'React Query',
    image: 'https://images.unsplash.com/photo-1649193137571-2fd26d073790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjB3b21hbnxlbnwxfHx8fDE3NTkyNDA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy finally gives maintainers sustainable income while preserving the open nature of our work. I can focus on building better software instead of worrying about funding.",
    enterpriseImpact: "Enterprise teams now get direct access to the people who actually built their dependencies. No more waiting months for critical bug fixes or feature requests.",
    github: '@sarahchen'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Core Team Lead',
    project: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1634838083208-ce7a36701fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTIxMjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "After years of maintaining critical infrastructure for free, this platform ensures maintainers get fairly compensated for the value we create for the entire ecosystem.",
    enterpriseImpact: "Companies can now prioritize the exact features they need most. Instead of hoping someone else will build it, they can contract directly with us to make it happen.",
    github: '@mrodriguez'
  },
  {
    id: '3',
    name: 'Aisha Patel',
    role: 'Creator & Lead Maintainer',
    project: 'Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwcG9ydHJhaXQlMjBkaXZlcnNlfGVufDF8fHx8MTc1OTI0MDk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "This platform bridges the gap between open source ideals and real-world sustainability. I can maintain my project full-time while keeping it completely open.",
    enterpriseImpact: "Enterprises get enterprise-grade support with open source flexibility. They're not locked into proprietary solutions, but they get the reliability they need for production.",
    github: '@apatel'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Co-Founder & Security Lead',
    project: 'Next.js',
    image: 'https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGFzaWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTI0MDk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "The transparency in funding distribution means I know exactly how my work contributes to the broader ecosystem. It's about building sustainable open source together.",
    enterpriseImpact: "Security vulnerabilities get addressed immediately because we have dedicated resources. Enterprises get peace of mind knowing their stack is actively maintained by experts.",
    github: '@dkim'
  },
  {
    id: '5',
    name: 'Elena Volkov',
    role: 'Core Maintainer',
    project: 'Webpack',
    image: 'https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwaGVhZHNob3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5MjQwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    whyJoined: "Open Source Economy aligns incentives perfectly. The more value I create for the community, the more sustainable my work becomes. It's the future of open source.",
    enterpriseImpact: "Performance optimizations that used to take months now happen in weeks. Companies can get custom performance audits and optimizations directly from the people who built the tools.",
    github: '@evolkov'
  }
];

export function MaintainerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maintainers.length);
    }, 5000);

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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentMaintainer = maintainers[currentIndex];

  return null;
}