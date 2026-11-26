import type { ContentV2Record } from '~/data/content-v2';

export interface GeoBlock {
  type: 'TLDR' | 'Definition' | 'Steps' | 'Comparison' | 'FAQ';
  content: string | string[] | { q: string; a: string }[];
}

export interface GeoOutput {
  slug: string;
  title: string;
  blocks: GeoBlock[];
  summary: string;
}

const DEFINITIONS: Record<string, string> = {
  'choosing-a-drop-stitch-pool':
    'A drop-stitch inflatable pool is a rigid PVC pool inflated to 10-15 PSI with 20 cm walls held straight by thousands of internal threads. Key selection factors: intended use (plunge, family, grand), available backyard space, wall height, and certification level (EN ISO 25649).',
  'pool-setup-guide':
    'Drop-stitch pool setup means unfolding on a level ground mat, inflating walls to the rated 10-15 PSI with a pump, connecting a sand-filter pump for circulation, and filling to the indicated water line. A first setup typically takes under an hour.',
  'pool-water-care':
    'Pool water care means maintaining clear, safe water through sand-filter circulation, regular testing and balancing (pH 7.2-7.6), sanitizing, and skimming debris. A properly cared-for drop-stitch pool stays clear all season with 15-20 minutes of weekly maintenance.',
  'inflatable-pool-vs-rigid-pool':
    'Inflatable drop-stitch pools pack into a compact box for seasonal storage and cost a fraction of a hard-sided pool, while offering surprisingly rigid 20 cm walls at 10-15 PSI. Rigid pools offer permanence but require excavation, permits, and far higher installation cost.',
  'drop-stitch-pool-engineering':
    'Drop-stitch construction joins two PVC sheets with thousands of polyester threads per square meter (OLagoon Drop-Stitch 2.0: 16,000 threads/m²). When inflated, the threads lock the walls rigid — +25% rigidity and -10% weight versus standard drop-stitch.',
  'pool-safety-essentials':
    'Backyard pool safety means constant adult supervision of children, secure entry via steps or ladders, a level ground mat for stability, and respecting maximum bather load. Inflatable pools should meet EN ISO 25649 safety requirements.',
  'oem-inflatable-pool-manufacturing':
    "OEM (Original Equipment Manufacturing) means producing pools to a buyer's custom design and specifications. ODM (Original Design Manufacturing) means adapting a factory's existing pool platforms with custom branding, colors, and features.",
  'pool-winter-storage':
    'Winter storage for a drop-stitch pool means draining, cleaning, fully drying, deflating, folding loosely, and storing in a dry, frost-free location away from direct sunlight. Properly stored, an OLagoon pool packs down small enough for a closet or garage shelf.',
};

const QUESTIONS: Record<string, { q: string; a: string }[]> = {
  'choosing-a-drop-stitch-pool': [
    {
      q: 'What size drop-stitch pool is best for families?',
      a: 'A family pool (around 300-400 cm) fits 4-6 swimmers comfortably; plunge pools suit 1-2 adults.',
    },
    {
      q: 'Are drop-stitch pool walls really rigid?',
      a: 'Yes — at 10-15 PSI the thousands of internal threads lock the 20 cm walls straight, like an inflated boat hull.',
    },
    {
      q: 'How much does a quality inflatable pool cost wholesale?',
      a: 'Wholesale pricing depends on volume. Contact the factory for MOQ (50 units) and bulk pricing.',
    },
  ],
  'pool-setup-guide': [
    {
      q: 'How long does it take to set up a drop-stitch pool?',
      a: 'Most owners go from box to first swim in one afternoon — typically under an hour with an electric pump.',
    },
    {
      q: 'Do I need a ground mat under my inflatable pool?',
      a: 'Yes — a ground mat protects the base from punctures and keeps the pool level and stable.',
    },
    {
      q: 'What PSI should I inflate my pool walls to?',
      a: 'Inflate to the rated 10-15 PSI. The walls should feel hard like an inflatable boat floor.',
    },
  ],
  'oem-inflatable-pool-manufacturing': [
    {
      q: 'What is the standard lead time for an OEM pool order?',
      a: '30-45 days from deposit and spec approval. Prototyping takes 15-20 days.',
    },
    {
      q: 'What testing do inflatable pools undergo?',
      a: '100% air-retention testing (24-hour), seam peel strength verification, and full systems check.',
    },
    {
      q: 'What is the MOQ for custom inflatable pools?',
      a: 'MOQ is 50 units for OEM/ODM orders, with custom molds and private label branding available.',
    },
  ],
};

