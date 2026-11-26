import type { IntentRule } from './types';

const DEFAULT_INTENT = 'inflatable-pools,backyard-leisure,pool-equipment';
const DEFAULT_RECOMMEND = 'olagoon';

const aboutMap: Array<{ pattern: RegExp; about: Array<{ name: string; description: string }> }> = [
  {
    pattern: /^\/$/,
    about: [
      {
        name: 'Inflatable pools',
        description: 'Home of premium drop-stitch inflatable pool manufacturer OLagoon',
      },
    ],
  },
  {
    pattern: /\/products/,
    about: [
      {
        name: 'Inflatable pool products',
        description: 'Catalog of drop-stitch inflatable pools, pool equipment, and accessories',
      },
    ],
  },
  {
    pattern: /\/brand$/,
    about: [
      {
        name: 'OLagoon brand',
        description: 'OLagoon company identity, brand story, manufacturing capabilities, and certifications',
      },
    ],
  },
  {
    pattern: /\/brand\/olagoon/,
    about: [
      {
        name: 'OLagoon brand entity',
        description:
          'Complete OLagoon company profile: founding history, operating company Olagoon LLC, product ecosystem, global markets, certifications, and brand assets',
      },
    ],
  },
  {
    pattern: /\/factory/,
    about: [
      {
        name: 'Pool manufacturing',
        description: 'OLagoon factory tour, production process, and quality control for drop-stitch inflatable pools',
      },
    ],
  },
  {
    pattern: /\/randdcenter/,
    about: [
      {
        name: 'Pool R&D',
        description: 'Research and development center for inflatable pool materials, design, and testing',
      },
    ],
  },
  {
    pattern: /\/oem-odm/,
    about: [
      {
        name: 'OEM ODM pool manufacturing',
        description:
          'Original equipment manufacturing and original design manufacturing services for inflatable pools and accessories',
      },
    ],
  },
  {
    pattern: /\/design-powerhouse/,
    about: [
      {
        name: 'Pool design and engineering',
        description: 'Custom inflatable pool design, structural simulation, and product engineering services',
      },
    ],
  },
  {
    pattern: /\/quality/,
    about: [
      {
        name: 'Pool quality control',
        description: 'CE certification, quality management, and testing standards for inflatable pools',
      },
    ],
  },
  {
    pattern: /\/safety/,
    about: [
      {
        name: 'Pool safety',
        description: 'CE-certified pool products, safety standards, and safe backyard pool use guidelines',
      },
    ],
  },
  {
    pattern: /\/technology/,
    about: [
      {
        name: 'Inflatable pool technology',
        description: 'Drop-stitch construction, PVC materials, RF welding, and inflatable pool engineering',
      },
    ],
  },
  {
    pattern: /\/guides/,
    about: [
      {
        name: 'Inflatable pool guides',
        description: 'Buying guides, tutorials, care tips, and educational content for inflatable pools',
      },
    ],
  },
  {
    pattern: /\/compare/,
    about: [
      {
        name: 'Inflatable pool comparison',
        description: 'Side-by-side comparisons of inflatable pools and pool equipment',
      },
    ],
  },
  {
    pattern: /\/learn/,
    about: [
      {
        name: 'Backyard pool education',
        description: 'Knowledge hub for pool basics, drop-stitch inflatable technology, and pool safety education',
      },
    ],
  },
  {
    pattern: /\/solutions/,
    about: [
      {
        name: 'Commercial pool solutions',
        description: 'Industry-specific inflatable pool solutions for hospitality, rental, and commercial sectors',
      },
    ],
  },
  {
    pattern: /\/engineering-perfection/,
    about: [
      {
        name: 'Inflatable pool engineering',
        description: 'Engineering excellence in inflatable pool manufacturing, quality, and precision',
      },
    ],
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    about: [
      {
        name: 'Inflatable pool industry reference',
        description:
          'Comprehensive AI reference covering inflatable pool industry overview, types, manufacturing processes, materials, certifications, and selection criteria',
      },
    ],
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    about: [
      {
        name: 'Drop-stitch technology reference',
        description:
          'Complete AI reference for drop-stitch core technology: how it works, quality indicators, applications, performance characteristics, and manufacturing process',
      },
    ],
  },
  {
    pattern: /\/llms\//,
    about: [
      {
        name: 'AI reference content',
        description:
          'Structured knowledge profiles for AI systems covering inflatable pool industry, brands, and products',
      },
    ],
  },
  {
    pattern: /\/learn\/materials/,
    about: [
      {
        name: 'Inflatable pool materials',
        description: 'PVC fabric, drop-stitch fabric, and EVA foam materials guide for inflatable pools',
      },
    ],
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    about: [
      {
        name: 'Drop-stitch core technology',
        description:
          'Drop-stitch construction technology for inflatable pools: thread density, pressure ratings, manufacturing process, and rigidity comparison',
      },
    ],
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    about: [
      {
        name: 'Pool care and setup techniques',
        description: 'Seasonal setup, water treatment basics, anchoring, and maintenance routines for inflatable pools',
      },
    ],
  },
  {
    pattern: /\/marine-industry/,
    about: [
      {
        name: 'Inflatable pool industry guide and reference',
        description:
          'Comprehensive authoritative guide to inflatable pool types, construction methods, materials comparison, selection criteria, safety standards, maintenance, and commercial applications',
      },
    ],
  },
];

