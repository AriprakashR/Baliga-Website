import Link from 'next/link';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Industries', href: '/industries' },
  { name: 'Events', href: '/events' },
  { name: 'FAQ', href: '/faq' },
];

const productLinks = [
  { name: 'Lighting', href: '/products/lighting' },
  { name: 'Communication Systems', href: '/products/communication' },
  { name: 'Panels', href: '/products/panels' },
  { name: 'Flow Measuring Equipment', href: '/products/flow-measuring' },
];

export default function Footer() {
  return (
    <footer className='bg-navy-950 text-navy-100'>
      <div className='mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <div>
          <p className='text-xl font-bold text-white'>Baliga Lighting</p>
          <p className='mt-4 text-sm text-navy-300 max-w-xs'>
            Manufacturing explosion-proof and flameproof electrical equipment
            for hazardous industrial environments since 1960.
          </p>
          <div className='mt-6 flex gap-3 text-xs font-medium'>
            <span className='border border-navy-700 rounded px-2 py-1'>
              ATEX
            </span>
            <span className='border border-navy-700 rounded px-2 py-1'>
              IECEx
            </span>
          </div>
        </div>

        <div>
          <p className='text-sm font-semibold text-white uppercase tracking-wide'>
            Company
          </p>
          <ul className='mt-4 space-y-3'>
            {quickLinks.map(l => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className='text-sm text-navy-300 hover:text-white transition'
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='text-sm font-semibold text-white uppercase tracking-wide'>
            Products
          </p>
          <ul className='mt-4 space-y-3'>
            {productLinks.map(l => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className='text-sm text-navy-300 hover:text-white transition'
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='text-sm font-semibold text-white uppercase tracking-wide'>
            Contact
          </p>
          <ul className='mt-4 space-y-3 text-sm text-navy-300'>
            <li>[Company Address]</li>
            <li>[Phone Number]</li>
            <li>[Email Address]</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-navy-800'>
        <div className='mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-navy-400'>
          <p>
            © {new Date().getFullYear()} Baliga Lighting. All rights reserved.
          </p>
          <p>Built with care for hazardous environments.</p>
        </div>
      </div>
    </footer>
  );
}
