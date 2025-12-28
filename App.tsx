import React, { useRef } from 'react';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import { ProblemIdentificationSection, IngredientsSection, TestimonialsSection } from './components/Sections';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';

const App: React.FC = () => {
  const formRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <ProductHero formRef={formRef} />
        <ProblemIdentificationSection />
        <IngredientsSection />
        <TestimonialsSection />
        <SuccessModal />
      </main>
      <Footer />
    </div>
  );
};

export default App;