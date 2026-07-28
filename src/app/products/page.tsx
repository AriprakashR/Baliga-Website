import type { Metadata } from 'next';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';
import { PRODUCT_LINES } from '@/data/productLines';
import { CATEGORIES } from '@/data/categories';

export const metadata: Metadata = { title: 'Products' };

const LINE_CATEGORIES: Record<string, string[]> = {
  'Explosion-Proof Lighting': [
    'luminaires',
    'control-gear',
    'switches',
    'cable-glands',
    'junction-boxes',
  ],
  'Panels & Enclosures': ['control-stations', 'accessories'],
  'Flow Measuring Equipment': ['flow-measurement'],
  'Communication Systems': [],
};

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

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 space-y-16'>
          {PRODUCT_LINES.map(line => {
            const lineCategories = LINE_CATEGORIES[line.name] ?? [];
            return (
              <div
                key={line.name}
                className='grid md:grid-cols-2 gap-10 items-center'
              >
                <div className='relative aspect-video rounded-sm overflow-hidden border border-line'>
                  <Image
                    src={withBasePath(line.image)}
                    alt={line.name}
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover'
                  />
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-navy-900'>
                    {line.name}
                  </h2>
                  <p className='mt-2 font-display text-sm tracking-wide text-amber-600 normal-case'>
                    {line.tagline}
                  </p>
                  <p className='mt-4 font-body normal-case text-steel text-base leading-relaxed'>
                    {line.description}
                  </p>
                  {lineCategories.length > 0 && (
                    <div className='mt-6 flex flex-wrap gap-2'>
                      {lineCategories.map(slug => {
                        const cat = CATEGORIES.find(c => c.slug === slug);
                        if (!cat) return null;
                        const Icon = cat.icon;
                        return (
                          <span
                            key={slug}
                            className='nameplate text-navy-900 text-xs'
                          >
                            <Icon size={14} />
                            {cat.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
