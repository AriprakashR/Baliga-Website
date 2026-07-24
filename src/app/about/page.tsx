import type { Metadata } from 'next';
import { MapPin } from 'lucide-react';
import { CertBadge } from '@/components/ui/CertBadge';

export const metadata: Metadata = { title: 'About Us' };

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'quality', label: 'Quality Policy' },
  { id: 'infrastructure', label: 'Infrastructure' },
];

export default function AboutPage() {
  return (
    <>
      <section className='bg-navy pt-24 pb-16 text-center text-white'>
        <div className='mx-auto max-w-3xl px-6'>
          <p className='font-mono text-xs uppercase tracking-widest text-hazard-yellow'>
            About Baliga
          </p>
          <h1 className='mt-3 font-display text-4xl font-bold'>
            Six Decades of Hazardous-Area Engineering
          </h1>
          <p className='mt-4 text-steel-200'>
            Founded in 1960 and based in Chennai, India, Baliga has manufactured
            explosion-proof and waterproof electrical equipment since pioneering
            the category in India in 1962.
          </p>
        </div>
      </section>

      <nav className='sticky top-24 z-40 flex justify-center gap-6 border-b border-steel-200 bg-white py-3 text-sm font-medium'>
        {NAV_SECTIONS.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className='text-ink hover:text-hazard-orange'
          >
            {s.label}
          </a>
        ))}
      </nav>

      <section
        id='overview'
        className='mx-auto max-w-3xl scroll-mt-36 px-6 py-16'
      >
        <h2 className='font-display text-2xl font-bold text-navy'>
          Corporate Overview
        </h2>
        <p className='mt-4 leading-relaxed text-steel-500'>
          Baliga Lighting Equipments Pvt. Ltd. was founded in 1960 by Mr. U.N.
          Baliga, initially manufacturing general luminaires. In 1962, the
          company became one of the first in India to manufacture
          explosion-proof lighting equipment — a category it has continued to
          specialize in for over six decades.
        </p>
        <p className='mt-4 leading-relaxed text-steel-500'>
          To maintain tighter control over casting quality and just-in-time
          delivery, Baliga later acquired its own foundry in Chennai,
          integrating manufacturing from raw casting through to finished,
          certified product.
        </p>
      </section>

      <section id='philosophy' className='bg-steel-50 py-16'>
        <div className='mx-auto max-w-3xl scroll-mt-36 px-6'>
          <h2 className='font-display text-2xl font-bold text-navy'>
            Corporate Philosophy
          </h2>
          <p className='mt-4 leading-relaxed text-steel-500'>
            &ldquo;We are committed to respect the society and the
            environment to which we belong and will strive to contribute to
            its progress and welfare.&rdquo; This philosophy is carried
            through quality delivery, business ethics, employee loyalty,
            continuous improvement (Kaizen), innovation, and responsiveness
            to our customers.
          </p>
          <p className='mt-4 leading-relaxed text-steel-500'>
            <span className='font-semibold text-navy'>Mission:</span> To
            offer our customers a complete range of explosion-proof
            equipment of world-class quality, and to be recognised as the
            leaders in India in this field.
          </p>
          <p className='mt-4 leading-relaxed text-steel-500'>
            <span className='font-semibold text-navy'>Vision:</span> Offer
            an extensive range of explosion-proof equipment, maintain our
            leadership position in India, and grow our presence in the
            South East Asian market.
          </p>
        </div>
      </section>

      <section
        id='quality'
        className='mx-auto max-w-3xl scroll-mt-36 px-6 py-16'
      >
        <h2 className='font-display text-2xl font-bold text-navy'>
          Quality Policy
        </h2>
        <p className='mt-4 leading-relaxed text-steel-500'>
          Baliga is ISO 9001:2015 certified, with a quality policy centered on
          customer satisfaction through continuous improvement of its
          manufacturing and quality-control processes.
        </p>
        <div className='mt-6 flex flex-wrap gap-2'>
          <CertBadge code='ISO 9001:2015' />
          <CertBadge code='ATEX' />
          <CertBadge code='IECEx' />
        </div>
      </section>

      <section id='infrastructure' className='bg-steel-50 py-16'>
        <div className='mx-auto max-w-3xl scroll-mt-36 px-6'>
          <h2 className='font-display text-2xl font-bold text-navy'>
            Infrastructure
          </h2>
          <p className='mt-4 leading-relaxed text-steel-500'>
            The Chennai manufacturing facility spans approximately 4,200 sq. m
            on a 25,000 sq. m plot, including an in-house foundry for casting.
          </p>
          <ul className='mt-6 space-y-3 text-sm text-ink'>
            <li className='flex items-start gap-2'>
              <MapPin
                size={16}
                className='mt-0.5 shrink-0 text-hazard-orange'
              />
              Registered office &amp; factory — Kovilambakkam, Chennai
            </li>
            <li className='flex items-start gap-2'>
              <MapPin
                size={16}
                className='mt-0.5 shrink-0 text-hazard-orange'
              />
              Branch offices — Mumbai, Vadodara, Pune
            </li>
            <li className='flex items-start gap-2'>
              <MapPin
                size={16}
                className='mt-0.5 shrink-0 text-hazard-orange'
              />
              International agent — Fortune Controls &amp; Automation, Dubai
              (UAE)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
