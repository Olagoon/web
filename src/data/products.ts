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
      length: '9\'10" (3.0 m)',
      width: '6\'7" (2.0 m)',
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
      length: '16\'5" (5.0 m)',
      width: '8\'2" (2.5 m)',
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
    audience:
      'OLagoon pool owners in cooler climates, anyone heating their pool, and owners under trees where debris is a daily battle.',
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
    audience:
      'Every OLagoon pool owner, essential for lawns with stones or roots, wooden decks with screw heads, and gravel or paver surfaces.',
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
  {
    id: 'round-pool',
    name: 'The Round Lagoon',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'garden', 'lawn'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['family swimming', 'backyard play', 'heated soaking'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'do not exceed 6 PSI'],
    desc: 'Round drop-stitch inflatable pool in reinforced PVC — 4-6 PSI rigid walls for stable, all-season family swimming on any level lawn.',
    definition:
      'A round high-density drop-stitch pool with reinforced PVC walls rated 4-6 PSI and 0-40°C water tolerance — the classic backyard circle for family swimming.',
    problem:
      'Ring pools bulge, wobble, and sag under leaning swimmers, while rigid pools need plumbing, permits, and permanent yard space that most families do not have.',
    howItWorks:
      'A high-density drop-stitch core bonds the top and bottom PVC layers with thousands of polyester threads, so the round walls inflate to 4-6 PSI (0.28-0.41 bar, max 6 PSI) and stand ruler-straight and stable — solid enough to lean on. The reinforced PVC shell handles water from 0 to 40°C, so the same pool takes cold-fill summer swims or heated soaks with an external heater. Setup is unroll, inflate with the electric air pump, and fill.',
    audience:
      'Families who want a stable full-size round pool for swimming and play, and homeowners who want a heated-soak option without permanent construction.',
    ai_use_cases: [
      'Family swimming and backyard play',
      'Heated soaking with an external heater',
      'Seasonal pool that folds away for winter',
    ],
    ai_specs: {
      shape: 'Round',
      material: 'High-density drop-stitch fabric & reinforced PVC',
      recommended_pressure: '4-6 PSI (0.28-0.41 bar)',
      max_pressure: '6 PSI (0.41 bar) — do not exceed',
      operating_water_temp: '0-40°C (32-104°F)',
      setup: 'Minutes with the electric air pump',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to ring pools, drop-stitch walls hold a stable shape under pressure without bulging and survive leaning swimmers and heated water. Compared to rigid pools, there is no plumbing, no permits, and it folds into a storage bag at season end.',
    ai_faq: [
      {
        q: 'Can I heat the water?',
        a: 'Yes. The shell is rated for water from 0 to 40°C, so an external heater works — keep the fill within that range.',
      },
      {
        q: 'How firm should the walls be?',
        a: 'Inflate to 4-6 PSI. Do not exceed the 6 PSI maximum — the walls are fully rigid well before that.',
      },
    ],
  },
  {
    id: 'rectangle-pool',
    name: 'The Rectangle Plunge',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['swimming', 'cold plunge', 'recovery', 'filter-ready swimming'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'keep filtration running'],
    desc: 'Rectangle drop-stitch pool with rigid sit-on walls and dual inlet/outlet ports — filter and chiller ready for swimming or cold plunges.',
    definition:
      'A rectangle high-strength drop-stitch pool whose rigid walls stay firm for sitting or leaning, with dual water inlet/outlet ports for sand filters or water chillers — ideal for both swimming and cold plunges.',
    problem:
      'Most inflatable pools have no plumbing ports at all, so owners cannot run a proper filter or a chiller — the two things that separate a real training pool from a stagnant puddle.',
    howItWorks:
      'High-strength drop-stitch walls inflate rigid enough to sit or lean on without deformation. Dual water inlet/outlet ports connect directly to a sand filter for everyday water clarity or a water chiller for cold-plunge therapy. Rapid inflation means full setup in just a few minutes, and the deflated pool folds down compactly for transport and storage.',
    audience:
      'Athletes and wellness users who want chiller-fed cold plunges, families who want filtered swim water, and anyone who wants pool plumbing without permanent installation.',
    ai_use_cases: [
      'Cold-plunge therapy with a connected chiller',
      'Daily swimming with sand-filter circulation',
      'Seasonal pool that packs down for storage',
    ],
    ai_specs: {
      shape: 'Rectangle',
      walls: 'High-strength drop-stitch — rigid for sitting or leaning',
      water_ports: 'Dual inlet/outlet for sand filters or water chillers',
      use_modes: 'Swimming and cold plunges',
      setup: 'Full setup in minutes',
      portability: 'Folds down compactly when deflated',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to portless inflatable pools, the dual ports accept real filtration and chillers — no buckets, no siphons. Compared to rigid plunge tanks, it needs no plumbing or permits and stores flat in the off-season.',
    ai_faq: [
      {
        q: 'Can I attach a chiller?',
        a: 'Yes. The dual water inlet/outlet ports are designed for water chillers and sand filters — connect, circulate, and the pool holds plunge temperature.',
      },
      {
        q: 'Can I sit on the walls?',
        a: 'Yes. The high-strength drop-stitch walls stay firm for sitting or leaning without deformation.',
      },
    ],
  },
  {
    id: 'square-pool',
    name: 'The Square Plunge',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'small garden'],
    water_condition: ['freshwater'],
    safety_level: 'medium',
    use_case: ['swimming', 'play', 'cold plunge', 'small-space swimming'],
    safety_rules: ['adult supervision required', 'secure level ground before setup', 'keep filtration running'],
    desc: 'Square drop-stitch pool that turns compact yards into swim spaces — rigid walls, dual filter/chiller ports, and minutes-fast setup.',
    definition:
      'A square high-strength drop-stitch pool whose footprint maximizes usable swim area in compact yards, with dual water inlet/outlet ports for sand filters or chillers and rigid sit-on walls.',
    problem:
      'Compact patios and side yards cannot fit a long rectangle pool, and ring pools waste what little space there is on bulging, unstable walls.',
    howItWorks:
      'A square footprint wastes no corner, so tight spaces get a full-size drop-stitch pool instead of an oversized bathtub. High-strength walls inflate rigid for sitting or leaning, dual water ports accept a sand filter or a chiller for cold plunges, and rapid inflation delivers full setup in minutes. Deflated, the pool folds down compactly for transport and storage.',
    audience:
      'Small-home and rental owners with patios, side returns, or compact gardens who refuse to give up swimming or cold-plunge therapy.',
    ai_use_cases: [
      'Full-size swimming in compact yards',
      'Cold-plunge setup with a connected chiller',
      'Family play pool that stores flat',
    ],
    ai_specs: {
      shape: 'Square',
      walls: 'High-strength drop-stitch — rigid for sitting or leaning',
      water_ports: 'Dual inlet/outlet for sand filters or water chillers',
      use_modes: 'Swimming, play, and cold plunges',
      setup: 'Full setup in minutes',
      portability: 'Folds down compactly when deflated',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to round pools of the same bounding size, the square footprint puts wasted corner space to work as swim area. Compared to ring pools, rigid drop-stitch walls and real plumbing ports make it a pool you keep, not one you replace.',
    ai_faq: [
      {
        q: 'Why square instead of round?',
        a: 'A square footprint wastes no corner — in a bounded patio or side yard you get noticeably more usable swim area than a round pool of the same overall size.',
      },
      {
        q: 'Can I run a filter and a chiller?',
        a: 'Yes. The dual water inlet/outlet ports accept sand filters or water chillers for swimming or cold-plunge use.',
      },
    ],
  },
  {
    id: 'rectangle-hot-tub',
    name: 'The Rectangle Hot Tub',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'indoor'],
    water_condition: ['freshwater', 'heated'],
    safety_level: 'medium',
    use_case: ['hot soaking', 'spa', 'cold plunge', 'all-season soaking'],
    safety_rules: [
      'adult supervision required',
      'do not exceed 40°C water temperature',
      'use a GFCI-protected outlet for heaters and pumps',
    ],
    desc: 'Rectangle inflatable hot pool tub with a 5 mm insulated floor, built-in rigid seats, and dual heater/filter/chiller ports — a true four-season spa.',
    definition:
      'A rectangular drop-stitch hot pool tub with a built-in 5 mm thermal insulated bottom, integrated non-floating rigid seats, and dual ports for external heaters, filters, or chillers — space-saving all-season hot and cold soaking.',
    problem:
      'Inflatable spas lose heat through the floor, have no real seats, and go soft at spa temperatures — so owners end up paying to heat the ground while sitting on the floor of a wading pool.',
    howItWorks:
      'A built-in 5 mm high-density insulation layer under the floor blocks ground chill, speeds up heating, reduces energy costs, and cushions every step. Integrated rigid drop-stitch seats stay firmly in place without floating, supporting an ergonomic luxury soaking posture. The high-pressure drop-stitch walls stay rock-solid even at 40°C (104°F), and the space-saving rectangular design fits patio corners and decks while thin rigid walls maximize interior legroom. Dual ports accept external heaters, filters, or chillers — hot soaks in winter, cold plunges in summer.',
    audience:
      'Homeowners who want a real four-season spa on a patio or deck without wiring in a permanent hot tub, and cold-plunge users who want one tub for both.',
    ai_use_cases: [
      'Winter hot soaks on patios and in conservatories',
      'Four-season spa with an external heater',
      'Dual-purpose hot soak and cold plunge tub',
    ],
    ai_specs: {
      shape: 'Rectangle',
      floor: '5 mm high-density thermal insulated bottom',
      seats: 'Integrated rigid drop-stitch seats — non-floating',
      walls: 'High-pressure drop-stitch — rock-solid at 40°C (104°F)',
      water_ports: 'Dual ports for external heaters, filters, or chillers',
      design: 'Space-saving rectangle; thin rigid walls maximize legroom',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to standard inflatable spas, the insulated floor stops ground heat loss, the rigid seats keep you off the floor, and the walls hold full rigidity at 40°C. Compared to acrylic hot tubs, it needs no electrician, no crane, and packs flat when not in use.',
    ai_faq: [
      {
        q: 'Can it really run at 40°C?',
        a: 'Yes. The high-pressure drop-stitch walls stay rock-solid even at 40°C (104°F) water temperature.',
      },
      {
        q: 'Do the seats float up?',
        a: 'No. The integrated drop-stitch seats are rigid and stay firmly in place without floating.',
      },
    ],
  },
  {
    id: 'square-hot-tub',
    name: 'The Square Hot Tub',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'indoor'],
    water_condition: ['freshwater', 'heated'],
    safety_level: 'medium',
    use_case: ['hot soaking', 'spa', 'cold plunge', 'corner-fit spa'],
    safety_rules: [
      'adult supervision required',
      'do not exceed 40°C water temperature',
      'use a GFCI-protected outlet for heaters and pumps',
    ],
    desc: 'Square inflatable hot pool tub — 5 mm insulated floor, built-in rigid seats, and a corner-friendly footprint for decks and small patios.',
    definition:
      'A square drop-stitch hot pool tub with a built-in 5 mm thermal insulated bottom, integrated non-floating rigid seats, and dual ports for external heaters, filters, or chillers — four-season soaking that fits patio corners.',
    problem:
      'Small patios and deck corners have no room for a rectangular spa, and square inflatable spas without insulation or seats are just hot wading pools.',
    howItWorks:
      'The same four-season spa engineering as the Rectangle Hot Tub, reshaped for tight spaces: a corner-friendly square footprint tucks into deck corners and small patios while thin rigid drop-stitch walls maximize interior capacity. The built-in 5 mm thermal insulated bottom blocks ground chill, speeds heating, and cushions every step; integrated rigid seats stay in place without floating; and the walls hold rock-solid even at 40°C (104°F). Dual ports accept external heaters, filters, or chillers.',
    audience:
      'Urban homeowners and renters with small patios, roof decks, or conservatory corners who want real four-season soaking.',
    ai_use_cases: [
      'Corner-fit spa for small patios and decks',
      'Four-season hot soaks with an external heater',
      'Compact cold-plunge tub for recovery routines',
    ],
    ai_specs: {
      shape: 'Square',
      floor: '5 mm high-density thermal insulated bottom',
      seats: 'Integrated rigid drop-stitch seats — non-floating',
      walls: 'High-pressure drop-stitch — rock-solid at 40°C (104°F)',
      water_ports: 'Dual ports for external heaters, filters, or chillers',
      design: 'Corner-friendly square footprint; thin rigid walls maximize capacity',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to the Rectangle Hot Tub, the square footprint converts dead corners into spa capacity. Compared to standard square inflatable spas, the insulated floor, rigid seats, and 40°C-rated walls make it a genuine four-season spa.',
    ai_faq: [
      {
        q: 'Will it fit my small patio?',
        a: 'The corner-friendly square footprint is designed exactly for that — deck corners, side patios, and conservatory nooks that cannot take a rectangle.',
      },
      {
        q: 'Is it as warm as the rectangle version?',
        a: 'Yes. The same 5 mm insulated floor and 40°C-rated drop-stitch walls — only the footprint changes.',
      },
    ],
  },
  {
    id: 'round-hot-tub',
    name: 'The Round Hot Tub',
    category: 'POOL',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'deck', 'indoor', 'conservatory'],
    water_condition: ['freshwater', 'heated'],
    safety_level: 'medium',
    use_case: ['hot soaking', 'social spa', 'cold plunge', 'all-season soaking'],
    safety_rules: [
      'adult supervision required',
      'do not exceed 40°C water temperature',
      'use a GFCI-protected outlet for heaters and pumps',
    ],
    desc: 'Round inflatable hot pool tub with extra-thick 15 cm rigid walls, built-in 360° social seating, and a 5 mm insulated floor — vortex-circulated hot spa and cold plunge in one.',
    definition:
      'A round drop-stitch hot pool tub with reinforced 15 cm rigid walls, a 5 mm thermal insulated bottom, ergonomic built-in curved seats in a 360° social layout, and corner-free vortex water circulation for even heating and filtration.',
    problem:
      'Inflatable spas with bench inserts and soft walls feel flimsy at the rim, sit users in a line instead of a circle, and heat unevenly with dead zones behind the seats.',
    howItWorks:
      'Extra-thick 15 cm reinforced drop-stitch walls distribute pressure evenly through a full 360°, delivering rock-solid edge support, a wide armrest rim, and superior side-wall heat retention. The built-in 5 mm thermal insulated bottom blocks ground chill, speeds heating, and cushions every step. Integrated non-floating curved seats wrap the perimeter in a 360° face-to-face layout, and the corner-free round interior drives smooth vortex water circulation — even heating and filtration with zero dead zones. Ready for hot spa heating and cold plunges.',
    audience:
      'Families and entertainers who want a face-to-face social spa, and four-season soakers who want even heat without dead zones.',
    ai_use_cases: [
      'Face-to-face social soaks with friends and family',
      'Four-season spa in conservatories and on patios',
      'Vortex-circulated hot spa or cold plunge',
    ],
    ai_specs: {
      shape: 'Round',
      walls: 'Extra-thick 15 cm rigid drop-stitch — 360° pressure distribution, wide armrest rim',
      floor: '5 mm high-density thermal insulated bottom',
      seats: 'Ergonomic built-in non-floating curved seats — 360° social layout',
      circulation: 'Corner-free vortex flow — even heating and filtration, zero dead zones',
      use_modes: 'Hot spa heating and cold plunges',
      warranty: '2-year structural warranty',
    },
    ai_comparison:
      'Compared to square or rectangular spas, the round interior seats everyone face-to-face and eliminates corner dead zones — water heats and filters evenly. The 15 cm walls and armrest rim feel solid under leaning arms, not soft like standard inflatable spa rims.',
    ai_faq: [
      {
        q: 'How many people does it seat?',
        a: 'The 360° curved-seat layout wraps the full perimeter, so the whole tub sits face-to-face — capacity depends on the chosen size, with everyone in the conversation.',
      },
      {
        q: 'Why round for a spa?',
        a: 'A corner-free interior creates smooth vortex circulation — the water heats and filters evenly with zero dead zones, and integrated seating wraps everyone into the conversation.',
      },
    ],
  },
  {
    id: 'pool-ladder',
    name: 'Pool Ladder',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater', 'chlorinated'],
    safety_level: 'low',
    use_case: ['safe entry', 'safe exit', 'drop-stitch pools'],
    safety_rules: ['ensure ladder feet are fully seated before use', 'check rubber caps are intact'],
    desc: 'Corrosion-resistant pool ladder with a 633 mm inner span that clears 10-15 cm drop-stitch walls — non-slip steps, high handrails, and liner-safe flared feet.',
    definition:
      'A KD-packed corrosion-resistant pool ladder engineered for thick 10-15 cm drop-stitch pool walls, with a 633 mm inner span, 1620 mm high U-shaped handrails, four non-slip steps per side, and liner-safe flared rubber-capped feet.',
    problem:
      'Generic pool ladders pinch or rub against thick inflatable walls, scratch PVC floors with bare metal feet, and wobble when wet swimmers put their full weight on the top step.',
    howItWorks:
      'A wide 633 mm inner span and 1022 mm base clear 10-15 cm inflatable walls without pinching or rubbing. Outward-curved flared bottom legs with thick protective rubber caps keep the ladder stable while protecting the PVC pool floor from scratches or punctures. High U-shaped handrails and crossbars — 1620 mm total height with ø25 mm tubing and reinforcing bars — give secure, wobble-free support, and four wide textured steps per side grip wet bare feet.',
    audience:
      'OLagoon pool and hot tub owners who want a stable, wall-safe metal ladder instead of climbing over, and families with kids or older swimmers.',
    ai_use_cases: [
      'Stable entry and exit for thick drop-stitch pools',
      'Safe access for kids and older swimmers',
      'Corrosion-proof ladder for outdoor and chlorinated water',
    ],
    ai_specs: {
      inner_span: '633 mm — clears 10-15 cm walls',
      base_width: '1022 mm',
      height: '1620 mm total, U-shaped handrails with crossbars',
      tubing: 'ø25 mm with reinforcing bars',
      steps: '4 non-slip textured steps per side',
      feet: 'Flared legs with thick rubber caps — liner-safe',
      finish: 'Corrosion-resistant for outdoor and chlorinated pools',
      packing: 'KD flat packing — ships flat',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to generic ladders, the 633 mm span is sized for drop-stitch wall thickness, the flared rubber-capped feet protect the PVC floor, and the KD flat pack ships in the container alongside the pool.',
    ai_faq: [
      {
        q: 'Will it fit my drop-stitch pool walls?',
        a: 'Yes. The 633 mm inner span and 1022 mm base are designed to clear 10-15 cm inflatable walls without pinching or rubbing.',
      },
      {
        q: 'Do the feet damage the pool floor?',
        a: 'No. Outward-curved flared legs with thick protective rubber caps spread the load and protect the PVC floor from scratches or punctures.',
      },
    ],
  },
  {
    id: 'electric-spa-pump',
    name: 'Electric SPA Pump',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'indoor'],
    water_condition: ['freshwater', 'heated'],
    safety_level: 'low',
    use_case: ['spa heating', 'filtration', 'wave massage', 'circulation'],
    safety_rules: ['read manual before use', 'use a GFCI-protected outlet', 'disconnect power before servicing'],
    desc: 'All-in-one electric spa pump that heats, filters, and circulates OLagoon hot pool tubs — with a WiFi model for app control.',
    definition:
      'An all-in-one electric spa pump for OLagoon hot pool tubs with heating, wave, and filter connectors, supplied with pool connecting pipes, an inflatable wave pipe, and a drain hose. Available in standard and WiFi app-control models.',
    problem:
      'A hot pool tub without matched water management is just a big bucket — owners juggle separate heaters, filters, and circulation pumps that were never designed to work together.',
    howItWorks:
      'One unit heats, filters, and circulates. Dedicated heating, wave, and filter connectors plug straight into the hot tub ports, an inflatable wave pipe adds a gentle massage current, and the included pool connecting pipes and drain hose complete the loop. The LQ177WIFI model adds app control, so the water reaches temperature before you step outside.',
    audience:
      'OLagoon Rectangle, Square, and Round Hot Tub owners who want matched, warranty-safe water management — and anyone who wants to start heating from their phone.',
    ai_use_cases: [
      'Matched heating and filtration for hot pool tubs',
      'Wave massage current via the inflatable wave pipe',
      'App-controlled pre-heating with the WiFi model',
    ],
    ai_specs: {
      models: 'LQ177 / LQ177WIFI (app control)',
      connectors: 'Heating, wave, and filter connectors',
      included: 'Pool connecting pipes, inflatable wave pipe, drain hose',
      compatible_with: 'OLagoon Rectangle, Square, and Round Hot Pool Tubs',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to cobbling together separate heaters and pumps, this is one matched system with the right connectors for OLagoon tub ports — and the WiFi model adds remote heating control that generic setups cannot match.',
    ai_faq: [
      {
        q: 'What is the difference between the two models?',
        a: 'The LQ177 is controlled at the pump; the LQ177WIFI adds app control, so you can start heating remotely before you go outside.',
      },
      {
        q: 'Does it work with all OLagoon hot tubs?',
        a: 'Yes. The heating, wave, and filter connectors match the dual ports on the OLagoon Rectangle, Square, and Round Hot Pool Tubs.',
      },
    ],
  },
  {
    id: 'lithium-inflator',
    name: 'Lithium-Battery Electric Inflator',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'beach', 'campsite'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['cordless inflation', 'pressure topping', 'rapid setup'],
    safety_rules: ['read manual before use', 'do not leave unattended while inflating'],
    desc: 'Cordless lithium-battery inflator with 0-16 PSI auto-stop — high-volume and high-pressure modes inflate OLagoon pools anywhere, no outlet needed.',
    definition:
      'A cordless lithium-battery electric inflator for OLagoon pools, with 0-16 PSI pressure range, dual flow modes of 350 L/min (high volume) and 70 L/min (high pressure), and an 11.1V 6000mAh rechargeable battery.',
    problem:
      'Drop-stitch pools need real pressure, not just volume — and the nearest power outlet is rarely where the pool is. Mains pumps tether you to the wall; hand pumps tether you to the floor.',
    howItWorks:
      'An 11.1V 6000mAh rechargeable lithium pack drives two flow stages: 350 L/min high-volume mode fills the walls fast, then 70 L/min high-pressure mode tops them off anywhere in the 0-16 PSI range with auto shut-off at your target. Set the pressure, press start, and walk away — walls reach spec without over-pressure.',
    audience:
      'Pool owners who set up away from outlets — at the far end of the garden, the campsite, or the beach — and anyone who wants push-button inflation with auto-stop.',
    ai_use_cases: [
      'Outlet-free pool setup anywhere',
      'Auto-stop inflation to exact pressure',
      'Top-ups mid-season without dragging cords',
    ],
    ai_specs: {
      models: 'HT-790 / HT-790D / HT-790Plus',
      pressure_range: '0-16 PSI with auto shut-off',
      flow_rate: '350 L/min (high volume) / 70 L/min (high pressure)',
      battery: '11.1V 6000mAh rechargeable lithium pack',
      power_source: 'Cordless — no outlet required',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to mains pumps, it goes where the pool goes. Compared to hand pumps, two-stage flow and auto shut-off mean the walls reach full spec without a workout or a gauge.',
    ai_faq: [
      {
        q: 'Will it fully inflate a drop-stitch pool?',
        a: 'Yes. The 0-16 PSI range with 70 L/min high-pressure mode tops drop-stitch walls off to full rigidity, with auto shut-off at your set pressure.',
      },
      {
        q: 'How many inflations per charge?',
        a: 'The 11.1V 6000mAh pack is sized for a full pool setup plus top-ups on a single charge — runtime depends on pool size and target pressure.',
      },
    ],
  },
  {
    id: 'electric-air-pump',
    name: 'Electric Air Pump',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['inflation', 'deflation', 'rapid setup'],
    safety_rules: ['read manual before use', 'do not leave unattended while running'],
    desc: 'AC electric air pump (HT-728) that quickly inflates and deflates OLagoon pools — 110-120V or 220-240V, hose and nozzle adapters included.',
    definition:
      'The HT-728 AC electric air pump that ships with OLagoon pools: quick inflate and deflate in one unit, 110-120V or 220-240V operation, and a full hose and nozzle adapter set. CE, RoHS, and REACH certified.',
    problem:
      'Inflating a family pool by hand takes the fun out of setup day, and cheap pumps without the right nozzles leave owners jury-rigging seals that leak pressure.',
    howItWorks:
      'The HT-728 quickly inflates and deflates: plug into 110-120V or 220-240V mains, connect the hose, and the pool takes shape in minutes. The 27 × 10.6 × 14.8 cm body stashes in the pool bag, and the included hose and nozzle adapters fit valves across the OLagoon range. CE, RoHS, and REACH certified.',
    audience:
      'Every OLagoon pool owner — the HT-728 ships standard — plus anyone who needs a spare or a faster setup than a hand pump.',
    ai_use_cases: [
      'Minutes-fast pool inflation from any mains outlet',
      'Fast deflation for compact off-season storage',
      'One adapter set for all OLagoon valve types',
    ],
    ai_specs: {
      model: 'HT-728',
      voltage: 'AC 110-120V or 220-240V',
      function: 'Quick inflate and deflate',
      product_size: '27 × 10.6 × 14.8 cm',
      included: 'Air hose and multiple nozzle adapters',
      certifications: 'CE, RoHS, REACH',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to hand pumps, setup drops from a workout to an errand. Compared to generic electric pumps, the matched nozzle set fits OLagoon valves out of the box, with no leak-prone improvisation.',
    ai_faq: [
      {
        q: 'Does it work on both US and EU power?',
        a: 'Yes. The HT-728 runs on AC 110-120V or 220-240V mains.',
      },
      {
        q: 'Can it deflate the pool too?',
        a: 'Yes. It quickly inflates and deflates, which makes off-season pack-down much faster.',
      },
    ],
  },
  {
    id: 'pool-cover-bag',
    name: 'Pool Cover & Storage Bag',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden', 'shed'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['debris protection', 'off-season storage', 'transport'],
    safety_rules: ['ensure cover is dry before long-term storage'],
    desc: 'Fitted pool cover plus a heavy-duty storage bag — keeps debris out while the pool is up and protects it folded through the off-season.',
    definition:
      'The standard OLagoon pool cover and storage bag set: a fitted cover that keeps leaves and debris out of the water while the pool is up, and a heavy-duty carry bag that protects the folded pool through the off-season.',
    problem:
      'An uncovered pool collects leaves, pollen, and insects overnight — and a pool stored loose in a shed collects scratches and punctures all winter.',
    howItWorks:
      'Two pieces cover both halves of pool ownership. The fitted cover goes on between swims to keep debris out of the water, and the heavy-duty storage bag swallows the deflated, folded pool for the off-season, protecting the PVC shell in transit and storage. Both are matched to each OLagoon pool model.',
    audience:
      'Every OLagoon pool owner — the set ships standard with the pool — plus owners needing replacements after seasons of UV exposure.',
    ai_use_cases: [
      'Keeping water debris-free between swims',
      'Protecting the folded pool through winter',
      'Clean transport for rental and seasonal setups',
    ],
    ai_specs: {
      cover: 'Fitted OLagoon pool cover — keeps out leaves, debris, and insects',
      storage_bag: 'Heavy-duty carry bag for the deflated, folded pool',
      fit: 'Matched to each OLagoon pool model',
      use: 'Cover while in season; bag for off-season storage',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to tarps and generic bags, both pieces are cut to the exact OLagoon footprint — no dragging tarp edges, no bag that is 30 cm too short after the pool is folded.',
    ai_faq: [
      {
        q: 'Do I need both?',
        a: 'They do different jobs: the cover keeps debris out of the water in season, and the bag protects the folded pool in the off-season. Both ship standard with OLagoon pools.',
      },
      {
        q: 'Will the cover fit my model?',
        a: 'Yes. Covers and bags are matched to each OLagoon pool model — order against your pool and the fit is exact.',
      },
    ],
  },
  {
    id: 'repair-kit',
    name: 'PVC Repair Kit',
    category: 'ACCESSORY',
    region: ['US', 'EU', 'GLOBAL'],
    skill: 'beginner',
    environment: ['backyard', 'patio', 'garden'],
    water_condition: ['freshwater'],
    safety_level: 'low',
    use_case: ['puncture repair', 'seam repair', 'valve maintenance'],
    safety_rules: ['deflate before repairing', 'work in a ventilated area when using adhesive'],
    desc: 'The OLagoon PVC repair kit — patches, adhesive, and valve tools to fix punctures and seam nicks without draining the season.',
    definition:
      'The standard OLagoon PVC repair kit: self-adhesive and glue-on PVC patches, valve-side tools, and adhesive for puncture and seam repairs on any OLagoon pool or hot pool tub.',
    problem:
      'A pinhole or seam nick used to end the pool season — without patches, adhesive, and the right valve tools on hand, a five-minute fix becomes a dead pool.',
    howItWorks:
      'The kit covers the common failure cases: PVC patches for pinholes and cuts, PVC-compatible adhesive for durable bonds, and valve accessories for the fittings. Find the leak with soapy water, clean the area with alcohol, patch, press, and wait — the repair is permanent and the pool goes straight back into service.',
    audience:
      'Every OLagoon pool and hot tub owner — the kit ships standard — plus owners running rental or multi-family pools that see harder use.',
    ai_use_cases: [
      'Permanent puncture repair in minutes',
      'Seam nick fixes without draining the pool',
      'Valve maintenance and replacement readiness',
    ],
    ai_specs: {
      patches: 'PVC repair patches for punctures and seam nicks',
      adhesive: 'PVC-compatible repair adhesive',
      tools: 'Valve and repair accessories',
      compatible_with: 'All OLagoon pools and hot pool tubs',
      warranty: '1-year warranty',
    },
    ai_comparison:
      'Compared to generic vinyl patch kits, the patches and adhesive are matched to OLagoon PVC and drop-stitch construction, and the valve tools fit OLagoon fittings — no improvised substitutes.',
    ai_faq: [
      {
        q: 'Can I patch without draining the pool?',
        a: 'For most pinholes and seam nicks, yes — find the leak with soapy water, clean the area, and patch per the included instructions. See our Inflatable Care & Repair guide for the full walkthrough.',
      },
      {
        q: 'Does it work on hot tubs too?',
        a: 'Yes. The kit is compatible with all OLagoon pools and hot pool tubs.',
      },
    ],
  },
];
