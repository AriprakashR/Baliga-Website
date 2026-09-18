'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <span className='font-display text-xs tracking-widest text-amber-600'>
        SEND AN ENQUIRY
      </span>
      <h2 className='mt-3 text-2xl font-bold text-navy-900'>
        Request a Quote or Callback
      </h2>

      <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
        <div className='grid sm:grid-cols-2 gap-4'>
          <input
            type='text'
            name='name'
            required
            placeholder='Full name'
            className='w-full rounded-sm border border-line px-4 py-3 text-sm text-navy-900 placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-amber-500'
          />
          <input
            type='email'
            name='email'
            required
            placeholder='Email address'
            className='w-full rounded-sm border border-line px-4 py-3 text-sm text-navy-900 placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-amber-500'
          />
        </div>
        <input
          type='tel'
          name='phone'
          placeholder='Phone (optional)'
          className='w-full rounded-sm border border-line px-4 py-3 text-sm text-navy-900 placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-amber-500'
        />
        <textarea
          name='message'
          required
          rows={4}
          placeholder='Tell us what you need'
          className='w-full rounded-sm border border-line px-4 py-3 text-sm text-navy-900 placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-amber-500'
        />

        <button
          type='submit'
          disabled={status === 'submitting'}
          className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-950 px-7 py-3.5 rounded-sm transition-colors'
        >
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </button>

        {status === 'success' && (
          <p className='text-sm text-emerald-600'>
            Thanks — we&apos;ve received your enquiry and will be in touch
            shortly.
          </p>
        )}
        {status === 'error' && (
          <p className='text-sm text-red-600'>
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
