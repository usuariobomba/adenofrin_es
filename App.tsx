import React, { useRef } from 'react';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import SocialProofPopup from './components/SocialProofPopup';
import { 
  WhatIsSection, 
  ProblemIdentificationSection,
  BenefitsSection, 
  CompositionSection,
  UsageSection,
  OfferSection, 
  OfficialStatementSection 
} from './components/PageSections';

const App: React.FC = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      <main>
        {/* 1. Hero */}
        <ProductHero onCtaClick={scrollToForm} />
        
        {/* 2. Problem ID */}
        <ProblemIdentificationSection />

        {/* 3. What Is */}
        <WhatIsSection />
        
        {/* 4. Form Section */}
        <section id="form-section" ref={formRef} className="py-12 px-4 bg-slate-50 border-y border-slate-200">
          <LeadForm isSubmitting={false} onSubmit={() => {}} />
        </section>

        {/* 5. Benefits */}
        <BenefitsSection />

        {/* 6. Composition */}
        <CompositionSection />

        {/* 7. Usage */}
        <UsageSection />

        {/* 8. Offer */}
        <OfferSection onCtaClick={scrollToForm} />

        {/* 9. Official Statement */}
        <OfficialStatementSection />
      </main>

      {/* 10. Footer */}
      <Footer />
      
      {/* 11. Social Proof Notification */}
      <SocialProofPopup />
    </div>
  );
};

export default App;