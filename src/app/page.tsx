import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import productsData from '@/data/products.json';
import type { Product } from '@/types/product';

export default function Home() {
  const products = productsData as Product[];

  return (
    <main>
      <Hero />
      <FeaturedProducts products={products} limit={6} />

      {/* Trust strip — swap for real client logos / certification marks */}
      <section className='border-t border-navy-100 bg-navy-50 py-8'>
        <div className='mx-auto flex max-w-6xl flex-wrap justify-around gap-4 px-6 text-xs font-medium text-navy-400'>
          <span>ISO 9001</span>
          <span>CE certified</span>
          <span>25+ years</span>
          <span>500+ clients</span>
        </div>
      </section>
    </main>
  );
}
