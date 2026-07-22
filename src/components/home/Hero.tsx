import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative bg-navy-900 pt-20 overflow-hidden'>
      {/* Hazard-zone ring motif — echoes the concentric Zone 0/1/2 classification
          diagrams used to map explosion risk around equipment. Subtle, not literal. */}
      <svg
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 opacity-[0.14] w-160 h-160'
        viewBox='0 0 640 640'
        fill='none'
      >
        <circle cx='320' cy='320' r='120' stroke='#F2A81D' strokeWidth='1.5' />
        <circle cx='320' cy='320' r='220' stroke='#F2A81D' strokeWidth='1.5' />
        <circle cx='320' cy='320' r='315' stroke='#F2A81D' strokeWidth='1.5' />
        <line
          x1='320'
          y1='0'
          x2='320'
          y2='640'
          stroke='#F2A81D'
          strokeWidth='1'
        />
        <line
          x1='0'
          y1='320'
          x2='640'
          y2='320'
          stroke='#F2A81D'
          strokeWidth='1'
        />
      </svg>

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
