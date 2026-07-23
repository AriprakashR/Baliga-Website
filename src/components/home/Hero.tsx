import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative flex min-h-[85vh] items-center bg-navy-900 pt-20 overflow-hidden'>
      {/* Background photograph — night refinery shot, recolored into the navy
          brand palette (grayscale + mix-blend-color duotone) so the source
          photo reads as "Baliga navy" rather than a raw stock photo. */}
      <Image
        src='/hero/panel-background-1.jpg'
        alt='Hazardous-area industrial refinery site at night'
        fill
        priority
        className='object-cover object-center grayscale contrast-125 brightness-75'
      />
      <div aria-hidden='true' className='absolute inset-0 bg-navy-700 mix-blend-color' />

      {/* Navy gradient overlay — solid over the text column, fading out toward
          the right so the duotone photo still reads through. Keeps contrast
          consistent regardless of what the underlying photo looks like. */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/85 to-navy-950/40'
      />

      <div className='relative w-full max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
        <div className='max-w-3xl'>
          <span className='nameplate nameplate--dark text-amber-500 text-xs tracking-widest mb-6'>
            ATEX &amp; IECEx CERTIFIED · SINCE 1960
          </span>

          <h1 className='mt-6 text-5xl md:text-7xl font-extrabold text-white'>
            Engineered for the
            <br />
            explosive environment
          </h1>

          <p className='mt-6 max-w-xl font-body normal-case text-white/70 text-lg leading-relaxed'>
            Baliga Lighting designs and manufactures explosion-proof and
            flameproof electrical equipment — lighting, communication systems,
            panels, and flow measuring instruments — built to keep hazardous
            industrial sites safe, for over six decades.
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <Link
              href='/products'
              className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors'
            >
              Explore Products
            </Link>
            <Link
              href='/certifications'
              className='font-display text-sm tracking-wide border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-sm transition-colors'
            >
              View Certifications
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue — signals there's more (product highlights) just below the fold */}
      <div
        aria-hidden='true'
        className='absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40'
      >
        <span className='font-display text-[10px] tracking-widest'>SCROLL</span>
        <svg viewBox='0 0 16 16' className='w-4 h-4 animate-bounce' fill='none'>
          <path
            d='M4 6l4 4 4-4'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </section>
  );
}
