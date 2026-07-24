'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { PRODUCT_LINES } from '@/data/productLines';

const AUTOPLAY_MS = 5500;

function ArrowIcon({ flipped }: { flipped?: boolean }) {
  return (
    <svg viewBox='0 0 24 24' fill='none' className={`w-5 h-5 ${flipped ? 'rotate-180' : ''}`}>
      <path
        d='M9 6l6 6-6 6'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const slideCount = PRODUCT_LINES.length;
  const active = PRODUCT_LINES[activeIndex];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex(i => (i + 1) % slideCount);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [slideCount]);

  const goTo = (index: number) => setActiveIndex(index);
  const prev = () => setActiveIndex(i => (i - 1 + slideCount) % slideCount);
  const next = () => setActiveIndex(i => (i + 1) % slideCount);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <section
      className='relative flex min-h-[85vh] items-center bg-navy-900 pt-20 overflow-hidden'
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {/* Slides — product group shots, composed with empty space on the left
          for the text column and the product cluster on the right. Full
          color (no duotone): these are purpose-built banners, not raw stock
          photos, so the gradient alone is enough to keep text legible. */}
      {PRODUCT_LINES.map((slide, i) => (
        <Image
          key={slide.name}
          src={withBasePath(slide.heroImage)}
          alt={`${slide.name} product lineup`}
          fill
          priority={i === 0}
          sizes='100vw'
          className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navy gradient overlay — solid over the text column, fading out toward
          the right so the product cluster still reads through. Keeps contrast
          consistent regardless of which slide is active. */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/90 to-navy-950/55'
      />

      <div className='relative w-full max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
        <div key={activeIndex} className='max-w-3xl animate-hero-fade-in'>
          <span className='nameplate nameplate--dark text-amber-500 text-xs tracking-widest mb-6'>
            ATEX &amp; IECEx CERTIFIED · SINCE 1960
          </span>

          <h1 className='mt-6 text-5xl md:text-7xl font-extrabold text-white'>
            {active.tagline}
          </h1>

          <p className='mt-6 max-w-xl font-body normal-case text-white/70 text-lg leading-relaxed'>
            {active.description}
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <Link
              href={active.href}
              className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors'
            >
              Explore {active.name}
            </Link>
            <Link
              href='/certifications'
              className='font-display text-sm tracking-wide border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-sm transition-colors'
            >
              View Certifications
            </Link>
          </div>
        </div>
      </div>

      {/* Manual controls */}
      <button
        type='button'
        onClick={prev}
        aria-label='Previous slide'
        className='hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950/20 text-white backdrop-blur-sm hover:border-amber-500/70 hover:text-amber-500 transition-colors'
      >
        <ArrowIcon flipped />
      </button>
      <button
        type='button'
        onClick={next}
        aria-label='Next slide'
        className='hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950/20 text-white backdrop-blur-sm hover:border-amber-500/70 hover:text-amber-500 transition-colors'
      >
        <ArrowIcon />
      </button>

      <div
        role='tablist'
        aria-label='Hero slides'
        className='absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3'
      >
        {PRODUCT_LINES.map((slide, i) => (
          <button
            key={slide.name}
            type='button'
            role='tab'
            onClick={() => goTo(i)}
            aria-label={`Show ${slide.name} slide`}
            aria-selected={i === activeIndex}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? 'w-8 bg-amber-500' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
