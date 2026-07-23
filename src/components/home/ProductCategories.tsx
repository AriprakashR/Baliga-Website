import Link from 'next/link';

const CATEGORIES = [
  {
    name: 'Explosion-Proof Lighting',
    href: '/products/lighting',
    description:
      'Luminaires, control gear, lighting & FRP junction boxes, switches, plug & sockets, starters, and cable glands.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-10 h-10'>
        <circle
          cx='24'
          cy='20'
          r='12'
          stroke='currentColor'
          strokeWidth='1.6'
        />
        <path
          d='M18 32h12M20 38h8'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
        <path
          d='M24 8v4M12 20h-4M40 20h-4M15.5 11.5l-2.8-2.8M32.5 11.5l2.8-2.8'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    name: 'Communication Systems',
    href: '/products/communication',
    description:
      'Explosion-proof communication equipment for hazardous industrial sites.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-10 h-10'>
        <rect
          x='14'
          y='8'
          width='20'
          height='32'
          rx='2'
          stroke='currentColor'
          strokeWidth='1.6'
        />
        <circle cx='24' cy='33' r='1.6' fill='currentColor' />
        <path
          d='M18 15h12M18 20h12M18 25h8'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    name: 'Panels & Enclosures',
    href: '/products/panels',
    description:
      'Control stations, panels, monitors, and purging systems for flameproof installations.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-10 h-10'>
        <rect
          x='9'
          y='9'
          width='30'
          height='30'
          rx='2'
          stroke='currentColor'
          strokeWidth='1.6'
        />
        <path
          d='M9 19h30M19 9v30M29 9v10'
          stroke='currentColor'
          strokeWidth='1.4'
        />
        <circle cx='24' cy='29' r='4' stroke='currentColor' strokeWidth='1.4' />
      </svg>
    ),
  },
  {
    name: 'Flow Measuring Equipment',
    href: '/products/flow-measuring',
    description:
      'Orifice plates, meter runs, venturi tubes, flow nozzles, and multistage assemblies.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-10 h-10'>
        <circle
          cx='24'
          cy='24'
          r='15'
          stroke='currentColor'
          strokeWidth='1.6'
        />
        <path
          d='M24 24l7-9'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinecap='round'
        />
        <circle cx='24' cy='24' r='1.8' fill='currentColor' />
        <path
          d='M24 12v2M24 34v2M12 24h2M34 24h2'
          stroke='currentColor'
          strokeWidth='1.2'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
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
