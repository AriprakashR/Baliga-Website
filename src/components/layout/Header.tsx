'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

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
    <header className='fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-navy-900/95 via-navy-700/95 to-navy-600/95 backdrop-blur border-b border-azure-500/30'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 lg:px-6 xl:px-10 h-20 flex items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-3'
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src={withBasePath('/logo.png')}
            alt='Baliga'
            width={200}
            height={103}
            priority
            className='h-11 w-auto'
          />
          <span className='hidden sm:inline-block font-mono text-[11px] text-amber-500 border border-amber-500/40 rounded-sm px-2 py-0.5 tracking-widest'>
            EST. 1960
          </span>
        </Link>

        <nav className='hidden lg:flex items-center gap-4 xl:gap-6'>
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
            href='/contact#enquiry'
            className='hidden sm:inline-block font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-4 lg:px-4 xl:px-5 py-2.5 rounded-sm transition-colors whitespace-nowrap'
          >
            Get a Quote
          </Link>

          <button
            type='button'
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className='lg:hidden text-white p-2 -mr-2'
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

      {/* Mobile menu panel — shown below the lg breakpoint when toggled.
          Always mounted so max-height can transition instead of the panel
          just popping in/out. Uses max-height (not grid-rows) since this
          sits inside a position:fixed header, where the grid-rows-[0fr]/
          [1fr] auto-height trick doesn't reliably size to content. */}
      <div
        aria-hidden={!open}
        className={`lg:hidden overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 transition-[max-height] duration-300 ease-in-out ${
          open ? 'max-h-[32rem]' : 'max-h-0'
        }`}
      >
        <div className='border-t border-white/10'>
          <nav className='max-w-(--container-page) mx-auto px-6 pb-4 sm:pb-0 flex flex-col items-center text-center gap-1'>
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  handleNavClick(link.href);
                  setOpen(false);
                }}
                className='font-display text-base tracking-wide text-white/85 hover:text-white py-3 border-b border-white/5 w-full'
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/contact#enquiry'
              onClick={() => setOpen(false)}
              className='sm:hidden mt-4 font-display text-sm tracking-wide text-center bg-amber-500 hover:bg-amber-600 text-navy-950 px-5 py-3 rounded-sm transition-colors w-full'
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
