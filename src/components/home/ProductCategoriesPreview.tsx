import Link from 'next/link';

const categories = [
  { name: 'Lighting', href: '/products/lighting' },
  { name: 'Communication Systems', href: '/products/communication' },
  { name: 'Panels', href: '/products/panels' },
  { name: 'Flow Measuring Equipment', href: '/products/flow-measuring' },
];

export default function ProductCategoriesPreview() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-20'>
      <div className='flex items-end justify-between'>
        <h2 className='text-3xl font-bold text-navy-900'>Our Product Range</h2>
        <Link
          href='/products'
          className='text-navy-700 font-medium hover:underline'
        >
          View all →
        </Link>
      </div>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {categories.map(c => (
          <Link
            key={c.name}
            href={c.href}
            className='rounded-xl border border-navy-100 p-6 hover:border-navy-400 hover:shadow-md transition'
          >
            <h3 className='font-semibold text-navy-900'>{c.name}</h3>
            <span className='mt-4 inline-block text-sm text-navy-600'>
              Explore range →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
