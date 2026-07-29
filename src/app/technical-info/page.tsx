import type { Metadata } from 'next';
import { Reveal } from '@/components/about/Reveal';
import TechnicalSidebar from '@/components/technical/TechnicalSidebar';
import TechnicalDataTable from '@/components/technical/TechnicalDataTable';
import DocumentLibrary from '@/components/technical/DocumentLibrary';
import {
  ENCLOSURE_TYPES_TABLE,
  IP_RATING_TABLE,
  NEMA_TABLE,
  TEMPERATURE_CLASS_TABLE,
  ZONE_DIVISION_TABLE,
} from '@/data/technicalTables';

export const metadata: Metadata = { title: 'Technical Info' };

export default function TechnicalInfoPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            REFERENCE LIBRARY
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Technical Information
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Hazardous area classification, ingress protection, temperature
            codes, and explosion-protection standards — plus downloadable
            reference documents.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          <div className='lg:flex lg:gap-16'>
            <TechnicalSidebar />

            <div className='mt-10 lg:mt-0 min-w-0 flex-1 space-y-20'>
              <section id='document-library' className='scroll-mt-36'>
                <Reveal>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    DOCUMENTATION LIBRARY
                  </span>
                  <h2 className='mt-3 text-2xl font-bold text-navy-900'>
                    Downloadable Technical References
                  </h2>
                  <p className='mt-3 max-w-2xl font-body normal-case text-steel leading-relaxed'>
                    Detailed reference PDFs covering general Ex fundamentals,
                    lighting design, junction boxes, and control stations.
                  </p>
                  <div className='mt-8'>
                    <DocumentLibrary />
                  </div>
                </Reveal>
              </section>

              <section id='hazardous-area' className='scroll-mt-36'>
                <Reveal>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    HAZARDOUS AREA CLASSIFICATION
                  </span>
                  <h2 className='mt-3 text-2xl font-bold text-navy-900'>
                    Zones &amp; Divisions
                  </h2>
                  <p className='mt-3 max-w-2xl font-body normal-case text-steel leading-relaxed'>
                    Process plants are divided into Zones (European and IEC
                    method) or Divisions (North American method) according to
                    the likelihood of a potentially explosive atmosphere
                    being present.
                  </p>
                  <div className='mt-6'>
                    <TechnicalDataTable
                      table={ZONE_DIVISION_TABLE}
                      caption='Zones vs Divisions classification'
                    />
                  </div>
                </Reveal>
              </section>

              <section id='ip-chart' className='scroll-mt-36'>
                <Reveal>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    INGRESS PROTECTION
                  </span>
                  <h2 className='mt-3 text-2xl font-bold text-navy-900'>
                    IP Rating Chart
                  </h2>
                  <p className='mt-3 max-w-2xl font-body normal-case text-steel leading-relaxed'>
                    IP means Ingress Protection — protection of apparatus
                    from the entry of solids and liquids. The first digit
                    rates protection against solids, the second against
                    liquids.
                  </p>
                  <div className='mt-6'>
                    <TechnicalDataTable
                      table={IP_RATING_TABLE}
                      caption='IP ingress protection levels'
                    />
                  </div>

                  <h3 className='mt-10 font-display text-sm tracking-wide text-navy-900 normal-case'>
                    NEMA Equivalents
                  </h3>
                  <p className='mt-2 max-w-2xl font-body normal-case text-sm text-steel leading-relaxed'>
                    North American practice uses NEMA standards to describe
                    ingress protection.
                  </p>
                  <div className='mt-4 max-w-md'>
                    <TechnicalDataTable
                      table={NEMA_TABLE}
                      caption='NEMA to IP equivalency'
                    />
                  </div>
                </Reveal>
              </section>

              <section id='temperature' className='scroll-mt-36'>
                <Reveal>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    TEMPERATURE CODES
                  </span>
                  <h2 className='mt-3 text-2xl font-bold text-navy-900'>
                    Temperature Class Ratings
                  </h2>
                  <p className='mt-3 max-w-2xl font-body normal-case text-steel leading-relaxed'>
                    The ignition temperature is the lowest temperature on
                    the surface at which an explosive atmosphere will
                    ignite. Gases and dusts are divided into temperature
                    classes according to their ignition temperatures, so
                    electrical equipment is classified into six temperature
                    classes, T1 to T6.
                  </p>
                  <div className='mt-6 max-w-md'>
                    <TechnicalDataTable
                      table={TEMPERATURE_CLASS_TABLE}
                      caption='Temperature class maximum surface temperatures'
                    />
                  </div>
                </Reveal>
              </section>

              <section id='enclosure-types' className='scroll-mt-36'>
                <Reveal>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    EXPLOSION PROTECTION
                  </span>
                  <h2 className='mt-3 text-2xl font-bold text-navy-900'>
                    Enclosure Types &amp; Standards
                  </h2>
                  <p className='mt-3 max-w-2xl font-body normal-case text-steel leading-relaxed'>
                    General reference for the common IEC 60079-series types
                    of explosion protection. Always confirm zone suitability
                    against the specific equipment&apos;s certificate before
                    installation.
                  </p>
                  <div className='mt-6'>
                    <TechnicalDataTable
                      table={ENCLOSURE_TYPES_TABLE}
                      caption='Types of explosion protection'
                    />
                  </div>
                </Reveal>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
