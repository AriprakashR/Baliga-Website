'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-navy-100'>
      <div className='mx-auto max-w-7xl px-6 flex items-center justify-between h-20'>
        <Link href='/' className='text-xl font-bold text-navy-900'>
          Baliga <span className='text-navy-600 font-normal'>Lighting</span>
        </Link>

        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-navy-700 hover:text-navy-900 transition'
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href='/contact'
          className='hidden md:inline-block bg-navy-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-navy-800 transition'
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-navy-900'
          aria-label='Toggle menu'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            {open ? (
              <path d='M6 6l12 12M6 18L18 6' />
            ) : (
              <path d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className='md:hidden border-t border-navy-100 bg-white px-6 py-4 space-y-4'>
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className='block text-navy-700 font-medium'
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/contact'
            onClick={() => setOpen(false)}
            className='block bg-navy-900 text-white text-center px-5 py-2.5 rounded-md font-medium'
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
