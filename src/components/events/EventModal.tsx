'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, ExternalLink, FileText, MapPin, Tag, X } from 'lucide-react';
import type { EventItem } from '@/data/events';
import { withBasePath } from '@/lib/basePath';

export default function EventModal({
  event,
  onClose,
}: {
  event: EventItem | null;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [lastEventId, setLastEventId] = useState(event?.id);

  if (event && event.id !== lastEventId) {
    setLastEventId(event.id);
    setActiveImage(0);
  }

  useEffect(() => {
    if (!event) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  const gallery = [event.image, ...(event.images ?? [])].filter(
    (src): src is string => Boolean(src)
  );
  const heroImage = gallery[activeImage] ?? gallery[0];

  const mapHref = event.location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
    : null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='event-modal-title'
      className='fixed inset-0 z-100 flex items-center justify-center p-4'
    >
      <div
        onClick={onClose}
        className='animate-overlay-fade-in absolute inset-0 bg-navy-950/70 backdrop-blur-sm'
      />

      <div className='animate-modal-pop-in relative flex w-full max-w-2xl max-h-[90vh] flex-col overflow-hidden rounded-sm border border-line bg-white shadow-xl'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close event details'
          className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 border border-line hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer'
        >
          <X className='h-4 w-4' />
        </button>

        <div className='relative aspect-video max-h-64 shrink-0 bg-navy-900 sm:max-h-72'>
          {heroImage ? (
            <Image
              src={withBasePath(heroImage)}
              alt=''
              fill
              sizes='(min-width: 768px) 672px, 100vw'
              className='object-cover'
            />
          ) : (
            <div className='flex h-full w-full items-center justify-center bg-linear-to-br from-navy-900 to-navy-700'>
              <Calendar
                className='h-12 w-12 text-amber-500/70'
                strokeWidth={1.5}
              />
            </div>
          )}
          <div className='absolute left-4 top-4 z-10'>
            <span className='nameplate nameplate--dark text-amber-500 text-xs'>
              {event.category}
            </span>
          </div>
        </div>

        <div className='themed-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 md:p-8'>
          <span className='font-mono text-xs tracking-wide text-amber-600'>
            {event.dateLabel}
          </span>
          <h2
            id='event-modal-title'
            className='mt-2 font-display text-2xl text-navy-900 normal-case leading-snug'
          >
            {event.title}
          </h2>

          <div className='mt-4 flex flex-wrap gap-x-6 gap-y-2'>
            <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
              <Calendar className='h-4 w-4 text-amber-600' />
              {event.dateLabel}
            </span>
            {event.location && (
              <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
                <MapPin className='h-4 w-4 text-amber-600' />
                {event.location}
              </span>
            )}
            {event.booth && (
              <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
                <Tag className='h-4 w-4 text-amber-600' />
                Booth {event.booth}
              </span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className='mt-5 grid grid-cols-5 gap-2 sm:grid-cols-6'>
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type='button'
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show photo ${index + 1} of ${gallery.length}`}
                  aria-current={index === activeImage}
                  className={`relative aspect-square overflow-hidden rounded-sm border-2 transition-colors cursor-pointer ${
                    index === activeImage
                      ? 'border-amber-500'
                      : 'border-line hover:border-amber-500/50'
                  }`}
                >
                  <Image
                    src={withBasePath(src)}
                    alt=''
                    fill
                    sizes='80px'
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          )}

          <p className='mt-6 font-body normal-case text-base text-ink leading-relaxed'>
            {event.description}
          </p>

          {event.organizer && (
            <p className='mt-4 font-body normal-case text-sm text-steel'>
              <span className='text-navy-900 font-medium'>Organised by:</span>{' '}
              {event.organizer}
            </p>
          )}

          <div className='mt-8 flex flex-wrap gap-3'>
            {mapHref && (
              <a
                href={mapHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 rounded-sm border border-line px-4 py-2.5 font-display text-xs tracking-widest text-navy-900 hover:border-amber-500 hover:text-amber-600 transition-colors'
              >
                <MapPin className='h-4 w-4' />
                VIEW ON MAP
                <ExternalLink className='h-3.5 w-3.5' />
              </a>
            )}
            {event.flyerUrl && (
              <a
                href={event.flyerUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 rounded-sm bg-amber-500 hover:bg-amber-600 px-4 py-2.5 font-display text-xs tracking-widest text-navy-950 transition-colors'
              >
                <FileText className='h-4 w-4' />
                DOWNLOAD FLYER (PDF)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
