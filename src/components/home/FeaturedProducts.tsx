import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types/product';

interface FeaturedProductsProps {
  products: Product[];
  limit?: number;
}

export default function FeaturedProducts({
  products,
  limit = 6,
}: FeaturedProductsProps) {
  const featured = products.filter(p => p.featured).slice(0, limit);

  if (featured.length === 0) return null;

  return (
    <section className='mx-auto max-w-6xl px-6 py-14'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-xl font-medium text-navy-950'>
          Explore our products
        </h2>
        <Link
          href='/products'
          className='text-sm font-medium text-navy-700 hover:text-navy-900'
        >
          View all products &rarr;
        </Link>
      </div>

      <div className='flex gap-4 overflow-x-auto pb-2'>
        {featured.map(product => (
          <Link
            key={product.id}
            href={`/products/${product.category}/${product.slug}`}
            className='min-w-40 shrink-0 rounded-xl border border-navy-100 p-3 transition hover:border-navy-300'
          >
            <div className='relative h-24 w-full overflow-hidden rounded-lg bg-navy-50'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover'
                sizes='160px'
              />
            </div>
            <p className='mt-3 text-sm font-medium text-navy-950'>
              {product.name}
            </p>
            {product.shortDescription && (
              <p className='mt-1 line-clamp-1 text-xs text-navy-500'>
                {product.shortDescription}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
