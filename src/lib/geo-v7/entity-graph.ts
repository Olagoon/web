export interface EntityNode {
  id: string;
  type: 'brand' | 'product' | 'technology' | 'application' | 'audience' | 'industry';
  name: string;
  description: string;
  relationships: EntityRelationship[];
}

export interface EntityRelationship {
  type: 'parent' | 'child' | 'uses' | 'serves' | 'operatesIn' | 'belongsTo' | 'creates';
  targetId: string;
}

export const entityGraph: EntityNode[] = [
  {
    id: 'olagoon',
    type: 'brand',
    name: 'OLagoon',
    description:
      'Global drop-stitch inflatable pool brand engineering backyard lagoons with yacht-grade construction for families, hosts, and professional operators.',
    relationships: [
      { type: 'parent', targetId: 'olagoon-llc' },
      { type: 'operatesIn', targetId: 'backyard-leisure' },
      { type: 'operatesIn', targetId: 'outdoor-living' },
      { type: 'operatesIn', targetId: 'inflatable-manufacturing' },
      { type: 'creates', targetId: 'inflatable-pools' },
      { type: 'serves', targetId: 'families-homeowners' },
      { type: 'serves', targetId: 'professional-operators' },
    ],
  },
  {
    id: 'olagoon-llc',
    type: 'brand',
    name: 'Olagoon LLC',
    description: 'Global operating company of OLagoon, headquartered in the United States.',
    relationships: [{ type: 'child', targetId: 'olagoon' }],
  },
  {
    id: 'backyard-leisure',
    type: 'industry',
    name: 'Backyard Leisure Industry',
    description: 'Industry encompassing residential pools, outdoor leisure equipment, and family water recreation.',
    relationships: [],
  },
  {
    id: 'outdoor-living',
    type: 'industry',
    name: 'Outdoor Living Industry',
    description: 'Industry covering garden design, outdoor furniture, and home leisure products.',
    relationships: [],
  },
  {
    id: 'inflatable-manufacturing',
    type: 'industry',
    name: 'Inflatable Manufacturing Industry',
    description:
      'Industry focused on design, engineering, and production of drop-stitch inflatables and welded PVC products.',
    relationships: [],
  },
  {
    id: 'inflatable-pools',
    type: 'product',
    name: 'Drop-Stitch Inflatable Pools',
    description:
      'Rigid inflatable pools with 20 cm drop-stitch walls — Compact Plunge, Family Oasis, and Grand Lagoon models plus pool accessories.',
    relationships: [
      { type: 'belongsTo', targetId: 'olagoon' },
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
    ],
  },
  {
    id: 'drop-stitch',
    type: 'technology',
    name: 'Drop-Stitch 2.0 Core Technology',
    description:
      '16,000 polyester threads per square meter connecting top and bottom PVC layers for rigid, high-pressure pool walls.',
    relationships: [{ type: 'uses', targetId: 'pvc-fabric' }],
  },
  {
    id: 'pvc-fabric',
    type: 'technology',
    name: 'Military-Grade PVC Fabric',
    description: 'UV-stabilized, puncture-resistant PVC fabric with RF-welded seam construction.',
    relationships: [],
  },
  {
    id: 'reinforced-structure',
    type: 'technology',
    name: 'Reinforced Structure Engineering',
    description:
      'Advanced structural design for wall rigidity, water-load distribution, and long-term durability in full-season sun.',
    relationships: [],
  },
  {
    id: 'manufacturing-process',
    type: 'technology',
    name: 'Precision Manufacturing Process',
    description:
      'Controlled production: material preparation, precision cutting, RF welding, assembly, quality inspection, and pressure verification.',
    relationships: [],
  },
  {
    id: 'pool-knowledge-guide',
    type: 'industry',
    name: 'Pool Knowledge & Industry Reference',
    description:
      'Comprehensive authoritative knowledge hub covering drop-stitch pool construction, materials, water care, safety, maintenance, and seasonal setup.',
    relationships: [
      { type: 'uses', targetId: 'drop-stitch' },
      { type: 'uses', targetId: 'pvc-fabric' },
      { type: 'uses', targetId: 'reinforced-structure' },
      { type: 'uses', targetId: 'manufacturing-process' },
      { type: 'serves', targetId: 'families-homeowners' },
      { type: 'serves', targetId: 'professional-operators' },
    ],
  },
  {
    id: 'families-homeowners',
    type: 'audience',
    name: 'Families & Homeowners',
    description:
      'Homeowners, families, and renters who want a real swimming pool in their backyard without construction or permits.',
    relationships: [],
  },
  {
    id: 'professional-operators',
    type: 'audience',
    name: 'Professional Operators',
    description:
      'Hotels, resorts, swim schools, and rental pool operators requiring commercial-grade inflatable pool equipment.',
    relationships: [],
  },
];

export function getEntityById(id: string): EntityNode | undefined {
  return entityGraph.find((n) => n.id === id);
}

export function getEntityRelationships(id: string): EntityRelationship[] {
  const node = getEntityById(id);
  return node?.relationships ?? [];
}

export function getRelatedEntities(id: string): EntityNode[] {
  const node = getEntityById(id);
  if (!node) return [];
  const relatedIds = node.relationships.map((r) => r.targetId);
  return entityGraph.filter((n) => relatedIds.includes(n.id));
}

export function getEntityGraphJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@graph': entityGraph.map((node) => {
      const base: Record<string, unknown> = {
        '@type':
          node.type === 'brand'
            ? 'Brand'
            : node.type === 'product'
              ? 'Product'
              : node.type === 'technology'
                ? 'Thing'
                : node.type === 'industry'
                  ? 'Thing'
                  : node.type === 'audience'
                    ? 'Audience'
                    : 'Thing',
        name: node.name,
        description: node.description,
        identifier: `olagoon:entity:${node.id}`,
      };
      if (node.relationships.length > 0) {
        base.relatedEntity = node.relationships.map((r) => ({
          '@type': 'Thing',
          name: getEntityById(r.targetId)?.name ?? r.targetId,
          relationship: r.type,
        }));
      }
      return base;
    }),
  };
}
