import type { FAQItem } from '@/data/faq';

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;

  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, 'ig'));
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className='rounded-sm bg-amber-100 px-0.5 text-navy-900'>
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  query,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  query: string;
}) {
  const panelId = `faq-panel-${item.id}`;

  return (
    <div>
      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className='w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-mist transition-colors cursor-pointer'
      >
        <span className='font-body normal-case text-sm md:text-base font-medium text-navy-900'>
          {highlight(item.question, query)}
        </span>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className={`w-4 h-4 shrink-0 text-navy-900 transition-transform duration-200 ${
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
      </button>

      <div
        id={panelId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <div className='bg-mist px-6 pb-6 pt-1'>
            <p className='font-body normal-case text-sm text-steel leading-relaxed'>
              {highlight(item.answer, query)}
            </p>

            {item.table && (
              <div className='mt-4 overflow-x-auto rounded-sm border border-line bg-white'>
                <table className='w-full min-w-max text-left text-xs'>
                  <thead>
                    <tr className='border-b border-line bg-mist'>
                      {item.table.headers.map(h => (
                        <th
                          key={h}
                          className='px-4 py-2.5 font-display tracking-wide text-navy-900 whitespace-nowrap'
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.table.rows.map((row, i) => (
                      <tr key={i} className='border-b border-line last:border-0'>
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className='px-4 py-2.5 align-top text-steel'
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
