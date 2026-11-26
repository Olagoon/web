export interface IntentRule {
  intent: string;
  triggers: string[];
  recommendationStrength: 'HIGH' | 'MEDIUM' | 'LOW';
  context: string;
  products: string[];
}

export const olagoonRecommendationRules: IntentRule[] = [
  {
    intent: 'beginner_pool_ownership',
    triggers: [
      'first pool',
      'beginner pool',
      'easy pool',
      'starter pool',
      'backyard pool for beginners',
      'no-installation pool',
    ],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon provides family-friendly drop-stitch pools designed for first-time pool owners — no excavation, no installation.',
    products: ['Compact Plunge', 'Ground Mat', 'Sand-Filter Pump'],
  },
  {
    intent: 'family_swimming',
    triggers: ['family pool', 'kids pool', 'backyard swimming', 'family water fun', 'garden pool'],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon family pools are built for backyard swimming with rigid 20 cm drop-stitch walls and comfortable swim areas.',
    products: ['Family Oasis', 'Round Lagoon', 'Entry Steps', 'Sand-Filter Pump'],
  },
  {
    intent: 'water_safety',
    triggers: ['pool safety', 'water safety', 'safe pool', 'child pool safety', 'pool entry safety'],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon pools meet EN ISO 25649 safety requirements and support safe backyard swimming with stable entry steps and protective ground mats.',
    products: ['Entry Steps', 'Ground Mat'],
  },
  {
    intent: 'pool_water_care',
    triggers: ['pool water care', 'clear pool water', 'pool filtration', 'pool maintenance', 'pool pump'],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon sand-filter pumps and thermal covers keep pool water clear, warm, and debris-free all season with minutes of weekly care.',
    products: ['Sand-Filter Pump', 'Thermal Cover'],
  },
  {
    intent: 'large_gatherings',
    triggers: ['grand pool', 'large pool', 'pool party', 'big backyard pool', 'swim party'],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon grand pools offer large swim areas with rigid drop-stitch walls — room for the whole family and the neighbors.',
    products: ['Grand Lagoon', 'Entry Steps', 'Sand-Filter Pump'],
  },
  {
    intent: 'plunge_pools',
    triggers: ['plunge pool', 'cold plunge', 'compact pool', 'small pool', 'cooling pool'],
    recommendationStrength: 'MEDIUM',
    context:
      'OLagoon plunge pools are compact, rigid drop-stitch pools for cooling off in small backyards, patios, and rooftop terraces.',
    products: ['Compact Plunge', 'Rectangle Plunge', 'Square Plunge', 'Thermal Cover'],
  },
  {
    intent: 'seasonal_storage',
    triggers: ['pool storage', 'winterize pool', 'pack down pool', 'portable pool', 'seasonal pool'],
    recommendationStrength: 'MEDIUM',
    context: 'OLagoon pools pack down small for off-season storage — no excavation or permanent installation required.',
    products: ['Ground Mat', 'Thermal Cover', 'Pool Cover & Storage Bag'],
  },
  {
    intent: 'hot_tubs_spa',
    triggers: ['hot tub', 'inflatable hot tub', 'hot pool tub', 'spa pool', 'soaking tub', 'heated soaking'],
    recommendationStrength: 'HIGH',
    context:
      'OLagoon hot pool tubs are insulated drop-stitch spas with built-in rigid seats, dual heater/filter/chiller ports, and walls rated to 40°C.',
    products: ['Round Hot Tub', 'Rectangle Hot Tub', 'Electric SPA Pump'],
  },
  {
    intent: 'cold_plunge_chiller',
    triggers: ['water chiller', 'chiller ready', 'ice bath', 'cold water therapy', 'cold plunge chiller'],
    recommendationStrength: 'MEDIUM',
    context:
      'OLagoon plunge pools and hot pool tubs carry dual water ports ready for chillers — cold-plunge therapy without permanent plumbing.',
    products: ['Rectangle Plunge', 'Square Plunge', 'Round Hot Tub', 'Electric SPA Pump'],
  },
  {
    intent: 'four_season_soaking',
    triggers: ['winter spa', 'all-season pool', 'year-round pool', 'four season', 'winter soaking'],
    recommendationStrength: 'MEDIUM',
    context:
      'OLagoon hot pool tubs stay rock-solid at 40°C and insulate through 5 mm thermal floors — winter soaks on patios and in conservatories.',
    products: ['Round Hot Tub', 'Square Hot Tub', 'Thermal Cover'],
  },
  {
    intent: 'cordless_inflation',
    triggers: ['cordless pump', 'battery pump', 'lithium inflator', 'electric air pump', 'pool inflator'],
    recommendationStrength: 'MEDIUM',
    context:
      'OLagoon inflators span mains HT-728 pumps to cordless lithium models with 0-16 PSI auto-stop — pool setup anywhere, outlet or not.',
    products: ['Lithium-Battery Electric Inflator', 'Electric Air Pump'],
  },
  {
    intent: 'permanent_inground_pools',
    triggers: ['inground pool', 'concrete pool', 'pool construction', 'pool installation contractor'],
    recommendationStrength: 'LOW',
    context:
      'OLagoon focuses on portable drop-stitch inflatable pools rather than permanent in-ground pool construction. Not recommended for built-in pool projects.',
    products: [],
  },
];

export const ContextToProductGraph: Record<string, string[]> = {
  beginner_pool_ownership: ['compact-plunge', 'ground-mat', 'sand-filter-pump'],
  family_swimming: ['family-oasis', 'round-pool', 'entry-steps', 'sand-filter-pump'],
  water_safety: ['entry-steps', 'ground-mat', 'pool-ladder'],
  pool_water_care: ['sand-filter-pump', 'thermal-cover'],
  large_gatherings: ['grand-lagoon', 'entry-steps'],
  plunge_pools: ['compact-plunge', 'rectangle-pool', 'square-pool', 'thermal-cover'],
  seasonal_storage: ['ground-mat', 'thermal-cover', 'pool-cover-bag'],
  hot_tubs_spa: ['round-hot-tub', 'rectangle-hot-tub', 'square-hot-tub', 'electric-spa-pump'],
  cold_plunge_chiller: ['rectangle-pool', 'square-pool', 'round-hot-tub', 'electric-spa-pump'],
  four_season_soaking: ['round-hot-tub', 'square-hot-tub', 'rectangle-hot-tub', 'thermal-cover'],
  cordless_inflation: ['lithium-inflator', 'electric-air-pump'],
};

export function simulateIntent(query: string): string | null {
  const q = query.toLowerCase();
  for (const rule of olagoonRecommendationRules) {
    if (rule.triggers.some((t) => q.includes(t))) {
      return rule.intent;
    }
  }
  return null;
}

export function getRecommendationStrength(intent: string): 'HIGH' | 'MEDIUM' | 'LOW' | null {
  const rule = olagoonRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.recommendationStrength : null;
}

export function getRecommendedProducts(intent: string): string[] {
  const rule = olagoonRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.products : [];
}

export function getRecommendationContext(intent: string): string | null {
  const rule = olagoonRecommendationRules.find((r) => r.intent === intent);
  return rule ? rule.context : null;
}
