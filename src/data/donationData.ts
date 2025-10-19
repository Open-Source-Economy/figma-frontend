// Donation Data Structure
// Defines donation tiers, fund distribution, and impact metrics

export interface DonationTier {
  id: string;
  amount: number;
  label: string;
  description: string;
  impact: string[];
  popular?: boolean;
  isCustom?: boolean;
}

export interface FundDistribution {
  toProject: number;          // Percentage
  toDependencies: number;     // Percentage
  toPlatform: number;         // Percentage
  toMaintainers: number;      // Percentage
}

export interface DonationPageData {
  projectName: string;
  projectSlug: string;
  fundDistribution: FundDistribution;
  oneTimeTiers: DonationTier[];
  monthlyTiers: DonationTier[];
  impactMetrics: {
    title: string;
    description: string;
  }[];
}

// Standard fund distribution (can be customized per project)
export const standardFundDistribution: FundDistribution = {
  toProject: 40,
  toDependencies: 20,
  toPlatform: 10,
  toMaintainers: 30
};

// One-time donation tiers
export const oneTimeDonationTiers: DonationTier[] = [
  {
    id: 'one-time-25',
    amount: 25,
    label: 'Supporter',
    description: 'Help cover infrastructure costs',
    impact: [
      'Supports 1 hour of server infrastructure',
      'Helps maintain project documentation',
      'Contributes to dependency updates'
    ]
  },
  {
    id: 'one-time-50',
    amount: 50,
    label: 'Contributor',
    description: 'Fund bug fixes and improvements',
    impact: [
      'Sponsors 2 hours of maintainer time',
      'Helps resolve minor bugs',
      'Supports community forum moderation'
    ]
  },
  {
    id: 'one-time-100',
    amount: 100,
    label: 'Champion',
    description: 'Enable feature development',
    impact: [
      'Funds 4 hours of development work',
      'Supports security updates',
      'Enables dependency upgrades'
    ],
    popular: true
  },
  {
    id: 'one-time-250',
    amount: 250,
    label: 'Advocate',
    description: 'Drive significant improvements',
    impact: [
      'Sponsors 10 hours of focused work',
      'Funds major bug fixes',
      'Supports comprehensive testing'
    ]
  },
  {
    id: 'one-time-500',
    amount: 500,
    label: 'Patron',
    description: 'Power major enhancements',
    impact: [
      'Funds 20 hours of development',
      'Enables new feature development',
      'Supports full dependency audits'
    ]
  },
  {
    id: 'one-time-custom',
    amount: 0,
    label: 'Custom',
    description: 'Choose your amount',
    impact: [
      'Custom impact based on your contribution'
    ],
    isCustom: true
  }
];

// Monthly donation tiers (recurring)
export const monthlyDonationTiers: DonationTier[] = [
  {
    id: 'monthly-10',
    amount: 10,
    label: 'Friend',
    description: 'Consistent support',
    impact: [
      'Annual impact: $120',
      'Sustains ongoing development',
      'Enables long-term planning'
    ]
  },
  {
    id: 'monthly-25',
    amount: 25,
    label: 'Supporter',
    description: 'Regular contributions',
    impact: [
      'Annual impact: $300',
      'Funds monthly maintenance cycles',
      'Supports stable releases'
    ]
  },
  {
    id: 'monthly-50',
    amount: 50,
    label: 'Backer',
    description: 'Meaningful recurring support',
    impact: [
      'Annual impact: $600',
      'Enables feature roadmap planning',
      'Supports dedicated maintainer time'
    ],
    popular: true
  },
  {
    id: 'monthly-100',
    amount: 100,
    label: 'Sponsor',
    description: 'Substantial ongoing impact',
    impact: [
      'Annual impact: $1,200',
      'Funds major features',
      'Enables priority support'
    ]
  },
  {
    id: 'monthly-250',
    amount: 250,
    label: 'Partner',
    description: 'Strategic support',
    impact: [
      'Annual impact: $3,000',
      'Funds dedicated development time',
      'Includes quarterly planning sessions'
    ]
  },
  {
    id: 'monthly-custom',
    amount: 0,
    label: 'Custom',
    description: 'Choose your amount',
    impact: [
      'Custom recurring impact'
    ],
    isCustom: true
  }
];

// Calculate actual dollar breakdown
export function calculateDonationBreakdown(amount: number, distribution: FundDistribution) {
  return {
    total: amount,
    toProject: Math.round((amount * distribution.toProject) / 100),
    toDependencies: Math.round((amount * distribution.toDependencies) / 100),
    toPlatform: Math.round((amount * distribution.toPlatform) / 100),
    toMaintainers: Math.round((amount * distribution.toMaintainers) / 100)
  };
}

// Impact metrics that apply to all donations
export const defaultImpactMetrics = [
  {
    title: 'Sustain Development',
    description: 'Your contribution directly funds ongoing development, bug fixes, and security updates.'
  },
  {
    title: 'Support Dependencies',
    description: 'A portion supports the entire dependency chain, ensuring ecosystem health.'
  },
  {
    title: 'Enable Innovation',
    description: 'Funds research and development of new features that benefit the entire community.'
  },
  {
    title: 'Maintain Infrastructure',
    description: 'Keeps servers running, documentation updated, and CI/CD systems operational.'
  }
];

// Sample donation page data for a project
export function getDonationPageData(projectSlug: string): DonationPageData {
  // In a real app, this would fetch from an API based on projectSlug
  return {
    projectName: 'React',
    projectSlug: projectSlug,
    fundDistribution: standardFundDistribution,
    oneTimeTiers: oneTimeDonationTiers,
    monthlyTiers: monthlyDonationTiers,
    impactMetrics: defaultImpactMetrics
  };
}
