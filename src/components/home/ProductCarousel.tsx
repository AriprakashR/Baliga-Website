import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

const CATEGORIES = [
  {
    name: 'Explosion-Proof Lighting',
    href: '/products/lighting',
    image: '/products/Explosion_Proof_Lighting.jpg',
    description:
      'Luminaires, control gear, lighting & FRP junction boxes, switches, plug & sockets, starters, and cable glands.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <circle cx='24' cy='20' r='12' stroke='currentColor' strokeWidth='1.6' />
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
    image: '/products/Communication_Systems.jpg',
    description:
      'Explosion-proof communication equipment for hazardous industrial sites.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <rect x='14' y='8' width='20' height='32' rx='2' stroke='currentColor' strokeWidth='1.6' />
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
    image: '/products/Panels_&_Enclosures.jpg',
    description:
      'Control stations, panels, monitors, and purging systems for flameproof installations.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <rect x='9' y='9' width='30' height='30' rx='2' stroke='currentColor' strokeWidth='1.6' />
        <path d='M9 19h30M19 9v30M29 9v10' stroke='currentColor' strokeWidth='1.4' />
        <circle cx='24' cy='29' r='4' stroke='currentColor' strokeWidth='1.4' />
      </svg>
    ),
  },
  {
    name: 'Flow Measuring Equipment',
    href: '/products/flow-measuring',
    image: '/products/Flow_Measuring_Equipment.jpg',
    description:
      'Orifice plates, meter runs, venturi tubes, flow nozzles, and multistage assemblies.',
    icon: (
      <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
        <circle cx='24' cy='24' r='15' stroke='currentColor' strokeWidth='1.6' />
        <path d='M24 24l7-9' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' />
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

function CategoryCard({ category, hidden }: { category: (typeof CATEGORIES)[number]; hidden?: boolean }) {
  return (
    <Link
      href={category.href}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className='group w-72 sm:w-80 lg:w-96 shrink-0 border border-white/12 hover:border-amber-500/60 rounded-md bg-white/3 hover:bg-white/6 transition-colors overflow-hidden'
    >
      <div className='relative aspect-4/3 bg-mist border-b border-line overflow-hidden'>
        <Image
          src={withBasePath(category.image)}
          alt={`${category.name} product photograph`}
          fill
          sizes='(min-width: 1024px) 384px, (min-width: 640px) 320px, 288px'
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <span
          aria-hidden='true'
          className='absolute left-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 p-2 text-amber-500'
        >
          {category.icon}
        </span>
      </div>

      <div className='p-6'>
        <h3 className='font-display text-lg tracking-wide text-white normal-case'>
          {category.name}
        </h3>
        <p className='mt-2 font-body normal-case text-sm text-white/60 leading-relaxed'>
          {category.description}
        </p>
        <span className='mt-4 inline-block font-display text-xs tracking-widest text-white/50 group-hover:text-amber-500 transition-colors'>
          VIEW RANGE →
        </span>
      </div>
    </Link>
  );
}

export default function ProductCarousel() {
  return (
    <section className='bg-navy-900'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-24'>
        <div className='flex items-end justify-between flex-wrap gap-6 mb-12'>
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
      </div>

      {/* Full-bleed marquee track — two copies of the card list run back to
          back so the infinite loop restarts on an identical frame. Hover or
          keyboard focus pauses it; prefers-reduced-motion freezes it. */}
      <div className='relative overflow-hidden'>
        <div
          aria-hidden='true'
          className='absolute inset-y-0 left-0 w-12 md:w-24 bg-linear-to-r from-navy-900 to-transparent z-10 pointer-events-none'
        />
        <div
          aria-hidden='true'
          className='absolute inset-y-0 right-0 w-12 md:w-24 bg-linear-to-l from-navy-900 to-transparent z-10 pointer-events-none'
        />

        <div
          role='region'
          aria-label='Product categories'
          className='flex w-max gap-5 px-6 md:px-10 pb-2 animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]'
        >
          {CATEGORIES.map(category => (
            <CategoryCard key={category.name} category={category} />
          ))}
          {CATEGORIES.map(category => (
            <CategoryCard key={`repeat-${category.name}`} category={category} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
