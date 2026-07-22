const benefits = [
  {
    n: '01',
    title: 'Certified Safety',
    desc: 'ATEX and IECEx certified equipment engineered for zone-rated hazardous areas.',
  },
  {
    n: '02',
    title: 'Six Decades of Expertise',
    desc: 'Manufacturing explosion-proof equipment since 1960.',
  },
  {
    n: '03',
    title: 'Full Product Range',
    desc: 'Lighting, communication systems, panels and flow measuring equipment under one roof.',
  },
  {
    n: '04',
    title: 'Global Standards, Local Support',
    desc: 'Built to international standards, backed by responsive technical support.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='bg-navy-900 text-white'>
      <div className='mx-auto max-w-7xl px-6 py-20'>
        <h2 className='text-3xl font-bold'>Why Baliga</h2>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {benefits.map(b => (
            <div key={b.n} className='flex gap-5'>
              <span className='text-3xl font-bold text-navy-400'>{b.n}</span>
              <div>
                <h3 className='text-lg font-semibold'>{b.title}</h3>
                <p className='mt-2 text-navy-200'>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
