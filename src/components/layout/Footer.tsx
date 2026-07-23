import Link from 'next/link';

const COLUMNS = [
  {
    heading: 'Products',
    links: [
      { label: 'Lighting', href: '/products/lighting' },
      { label: 'Communication Systems', href: '/products/communication' },
      { label: 'Panels', href: '/products/panels' },
      { label: 'Flow Measuring', href: '/products/flow-measuring' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Industries Served', href: '/industries' },
      { label: 'Clients', href: '/clients' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Events & Exhibitions', href: '/events' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-navy-900 border-t border-white/10'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div>
          <span className='font-display text-2xl font-bold text-white tracking-wide'>
            BALIGA
          </span>
          <p className='mt-4 font-body normal-case text-sm text-white/60 leading-relaxed max-w-xs'>
            Explosion-proof and flameproof electrical equipment for hazardous
            industrial environments, engineered in India since 1960.
          </p>
          <p className='mt-4 font-body normal-case text-sm text-white/60 leading-relaxed max-w-xs'>
            1/382, Baliga Road, Off Medavakkam Main Road, Kovilambakkam,
            Chennai-600129, India
          </p>
          <p className='mt-2 font-body normal-case text-sm text-white/60 leading-relaxed'>
            +91-44-2238-0990 · baligamf@baliga.com
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='nameplate nameplate--dark text-amber-500 text-xs'>
              ATEX
            </span>
            <span className='nameplate nameplate--dark text-amber-500 text-xs'>
              IECEx
            </span>
            <span className='nameplate nameplate--dark text-amber-500 text-xs'>
              ISO 9001:2015
            </span>
          </div>
        </div>

        {COLUMNS.map(col => (
          <div key={col.heading}>
            <h3 className='font-display text-xs tracking-widest text-white/50'>
              {col.heading.toUpperCase()}
            </h3>
            <ul className='mt-4 space-y-3'>
              {col.links.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='font-body normal-case text-sm text-white/70 hover:text-white transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='border-t border-white/10'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 font-body normal-case text-xs text-white/40'>
          <span>
            © {new Date().getFullYear()} Baliga Lighting Equipments Private
            Limited. All rights reserved.
          </span>
          <span>Manufactured in India · Certified for global deployment</span>
        </div>
      </div>
    </footer>
  );
}
