import React from 'react';
import { 
  Code2, 
  Users, 
  Globe, 
  Heart, 
  Zap, 
  Shield,
  Type, 
  Palette, 
  FileText, 
  Grid3X3, 
  MousePointer,
  MessageSquare
} from 'lucide-react';

export const features = [
  {
    icon: <Code2 size={24} />,
    title: 'Open Development',
    description: 'Transparent development process with public repositories, issue tracking, and community contributions.',
    badge: 'Core'
  },
  {
    icon: <Users size={24} />,
    title: 'Community Driven',
    description: 'Built by and for the community with inclusive decision-making and collaborative governance.',
    badge: 'Community'
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Impact',
    description: 'Supporting projects worldwide that solve real problems and create sustainable economic value.',
    badge: 'Impact'
  },
  {
    icon: <Heart size={24} />,
    title: 'Sustainable Funding',
    description: 'Innovative funding models that support maintainers and ensure long-term project sustainability.',
    badge: 'Economy'
  },
  {
    icon: <Zap size={24} />,
    title: 'Innovation Focus',
    description: 'Fostering cutting-edge technologies and breakthrough solutions through open collaboration.',
    badge: 'Innovation'
  },
  {
    icon: <Shield size={24} />,
    title: 'Security First',
    description: 'Rigorous security practices and transparent auditing to ensure trustworthy software.',
    badge: 'Security'
  }
];

export const stats = [
  { value: '10,000+', label: 'Active Projects', description: 'Open source repositories' },
  { value: '50K+', label: 'Contributors', description: 'Global community' },
  { value: '$2.5M', label: 'Funding Distributed', description: 'To maintainers' },
  { value: '150+', label: 'Countries', description: 'Worldwide reach' }
];

export const testimonials = [
  {
    content: 'Open Source Economy has transformed how we approach sustainable development funding. The transparency and community support is unparalleled.',
    author: {
      name: 'Sarah Chen',
      title: 'Lead Developer',
      company: 'TechForGood',
      avatar: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 5
  },
  {
    content: 'The collaborative approach and fair funding model has enabled our project to grow beyond our wildest dreams.',
    author: {
      name: 'Marcus Rodriguez',
      title: 'Open Source Maintainer',
      company: 'DataFlow Project'
    },
    rating: 5
  },
  {
    content: 'Finally, a platform that truly understands the needs of both contributors and maintainers in the open source ecosystem.',
    author: {
      name: 'Dr. Aisha Patel',
      title: 'Research Lead',
      company: 'University Innovation Lab'
    },
    rating: 5
  }
];

export const designSystemSections = [
  { id: 'hero', title: 'Hero & Layout', icon: Globe },
  { id: 'typography', title: 'Typography', icon: Type },
  { id: 'colors', title: 'Colors & Branding', icon: Palette },
  { id: 'forms', title: 'Forms & Inputs', icon: FileText },
  { id: 'components', title: 'Components', icon: Grid3X3 },
  { id: 'patterns', title: 'Patterns', icon: MousePointer },
  { id: 'testimonials', title: 'Testimonial Carousels', icon: MessageSquare },
  { id: 'how-it-works', title: 'How It Works Variations', icon: Zap },
  { id: 'projects', title: 'Projects Showcase', icon: Code2 }
];