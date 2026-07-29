'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, X } from 'lucide-react';
import StarRating from './StarRating';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const CATEGORIES = [
  'Product Quality',
  'Customer Service',
  'Delivery & Logistics',
  'Technical Support',
  'Website / Digital Experience',
  'General Feedback',
  'Suggestion',
  'Complaint',
];

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 800;

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldName =
  | 'name'
  | 'email'
  | 'phone'
  | 'category'
  | 'message'
  | 'rating';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;

function validateField(name: FieldName, value: string): string | undefined {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Please enter your name.';
      if (value.trim().length > 80) return 'Name is too long.';
      return undefined;
    case 'email':
      if (!value.trim()) return 'Please enter your email address.';
      if (!EMAIL_RE.test(value.trim())) return 'Enter a valid email address.';
      return undefined;
    case 'phone':
      if (value.trim() && !PHONE_RE.test(value.trim()))
        return 'Enter a valid phone number.';
      return undefined;
    case 'category':
      if (!value) return 'Please select a feedback category.';
      return undefined;
    case 'message':
      if (!value.trim()) return 'Please share your feedback.';
      if (value.trim().length < MESSAGE_MIN)
        return `Please write at least ${MESSAGE_MIN} characters.`;
      if (value.length > MESSAGE_MAX) return `Keep it under ${MESSAGE_MAX} characters.`;
      return undefined;
    case 'rating':
      if (!value || Number(value) < 1) return 'Please choose a star rating.';
      return undefined;
    default:
      return undefined;
  }
}

const FIELD_INPUT_CLASS =
  'w-full rounded-sm border px-4 py-3 text-sm text-navy-900 placeholder:text-steel transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500';

