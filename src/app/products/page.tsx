import type { Metadata } from 'next';
import { Suspense } from 'react';
import ProductCatalogView from '@/components/product/ProductCatalogView';

export const metadata: Metadata = { title: 'Products' };

export default function ProductsPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20  text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            WHAT WE MAKE
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>Products</h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Four core product lines covering explosion-proof lighting,
            communication, panels, and flow measurement.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <ProductCatalogView />
      </Suspense>
    </>
  );
}
