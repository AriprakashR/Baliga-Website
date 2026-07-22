const BENEFITS = [
  {
    n: '01',
    title: 'Safety-first engineering',
    body: 'Every enclosure, luminaire, and panel is designed around a single question: what happens if this fails in a Zone 1 area. Compliance follows from that, not the other way round.',
  },
  {
    n: '02',
    title: 'Six decades of field experience',
    body: "Since 1960 our equipment has run in Indian refineries, mines, and offshore platforms — problems most manufacturers only encounter in a lab, we've already solved on site.",
  },
  {
    n: '03',
    title: 'Internationally certified',
    body: 'ATEX and IECEx certification means the equipment we build for the domestic market meets the same bar required for export and multinational EPC projects.',
  },
  {
    n: '04',
    title: 'Application engineering support',
    body: 'Our engineers work with your site drawings and hazardous-area classifications directly, so the equipment you order is the equipment your site actually needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className='bg-white'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-24'>
        <span className='font-display text-xs tracking-widest text-amber-600'>
          WHY BALIGA
        </span>
        <h2 className='mt-4 text-3xl md:text-4xl font-bold text-navy-900 max-w-2xl'>
          Built for sites where safety isn&apos;t optional
        </h2>

        <div className='mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12'>
          {BENEFITS.map(b => (
            <div key={b.n} className='flex gap-6'>
              <span className='font-mono text-2xl text-amber-500 shrink-0'>
                {b.n}
              </span>
              <div>
                <h3 className='font-display text-xl tracking-wide text-navy-900 normal-case'>
                  {b.title}
                </h3>
                <p className='mt-2 font-body normal-case text-steel text-base leading-relaxed'>
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
