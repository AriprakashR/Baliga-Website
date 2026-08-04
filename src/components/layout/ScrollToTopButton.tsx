'use client';

import { useEffect, useState } from 'react';

const SHOW_AFTER_PX = 480;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Scroll to top'
      className={`fixed bottom-6 right-6 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-navy-900 border border-white/15 text-white shadow-lg hover:bg-amber-500 hover:text-navy-950 hover:border-amber-500 transition-all ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <svg viewBox='0 0 24 24' fill='none' className='w-5 h-5'>
        <path
          d='M6 15l6-6 6 6'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}
