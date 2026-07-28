import type { Metadata } from 'next';
import { CheckCircle2, ExternalLink, FileText } from 'lucide-react';

export const metadata: Metadata = { title: 'Certifications' };

const CERTIFICATIONS = [
  {
    id: 'atex',
    code: 'ATEX',
    name: 'ATEX Directive',
    bg: 'bg-white',
    image: 'https://www.baliga.com/images/atex-certification.png',
    pdf: 'https://www.baliga.com/images/pdf/ATEX-Certification.pdf',
    description:
      'Initiated by the European Union, ATEX has been in force as a directive since 1 July 2003 throughout the EEC. It is a mandatory requirement for all equipment intended for use in a hazardous area within European countries.',
    points: [
      'Addresses the essential safety requirements for hazardous-area equipment',
      'Uses harmonised standards as the method of conforming to those requirements',
      'Requires technical documentation so users are informed of correct installation and use',
    ],
  },
  {
    id: 'iecex',
    code: 'IECEx',
    name: 'IECEx System',
    bg: 'bg-mist',
    image: 'https://www.baliga.com/images/iecex-certification.png',
    pdf: 'https://www.baliga.com/images/pdf/IECEX-Certification.pdf',
    description:
      'The IECEx System provides global acceptance for equipment built for explosive atmospheres by complying with IEC standards, reducing the need for repeat testing across markets.',
    points: [
      'Facilitates national compliance with Ex product requirements',
      'Enables international trade of Ex-certified equipment',
      'Backed by IEC standards recognised across member countries',
    ],
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    name: 'Quality Management System',
    bg: 'bg-white',
    image: 'https://www.baliga.com/images/ISO9001-2015-Certification.png',
    pdf: 'https://www.baliga.com/images/pdf/ISO9001-2015-Certification.pdf',
    description:
      'ISO 9001 is maintained by the International Organization for Standardization (ISO) and administered through accreditation and certification bodies, governing how our manufacturing is managed end to end.',
    points: [
      'Established procedures covering all key business processes',
      'Monitoring mechanisms that ensure process effectiveness',
      'Adequate record maintenance',
      'Output inspection for defects, with corrective measures',
      'Regular review of process and system effectiveness',
      'A framework for continuous improvement',
    ],
  },
];

export default function CertificationsPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            CERTIFIED TO
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Certifications &amp; Accreditations
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Every product leaving our Chennai facility is built to
            internationally recognised standards for hazardous-area equipment.
          </p>
        </div>
      </section>

      <nav className='flex justify-center gap-6 border-b border-line bg-white py-4 text-sm font-medium'>
        {CERTIFICATIONS.map(cert => (
          <a
            key={cert.id}
            href={`#${cert.id}`}
            className='font-display text-xs tracking-widest text-steel hover:text-navy-900'
          >
            {cert.code}
          </a>
        ))}
      </nav>

      {CERTIFICATIONS.map(cert => (
        <section
          key={cert.id}
          id={cert.id}
          className={`${cert.bg} scroll-mt-24`}
        >
          <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-16 items-start'>
            <div>
              <div className='nameplate text-navy-900'>
                <span className='text-sm font-medium tracking-wide'>
                  {cert.code}
                </span>
              </div>
              <h2 className='mt-4 font-display text-2xl font-bold text-navy-900 normal-case'>
                {cert.name}
              </h2>
              <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
                {cert.description}
              </p>

              <a
                href={cert.pdf}
                target='_blank'
                rel='noopener noreferrer'
                className='group mt-6 flex items-center gap-4 rounded-sm border border-line bg-white p-4 transition-colors hover:border-amber-500'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  className='h-20 w-20 shrink-0 rounded-sm border border-line bg-white object-contain p-1'
                />
                <span className='flex items-center gap-2 font-display text-sm font-semibold text-navy-900 group-hover:text-amber-600'>
                  <FileText size={16} />
                  View Certificate (PDF)
                  <ExternalLink size={14} />
                </span>
              </a>
            </div>

            <ul className='space-y-3'>
              {cert.points.map(point => (
                <li
                  key={point}
                  className='flex items-start gap-3 rounded-sm border border-line bg-white p-4 text-sm text-ink transition-colors hover:border-amber-500'
                >
                  <CheckCircle2
                    size={16}
                    className='mt-0.5 shrink-0 text-amber-600'
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
