'use client';

import { useState } from 'react';

const INDUSTRY_LINKS = [
  {
    name: 'Baseefa',
    description: 'Approvals to British testing standards',
    href: 'https://www.gov.uk/',
  },
  {
    name: 'IEC',
    description: 'International Electrotechnical Standards',
    href: 'https://www.iec.ch',
  },
  {
    name: 'Underwriters Laboratories (UL)',
    description: 'American testing laboratory',
    href: 'https://www.ul.com',
  },
  {
    name: 'PTB',
    description: 'German testing laboratory',
    href: 'https://www.ptb.de',
  },
];

export default function IndustryLinksMenu() {
  const [open, setOpen] = useState(false);
  const panelId = 'industry-links-panel';

  return (
    <div className='border-t border-white/10'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
        <button
          type='button'
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className='w-full flex items-center justify-between gap-3 py-5 cursor-pointer'
        >
          <span className='font-display text-xs tracking-widest text-white/50'>
            INDUSTRY LINKS &amp; CERTIFICATIONS
          </span>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className={`w-4 h-4 shrink-0 text-white/50 transition-transform duration-200 ${
              open ? 'rotate-180' : ''
            }`}
          >
            <path
              d='M6 9l6 6 6-6'
              stroke='currentColor'
              strokeWidth='1.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <div
          id={panelId}
          className={`grid transition-all duration-300 ease-in-out ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className='overflow-hidden'>
            <ul className='pb-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
              {INDUSTRY_LINKS.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block rounded-sm border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 px-4 py-3 transition-colors'
                  >
                    <span className='font-display text-sm text-white tracking-wide'>
                      {link.name}
                    </span>
                    <span className='mt-1 block font-body normal-case text-xs text-white/50 leading-snug'>
                      {link.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
