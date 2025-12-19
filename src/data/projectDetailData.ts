/**
 * Project Detail Data Structure
 * Template-based data for individual project pages
 */

export type ConsultingStatus = 'available' | 'available-later' | 'community-supporter';

export interface ConsultingDetails {
  does?: string[]; // What the maintainer does (e.g., "Reviews PRs", "Brainstorming sessions")
  doesNot?: string[]; // What the maintainer doesn't do (e.g., "Paid consulting", "Implementation work")
}

export interface Maintainer {
  name: string;
  photo: string;
  title: string;
  bio: string;
  yearsOnProject: number;
  social: {
    github: string;
    twitter?: string;
    linkedin?: string;
  };
  consultingStatus: ConsultingStatus;
  consultingStatusExplanation?: string; // Optional custom explanation for this maintainer's status
  consultingDetails?: ConsultingDetails; // Structured details about what they do/don't do
  expertise: string[];
  verified?: boolean;
  mergeRights?: 'Full Access' | 'Limited' | 'Review Only' | 'Read Only';
  highlightFact?: string;
}

export interface DonationTier {
  amount: number;
  benefits: string[];
}

export interface ServicePackage {
  name: string;
  price: number | 'custom';
  period?: 'hour' | 'month';
  features: string[];
  cta: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  businessValue: string;
}

export interface CaseStudy {
  companyName: string;
  companyLogo: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  quotee: string;
  quoteeRole: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  quarter?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SupporterTier {
  name: string;
  icon: 'heart' | 'star' | 'award' | 'crown';
  accentColor: string;
  supporters: Array<{
    name: string;
    domain: string; // Company domain for logo fetching (e.g., 'microsoft.com')
    description?: string; // Optional description of what they're doing
    badge?: string; // Optional badge/label (e.g., "Founding Supporter", "Platinum Partner")
    tagline?: string; // Optional custom tagline/highlight
    ctaText?: string; // Optional CTA link text (e.g., "View our OSS initiatives")
    ctaUrl?: string; // Optional CTA URL
  }>;
  minAmount: number;
  benefits: string[];
}

export interface IndividualSupporter {
  name?: string; // Name if not anonymous
  initials?: string; // For initial avatars (e.g., "AL")
  avatarUrl?: string; // GitHub avatar URL
  isAnonymous?: boolean; // Anonymous supporter
  monthlyAmount?: number;
}

export interface ProjectDetail {
  // Basic Info
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  category: string[];
  
  // Metadata
  githubUrl: string;
  docsUrl: string;
  version: string;
  license: string;
  stars: number;
  downloads: string;
  yearsActive: number;
  productionUsers: string;
  
  // Maintainers (updated to support multiple)
  maintainers: Maintainer[];
  
  // Services
  consultationRate: number;
  supportContract: {
    monthlyPrice: number;
    hoursIncluded: number;
    features: string[];
  };
  customDevelopmentAvailable: boolean;
  
  // Donations
  donationTiers: {
    oneTime: number[];
    monthly: DonationTier[];
  };
  
  // Content
  features: Feature[];
  usedBy: string[]; // company names
  caseStudies: CaseStudy[];
  roadmap: {
    shipped: RoadmapItem[];
    inProgress: RoadmapItem[];
    upcoming: RoadmapItem[];
  };
  
  // Technical
  installCommand: string;
  quickStartCode: string;
  systemRequirements: string[];
  
  // Community
  communityLinks: {
    discord?: string;
    slack?: string;
    stackoverflow?: string;
    forum?: string;
  };
  
  // Meta
  faqItems: FAQItem[];
  relatedProjects: string[]; // other project slugs
  fundDistribution: {
    serviceProvider: number;
    openSourceEconomy: number;
    project: number;
    dependencies: number;
  };
  
