'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import { CATEGORIES } from '@/data/categories';
import type { CatalogProduct } from '@/types/product';

export default function ProductDetailView({
  product,
  onBack,
  onRequestQuote,
}: {
  product: CatalogProduct;
  onBack: () => void;
  onRequestQuote: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const category = CATEGORIES.find(c => c.slug === product.category);
  const gallery = product.images;
  const mainImage = gallery[activeImage] ?? gallery[0];
  const specEntries = Object.entries(product.detailedSpecs);

  return (
    <div className='animate-view-fade-in'>
      <button
        type='button'
        onClick={onBack}
        className='flex items-center gap-1.5 font-display text-xs tracking-widest text-navy-900 hover:text-amber-600 transition-colors cursor-pointer'
      >
        <ChevronLeft size={14} />
        BACK TO CATALOG
      </button>

      <nav aria-label='Breadcrumb' className='mt-4'>
        <ol className='flex flex-wrap items-center gap-1.5 font-body normal-case text-xs text-steel'>
          <li>Products</li>
          {category && (
            <>
              <ChevronRight size={12} className='shrink-0' />
              <li>{category.label}</li>
            </>
          )}
          <ChevronRight size={12} className='shrink-0' />
          <li className='text-navy-900'>{product.name}</li>
        </ol>
      </nav>

      <div className='mt-8 grid lg:grid-cols-2 gap-10'>
        <div>
          <div className='relative aspect-4/3 rounded-sm overflow-hidden border border-line bg-mist'>
            <Image
              src={withBasePath(mainImage)}
              alt={product.name}
              fill
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
              preload
            />
          </div>
          {gallery.length > 1 && (
            <div className='mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6'>
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type='button'
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show photo ${index + 1} of ${gallery.length}`}
                  aria-current={index === activeImage}
                  className={`relative aspect-square overflow-hidden rounded-sm border-2 transition-colors cursor-pointer ${
                    index === activeImage
                      ? 'border-amber-500'
                      : 'border-line hover:border-amber-500/50'
                  }`}
                >
                  <Image
                    src={withBasePath(src)}
                    alt=''
                    fill
                    sizes='80px'
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {category && (
            <span className='font-display text-xs tracking-widest text-amber-600'>
              {category.label.toUpperCase()}
            </span>
          )}
          <h1 className='mt-2 text-2xl md:text-3xl font-bold text-navy-900'>
            {product.name}
          </h1>
          <p className='mt-4 font-body normal-case text-base text-steel leading-relaxed'>
            {product.description}
          </p>

          <div className='mt-5 flex flex-wrap gap-2'>
            {product.exZone.map(zone => (
              <span key={zone} className='nameplate text-navy-900 text-xs'>
                {zone}
              </span>
            ))}
            <span className='nameplate text-navy-900 text-xs'>{product.ipRating}</span>
            {product.certifications.map(cert => (
              <span key={cert} className='nameplate text-navy-900 text-xs'>
                {cert}
              </span>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <button
              type='button'
              onClick={onRequestQuote}
              className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-7 py-3.5 rounded-sm transition-colors cursor-pointer'
            >
              Request a Quote / Enquiry
            </button>
            {product.datasheetUrl && (
              <a
                href={withBasePath(product.datasheetUrl)}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 rounded-sm border border-line px-7 py-3.5 font-display text-sm tracking-wide text-navy-900 hover:border-amber-500 hover:text-amber-600 transition-colors'
              >
                <FileText className='h-4 w-4' />
                Download Datasheet (PDF)
              </a>
            )}
          </div>
        </div>
      </div>

      {specEntries.length > 0 && (
        <div className='mt-12'>
          <h2 className='font-display text-lg text-navy-900 normal-case'>
            Technical Specifications
          </h2>
          <div className='themed-scrollbar mt-4 max-w-full overflow-x-auto rounded-sm border border-line'>
            <table className='w-full min-w-max text-left text-sm'>
              <tbody>
                {specEntries.map(([key, value], i) => (
                  <tr
                    key={key}
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-mist'} transition-colors hover:bg-amber-100/60`}
                  >
                    <th
                      scope='row'
                      className='px-4 py-3 align-top font-display text-xs tracking-widest text-navy-900 whitespace-nowrap border-t border-line'
                    >
                      {key.toUpperCase()}
                    </th>
                    <td className='px-4 py-3 align-top text-steel border-t border-line'>
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
