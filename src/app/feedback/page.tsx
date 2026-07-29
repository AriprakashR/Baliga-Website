import type { Metadata } from 'next';
import { MessageSquareText, ShieldCheck, Users } from 'lucide-react';
import FeedbackForm from '@/components/feedback/FeedbackForm';
import TestimonialsGrid from '@/components/feedback/TestimonialsGrid';

export const metadata: Metadata = { title: 'Feedback' };

const REASONS = [
  {
    icon: MessageSquareText,
    title: 'Shapes what we build next',
    body: 'Product and service feedback goes directly to the teams responsible — from application engineering to after-sales support.',
  },
  {
    icon: ShieldCheck,
    title: 'Helps us hold the safety bar',
    body: 'If something about a delivery, certification, or installation fell short, we want to know so it doesn’t happen at the next site.',
  },
  {
    icon: Users,
    title: 'Read by the people in charge',
    body: 'Every submission is reviewed by the relevant regional or factory team — not filed away unread.',
  },
];

export default function FeedbackPage() {
  return (
    <>
      <section className='bg-navy-900 pt-30 pb-20 text-center text-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10'>
          <span className='font-display text-xs tracking-widest text-amber-500'>
            WE&apos;RE LISTENING
          </span>
          <h1 className='mt-4 text-3xl md:text-4xl font-bold'>
            Share Your Feedback
          </h1>
          <p className='mt-4 max-w-xl mx-auto font-body normal-case text-white/70'>
            Tell us about your experience with our products, service, or
            support — good or bad. It helps us do better.
          </p>
        </div>
      </section>

      <section className='bg-white'>
        <div className='max-w-(--container-page) mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-4'>
            <span className='font-display text-xs tracking-widest text-amber-600'>
              WHY IT MATTERS
            </span>
            <h2 className='mt-3 text-2xl font-bold text-navy-900'>
              Your Input, Acted On
            </h2>

            <div className='mt-8 space-y-8'>
              {REASONS.map(r => (
                <div key={r.title} className='flex gap-4'>
                  <r.icon
                    className='h-6 w-6 shrink-0 text-amber-500'
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className='font-display text-base tracking-wide text-navy-900 normal-case'>
                      {r.title}
                    </h3>
                    <p className='mt-1.5 font-body normal-case text-sm text-steel leading-relaxed'>
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='lg:col-span-8 rounded-sm border border-line bg-white p-6 md:p-8'>
            <FeedbackForm />
          </div>
        </div>
      </section>

      <TestimonialsGrid />
    </>
  );
}
