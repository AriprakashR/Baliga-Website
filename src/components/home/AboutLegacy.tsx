const STATS = [
  { value: '1960', label: 'Foundeds' },
  { value: '65+', label: 'Years in hazardous-area engineering' },
  { value: '4', label: 'Core product lines' },
  { value: '3', label: 'International certifications held' },
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
            Founded in 1960 by Mr. U.N. Baliga in a modest 460 sq. meter
            factory, Baliga Lighting pioneered the manufacture of
            explosion-proof lighting equipment in India in 1962 — the beginning
            of a journey that has made it a benchmark for quality among Indian
            flameproof manufacturers. Our Chennai facility has since grown to a
            4,200 sq. meter built-up plant on a 25,000 sq. meter plot, with
            branch offices across India and in Dubai serving customers globally.
          </p>
          <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
            We are ISO 9001:2015, ATEX, and IECEx certified, with every product
            subjected to stage-wise inspection against international quality
            norms. Our equipment is trusted by refineries and EPC majors
            including Bharat Petroleum, Indian Oil Corporation, Reliance
            Industries, Technip India, Saipem, and Worley Parsons — across
            refineries, oil drilling &amp; platforms, petrochemicals,
            fertilisers &amp; chemicals, pharmaceuticals, and space research.
          </p>
        </div>
      </div>
    </section>
  );
}
