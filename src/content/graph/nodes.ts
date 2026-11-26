export interface GraphNode {
  id: string;
  type: 'product-category' | 'technology' | 'material' | 'use-case' | 'component' | 'concept';
  name: Record<string, string>;
  description: Record<string, string>;
  features?: Record<string, string[]>;
  useCases?: Record<string, string[]>;
  faq?: Record<string, Array<{ q: string; a: string }>>;
  related: string[];
  slug: Record<string, string>;
}

export const nodes: GraphNode[] = [
  {
    id: 'inflatable-pool',
    type: 'product-category',
    name: {
      en: 'Inflatable Pool',
      fr: 'Piscine Gonflable',
      de: 'Aufblasbarer Pool',
      el: 'Φουσκωτή Πισίνα',
      tr: 'Şişme Havuz',
      ro: 'Piscină Gonflabilă',
      th: 'สระน้ำเป่าลม',
      es: 'Piscina Hinchable',
      pt: 'Piscina Inflável',
      it: 'Piscina Gonfiabile',
      ru: 'Надувной бассейн',
      pl: 'Basen Nadmuchiwany',
      ar: 'مسبح قابل للنفخ',
      nl: 'Opblaasbaar Zwembad',
      sv: 'Uppblåsbar Pool',
      no: 'Oppblåsbar Pool',
      fi: 'Ilmatäyttöinen Allas',
      cs: 'Nafukovací Bazén',
      da: 'Oppustelig Pool',
    },
    description: {
      en: 'Portable drop-stitch pool that inflates into a rigid, self-supported swim zone — engineered like a yacht deck with 20 cm walls and yacht-grade seams.',
    },
    features: {
      en: [
        'Drop-Stitch 2.0 core with 16,000 threads per square meter',
        'Rigid 20 cm sit-on walls at 10-15 PSI operating pressure',
        'Double-needle RF-welded seams rated to 18 PSI',
        'UV-stabilized military-grade PVC walls and floor',
        'Packs away flat for off-season storage',
      ],
    },
    useCases: {
      en: [
        'Small backyard plunge and cold soaks',
        'Family swimming and kids play all summer',
        'Garden entertaining and hosting guests',
        'Seasonal setups for renters and holiday homes',
      ],
    },
    faq: {
      en: [
        {
          q: 'Is an inflatable pool really rigid?',
          a: 'Yes. The Drop-Stitch 2.0 core weaves 16,000 threads per square meter, so at 10-15 PSI the walls feel like a hard-sided pool — no frame, no sagging.',
        },
        {
          q: 'How long does it take to inflate?',
          a: 'With the included high-volume pump, most OLagoon pools reach operating pressure in 15-25 minutes.',
        },
        {
          q: 'Where does the water go when the season ends?',
          a: 'Attach a standard garden hose to the drain valve, let the pool empty, deflate, and store it flat in a closet or garage until next summer.',
        },
      ],
    },
    related: [
      'drop-stitch-core',
      'rf-welding',
      'military-grade-pvc',
      'high-pressure',
      'pool-accessory',
      'small-backyard',
      'family-fun',
      'entertaining',
    ],
    slug: { en: 'inflatable-pool' },
  },
  {
    id: 'steel-frame-pool',
    type: 'product-category',
    name: {
      en: 'Steel Frame Pool',
      fr: 'Piscine à Structure Acier',
      de: 'Stahlrahmenpool',
      es: 'Piscina de Estructura de Acero',
      pt: 'Piscina de Estrutura de Aço',
      it: 'Piscina con Struttura in Acciaio',
      ru: 'Каркасный бассейн',
      pl: 'Basen Stelażowy',
      ar: 'مسبح بهيكل فولاذي',
      tr: 'Çelik Konstrüksiyonlu Havuz',
      el: 'Πισίνα Μεταλλικού Σκελετού',
      nl: 'Stalen Framezwembad',
    },
    description: {
      en: 'Seasonal pool built from a painted steel pipe frame with a hanging vinyl liner — the common mid-market alternative to drop-stitch pools.',
    },
    features: {
      en: [
        'Powder-coated steel tube frame',
        'Hanging vinyl liner',
        'Multi-part assembly required',
        'Frame must be disassembled and dried before storage',
      ],
    },
    useCases: {
      en: ['Seasonal backyard swimming on perfectly level ground'],
    },
    faq: {
      en: [
        {
          q: 'Do steel frame pools rust?',
          a: 'Painted steel frames can rust where paint chips, especially at joints and after wet-season storage — a common complaint in frame pool reviews.',
        },
      ],
    },
    related: ['inflatable-pool'],
    slug: { en: 'steel-frame-pool' },
  },
  {
    id: 'hard-sided-pool',
    type: 'product-category',
    name: {
      en: 'Hard-Sided Pool',
      fr: 'Piscine à Parois Rigides',
      de: 'Pool mit harten Wänden',
      es: 'Piscina de Paredes Rígidas',
      pt: 'Piscina de Paredes Rígidas',
      it: 'Piscina con Pareti Rigide',
      ru: 'Бассейн с жёсткими бортами',
      pl: 'Basen Sztywny',
      ar: 'مسبح بجدران صلبة',
      tr: 'Sert Duvarlı Havuz',
      el: 'Πισίνα Στερεών Τοίχων',
      nl: 'Zwembad met Harde Wand',
    },
    description: {
      en: 'Permanent or semi-permanent pools with rigid resin, composite, or panel walls — typically requiring ground works, professional installation, and permits.',
    },
    features: {
      en: [
        'Rigid resin or steel panel walls',
        'Permanent footprint in the garden',
        'Professional installation and site preparation',
        'Highest total cost of ownership',
      ],
    },
    useCases: {
      en: ['Year-round permanent swimming for owned properties'],
    },
    faq: {
      en: [
        {
          q: 'Can I take a hard-sided pool with me when I move?',
          a: 'Rarely. Panel pools are built into a prepared site, so moving house usually means leaving the pool — and its cost — behind.',
        },
      ],
    },
    related: ['inflatable-pool'],
    slug: { en: 'hard-sided-pool' },
  },
  {
    id: 'small-backyard',
    type: 'use-case',
    name: {
      en: 'Small Backyard Plunge',
      fr: 'Plongeon pour Petit Jardin',
      de: 'Kleiner Garten-Pool',
      es: 'Piscina Compacta para Jardines Pequeños',
      pt: 'Piscina Compacta para Quintais Pequenos',
      it: 'Piccola Piscina per Giardini Compatti',
      ru: 'Компактный бассейн для малого двора',
      pl: 'Mały Basen Ogrodowy',
      ar: 'مسبح صغير للفناء الخلفي',
      tr: 'Küçük Arka Bahçe Havuzu',
      el: 'Μικρή Πισίνα Κήπου',
      nl: 'Compacte Tuinzwembad',
    },
    description: {
      en: 'A compact rigid pool for tight spaces — a couple with a small townhouse yard gets a real place to cool off after work, without permanent construction.',
    },
    features: {
      en: [
        'Fits a 2m x 1.5m footprint on any level surface',
        'Sets up in under an hour with no tools',
        'Ground Mat protects the base on patios and decks',
        'Thermal Cover keeps water warm between swims',
      ],
    },
    useCases: {
      en: [
        'After-work cooling off in townhouse yards',
        'Renters who cannot build a permanent pool',
        'Cold plunge routines on small patios',
      ],
    },
    faq: {
      en: [
        {
          q: 'Will a plunge pool work on a paved patio?',
          a: 'Yes. Place the Ground Mat down first, then inflate on any level, drainage-friendly surface — no sand bed or ground works needed.',
        },
      ],
    },
    related: ['inflatable-pool', 'pool-accessory'],
    slug: { en: 'small-backyard' },
  },
  {
    id: 'family-fun',
    type: 'use-case',
    name: {
      en: 'Family Backyard Fun',
      fr: 'Plaisir en Famille au Jardin',
      de: 'Familienfreuden im Garten',
      es: 'Diversión Familiar en el Jardín',
      pt: 'Diversão em Família no Quintal',
      it: 'Divertimento in Famiglia in Giardino',
      ru: 'Семейный отдых во дворе',
      pl: 'Rodzinna Zabawa w Ogrodzie',
      ar: 'مرح عائلي في الفناء الخلفي',
      tr: 'Aile İçin Bahçe Eğlencesi',
      el: 'Οικογενειακή Διασκέδαση στον Κήπο',
      nl: 'Familieplezier in de Tuin',
    },
    description: {
      en: 'A full-size pool the whole family can actually swim in — a 3m x 2m swim area with rigid 20 cm drop-stitch walls, clean water, and easy entry for little ones.',
    },
    features: {
      en: [
        '3m x 2m swim area with rigid 20 cm drop-stitch walls',
        'Sand Filter Pump keeps water clear all summer',
        'Entry Steps give children a safe way in and out',
        'No sharp frame parts or exposed hardware',
      ],
    },
    useCases: {
      en: [
        'Kids swimming and water play all summer',
        'Weekend family time without pool clubs or trips',
        'Supervised splash time for young children',
      ],
    },
    faq: {
      en: [
        {
          q: 'How do I keep the water safe for children?',
          a: 'Run the Sand Filter Pump daily, keep the Thermal Cover on when the pool is not in use, and always supervise children near water.',
        },
      ],
    },
    related: ['inflatable-pool', 'pool-accessory'],
    slug: { en: 'family-fun' },
  },
  {
    id: 'entertaining',
    type: 'use-case',
    name: {
      en: 'Entertaining & Hosting',
      fr: 'Réceptions & Hospitalité',
      de: 'Feste & Empfänge',
      es: 'Reuniones & Hospitalidad',
      pt: 'Eventos & Hospitalidade',
      it: 'Intrattenimento & Ospitalità',
      ru: 'Приёмы и гостеприимство',
      pl: 'Przyjęcia i Gościnność',
      ar: 'الاستضافة والمناسبات',
      tr: 'Eğlence ve Misafir Ağırlama',
      el: 'Δεξιώσεις & Φιλοξενία',
      nl: 'Entertainment & Gastvrijheid',
    },
    description: {
      en: 'A statement lagoon for gatherings — a showpiece 5m x 2.5m swim zone engineered like a yacht deck, with reliable water care and zero fuss for the host.',
    },
    features: {
      en: [
        '5m x 2.5m swim zone engineered like a yacht deck',
        'Sand Filter Pump and Thermal Cover keep water party-ready',
        'Entry Steps complete the resort feel for guests',
        'Drains and packs flat after the season',
      ],
    },
    useCases: {
      en: [
        'Weekend gatherings and garden parties',
        'Summer birthdays and neighborhood events',
        'Holiday homes that host in high season',
      ],
    },
    faq: {
      en: [
        {
          q: 'Can the pool handle a full party of guests?',
          a: 'Yes. The Grand Lagoon is rated for real swimming and play, not just wading — and the Sand Filter Pump keeps water clear even after a busy weekend.',
        },
      ],
    },
    related: ['inflatable-pool', 'pool-accessory'],
    slug: { en: 'entertaining' },
  },
  {
    id: 'drop-stitch-core',
    type: 'technology',
    name: {
      en: 'Drop-Stitch 2.0 Core',
      fr: 'Âme Drop-Stitch 2.0',
      de: 'Drop-Stitch 2.0 Kern',
      es: 'Núcleo Drop-Stitch 2.0',
      pt: 'Núcleo Drop-Stitch 2.0',
      it: 'Nucleo Drop-Stitch 2.0',
      ru: 'Технология Drop-Stitch 2.0',
      nl: 'Drop-Stitch 2.0 Kern',
    },
    description: {
      en: 'Two PVC layers joined by 16,000 polyester threads per square meter — inflating to a flat, rigid panel that gives pool walls yacht-deck stiffness at a fraction of the weight.',
    },
    features: {
      en: [
        '16,000 threads per square meter',
        'Up to 25% more rigidity than standard drop-stitch',
        'Around 10% lighter than previous generations',
        'Flat, uniform panels without bulging',
      ],
    },
    useCases: {
      en: ['Pool walls', 'Pool floors', 'Rigid inflatable structures'],
    },
    faq: {
      en: [
        {
          q: 'Why does thread count matter?',
          a: 'More threads mean smaller air chambers between the layers, so the panel stays flatter and stiffer under pressure — the same principle that keeps a yacht tender rigid.',
        },
      ],
    },
    related: ['inflatable-pool', 'high-pressure'],
    slug: { en: 'drop-stitch-core' },
  },
  {
    id: 'rf-welding',
    type: 'technology',
    name: {
      en: 'RF Welding',
      fr: 'Soudage RF',
      de: 'HF-Schweißen',
      es: 'Soldadura RF',
      pt: 'Soldagem RF',
      it: 'Saldatura RF',
      ru: 'ВЧ-сварка',
      nl: 'RF-Lassen',
    },
    description: {
      en: 'Radio-frequency welding fuses PVC seams at the molecular level — combined with double-needle stitching for seams that hold pressure season after season.',
    },
    features: {
      en: [
        'Molecular-level PVC seam fusion',
        'Double-needle stitching reinforcement',
        'Seams rated to 18 PSI',
        'Automated welding for repeatable quality',
      ],
    },
    useCases: {
      en: ['Pool wall seams', 'Floor seams', 'Valve bonding'],
    },
    faq: {
      en: [
        {
          q: 'Are welded seams better than glued ones?',
          a: 'Yes. Glue degrades with UV and heat cycles; RF welding melts the materials into one piece, which is why it is the standard for life rafts and rescue craft.',
        },
      ],
    },
    related: ['inflatable-pool', 'military-grade-pvc'],
    slug: { en: 'rf-welding' },
  },
  {
    id: 'military-grade-pvc',
    type: 'material',
    name: {
      en: 'Military-Grade PVC',
      fr: 'PVC de Qualité Militaire',
      de: 'PVC in Militärqualität',
      es: 'PVC de Grado Militar',
      pt: 'PVC de Grau Militar',
      it: 'PVC di Grado Militare',
      ru: 'ПВХ военного класса',
      nl: 'PVC van Militaire Kwaliteit',
    },
    description: {
      en: 'UV-stabilized, puncture-resistant PVC membrane with multiple reinforcement layers — the same fabric family used in military inflatable boats, applied to pool walls and floors.',
    },
    features: {
      en: [
        'UV-stabilized for full-season sun exposure',
        'Multi-layer reinforced construction',
        'Puncture and abrasion resistant',
        'REACH-compliant, safe for skin contact',
      ],
    },
    useCases: {
      en: ['Pool walls', 'Pool floors', 'Marine inflatable structures'],
    },
    faq: {
      en: [
        {
          q: 'Is the PVC safe for children?',
          a: 'Yes. The fabric is REACH-compliant and tested for skin contact — it is the same material family used in inflatable boats and rescue craft.',
        },
      ],
    },
    related: ['inflatable-pool', 'rf-welding'],
    slug: { en: 'military-grade-pvc' },
  },
  {
    id: 'high-pressure',
    type: 'concept',
    name: {
      en: 'High-Pressure Structure',
      fr: 'Structure à Haute Pression',
      de: 'Hochdruckkonstruktion',
      es: 'Estructura de Alta Presión',
      pt: 'Estrutura de Alta Pressão',
      it: 'Struttura ad Alta Pressione',
      ru: 'Высоконапорная конструкция',
      nl: 'Hogedrukconstructie',
    },
    description: {
      en: 'The engineering principle behind rigid inflatable pools: a drop-stitch chamber held at 10-15 PSI operating pressure (18 PSI rated) turns air and fabric into a load-bearing structure.',
    },
    features: {
      en: [
        '10-15 PSI operating pressure',
        '18 PSI rated safety margin',
        '20 cm wall height that stays rigid under load',
        'Pressure relief via high-flow valves',
      ],
    },
    useCases: {
      en: ['Rigid inflatable pools', 'Yacht tenders', 'Inflatable boats'],
    },
    faq: {
      en: [
        {
          q: 'What happens if I over-inflate?',
          a: 'The pool is rated to 18 PSI with a comfortable margin above the 10-15 PSI operating range. A pressure gauge on the pump makes it easy to stay in range.',
        },
      ],
    },
    related: ['drop-stitch-core', 'inflatable-pool'],
    slug: { en: 'high-pressure' },
  },
  {
    id: 'pool-accessory',
    type: 'component',
    name: {
      en: 'Pool Accessories',
      fr: 'Accessoires de Piscine',
      de: 'Poolzubehör',
      es: 'Accesorios de Piscina',
      pt: 'Acessórios de Piscina',
      it: 'Accessori per Piscina',
      ru: 'Аксессуары для бассейна',
      nl: 'Zwembadaccessoires',
    },
    description: {
      en: 'The OLagoon accessory ecosystem: sand filter pump for clear water, thermal cover for warm and clean water, ground mat for base protection, and entry steps for safe access.',
    },
    features: {
      en: [
        'Sand Filter Pump for all-season water clarity',
        'Thermal Pool Cover retains heat and blocks debris',
        'Ground Mat protects the pool base',
        'Entry Steps for safe, stable access',
      ],
    },
    useCases: {
      en: [
        'Water care for family pools',
        'Heat retention for plunge pools',
        'Base protection on patios and lawns',
        'Safe entry for children and guests',
      ],
    },
    faq: {
      en: [
        {
          q: 'Which accessories do I actually need?',
          a: 'Most owners start with the Sand Filter Pump and Thermal Cover for water care, then add the Ground Mat on rough surfaces and Entry Steps for young swimmers.',
        },
      ],
    },
    related: ['inflatable-pool'],
    slug: { en: 'pool-accessory' },
  },
];
