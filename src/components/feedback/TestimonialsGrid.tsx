import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';
import StarRating from './StarRating';

export default function TestimonialsGrid() {
  return (
    <section className='bg-mist'>
      <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-20'>
        <span className='font-display text-xs tracking-widest text-amber-600'>
          WHAT CUSTOMERS SAY
        </span>
        <h2 className='mt-3 text-2xl md:text-3xl font-bold text-navy-900 max-w-xl'>
          Recent Feedback Highlights
        </h2>

        <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              style={{ animationDelay: `${index * 60}ms` }}
              className='animate-stagger-fade-in flex flex-col rounded-sm border border-line bg-white p-6'
            >
              <Quote className='h-6 w-6 text-amber-500' strokeWidth={1.5} />
              <p className='mt-4 flex-1 font-body normal-case text-sm text-ink leading-relaxed'>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className='mt-6 flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm font-medium text-navy-900'>
                    {t.name}
                  </p>
                  <p className='text-xs text-steel'>{t.role}</p>
                </div>
                <StarRating value={t.rating} readOnly size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
