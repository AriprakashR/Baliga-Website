import type { Metadata } from 'next';
import Link from 'next/link';
import FAQExplorer from '@/components/faq/FAQExplorer';

export const metadata: Metadata = { title: 'FAQ' };

export default function FAQPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            KNOWLEDGE BASE
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Frequently Asked Questions
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Hazardous area fundamentals, certifications, and product
            specifications — search or browse by topic.
          </p>
        </div>
      </section>

      <FAQExplorer />

      <section className='bg-navy-950'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-white max-w-xl'>
            Still have questions?
          </h2>
          <div className='flex flex-wrap gap-4'>
            <Link
              href='/contact'
              className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors whitespace-nowrap'
            >
              Contact Us
            </Link>
            <Link
              href='/feedback'
              className='font-display text-sm tracking-wide border border-white/30 hover:border-amber-500 hover:text-amber-500 text-white px-7 py-3.5 rounded-sm transition-colors whitespace-nowrap'
            >
              Share Feedback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
