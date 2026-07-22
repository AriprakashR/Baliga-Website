import Link from 'next/link';

const industries = [
  { name: 'Oil & Gas', image: '/images/industries/oil-gas.jpg' },
  {
    name: 'Chemical & Petrochemical',
    image: '/images/industries/chemical.jpg',
  },
  { name: 'Pharmaceuticals', image: '/images/industries/pharma.jpg' },
  { name: 'Mining', image: '/images/industries/mining.jpg' },
];

export default function IndustriesPreview() {
  return (
    <section className='mx-auto max-w-7xl px-6 py-20'>
      <h2 className='text-3xl font-bold text-navy-900'>Industries We Serve</h2>
      <p className='mt-3 text-navy-600 max-w-2xl'>
        Decades of hands-on experience across sectors where explosion safety is
        non-negotiable.
      </p>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {industries.map(ind => (
          <Link
            key={ind.name}
            href='/industries'
            className='group relative rounded-xl overflow-hidden aspect-4/5 bg-navy-800'
          >
            <img
              src={ind.image}
              alt={ind.name}
              className='absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 transition'
            />
            <div className='absolute inset-0 bg-linear-to-t from-navy-950/90 to-transparent' />
            <span className='absolute bottom-4 left-4 text-white font-medium'>
              {ind.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
