import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script
          id='tawk-to-widget'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a7eede8caba3d201f27d540/1jvvt2lqk';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
