import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/data/industries';

export const metadata: Metadata = { title: 'Industries Served' };

const INDUSTRY_EXAMPLES: Record<string, string> = {
  refineries:
    'Bharat Petroleum, Indian Oil Corporation, Reliance Industries, Hindustan Petroleum, and other refineries.',
  'oil-gas': 'Oil India, Oil and Natural Gas Commission, and Schlumberger.',
  petrochemicals:
    'Reliance Petroleum, Gas Authority of India, and Haldia Petrochemicals.',
  'fertilisers-chemicals':
    'IFFCO, KRIBHCO, Tata Chemicals, and Chambal Fertilisers & Chemicals.',
  pharmaceuticals: 'Cipla, Dr. Reddy’s Laboratories, and Aurobindo Pharma.',
  aerospace: 'Hindustan Aeronautics Limited and ISRO.',
};

export default function IndustriesPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            WHERE WE WORK
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Industries Served
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Six decades of supplying hazardous-area equipment across
            India&apos;s heavy industries.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {INDUSTRIES.map(industry => (
            <div
              key={industry.slug}
              className='border border-line rounded-sm p-6 bg-mist'
            >
              <h2 className='font-display text-lg text-navy-900 normal-case'>
                {industry.label}
              </h2>
              <p className='mt-2 font-body normal-case text-steel text-sm leading-relaxed'>
                {INDUSTRY_EXAMPLES[industry.slug]}
              </p>
            </div>
          ))}
        </div>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 pb-16'>
          <Link
            href='/clients'
            className='font-display text-sm tracking-wide text-navy-900 border-b border-navy-900/40 hover:border-navy-900 transition-colors'
          >
            See the Full Client List →
          </Link>
        </div>
      </section>
    </>
  );
}
