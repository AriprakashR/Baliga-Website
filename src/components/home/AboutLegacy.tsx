const STATS = [
  { value: '1960', label: 'Founded' },
  { value: '60+', label: 'Years in hazardous-area engineering' },
  { value: '4', label: 'Core product lines' },
  { value: '2', label: 'International certifications held' },
];

export default function AboutLegacy() {
  return (
    <section className='bg-white'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-start'>
        <div className='grid grid-cols-2 gap-6'>
          {STATS.map(stat => (
            <div
              key={stat.label}
              className='nameplate flex-col items-start text-navy-900 py-6'
            >
              <span className='font-mono text-3xl md:text-4xl font-semibold'>
                {stat.value}
              </span>
              <span className='text-xs text-steel normal-case tracking-normal mt-1'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <span className='font-display text-xs tracking-widest text-amber-600'>
            WHO WE ARE
          </span>
          <h2 className='mt-4 text-3xl md:text-4xl font-bold text-navy-900'>
            Six decades of keeping hazardous sites running safely
          </h2>
          <p className='mt-6 font-body normal-case text-steel text-base leading-relaxed'>
            Since 1960, Baliga Lighting has manufactured explosion-proof and
            flameproof electrical equipment for India&apos;s most demanding
            industrial environments — refineries, chemical plants, offshore
            platforms, and mines where a single spark carries real consequences.
            Every product is engineered to ATEX and IECEx standards, so the same
            equipment trusted on Indian sites meets the bar for international
            ones.
          </p>
          <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
            Our range spans explosion-proof lighting, communication systems,
            control and distribution panels, and flow measuring equipment —
            built to perform in Zone 1 and Zone 2 hazardous areas across the oil
            &amp; gas, petrochemical, marine, and mining sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
