import Link from 'next/link';

const INDUSTRIES = [
  'Oil & Gas',
  'Petrochemical',
  'Mining',
  'Marine & Offshore',
  'Pharmaceutical',
  'Power Generation',
];

export default function IndustriesServed() {
  return (
    <section className='bg-mist'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-20'>
        <span className='font-display text-xs tracking-widest text-amber-600'>
          WHERE WE WORK
        </span>
        <h2 className='mt-4 text-3xl md:text-4xl font-bold text-navy-900 max-w-2xl'>
          Trusted across every hazardous-area industry
        </h2>

        <div className='mt-10 flex flex-wrap gap-3'>
          {INDUSTRIES.map(industry => (
            <span
              key={industry}
              className='font-display text-sm tracking-wide normal-case text-navy-900 bg-white border border-line rounded-sm px-5 py-2.5'
            >
              {industry}
            </span>
          ))}
        </div>

        <Link
          href='/industries'
          className='mt-8 inline-block font-display text-sm tracking-wide text-navy-900 border-b border-navy-900/40 hover:border-navy-900 transition-colors'
        >
          See Industries Served in Detail →
        </Link>
      </div>
    </section>
  );
}
