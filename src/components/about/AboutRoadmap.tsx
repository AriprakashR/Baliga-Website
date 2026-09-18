'use client';

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export type RoadmapStep = {
  id: string;
  label: string;
  available: boolean;
};

export function AboutRoadmap({ steps }: { steps: RoadmapStep[] }) {
  const [activeId, setActiveId] = useState<string>(
    steps.find(s => s.available)?.id ?? steps[0].id
  );
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targets = steps
      .filter(s => s.available)
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    observer.current = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    targets.forEach(t => observer.current?.observe(t));
    return () => observer.current?.disconnect();
  }, [steps]);

  const activeIndex = steps.findIndex(s => s.id === activeId);

  return (
    <>
      <nav
        aria-label='About Baliga sections'
        className='lg:hidden sticky top-20 z-30 -mx-6 border-b border-line bg-white/95 px-6 py-3 backdrop-blur overflow-x-auto md:-mx-10 md:px-10'
      >
        <div className='flex w-max gap-2'>
          {steps.map(step => {
            const isActive = step.id === activeId;
            const Node = step.available ? 'a' : 'span';

            return (
              <Node
                key={step.id}
                {...(step.available ? { href: `#${step.id}` } : {})}
                aria-current={isActive ? 'true' : undefined}
                className={[
                  'whitespace-nowrap rounded-sm border px-3.5 py-2 font-display text-xs tracking-widest transition-colors',
                  isActive
                    ? 'border-amber-500 bg-amber-500 text-navy-950'
                    : step.available
                      ? 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
                      : 'border-line text-steel/50',
                ].join(' ')}
              >
                {step.label.toUpperCase()}
              </Node>
            );
          })}
        </div>
      </nav>

      <nav
        aria-label='About Baliga sections'
        className='hidden shrink-0 lg:block lg:sticky lg:top-28 lg:w-56'
      >
      <ol className='relative flex flex-col gap-8'>
        {/* Track + progress line, running through the center of each node */}
        <div className='absolute inset-y-0 left-4 w-px bg-line' />
        <div
          className='absolute left-4 top-0 w-px bg-amber-500 transition-all duration-500 ease-out'
          style={{
            height:
              activeIndex <= 0
                ? '0%'
                : `${(activeIndex / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step, i) => {
          const isActive = step.id === activeId;
          const isPast = i < activeIndex;
          const Node = step.available ? 'a' : 'span';

          return (
            <li key={step.id} className='relative z-10'>
              <Node
                {...(step.available ? { href: `#${step.id}` } : {})}
                aria-current={isActive ? 'step' : undefined}
                className={[
                  'group flex items-center gap-4',
                  step.available ? 'cursor-pointer' : 'cursor-default',
                ].join(' ')}
              >
                <span
                  className={[
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs transition-colors duration-300',
                    isActive
                      ? 'border-amber-500 bg-amber-500 text-navy-950'
                      : isPast
                        ? 'border-navy-900 bg-navy-900 text-white'
                        : step.available
                          ? 'border-line bg-white text-steel group-hover:border-navy-700 group-hover:text-navy-900'
                          : 'border-line bg-white text-steel/50',
                  ].join(' ')}
                >
                  {isPast ? <Check size={14} /> : i + 1}
                </span>
                <span
                  className={[
                    'font-display text-xs tracking-wide transition-colors duration-300',
                    isActive
                      ? 'font-semibold text-navy-900'
                      : step.available
                        ? 'text-steel group-hover:text-navy-900'
                        : 'text-steel/50',
                  ].join(' ')}
                >
                  {step.label}
                </span>
              </Node>
            </li>
          );
        })}
      </ol>
      </nav>
    </>
  );
}
