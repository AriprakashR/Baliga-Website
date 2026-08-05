'use client';

import { useEffect } from 'react';
import { Briefcase, MapPin, Users, X } from 'lucide-react';
import type { JobOpening } from '@/data/careers';

export default function JobDetailModal({
  job,
  onClose,
  onApply,
}: {
  job: JobOpening | null;
  onClose: () => void;
  onApply: (job: JobOpening) => void;
}) {
  useEffect(() => {
    if (!job) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='job-modal-title'
      className='fixed inset-0 z-100 flex items-center justify-center p-4'
    >
      <div
        onClick={onClose}
        className='animate-overlay-fade-in absolute inset-0 bg-navy-950/70 backdrop-blur-sm'
      />

      <div className='animate-modal-pop-in themed-scrollbar relative flex w-full max-w-2xl max-h-[90vh] flex-col overflow-y-auto overscroll-contain rounded-sm border border-line bg-white shadow-xl'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close job details'
          className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 border border-line hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer'
        >
          <X className='h-4 w-4' />
        </button>

        <div className='p-6 md:p-8'>
          <span className='nameplate nameplate--dark text-amber-500 text-xs'>
            {job.department}
          </span>
          <h2
            id='job-modal-title'
            className='mt-4 font-display text-2xl text-navy-900 normal-case leading-snug'
          >
            {job.title}
          </h2>

          <div className='mt-4 flex flex-wrap gap-x-6 gap-y-2'>
            <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
              <MapPin className='h-4 w-4 text-amber-600' />
              {job.location}
            </span>
            <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
              <Briefcase className='h-4 w-4 text-amber-600' />
              {job.experience}
            </span>
            <span className='flex items-center gap-2 font-body normal-case text-sm text-steel'>
              <Users className='h-4 w-4 text-amber-600' />
              {job.openings} {job.openings === 1 ? 'opening' : 'openings'}
            </span>
          </div>

          <p className='mt-6 font-body normal-case text-base text-ink leading-relaxed'>
            {job.summary}
          </p>

          <div className='mt-6'>
            <h3 className='font-display text-sm tracking-wide text-navy-900 normal-case'>
              Key Responsibilities
            </h3>
            <ul className='mt-3 space-y-2'>
              {job.responsibilities.map(item => (
                <li
                  key={item}
                  className='flex items-start gap-2.5 font-body normal-case text-sm text-steel leading-relaxed'
                >
                  <span className='mt-2 h-1 w-1 rounded-full bg-amber-500 shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-6'>
            <h3 className='font-display text-sm tracking-wide text-navy-900 normal-case'>
              Key Qualifications &amp; Experience
            </h3>
            <ul className='mt-3 space-y-2'>
              {job.qualifications.map(item => (
                <li
                  key={item}
                  className='flex items-start gap-2.5 font-body normal-case text-sm text-steel leading-relaxed'
                >
                  <span className='mt-2 h-1 w-1 rounded-full bg-amber-500 shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <button
              type='button'
              onClick={() => onApply(job)}
              className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors cursor-pointer'
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
