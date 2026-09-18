'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Search, SearchX } from 'lucide-react';
import { JOB_DEPARTMENTS, JOBS, type JobOpening } from '@/data/careers';
import JobCard from './JobCard';

const JobDetailModal = dynamic(() => import('./JobDetailModal'), {
  ssr: false,
});
const ApplyModal = dynamic(() => import('./ApplyModal'), { ssr: false });

export default function CareersExplorer() {
  const [department, setDepartment] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [detailJob, setDetailJob] = useState<JobOpening | null>(null);
  const [applyJob, setApplyJob] = useState<JobOpening | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter(
      job => department === 'all' || job.department === department
    ).filter(
      job =>
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.summary.toLowerCase().includes(q)
    );
  }, [department, query]);

  const hasActiveFilters = department !== 'all' || query.trim() !== '';

  function clearFilters() {
    setDepartment('all');
    setQuery('');
  }

  return (
    <>
      <section className='border-b border-line bg-white sticky top-20 z-30'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-5 flex flex-col gap-5'>
          <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
            <div className='relative w-full md:max-w-sm'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel' />
              <input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Search open positions…'
                className='w-full rounded-sm border border-line bg-white py-2.5 pl-9 pr-3 font-body normal-case text-sm text-ink placeholder:text-steel/70 transition-colors focus:outline-none focus:border-amber-500'
              />
            </div>

            <p className='font-body normal-case text-sm text-steel'>
              <span className='text-navy-900 font-medium'>
                {filtered.length}
              </span>{' '}
              of {JOBS.length} open positions
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            <button
              type='button'
              onClick={() => setDepartment('all')}
              className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                department === 'all'
                  ? 'bg-amber-500 border-amber-500 text-navy-950'
                  : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
              }`}
            >
              ALL
              <span className='ml-2 font-mono opacity-60'>
                {JOBS.length}
              </span>
            </button>
            {JOB_DEPARTMENTS.map(dept => {
              const count = JOBS.filter(j => j.department === dept).length;
              return (
                <button
                  key={dept}
                  type='button'
                  onClick={() => setDepartment(dept)}
                  className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                    department === dept
                      ? 'bg-amber-500 border-amber-500 text-navy-950'
                      : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
                  }`}
                >
                  {dept.toUpperCase()}
                  <span className='ml-2 font-mono opacity-60'>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className='bg-mist'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          {filtered.length > 0 ? (
            <div
              key={`${department}-${query}`}
              className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {filtered.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  onOpen={setDetailJob}
                />
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-4 py-16 text-center'>
              <SearchX className='h-10 w-10 text-steel/50' strokeWidth={1.5} />
              <p className='font-display text-lg text-navy-900 normal-case'>
                No positions match your filters
              </p>
              {hasActiveFilters && (
                <button
                  type='button'
                  onClick={clearFilters}
                  className='mt-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer'
                >
                  CLEAR FILTERS
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <JobDetailModal
        job={detailJob}
        onClose={() => setDetailJob(null)}
        onApply={job => {
          setDetailJob(null);
          setApplyJob(job);
        }}
      />
      <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
    </>
  );
}
