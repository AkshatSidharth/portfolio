// Feature flags configuration
export const featureFlags = {
  // Set to false to hide pages from navigation
  showCaseStudies: false,
  showProjects: false,
  
  // Other feature flags can be added here
  showFreelance: true,
} as const;

export type FeatureFlags = typeof featureFlags;
