export interface ProductReview {
  author: string;
  country: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  verified: boolean;
}

// Part A: pools + sand filter pump
const productReviewsPartA: Record<string, ProductReview[]> = {
  'compact-plunge': [
    {
      author: 'Rachel Donovan',
      country: 'United States',
      rating: 5,
      date: '2026-05-20',
      title: 'Perfect for our small yard',
      text: 'Our townhouse yard is barely 6 meters deep and this fits with room to spare. Setup took about 40 minutes and the walls are genuinely rigid at full pressure — not saggy like old-style inflatable pools.',
      verified: true,
    },
    {
      author: 'Lukas Mayer',
      country: 'Germany',
      rating: 5,
      date: '2025-07-14',
      title: 'Surprisingly solid plunge pool',
      text: 'I was skeptical about an inflatable plunge pool but the drop-stitch walls feel like a hard-sided pool once inflated to 12 PSI. Filled it with cool water and it has become my daily post-run ritual.',
      verified: true,
    },
    {
      author: 'Marta Silva',
      country: 'Spain',
      rating: 4,
      date: '2026-06-02',
      title: 'Great quality, measure first',
      text: 'Excellent build quality and the included pump works well. Only advice: measure your space carefully — the stated dimensions are exact and you want some clearance around it for the Entry Steps.',
      verified: true,
    },
    {
      author: 'Ben Carter',
      country: 'Australia',
      rating: 5,
      date: '2025-12-08',
      title: 'Two summers in and still perfect',
      text: 'Drained it, dried it, folded it into the carry bag over winter and it came back with zero leaks. The PVC shows no fading despite full Australian sun. Money well spent.',
      verified: true,
    },
  ],
  'family-oasis': [
    {
      author: 'Jennifer Holt',
      country: 'United States',
      rating: 5,
      date: '2026-06-15',
      title: 'The whole family uses it daily',
      text: 'Two kids (7 and 10) plus two adults and there is still room to swim properly. The 20cm walls are stiff and stable, and the kids love having a real pool instead of a kiddie puddle.',
      verified: true,
    },
    {
      author: 'Pierre Dubois',
      country: 'France',
      rating: 5,
      date: '2025-08-03',
      title: 'Setup was a family afternoon project',
      text: 'Unboxed, laid the ground mat, inflated, filled — about 90 minutes total including the water. The instructions were clear and everything needed was in the box.',
      verified: true,
    },
    {
      author: 'Sofia Ricci',
      country: 'Italy',
      rating: 4,
      date: '2026-05-28',
      title: 'Great pool, get the filter pump',
      text: 'Beautiful pool and the drop-stitch construction is a clear step above ring pools. I would definitely pair it with the Sand Filter Pump — keeps the water clear for weeks with minimal attention.',
      verified: true,
    },
    {
      author: 'Daniel Novak',
      country: 'Czech Republic',
      rating: 5,
      date: '2025-07-22',
      title: 'Worth every euro',
      text: 'We compared rigid above-ground pools, which needed a concrete pad and professionals. This went on our existing lawn with the ground mat and cost a third of the quotes we got. No regrets.',
      verified: true,
    },
  ],
  'grand-lagoon': [
    {
      author: 'Marcus Whitfield',
      country: 'United Kingdom',
      rating: 5,
      date: '2026-06-10',
      title: 'Genuinely impressive engineering',
      text: 'Five meters of rigid pool that you can actually swim in. At full pressure the walls do not flex at all. It has survived a garden full of party guests and a very enthusiastic golden retriever.',
      verified: true,
    },
    {
      author: 'Amara Osei',
      country: 'Canada',
      rating: 5,
      date: '2025-07-30',
      title: 'Our backyard became the neighborhood spot',
      text: 'The size is the story here — real swimming, not just soaking. Water stays warm with the thermal cover and the whole thing still folds into a bag at the end of the season.',
      verified: true,
    },
    {
      author: 'Hendrik Jansen',
      country: 'Netherlands',
      rating: 4,
      date: '2026-05-05',
      title: 'Big pool, plan the logistics',
      text: 'Fantastic quality and the entry steps make it safe for our parents too. Just know what you are signing up for: filled, this is roughly 12,500 liters, so get your ground level right the first time.',
      verified: true,
    },
    {
      author: 'Isabella Moreno',
      country: 'United States',
      rating: 5,
      date: '2025-08-18',
      title: 'Hotel-quality pool at home',
      text: 'The interior finish and color look premium, not plasticky. Combined with the sand filter and cover, water maintenance is maybe 15 minutes a week. Best backyard purchase we have made.',
      verified: true,
    },
  ],
  'sand-filter-pump': [
    {
      author: 'Tomasz Kowalski',
      country: 'Poland',
      rating: 5,
      date: '2026-06-01',
      title: 'Water stays crystal clear',
      text: 'Runs quietly on a timer overnight and the water has not gone green once this season. Backwashing the sand takes two minutes. Exactly what we needed for the Family Oasis.',
      verified: true,
    },
    {
      author: 'Grace Thompson',
      country: 'United States',
      rating: 5,
      date: '2025-07-09',
      title: 'Set it and forget it',
      text: 'Hooked it up in 20 minutes with the included hoses. Our pool water stays clear for a month between refills now, versus a week of manual chlorine scooping before.',
      verified: true,
    },
    {
      author: 'Lars Andersen',
      country: 'Denmark',
      rating: 4,
      date: '2026-05-16',
      title: 'Effective filtration, read the manual',
      text: 'Does an excellent job keeping the water clean and the flow rate matches the pool size well. Take ten minutes to understand the valve settings before first use and it is smooth sailing.',
      verified: true,
    },
    {
      author: 'Nadia Haddad',
      country: 'France',
      rating: 5,
      date: '2025-08-25',
      title: 'Worth adding to any OLagoon pool',
      text: 'We added this a month after buying the Grand Lagoon and the difference in water clarity was obvious within days. The cover plus this pump is the complete package.',
      verified: true,
    },
  ],
};

export { productReviewsPartA };
