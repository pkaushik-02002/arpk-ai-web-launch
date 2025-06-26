
import Hero from '@/components/Hero';
import TrustedBrands from '@/components/TrustedBrands';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <TrustedBrands />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
