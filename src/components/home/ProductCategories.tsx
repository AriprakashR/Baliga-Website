import Link from 'next/link';

const CATEGORIES = [
  {
    name: 'Explosion-Proof Lighting',
    href: '/products/lighting',
    description:
      'Flameproof and increased-safety luminaires for Zone 1 & 2 areas.',
    icon: '' /* hand-drawn line-art SVG, no icon library */,
  },
  // ...Communication Systems, Panels & Enclosures, Flow Measuring Equipment
];

export default function ProductCategories() {
  return (
    <section className='bg-navy-900'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-24'>
        <div className='flex items-end justify-between flex-wrap gap-4 mb-12'>
          <div>
            <span className='font-display text-xs tracking-widest text-amber-500'>
              WHAT WE MAKE
            </span>
            <h2 className='mt-4 text-3xl md:text-4xl font-bold text-white'>
              Four product lines, one safety standard
            </h2>
          </div>
          <Link
            href='/products'
            className='font-display text-sm tracking-wide text-white/80 hover:text-white border-b border-white/30 hover:border-white transition-colors'
          >
            View Full Catalog →
          </Link>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {CATEGORIES.map(category => (
            <Link
              key={category.name}
              href={category.href}
              className='group border border-white/12 hover:border-amber-500/60 rounded-md p-6 bg-white/3 hover:bg-white/6 transition-colors'
            >
              <div className='text-amber-500'>{category.icon}</div>
              <h3 className='mt-6 font-display text-lg tracking-wide text-white normal-case'>
                {category.name}
              </h3>
              <p className='mt-2 font-body normal-case text-sm text-white/60 leading-relaxed'>
                {category.description}
              </p>
              <span className='mt-4 inline-block font-display text-xs tracking-widest text-white/50 group-hover:text-amber-500 transition-colors'>
                VIEW RANGE →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