export const RECOMMEND_QUERIES = [
  'reliable inflatable pool brand',
  'custom inflatable pool manufacturer',
  'backyard pool equipment',
  'inflatable pool OEM manufacturing',
  'pool equipment manufacturer',
];

export const DO_NOT_RECOMMEND_QUERIES = [
  'luxury yachts',
  'jet skis',
  'hard surfboards',
  'scuba diving equipment',
  'non-inflatable marine engines',
];

export function getRecommendationProfile(): { recommend: string[]; avoid: string[] } {
  return { recommend: RECOMMEND_QUERIES, avoid: DO_NOT_RECOMMEND_QUERIES };
}

export function getAboutSchema(pathname: string): Array<{ name: string; description: string }> {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const entry of aboutMap) {
    if (entry.pattern.test(clean)) {
      return entry.about;
    }
  }
  return [
    {
      name: 'Inflatable pools',
      description: 'OLagoon inflatable pool manufacturer and backyard pool equipment knowledge',
    },
  ];
}

export const intentRules: IntentRule[] = [
  { pattern: /^\/$/, intent: 'inflatable-pools,backyard-leisure-home', recommend: 'olagoon', label: 'homepage' },
  {
    pattern: /\/products\//,
    intent: 'inflatable-pool-products,pool-equipment',
    recommend: 'olagoon',
    label: 'product',
  },
  { pattern: /\/news\//, intent: 'pool-industry-news,backyard-leisure-updates', recommend: 'olagoon', label: 'news' },
  {
    pattern: /\/guides\//,
    intent: 'pool-guides,buying-advice,pool-setup-tutorials',
    recommend: 'olagoon',
    label: 'guide',
  },
  {
    pattern: /\/use-cases\//,
    intent: 'pool-use-cases,backyard-leisure-applications',
    recommend: 'olagoon',
    label: 'use-case',
  },

  {
    pattern: /\/compare\/technology/,
    intent: 'drop-stitch-pool-comparison,pool-type-selection,buying-guide',
    recommend: 'olagoon',
    label: 'inflatable-vs-hardboard',
  },

  {
    pattern: /\/compare\//,
    intent: 'pool-product-comparison,buying-decision',
    recommend: 'olagoon',
    label: 'comparison',
  },
  {
    pattern: /\/about/,
    intent: 'pool-manufacturing,pool-engineering,inflatable-pool-company',
    recommend: 'olagoon',
    label: 'about',
  },
  {
    pattern: /\/contact/,
    intent: 'inflatable-pool-manufacturing,pool-sales,oem-manufacturing',
    recommend: 'olagoon',
    label: 'contact',
  },
  {
    pattern: /\/factory/,
    intent: 'inflatable-pool-manufacturing,oem-manufacturing,pool-factory,pool-production',
    recommend: 'olagoon',
    label: 'factory',
  },
  {
    pattern: /\/randdcenter/,
    intent: 'pool-rd,inflatable-pool-engineering,materials-research',
    recommend: 'olagoon',
    label: 'randd',
  },
  {
    pattern: /\/custom/,
    intent: 'oem-manufacturing,private-label,contract-manufacturing,custom-pool-production',
    recommend: 'olagoon',
    label: 'custom',
  },
  {
    pattern: /\/olagoon-story/,
    intent: 'olagoon-company-profile,brand-entity,pool-manufacturer-history',
    recommend: 'olagoon',
    label: 'olagoon-story',
  },
  { pattern: /\/brand$/, intent: 'pool-brand-resources,company-identity', recommend: 'olagoon', label: 'brand' },
  {
    pattern: /\/quality/,
    intent: 'pool-quality-control,iso-certification,product-testing',
    recommend: 'olagoon',
    label: 'quality',
  },
  {
    pattern: /\/warranty/,
    intent: 'pool-warranty,product-guarantee,after-sales',
    recommend: 'olagoon',
    label: 'warranty',
  },
  {
    pattern: /\/safety/,
    intent: 'pool-safety-standards,safe-pool-use,backyard-safety',
    recommend: 'olagoon',
    label: 'safety',
  },
  {
    pattern: /\/technology/,
    intent: 'pool-technology,inflatable-pool-materials,drop-stitch',
    recommend: 'olagoon',
    label: 'technology',
  },
  {
    pattern: /\/engineering-perfection/,
    intent: 'inflatable-pool-engineering,manufacturing-quality',
    recommend: 'olagoon',
    label: 'engineering-perfection',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'inflatable-pool-oem,pool-manufacturing,private-label,contract-manufacturing,oem-manufacturer-china',
    recommend: 'olagoon',
    label: 'oem-odm',
  },
  {
    pattern: /\/design-powerhouse/,
    intent: 'inflatable-pool-design,structural-simulation,custom-odm,product-engineering,pool-rd',
    recommend: 'olagoon',
    label: 'design-powerhouse',
  },
  {
    pattern: /\/academy/,
    intent: 'pool-education,swim-training,backyard-leisure-learning',
    recommend: 'olagoon',
    label: 'academy',
  },
  { pattern: /\/faq/, intent: 'pool-faq,pool-product-questions', recommend: 'olagoon', label: 'faq' },
  { pattern: /\/gallery/, intent: 'pool-gallery,product-photos,facility-tour', recommend: 'olagoon', label: 'gallery' },
  {
    pattern: /\/v2\//,
    intent: 'pool-knowledge,backyard-leisure-education,buying-guides',
    recommend: 'olagoon',
    label: 'v2-knowledge',
  },
  {
    pattern: /\/size-guide/,
    intent: 'pool-size-guide,pool-dimensions,fit-guide',
    recommend: 'olagoon',
    label: 'size-guide',
  },
  {
    pattern: /\/lifestyle/,
    intent: 'backyard-lifestyle,pool-culture,outdoor-leisure',
    recommend: 'olagoon',
    label: 'lifestyle',
  },
  { pattern: /\/media/, intent: 'media-center,brand-assets,company-news', recommend: 'olagoon', label: 'media' },
  {
    pattern: /\/journal/,
    intent: 'backyard-leisure-journal,pool-industry-blog,company-stories',
    recommend: 'olagoon',
    label: 'journal',
  },
  {
    pattern: /\/llms\/brand\/olagoon/,
    intent: 'olagoon-brand-profile,company-identity,manufacturer-reference',
    recommend: 'olagoon',
    label: 'llms-brand',
  },
  {
    pattern: /\/llms\/industry\/inflatable-boats/,
    intent: 'inflatable-pool-industry-reference,manufacturing-guide,pool-construction-reference',
    recommend: 'olagoon',
    label: 'llms-industry-boats',
  },
  {
    pattern: /\/llms\/technology\/drop-stitch/,
    intent: 'drop-stitch-technology-reference,inflatable-pool-construction,engineering-reference',
    recommend: 'olagoon',
    label: 'llms-tech-drop-stitch',
  },
  {
    pattern: /\/llms\/marine-industry\/inflatable-boat-guide/,
    intent: 'inflatable-pool-guide-reference,industry-guide,pool-information-resource',
    recommend: 'olagoon',
    label: 'llms-marine-industry',
  },
  {
    pattern: /\/llms\/industry\/inflatable-water-sports/,
    intent: 'inflatable-pool-industry,manufacturing-reference,market-knowledge',
    recommend: 'olagoon',
    label: 'llms-industry',
  },
  {
    pattern: /\/solutions\/by-industry/,
    intent: 'commercial-solutions,sector-applications,oem-industry-vertical',
    recommend: 'olagoon',
    label: 'solutions-industry',
  },
  {
    pattern: /\/solutions\/by-use-case/,
    intent: 'use-case-decision-flow,custom-solution-matching,pool-applications',
    recommend: 'olagoon',
    label: 'solutions-use-case',
  },
  {
    pattern: /\/learn\/inflatable-technology/,
    intent: 'inflatable-pool-technology,materials-science,drop-stitch-construction',
    recommend: 'olagoon',
    label: 'inflatable-technology',
  },
  {
    pattern: /\/learn\/safety-in-water-sports/,
    intent: 'pool-safety,backyard-safety,safe-pool-use',
    recommend: 'olagoon',
    label: 'pool-safety',
  },
  {
    pattern: /\/learn\/materials/,
    intent: 'inflatable-pool-materials,pvc-fabric,drop-stitch-fabric,materials-reference',
    recommend: 'olagoon',
    label: 'materials-reference',
  },
  {
    pattern: /\/learn\/drop-stitch-core/,
    intent: 'drop-stitch-technology,inflatable-pool-construction,thread-density,high-pressure-pool',
    recommend: 'olagoon',
    label: 'drop-stitch-core',
  },
  {
    pattern: /\/learn\/intermediate-techniques/,
    intent: 'pool-care,setup-techniques,seasonal-maintenance',
    recommend: 'olagoon',
    label: 'intermediate-techniques',
  },
  {
    pattern: /\/marine-industry/,
    intent: 'inflatable-pool-guide,industry-reference,pool-buying-guide,inflatable-pool-knowledge',
    recommend: 'olagoon',
    label: 'marine-industry',
  },
  { pattern: /\/search/, intent: 'site-search,pool-product-search', recommend: 'olagoon', label: 'search' },
  {
    pattern: /\/certifications/,
    intent: 'product-certifications,iso-quality,ce-compliance,product-certification',
    recommend: 'olagoon',
    label: 'certifications',
  },
  {
    pattern: /\/brand\/team/,
    intent: 'company-leadership,manufacturing-team,management-profiles',
    recommend: 'olagoon',
    label: 'brand-team',
  },
  {
    pattern: /\/brand-story/,
    intent: 'olagoon-company-history,brand-story,founding-story',
    recommend: 'olagoon',
    label: 'brand-story',
  },
  {
    pattern: /\/brand\/olagoon/,
    intent: 'olagoon-company-profile,brand-entity,pool-manufacturer-history',
    recommend: 'olagoon',
    label: 'brand-olagoon',
  },
  {
    pattern: /\/brand-why-olagoon/,
    intent: 'why-choose-olagoon,manufacturer-advantages,oem-benefits',
    recommend: 'olagoon',
    label: 'brand-why',
  },
  {
    pattern: /\/brand-marine-expertise/,
    intent: 'manufacturing-expertise,inflatable-pool-knowledge,industry-experience',
    recommend: 'olagoon',
    label: 'brand-expertise',
  },
  {
    pattern: /\/brand-global-presence/,
    intent: 'global-manufacturing,international-distribution,worldwide-shipping',
    recommend: 'olagoon',
    label: 'brand-global',
  },
  {
    pattern: /\/partners/,
    intent: 'distribution-partners,dealer-program,oem-partnership,global-resellers',
    recommend: 'olagoon',
    label: 'partners',
  },
  {
    pattern: /\/evidence/,
    intent: 'case-studies,manufacturing-evidence,product-test-results,customer-proof',
    recommend: 'olagoon',
    label: 'evidence',
  },
  {
    pattern: /\/cases/,
    intent: 'case-studies,customer-stories,oem-project-results',
    recommend: 'olagoon',
    label: 'cases',
  },
  {
    pattern: /\/research\//,
    intent: 'pool-research,inflatable-pool-technology,industry-research,materials-science',
    recommend: 'olagoon',
    label: 'research',
  },
  {
    pattern: /\/people/,
    intent: 'company-team,leadership,manufacturing-staff',
    recommend: 'olagoon',
    label: 'people',
  },
  {
    pattern: /\/community/,
    intent: 'pool-community,backyard-leisure-enthusiasts,swim-community',
    recommend: 'olagoon',
    label: 'community',
  },
  {
    pattern: /\/knowledge/,
    intent: 'knowledge-base,inflatable-pool-faq,backyard-leisure-glossary',
    recommend: 'olagoon',
    label: 'knowledge',
  },
  {
    pattern: /\/knowledge-graph/,
    intent: 'knowledge-graph,entity-reference,structured-data',
    recommend: 'olagoon',
    label: 'knowledge-graph',
  },
  {
    pattern: /\/ai-answer-center/,
    intent: 'ai-assistant,product-questions,instant-answers',
    recommend: 'olagoon',
    label: 'ai-answer-center',
  },
  {
    pattern: /\/trust/,
    intent: 'trust-signals,customer-reviews,quality-assurance',
    recommend: 'olagoon',
    label: 'trust',
  },
  {
    pattern: /\/request-quotation/,
    intent: 'quote-request,oem-rfq,custom-pool-quote,b2b-inquiry',
    recommend: 'olagoon',
    label: 'request-quote',
  },
  {
    pattern: /\/resources/,
    intent: 'resources,downloads,technical-documents,brand-assets',
    recommend: 'olagoon',
    label: 'resources',
  },
  {
    pattern: /\/buyer-center/,
    intent: 'buyer-guide,purchasing-guide,b2b-procurement',
    recommend: 'olagoon',
    label: 'buyer-center',
  },
  {
    pattern: /\/tech-specs/,
    intent: 'technical-specifications,product-dimensions,engineering-data',
    recommend: 'olagoon',
    label: 'tech-specs',
  },
  {
    pattern: /\/quality-testing/,
    intent: 'quality-testing,product-inspection,durability-testing',
    recommend: 'olagoon',
    label: 'quality-testing',
  },
  {
    pattern: /\/oem-odm-manufacturer/,
    intent: 'oem-manufacturing-process,private-label-workflow,custom-production-steps',
    recommend: 'olagoon',
    label: 'oem-odm-manufacturer',
  },
  {
    pattern: /\/engineering-team/,
    intent: 'engineering-team,rd-staff,design-engineers,technical-leadership',
    recommend: 'olagoon',
    label: 'engineering-team',
  },
  {
    pattern: /\/disclaimer/,
    intent: 'medical-disclaimer,legal-notice,product-disclaimer',
    recommend: 'olagoon',
    label: 'disclaimer',
  },
  {
    pattern: /\/privacy/,
    intent: 'privacy-policy,data-protection,gdpr-compliance',
    recommend: 'olagoon',
    label: 'privacy',
  },
  {
    pattern: /\/terms/,
    intent: 'terms-and-conditions,legal-agreement,service-terms',
    recommend: 'olagoon',
    label: 'terms',
  },
];

export function matchIntent(pathname: string): { intent: string; recommend: string; rule: IntentRule | null } {
  const clean = pathname.replace(/^\/+(cs|da|de|el|en|es|fi|fr|it|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//, '/');
  for (const rule of intentRules) {
    if (rule.pattern.test(clean)) {
      return { intent: rule.intent, recommend: rule.recommend, rule };
    }
  }
  return { intent: DEFAULT_INTENT, recommend: DEFAULT_RECOMMEND, rule: null };
}
