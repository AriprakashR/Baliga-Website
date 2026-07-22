import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className='bg-navy-950 text-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6'>
        <h2 className='text-2xl md:text-3xl font-semibold max-w-xl'>
          Need explosion-proof equipment for your site?
        </h2>
        <Link
          href='/contact'
          className='bg-white text-navy-900 px-6 py-3 rounded-md font-medium hover:bg-navy-50 transition whitespace-nowrap'
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
}
