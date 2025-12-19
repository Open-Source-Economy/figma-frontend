export interface Person {
  name: string;
  role: string;
  githubUrl: string;
  avatarUrl: string;
  project?: string;
}

export const volunteers: Person[] = [
  {
    name: 'Sarah Chen',
    role: 'Community Coordinator',
    githubUrl: 'https://github.com/sarahchen',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Enterprise Outreach',
    githubUrl: 'https://github.com/mrodriguez',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: 'Yuki Tanaka',
    role: 'Developer Relations',
    githubUrl: 'https://github.com/yukitanaka',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
  {
    name: 'James Wilson',
    role: 'Operations Lead',
    githubUrl: 'https://github.com/jwilson',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  }
];

export const maintainers: Person[] = [
  {
    name: 'Emily Zhang',
    role: 'Maintainer',
    project: 'react-query',
    githubUrl: 'https://github.com/emilyzhang',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
  },
  {
    name: 'Ahmed Hassan',
    role: 'Core Contributor',
    project: 'webpack',
    githubUrl: 'https://github.com/ahmedhassan',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
  },
  {
    name: 'Sofia Andersson',
    role: 'Lead Maintainer',
    project: 'vue',
    githubUrl: 'https://github.com/sofiaandersson',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop'
  },
  {
    name: 'Raj Patel',
    role: 'Maintainer',
    project: 'typescript-eslint',
    githubUrl: 'https://github.com/rajpatel',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
  },
  {
    name: 'Marie Dubois',
    role: 'Core Team',
    project: 'vite',
    githubUrl: 'https://github.com/mariedubois',
    avatarUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop'
  },
  {
    name: 'Chen Wei',
    role: 'Maintainer',
    project: 'lodash',
    githubUrl: 'https://github.com/chenwei',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  }
];
