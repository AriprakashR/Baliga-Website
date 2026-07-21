import Link from 'next/link';
import { CertBadge } from '@/components/ui/CertBadge';
import { HeroIllustration } from '@/components/home/HeroIllustration';
import { CATEGORIES } from '@/data/categories';
import { INDUSTRIES } from '@/data/industries';
import { EVENTS } from '@/data/events';

export default function HomePage() {
  return (
    <>
      <section className='relative overflow-hidden bg-navy'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28'>
          <div>
            <p className='font-mono text-xs uppercase tracking-widest text-hazard-yellow'>
              Since 1960 · Chennai, India
            </p>
            <h1 className='mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl'>
              Explosion-Proof Equipment,{' '}
              <span className='text-hazard-yellow'>
                Engineered for Certainty
              </span>
            </h1>
            <p className='mt-5 max-w-md text-steel-200'>
              ATEX, IECEx, and ISO 9001:2015 certified manufacturer of
              explosion-proof and waterproof electrical equipment for
              hazardous-area industries.
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Link
                href='/products'
                className='rounded-sm bg-hazard-orange px-6 py-3 font-semibold text-white hover:bg-hazard-orange/90'
              >
                Explore Products
              </Link>
              <Link
                href='/contact?intent=quote'
                className='rounded-sm border border-steel-200 px-6 py-3 font-semibold text-white hover:border-hazard-yellow hover:text-hazard-yellow'
              >
                Request a Quote
              </Link>
            </div>
            <div className='mt-8 flex flex-wrap gap-2'>
              <CertBadge code='ISO 9001:2015' />
              <CertBadge code='ATEX' />
              <CertBadge code='IECEx' />
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className='border-b border-steel-200 bg-white'>
        <div className='mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4'>
          <Stat value='60+' label='Years in operation' />
          <Stat value='3' label='Global certifications' />
          <Stat value='8+' label='Product categories' />
          <Stat value='6' label='Industries served' />
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16'>
        <div className='flex items-end justify-between'>
          <h2 className='font-display text-2xl font-bold text-navy'>
            Product Categories
          </h2>
          <Link
            href='/products'
            className='text-sm font-medium text-hazard-orange hover:underline'
          >
            View all →
          </Link>
        </div>
        <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4'>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className='group rounded-sm border border-steel-200 bg-white p-5 transition-colors hover:border-hazard-orange'
            >
              <cat.icon
                className='text-navy transition-colors group-hover:text-hazard-orange'
                size={28}
              />
              <p className='mt-3 font-body text-sm font-semibold text-ink'>
                {cat.label}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className='bg-steel-50 py-16'>
        <div className='mx-auto max-w-7xl px-6'>
          <h2 className='font-display text-2xl font-bold text-navy'>
            Industries We Serve
          </h2>
          <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6'>
            {INDUSTRIES.map(ind => (
              <Link
                key={ind.slug}
                href='/industries'
                className='rounded-sm border border-steel-200 bg-white px-3 py-4 text-center text-sm font-medium text-ink hover:border-navy'
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-16'>
        <div className='flex items-end justify-between'>
          <h2 className='font-display text-2xl font-bold text-navy'>
            Latest News & Events
          </h2>
          <Link
            href='/events'
            className='text-sm font-medium text-hazard-orange hover:underline'
          >
            View all →
          </Link>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {EVENTS.slice(0, 3).map(event => (
            <div
              key={event.id}
              className='rounded-sm border border-steel-200 bg-white p-5'
            >
              <p className='font-mono text-xs text-hazard-orange'>
                {event.date}
              </p>
              <p className='mt-2 font-body text-sm font-semibold text-ink'>
                {event.title}
              </p>
              <p className='mt-1 text-sm text-steel-500'>{event.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className='font-display text-3xl font-bold text-navy'>{value}</p>
      <p className='mt-1 text-xs uppercase tracking-wide text-steel-500'>
        {label}
      </p>
    </div>
  );
}