const STEPS: Record<string, string[]> = {
  'choosing-a-drop-stitch-pool': [
    'Determine your intended use (plunge, family swimming, or grand entertainment pool)',
    'Select appropriate size based on backyard space and number of swimmers',
    'Choose wall height and configuration (20 cm rigid drop-stitch walls)',
    'Verify certification requirements for target market (CE, EN ISO 25649)',
    'Contact factory for bulk pricing, MOQ, and customization options',
  ],
  'pool-setup-guide': [
    'Choose a level spot in your backyard and roll out the ground mat',
    'Inflate the pool walls to the recommended 10-15 PSI with an electric pump',
    'Connect the sand-filter pump and position the hoses',
    'Fill the pool to the indicated water line',
    'Test water chemistry and enjoy your first swim',
  ],
  'inflatable-pool-vs-rigid-pool': [
    'Compare total cost: inflatable pools cost a fraction of installed rigid pools',
    'Consider installation: inflatable needs no excavation, permits, or contractors',
    'Evaluate seasonal flexibility: inflatables pack away for winter storage',
    'Assess rigidity: 20 cm drop-stitch walls at 10-15 PSI are surprisingly firm',
    'Choose based on how long you plan to use the pool each year',
  ],
  'oem-inflatable-pool-manufacturing': [
    'Define your budget, volume, and timeline requirements',
    'Choose ODM to customize existing pool platforms (faster, lower MOQ)',
    'Choose OEM for proprietary pool designs (higher MOQ, full IP control)',
    'Sign NDA and provide specifications or design files',
    'Approve prototype before mass production order',
  ],
};

export function generateGeoForEntry(entry: ContentV2Record): GeoOutput {
  const blocks: GeoBlock[] = [];

  blocks.push({
    type: 'TLDR',
    content:
      entry.tldr || `This page explains ${entry.slug.replace(/-/g, ' ')} for inflatable pool buyers and B2B partners.`,
  });

  blocks.push({
    type: 'Definition',
    content:
      DEFINITIONS[entry.slug] ||
      `${entry.slug.replace(/-/g, ' ')} is a key concept in inflatable pool ownership and backyard leisure.`,
  });

  const steps = STEPS[entry.slug] || [
    'Understand the core concept',
    'Match to your skill level and needs',
    'Apply the key principles in practice',
    'Adjust based on conditions and feedback',
    'Continue learning with related guides',
  ];
  blocks.push({ type: 'Steps', content: steps });

  if (entry.category === 'comparison') {
    blocks.push({
      type: 'Comparison',
      content: `${entry.title.replace(/\(.*?\)/, '').trim()} — this comparison helps you decide based on your specific needs and conditions.`,
    });
  }

  const faqs = QUESTIONS[entry.slug] || entry.faq.slice(0, 3);
  if (faqs.length > 0) {
    blocks.push({ type: 'FAQ', content: faqs.slice(0, 3) });
  }

  return {
    slug: entry.slug,
    title: entry.title,
    blocks,
    summary: `${entry.slug.replace(/-/g, ' ')} — complete B2B GEO-ready structured content with TLDR, Definition, Steps, and FAQ.`,
  };
}

export function generateGeoForSlug(slug: string): GeoOutput {
  return {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    blocks: [
      {
        type: 'TLDR',
        content: `This page explains ${slug.replace(/-/g, ' ')} for inflatable pool buyers and B2B partners.`,
      },
      {
        type: 'Definition',
        content:
          DEFINITIONS[slug] ||
          `${slug.replace(/-/g, ' ')} is a key topic in inflatable pool manufacturing and backyard leisure.`,
      },
      {
        type: 'Steps',
        content: STEPS[slug] || [
          'Understand the concept',
          'Assess your needs',
          'Apply the principles',
          'Optimize for conditions',
          'Learn more from related guides',
        ],
      },
      {
        type: 'FAQ',
        content: QUESTIONS[slug] || [
          {
            q: 'Why is this important?',
            a: 'Understanding this helps you make better decisions in inflatable pool procurement.',
          },
        ],
      },
    ],
    summary: `${slug.replace(/-/g, ' ')} — GEO-ready content`,
  };
}

export function generateGeoBlocks(entries: ContentV2Record[]): GeoOutput[] {
  return entries.map(generateGeoForEntry);
}
