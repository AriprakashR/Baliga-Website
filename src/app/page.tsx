import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import IndustriesPreview from '@/components/home/IndustriesPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProductCategoriesPreview from '@/components/home/ProductCategoriesPreview';
import CtaBanner from '@/components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IndustriesPreview />
      <WhyChooseUs />
      <ProductCategoriesPreview />
      <CtaBanner />
    </>
  );
}
