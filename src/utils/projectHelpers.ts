/**
 * Utility functions for project data formatting
 */

export const getProjectTypeLabel = (type?: string): string => {
  switch (type) {
    case 'github_repo': return 'GitHub Repository';
    case 'github_org': return 'GitHub Organization';
    case 'other_url': return 'Other URL';
    default: return 'Unknown';
  }
};

export const getRoleLabel = (role: string): string => {
  return role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const getAccessLabel = (access: string): string => {
  switch (access) {
    case 'full_write': return 'Full Write';
    case 'write_with_review': return 'Write (Review)';
    case 'read_only': return 'Read Only';
    default: return access;
  }
};

export const getProjectName = (url: string): string => {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/').filter(Boolean);
    if (pathParts.length >= 2) {
      return `${pathParts[pathParts.length - 2]}/${pathParts[pathParts.length - 1]}`;
    }
    return urlObj.hostname;
  } catch {
    return url;
  }
};

export const getAccessLevelClassName = (access: string): string => {
  if (access === 'full_write') {
    return 'bg-brand-success/10 text-brand-success border border-brand-success/20';
  }
  if (access === 'write_with_review') {
    return 'bg-brand-warning/10 text-brand-warning border border-brand-warning/20';
  }
  return 'bg-brand-neutral-300/20 text-brand-neutral-600 border border-brand-neutral-300/30';
};
