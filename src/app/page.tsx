import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import CertificationsBar from '@/components/home/CertificationsBar';
import ProductCarousel from '@/components/home/ProductCarousel';
import AboutLegacy from '@/components/home/AboutLegacy';
import IndustriesServed from '@/components/home/IndustriesServed';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CTABanner';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CertificationsBar />
        <ProductCarousel />
        <AboutLegacy />
        <IndustriesServed />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
