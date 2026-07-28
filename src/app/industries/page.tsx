import type { Metadata } from 'next';
import clientGroups from '@/data/clients.json';
import ClientsAccordion from '@/components/industries/ClientsAccordion';

export const metadata: Metadata = { title: 'Industries & Clients' };

export default function IndustriesPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            WHERE WE WORK
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Industries &amp; Clients
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Six decades of supplying hazardous-area equipment to refineries, EPC
            contractors, and process industries across India and abroad.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          <span className='font-display text-xs tracking-widest text-amber-600'>
            OUR CLIENTS
          </span>
          <h2 className='mt-4 font-display text-3xl font-bold text-navy-900 max-w-2xl'>
            Trusted across every hazardous-area sector
          </h2>
          <p className='mt-4 max-w-2xl font-body normal-case text-steel'>
            Select a sector to see the companies we&apos;ve partnered with.
          </p>

          <div className='mt-10'>
            <ClientsAccordion groups={clientGroups} />
          </div>
        </div>
      </section>
    </>
  );
}
