import type { Metadata } from 'next';
import EventsExplorer from '@/components/events/EventsExplorer';

export const metadata: Metadata = { title: 'Events & Exhibitions' };

export default function EventsPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            NEWS &amp; EVENTS
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Events &amp; Exhibitions
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Trade shows, exhibitions and conferences where Baliga has
            presented its explosion-proof equipment range — browse what&apos;s
            next or look back through six decades of industry participation.
          </p>
        </div>
      </section>

      <EventsExplorer />
    </>
  );
}
