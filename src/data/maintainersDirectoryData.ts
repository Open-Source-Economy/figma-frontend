/**
 * Maintainers Directory Data
 * Mock data for the maintainers directory page
 */

export interface MaintainerProject {
  projectName: string;
  projectSlug: string;
  role: 'Maintainer' | 'Contributor' | 'Reviewer' | 'Admin' | 'Core Team';
  mergingRights: 'none' | 'review' | 'merge' | 'admin';
}

export interface MaintainerDirectoryEntry {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  isVerified: boolean; // Attestation status
  verifiedAt?: string;
  verifiedBy?: string;
  projects: MaintainerProject[];
  joinedDate: string;
  location?: string;
  bio?: string;
}

// Mock maintainers data
export const MOCK_MAINTAINERS: MaintainerDirectoryEntry[] = [
  {
    id: 'm1',
    name: 'Sarah Chen',
    username: 'sarahchen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    isVerified: true,
    verifiedAt: '2024-01-15',
    verifiedBy: 'admin',
    joinedDate: '2023-08-10',
    location: 'San Francisco, CA',
    bio: 'Open source enthusiast, React core contributor',
    projects: [
      {
        projectName: 'React',
        projectSlug: 'react',
        role: 'Core Team',
        mergingRights: 'admin'
      },
      {
        projectName: 'TypeScript',
        projectSlug: 'typescript',
        role: 'Contributor',
        mergingRights: 'review'
      },
      {
        projectName: 'Next.js',
        projectSlug: 'nextjs',
        role: 'Maintainer',
        mergingRights: 'merge'
      }
    ]
  },
  {
    id: 'm2',
    name: 'Marcus Johnson',
    username: 'marcusj',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    isVerified: true,
    verifiedAt: '2024-02-20',
    verifiedBy: 'admin',
    joinedDate: '2023-09-15',
    location: 'Austin, TX',
    bio: 'Backend systems architect, database optimization expert',
    projects: [
      {
        projectName: 'PostgreSQL',
        projectSlug: 'postgresql',
        role: 'Maintainer',
        mergingRights: 'merge'
      },
      {
        projectName: 'Redis',
        projectSlug: 'redis',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm3',
    name: 'Elena Rodriguez',
    username: 'elenarodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    isVerified: false,
    joinedDate: '2024-01-05',
    location: 'Barcelona, Spain',
    bio: 'Full-stack developer, accessibility advocate',
    projects: [
      {
        projectName: 'Vue.js',
        projectSlug: 'vue',
        role: 'Contributor',
        mergingRights: 'review'
      },
      {
        projectName: 'Webpack',
        projectSlug: 'webpack',
        role: 'Reviewer',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm4',
    name: 'David Kim',
    username: 'davidkim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    isVerified: true,
    verifiedAt: '2024-01-10',
    verifiedBy: 'admin',
    joinedDate: '2023-07-20',
    location: 'Seattle, WA',
    bio: 'Cloud infrastructure specialist, Kubernetes contributor',
    projects: [
      {
        projectName: 'Kubernetes',
        projectSlug: 'kubernetes',
        role: 'Core Team',
        mergingRights: 'admin'
      },
      {
        projectName: 'Docker',
        projectSlug: 'docker',
        role: 'Maintainer',
        mergingRights: 'merge'
      },
      {
        projectName: 'Terraform',
        projectSlug: 'terraform',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm5',
    name: 'Aisha Patel',
    username: 'aishapatel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    isVerified: true,
    verifiedAt: '2024-02-01',
    verifiedBy: 'admin',
    joinedDate: '2023-10-12',
    location: 'London, UK',
    bio: 'Security researcher, cryptography expert',
    projects: [
      {
        projectName: 'OpenSSL',
        projectSlug: 'openssl',
        role: 'Maintainer',
        mergingRights: 'merge'
      },
      {
        projectName: 'Node.js',
        projectSlug: 'nodejs',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm6',
    name: 'Takeshi Yamamoto',
    username: 'takeshiy',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200',
    isVerified: false,
    joinedDate: '2024-02-15',
    location: 'Tokyo, Japan',
    bio: 'Performance optimization enthusiast',
    projects: [
      {
        projectName: 'V8',
        projectSlug: 'v8',
        role: 'Contributor',
        mergingRights: 'none'
      },
      {
        projectName: 'Chrome DevTools',
        projectSlug: 'chrome-devtools',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm7',
    name: 'Maria Silva',
    username: 'mariasilva',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200',
    isVerified: true,
    verifiedAt: '2024-01-25',
    verifiedBy: 'admin',
    joinedDate: '2023-11-01',
    location: 'São Paulo, Brazil',
    bio: 'DevOps engineer, CI/CD pipeline expert',
    projects: [
      {
        projectName: 'Jenkins',
        projectSlug: 'jenkins',
        role: 'Maintainer',
        mergingRights: 'merge'
      },
      {
        projectName: 'GitLab',
        projectSlug: 'gitlab',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm8',
    name: 'James O\'Connor',
    username: 'jamesoconnor',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200',
    isVerified: false,
    joinedDate: '2024-03-01',
    location: 'Dublin, Ireland',
    bio: 'Python developer, machine learning enthusiast',
    projects: [
      {
        projectName: 'TensorFlow',
        projectSlug: 'tensorflow',
        role: 'Contributor',
        mergingRights: 'none'
      }
    ]
  },
  {
    id: 'm9',
    name: 'Priya Sharma',
    username: 'priyasharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
    isVerified: true,
    verifiedAt: '2024-02-10',
    verifiedBy: 'admin',
    joinedDate: '2023-09-20',
    location: 'Bangalore, India',
    bio: 'Mobile development expert, Flutter contributor',
    projects: [
      {
        projectName: 'Flutter',
        projectSlug: 'flutter',
        role: 'Core Team',
        mergingRights: 'admin'
      },
      {
        projectName: 'Dart',
        projectSlug: 'dart',
        role: 'Maintainer',
        mergingRights: 'merge'
      }
    ]
  },
  {
    id: 'm10',
    name: 'Alex Novak',
    username: 'alexnovak',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    isVerified: true,
    verifiedAt: '2024-01-30',
    verifiedBy: 'admin',
    joinedDate: '2023-08-25',
    location: 'Berlin, Germany',
    bio: 'Rust evangelist, systems programming expert',
    projects: [
      {
        projectName: 'Rust',
        projectSlug: 'rust',
        role: 'Core Team',
        mergingRights: 'admin'
      },
      {
        projectName: 'Cargo',
        projectSlug: 'cargo',
        role: 'Maintainer',
        mergingRights: 'merge'
      }
    ]
  },
  {
    id: 'm11',
    name: 'Sophie Laurent',
    username: 'sophielaurent',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    isVerified: false,
    joinedDate: '2024-02-28',
    location: 'Paris, France',
    bio: 'Frontend architect, CSS expert',
    projects: [
      {
        projectName: 'Tailwind CSS',
        projectSlug: 'tailwindcss',
        role: 'Contributor',
        mergingRights: 'review'
      },
      {
        projectName: 'PostCSS',
        projectSlug: 'postcss',
        role: 'Reviewer',
        mergingRights: 'review'
      }
    ]
  },
  {
    id: 'm12',
    name: 'Omar Hassan',
    username: 'omarhassan',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200',
    isVerified: true,
    verifiedAt: '2024-02-05',
    verifiedBy: 'admin',
    joinedDate: '2023-10-30',
    location: 'Dubai, UAE',
    bio: 'GraphQL specialist, API design expert',
    projects: [
      {
        projectName: 'GraphQL',
        projectSlug: 'graphql',
        role: 'Maintainer',
        mergingRights: 'merge'
      },
      {
        projectName: 'Apollo',
        projectSlug: 'apollo',
        role: 'Contributor',
        mergingRights: 'review'
      }
    ]
  }
];

// Helper functions
export function getMaintainerById(id: string): MaintainerDirectoryEntry | undefined {
  return MOCK_MAINTAINERS.find(m => m.id === id);
}

export function getMaintainersByVerificationStatus(isVerified: boolean): MaintainerDirectoryEntry[] {
  return MOCK_MAINTAINERS.filter(m => m.isVerified === isVerified);
}

export function searchMaintainers(query: string): MaintainerDirectoryEntry[] {
  const lowerQuery = query.toLowerCase();
  return MOCK_MAINTAINERS.filter(m => 
    m.name.toLowerCase().includes(lowerQuery) ||
    m.username.toLowerCase().includes(lowerQuery)
  );
}

export function sortMaintainers(
  maintainers: MaintainerDirectoryEntry[],
  sortBy: 'name' | 'verified' | 'projects' | 'recent'
): MaintainerDirectoryEntry[] {
  const sorted = [...maintainers];
  
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'verified':
      return sorted.sort((a, b) => {
        if (a.isVerified === b.isVerified) return 0;
        return a.isVerified ? -1 : 1;
      });
    case 'projects':
      return sorted.sort((a, b) => b.projects.length - a.projects.length);
    case 'recent':
      return sorted.sort((a, b) => 
        new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
      );
    default:
      return sorted;
  }
}
