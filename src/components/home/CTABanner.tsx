import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className='bg-navy-950'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-white max-w-2xl'>
          Need equipment certified for Zone 1 or Zone 2 hazardous areas?
        </h2>
        <Link
          href='/contact#enquiry'
          className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors whitespace-nowrap'
        >
          Talk to Our Engineers
        </Link>
      </div>
    </section>
  );
}
