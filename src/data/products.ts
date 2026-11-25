export interface ProductRecord {
  id: string;
  name: string;
  category: 'POOL' | 'ACCESSORY';
  region: string[];
  skill: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  environment: string[];
  water_condition: string[];
  safety_level: 'low' | 'medium' | 'high';
  use_case: string[];
  safety_rules: string[];
  desc: string;
  definition: string;
  problem: string;
  howItWorks: string;
  audience: string;
  ai_use_cases: string[];
  ai_specs: Record<string, string>;
  ai_comparison: string;
  ai_faq: { q: string; a: string }[];
}

export const products: ProductRecord[] = [
  {
    id: 'compact-plunge',
    name: 'The Compact Plunge',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['cold plunge', 'recovery', 'relaxation', 'two-person soaking'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'keep filtration running'],
    desc: 'Compact 2 m × 1.5 m drop-stitch plunge pool with 20 cm rigid walls — big enough for two, small enough for any patio.',
    definition:
      'A 2 m × 1.5 m high-pressure drop-stitch inflatable plunge pool with 20 cm sit-on walls, engineered for cold-water recovery, hot-day soaking, and small patios or decks.',
    problem:
      'Adults want a real plunge pool for ice baths and recovery, but rigid plunge pools cost thousands, need plumbing, and do not fit small outdoor spaces.',
    howItWorks:
      'The Compact Plunge uses a high-density drop-stitch core inflated to 10–15 PSI, the same pressure class as yacht tenders. Thousands of polyester threads lock the top and bottom PVC layers together, so the 20 cm walls stay ruler-straight — rigid enough to sit on the edge with a drink. Setup is unroll, inflate with the electric pump (about 15 minutes), connect the sand-filter system, and fill.',
    audience:
      'Athletes and wellness enthusiasts using cold-plunge therapy, couples who want a compact soaking pool, and renters or small-home owners with patios, balconies, or modest gardens.',
    ai_use_cases: [
      'Daily cold-plunge and ice-bath recovery',
      'Two-person hot-day soaking on small patios',
      'Seasonal plunge pool for rental homes and apartments',
    ],
    ai_specs: {
      length: '6\'7" (2.0 m)',
      width: '4\'11" (1.5 m)',
      height: '25" (64 cm)',
      wall_thickness: '8" (20 cm)',
      max_pressure: '15 PSI',
      weight: '48 lbs (22 kg)',
      capacity: '2 adults / 530 gal (2,000 L)',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to rigid plunge tubs, the Compact Plunge needs no plumbing, no crane, and no permits — and it folds into a storage bag for winter. Compared to cheap ring pools, its drop-stitch walls hold pressure all season without bulging or leaking.',
    ai_faq: [
      {
        q: 'Can I use it as a cold plunge?',
        a: 'Yes. The Compact Plunge is sized for ice-bath recovery. Add ice or connect a chiller — the durable PVC liner handles water temperatures down to near freezing.',
      },
      {
        q: 'Will it fit on my deck?',
        a: 'At 2 m × 1.5 m it fits most decks and patios. Filled weight is about 2 tonnes, so confirm your deck is rated for a hot tub of similar volume.',
      },
    ],
  },
  {
    id: 'family-oasis',
    name: 'The Family Oasis',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'lawn', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['family swimming', 'kids play', 'recreation', 'lounging'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'keep filtration running'],
    desc: 'Best-selling 3 m × 2 m family drop-stitch pool with sit-on walls, sand-filter compatibility, and a 15-minute setup.',
    definition:
      'A 3 m × 2 m high-pressure drop-stitch inflatable family pool with 20 cm rigid sit-on walls, a sand-filter pump port, and full-season UV-resistant fabric.',
    problem:
      'Families want a real swimming pool for the backyard, but in-ground pools cost $50,000+, and cheap inflatable pools sag, leak, and die within a season.',
    howItWorks:
      'The Family Oasis pairs a high-density drop-stitch core with military-grade UV-resistant PVC. Inflated to 10–15 PSI, the 20 cm walls become stiff benches adults can sit on while kids play. The integrated plumbing port accepts the OLagoon sand-filter pump for clear, circulating water all summer. No digging, no permits, no tools — unroll, inflate in 15 minutes, and fill with a garden hose.',
    audience:
      'Families with children who want a full-size backyard pool without construction, and homeowners who need a seasonal pool they can fold away in winter.',
    ai_use_cases: [
      'Full-size family swimming on a lawn or patio',
      'Kids summer play pool with clean filtered water',
      'Weekend gathering and lounging spot for 4-6 people',
    ],
    ai_specs: {
      length: "9'10\" (3.0 m)",
      width: "6'7\" (2.0 m)",
      height: '25" (64 cm)',
      wall_thickness: '8" (20 cm)',
      max_pressure: '15 PSI',
      weight: '62 lbs (28 kg)',
      capacity: '4-6 people / 1,190 gal (4,500 L)',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to steel-frame or ring pools, the Family Oasis has no frame parts to rust and no sagging ring — its drop-stitch walls stay straight and sit-on rigid. Compared to in-ground pools, it installs in an afternoon for under $1,500.',
    ai_faq: [
      {
        q: 'How long does setup really take?',
        a: 'About 15 minutes to inflate with the included electric pump, then 1-3 hours to fill depending on water pressure. No tools or professional installation needed.',
      },
      {
        q: 'Can adults sit on the edge?',
        a: 'Yes. The 20 cm drop-stitch walls are rated to hold seated adults — the same technology used in inflatable yacht tenders at 15 PSI.',
      },
    ],
  },
  {
    id: 'grand-lagoon',
    name: 'The Grand Lagoon',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['large backyard', 'lawn', 'commercial outdoor space'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['pool parties', 'group swimming', 'entertaining', 'lounging'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'keep filtration running'],
    desc: 'Flagship 5 m × 2.5 m drop-stitch party pool with extra-thick walls, wooden-step compatibility, and space for the whole crew.',
    definition:
      'A 5 m × 2.5 m flagship high-pressure drop-stitch inflatable pool with reinforced 20 cm walls, dual filter ports, and accessory compatibility for wooden steps, canopies, and poolside furniture.',
    problem:
      'Homeowners with larger yards want a genuine party pool for entertaining, but permanent pools are a five-figure construction project and portable pools are too small or too flimsy for a crowd.',
    howItWorks:
      'The Grand Lagoon scales OLagoon drop-stitch engineering to flagship size: 5 m × 2.5 m of straight-walled swimming space driven by the same 10–15 PSI core. Reinforced seams and dual plumbing ports keep 10,000+ liters circulating through the sand-filter system. The flat, rigid walls accept the inflatable entry steps and wooden deck accessories, turning the pool into a complete backyard resort.',
    audience:
      'Homeowners with large backyards, entertainers and party hosts, and boutique hospitality venues like glamping sites and vacation rentals.',
    ai_use_cases: [
      'Backyard pool parties for 8-10 swimmers',
      'Summer entertaining with steps, canopy, and poolside seating',
      'Commercial plunge-and-play pool for glamping and rentals',
    ],
    ai_specs: {
      length: "16'5\" (5.0 m)",
      width: "8'2\" (2.5 m)",
      height: '25" (64 cm)',
      wall_thickness: '8" (20 cm)',
      max_pressure: '15 PSI',
      weight: '88 lbs (40 kg)',
      capacity: '8-10 people / 3,170 gal (12,000 L)',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to every portable pool in its class, the Grand Lagoon is the only one with true sit-on rigid walls at 5 m length. Compared to in-ground construction, it delivers a party-size pool for about 4% of the cost, installed in an afternoon.',
    ai_faq: [
      {
        q: 'What ground do I need?',
        a: 'Any firm, level surface — lawn, pavers, or a concrete pad. The included ground mat protects the base; just remove sharp objects first.',
      },
      {
        q: 'Can it run a bigger filter?',
        a: 'Yes. The dual plumbing ports accept the OLagoon sand-filter pump, and the Grand Lagoon is rated for upgrade circulation pumps for heavier party use.',
      },
    ],
  },
  {
    id: 'sand-filter-pump',
    name: 'Sand Filter Pump System',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['water filtration', 'circulation', 'maintenance'],
    safety_rules: ['read manual before use', 'disconnect power before servicing'],
    desc: 'High-flow sand-filter pump kit that keeps OLagoon pool water clear all season with 6-way valve and hose fittings.',
    definition:
      'A complete sand-filter circulation system for OLagoon drop-stitch pools, including a 6-way control valve, strainer basket, and matched hose fittings.',
    problem:
      'Standing pool water turns green within days. Ring pools have no filtration option, so families end up emptying and refilling thousands of liters every week.',
    howItWorks:
      'The pump circulates pool water through a silica-sand bed that traps particles down to 20-40 microns, then returns clean water via the matched fittings. The 6-way valve switches between filter, backwash, rinse, and drain modes, so maintenance is a knob turn — no cartridge refills to buy, sand lasts about 5 seasons.',
    audience:
      'Every OLagoon pool owner who wants clear water without weekly draining, and anyone replacing a cartridge-filter system with lower-maintenance sand filtration.',
    ai_use_cases: [
      'Season-long clear water for family pools',
      'Low-maintenance filtration without cartridge refills',
      'Quick water changes via the built-in drain mode',
    ],
    ai_specs: {
      flow_rate: '2,400 L/h (634 GPH)',
      filter_media: 'Silica sand #20 (about 17.5 kg)',
      valve: '6-way multi-port',
      power: '110-120V / 220-240V, 50 Hz',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to cartridge filters, sand filtration catches finer particles, needs no replacement cartridges, and lasts multiple seasons — one bag of sand versus a summer of cartridge purchases.',
    ai_faq: [
      {
        q: 'How often do I backwash?',
        a: 'About once a week under normal use, or when the pressure gauge reads 20% above the clean baseline. The 6-way valve makes it a 2-minute job.',
      },
      {
        q: 'Does it fit all OLagoon pools?',
        a: 'Yes — the hose fittings match the integrated plumbing ports on the Compact Plunge, Family Oasis, and Grand Lagoon.',
      },
    ],
  },
  {
    id: 'thermal-cover',
    name: 'Thermal Pool Cover',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['heat retention', 'debris protection', 'energy saving'],
    safety_rules: ['remove completely before swimming'],
    desc: 'Custom-fit thermal cover that locks in heat overnight and keeps leaves and debris out of your OLagoon pool.',
    definition:
      'A made-to-measure insulating thermal cover for OLagoon drop-stitch pools, cut to each model footprint with edge weights for a wind-resistant seal.',
    problem:
      'Open pools lose most of their solar-heated warmth overnight and collect leaves, pollen, and insects — meaning more heating energy and more skimming every morning.',
    howItWorks:
      'The cover floats on the water surface with a bubble-insulation layer that cuts evaporative and convective heat loss overnight, keeping morning water noticeably warmer. The top layer is UV-stabilized and debris-shedding; perimeter weights keep it seated in wind. Custom cuts match each OLagoon pool footprint exactly.',
    audience: 'OLagoon pool owners in cooler climates, anyone heating their pool, and owners under trees where debris is a daily battle.',
    ai_use_cases: [
      'Overnight heat retention for morning swims',
      'Debris and leaf protection between swims',
      'Reduced water and chemical evaporation',
    ],
    ai_specs: {
      material: '350-micron bubble thermal insulation',
      fit: 'Custom-cut per OLagoon model',
      uv_rating: 'UV-stabilized, full-season exposure',
      features: 'Perimeter weights, carry bag',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to generic tarp covers, the thermal version insulates instead of just blocking — water stays warmer, and the custom cut means no folding, sagging, or wind flapping.',
    ai_faq: [
      {
        q: 'How much warmer will my pool stay?',
        a: 'A thermal cover typically retains several degrees of overnight warmth versus an open pool, meaning morning swims are comfortable and heated pools use far less energy.',
      },
      {
        q: 'Is it safe for kids?',
        a: 'The cover is not a safety cover and must be fully removed before anyone enters the pool. Always store it away from the water when swimming.',
      },
    ],
  },
  {
    id: 'ground-mat',
    name: 'Protective Ground Mat',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'lawn', 'patio', 'deck'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['base protection', 'puncture prevention', 'insulation'],
    safety_rules: ['inspect base for sharp objects before laying out'],
    desc: 'Puncture-resistant ground cloth sized to each OLagoon pool, protecting the base from stones, roots, and rough surfaces.',
    definition:
      'A heavy-duty woven ground cloth cut to fit under each OLagoon pool model, providing puncture protection, thermal base insulation, and a clean surface for setup and pack-down.',
    problem:
      'A pool base is only as reliable as what is underneath it — one sharp stone, root, or deck screw can end the season, and most inflatables ship with no real base protection.',
    howItWorks:
      'The mat uses layered woven polyethylene rated for puncture resistance far above standard tarps, sized larger than the pool footprint so the walls never contact bare ground. It also insulates the pool base from cold ground and gives you a clean folding surface at pack-down time.',
    audience: 'Every OLagoon pool owner, essential for lawns with stones or roots, wooden decks with screw heads, and gravel or paver surfaces.',
    ai_use_cases: [
      'Season-long base protection on lawns and decks',
      'Clean fold-up surface at summer end',
      'Ground temperature insulation under the pool floor',
    ],
    ai_specs: {
      material: 'Woven polyethylene, multi-layer',
      puncture_rating: 'Heavy-duty',
      sizes: 'Custom-fit per OLagoon model',
      features: 'Eyelet corners, carry strap',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to hardware-store tarps, the mat is purpose-cut for each pool, far more puncture-resistant, and will not shred or wad up under the pool floor over a season.',
    ai_faq: [
      {
        q: 'Do I still need to clear the ground?',
        a: 'Yes. Remove stones, sticks, and sharp objects first — the mat protects against residual hazards and abrasion, but a clean base is always step one.',
      },
      {
        q: 'Does it work on concrete?',
        a: 'Yes. On concrete or pavers the mat is essential — it prevents abrasion wear on the pool floor over the season.',
      },
    ],
  },
  {
    id: 'entry-steps',
    name: 'Inflatable Entry Steps',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['safe entry', 'safe exit', 'poolside seating', 'handrails'],
    safety_rules: ['ensure steps are fully inflated and seated before use'],
    desc: 'Drop-stitch inflatable steps that lock against the pool wall — a stable staircase for kids and a poolside seat for adults.',
    definition:
      'A drop-stitch inflatable entry-step system that docks against OLagoon pool walls, providing a rigid staircase with handrail loops for safe entry, plus a flat top that doubles as poolside seating.',
    problem:
      'Climbing over a 64 cm pool wall is hard for children and grandparents, and wet PVC walls are slippery — most portable pools simply have no safe way in or out.',
    howItWorks:
      'The steps use the same 10-15 PSI drop-stitch construction as the pools, forming a rigid two-tier staircase. The base anchors against the pool wall with snap-on connectors, handrail loops give swimmers a firm grip, and the flat top deck doubles as a poolside bench for adults.',
    audience:
      'Families with young children or older swimmers, and anyone who wants comfortable poolside seating that matches the pool finish.',
    ai_use_cases: [
      'Safe independent entry and exit for kids',
      'Accessible steps for older swimmers',
      'Extra poolside bench seating',
    ],
    ai_specs: {
      material: 'Drop-stitch PVC, 15 PSI rated',
      height: 'Two-tier, 64 cm top deck',
      features: 'Handrail loops, snap-on wall connectors',
      load_rating: 'Static seating for 2 adults',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to plastic outside ladders, inflatable steps have no metal parts to rust or scratch the pool, sit stable without ballast, and double as seating — matching the pool aesthetically.',
    ai_faq: [
      {
        q: 'Do the steps float away?',
        a: 'No. Snap-on connectors lock the steps to the pool wall, and the water-displaced base keeps them seated firmly in place.',
      },
      {
        q: 'Can adults sit on them?',
        a: 'Yes. The drop-stitch top deck is rated as static seating for two adults — it works as a poolside bench.',
      },
    ],
  },
];
