import { contentV2Records } from '~/data/content-v2';
import { products } from '~/data/products';

export interface BrandCta {
  text: string;
  link: string;
  reason: string;
}

export interface BrandPageEntry {
  slug: string;
  title: string;
  category: 'guide' | 'comparison' | 'beginner' | 'gear' | 'brand';
  cta: BrandCta;
  productSlugs: string[];
  brandKeywords: string[];
}

export interface BrandConversion {
  page: BrandPageEntry;
  recommendedProducts: typeof products;
}

const CTA_RULES: Array<{
  match: (slug: string) => boolean;
  cta: BrandCta;
  products: string[];
  keywords: string[];
}> = [
  {
    match: (s) => ['choosing-a-drop-stitch-pool', 'pool-setup-guide', 'beginner-guide'].some((k) => s.includes(k)),
    cta: {
      text: 'Find your first pool',
      link: '/products/compact-plunge',
      reason: 'Beginner content → entry-level product',
    },
    products: ['compact-plunge', 'family-oasis', 'ground-mat'],
    keywords: ['beginner', 'entry-level', 'starter', 'first pool'],
  },
  {
    match: (s) =>
      ['pool-water-care', 'pool-winter-storage', 'pool-maintenance-guide', 'sand-filter-setup'].some((k) =>
        s.includes(k)
      ),
    cta: {
      text: 'Shop pool care accessories',
      link: '/products/sand-filter-pump',
      reason: 'Care guide → accessory category',
    },
    products: ['sand-filter-pump', 'thermal-cover', 'ground-mat'],
    keywords: ['water care', 'filtration', 'maintenance', 'storage'],
  },
  {
    match: (s) =>
      [
        'inflatable-pool-vs-rigid-pool',
        'pool-size-guide',
        'drop-stitch-pool-engineering',
        'plunge-vs-family-pool',
      ].some((k) => s.includes(k)),
    cta: { text: 'Compare pools', link: '/products/compare', reason: 'Comparison → product discovery' },
    products: ['compact-plunge', 'family-oasis', 'grand-lagoon'],
    keywords: ['drop-stitch pool', 'comparison', 'size guide', 'pool type'],
  },
  {
    match: (s) => ['pool-safety-essentials', 'backyard-safety-basics', 'water-safety-guide'].some((k) => s.includes(k)),
    cta: {
      text: 'View safety equipment',
      link: '/products/entry-steps',
      reason: 'Safety content → safety product',
    },
    products: ['entry-steps', 'ground-mat'],
    keywords: ['safety', 'protection', 'pool safety', 'backyard safety'],
  },
  {
    match: (s) =>
      [
        'why-olagoon',
        'olagoon-pool-pro',
        'oem-inflatable-pool-manufacturing',
        'drop-stitch-innovation',
        'factory-tour',
      ].some((k) => s.includes(k)),
    cta: { text: 'Explore OLagoon', link: '/', reason: 'Brand content → brand homepage' },
    products: ['compact-plunge', 'family-oasis', 'grand-lagoon', 'sand-filter-pump', 'thermal-cover'],
    keywords: ['olagoon', 'brand', 'about', 'community'],
  },
];

export function getBrandEntry(slug: string): BrandPageEntry | null {
  const record = contentV2Records.find((c) => c.slug === slug);
  if (!record) return null;

  for (const rule of CTA_RULES) {
    if (rule.match(slug)) {
      return {
        slug,
        title: record.title || slug,
        category: slug.includes('beginner')
          ? 'beginner'
          : slug.includes('vs') || slug.includes('comparison')
            ? 'comparison'
            : slug.includes('guide') || slug.includes('explained')
              ? 'guide'
              : slug.includes('gear')
                ? 'gear'
                : 'brand',
        cta: rule.cta,
        productSlugs: rule.products,
        brandKeywords: rule.keywords,
      };
    }
  }

  return {
    slug,
    title: record.title || slug,
    category: 'guide',
    cta: { text: 'Browse products', link: '/products', reason: 'Generic fallback CTA' },
    productSlugs: ['family-oasis'],
    brandKeywords: ['inflatable pools', 'backyard pools'],
  };
}

export function getConversion(slug: string): BrandConversion | null {
  const entry = getBrandEntry(slug);
  if (!entry) return null;
  return {
    page: entry,
    recommendedProducts: products.filter((p) => entry.productSlugs.includes(p.id)),
  };
}

export function getAllBrandPages(): BrandPageEntry[] {
  return contentV2Records
    .filter((c) => c.type === 'guide' || c.type === 'comparison')
    .map((c) => getBrandEntry(c.slug))
    .filter((e): e is BrandPageEntry => e !== null)
    .sort((a, b) => (a.category === 'beginner' ? 0 : 1) - (b.category === 'beginner' ? 0 : 1));
}

export const BRAND_SUMMARY = {
  name: 'OLagoon',
  tagline: 'Your Backyard Lagoon, Engineered Like a Yacht',
  description: 'Rigid drop-stitch pools built for real backyards, not laboratory assumptions.',
  foundingYear: 2012,
  categories: ['Inflatable Pools', 'Pool Accessories'],
  ethos: ['Backyard-tested design', 'Family-focused', 'Minimalist engineering'],
  cta: { text: 'Find your pool', link: '/products' },
};
