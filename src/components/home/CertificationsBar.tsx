const CERTIFICATIONS = [
  { code: 'ATEX', detail: 'EEC DIRECTIVE' },
  { code: 'IECEx', detail: 'GLOBAL EX STANDARD' },
  { code: 'ISO 9001:2015', detail: 'QUALITY CERTIFIED' },
];

export default function CertificationsBar() {
  return (
    <section className='bg-mist border-b border-line'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-8'>
        <div className='flex flex-wrap items-center justify-center text-center gap-4 md:gap-6'>
          <span className='font-display text-xs tracking-widest text-steel'>
            CERTIFIED TO
          </span>
          {CERTIFICATIONS.map(cert => (
            <div key={cert.code} className='nameplate text-navy-900'>
              <span className='text-sm font-medium tracking-wide'>
                {cert.code}
              </span>
              <span className='text-xs text-steel'>{cert.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
