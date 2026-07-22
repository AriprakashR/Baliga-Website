import Link from 'next/link';

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Certifications', href: '/certifications' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'All products', href: '/products' },
      { label: 'Industries served', href: '/industries' },
      { label: 'Clients', href: '/clients' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Events & exhibitions', href: '/events' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-navy-950 text-navy-100'>
      <div className='mx-auto max-w-6xl px-6 py-14'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
          <div>
            <p className='text-lg font-medium text-white'>Baliga</p>
            <p className='mt-3 max-w-55 text-sm text-navy-400'>
              Precision-manufactured components for power, process, and
              infrastructure industries.
            </p>
          </div>

          {FOOTER_COLUMNS.map(col => (
            <div key={col.title}>
              <p className='text-sm font-medium text-white'>{col.title}</p>
              <ul className='mt-4 flex flex-col gap-3'>
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm text-navy-400 transition hover:text-navy-100'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-4 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between'>
          <p>&copy; {new Date().getFullYear()} Baliga. All rights reserved.</p>
          <div className='flex gap-5'>
            <Link href='/privacy' className='hover:text-navy-100'>
              Privacy policy
            </Link>
            <Link href='/terms' className='hover:text-navy-100'>
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
