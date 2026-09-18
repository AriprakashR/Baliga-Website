'use client';

import { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  FileText,
  Loader2,
  Mail,
  UploadCloud,
  X,
} from 'lucide-react';
import { JOBS, type JobOpening } from '@/data/careers';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx'];
const MAX_FILE_BYTES = 5 * 1024 * 1024;

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'phone' | 'position' | 'resume';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,20}$/;

function validateField(
  name: FieldName,
  value: string,
  file: File | null
): string | undefined {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Please enter your name.';
      return undefined;
    case 'email':
      if (!value.trim()) return 'Please enter your email address.';
      if (!EMAIL_RE.test(value.trim())) return 'Enter a valid email address.';
      return undefined;
    case 'phone':
      if (!value.trim()) return 'Please enter your phone number.';
      if (!PHONE_RE.test(value.trim())) return 'Enter a valid phone number.';
      return undefined;
    case 'position':
      if (!value) return 'Please select the position you are applying for.';
      return undefined;
    case 'resume':
      if (!file) return 'Please attach your resume.';
      if (
        !ACCEPTED_TYPES.some(ext => file.name.toLowerCase().endsWith(ext))
      )
        return 'Resume must be a PDF or Word document.';
      if (file.size > MAX_FILE_BYTES) return 'File must be under 5 MB.';
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

export default function ApplyModal({
  job,
  onClose,
}: {
  job: JobOpening | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>(
    {}
  );
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>(
    {}
  );
  const [lastJobId, setLastJobId] = useState(job?.id);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (job && job.id !== lastJobId) {
    setLastJobId(job.id);
    setStatus('idle');
    setResumeFile(null);
    setErrors({});
    setTouched({});
  }

  useEffect(() => {
    if (!job) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  function handleBlur(name: FieldName, value: string) {
    setTouched(t => ({ ...t, [name]: true }));
    setErrors(err => ({ ...err, [name]: validateField(name, value, resumeFile) }));
  }

  function handleResumeChange(file: File | null) {
    setResumeFile(file);
    setTouched(t => ({ ...t, resume: true }));
    setErrors(err => ({ ...err, resume: validateField('resume', '', file) }));
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    if (file) handleResumeChange(file);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const values: Record<Exclude<FieldName, 'resume'>, string> = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      position: String(data.get('position') ?? ''),
    };

    const nextErrors: Partial<Record<FieldName, string>> = {};
    (Object.keys(values) as (keyof typeof values)[]).forEach(field => {
      const error = validateField(field, values[field], resumeFile);
      if (error) nextErrors[field] = error;
    });
    const resumeError = validateField('resume', '', resumeFile);
    if (resumeError) nextErrors.resume = resumeError;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        position: true,
        resume: true,
      });
      return;
    }

    setStatus('submitting');
    if (resumeFile) data.set('resume', resumeFile);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        setResumeFile(null);
        setErrors({});
        setTouched({});
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
      aria-labelledby='apply-modal-title'
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
          aria-label='Close application form'
          className='absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-900 border border-line hover:border-amber-500 hover:text-amber-600 transition-colors cursor-pointer'
        >
          <X className='h-4 w-4' />
        </button>

        {status === 'success' ? (
          <div className='flex flex-col items-center py-6 text-center'>
            <CheckCircle2
              className='h-12 w-12 text-amber-500'
              strokeWidth={1.5}
            />
            <h2 className='mt-4 font-display text-xl text-navy-900 normal-case'>
              Application received
            </h2>
            <p className='mt-2 font-body normal-case text-sm text-steel leading-relaxed'>
              Thanks for applying to {job.title}. Our HR team will review
              your resume and reach out if there&apos;s a match.
            </p>
            <button
              type='button'
              onClick={onClose}
              className='mt-6 font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 text-navy-950 px-6 py-3 rounded-sm transition-colors cursor-pointer'
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className='font-display text-xs tracking-widest text-amber-600'>
              APPLY NOW
            </span>
            <h2
              id='apply-modal-title'
              className='mt-3 text-2xl font-bold text-navy-900'
            >
              Submit Your Application
            </h2>
            <p className='mt-2 nameplate text-navy-900 text-xs'>
              {job.title}
            </p>

            <form onSubmit={handleSubmit} noValidate className='mt-6 space-y-4'>
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

              <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email address'
                    aria-invalid={Boolean(touched.email && errors.email)}
                    onBlur={e => handleBlur('email', e.target.value)}
                    className={inputClass(
                      Boolean(touched.email && errors.email)
                    )}
                  />
                  {touched.email && errors.email && (
                    <p className='mt-1.5 text-xs text-red-600'>
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone number'
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    onBlur={e => handleBlur('phone', e.target.value)}
                    className={inputClass(
                      Boolean(touched.phone && errors.phone)
                    )}
                  />
                  {touched.phone && errors.phone && (
                    <p className='mt-1.5 text-xs text-red-600'>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <select
                  name='position'
                  defaultValue={job.title}
                  aria-invalid={Boolean(touched.position && errors.position)}
                  onBlur={e => handleBlur('position', e.target.value)}
                  className={`${inputClass(
                    Boolean(touched.position && errors.position)
                  )} cursor-pointer`}
                >
                  <option value='' disabled>
                    Select a position
                  </option>
                  {JOBS.map(j => (
                    <option key={j.id} value={j.title}>
                      {j.title} — {j.department}
                    </option>
                  ))}
                </select>
                {touched.position && errors.position && (
                  <p className='mt-1.5 text-xs text-red-600'>
                    {errors.position}
                  </p>
                )}
              </div>

              <div>
                <div
                  onDragOver={e => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  role='button'
                  tabIndex={0}
                  className={`flex flex-col items-center justify-center gap-2 rounded-sm border-2 border-dashed px-4 py-8 text-center cursor-pointer transition-colors ${
                    dragActive
                      ? 'border-amber-500 bg-amber-100/40'
                      : errors.resume && touched.resume
                        ? 'border-red-400'
                        : 'border-line hover:border-amber-500/60'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type='file'
                    name='resume'
                    accept={ACCEPTED_TYPES.join(',')}
                    className='hidden'
                    onChange={e =>
                      handleResumeChange(e.target.files?.[0] ?? null)
                    }
                  />
                  {resumeFile ? (
                    <>
                      <FileText className='h-6 w-6 text-amber-600' />
                      <p className='font-body normal-case text-sm text-navy-900'>
                        {resumeFile.name}
                      </p>
                      <p className='font-display text-xs tracking-widest text-navy-900 hover:text-amber-600 transition-colors'>
                        REPLACE FILE
                      </p>
                    </>
                  ) : (
                    <>
                      <UploadCloud className='h-6 w-6 text-steel' />
                      <p className='font-body normal-case text-sm text-navy-900'>
                        Drop your resume here, or click to browse
                      </p>
                      <p className='font-body normal-case text-xs text-steel'>
                        PDF or Word, up to 5 MB
                      </p>
                    </>
                  )}
                </div>
                {touched.resume && errors.resume && (
                  <p className='mt-1.5 text-xs text-red-600'>
                    {errors.resume}
                  </p>
                )}
              </div>

              <button
                type='submit'
                disabled={status === 'submitting'}
                className='flex items-center justify-center gap-2 font-display text-sm tracking-wide bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-navy-950 px-7 py-3.5 rounded-sm transition-colors cursor-pointer disabled:cursor-not-allowed'
              >
                {status === 'submitting' && (
                  <Loader2 className='h-4 w-4 animate-spin' />
                )}
                {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
              </button>

              {status === 'error' && (
                <p className='text-sm text-red-600'>
                  Something went wrong. Please try again or email your resume
                  directly.
                </p>
              )}

              <p className='flex items-center gap-2 border-t border-line pt-4 font-body normal-case text-xs text-steel'>
                <Mail className='h-3.5 w-3.5 shrink-0' />
                Trouble applying? Email your resume to{' '}
                <a
                  href='mailto:hr@baliga.com'
                  className='text-navy-900 hover:text-amber-600 transition-colors'
                >
                  hr@baliga.com
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
