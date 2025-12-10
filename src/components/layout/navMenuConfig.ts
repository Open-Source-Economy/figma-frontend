import type { NavDropdownItem } from './NavDropdown';

export interface NavMenuConfig {
  title: string;
  items: NavDropdownItem[];
  variant?: 'default' | 'admin';
}

export const projectsMenuConfig: NavMenuConfig = {
  title: 'Projects',
  items: [
    { label: 'Browse Projects', href: 'projects' },
    { label: 'View Project Example', href: 'project-detail' },
    { label: 'Common Pot Example', href: 'common-pot' },
    { label: 'Request a Project', href: 'request-project' },
  ],
};

export const maintainersMenuConfig: NavMenuConfig = {
  title: 'Maintainers',
  items: [
    { label: 'Browse Directory', href: 'maintainers-directory' },
    { label: 'View Profile Example', href: 'maintainer-profile' },
    { label: 'Register as Maintainer', href: 'maintainer-registration' },
  ],
};

export const examplesMenuConfig: NavMenuConfig = {
  title: 'Examples',
  items: [
    { label: 'Server Error Alert', href: 'error-examples' },
    { label: 'Loading States', href: 'loading-examples' },
    { label: 'Typography Levels', href: 'heading-levels' },
    { label: 'Developer Onboarding', href: 'developer-onboarding' },
    { label: 'Onboarding Success', href: 'onboarding-success' },
  ],
};

export const sponsorMenuConfig: NavMenuConfig = {
  title: 'Sponsor',
  items: [
    { label: 'Overview', href: 'sponsor-landing' },
    { label: 'Individual Support', href: 'sponsor-individual' },
    { label: 'Enterprise Partnership', href: 'sponsor-enterprise' },
  ],
};

export const adminMenuConfig: NavMenuConfig = {
  title: 'Admin',
  variant: 'admin',
  items: [
    { label: 'Dashboard', href: 'admin' },
    { label: 'Onboarding Review', href: 'admin-onboarding' },
    { label: 'Maintainer Verification', href: 'admin-verification' },
  ],
};

// Map of menu titles to their configurations
export const dropdownMenus: Record<string, NavMenuConfig> = {
  'Projects': projectsMenuConfig,
  'Maintainers': maintainersMenuConfig,
  'Sponsor': sponsorMenuConfig,
  'Examples': examplesMenuConfig,
  'Admin': adminMenuConfig,
};
