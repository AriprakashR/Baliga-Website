'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { CalendarX2, Search } from 'lucide-react';
import { EVENTS, type EventItem, type EventStatus } from '@/data/events';
import EventCard from './EventCard';

const EventModal = dynamic(() => import('./EventModal'), { ssr: false });

const TABS: { key: EventStatus; label: string }[] = [
  { key: 'upcoming', label: 'Upcoming Events' },
  { key: 'past', label: 'Past Events & Exhibitions' },
];

export default function EventsExplorer() {
  const [tab, setTab] = useState<EventStatus>(
    EVENTS.some(e => e.status === 'upcoming') ? 'upcoming' : 'past'
  );
  const [category, setCategory] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<EventItem | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(EVENTS.map(e => e.category))),
    []
  );

  const counts = useMemo(
    () => ({
      upcoming: EVENTS.filter(e => e.status === 'upcoming').length,
      past: EVENTS.filter(e => e.status === 'past').length,
    }),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EVENTS.filter(e => e.status === tab)
      .filter(e => category === 'all' || e.category === category)
      .filter(
        e =>
          !q ||
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.location?.toLowerCase().includes(q)
      )
      .sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
  }, [tab, category, query]);

  const hasActiveFilters = category !== 'all' || query.trim() !== '';

  return (
    <>
      <section className='border-b border-line bg-white sticky top-20 z-30'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-5 flex flex-col gap-5'>
          <div className='grid grid-cols-2 gap-3 sm:flex sm:flex-wrap'>
            {TABS.map(t => (
              <button
                key={t.key}
                type='button'
                onClick={() => setTab(t.key)}
                className={`w-full sm:w-auto text-center font-display text-sm tracking-wide px-5 py-2.5 rounded-sm border transition-colors cursor-pointer ${
                  tab === t.key
                    ? 'bg-navy-900 border-navy-900 text-white'
                    : 'border-line text-steel hover:border-navy-900 hover:text-navy-900'
                }`}
              >
                {t.label}
                <span className='ml-2 font-mono text-xs opacity-60'>
                  {counts[t.key]}
                </span>
              </button>
            ))}
          </div>

          <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
            <div className='relative w-full md:max-w-xs'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel' />
              <input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Search events…'
                className='w-full rounded-sm border border-line bg-white py-2.5 pl-9 pr-3 font-body normal-case text-sm text-ink placeholder:text-steel/70 focus:outline-none focus:border-amber-500'
              />
            </div>

            <div className='flex flex-wrap gap-2'>
              <button
                type='button'
                onClick={() => setCategory('all')}
                className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                  category === 'all'
                    ? 'bg-amber-500 border-amber-500 text-navy-950'
                    : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
                }`}
              >
                ALL
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  type='button'
                  onClick={() => setCategory(cat)}
                  className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                    category === cat
                      ? 'bg-amber-500 border-amber-500 text-navy-950'
                      : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-mist'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          {filtered.length > 0 ? (
            <div
              key={`${tab}-${category}-${query}`}
              className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {filtered.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onOpen={setSelected}
                />
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-4 py-16 text-center'>
              <CalendarX2 className='h-10 w-10 text-steel/50' strokeWidth={1.5} />
              {tab === 'upcoming' && !hasActiveFilters ? (
                <>
                  <p className='font-display text-lg text-navy-900 normal-case'>
                    No upcoming events scheduled
                  </p>
                  <p className='max-w-md font-body normal-case text-sm text-steel'>
                    Check back soon, or browse six decades of trade shows and
                    exhibitions in our past events archive.
                  </p>
                  <button
                    type='button'
                    onClick={() => setTab('past')}
                    className='mt-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer'
                  >
                    VIEW PAST EVENTS →
                  </button>
                </>
              ) : (
                <>
                  <p className='font-display text-lg text-navy-900 normal-case'>
                    No events match your filters
                  </p>
                  <button
                    type='button'
                    onClick={() => {
                      setCategory('all');
                      setQuery('');
                    }}
                    className='mt-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer'
                  >
                    CLEAR FILTERS
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
