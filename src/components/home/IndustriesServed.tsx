import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { INDUSTRIES } from '@/data/industries';

function IndustryCard({ industry }: { industry: (typeof INDUSTRIES)[number] }) {
  return (
    <div className='w-full overflow-hidden rounded-md border border-line bg-white'>
      <div className='relative aspect-4/3 bg-navy-900'>
        <Image
          src={withBasePath(industry.image)}
          alt={`${industry.name} sector`}
          fill
          sizes='(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw'
          className='object-cover'
        />
      </div>
      <div className='px-4 py-3'>
        <span className='font-display text-sm tracking-wide normal-case text-navy-900'>
          {industry.name}
        </span>
      </div>
    </div>
  );
}

export default function IndustriesServed() {
  const firstRow = INDUSTRIES.slice(0, 4);
  const secondRow = INDUSTRIES.slice(4);

  return (
    <section className='bg-mist'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-20 flex flex-col items-center text-center'>
        <span className='font-display text-xs tracking-widest text-amber-600'>
          WHERE WE WORK
        </span>
        <h2 className='mt-4 text-3xl md:text-4xl font-bold text-navy-900 max-w-4xl'>
          Trusted across every hazardous-area industry
        </h2>

        <div className='mt-10 w-full grid grid-cols-2 sm:grid-cols-4 gap-5'>
          {firstRow.map(industry => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>

        <div className='mt-5 w-full sm:max-w-[75%] grid grid-cols-2 sm:grid-cols-3 gap-5'>
          {secondRow.map(industry => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>

        <Link
          href='/industries'
          className='mt-10 inline-block font-display text-sm tracking-wide text-navy-900 border-b border-navy-900/40 hover:border-navy-900 transition-colors'
        >
          See Industries Served in Detail →
        </Link>
      </div>
    </section>
  );
}
