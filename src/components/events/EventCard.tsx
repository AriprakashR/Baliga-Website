import Image from 'next/image';
import { Calendar, MapPin, Tag } from 'lucide-react';
import type { EventItem } from '@/data/events';
import { withBasePath } from '@/lib/basePath';

export default function EventCard({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: (event: EventItem) => void;
}) {
  return (
    <button
      type='button'
      onClick={() => onOpen(event)}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      className='animate-stagger-fade-in group flex flex-col text-left rounded-sm border border-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg cursor-pointer'
    >
      <div className='relative aspect-video bg-navy-900 overflow-hidden'>
        {event.image ? (
          <Image
            src={withBasePath(event.image)}
            alt=''
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-linear-to-br from-navy-900 to-navy-700 transition-transform duration-500 group-hover:scale-105'>
            <Calendar className='h-10 w-10 text-amber-500/70' strokeWidth={1.5} />
          </div>
        )}
        <div className='absolute left-3 top-3 z-10'>
          <span className='nameplate nameplate--dark text-amber-500 text-[11px]'>
            {event.category}
          </span>
        </div>
      </div>

      <div className='flex flex-1 flex-col p-6'>
        <span className='font-mono text-xs tracking-wide text-amber-600'>
          {event.dateLabel}
        </span>
        <h3 className='mt-2 font-display text-lg text-navy-900 normal-case leading-snug'>
          {event.title}
        </h3>

        <div className='mt-3 space-y-1.5'>
          {event.location && (
            <p className='flex items-center gap-2 font-body normal-case text-xs text-steel'>
              <MapPin className='h-3.5 w-3.5 shrink-0 text-steel' />
              {event.location}
            </p>
          )}
          {event.booth && (
            <p className='flex items-center gap-2 font-body normal-case text-xs text-steel'>
              <Tag className='h-3.5 w-3.5 shrink-0 text-steel' />
              Booth {event.booth}
            </p>
          )}
        </div>

        <p className='mt-3 font-body normal-case text-sm text-steel leading-relaxed line-clamp-3'>
          {event.description}
        </p>

        <span className='mt-4 font-display text-xs tracking-widest text-navy-900 group-hover:text-amber-600 transition-colors'>
          VIEW DETAILS →
        </span>
      </div>
    </button>
  );
}
