import { ExternalLink, FileDown } from 'lucide-react';
import { DOCUMENT_LIBRARY } from '@/data/technicalInfo';

export default function DocumentLibrary() {
  return (
    <div className='grid sm:grid-cols-2 gap-5'>
      {DOCUMENT_LIBRARY.map(doc => (
        <a
          key={doc.id}
          href={doc.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group flex flex-col rounded-sm border border-line bg-white p-6 transition-colors hover:border-amber-500'
        >
          <FileDown className='h-6 w-6 text-amber-500' strokeWidth={1.5} />
          <h3 className='mt-4 font-display text-base tracking-wide text-navy-900 normal-case'>
            {doc.title}
          </h3>
          <p className='mt-2 flex-1 font-body normal-case text-sm text-steel leading-relaxed'>
            {doc.description}
          </p>
          <span className='mt-4 flex items-center gap-2 font-display text-xs tracking-widest text-navy-900 group-hover:text-amber-600 transition-colors'>
            DOWNLOAD PDF
            <ExternalLink className='h-3.5 w-3.5' />
          </span>
        </a>
      ))}
    </div>
  );
}
