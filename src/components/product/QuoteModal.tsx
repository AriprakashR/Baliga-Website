'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { CatalogProduct } from '@/types/product';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteModal({
  product,
  onClose,
}: {
  product: CatalogProduct | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [lastProductId, setLastProductId] = useState(product?.id);

  if (product && product.id !== lastProductId) {
    setLastProductId(product.id);
    setStatus('idle');
  }

  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

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
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='quote-modal-title'
      className='fixed inset-0 z-100 flex items-center justify-center p-4'
    >
      <div
        onClick={onClose}
        className='animate-overlay-fade-in absolute inset-0 bg-navy-950/70 backdrop-blur-sm'
      />

      <div className='animate-modal-pop-in themed-scrollbar relative w-full max-w-lg max-h-[90vh] overflow-y-auto overscroll-contain rounded-sm border border-line bg-white p-6 shadow-xl md:p-8'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close enquiry form'
          className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 border border-line hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer'
        >
          <X className='h-4 w-4' />
        </button>

        <span className='font-display text-xs tracking-widest text-amber-600'>
          SEND AN ENQUIRY
        </span>
        <h2
          id='quote-modal-title'
          className='mt-3 text-2xl font-bold text-navy-900'
        >
          Request a Quote
        </h2>
        <p className='mt-2 nameplate text-navy-900 text-xs'>{product.name}</p>

        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          <input type='hidden' name='product' value={product.name} />
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
            defaultValue={`I'd like a quote for: ${product.name}\n\n`}
            className='w-full rounded-sm border border-line px-4 py-3 text-sm text-navy-900 placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-amber-500'
          />

          <button
            type='submit'
            disabled={status === 'submitting'}
            className='font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-950 px-7 py-3.5 rounded-sm transition-colors cursor-pointer'
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
    </div>
  );
}
