const stats = [
  { label: 'ATEX', desc: 'European hazardous-area certification' },
  { label: 'IECEx', desc: 'International explosion-proof standard' },
  { label: '64+ Years', desc: 'Manufacturing since 1960' },
  { label: 'Global Reach', desc: 'Serving industries worldwide' },
];

export default function TrustBar() {
  return (
    <section className='bg-navy-50 border-y border-navy-100'>
      <div className='mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8'>
        {stats.map(s => (
          <div key={s.label} className='text-center'>
            <p className='text-xl font-semibold text-navy-900'>{s.label}</p>
            <p className='text-sm text-navy-600 mt-1'>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
