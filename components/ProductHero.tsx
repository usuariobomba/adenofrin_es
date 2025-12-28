import React, { useRef } from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import LeadForm from './LeadForm';

interface ProductHeroProps {
  formRef: React.RefObject<HTMLElement>;
}

const ProductHero: React.FC<ProductHeroProps> = ({ formRef }) => {
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden pb-10 pt-4 md:py-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Logo Mobile */}
        <div className="md:hidden flex justify-center mb-4">
          <img
            src="img/logo.png"
            alt="Adenofrin Logo Oficial"
            width="176"
            height="80"
            className="h-24 object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Product Image Section */}
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/40 to-slate-100/30 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full md:w-[500px] md:h-[450px] flex items-center justify-center">
              {/* Single Central Image for Desktop - LCP Optimized */}
              <img
                src="img/product-mockup.png"
                alt="Pack Frascos Adenofrin"
                width="665"
                height="430"
                className="relative z-10 w-64 md:w-80 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-10 right-10 z-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center border-4 border-white transform rotate-12">
                <div className="text-center leading-none text-yellow-900">
                  <span className="block text-3xl font-black">100%</span>
                  <span className="block text-[10px] font-bold uppercase tracking-wider">
                    Original
                  </span>
                </div>
              </div>

              {/* Desktop Price Badge - 3D Text No Box */}
              <div className="absolute bottom-4 -right-8 flex flex-col items-center transform rotate-3 z-30">
                <span
                  className="text-slate-500 md:text-xl font-bold line-through decoration-slate-800 decoration-2 mb-[-5px] tracking-tight"
                  style={{ textShadow: '1px 1px 0px white' }}
                >
                  39€
                </span>
                <span
                  className="text-6xl md:text-5xl font-black text-red-600 leading-none tracking-tighter"
                  style={{
                    textShadow: '2px 2px 0px #ffffff, 4px 4px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  20€
                </span>
                <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-md uppercase tracking-wider -mt-2 transform -rotate-3 border border-white">
                  -50% OFF
                </span>
              </div>
            </div>
            <img
              src="img/trust-badges.png"
              alt="Garantía y Seguridad"
              width="340"
              height="80"
              className="w-full max-w-[340px] h-auto object-contain -mt-8 relative z-20 opacity-90"
            />
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-1 space-y-4 md:space-y-5 text-center md:text-left relative z-10 w-full md:w-1/2">
            <div>
              <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded bg-blue-50 text-blue-700 font-bold text-[10px] tracking-widest uppercase mb-2 md:mb-3 border border-blue-100">
                <ShieldCheck className="w-3 h-3" /> FÓRMULA AVANZADA PARA HOMBRES +45
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-2 md:mb-4 tracking-tight">
                ¿TU PRÓSTATA TE ESTÁ ROBANDO <span className="text-blue-500">LA HOMBRÍA</span> Y{' '}
                <span className="text-blue-500">EL SUEÑO?</span>
              </h1>

              {/* Mobile Only Image (Between Title and Subtitle) */}
              <div className="block md:hidden relative w-full h-64 my-6 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-50/50 rounded-full blur-2xl -z-10"></div>
                <img
                  src="img/product-mockup.png"
                  alt="Adenofrin Oferta"
                  width="400"
                  height="300"
                  className="h-full w-auto object-contain drop-shadow-xl"
                />
                <div className="absolute top-2 right-4 z-20 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center border-2 border-white transform rotate-12">
                  <div className="text-center leading-none text-yellow-900">
                    <span className="block text-xl font-black">100%</span>
                    <span className="block text-[8px] font-bold uppercase tracking-wider">
                      Original
                    </span>
                  </div>
                </div>

                {/* Mobile Price Badge - Huge 3D Text */}
                <div className="absolute -bottom-6 right-8 flex flex-col items-center transform rotate-6 z-30">
                  <span
                    className="text-slate-500 text-lg font-bold line-through decoration-slate-800 decoration-2 mb-[-5px] tracking-tight"
                    style={{ textShadow: '1px 1px 0px white' }}
                  >
                    39€
                  </span>
                  <span
                    className="text-[4rem] font-black text-red-600 leading-none tracking-tighter"
                    style={{
                      textShadow: '2px 2px 0px #ffffff, 4px 4px 0px rgba(0,0,0,0.15)',
                    }}
                  >
                    20€
                  </span>
                  <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-wider -mt-1 transform -rotate-3 border border-white">
                    ¡OFERTA!
                  </span>
                </div>
              </div>

              {/* Mobile Only Trust Badges */}
              <div className="block md:hidden flex justify-center mb-4 -mt-2">
                <img
                  src="img/trust-badges.png"
                  alt="Garantía y Seguridad"
                  width="200"
                  height="50"
                  loading="lazy"
                  className="w-full max-w-[200px] h-auto object-contain opacity-90"
                />
              </div>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
                Descubre el secreto para reducir las ganas frecuentes de orinar, recuperar la
                potencia y dormir toda la noche sin interrupciones.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-md mx-auto md:mx-0 pt-2">
              <div className="space-y-2">
                {[
                  'Reduce la inflamación prostática naturalmente',
                  'Recupera la potencia y firmeza viril',
                  'Duerme toda la noche sin levantarte al baño',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 rounded-lg bg-blue-50/50 border border-blue-100"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Form Container */}
            <div ref={formRef} className="hidden md:block mt-8 w-full max-w-sm">
              <LeadForm />
            </div>
          </div>
        </div>

        {/* Mobile Form (Below Hero) */}
        <div ref={formRef} className="block md:hidden mt-8 px-2" id="form-section">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;