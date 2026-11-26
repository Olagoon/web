export interface StandalonePage {
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
  features: { label: string; desc: string }[];
  pageType: 'service' | 'capability' | 'about';
}

export const standalonePages: StandalonePage[] = [
  {
    slug: 'engineering-perfection',
    title: 'Engineering Perfection',
    description:
      "OLagoon's engineering philosophy: precision manufacturing, premium material selection, rigorous quality control, and size-specific design for drop-stitch inflatable pools and accessories.",
    pageType: 'about',
    sections: [
      {
        heading: 'Superior Material Sourcing',
        body: 'We invest considerable resources in identifying, testing, and procuring the finest fabrics and components available globally. Sourcing protocol includes batch testing for tensile strength, tear resistance, coating adhesion, and UV stability.',
      },
      {
        heading: 'Precision Engineering & Design',
        body: 'Our engineering team leverages advanced CAD software and real-world pressure testing to create drop-stitch pool structures that are rigid at 10-15 PSI, dimensionally stable, and built to hold thousands of liters without bulging.',
      },
      {
        heading: 'Craftsmanship & Manufacturing Excellence',
        body: 'OLagoon employs highly skilled technicians. Our production facility is equipped with state-of-the-art CNC cutting machines and thermo-welding equipment.',
      },
      {
        heading: 'Rigorous Quality Control & Testing',
        body: 'Multi-layered QC system with stringent checks at each critical step, culminating in comprehensive final testing including 24-48 hour pressure holding tests, leak detection, dimensional verification, and functional tests.',
      },
    ],
    features: [
      { label: 'Compact Plunge Pools', desc: 'Space-saving plunge design with rigid 20cm walls' },
      { label: 'Family Pools', desc: 'Full-size swim area engineered for daily family use' },
      { label: 'Grand Lagoons', desc: 'Large-format pools with yacht-grade construction' },
      { label: 'Pool Accessories', desc: 'Filtration, covers, ground protection, and safe entry' },
    ],
  },
  {
    slug: 'oem-odm-manufacturer',
    title: 'Inflatable Pool OEM/ODM Manufacturer',
    description:
      'OLagoon is a premier OEM/ODM manufacturer of drop-stitch inflatable pools and accessories, operated by Olagoon LLC. CE-certified factory. Drop-stitch core lamination, custom mold design, private label. 12,000 m\u00B2 facility in Qingdao, China.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Specification & Design Brief',
        body: 'Share your target specs, CAD drawings, or reference product. Our engineering team reviews materials, dimensions, and compliance requirements (CE and BSCI) before quoting.',
      },
      {
        heading: '3D Mold Prototyping',
        body: 'We design and CNC-machine custom molds for inflatable pools. Prototype samples produced within 15\u201340 working days.',
      },
      {
        heading: 'Material Selection & Sample Production',
        body: 'Choose from military-grade laminated PVC (0.9mm\u20131.2mm) with double-layer drop-stitch cores. Pre-production samples with your brand colours, logo, and packaging.',
      },
      {
        heading: 'CE Compliance',
        body: 'Every OEM order includes CE declaration of conformity, product traceability records, BSCI social compliance report, and REACH material declarations.',
      },
      {
        heading: 'Bulk Production & Inline QC',
        body: '100-point quality checklist. Each unit undergoes 24\u201348 hour pressure retention testing and visual inspection before packing; seam peel strength is verified by batch sampling every 50 units (ASTM D751).',
      },
      {
        heading: 'FOB Qingdao Logistics',
        body: 'Finished goods palletized, shrink-wrapped, and container-loaded at Qingdao port. Export documentation, customs clearance, and real-time shipment tracking.',
      },
    ],
    features: [
      { label: '12,000 m\u00B2 Facility', desc: 'ISO 9001 certified workshop in Qingdao' },
      { label: '200+ Skilled Workers', desc: 'Experienced manufacturing workforce' },
      { label: '15,000+ Units/Year', desc: 'Annual production capacity' },
      { label: '50+ Countries', desc: 'Global export reach' },
      { label: 'Custom Mold Design', desc: 'CNC-machined molds for any shape' },
      { label: 'Private Label', desc: 'Full branding and packaging service' },
    ],
  },
  {
    slug: 'design-powerhouse',
    title: 'Design & Innovation',
    description:
      'OLagoon is more than a factory \u2014 we are a design-driven manufacturer. In-house R&D, structural simulation, custom ODM solutions, and advanced drop-stitch material engineering for global B2B partners.',
    pageType: 'capability',
    sections: [
      {
        heading: 'Proprietary R&D & Engineering',
        body: 'Our in-house R&D team consists of veteran polymer engineers, industrial designers, and pool usability specialists. We leverage advanced structural simulation and CAD to optimize wall panel geometry, ensuring every OLagoon pool delivers rigidity, capacity, and comfort that rivals rigid pools.',
      },
      {
        heading: 'Ergonomics & Advanced Material Integration',
        body: 'Our design philosophy centers around the swimmer \u2014 from wall height and entry ergonomics to engineered drop-stitch chamber architecture. We continuously innovate with military-grade PVC, reinforced drop-stitch panels, and UV-resistant coatings.',
      },
      {
        heading: 'Turnkey ODM & White-Label Solutions',
        body: 'We offer comprehensive ODM services including customized pool geometry, localized trend-driven graphic designs, branding placement, and bespoke accessory ecosystems. From sketch to shelf, we bring your brand vision to life.',
      },
    ],
    features: [
      { label: 'Structural Simulation', desc: 'CAD-optimized wall and floor geometry' },
      { label: 'Ergonomic Engineering', desc: 'Precision swimmer-centric design' },
      { label: 'Custom Mold & Tooling', desc: 'CNC-machined molds, 15-20 day prototypes' },
      { label: 'Bespoke Accessory Ecosystems', desc: 'Complete OEM accessory packages' },
      { label: '14+ In-House Engineers', desc: 'Polymer, industrial, and materials expertise' },
      { label: '8+ Registered Patents', desc: 'Proprietary design and manufacturing IP' },
    ],
  },
];
