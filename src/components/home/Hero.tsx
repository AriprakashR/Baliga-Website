export default function Hero() {
  return (
    <section className='bg-navy-900 text-white'>
      <div className='mx-auto max-w-7xl px-6 py-28 md:py-36'>
        <p className='text-sm tracking-widest uppercase text-navy-200 mb-4'>
          Since 1960 · ATEX & IECEx Certified
        </p>
        <h1 className='text-4xl md:text-6xl font-bold leading-tight max-w-3xl'>
          Explosion-Proof Electrical Equipment for Hazardous Environments
        </h1>
        <p className='mt-6 text-lg text-navy-100 max-w-xl'>
          Baliga Lighting engineers flameproof lighting, communication systems,
          panels and flow measuring equipment trusted across hazardous
          industrial sites worldwide.
        </p>
        <div className='mt-10 flex gap-4'>
          <a
            href='/products'
            className='bg-white text-navy-900 px-6 py-3 rounded-md font-medium hover:bg-navy-50 transition'
          >
            Explore Products
          </a>
          <a
            href='/contact'
            className='border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-white/10 transition'
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
