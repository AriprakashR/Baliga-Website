'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { PRODUCT_LINES } from '@/data/productLines';

function CategoryCard({
  category,
  hidden,
}: {
  category: (typeof PRODUCT_LINES)[number];
  hidden?: boolean;
}) {
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
  const [paused, setPaused] = useState(false);

  return (
    <section className='bg-navy-900'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 pt-24 pb-16'>
        <div className='flex items-end justify-between flex-wrap gap-6 '>
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
      <div className='relative overflow-hidden pt-0 pb-16'>
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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          style={{ animationPlayState: paused ? 'paused' : undefined }}
          className='flex w-max gap-5 px-6 md:px-10 pb-2 animate-marquee motion-reduce:[animation-play-state:paused]'
        >
          {PRODUCT_LINES.map(category => (
            <CategoryCard key={category.name} category={category} />
          ))}
          {PRODUCT_LINES.map(category => (
            <CategoryCard
              key={`repeat-${category.name}`}
              category={category}
              hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
}
