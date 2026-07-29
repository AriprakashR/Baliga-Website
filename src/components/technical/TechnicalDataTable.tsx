import type { DataTable } from '@/data/technicalTables';

export default function TechnicalDataTable({
  table,
  caption,
}: {
  table: DataTable;
  caption?: string;
}) {
  return (
    <div className='themed-scrollbar max-w-full overflow-x-auto rounded-sm border border-line'>
      <table className='w-full min-w-max text-left text-sm'>
        {caption && <caption className='sr-only'>{caption}</caption>}
        <thead>
          <tr className='bg-navy-900'>
            {table.headers.map(h => (
              <th
                key={h}
                className='px-4 py-3 font-display text-xs tracking-widest text-white whitespace-nowrap'
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr
              key={i}
              className={`${i % 2 === 0 ? 'bg-white' : 'bg-mist'} transition-colors hover:bg-amber-100/60`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className='px-4 py-3 align-top text-steel border-t border-line'
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
