import { 
  Code2, 
  Database, 
  Layers, 
  Terminal, 
  Cpu, 
  Shield, 
  Globe, 
  Zap,
  Smartphone,
  Package,
  GitBranch,
  Server
} from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  category: string;
  maintainers: number;
  stars: string;
  forks: string;
  language: string;
  languages: string[];
  status: 'featured' | 'trending' | 'new' | 'active';
  icon: any;
  lastUpdated: string;
  githubUrl: string;
  website?: string;
  license: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  isOrganization?: boolean;
}

export const projectsDatabase: ProjectData[] = [
  // Frontend Framework
  {
    id: 'react',
    name: 'React',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    category: 'Frontend Framework',
    maintainers: 1500,
    stars: '220k',
    forks: '45k',
    language: 'JavaScript',
    languages: ['JavaScript', 'TypeScript'],
    status: 'featured',
    icon: Code2,
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/facebook/react',
    website: 'https://reactjs.org',
    license: 'MIT',
    tags: ['ui', 'components', 'javascript'],
    featured: true,
    trending: true,
    isOrganization: true
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'Progressive JavaScript framework for building modern web interfaces.',
    category: 'Frontend Framework',
    maintainers: 800,
    stars: '207k',
    forks: '34k',
    language: 'TypeScript',
    languages: ['TypeScript', 'JavaScript'],
    status: 'featured',
    icon: Code2,
    lastUpdated: '5 hours ago',
    githubUrl: 'https://github.com/vuejs/vue',
    website: 'https://vuejs.org',
    license: 'MIT',
    tags: ['ui', 'framework', 'progressive'],
    featured: true
  },
  {
    id: 'angular',
    name: 'Angular',
    description: 'Platform for building mobile and desktop web applications.',
    category: 'Frontend Framework',
    maintainers: 1200,
    stars: '95k',
    forks: '25k',
    language: 'TypeScript',
    languages: ['TypeScript', 'JavaScript'],
    status: 'active',
    icon: Code2,
    lastUpdated: '4 hours ago',
    githubUrl: 'https://github.com/angular/angular',
    website: 'https://angular.io',
    license: 'MIT',
    tags: ['framework', 'typescript', 'enterprise'],
    featured: false,
    isOrganization: true
  },
  {
    id: 'svelte',
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps with a unique compile-time approach.',
    category: 'Frontend Framework',
    maintainers: 400,
    stars: '77k',
    forks: '4k',
    language: 'TypeScript',
    languages: ['TypeScript', 'JavaScript'],
    status: 'trending',
    icon: Code2,
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/sveltejs/svelte',
    website: 'https://svelte.dev',
    license: 'MIT',
    tags: ['compiler', 'reactive', 'performance'],
    trending: true
  },
  
  // Infrastructure
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'Production-Grade Container Orchestration for automating deployment and scaling.',
    category: 'Infrastructure',
    maintainers: 3200,
    stars: '108k',
    forks: '39k',
    language: 'Go',
    languages: ['Go', 'Shell'],
    status: 'featured',
    icon: Layers,
    lastUpdated: '1 hour ago',
    githubUrl: 'https://github.com/kubernetes/kubernetes',
    website: 'https://kubernetes.io',
    license: 'Apache-2.0',
    tags: ['containers', 'orchestration', 'devops'],
    featured: true,
    trending: true,
    isOrganization: true
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Platform for developing, shipping, and running applications in containers.',
    category: 'Infrastructure',
    maintainers: 2100,
    stars: '68k',
    forks: '18k',
    language: 'Go',
    languages: ['Go', 'Shell'],
    status: 'featured',
    icon: Server,
    lastUpdated: '3 hours ago',
    githubUrl: 'https://github.com/docker/docker-ce',
    website: 'https://docker.com',
    license: 'Apache-2.0',
    tags: ['containers', 'virtualization', 'deployment'],
    featured: true,
    isOrganization: true
  },
  {
    id: 'terraform',
    name: 'Terraform',
    description: 'Infrastructure as Code to provision and manage cloud resources.',
    category: 'Infrastructure',
    maintainers: 1800,
    stars: '42k',
    forks: '9.2k',
    language: 'Go',
    languages: ['Go', 'HCL'],
    status: 'active',
    icon: Layers,
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/hashicorp/terraform',
    website: 'https://terraform.io',
    license: 'MPL-2.0',
    tags: ['iac', 'cloud', 'automation'],
    featured: false,
    isOrganization: true
  },
  {
    id: 'ansible',
    name: 'Ansible',
    description: 'Automation platform for configuration management and application deployment.',
    category: 'Infrastructure',
    maintainers: 1500,
    stars: '62k',
    forks: '23k',
    language: 'Python',
    languages: ['Python', 'YAML'],
    status: 'active',
    icon: Server,
    lastUpdated: '6 hours ago',
    githubUrl: 'https://github.com/ansible/ansible',
    website: 'https://ansible.com',
    license: 'GPL-3.0',
    tags: ['automation', 'configuration', 'devops'],
    featured: false
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    description: 'Monitoring system and time series database for cloud-native applications.',
    category: 'Infrastructure',
    maintainers: 900,
    stars: '54k',
    forks: '8.9k',
    language: 'Go',
    languages: ['Go'],
    status: 'active',
    icon: Zap,
    lastUpdated: '4 hours ago',
    githubUrl: 'https://github.com/prometheus/prometheus',
    website: 'https://prometheus.io',
    license: 'Apache-2.0',
    tags: ['monitoring', 'metrics', 'observability'],
    featured: false
  },

  // Machine Learning
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'An end-to-end open source platform for machine learning applications.',
    category: 'Machine Learning',
    maintainers: 2100,
    stars: '185k',
    forks: '74k',
    language: 'Python',
    languages: ['Python', 'C++'],
    status: 'featured',
    icon: Cpu,
    lastUpdated: '3 hours ago',
    githubUrl: 'https://github.com/tensorflow/tensorflow',
    website: 'https://tensorflow.org',
    license: 'Apache-2.0',
    tags: ['machine-learning', 'ai', 'python'],
    featured: true,
    isOrganization: true
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    description: 'Deep learning framework with strong GPU acceleration and dynamic computation.',
    category: 'Machine Learning',
    maintainers: 1900,
    stars: '80k',
    forks: '21k',
    language: 'Python',
    languages: ['Python', 'C++'],
    status: 'featured',
    icon: Cpu,
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/pytorch/pytorch',
    website: 'https://pytorch.org',
    license: 'BSD-3-Clause',
    tags: ['deep-learning', 'neural-networks', 'gpu'],
    featured: true,
    trending: true,
    isOrganization: true
  },
  {
    id: 'scikit-learn',
    name: 'scikit-learn',
    description: 'Machine learning library featuring classification, regression and clustering algorithms.',
    category: 'Machine Learning',
    maintainers: 800,
    stars: '59k',
    forks: '25k',
    language: 'Python',
    languages: ['Python', 'Cython'],
    status: 'active',
    icon: Cpu,
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/scikit-learn/scikit-learn',
    website: 'https://scikit-learn.org',
    license: 'BSD-3-Clause',
    tags: ['machine-learning', 'algorithms', 'data-science'],
    featured: false
  },

  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'The world\'s most advanced open source relational database system.',
    category: 'Database',
    maintainers: 450,
    stars: '15k',
    forks: '4.2k',
    language: 'C',
    languages: ['C', 'SQL'],
    status: 'active',
    icon: Database,
    lastUpdated: '4 hours ago',
    githubUrl: 'https://github.com/postgres/postgres',
    website: 'https://postgresql.org',
    license: 'PostgreSQL',
    tags: ['database', 'sql', 'relational']
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data structure store used as database, cache, and message broker.',
    category: 'Database',
    maintainers: 380,
    stars: '66k',
    forks: '24k',
    language: 'C',
    languages: ['C'],
    status: 'featured',
    icon: Database,
    lastUpdated: '5 hours ago',
    githubUrl: 'https://github.com/redis/redis',
    website: 'https://redis.io',
    license: 'BSD-3-Clause',
    tags: ['cache', 'in-memory', 'key-value'],
    featured: true
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Document-oriented NoSQL database for modern applications.',
    category: 'Database',
    maintainers: 1200,
    stars: '26k',
    forks: '5.7k',
    language: 'C++',
    languages: ['C++', 'JavaScript'],
    status: 'active',
    icon: Database,
    lastUpdated: '3 hours ago',
    githubUrl: 'https://github.com/mongodb/mongo',
    website: 'https://mongodb.com',
    license: 'SSPL',
    tags: ['nosql', 'document', 'database'],
    featured: false
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    description: 'Distributed search and analytics engine built on Apache Lucene.',
    category: 'Database',
    maintainers: 1600,
    stars: '69k',
    forks: '24k',
    language: 'Java',
    languages: ['Java'],
    status: 'active',
    icon: Database,
    lastUpdated: '2 hours ago',
    githubUrl: 'https://github.com/elastic/elasticsearch',
    website: 'https://elastic.co',
    license: 'Elastic-2.0',
    tags: ['search', 'analytics', 'distributed'],
    featured: false
  },

  // Runtime
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome\'s V8 engine for scalable applications.',
    category: 'Runtime',
    maintainers: 1800,
    stars: '105k',
    forks: '28k',
    language: 'JavaScript',
    languages: ['JavaScript', 'C++'],
    status: 'active',
    icon: Terminal,
    lastUpdated: '6 hours ago',
    githubUrl: 'https://github.com/nodejs/node',
    website: 'https://nodejs.org',
    license: 'MIT',
    tags: ['runtime', 'javascript', 'backend']
  },
  {
    id: 'deno',
    name: 'Deno',
    description: 'A secure runtime for JavaScript and TypeScript with built-in tooling.',
    category: 'Runtime',
    maintainers: 600,
    stars: '94k',
    forks: '5.2k',
    language: 'Rust',
    languages: ['Rust', 'TypeScript'],
    status: 'trending',
    icon: Terminal,
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/denoland/deno',
    website: 'https://deno.land',
    license: 'MIT',
    tags: ['runtime', 'typescript', 'secure'],
    trending: true
  },

  // Programming Language
  {
    id: 'rust',
    name: 'Rust',
    description: 'A language for building reliable and efficient software with memory safety.',
    category: 'Programming Language',
    maintainers: 950,
    stars: '96k',
    forks: '12k',
    language: 'Rust',
    languages: ['Rust', 'C++'],
    status: 'featured',
    icon: Code2,
    lastUpdated: '1 hour ago',
    githubUrl: 'https://github.com/rust-lang/rust',
    website: 'https://rust-lang.org',
    license: 'MIT',
    tags: ['systems', 'memory-safe', 'performance'],
    featured: true
  },
  {
    id: 'python',
    name: 'Python',
    description: 'High-level programming language emphasizing code readability and simplicity.',
    category: 'Programming Language',
    maintainers: 1100,
    stars: '62k',
    forks: '30k',
    language: 'Python',
    languages: ['Python', 'C'],
    status: 'active',
    icon: Code2,
    lastUpdated: '12 hours ago',
    githubUrl: 'https://github.com/python/cpython',
    website: 'https://python.org',
    license: 'PSF',
    tags: ['language', 'interpreted', 'general-purpose'],
    featured: false
  },
  {
    id: 'go',
    name: 'Go',
    description: 'Statically typed language designed for building simple, reliable, and efficient software.',
    category: 'Programming Language',
    maintainers: 800,
    stars: '122k',
    forks: '17k',
    language: 'Go',
    languages: ['Go', 'Assembly'],
    status: 'active',
    icon: Code2,
    lastUpdated: '8 hours ago',
    githubUrl: 'https://github.com/golang/go',
    website: 'https://go.dev',
    license: 'BSD-3-Clause',
    tags: ['language', 'concurrent', 'compiled'],
    featured: false
  },

  // Security
  {
    id: 'openssl',
    name: 'OpenSSL',
    description: 'Robust, commercial-grade cryptography library and toolkit.',
    category: 'Security',
    maintainers: 320,
    stars: '25k',
    forks: '10k',
    language: 'C',
    languages: ['C', 'Perl'],
    status: 'active',
    icon: Shield,
    lastUpdated: '1 day ago',
    githubUrl: 'https://github.com/openssl/openssl',
    website: 'https://openssl.org',
    license: 'Apache-2.0',
    tags: ['cryptography', 'ssl', 'security'],
    featured: false
  },
  {
    id: 'oauth2-proxy',
    name: 'OAuth2 Proxy',
    description: 'Reverse proxy providing authentication using OAuth 2.0 providers.',
    category: 'Security',
    maintainers: 180,
    stars: '9k',
    forks: '1.5k',
    language: 'Go',
    languages: ['Go'],
    status: 'active',
    icon: Shield,
    lastUpdated: '3 days ago',
    githubUrl: 'https://github.com/oauth2-proxy/oauth2-proxy',
    license: 'MIT',
    tags: ['oauth', 'authentication', 'proxy'],
    featured: false
  },
  {
    id: 'vault',
    name: 'HashiCorp Vault',
    description: '',
    category: 'Security',
    maintainers: 650,
    stars: '31k',
    forks: '4.2k',
    language: 'Go',
    languages: ['Go'],
    status: 'featured',
    icon: Shield,
    lastUpdated: '1 hour ago',
    githubUrl: 'https://github.com/hashicorp/vault',
    website: 'https://vaultproject.io',
    license: 'MPL-2.0',
    tags: ['secrets', 'security', 'vault'],
    featured: true,
    isOrganization: true
  }
];

