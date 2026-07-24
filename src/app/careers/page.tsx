import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = { title: 'Careers' };

export default function CareersPage() {
  return (
    <section className='bg-white'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-24 text-center'>
        <span className='font-display text-xs tracking-widest text-amber-600'>
          JOIN BALIGA
        </span>
        <h1 className='mt-4 text-3xl md:text-4xl font-bold text-navy-900'>
          Careers
        </h1>
        <p className='mt-6 max-w-xl mx-auto font-body normal-case text-steel leading-relaxed'>
          Baliga believes in keeping its people on a perpetual learning
          curve and highly motivated, backed by structured training and
          yearly performance appraisals designed as a developmental tool
          rather than an evaluative one.
        </p>
        <p className='mt-4 max-w-xl mx-auto font-body normal-case text-steel leading-relaxed'>
          If your profile matches an opening in Accounts, Customer Service,
          Purchase, Sales, or Panel Design, send your resume to our HR
          team.
        </p>
        <a
          href='mailto:hr@baliga.com'
          className='mt-8 inline-flex items-center gap-2 font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors'
        >
          <Mail size={16} />
          hr@baliga.com
        </a>
      </div>
    </section>
  );
}
