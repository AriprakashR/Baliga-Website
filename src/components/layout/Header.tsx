'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Technical Info', href: '/technical-info' },
  { label: 'Clients', href: '/industries' },
  { label: 'Events', href: '/events' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleNavClick(href: string) {
    if (href === '/products') {
      window.dispatchEvent(new Event('baliga:reset-product-catalog'));
    }
  }

  return (
    <header className='fixed top-0 inset-x-0 z-50 bg-navy-900/95 backdrop-blur border-b border-white/10'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 h-20 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-3'
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className='font-display text-2xl font-bold text-white tracking-wide'>
            BALIGA
          </span>
          <span className='inline-block font-mono text-[11px] text-amber-500 border border-amber-500/40 rounded-sm px-2 py-0.5 tracking-widest'>
            EST. 1960
          </span>
        </Link>

        <nav className='hidden xl:flex items-center gap-6'>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className='font-display text-sm tracking-wide text-white/80 hover:text-white transition-colors whitespace-nowrap'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-4'>
          <Link
            href='/contact'
            className='hidden sm:inline-block font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-5 py-2.5 rounded-sm transition-colors whitespace-nowrap'
          >
            Get a Quote
          </Link>

          <button
            type='button'
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className='xl:hidden text-white p-2 -mr-2'
          >
            <svg viewBox='0 0 24 24' fill='none' className='w-6 h-6'>
              {open ? (
                <path
                  d='M6 6l12 12M18 6L6 18'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
              ) : (
                <path
                  d='M4 7h16M4 12h16M4 17h16'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel — shown below the xl breakpoint when toggled */}
      {open && (
        <div className='xl:hidden border-t border-white/10 bg-navy-900'>
          <nav className='max-w-(--container-page) mx-auto px-6 py-6 flex flex-col gap-1'>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleNavClick(link.href);
                  setOpen(false);
                }}
                className='font-display text-base tracking-wide text-white/85 hover:text-white py-3 border-b border-white/5'
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setOpen(false)}
              className='sm:hidden mt-4 font-display text-sm tracking-wide text-center bg-amber-500 hover:bg-amber-600 text-navy-950 px-5 py-3 rounded-sm transition-colors'
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
