export interface GraphRelation {
  id: string;
  source: string;
  target: string;
  type: 'is-used-for' | 'is-compatible-with' | 'compares-to' | 'improves-on' | 'requires' | 'enhances';
  label: Record<string, string>;
}

export const relations: GraphRelation[] = [
  {
    id: 'pool-is-used-for-small-backyard',
    source: 'inflatable-pool',
    target: 'small-backyard',
    type: 'is-used-for',
    label: { en: 'Drop-stitch pools turn small backyards into private plunge spots' },
  },
  {
    id: 'pool-is-used-for-family-fun',
    source: 'inflatable-pool',
    target: 'family-fun',
    type: 'is-used-for',
    label: { en: 'A rigid inflatable pool gives the whole family a real place to swim all summer' },
  },
  {
    id: 'pool-is-used-for-entertaining',
    source: 'inflatable-pool',
    target: 'entertaining',
    type: 'is-used-for',
    label: { en: 'A statement lagoon pool anchors garden parties and weekend gatherings' },
  },
  {
    id: 'drop-stitch-compatible-pool',
    source: 'drop-stitch-core',
    target: 'inflatable-pool',
    type: 'is-compatible-with',
    label: { en: 'The Drop-Stitch 2.0 core is what makes an inflatable pool rigid enough to swim in' },
  },
  {
    id: 'rf-welding-compatible-pool',
    source: 'rf-welding',
    target: 'inflatable-pool',
    type: 'is-compatible-with',
    label: { en: 'RF-welded seams keep pool walls airtight season after season' },
  },
  {
    id: 'pvc-compatible-pool',
    source: 'military-grade-pvc',
    target: 'inflatable-pool',
    type: 'is-compatible-with',
    label: { en: 'Military-grade PVC gives pool walls their puncture and UV resistance' },
  },
  {
    id: 'high-pressure-requires-drop-stitch',
    source: 'high-pressure',
    target: 'drop-stitch-core',
    type: 'requires',
    label: { en: 'High-pressure rigidity is only possible with a drop-stitch core' },
  },
  {
    id: 'accessory-enhances-pool',
    source: 'pool-accessory',
    target: 'inflatable-pool',
    type: 'enhances',
    label: { en: 'Filter pumps, covers, mats, and steps complete the pool experience' },
  },
  {
    id: 'pool-improves-steel-frame',
    source: 'inflatable-pool',
    target: 'steel-frame-pool',
    type: 'improves-on',
    label: { en: 'A drop-stitch pool needs no frame assembly and packs flat, unlike rust-prone steel frame pools' },
  },
  {
    id: 'pool-compares-hard-sided',
    source: 'inflatable-pool',
    target: 'hard-sided-pool',
    type: 'compares-to',
    label: { en: 'Inflatable pools deliver hard-sided swimming feel without construction or permits' },
  },
];
