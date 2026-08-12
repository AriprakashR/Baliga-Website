import Hero from '@/components/home/Hero';
import CertificationsBar from '@/components/home/CertificationsBar';
import ProductCarousel from '@/components/home/ProductCarousel';
import AboutLegacy from '@/components/home/AboutLegacy';
import IndustriesServed from '@/components/home/IndustriesServed';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CertificationsBar />
      <AboutLegacy />
      <ProductCarousel />
      <IndustriesServed />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
