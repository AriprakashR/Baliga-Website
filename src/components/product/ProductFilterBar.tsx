'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Search, X } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';

function FilterDropdown({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className='relative'>
      <button
        type='button'
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup='true'
        className={`flex items-center gap-1.5 font-display text-xs tracking-widest px-3.5 py-2 rounded-sm border transition-colors cursor-pointer ${
          active
            ? 'bg-amber-500 border-amber-500 text-navy-950'
            : 'border-line text-steel hover:border-amber-500 hover:text-navy-900'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className='themed-scrollbar absolute left-0 z-40 mt-2 max-h-72 min-w-52 overflow-y-auto rounded-sm border border-line bg-white p-2 shadow-lg'>
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-2 rounded-sm px-2.5 py-2 text-left font-body normal-case text-sm transition-colors cursor-pointer ${
        selected
          ? 'bg-mist text-navy-900'
          : 'text-steel hover:bg-mist hover:text-navy-900'
      }`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border ${
          selected
            ? 'border-amber-500 bg-amber-500 text-navy-950'
            : 'border-line'
        }`}
      >
        {selected && <Check size={11} strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

export default function ProductFilterBar({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categoryOptions,
  exZoneOptions,
  activeExZones,
  onToggleExZone,
  ipRatingOptions,
  activeIpRatings,
  onToggleIpRating,
  certOptions,
  activeCerts,
  onToggleCert,
  hasActiveFilters,
  onClearAll,
  resultCount,
  totalCount,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: string | null;
  onCategoryChange: (value: string | null) => void;
  categoryOptions: string[];
  exZoneOptions: string[];
  activeExZones: Set<string>;
  onToggleExZone: (value: string) => void;
  ipRatingOptions: string[];
  activeIpRatings: Set<string>;
  onToggleIpRating: (value: string) => void;
  certOptions: string[];
  activeCerts: Set<string>;
  onToggleCert: (value: string) => void;
  hasActiveFilters: boolean;
  onClearAll: () => void;
  resultCount: number;
  totalCount: number;
}) {
  const categories = CATEGORIES.filter(c => categoryOptions.includes(c.slug));
  const activeCategoryLabel = categories.find(
    c => c.slug === activeCategory,
  )?.label;

  return (
    <div className='border-b border-line bg-white sticky top-20 z-30'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-5 flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
          <div className='relative w-full md:max-w-xs'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-steel' />
            <input
              type='text'
              value={search}
              onChange={e => onSearchChange(e.target.value)}
              placeholder='Search products…'
              className='w-full rounded-sm border border-line bg-white py-2.5 pl-9 pr-3 font-body normal-case text-sm text-ink placeholder:text-steel/70 focus:outline-none focus:border-amber-500'
            />
          </div>

          <div className='flex flex-wrap gap-2'>
            <FilterDropdown
              label={`CATEGORY${activeCategoryLabel ? `: ${activeCategoryLabel.toUpperCase()}` : ''}`}
              active={activeCategory !== null}
            >
              <DropdownOption
                label='All Categories'
                selected={activeCategory === null}
                onClick={() => onCategoryChange(null)}
              />
              {categories.map(cat => (
                <DropdownOption
                  key={cat.slug}
                  label={cat.label}
                  selected={activeCategory === cat.slug}
                  onClick={() => onCategoryChange(cat.slug)}
                />
              ))}
            </FilterDropdown>

            {exZoneOptions.length > 0 && (
              <FilterDropdown
                label={`EX ZONE${activeExZones.size > 0 ? ` (${activeExZones.size})` : ''}`}
                active={activeExZones.size > 0}
              >
                {exZoneOptions.map(option => (
                  <DropdownOption
                    key={option}
                    label={option}
                    selected={activeExZones.has(option)}
                    onClick={() => onToggleExZone(option)}
                  />
                ))}
              </FilterDropdown>
            )}

            {ipRatingOptions.length > 0 && (
              <FilterDropdown
                label={`IP RATING${activeIpRatings.size > 0 ? ` (${activeIpRatings.size})` : ''}`}
                active={activeIpRatings.size > 0}
              >
                {ipRatingOptions.map(option => (
                  <DropdownOption
                    key={option}
                    label={option}
                    selected={activeIpRatings.has(option)}
                    onClick={() => onToggleIpRating(option)}
                  />
                ))}
              </FilterDropdown>
            )}

            {certOptions.length > 0 && (
              <FilterDropdown
                label={`CERTIFICATION${activeCerts.size > 0 ? ` (${activeCerts.size})` : ''}`}
                active={activeCerts.size > 0}
              >
                {certOptions.map(option => (
                  <DropdownOption
                    key={option}
                    label={option}
                    selected={activeCerts.has(option)}
                    onClick={() => onToggleCert(option)}
                  />
                ))}
              </FilterDropdown>
            )}
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between gap-3 pt-1'>
          <p className='font-body normal-case text-sm text-steel'>
            Showing{' '}
            <span className='text-navy-900 font-medium'>{resultCount}</span> of{' '}
            {totalCount} products
          </p>
          {hasActiveFilters && (
            <button
              type='button'
              onClick={onClearAll}
              className='flex items-center gap-1.5 font-display text-xs tracking-widest text-navy-900 hover:text-amber-600 transition-colors cursor-pointer'
            >
              <X size={14} />
              CLEAR ALL FILTERS
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