export const categories = Array.from(new Set(projectsDatabase.map(p => p.category))).sort();

export const languages = Array.from(new Set(projectsDatabase.map(p => p.language))).sort();

export function getProjectsByCategory(): Record<string, ProjectData[]> {
  return projectsDatabase.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, ProjectData[]>);
}

export function searchProjects(query: string): ProjectData[] {
  const lowerQuery = query.toLowerCase();
  return projectsDatabase.filter(project =>
    project.name.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getProjectStats() {
  const totalStars = projectsDatabase.reduce((sum, p) => {
    const stars = parseInt(p.stars.replace('k', '000').replace('M', '000000'));
    return sum + stars;
  }, 0);
  
  const totalForks = projectsDatabase.reduce((sum, p) => {
    const forks = parseInt(p.forks.replace('k', '000').replace('M', '000000'));
    return sum + forks;
  }, 0);
  
  const totalMaintainers = projectsDatabase.reduce((sum, p) => sum + p.maintainers, 0);
  
  return {
    totalProjects: projectsDatabase.length,
    totalStars: totalStars > 1000000 ? `${(totalStars / 1000000).toFixed(1)}M` : `${Math.round(totalStars / 1000)}k`,
    totalForks: totalForks > 1000000 ? `${(totalForks / 1000000).toFixed(1)}M` : `${Math.round(totalForks / 1000)}k`,
    totalMaintainers
  };
}