function inputClass(hasError: boolean) {
  return `${FIELD_INPUT_CLASS} ${hasError ? 'border-red-400' : 'border-line'}`;
}

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [rating, setRating] = useState(0);
  const [messageLength, setMessageLength] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  function handleBlur(name: FieldName, value: string) {
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(err => ({ ...err, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const values: Record<FieldName, string> = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      category: String(data.get('category') ?? ''),
      message: String(data.get('message') ?? ''),
      rating: String(rating || ''),
    };

    const nextErrors: Partial<Record<FieldName, string>> = {};
    (Object.keys(values) as FieldName[]).forEach(field => {
      const error = validateField(field, values[field]);
      if (error) nextErrors[field] = error;
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        category: true,
        message: true,
        rating: true,
      });
      return;
    }

    setStatus('submitting');
    data.set('rating', String(rating));

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setRating(0);
        setMessageLength(0);
        setErrors({});
        setTouched({});
        setShowSuccess(true);
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
        SHARE YOUR FEEDBACK
      </span>
      <h2 className='mt-3 text-2xl font-bold text-navy-900'>
        Tell Us About Your Experience
      </h2>

      <form onSubmit={handleSubmit} noValidate className='mt-6 space-y-5'>
        <div>
          <span className='block text-sm font-medium text-navy-900 mb-2'>
            Overall rating
          </span>
          <StarRating
            value={rating}
            onChange={n => {
              setRating(n);
              setTouched(t => ({ ...t, rating: true }));
              setErrors(err => ({ ...err, rating: undefined }));
            }}
          />
          {touched.rating && errors.rating && (
            <p className='mt-1.5 text-xs text-red-600'>{errors.rating}</p>
          )}
        </div>

        <div className='grid sm:grid-cols-2 gap-4'>
          <div>
            <input
              type='text'
              name='name'
              placeholder='Full name'
              aria-invalid={Boolean(touched.name && errors.name)}
              onBlur={e => handleBlur('name', e.target.value)}
              className={inputClass(Boolean(touched.name && errors.name))}
            />
            {touched.name && errors.name && (
              <p className='mt-1.5 text-xs text-red-600'>{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type='text'
              name='company'
              placeholder='Company / Organization (optional)'
              className={inputClass(false)}
            />
          </div>
        </div>

        <div className='grid sm:grid-cols-2 gap-4'>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email address'
              aria-invalid={Boolean(touched.email && errors.email)}
              onBlur={e => handleBlur('email', e.target.value)}
              className={inputClass(Boolean(touched.email && errors.email))}
            />
            {touched.email && errors.email && (
              <p className='mt-1.5 text-xs text-red-600'>{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type='tel'
              name='phone'
              placeholder='Phone / Contact number (optional)'
              aria-invalid={Boolean(touched.phone && errors.phone)}
              onBlur={e => handleBlur('phone', e.target.value)}
              className={inputClass(Boolean(touched.phone && errors.phone))}
            />
            {touched.phone && errors.phone && (
              <p className='mt-1.5 text-xs text-red-600'>{errors.phone}</p>
            )}
          </div>
        </div>

        <div className='grid sm:grid-cols-2 gap-4'>
          <input
            type='text'
            name='location'
            placeholder='City / Country (optional)'
            className={inputClass(false)}
          />
          <div>
            <select
              name='category'
              defaultValue=''
              aria-invalid={Boolean(touched.category && errors.category)}
              onBlur={e => handleBlur('category', e.target.value)}
              className={`${inputClass(Boolean(touched.category && errors.category))} cursor-pointer`}
            >
              <option value='' disabled>
                Subject / Feedback category
              </option>
              {CATEGORIES.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {touched.category && errors.category && (
              <p className='mt-1.5 text-xs text-red-600'>{errors.category}</p>
            )}
          </div>
        </div>

        <div>
          <textarea
            name='message'
            rows={5}
            maxLength={MESSAGE_MAX}
            placeholder='Detailed message / comments'
            aria-invalid={Boolean(touched.message && errors.message)}
            onChange={e => setMessageLength(e.target.value.length)}
            onBlur={e => handleBlur('message', e.target.value)}
            className={inputClass(Boolean(touched.message && errors.message))}
          />
          <div className='mt-1.5 flex items-center justify-between'>
            {touched.message && errors.message ? (
              <p className='text-xs text-red-600'>{errors.message}</p>
            ) : (
              <span />
            )}
            <span className='text-xs text-steel'>
              {messageLength}/{MESSAGE_MAX}
            </span>
          </div>
        </div>

        <button
          type='submit'
          disabled={status === 'submitting'}
          className='flex items-center justify-center gap-2 font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-950 px-7 py-3.5 rounded-sm transition-colors cursor-pointer disabled:cursor-not-allowed'
        >
          {status === 'submitting' && (
            <Loader2 className='h-4 w-4 animate-spin' />
          )}
          {status === 'submitting' ? 'Submitting…' : 'Submit Feedback'}
        </button>

        {status === 'error' && (
          <p className='text-sm text-red-600'>
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>

      {showSuccess && (
        <SuccessModal onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='feedback-success-title'
      className='fixed inset-0 z-100 flex items-center justify-center p-4'
    >
      <div
        onClick={onClose}
        className='animate-overlay-fade-in absolute inset-0 bg-navy-950/70 backdrop-blur-sm'
      />

      <div className='animate-modal-pop-in relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-sm border border-line bg-white p-8 text-center shadow-xl'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-steel hover:text-amber-600 transition-colors cursor-pointer'
        >
          <X className='h-4 w-4' />
        </button>

        <CheckCircle2 className='h-12 w-12 text-amber-500' strokeWidth={1.5} />

        <h2
          id='feedback-success-title'
          className='mt-4 font-display text-xl text-navy-900 normal-case'
        >
          Thank you for your feedback
        </h2>
        <p className='mt-2 font-body normal-case text-sm text-steel leading-relaxed'>
          We&apos;ve received your message and appreciate you taking the time
          to share it with us.
        </p>

        <button
          type='button'
          onClick={onClose}
          className='mt-6 font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-6 py-3 rounded-sm transition-colors cursor-pointer'
        >
          Close
        </button>
      </div>
    </div>
  );
}
