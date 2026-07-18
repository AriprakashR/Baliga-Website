'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { CertBadge } from '@/components/ui/CertBadge';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries Served', href: '/industries' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Clients', href: '/clients' },
  { label: 'Events', href: '/events' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full'>
      <div className='hidden bg-navy-dark px-6 py-1.5 text-xs text-steel-200 md:flex md:items-center md:justify-between'>
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1'>
            <Phone size={12} /> +91-44-22380990
          </span>
          <span className='flex items-center gap-1'>
            <Mail size={12} /> customerservice@baliga.com
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <CertBadge code='ISO 9001:2015' />
          <CertBadge code='ATEX' />
          <CertBadge code='IECEx' />
          la
        </div>
      </div>

      <div className='flex items-center justify-between border-b border-steel-200 bg-white px-6 py-3'>
        <Link href='/' className='font-display text-xl font-bold text-navy'>
          BALIGA
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='font-body text-sm font-medium text-ink transition-colors hover:text-hazard-orange'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href='/contact?intent=quote'
          className='hidden rounded-sm bg-hazard-orange px-4 py-2 font-body text-sm font-semibold text-white hover:bg-hazard-orange/90 md:inline-block'
        >
          Request a Quote
        </Link>

        <button
          className='text-navy md:hidden'
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className='flex flex-col gap-1 border-b border-steel-200 bg-white px-6 py-4 md:hidden'>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='py-2 font-body text-sm font-medium text-ink'
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact?intent=quote'
            className='mt-2 rounded-sm bg-hazard-orange px-4 py-2 text-center font-body text-sm font-semibold text-white'
          >
            Request a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
