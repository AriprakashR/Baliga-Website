'use client';

import { useEffect, useState } from 'react';
import { TECHNICAL_SECTIONS } from '@/data/technicalInfo';

export default function TechnicalSidebar() {
  const [activeId, setActiveId] = useState(TECHNICAL_SECTIONS[0].id);

  useEffect(() => {
    const elements = TECHNICAL_SECTIONS.map(s =>
      document.getElementById(s.id),
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function jumpTo(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setActiveId(id);
    history.replaceState(null, '', `#${id}`);
  }

  return (
    <>
      <nav
        aria-label='Technical reference sections'
        className='hidden lg:block sticky top-24 self-start w-64 shrink-0'
      >
        <span className='font-display text-xs tracking-widest text-amber-600'>
          ON THIS PAGE
        </span>
        <ul className='mt-4 space-y-1 border-l border-line'>
          {TECHNICAL_SECTIONS.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={e => jumpTo(e, s.id)}
                aria-current={activeId === s.id ? 'true' : undefined}
                className={`-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors ${
                  activeId === s.id
                    ? 'border-amber-500 font-medium text-navy-900'
                    : 'border-transparent text-steel hover:text-navy-900'
                }`}
              >
                {s.navLabel}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        aria-label='Technical reference sections'
        className='lg:hidden sticky top-20 z-30 -mx-6 border-b border-line bg-white/95 px-6 py-3 backdrop-blur overflow-x-auto md:-mx-10 md:px-10'
      >
        <div className='flex w-max gap-2'>
          {TECHNICAL_SECTIONS.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={e => jumpTo(e, s.id)}
              aria-current={activeId === s.id ? 'true' : undefined}
              className={`whitespace-nowrap rounded-sm border px-3.5 py-2 font-display text-xs tracking-widest transition-colors ${
                activeId === s.id
                  ? 'border-amber-500 bg-amber-500 text-navy-950'
                  : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
              }`}
            >
              {s.navLabel.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
