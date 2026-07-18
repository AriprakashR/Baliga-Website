import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  title: {
    default:
      'Baliga Lighting Equipments | Explosion-Proof & Industrial Electrical Equipment',
    template: '%s | Baliga Lighting Equipments',
  },
  description:
    'ATEX, IECEx and ISO 9001 certified manufacturer of explosion-proof and waterproof electrical equipment, based in Chennai, India since 1960.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className='flex min-h-screen flex-col bg-steel-50 font-body text-ink antialiased'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
