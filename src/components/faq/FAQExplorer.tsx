'use client';

import { useMemo, useState } from 'react';
import { ChevronsDownUp, ChevronsUpDown, Search, SearchX } from 'lucide-react';
import { FAQ_CATEGORIES } from '@/data/faq';
import FAQAccordionItem from './FAQAccordionItem';

export default function FAQExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const totalCount = useMemo(
    () => FAQ_CATEGORIES.reduce((n, c) => n + c.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_CATEGORIES.filter(
      cat => activeCategory === 'all' || cat.id === activeCategory
    )
      .map(cat => ({
        ...cat,
        items: cat.items.filter(
          item =>
            !q ||
            item.question.toLowerCase().includes(q) ||
            item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter(cat => cat.items.length > 0);
  }, [query, activeCategory]);

  const visibleIds = useMemo(
    () => filteredCategories.flatMap(cat => cat.items.map(i => i.id)),
    [filteredCategories]
  );

  const allOpen =
    visibleIds.length > 0 && visibleIds.every(id => openIds.has(id));

  function toggleAll() {
    setOpenIds(allOpen ? new Set() : new Set(visibleIds));
  }

  function toggleItem(id: string) {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function clearFilters() {
    setQuery('');
    setActiveCategory('all');
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
                placeholder='Search questions…'
                className='w-full rounded-sm border border-line bg-white py-2.5 pl-9 pr-3 font-body normal-case text-sm text-ink placeholder:text-steel/70 transition-colors focus:outline-none focus:border-amber-500'
              />
            </div>

            <button
              type='button'
              onClick={toggleAll}
              disabled={visibleIds.length === 0}
              className='flex items-center justify-center gap-2 font-display text-xs tracking-widest px-4 py-2.5 rounded-sm border border-line text-navy-900 hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
            >
              {allOpen ? (
                <ChevronsDownUp className='h-4 w-4' />
              ) : (
                <ChevronsUpDown className='h-4 w-4' />
              )}
              {allOpen ? 'COLLAPSE ALL' : 'EXPAND ALL'}
            </button>
          </div>

          <div className='flex flex-wrap gap-2'>
            <button
              type='button'
              onClick={() => setActiveCategory('all')}
              className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-amber-500 border-amber-500 text-navy-950'
                  : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
              }`}
            >
              ALL
              <span className='ml-2 font-mono opacity-60'>{totalCount}</span>
            </button>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type='button'
                onClick={() => setActiveCategory(cat.id)}
                className={`font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 border-amber-500 text-navy-950'
                    : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
                }`}
              >
                {cat.label.toUpperCase()}
                <span className='ml-2 font-mono opacity-60'>
                  {cat.items.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-mist'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16'>
          {filteredCategories.length > 0 ? (
            <div className='space-y-12'>
              {filteredCategories.map(cat => (
                <div key={cat.id}>
                  <span className='font-display text-xs tracking-widest text-amber-600'>
                    {cat.label.toUpperCase()}
                  </span>
                  <div className='mt-4 rounded-sm border border-line bg-white divide-y divide-line'>
                    {cat.items.map(item => (
                      <FAQAccordionItem
                        key={item.id}
                        item={item}
                        query={query}
                        isOpen={openIds.has(item.id)}
                        onToggle={() => toggleItem(item.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center gap-4 py-16 text-center'>
              <SearchX className='h-10 w-10 text-steel/50' strokeWidth={1.5} />
              <p className='font-display text-lg text-navy-900 normal-case'>
                No questions match your search
              </p>
              <button
                type='button'
                onClick={clearFilters}
                className='mt-2 font-display text-xs tracking-widest text-navy-900 border-b border-navy-900 hover:text-amber-600 hover:border-amber-600 transition-colors cursor-pointer'
              >
                CLEAR FILTERS
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
