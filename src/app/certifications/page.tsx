import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Certifications' };

const CERTIFICATIONS = [
  {
    code: 'ATEX',
    name: 'ATEX Directive',
    detail:
      'Initiated by the European Union and in force since 1 July 2003, ATEX certification is mandatory for equipment used in hazardous areas across European countries.',
  },
  {
    code: 'IECEx',
    name: 'IECEx System',
    detail:
      'The IECEx certification system provides global acceptance by complying with IEC standards, facilitating international trade of equipment built for explosive atmospheres.',
  },
  {
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    detail:
      'Certifies that our manufacturing is governed by documented procedures covering key processes, monitoring of effectiveness, record-keeping, and continuous improvement.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20  text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            CERTIFIED TO
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Certifications
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Every product leaving our Chennai facility is built to
            internationally recognised standards for hazardous-area equipment.
          </p>
        </div>
      </section>

      <section className='bg-mist'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-8'>
          {CERTIFICATIONS.map(cert => (
            <div
              key={cert.code}
              className='bg-white border border-line rounded-sm p-8'
            >
              <div className='nameplate text-navy-900'>
                <span className='text-sm font-medium tracking-wide'>
                  {cert.code}
                </span>
              </div>
              <h2 className='mt-4 font-display text-lg text-navy-900 normal-case'>
                {cert.name}
              </h2>
              <p className='mt-3 font-body normal-case text-steel text-sm leading-relaxed'>
                {cert.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
