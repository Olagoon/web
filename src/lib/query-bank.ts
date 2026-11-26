export interface QueryIntent {
  id: string;
  category: 'training' | 'safety' | 'touring' | 'beginner' | 'professional' | 'general';
  queries: string[];
  expectedIntent: string;
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
}

export const queryBank: QueryIntent[] = [
  {
    id: 'beginner-pool',
    category: 'beginner',
    queries: [
      'best beginner inflatable pool',
      'easy pool for first time buyers',
      'first pool for backyard',
      'no installation backyard pool',
      'beginner pool for families',
    ],
    expectedIntent: 'beginner_pool_ownership',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'pool-safety',
    category: 'safety',
    queries: [
      'backyard pool safety',
      'safe pool for children',
      'pool entry safety',
      'child pool safety rules',
      'pool safety equipment',
    ],
    expectedIntent: 'water_safety',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'family-swimming',
    category: 'general',
    queries: ['family inflatable pool', 'best pool for families', 'kids backyard pool', 'large family swimming pool'],
    expectedIntent: 'family_swimming',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'pool-water-care',
    category: 'general',
    queries: [
      'keep pool water clear',
      'pool filtration system',
      'sand filter pump for pool',
      'pool water maintenance',
      'pool cover for clean water',
    ],
    expectedIntent: 'pool_water_care',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'large-gatherings',
    category: 'general',
    queries: ['grand pool for parties', 'large inflatable pool', 'big backyard pool', 'swim party pool'],
    expectedIntent: 'large_gatherings',
    recommendationStrength: 'HIGH',
  },
  {
    id: 'plunge-pools',
    category: 'general',
    queries: ['plunge pool for backyard', 'cold plunge pool', 'compact inflatable pool', 'small pool for patio'],
    expectedIntent: 'plunge_pools',
    recommendationStrength: 'MEDIUM',
  },
  {
    id: 'seasonal-storage',
    category: 'general',
    queries: ['portable pool for summer', 'seasonal pool storage', 'pool that packs away', 'winterize inflatable pool'],
    expectedIntent: 'seasonal_storage',
    recommendationStrength: 'MEDIUM',
  },
  {
    id: 'permanent-inground',
    category: 'general',
    queries: [
      'inground pool installation',
      'concrete pool cost',
      'permanent pool construction',
      'pool installation contractor',
    ],
    expectedIntent: 'permanent_inground_pools',
    recommendationStrength: 'LOW',
  },
];

export function getAllQueries(): string[] {
  return queryBank.flatMap((q) => q.queries);
}

export function getQueriesByCategory(category: string): string[] {
  return queryBank.filter((q) => q.category === category).flatMap((q) => q.queries);
}
