import type { Metadata } from 'next';
import clientGroups from '@/data/clients.json';

export const metadata: Metadata = { title: 'Clients' };

export default function ClientsPage() {
  return (
    <>
      <section className='bg-navy-900 py-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            WHO WE SERVE
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Our Clients
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Trusted by consultants, refineries, EPC contractors, and process
            industries across India and abroad.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10'>
          {clientGroups.map(group => (
            <div key={group.industry}>
              <h2 className='font-display text-sm tracking-widest text-amber-600'>
                {group.industry.toUpperCase()}
              </h2>
              <ul className='mt-4 space-y-2'>
                {group.companies.map(company => (
                  <li
                    key={company}
                    className='font-body normal-case text-steel text-sm leading-relaxed'
                  >
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
