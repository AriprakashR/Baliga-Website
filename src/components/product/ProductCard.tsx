'use client';

import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import type { CatalogProduct } from '@/types/product';

export default function ProductCard({
  product,
  index,
  onSelect,
}: {
  product: CatalogProduct;
  index: number;
  onSelect: (id: string) => void;
}) {
  const badges = [...product.exZone.slice(0, 1), ...product.certifications.slice(0, 1)];

  return (
    <button
      type='button'
      onClick={() => onSelect(product.id)}
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
      className='animate-stagger-fade-in group flex flex-col text-left border border-line rounded-sm bg-white overflow-hidden hover:border-amber-500/60 hover:shadow-lg transition-[border-color,box-shadow] cursor-pointer'
    >
      <div className='relative aspect-4/3 bg-mist border-b border-line overflow-hidden'>
        <Image
          src={withBasePath(product.images[0])}
          alt={product.name}
          fill
          sizes='(min-width: 1280px) 320px, (min-width: 1024px) 300px, (min-width: 768px) 45vw, 90vw'
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      <div className='flex flex-1 flex-col p-5'>
        {badges.length > 0 && (
          <div className='flex flex-wrap gap-1.5 mb-3'>
            {badges.map(badge => (
              <span
                key={badge}
                className='nameplate text-navy-900 text-[11px] px-2.5 py-1 whitespace-nowrap'
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <h3 className='font-display text-base text-navy-900 normal-case leading-snug'>
          {product.name}
        </h3>
        <ul className='mt-3 space-y-1'>
          {product.shortSpecs.map(spec => (
            <li
              key={spec}
              className='font-body normal-case text-xs text-steel flex items-center gap-2'
            >
              <span className='h-1 w-1 rounded-full bg-amber-500 shrink-0' />
              {spec}
            </li>
          ))}
        </ul>
        <span className='mt-4 inline-flex items-center font-display text-xs tracking-widest text-navy-900 group-hover:text-amber-600 transition-colors'>
          VIEW DETAILS →
        </span>
      </div>
    </button>
  );
}
