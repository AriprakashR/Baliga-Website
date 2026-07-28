'use client';

import { useState } from 'react';

type Company = { name: string; logo: string };
type ClientGroup = { industry: string; companies: Company[] };

export default function ClientsAccordion({
  groups,
}: {
  groups: ClientGroup[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className='border border-line rounded-sm bg-white divide-y divide-line'>
      {groups.map((group, index) => {
        const isOpen = openIndex === index;
        const panelId = `client-panel-${index}`;

        return (
          <div key={group.industry}>
            <button
              type='button'
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className='w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-mist transition-colors cursor-pointer'
            >
              <span className='flex items-center gap-4 '>
                <span className='font-mono text-xs text-amber-600'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className='font-display text-base md:text-lg text-navy-900 normal-case'>
                  {group.industry}
                </span>
              </span>
              <span className='flex items-center gap-3 shrink-0'>
                <span className='hidden sm:inline font-mono text-xs  text-steel'>
                  {group.companies.length} companies
                </span>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className={`w-4 h-4 text-navy-900 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d='M6 9l6 6 6-6'
                    stroke='currentColor'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className='overflow-hidden'>
                <ul className='bg-mist px-6 pb-6 pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {group.companies.map(company => (
                    <li
                      key={company.name}
                      className='flex flex-col items-center gap-3 rounded-sm border border-line bg-white p-4 text-center'
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        loading='lazy'
                        className='h-20 w-full object-contain'
                        onError={e => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className='font-body normal-case text-steel text-xs font-bold leading-snug'>
                        {company.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
