import type { Metadata } from 'next';
import { FileDown, Mail, ShieldCheck } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import CareersExplorer from '@/components/careers/CareersExplorer';

export const metadata: Metadata = { title: 'Careers' };

export default function CareersPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            JOIN BALIGA
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>Careers</h1>
          <p className='mt-6 max-w-2xl mx-auto font-body normal-case text-white/70 leading-relaxed'>
            Baliga believes in keeping its people on a perpetual learning
            curve and highly motivated, backed by structured training and
            yearly performance appraisals designed as a developmental tool
            rather than an evaluative one — built on decades of manufacturing
            expertise and an uncompromising commitment to workplace safety.
          </p>

          <div className='mt-10 inline-flex flex-col sm:flex-row items-center gap-4 rounded-sm border border-white/15 bg-white/5 px-6 py-5 text-center sm:text-left'>
            <ShieldCheck
              className='h-8 w-8 shrink-0 text-amber-500'
              strokeWidth={1.5}
            />
            <div className='sm:pr-4'>
              <p className='font-display text-sm text-white normal-case'>
                Employment Questionnaire
              </p>
              <p className='mt-1 font-body normal-case text-xs text-white/60'>
                Download and complete the official form before your interview.
              </p>
            </div>
            <a
              href={withBasePath('/docs/Baliga-Careers-Questionnaire.pdf')}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 shrink-0 font-display text-xs tracking-widest bg-amber-500 hover:bg-amber-600 text-navy-950 px-5 py-3 rounded-sm transition-colors'
            >
              <FileDown className='h-4 w-4' />
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </section>

      <CareersExplorer />

      <section className='bg-white border-t border-line'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-12 text-center'>
          <p className='font-body normal-case text-sm text-steel'>
            Don&apos;t see a role that fits? We&apos;re always open to hearing
            from experienced candidates.
          </p>
          <a
            href='mailto:hr@baliga.com'
            className='mt-4 inline-flex items-center gap-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors'
          >
            <Mail size={14} />
            hr@baliga.com
          </a>
        </div>
      </section>
    </>
  );
}
