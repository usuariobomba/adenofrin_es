import React, { useRef } from 'react';
import Header from './components/Header';
import ProductHero from './components/ProductHero';
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
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900" ref={topRef}>
      <Header />

      <main>
        {/* 1. Hero with Integrated Form */}
        <ProductHero onCtaClick={() => { }} />

        {/* 2. Problem ID */}
        <ProblemIdentificationSection />

        {/* 3. What Is */}
        <WhatIsSection />

        {/* 5. Benefits */}
        <BenefitsSection />

        {/* 6. Composition */}
        <CompositionSection />

        {/* 7. Usage */}
        <UsageSection />

        {/* 8. Offer - CTA scrolls to top */}
        <OfferSection onCtaClick={scrollToTop} />

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