import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Printer } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact' };

const BRANCHES = [
  {
    region: 'Maharashtra',
    phone: '+91 88799 95243',
    email: 'baligabom@baliga.com',
  },
  {
    region: 'Vadodara',
    email: 'baligabrd@baliga.com',
  },
  {
    region: 'North India',
    phone: '+91 89398 80507',
    email: 'baligadel@baliga.com',
  },
  {
    region: 'South India',
    phone: '+91 89398 80507',
    email: 'sales_south@baliga.com',
  },
  {
    region: 'International',
    email: 'intlsales@baliga.com',
  },
  {
    region: 'UAE Agent — Fortune Controls & Automation',
    phone: '+971 (0)-50-55-98170',
    email: 'baligauae@baliga.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className='bg-navy-900 py-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            GET IN TOUCH
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Contact Baliga
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Registered office, factory, and branch contacts for enquiries
            across India and internationally.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-12'>
          <div>
            <span className='font-display text-xs tracking-widest text-amber-600'>
              REGISTERED OFFICE &amp; FACTORY
            </span>
            <h2 className='mt-3 text-2xl font-bold text-navy-900'>
              Baliga Lighting Equipments Pvt. Ltd.
            </h2>
            <ul className='mt-6 space-y-4 font-body normal-case text-steel text-sm'>
              <li className='flex items-start gap-3'>
                <MapPin size={18} className='mt-0.5 shrink-0 text-amber-500' />
                1/382, Baliga Road, Off Medavakkam Main Road, Kovilambakkam,
                Chennai-600129, India
              </li>
              <li className='flex items-center gap-3'>
                <Phone size={18} className='shrink-0 text-amber-500' />
                +91-(044)-2238-0990
              </li>
              <li className='flex items-center gap-3'>
                <Printer size={18} className='shrink-0 text-amber-500' />
                +91-(044)-2268-0996 (fax)
              </li>
              <li className='flex items-center gap-3'>
                <Mail size={18} className='shrink-0 text-amber-500' />
                baligamf@baliga.com
              </li>
            </ul>
          </div>

          <div>
            <span className='font-display text-xs tracking-widest text-amber-600'>
              BRANCH &amp; REGIONAL OFFICES
            </span>
            <div className='mt-6 grid sm:grid-cols-2 gap-4'>
              {BRANCHES.map(b => (
                <div
                  key={b.region}
                  className='nameplate flex-col items-start py-4 text-navy-900'
                >
                  <span className='text-sm font-medium tracking-wide normal-case'>
                    {b.region}
                  </span>
                  {b.phone && (
                    <span className='mt-1 text-xs text-steel normal-case tracking-normal'>
                      {b.phone}
                    </span>
                  )}
                  <span className='mt-1 text-xs text-steel normal-case tracking-normal break-all'>
                    {b.email}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
