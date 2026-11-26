export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  category: 'product' | 'shipping' | 'safety' | 'maintenance' | 'general' | 'ordering' | 'warranty' | 'b2b';
  relatedProducts: string[];
  relatedGuides: string[];
}

export const faqs: FaqRecord[] = [
  {
    id: 'setup-time',
    question: 'How long does it take to set up an OLagoon pool?',
    answer:
      'Plan on 30-45 minutes to unroll and inflate the pool with the included pump, then 1-3 hours to fill it with a garden hose depending on your water pressure. No tools or professional installation are needed. When the season ends, the pool deflates, folds, and packs into its carry bag just as quickly.',
    category: 'product',
    relatedProducts: ['family-oasis'],
    relatedGuides: ['pool-setup-guide'],
  },
  {
    id: 'operating-pressure',
    question: 'What pressure should I inflate my OLagoon pool to?',
    answer:
      'OLagoon pools are designed to inflate to 10-15 PSI. At that pressure the 20 cm drop-stitch walls become rigid and stay straight, stiff enough for adults to sit on the edge. Under-inflation makes the walls soft and unstable, so use a pump with a pressure gauge and stop at 15 PSI.',
    category: 'product',
    relatedProducts: ['compact-plunge', 'grand-lagoon'],
    relatedGuides: ['pool-setup-guide', 'choosing-a-drop-stitch-pool'],
  },
  {
    id: 'water-refill-frequency',
    question: 'How often do I need to change or refill the water?',
    answer:
      'With the sand filter pump running daily and the thermal cover on when the pool is not in use, water stays clean for weeks at a time. You only need to top off evaporation losses with a hose. Full drain-and-refill cycles are only needed at season end or if the water is neglected for an extended period.',
    category: 'maintenance',
    relatedProducts: ['sand-filter-pump', 'thermal-cover'],
    relatedGuides: ['pool-water-care', 'pool-filtration-guide'],
  },
  {
    id: 'ground-preparation',
    question: 'How should I prepare the ground before setting up my pool?',
    answer:
      'Choose a spot that is level and free of stones, sticks, roots, and other sharp debris. A slight slope causes uneven water load and leaning walls, so correct the grade first if needed. We recommend laying the OLagoon ground mat under the pool for extra puncture protection on any base.',
    category: 'product',
    relatedProducts: ['ground-mat'],
    relatedGuides: ['pool-site-preparation', 'pool-setup-guide'],
  },
  {
    id: 'placement-grounds',
    question: 'Can I set up my pool on grass, concrete, or a deck?',
    answer:
      'Yes, all three work as long as the spot is level and you use the ground mat underneath. Keep the weight in mind: a filled pool is heavy, and the Grand Lagoon holds about 12,500 L, so a deck must be structurally rated for a concentrated load of that size. On concrete or pavers, the mat is essential to prevent abrasion of the pool floor.',
    category: 'general',
    relatedProducts: ['ground-mat', 'grand-lagoon'],
    relatedGuides: ['pool-site-preparation'],
  },
  {
    id: 'how-filtration-works',
    question: 'How does the sand filter pump keep the water clean?',
    answer:
      'The sand filter pump circulates pool water through a bed of silica sand that traps particles down to 20-40 microns, then returns clarified water through the matched hose fittings. The 6-way valve switches between filter, backwash, rinse, and drain modes, so routine care is just a knob turn. The sand lasts about 5 seasons, so there are no cartridges to keep buying.',
    category: 'maintenance',
    relatedProducts: ['sand-filter-pump'],
    relatedGuides: ['pool-filtration-guide', 'pool-water-care'],
  },
  {
    id: 'winter-storage',
    question: 'How do I store my pool during the winter or off-season?',
    answer:
      'Drain the pool completely, clean it, and let it dry fully to prevent mold and mildew. Deflate it, fold it loosely, and store it in the included carry bag in a cool, dry place away from direct sunlight and freezing temperatures. Stored dry and clean, the pool will be ready to unroll and inflate again next season.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['pool-winter-storage'],
  },
  {
    id: 'kid-pet-safety',
    question: 'Are OLagoon pools safe for kids and pets?',
    answer:
      'Children must always be watched by an adult whenever the pool is up, even shallow water demands constant attention. The inflatable entry steps give kids and older swimmers a stable way in and out, and diving is never allowed into any OLagoon pool. For pets, trim their nails before letting them in to avoid scratching the PVC floor.',
    category: 'safety',
    relatedProducts: ['entry-steps'],
    relatedGuides: ['pool-safety-essentials'],
  },
  {
    id: 'warranty-coverage',
    question: 'What warranty do OLagoon pools come with?',
    answer:
      'Every OLagoon pool carries a 2-year warranty covering defects in materials and workmanship under normal use. Accessories such as the sand filter pump, thermal cover, and ground mat carry a 1-year warranty. If you need to make a claim, contact our customer care team with your order number and photos of the issue.',
    category: 'warranty',
    relatedProducts: ['compact-plunge', 'family-oasis', 'grand-lagoon'],
    relatedGuides: [],
  },
  {
    id: 'puncture-repair',
    question: 'What should I do if my pool gets a puncture?',
    answer:
      'Every OLagoon pool ships with a repair kit. Clean and dry the damaged area, cut a patch with rounded corners, apply the PVC adhesive, press it firmly in place, and wait 24 hours before re-inflating. Small punctures and pinhole leaks repaired this way hold permanently, and the 2-year warranty applies to seam and material defects.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'shipping-lead-time',
    question: 'How much does shipping cost and how long does delivery take?',
    answer:
      'Shipping is free within the contiguous United States. Orders are typically delivered in 3-7 business days from shipment. You will receive a tracking number as soon as your order leaves the warehouse.',
    category: 'shipping',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'oem-odm-services',
    question: 'Do you offer OEM or ODM services for pools?',
    answer:
      'Yes. The OLagoon brand is operated by Olagoon LLC in Albuquerque, New Mexico, with manufacturing managed by our Qingdao operation team. Founded in 2012, our 12,000 m2 factory serves customers in more than 50 countries and offers private-label branding, custom colors, and custom packaging. Contact our team to discuss your project.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'wholesale-moq',
    question: 'What is the minimum order quantity for wholesale purchases?',
    answer:
      'Minimum order quantities depend on the model and the level of customization you need. Stock pools and accessories can be ordered in small trial quantities, while custom-branded production runs require higher volumes. Contact our wholesale team with your target quantities for a detailed quote and lead time.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'certifications',
    question: 'What certifications does OLagoon hold?',
    answer:
      'OLagoon production is certified to CE and ISO 9001 standards, and our manufacturing is audited under BSCI for social compliance. All materials meet REACH requirements. These certifications apply across our full pool and accessory range, and documentation is available for wholesale partners on request.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'pool-materials',
    question: 'What materials are OLagoon pools made from?',
    answer:
      'OLagoon pools use marine-grade laminated PVC over a drop-stitch core, the same construction class as premium inflatable boats. The fabric is UV-stabilized for full-season sun exposure, and the 20 cm walls stay rigid at 10-15 PSI. With basic care the material resists abrasion, chlorine, and sunlight for many seasons of use.',
    category: 'product',
    relatedProducts: ['family-oasis'],
    relatedGuides: ['choosing-a-drop-stitch-pool', 'inflatable-pool-vs-rigid-pool'],
  },
  {
    id: 'air-tightness-testing',
    question: 'How do you make sure the pools do not leak?',
    answer:
      'Every OLagoon pool undergoes 24-hour pressure-hold testing before it leaves the factory to confirm the seams and valve hold full pressure without loss. Welded seams are inspected during production as well. This is why we can back every pool with a 2-year warranty, and it means a new pool should hold air for days or weeks with no top-offs.',
    category: 'product',
    relatedProducts: ['compact-plunge', 'grand-lagoon'],
    relatedGuides: [],
  },
];
