export interface GuideRecord {
  slug: string;
  category: string;
  title: string;
  description: string;
  tldr: string;
  problem: string;
  solution: string;
  audience: string;
  steps: string[];
  faq: { q: string; a: string }[];
  relatedProducts: string[];
  relatedGuides: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  waterType: string[];
}

export const guides: GuideRecord[] = [
  {
    slug: 'choosing-a-drop-stitch-pool',
    category: 'buying-guide',
    title: 'How to Choose Your Drop-Stitch Pool',
    description:
      'How to pick between the Compact Plunge, Family Oasis, and Grand Lagoon by yard size, household size, and budget.',
    tldr: 'The $999 Compact Plunge (2 m x 1.5 m) suits couples and small patios, the $1,299 Family Oasis (3 m x 2 m) fits families of four to six, and the $1,999 Grand Lagoon (5 m x 2.5 m) hosts parties of eight to ten. All three share the same rigid 20 cm drop-stitch walls, 10-15 PSI inflation, and 2-year structural warranty.',
    problem:
      'Shoppers see three OLagoon models with similar drop-stitch construction and the same 20 cm walls, so the differences that matter most, namely footprint, capacity, and price, get overlooked. A pool that is too large overwhelms a small yard and deck load limits, while one that is too small leaves a growing family cramped within a single summer.',
    solution:
      'Decide with three variables in order: available ground area, number of regular swimmers, and total budget. Measure the spot first and add at least 60 cm of clearance on all sides for entry steps and the filter pump. Then pick the model whose capacity covers your household plus occasional guests.',
    audience: 'First-time pool buyers comparing the three OLagoon drop-stitch models.',
    steps: [
      'Measure your intended pool area, including 60 cm of access clearance on every side',
      'Count your regular swimmers: two adults, a family of four to six, or a crowd of eight to ten',
      'Confirm the ground can bear the filled weight, up to 12,000 L for the Grand Lagoon',
      'Pick the model: Compact Plunge at 2 m x 1.5 m ($999), Family Oasis at 3 m x 2 m ($1,299), or Grand Lagoon at 5 m x 2.5 m ($1,999)',
      'Budget the essentials: the $249 sand filter pump, the $89 ground mat, and the $199 entry steps',
      'Review the warranty terms before buying; every OLagoon pool carries a 2-year structural warranty',
    ],
    faq: [
      {
        q: 'Which OLagoon pool is best for a small yard?',
        a: 'The Compact Plunge. At 2 m x 1.5 m and $999 it fits patios and small gardens while still holding two adults in 530 gal (2,000 L) of water.',
      },
      {
        q: 'Can the Family Oasis handle a pool party?',
        a: 'It comfortably seats four to six swimmers in 1,190 gal (4,500 L). For regular parties of eight to ten, step up to the Grand Lagoon with its 12,000 L capacity and dual filter ports.',
      },
      {
        q: 'Are all three pools the same quality?',
        a: 'Yes. All use the same 10-15 PSI drop-stitch core, 20 cm rigid walls, UV-resistant PVC, and 2-year structural warranty. The difference is size and capacity, not quality.',
      },
      {
        q: 'Who makes OLagoon pools?',
        a: 'Olagoon LLC, based in Albuquerque, New Mexico, USA. Founded in 2012 with manufacturing managed by the Qingdao operation team, OLagoon builds to CE, ISO, BSCI, and REACH standards and backs every pool with a 2-year structural warranty.',
      },
    ],
    relatedProducts: ['compact-plunge', 'family-oasis', 'grand-lagoon'],
    relatedGuides: ['inflatable-pool-vs-rigid-pool', 'pool-site-preparation', 'pool-setup-guide'],
    difficulty: 'beginner',
    waterType: ['backyard'],
  },
  {
    slug: 'pool-setup-guide',
    category: 'tutorial',
    title: 'Drop-Stitch Pool Setup: From Box to First Swim',
    description:
      'Unbox, position, inflate, fill, and treat your OLagoon pool in a single afternoon with this step-by-step setup guide.',
    tldr: 'Unroll the pool on a level spot over the ground mat, inflate to 10-15 PSI with the electric pump in about 15 minutes, connect the sand filter pump, fill with a garden hose, and balance the water before the first swim.',
    problem:
      'New owners sometimes rush setup by unrolling on sloped or stony ground, underinflating the walls, or swimming before the water is treated. Each mistake shortens pool life or turns the first swim into a disappointment.',
    solution:
      'Follow the full sequence: prepare the site, lay the ground mat, inflate to the rated 10-15 PSI, connect filtration, fill, then balance the water. Active work takes under an hour, and filling takes one to three hours depending on hose flow.',
    audience: 'New OLagoon owners setting up a Compact Plunge, Family Oasis, or Grand Lagoon for the first time.',
    steps: [
      'Unbox and unroll the pool on flat, clean ground and let it warm in the sun for 15 minutes to relax the PVC',
      'Lay the protective ground mat, then center the pool with its valve facing the power outlet',
      'Inflate with the electric pump to 10-15 PSI; the walls are ready when they no longer flex under hand pressure',
      'Check that the pool sits level before adding water, because a sloped fill strains one wall all season',
      'Connect the sand filter pump to the plumbing port and tighten both hose fittings',
      'Fill with a garden hose, which takes one to three hours depending on model and water pressure',
      'Test the water, adjust pH to 7.2-7.6, add sanitizer, and run the filter for one full cycle',
      'Dock the entry steps against the pool wall before the first swim',
    ],
    faq: [
      {
        q: 'How long does setup take?',
        a: 'About 15 minutes to inflate to 10-15 PSI, then one to three hours to fill depending on hose flow and pool size. No tools or professional installation are needed.',
      },
      {
        q: 'What PSI should I inflate to?',
        a: '10-15 PSI. Below 10 PSI the walls flex and cannot be sat on; at 15 PSI the drop-stitch core is fully rigid. The gauge on the pump shows the reading.',
      },
      {
        q: 'Do I need the ground mat?',
        a: 'It is strongly recommended. The $89 mat protects the pool base from stones, roots, and deck screws, and one sharp object can end the season.',
      },
      {
        q: 'When can we swim?',
        a: 'As soon as the water is balanced, with pH between 7.2 and 7.6 and sanitizer in range, and the entry steps are secured. That is usually the same day you fill.',
      },
    ],
    relatedProducts: ['ground-mat', 'sand-filter-pump', 'entry-steps'],
    relatedGuides: ['pool-site-preparation', 'pool-water-care', 'pool-filtration-guide'],
    difficulty: 'beginner',
    waterType: ['backyard'],
  },
  {
    slug: 'pool-water-care',
    category: 'maintenance',
    title: 'Pool Water Care: Clear Water All Season',
    description:
      'A weekly water care routine for OLagoon pools covering filter schedules, cover use, testing, and when a full refill makes sense.',
    tldr: 'Run the sand filter pump every day, test the water twice a week, keep the thermal cover on between swims, and plan one full refill per season. Small consistent checks beat weekend rescue chemistry every time.',
    problem:
      'Standing pool water turns green within days without circulation and sanitation. Most cloudy-water problems trace back to three gaps: too little filter runtime, no cover, and irregular testing.',
    solution:
      'Adopt a 15-minute weekly routine: test pH and sanitizer twice a week, keep the filter running daily, backwash when the pressure gauge climbs, and keep the thermal cover on between swims. Under normal care a full drain and refill is only needed once per season.',
    audience: 'OLagoon pool owners who want clear, safe water without weekly draining.',
    steps: [
      'Run the sand filter pump every day: 4-6 hours for the Compact Plunge, 6-8 for the Family Oasis, 10-12 for the Grand Lagoon',
      'Test pH and free chlorine twice a week with test strips, targeting pH 7.2-7.6 and 1-3 ppm chlorine',
      'Adjust chemicals in the evening and let the filter circulate them overnight',
      'Backwash the filter when the pressure gauge reads 20 percent above its clean baseline',
      'Keep the thermal cover on between swims to block debris and retain warmth',
      'Skim leaves and insects daily, because decaying debris consumes chlorine',
      'Shock the pool after heavy use or heavy rain, following the chemical label directions',
    ],
    faq: [
      {
        q: 'How often should I test the water?',
        a: 'Twice a week with test strips, plus after heavy use, rain, or top-ups. Small corrections are cheap; a green pool is a multi-day fix.',
      },
      {
        q: 'How long should the filter run each day?',
        a: 'Size runtime to your model: 4-6 hours for the Compact Plunge, 6-8 hours for the Family Oasis, and 10-12 hours for the Grand Lagoon. Split the runtime so water never sits still for more than half a day.',
      },
      {
        q: 'When should I empty and refill the pool?',
        a: 'Once per season under normal care, or when the water stays dull despite correct chemistry. Use the drain mode on the sand filter pump to empty.',
      },
      {
        q: 'Does the cover really help water quality?',
        a: 'Yes. The thermal cover blocks leaves, pollen, and insects, which cuts chlorine demand and skimming time, and it retains overnight warmth as a bonus.',
      },
    ],
    relatedProducts: ['sand-filter-pump', 'thermal-cover'],
    relatedGuides: ['pool-filtration-guide', 'pool-winter-storage', 'pool-safety-essentials'],
    difficulty: 'beginner',
    waterType: ['freshwater'],
  },
  {
    slug: 'pool-safety-essentials',
    category: 'safety',
    title: 'Backyard Pool Safety Essentials',
    description:
      'The non-negotiable safety rules for OLagoon pools: constant adult watch, no diving, safe entry, and pump electrical safety.',
    tldr: 'A responsible adult must watch children whenever the pool is accessible, diving is never allowed into 64 cm of water, entry steps make getting in and out safe, and the filter pump must connect to a grounded outlet protected from weather.',
    problem:
      'Portable pools are often treated more casually than built-in pools, yet shallow 64 cm water carries the same drowning and injury risks, especially for children. Electrical hazards around the filter pump add a second and entirely preventable danger.',
    solution:
      'Set household rules before the first swim: constant adult watch, no head-first entry, entry steps for everyone, and adult-only handling of the pump and its power connection. Close the season by draining the pool so it cannot collect standing water.',
    audience: 'Every household with children, pets, or guests using an OLagoon pool.',
    steps: [
      'Assign a designated adult watcher whenever children are in or near the pool, with no phone and no alcohol',
      'Enforce a strict no-diving rule, because 64 cm of water is never deep enough for head-first entry',
      'Install the entry steps and require everyone to use them, especially children and older swimmers',
      'Keep pets out of the pool unless closely watched, since claws stress the PVC and pets tire quickly',
      'Plug the filter pump into a grounded outlet protected from rain and sprinklers',
      'Disconnect power before touching the pump or hoses for any maintenance',
      'Keep a reaching pole or life ring poolside and teach children to ask before entering',
      'Drain the pool when the season ends so it cannot collect rainwater',
    ],
    faq: [
      {
        q: 'Do I need a fence around an inflatable pool?',
        a: 'Many jurisdictions require barriers for any pool deeper than 30 cm, including portable ones. Check local codes, and never leave a filled pool where a child can reach it alone.',
      },
      {
        q: 'Why is diving banned in a drop-stitch pool?',
        a: 'The water is only about 64 cm deep. Head-first entry risks serious head, neck, and spine injury, and the rigid 20 cm walls make the impact worse than a soft-sided pool.',
      },
      {
        q: 'Are the walls safe to sit on?',
        a: 'Yes. Inflated to 10-15 PSI the drop-stitch walls are rated as seating for adults, but never run along the edge or use the wall as a jumping platform.',
      },
      {
        q: 'How do I make the pump electrically safe?',
        a: 'Use a grounded outlet, keep connections dry and off the ground, route cords so they cannot be tripped over or pulled into the water, and unplug before any maintenance.',
      },
    ],
    relatedProducts: ['entry-steps', 'sand-filter-pump'],
    relatedGuides: ['pool-setup-guide', 'pool-water-care', 'choosing-a-drop-stitch-pool'],
    difficulty: 'beginner',
    waterType: ['backyard'],
  },
  {
    slug: 'pool-winter-storage',
    category: 'maintenance',
    title: 'Winter Storage: Draining, Cleaning, and Packing Your Pool',
    description:
      'End the season correctly by draining, cleaning, drying, folding, and storing your pool and filter pump so next summer starts like new.',
    tldr: 'Drain with the filter pump drain mode, clean the liner, dry the pool completely in the sun, fold it into the carry bag, and store everything frost-free indoors. A properly stored OLagoon pool lasts many seasons.',
    problem:
      'Pools packed away wet grow mold and mildew that stain the PVC permanently. A filter pump left outside with water inside can also crack in the first freeze. Both failures are avoidable in a single afternoon of closing work.',
    solution:
      'Close the pool before the first frost: drain, clean with mild soap, dry thoroughly, fold loosely, and store in the carry bag in a frost-free indoor space. Drain and dry the sand filter pump and hoses separately.',
    audience: 'OLagoon owners in seasonal climates preparing for winter.',
    steps: [
      'Disconnect power, then drain the pool using the drain mode on the sand filter pump',
      'Remove the ground mat and let it dry separately',
      'Clean the liner with mild soap and a soft sponge, never harsh chemicals or pressure washers',
      'Deflate fully through the valve and dry both sides in the sun for several hours',
      'Fold loosely from the end opposite the valve, avoiding sharp creases',
      'Pack the pool in its carry bag and store it in a dry, frost-free indoor space',
      'Drain all water from the filter pump, hoses, and sand bed, then store the pump indoors',
      'Store pool chemicals sealed, cool, and away from children',
    ],
    faq: [
      {
        q: 'Can I leave the pool outside inflated over winter?',
        a: 'No. Freezing water expands and can split seams and damage the drop-stitch core. Always drain and store the pool indoors before the first frost.',
      },
      {
        q: 'How dry does the pool need to be?',
        a: 'Completely dry on both sides. Wipe it down and give it a few hours of sun; trapped moisture is what causes mold stains over winter.',
      },
      {
        q: 'What about the sand in the filter pump?',
        a: 'Drain all water from the sand bed and pump housing and store the unit where it cannot freeze. The sand can stay in the tank and typically lasts about five seasons.',
      },
      {
        q: 'Where should I store the folded pool?',
        a: 'Any dry, frost-free indoor spot such as a closet, basement shelf, or heated garage. Keep it away from rodents and sharp shelf edges.',
      },
    ],
    relatedProducts: ['sand-filter-pump', 'ground-mat'],
    relatedGuides: ['pool-water-care', 'pool-filtration-guide', 'pool-setup-guide'],
    difficulty: 'beginner',
    waterType: ['backyard'],
  },
  {
    slug: 'pool-filtration-guide',
    category: 'technical',
    title: 'Sand Filter Pump Guide: Setup, Backwash, and Runtime',
    description:
      'How to set up, backwash, and size runtimes for the OLagoon sand filter pump so pool water stays clear with minimal effort.',
    tldr: 'The $249 sand filter pump moves 2,400 L/h through silica sand that traps particles down to 20-40 microns. Backwash when the gauge climbs 20 percent above baseline and size daily runtime to turn over your pool volume at least twice.',
    problem:
      'Owners who under-run the filter battle green water, while owners who run it nonstop wear out the pump early. Few know what the six-way valve positions actually do or when backwashing is required.',
    solution:
      'Match runtime to pool volume, turning over the water at least twice per day: about 4-6 hours for the Compact Plunge, 6-8 hours for the Family Oasis, and 10-12 hours for the Grand Lagoon. Backwash and rinse whenever the pressure gauge reads 20 percent above its clean baseline.',
    audience: 'OLagoon pool owners running the sand filter pump on any model.',
    steps: [
      'Fill the pump tank with about 17.5 kg of #20 silica sand and connect both hoses to the pool ports',
      'Prime the pump with water before the first start-up',
      'Set the six-way valve to filter and run the pump daily',
      'Note the clean-filter pressure reading on day one as your baseline',
      'Backwash for two minutes when the gauge rises 20 percent above baseline',
      'Rinse for 30 seconds after backwashing to settle the sand bed',
      'Return the valve to filter and log the new baseline',
      'Replace the sand roughly every five seasons',
    ],
    faq: [
      {
        q: 'How long should the pump run each day?',
        a: 'Turn over your pool volume at least twice at 2,400 L/h: about 4-6 hours for the Compact Plunge (2,000 L), 6-8 hours for the Family Oasis (4,500 L), and 10-12 hours for the Grand Lagoon (12,000 L).',
      },
      {
        q: 'How often do I backwash?',
        a: 'About once a week in season, or whenever the pressure gauge reads 20 percent above your clean baseline. The six-way valve makes it a two-minute job.',
      },
      {
        q: 'Why is the water cloudy right after backwashing?',
        a: 'The sand bed needs settling. Run the rinse setting for about 30 seconds after backwashing to stop dirty water returning to the pool.',
      },
      {
        q: 'How long does the sand last?',
        a: 'About five seasons. When flow stays weak after backwashing, the sand has worn down and needs replacing with one 17.5 kg bag of #20 silica sand.',
      },
    ],
    relatedProducts: ['sand-filter-pump'],
    relatedGuides: ['pool-water-care', 'pool-setup-guide', 'pool-winter-storage'],
    difficulty: 'intermediate',
    waterType: ['freshwater'],
  },
  {
    slug: 'inflatable-pool-vs-rigid-pool',
    category: 'comparison',
    title: 'Inflatable vs Rigid Pools: Which Is Right for Your Backyard?',
    description:
      'An honest comparison of drop-stitch inflatable pools and rigid built-in pools across cost, installation, portability, durability, and comfort.',
    tldr: 'A rigid in-ground pool costs $50,000 or more and is permanent, while an OLagoon drop-stitch pool costs $999 to $1,999, installs in an afternoon, and folds away for winter. Drop-stitch walls at 10-15 PSI close most of the comfort gap, so rigid wins only if you want year-round swimming.',
    problem:
      'Buyers often assume every inflatable pool is a flimsy ring pool that sags and leaks within a season, and they dismiss the entire category. Meanwhile an in-ground pool locks homeowners into five-figure construction, permits, and permanent maintenance.',
    solution:
      'Compare the two on the factors that matter: upfront cost, installation effort, portability, seasonal storage, and durability. For most households with a defined swim season, a drop-stitch pool with rigid 20 cm walls delivers most of the experience for a small fraction of the cost.',
    audience: 'Homeowners deciding between an inflatable pool and a rigid built-in pool.',
    steps: [
      'Compare cost: $999 to $1,999 for an OLagoon pool versus $50,000 or more for in-ground construction',
      'Compare installation: a 15-minute inflation versus weeks of excavation, plumbing, and permits',
      'Compare storage: fold into a carry bag for winter versus a permanent structure year-round',
      'Compare durability: UV-resistant drop-stitch PVC with a 2-year warranty versus gunite or fiberglass shells',
      'Compare comfort: rigid 20 cm sit-on walls and entry steps versus tile coping and built-in benches',
      'Check local rules, because portable pools often avoid the fencing and permit requirements of permanent pools',
    ],
    faq: [
      {
        q: 'Are inflatable pools as durable as rigid pools?',
        a: 'Not equal, but closer than most expect. OLagoon pools use the same drop-stitch construction as yacht tenders, inflated to 10-15 PSI, and carry a 2-year structural warranty. Rigid shells simply last decades.',
      },
      {
        q: 'Can adults actually sit on inflatable walls?',
        a: 'Yes. The 20 cm drop-stitch walls are rigid at 10-15 PSI and rated for seated adults, so they feel like a firm bench rather than a bouncy air ring.',
      },
      {
        q: 'Which costs less over five years?',
        a: 'The inflatable, by a wide margin. Budget roughly $1,300 to $2,400 upfront plus about $50 to $100 per season in chemicals; in-ground pools add thousands per year in opening, closing, heating, and repairs.',
      },
      {
        q: 'Who should still choose a rigid pool?',
        a: 'Households wanting year-round swimming, diving depth, property-value gains, or custom shapes. For seasonal backyard swimming, the drop-stitch pool wins on value.',
      },
    ],
    relatedProducts: ['compact-plunge', 'family-oasis', 'grand-lagoon'],
    relatedGuides: ['choosing-a-drop-stitch-pool', 'pool-setup-guide', 'pool-winter-storage'],
    difficulty: 'beginner',
    waterType: ['any'],
  },
  {
    slug: 'pool-site-preparation',
    category: 'tutorial',
    title: 'Pool Site Preparation: Level Ground, Clearance, and Base Options',
    description:
      'Prepare the perfect spot for your OLagoon pool with level checks, slope limits, overhead clearance, and base options from grass to concrete to decking.',
    tldr: 'Pick a spot that is level within 2-3 cm, clear of overhead wires and branches, and large enough for 60 cm of access clearance. Lay the $89 ground mat on any base, whether grass, concrete, or decking, after removing every sharp object.',
    problem:
      'A pool holding thousands of liters pushes straight down and outward, so even a gentle slope loads one wall all season and leaves the waterline looking crooked. Overhead hazards and hidden stones cause problems that no amount of later adjustment can fix.',
    solution:
      'Verify the site before setup day. Confirm the ground is level within 2-3 cm using a straight board and spirit level, clear overhead wires and branches, choose a base that drains well, and lay the protective ground mat larger than the pool footprint.',
    audience: 'OLagoon owners choosing and preparing a spot for any pool model.',
    steps: [
      'Choose a spot with at least 60 cm of clearance on all sides for steps, the pump, and walking',
      'Check level with a straight board and spirit level, correcting anything beyond a 2-3 cm slope',
      'Remove every stone, stick, root, and sharp object from the footprint',
      'Look up and keep the pool clear of power lines, branches, and anything that drops debris',
      'Pick your base, since grass, concrete, pavers, and decking all work with the ground mat',
      'Lay the protective ground mat larger than the pool footprint',
      'Position the pool valve toward your grounded power outlet before inflating',
    ],
    faq: [
      {
        q: 'What slope is too much for a pool?',
        a: 'More than 2-3 cm across the footprint. Beyond that, one wall carries extra water pressure all season and the pool looks visibly tilted when filled.',
      },
      {
        q: 'Can I set up the pool on grass?',
        a: 'Yes, grass is the most common base. Mow it short, remove stones and roots, and lay the ground mat before setup.',
      },
      {
        q: 'Does the pool work on concrete or decking?',
        a: 'Yes, with the ground mat underneath to prevent abrasion. For decks, confirm the structure can bear the filled weight; a Family Oasis holds about 4,500 L, roughly 4.5 tonnes.',
      },
      {
        q: 'How close can the pool be to trees?',
        a: 'As far as practical. Overhanging branches drop leaves that consume chlorine and shade the water, slowing natural warming. If trees are unavoidable, use the thermal cover daily.',
      },
    ],
    relatedProducts: ['ground-mat', 'thermal-cover'],
    relatedGuides: ['pool-setup-guide', 'choosing-a-drop-stitch-pool'],
    difficulty: 'beginner',
    waterType: ['backyard'],
  },
];