  // Supporters
  supporterTiers: SupporterTier[];
  individualSupporters?: IndividualSupporter[];
}

// Mock project data
export const projectDetailData: Record<string, ProjectDetail> = {
  'react': {
    id: '1',
    slug: 'react',
    name: 'React',
    tagline: 'A JavaScript library for building user interfaces',
    description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components". Used by millions of developers worldwide to create interactive web applications.',
    logo: '⚛️',
    category: ['JavaScript', 'UI Library', 'Web Framework'],
    
    githubUrl: 'https://github.com/facebook/react',
    docsUrl: 'https://react.dev',
    version: '18.2.0',
    license: 'MIT',
    stars: 220000,
    downloads: '20M+ weekly',
    yearsActive: 10,
    productionUsers: '10M+',
    
    maintainers: [
      {
        name: 'Dan Abramov',
        photo: 'https://avatars.githubusercontent.com/u/810438?v=4',
        title: 'Lead React Developer',
        bio: '',
        yearsOnProject: 8,
        social: {
          github: 'gaearon',
          twitter: 'dan_abramov',
          linkedin: 'dan-abramov'
        },
        consultingStatus: 'community-supporter',
        consultingStatusExplanation: 'Championing this initiative to help fellow maintainers build sustainable open source careers. Not offering paid services but supporting the community in this venture.',
        consultingDetails: {
          does: ['Reviews PRs and provides feedback', 'Brainstorming sessions on architecture', 'Community mentorship', 'Evangelizing the initiative'],
          doesNot: ['Paid consulting engagements', 'Direct implementation work', 'Custom feature development', 'Long-term contracts']
        },
        expertise: ['React Architecture', 'Performance Optimization', 'State Management', 'Developer Tools'],
        verified: true,
        mergeRights: 'Full Access',
        highlightFact: 'Creator of Redux and React Hot Loader'
      },
      {
        name: 'Sophie Alpert',
        photo: 'https://avatars.githubusercontent.com/u/6820?v=4',
        title: 'React Core Team',
        bio: 'Former React team manager, currently working on developer experience and tooling. Passionate about making React accessible to everyone.',
        yearsOnProject: 7,
        social: {
          github: 'sophiebits',
          twitter: 'sophiebits',
          linkedin: 'sophiealpert'
        },
        consultingStatus: 'available-later',
        expertise: ['React Internals', 'Build Tools', 'Developer Experience', 'Open Source Management'],
        verified: true,
        mergeRights: 'Full Access',
        highlightFact: 'Former React Team Manager at Meta'
      },
      {
        name: 'Sebastian Markbåge',
        photo: 'https://avatars.githubusercontent.com/u/63648?v=4',
        title: 'React Architect',
        bio: 'React core team member focusing on the future of React. Works on server components, concurrent features, and performance.',
        yearsOnProject: 9,
        social: {
          github: 'sebmarkbage',
          twitter: 'sebmarkbage'
        },
        consultingStatus: 'available',
        expertise: ['Server Components', 'Concurrent Rendering', 'React Architecture', 'Performance'],
        verified: true,
        mergeRights: 'Full Access',
        highlightFact: 'Architect of React Server Components'
      }
    ],
    
    consultationRate: 350,
    supportContract: {
      monthlyPrice: 3500,
      hoursIncluded: 12,
      features: [
        'Priority bug fixes',
        'Architecture review',
        'Performance audits',
        'Slack/Discord access',
        'Security patches',
        'Monthly office hours'
      ]
    },
    customDevelopmentAvailable: true,
    
    donationTiers: {
      oneTime: [25, 50, 100, 250, 500],
      monthly: [
        {
          amount: 10,
          benefits: ['Sponsor badge', 'Monthly newsletter', 'Early access to blog posts']
        },
        {
          amount: 50,
          benefits: ['All $10 benefits', 'Priority bug reports', 'Feature request input', 'Name in contributors']
        },
        {
          amount: 100,
          benefits: ['All $50 benefits', 'Monthly office hours access', '1:1 quarterly sync', 'Early RFC access']
        }
      ]
    },
    
    features: [
      {
        icon: 'Component',
        title: 'Component-Based',
        description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs.',
        businessValue: 'Faster development cycles with reusable components reduce time-to-market by 40%'
      },
      {
        icon: 'Zap',
        title: 'Virtual DOM',
        description: 'React creates an in-memory data structure cache, computes differences, and efficiently updates the browser DOM.',
        businessValue: 'Superior performance means better user experience and higher conversion rates'
      },
      {
        icon: 'RefreshCw',
        title: 'Declarative',
        description: 'Design simple views for each state in your application, and React will efficiently update and render components.',
        businessValue: 'Predictable code is easier to debug and maintain, reducing long-term costs'
      },
      {
        icon: 'Smartphone',
        title: 'Cross-Platform',
        description: 'Use React Native to build mobile apps. Share code between web and mobile platforms.',
        businessValue: 'One team can build for web, iOS, and Android, reducing development costs by 60%'
      }
    ],
    
    usedBy: ['Facebook', 'Instagram', 'Netflix', 'Airbnb', 'Discord', 'Uber', 'Dropbox', 'Atlassian'],
    
    caseStudies: [
      {
        companyName: 'Airbnb',
        companyLogo: '🏠',
        challenge: 'Needed to rebuild their entire web platform with better performance and maintainability for millions of daily users.',
        solution: 'Migrated to React, implementing server-side rendering and code splitting for optimal performance across devices.',
        results: [
          '50% faster page loads',
          '60% reduction in bundle size',
          '3x faster feature development',
          '95% code sharing between web and mobile'
        ],
        quote: 'React transformed how we build at Airbnb. The component model and ecosystem enabled us to move faster while maintaining quality.',
        quotee: 'Adam Neary',
        quoteeRole: 'Tech Lead, Frontend Infrastructure'
      },
      {
        companyName: 'Netflix',
        companyLogo: '🎬',
        challenge: 'Required a solution to deliver high-performance streaming interface across all devices and platforms.',
        solution: 'Adopted React for their web player, leveraging its performance optimizations and cross-platform capabilities.',
        results: [
          '70% faster startup time',
          'Unified codebase across platforms',
          '40% improvement in developer productivity',
          'Better A/B testing capabilities'
        ],
        quote: 'React allowed us to build once and deploy everywhere. The performance gains directly impacted user engagement.',
        quotee: 'Sarah Chen',
        quoteeRole: 'Director of Engineering'
      }
    ],
    
    roadmap: {
      shipped: [
        {
          title: 'Server Components',
          description: 'Zero-bundle-size React Server Components for better performance',
          quarter: 'Q4 2023'
        },
        {
          title: 'Concurrent Features',
          description: 'Improved rendering performance with automatic batching',
          quarter: 'Q2 2023'
        }
      ],
      inProgress: [
        {
          title: 'React Forget',
          description: 'Auto-memoization compiler for optimal performance without manual optimization',
          quarter: 'Q2 2024'
        },
        {
          title: 'Offscreen API',
          description: 'Better control over component visibility and priority',
          quarter: 'Q2 2024'
        }
      ],
      upcoming: [
        {
          title: 'Asset Loading',
          description: 'Built-in primitives for managing stylesheets, fonts, and scripts',
          quarter: 'Q3 2024'
        },
        {
          title: 'Enhanced DevTools',
          description: 'More powerful debugging and profiling capabilities',
          quarter: 'Q4 2024'
        }
      ]
    },
    
    installCommand: 'npx create-react-app my-app',
    quickStartCode: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Building amazing UIs</p>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);`,
    systemRequirements: [
      'Node.js 14.0.0 or higher',
      'npm 6.14.0 or higher',
      'Modern browser (Chrome, Firefox, Safari, Edge)',
      'Basic JavaScript knowledge'
    ],
    
    communityLinks: {
      discord: 'https://discord.gg/react',
      stackoverflow: 'https://stackoverflow.com/questions/tagged/reactjs',
      forum: 'https://github.com/facebook/react/discussions'
    },
    
    faqItems: [
      {
        question: 'What is the typical response time for consultation requests?',
        answer: 'We aim to respond to all consultation requests within 24 hours. For urgent matters, priority support contracts include same-day response guarantees.'
      },
      {
        question: 'Are all consultation sessions covered by NDA?',
        answer: 'Yes, all professional services include automatic NDA coverage. We take your confidentiality seriously and can also work with your custom NDA agreements.'
      },
      {
        question: 'Can I request specific features to be prioritized?',
        answer: 'Support contract holders can submit feature requests that receive prioritized consideration. Custom development contracts can include dedicated feature implementation.'
      },
      {
        question: 'How are donations used?',
        answer: 'Donations directly support ongoing maintenance, security updates, documentation improvements, and community support. We publish quarterly transparency reports showing exact fund allocation.'
      },
      {
        question: 'What if I need to cancel my support contract?',
        answer: 'Support contracts can be canceled at any time with 30 days notice. Unused hours can be used within the notice period or rolled over to a one-time consultation package.'
      },
      {
        question: 'Do you transfer code ownership for custom development?',
        answer: 'Yes, all code developed under custom development contracts is fully owned by you. Work is done under your preferred open source license or as proprietary code.'
      }
    ],
    
    relatedProjects: ['next-js', 'redux', 'react-router'],
    
    fundDistribution: {
      serviceProvider: 55,
      openSourceEconomy: 20,
      project: 15,
      dependencies: 10
    },
    
    supporterTiers: [
      {
        name: 'Bronze',
        icon: 'heart',
        accentColor: '#cd7f32',
        minAmount: 10,
        supporters: [
          { name: 'Vercel', domain: 'vercel.com', description: 'Supporting modern web development' },
          { name: 'Netlify', domain: 'netlify.com', description: 'Empowering web teams' },
          { name: 'Cloudflare', domain: 'cloudflare.com', description: 'Building a better internet' },
          { name: 'DigitalOcean', domain: 'digitalocean.com', description: 'Cloud infrastructure for developers' },
          { name: 'Render', domain: 'render.com', description: 'Unified cloud platform' }
        ],
        benefits: [
          'Sponsor badge on profile',
          'Monthly newsletter',
          'Early access to blog posts',
          'Community recognition'
        ]
      },
      {
        name: 'Silver',
        icon: 'star',
        accentColor: '#c0c0c0',
        minAmount: 50,
        supporters: [
          { 
            name: 'Stripe', 
            domain: 'stripe.com', 
            description: 'Building economic infrastructure for the internet',
            badge: 'Silver Partner'
          },
          { 
            name: 'Twilio', 
            domain: 'twilio.com', 
            description: 'Powering customer engagement platforms',
            badge: 'Technology Partner'
          },
          { 
            name: 'Auth0', 
            domain: 'auth0.com', 
            description: 'Securing modern applications',
            badge: 'Security Partner'
          }
        ],
        benefits: [
          'All Bronze benefits',
          'Priority bug reports',
          'Logo on project website',
          'Feature request input',
          'Quarterly updates call'
        ]
      },
      {
        name: 'Gold',
        icon: 'award',
        accentColor: '#ffd700',
        minAmount: 250,
        supporters: [
          { 
            name: 'Shopify', 
            domain: 'shopify.com', 
            description: 'Empowering millions of entrepreneurs with commerce tools and infrastructure that drive modern retail experiences',
            badge: 'Gold Sponsor',
            tagline: 'Powering commerce at scale with React',
            ctaText: 'See our open source work',
            ctaUrl: 'https://shopify.engineering'
          },
          { 
            name: 'Atlassian', 
            domain: 'atlassian.com', 
            description: 'Building collaboration software for high-performing teams across the globe',
            badge: 'Engineering Partner',
            tagline: 'Building the future of teamwork'
          }
        ],
        benefits: [
          'All Silver benefits',
          'Monthly office hours access',
          'Prominent logo placement',
          'Early RFC access',
          'Direct Slack channel',
          'Priority support'
        ]
      },
      {
        name: 'Platinum',
        icon: 'crown',
        accentColor: '#e5e4e2',
        minAmount: 1000,
        supporters: [
          { 
            name: 'Meta', 
            domain: 'meta.com', 
            description: 'Building technologies that help people connect, find communities, and grow businesses. Committed to advancing open source innovation and supporting the developer ecosystem that powers social technologies at global scale.',
            badge: 'Founding Supporter',
            tagline: 'Original creators and maintainers of React',
            ctaText: 'View our open source initiatives',
            ctaUrl: 'https://opensource.fb.com'
          }
        ],
        benefits: [
          'All Gold benefits',
          'Dedicated account manager',
          'Quarterly strategic planning',
          'Custom feature prioritization',
          'Executive sponsor recognition',
          'Conference speaking opportunities'
        ]
      }
    ],
    
    individualSupporters: [
      // GitHub avatars
      {
        name: 'Sarah Chen',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        monthlyAmount: 25
      },
      {
        name: 'Michael Rodriguez',
        avatarUrl: 'https://i.pravatar.cc/150?img=12',
        monthlyAmount: 50
      },
      {
        name: 'Emily Watson',
        avatarUrl: 'https://i.pravatar.cc/150?img=5',
        monthlyAmount: 10
      },
      // Initial avatars
      {
        name: 'Alex Johnson',
        initials: 'AJ',
        monthlyAmount: 15
      },
      {
        name: 'Taylor Kim',
        initials: 'TK',
        monthlyAmount: 25
      },
      {
        name: 'Jordan Lee',
        initials: 'JL',
        monthlyAmount: 10
      },
      // Anonymous supporters
      {
        isAnonymous: true,
        monthlyAmount: 50
      },
      {
        isAnonymous: true,
        monthlyAmount: 25
      },
      {
        isAnonymous: true,
        monthlyAmount: 10
      },
      // More mix
      {
        name: 'Chris Martinez',
        avatarUrl: 'https://i.pravatar.cc/150?img=33',
        monthlyAmount: 100
      },
      {
        name: 'Pat Anderson',
        initials: 'PA',
        monthlyAmount: 50
      },
      {
        isAnonymous: true,
        monthlyAmount: 15
      },
      {
        name: 'Jamie Foster',
        avatarUrl: 'https://i.pravatar.cc/150?img=47',
        monthlyAmount: 25
      },
      {
        name: 'Morgan Blake',
        initials: 'MB',
        monthlyAmount: 10
      },
      {
        isAnonymous: true,
        monthlyAmount: 25
      }
    ]
  },
  
  'vue': {
    id: '2',
    slug: 'vue',
    name: 'Vue.js',
    tagline: 'The Progressive JavaScript Framework',
    description: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. Easy to integrate into projects and powerful enough for sophisticated Single-Page Applications.',
    logo: '🖖',
    category: ['JavaScript', 'UI Framework', 'Progressive'],
    
    githubUrl: 'https://github.com/vuejs/vue',
    docsUrl: 'https://vuejs.org',
    version: '3.3.0',
    license: 'MIT',
    stars: 205000,
    downloads: '10M+ weekly',
    yearsActive: 9,
    productionUsers: '5M+',
    
    maintainers: [
      {
        name: 'Evan You',
        photo: 'https://avatars.githubusercontent.com/u/499550?v=4',
        title: 'Creator & Lead Developer',
        bio: 'Full-time open source developer, created Vue.js and Vite. Passionate about making web development accessible and enjoyable for everyone.',
        yearsOnProject: 9,
        social: {
          github: 'yyx990803',
          twitter: 'youyuxi',
          linkedin: 'evanyou'
        },
        consultingStatus: 'available',
        expertise: ['Vue Architecture', 'Build Tools', 'Compiler Design', 'Framework Development'],
        verified: true,
        mergeRights: 'Full Access',
        highlightFact: 'Creator of Vue.js and Vite'
      },
      {
        name: 'Anthony Fu',
        photo: 'https://avatars.githubusercontent.com/u/11247099?v=4',
        title: 'Core Team Member',
        bio: 'Vue and Vite core team member. Creator of UnoCSS, VueUse, and Slidev. Building the future of developer tools.',
        yearsOnProject: 4,
        social: {
          github: 'antfu',
          twitter: 'antfu7'
        },
        consultingStatus: 'available',
        expertise: ['Vite', 'Developer Tools', 'TypeScript', 'Build Optimization'],
        verified: true,
        mergeRights: 'Full Access',
        highlightFact: 'Creator of UnoCSS, VueUse, and Slidev'
      }
    ],
    
    consultationRate: 400,
    supportContract: {
      monthlyPrice: 4000,
      hoursIncluded: 12,
      features: [
        'Priority bug fixes',
        'Architecture consultation',
        'Performance optimization',
        'Direct access to creator',
        'Custom plugin development',
        'Migration support'
      ]
    },
    customDevelopmentAvailable: true,
    
    donationTiers: {
      oneTime: [25, 50, 100, 250, 500, 1000],
      monthly: [
        {
          amount: 10,
          benefits: ['Sponsor badge', 'Newsletter access', 'Community recognition']
        },
        {
          amount: 50,
          benefits: ['All $10 benefits', 'Priority issue review', 'Early feature previews', 'Logo on website']
        },
        {
          amount: 100,
          benefits: ['All $50 benefits', 'Quarterly video call', 'Roadmap input', 'Enterprise support priority']
        }
      ]
    },
    
    features: [
      {
        icon: 'Layers',
        title: 'Progressive Framework',
        description: 'Start simple and scale up. Use as a library or full-featured framework based on your needs.',
        businessValue: 'Lower barrier to entry reduces training costs and accelerates developer onboarding'
      },
      {
        icon: 'FileCode',
        title: 'Single-File Components',
        description: 'Template, logic, and styles in one file. Clear separation with powerful composition.',
        businessValue: 'Improved developer experience leads to 35% faster feature delivery'
      },
      {
        icon: 'Gauge',
        title: 'Reactive & Performant',
        description: 'Fine-grained reactivity system that automatically optimizes re-renders for peak performance.',
        businessValue: 'Faster applications improve user engagement and SEO rankings'
      },
      {
        icon: 'Puzzle',
        title: 'Rich Ecosystem',
        description: 'Official router, state management, build tools, and CLI. Everything you need integrated.',
        businessValue: 'Complete solution reduces vendor fragmentation and integration complexity'
      }
    ],
    
    usedBy: ['Alibaba', 'Xiaomi', 'Adobe', 'Grammarly', 'GitLab', 'Nintendo', 'Louis Vuitton', 'BMW'],
    
    caseStudies: [
      {
        companyName: 'Alibaba',
        companyLogo: '🛒',
        challenge: 'Needed to modernize their e-commerce platform to handle billions of transactions during Singles\' Day.',
        solution: 'Rebuilt core shopping experience with Vue.js, leveraging SSR and progressive enhancement.',
        results: [
          '45% improvement in page speed',
          '99.99% uptime during peak traffic',
          '30% increase in conversion rates',
          'Handled 500K+ requests per second'
        ],
        quote: 'Vue.js gave us the perfect balance of performance and developer experience. It handles our massive scale effortlessly.',
        quotee: 'Li Wei',
        quoteeRole: 'VP of Engineering'
      }
    ],
    
    roadmap: {
      shipped: [
        {
          title: 'Composition API',
          description: 'Better logic reuse and code organization',
          quarter: 'Q3 2023'
        }
      ],
      inProgress: [
        {
          title: 'Vapor Mode',
          description: 'Compile-time optimizations for even better performance',
          quarter: 'Q2 2024'
        }
      ],
      upcoming: [
        {
          title: 'Enhanced TypeScript Support',
          description: 'First-class TypeScript integration with better type inference',
          quarter: 'Q3 2024'
        }
      ]
    },
    
    installCommand: 'npm create vue@latest',
    quickStartCode: `<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <h1>Hello Vue!</h1>
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>`,
    systemRequirements: [
      'Node.js 16.0.0 or higher',
      'npm 7.0.0 or higher',
      'Modern browser with ES6 support'
    ],
    
    communityLinks: {
      discord: 'https://discord.gg/vue',
      forum: 'https://forum.vuejs.org'
    },
    
    faqItems: [
      {
        question: 'How quickly can I get expert consultation?',
        answer: 'Initial consultation requests are reviewed within 12 hours. We offer flexible scheduling including evenings and weekends for different time zones.'
      },
      {
        question: 'What kind of migration support do you offer?',
        answer: 'We provide complete migration support from Vue 2 to Vue 3, or from other frameworks to Vue. This includes architecture planning, code migration, and team training.'
      },
      {
        question: 'Can donations be made by companies?',
        answer: 'Absolutely! We offer corporate sponsorship tiers with additional benefits like logo placement, priority support, and invoice-based billing.'
      },
      {
        question: 'Do you provide training for development teams?',
        answer: 'Yes, custom development contracts can include team training sessions, workshops, and ongoing mentorship programs.'
      }
    ],
    
    relatedProjects: ['vite', 'pinia', 'nuxt'],
    
    fundDistribution: {
      serviceProvider: 55,
      openSourceEconomy: 20,
      project: 15,
      dependencies: 10
    },
    
    supporterTiers: [
      {
        name: 'Bronze',
        icon: 'heart',
        accentColor: '#cd7f32',
        minAmount: 10,
        supporters: [
          { name: 'Nuxt', domain: 'nuxt.com' },
          { name: 'Vite', domain: 'vitejs.dev' },
          { name: 'Pinia', domain: 'pinia.vuejs.org' },
          { name: 'Quasar', domain: 'quasar.dev' }
        ],
        benefits: [
          'Sponsor badge',
          'Newsletter access',
          'Community recognition',
          'Early blog access'
        ]
      },
      {
        name: 'Silver',
        icon: 'star',
        accentColor: '#c0c0c0',
        minAmount: 50,
        supporters: [
          { name: 'GitLab', domain: 'gitlab.com' },
          { name: 'Adobe', domain: 'adobe.com' },
          { name: 'Grammarly', domain: 'grammarly.com' }
        ],
        benefits: [
          'All Bronze benefits',
          'Priority issue review',
          'Logo on website',
          'Early feature previews',
          'Monthly Q&A sessions'
        ]
      },
      {
        name: 'Gold',
        icon: 'award',
        accentColor: '#ffd700',
        minAmount: 250,
        supporters: [
          { name: 'Alibaba', domain: 'alibaba.com' },
          { name: 'Nintendo', domain: 'nintendo.com' }
        ],
        benefits: [
          'All Silver benefits',
          'Quarterly video calls',
          'Prominent logo placement',
          'Roadmap input',
          'Direct Discord access',
          'Enterprise support priority'
        ]
      },
      {
        name: 'Platinum',
        icon: 'crown',
        accentColor: '#e5e4e2',
        minAmount: 1000,
        supporters: [
          { name: 'Xiaomi', domain: 'mi.com' }
        ],
        benefits: [
          'All Gold benefits',
          'Dedicated support channel',
          'Strategic partnership status',
          'Custom development priority',
          'Executive updates',
          'Conference sponsorship opportunities'
        ]
      }
    ],
    
    individualSupporters: [
      // GitHub avatars
      {
        name: 'David Park',
        avatarUrl: 'https://i.pravatar.cc/150?img=13',
        monthlyAmount: 50
      },
      {
        name: 'Lisa Thompson',
        avatarUrl: 'https://i.pravatar.cc/150?img=9',
        monthlyAmount: 25
      },
      {
        name: 'Ryan Cooper',
        avatarUrl: 'https://i.pravatar.cc/150?img=15',
        monthlyAmount: 100
      },
      // Initial avatars
      {
        name: 'Quinn Davis',
        initials: 'QD',
        monthlyAmount: 25
      },
      {
        name: 'Avery Moore',
        initials: 'AM',
        monthlyAmount: 10
      },
      {
        name: 'Blake Wilson',
        initials: 'BW',
        monthlyAmount: 50
      },
      // Anonymous supporters
      {
        isAnonymous: true,
        monthlyAmount: 25
      },
      {
        isAnonymous: true,
        monthlyAmount: 50
      },
      {
        isAnonymous: true,
        monthlyAmount: 10
      },
      // More mix
      {
        name: 'Sasha Rivera',
        avatarUrl: 'https://i.pravatar.cc/150?img=20',
        monthlyAmount: 15
      },
      {
        name: 'Casey Wright',
        initials: 'CW',
        monthlyAmount: 25
      },
      {
        isAnonymous: true,
        monthlyAmount: 100
      },
      {
        name: 'Dakota Hill',
        avatarUrl: 'https://i.pravatar.cc/150?img=27',
        monthlyAmount: 50
      },
      {
        name: 'River Stone',
        initials: 'RS',
        monthlyAmount: 10
      },
      {
        isAnonymous: true,
        monthlyAmount: 25
      },
      {
        name: 'Skyler Green',
        avatarUrl: 'https://i.pravatar.cc/150?img=31',
        monthlyAmount: 15
      }
    ]
  }
};

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectDetail | null {
  return projectDetailData[slug] || null;
}

// Get all project slugs for navigation
export function getAllProjectSlugs(): string[] {
  return Object.keys(projectDetailData);
}