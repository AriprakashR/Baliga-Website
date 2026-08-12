import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/layout/ScrollToTopButton';
import './globals.css';

export const metadata: Metadata = {
  title: 'Baliga Lighting | Explosion-Proof & Flameproof Electrical Equipment',
  description:
    'Baliga Lighting has engineered explosion-proof and flameproof electrical equipment for hazardous industrial environments since 1960. ATEX & IECEx certified.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
