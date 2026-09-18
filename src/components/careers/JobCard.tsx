import { Briefcase, MapPin, Users } from 'lucide-react';
import type { JobOpening } from '@/data/careers';

export default function JobCard({
  job,
  index,
  onOpen,
}: {
  job: JobOpening;
  index: number;
  onOpen: (job: JobOpening) => void;
}) {
  return (
    <button
      type='button'
      onClick={() => onOpen(job)}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      className='animate-stagger-fade-in group flex flex-col text-left rounded-sm border border-line bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-lg cursor-pointer'
    >
      <div className='flex items-center justify-between gap-3 p-6 pb-0'>
        <span className='nameplate nameplate--dark text-amber-500 text-[11px]'>
          {job.department}
        </span>
        <span className='flex items-center gap-1.5 font-mono text-xs text-steel'>
          <Users className='h-3.5 w-3.5' />
          {job.openings} {job.openings === 1 ? 'opening' : 'openings'}
        </span>
      </div>

      <div className='flex flex-1 flex-col p-6'>
        <h3 className='font-display text-lg text-navy-900 normal-case leading-snug'>
          {job.title}
        </h3>

        <div className='mt-3 space-y-1.5'>
          <p className='flex items-center gap-2 font-body normal-case text-xs text-steel'>
            <MapPin className='h-3.5 w-3.5 shrink-0 text-steel' />
            {job.location}
          </p>
          <p className='flex items-center gap-2 font-body normal-case text-xs text-steel'>
            <Briefcase className='h-3.5 w-3.5 shrink-0 text-steel' />
            {job.experience}
          </p>
        </div>

        <p className='mt-3 font-body normal-case text-sm text-steel leading-relaxed line-clamp-3'>
          {job.summary}
        </p>

        <span className='mt-4 font-display text-xs tracking-widest text-navy-900 group-hover:text-amber-600 transition-colors'>
          VIEW DETAILS &amp; APPLY →
        </span>
      </div>
    </button>
  );
}
