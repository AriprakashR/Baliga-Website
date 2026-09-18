'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { PRODUCT_LINES } from '@/data/productLines';

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD_PX = 40;

function ArrowIcon({ flipped }: { flipped?: boolean }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      className={`w-5 h-5 ${flipped ? 'rotate-180' : ''}`}
    >
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
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const slideCount = PRODUCT_LINES.length;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    pause();
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    resume();
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    if (
      Math.abs(deltaX) > SWIPE_THRESHOLD_PX &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      if (deltaX < 0) next();
      else prev();
    }
  };

  const scrollToNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className='relative flex flex-col min-h-[85vh] bg-navy-900 pt-20'
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Clipping lives on this wrapper (not the section) so the sticky
          bottom bar further down keeps a clean, unclipped path to the
          viewport for position: sticky to work against. */}
      <div className='absolute inset-0 overflow-hidden'>
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
            preload={i === 0}
            loading={i === 0 ? undefined : 'lazy'}
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
      </div>

      <div className='relative flex-1 flex items-center w-full max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
        {/* All slides' text stacked in the same grid cell so the block's
            height is the max of every slide — swapping slides no longer
            reflows the vertically-centered section. */}
        <div className='grid w-full max-w-3xl'>
          {PRODUCT_LINES.map((slide, i) => (
            <div
              key={slide.name}
              className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out ${
                i === activeIndex
                  ? 'visible opacity-100 translate-y-0'
                  : 'invisible opacity-0 translate-y-2'
              }`}
            >
              <span className='nameplate nameplate--dark text-amber-500 text-xs tracking-widest mb-6'>
                ATEX &amp; IECEx CERTIFIED · SINCE 1960
              </span>

              <h1 className='mt-6 text-5xl md:text-7xl font-extrabold text-white'>
                {slide.tagline}
              </h1>

              <p className='mt-6 max-w-xl font-body normal-case text-white/70 text-lg leading-relaxed'>
                {slide.description}
              </p>

              <div className='mt-10 flex flex-wrap items-center gap-4'>
                <Link
                  href={slide.href}
                  className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors'
                >
                  Explore {slide.name}
                </Link>
                <Link
                  href='/about#certifications'
                  className='font-display text-sm tracking-wide border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-sm transition-colors'
                >
                  View Certifications
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual controls */}
      {/* h-9/w-9 between md and xl (768-1279px, i.e. Tab and Laptop-1024)
          only — at those widths the headline can wrap to 2-3 lines and the
          full-size button reads as overlapping it; xl+ has more horizontal
          room for the headline so the original larger size is fine there. */}
      <button
        type='button'
        onClick={prev}
        aria-label='Previous slide'
        className='hidden md:flex absolute left-4 md:left-6 top-[51%] xl:top-1/2 -translate-y-1/2 h-9 w-9 xl:h-12 xl:w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950/20 text-white backdrop-blur-sm hover:border-amber-500/70 hover:text-amber-500 transition-colors'
      >
        <ArrowIcon flipped />
      </button>
      <button
        type='button'
        onClick={next}
        aria-label='Next slide'
        className='hidden md:flex absolute right-4 md:right-6 top-[51%] xl:top-1/2 -translate-y-1/2 h-9 w-9 xl:h-12 xl:w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950/20 text-white backdrop-blur-sm hover:border-amber-500/70 hover:text-amber-500 transition-colors'
      >
        <ArrowIcon />
      </button>

      {/* Sticks to the viewport bottom for as long as the section is in
          view, so it stays reachable even if the text content pushes the
          section taller than the screen on shorter laptop displays. */}
      <div className='sticky bottom-2 z-1 shrink-0 flex flex-col items-center gap-3 pb-2'>
        <div
          role='tablist'
          aria-label='Hero slides'
          className='flex items-center gap-3'
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
                i === activeIndex
                  ? 'w-8 bg-amber-500'
                  : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          type='button'
          onClick={scrollToNext}
          aria-label='Scroll down'
          className='flex flex-col items-center gap-2 text-white/60 hover:text-amber-500 transition-colors'
        >
          <span className='font-display text-[10px] tracking-widest'>
            SCROLL
          </span>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-4 h-4 animate-bounce'
          >
            <path
              d='M12 4v14M6 13l6 7 6-7'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
