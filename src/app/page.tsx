import type { Metadata } from 'next';
import { PagePlaceholder } from '@/components/ui/PagePlaceholder';

export const metadata: Metadata = { title: 'Home' };

export default function HomePage() {
  return (
    <PagePlaceholder
      title='Home'
      description='Hero section, product category highlights, certification strip (ATEX/ISO/IECEx), latest news preview — coming in Phase 2.'
    />
  );
}
