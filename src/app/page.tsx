import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import CertificationsBar from '@/components/home/CertificationsBar';
import AboutLegacy from '@/components/home/AboutLegacy';
import ProductCategories from '@/components/home/ProductCategories';
import IndustriesServed from '@/components/home/IndustriesServed';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTABanner from '@/components/home/CTABanner'; //fixed import
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CertificationsBar />
        <AboutLegacy />
        <ProductCategories />
        <IndustriesServed />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
