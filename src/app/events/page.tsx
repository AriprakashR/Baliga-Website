import type { Metadata } from 'next';
import { EVENTS } from '@/data/events';

export const metadata: Metadata = { title: 'Events' };

export default function EventsPage() {
  return (
    <>
      <section className='bg-navy-900 py-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            NEWS &amp; EVENTS
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Events &amp; Exhibitions
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            A history of trade shows and industry exhibitions where Baliga
            has presented its explosion-proof equipment range.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          <ol className='max-w-2xl mx-auto space-y-8 border-l border-line pl-8'>
            {EVENTS.map(event => (
              <li key={event.id} className='relative'>
                <span className='absolute -left-9.25 top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500' />
                <span className='font-mono text-xs tracking-wide text-amber-600'>
                  {event.date}
                </span>
                <h2 className='mt-1 font-display text-lg text-navy-900 normal-case'>
                  {event.title}
                </h2>
                <p className='mt-2 font-body normal-case text-steel text-sm leading-relaxed'>
                  {event.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
