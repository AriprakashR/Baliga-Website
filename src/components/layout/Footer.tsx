import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CertBadge } from '@/components/ui/CertBadge';

const PRODUCT_CATEGORIES = [
  'Luminaires',
  'Control Gear',
  'Control Stations',
  'Switches',
  'Cable Glands',
  'Junction Boxes',
  'Flow Measurement',
  'Accessories',
];
const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries Served', href: '/industries' },
  { label: 'Events', href: '/events' },
  { label: 'Careers', href: '/careers' },
];

export function Footer() {
  return (
    <footer className='bg-navy-dark text-steel-200'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4'>
        <div>
          <p className='font-display text-lg font-bold text-white'>BALIGA</p>
          <p className='mt-2 text-sm leading-relaxed'>
            Explosion-proof and waterproof electrical equipment, manufactured in
            Chennai since 1960.
          </p>
          <div className='mt-4 flex flex-wrap gap-2'>
            <CertBadge code='ISO 9001:2015' />
            <CertBadge code='ATEX' />
            <CertBadge code='IECEx' />
          </div>
        </div>

        <div>
          <p className='font-body text-sm font-semibold text-white'>
            Quick Links
          </p>
          <ul className='mt-3 space-y-2 text-sm'>
            {QUICK_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='transition-colors hover:text-hazard-yellow'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='font-body text-sm font-semibold text-white'>Products</p>
          <ul className='mt-3 space-y-2 text-sm'>
            {PRODUCT_CATEGORIES.map(cat => (
              <li key={cat}>
                <Link
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className='transition-colors hover:text-hazard-yellow'
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='font-body text-sm font-semibold text-white'>
            Registered Office
          </p>
          <ul className='mt-3 space-y-2 text-sm'>
            <li className='flex items-start gap-2'>
              <MapPin size={16} className='mt-0.5 shrink-0' /> 1/382, Baliga
              Road, Off Medavakkam Main Road, Kovilambakkam, Chennai-600129,
              India
            </li>
            <li className='flex items-center gap-2'>
              <Phone size={16} /> +91-44-22380990
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={16} /> customerservice@baliga.com
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-white/10 px-6 py-4 text-center text-xs'>
        © {new Date().getFullYear()} Baliga Lighting Equipments Pvt. Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}
