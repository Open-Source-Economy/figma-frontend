/**
 * Environment Detection Utility
 * 
 * Determines the current runtime environment for conditional feature rendering.
 * Supports production, staging, and development modes.
 */

export type Environment = 'production' | 'staging' | 'development';

/**
 * Get the current environment mode
 * 
 * Checks multiple sources to determine environment:
 * 1. NODE_ENV environment variable
 * 2. Custom REACT_APP_ENV variable
 * 3. Hostname patterns
 * 4. Development indicators
 */
export function getEnvironment(): Environment {
  // Check for demo environment override (for examples page)
  if (typeof window !== 'undefined' && (window as any).__DEMO_ENV__) {
    return (window as any).__DEMO_ENV__;
  }
  
  // Check explicit environment variables
  if (typeof process !== 'undefined' && process.env) {
    const nodeEnv = process.env.NODE_ENV;
    const reactEnv = process.env.REACT_APP_ENV;
    
    if (reactEnv === 'production' || nodeEnv === 'production') {
      return 'production';
    }
    
    if (reactEnv === 'staging') {
      return 'staging';
    }
    
    if (reactEnv === 'development' || nodeEnv === 'development') {
      return 'development';
    }
  }
  
  // Check hostname patterns if in browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // Production patterns
    if (
      hostname === 'opensourceeconomy.org' ||
      hostname === 'www.opensourceeconomy.org' ||
      hostname.includes('opensourceeconomy.org')
    ) {
      return 'production';
    }
    
    // Staging patterns
    if (
      hostname.includes('staging') ||
      hostname.includes('stage') ||
      hostname.includes('preview')
    ) {
      return 'staging';
    }
    
    // Development patterns
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname.includes('local') ||
      hostname.includes('dev')
    ) {
      return 'development';
    }
  }
  
  // Default to development for safety (show all errors during development)
  return 'development';
}

/**
 * Check if currently in production environment
 */
export function isProduction(): boolean {
  return getEnvironment() === 'production';
}

/**
 * Check if currently in staging environment
 */
export function isStaging(): boolean {
  return getEnvironment() === 'staging';
}

/**
 * Check if currently in development environment
 */
export function isDevelopment(): boolean {
  return getEnvironment() === 'development';
}

/**
 * Check if in production or staging (non-development)
 */
export function isProductionLike(): boolean {
  const env = getEnvironment();
  return env === 'production' || env === 'staging';
}

/**
 * Get environment display name for UI
 */
export function getEnvironmentLabel(): string {
  const env = getEnvironment();
  switch (env) {
    case 'production':
      return 'Production';
    case 'staging':
      return 'Staging';
    case 'development':
      return 'Development';
    default:
      return 'Unknown';
  }
}

/**
 * Environment configuration object
 * Useful for conditional features
 */
export const ENV = {
  get current(): Environment {
    return getEnvironment();
  },
  get isProduction(): boolean {
    return isProduction();
  },
  get isStaging(): boolean {
    return isStaging();
  },
  get isDevelopment(): boolean {
    return isDevelopment();
  },
  get label(): string {
    return getEnvironmentLabel();
  },
  
  // Feature flags based on environment
  get showDetailedErrors(): boolean {
    return !isProduction();
  },
  get showStackTraces(): boolean {
    return isDevelopment();
  },
  get enableDebugMode(): boolean {
    return isDevelopment();
  },
} as const;
