import Link from 'next/link';
// Swap this placeholder panel for the existing HeroIllustration component
// if it already renders something suitable:
// import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className='border-b border-navy-100'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24'>
        <div>
          <span className='inline-block rounded-full bg-navy-50 px-4 py-1 text-xs font-medium text-navy-700'>
            ISO certified manufacturer
          </span>

          <h1 className='mt-5 text-3xl font-medium leading-tight text-navy-950 md:text-4xl'>
            Manufacturing you can build on
          </h1>

          <p className='mt-4 max-w-md text-base leading-relaxed text-navy-600'>
            From design to deployment, our product range powers critical
            infrastructure across power, process, and industrial sectors.
          </p>

          <div className='mt-7 flex flex-wrap gap-3'>
            <Link
              href='/products'
              className='rounded-lg bg-navy-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-800'
            >
              Browse catalog
            </Link>
            <Link
              href='/industries'
              className='rounded-lg border border-navy-200 px-6 py-3 text-sm font-medium text-navy-800 transition hover:bg-navy-50'
            >
              Our industries
            </Link>
          </div>
        </div>

        {/* Visual panel — replace with <HeroIllustration /> or a product photo */}
        <div className='flex h-64 items-center justify-center rounded-2xl bg-navy-50 md:h-80'>
          <span className='text-sm text-navy-400'>Hero visual placeholder</span>
        </div>
      </div>
    </section>
  );
}
