'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function StarRating({
  value,
  onChange,
  size = 28,
  readOnly = false,
}: {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
  readOnly?: boolean;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  if (readOnly) {
    return (
      <div className='flex items-center gap-0.5' aria-label={`Rated ${value} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map(n => (
          <Star
            key={n}
            size={size}
            className={n <= value ? 'fill-amber-500 text-amber-500' : 'text-line'}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      role='radiogroup'
      aria-label='Overall rating'
      className='flex items-center gap-1'
      onMouseLeave={() => setHovered(0)}
    >
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type='button'
          role='radio'
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          onMouseEnter={() => setHovered(n)}
          onFocus={() => setHovered(n)}
          onBlur={() => setHovered(0)}
          onClick={() => onChange?.(n)}
          className='cursor-pointer rounded-sm p-0.5 transition-transform duration-150 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500'
        >
          <Star
            size={size}
            className={`transition-colors duration-150 ${
              n <= active ? 'fill-amber-500 text-amber-500' : 'text-line'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
