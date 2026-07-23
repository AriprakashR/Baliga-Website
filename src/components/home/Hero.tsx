import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative bg-navy-900 pt-20 overflow-hidden'>
      {/* Background panel image — drop your file at:
          public/hero/panel-background.jpg (see public/hero/README.md for specs) */}
      <Image
        src='/hero/panel-background.jpg'
        alt='Baliga flameproof panel and control equipment'
        fill
        priority
        className='object-cover object-center'
      />

      {/* Navy gradient overlay — solid over the text column, fading out toward
          the right so the panel photo still reads through. Keeps contrast
          consistent regardless of what the underlying photo looks like. */}
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/85 to-navy-950/40'
      />

      <div className='relative max-w-(--container-page) mx-auto px-6 md:px-10 py-24 md:py-36'>
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
    </section>
  );
}
