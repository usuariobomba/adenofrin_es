import React from 'react';
import { Check, ShieldCheck, AlertTriangle } from 'lucide-react';
import Link from 'next/link'; // Not strictly needed but keeping clean
import LeadForm from './LeadForm'; // Imported LeadForm

interface ProductHeroProps {
  onCtaClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 pt-2 pb-8 px-4 overflow-hidden md:pt-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">

        {/* Right Column: Image - Mobile Order 1 */}
        <div className="order-1 md:order-1 flex flex-col items-center relative mt-1 md:mt-0">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/40 to-slate-100/30 rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full max-w-[300px] h-64 md:w-[520px] md:h-[450px] flex items-center justify-center">

            {/* Main Product Image */}
            <img
              src="img/product-mockup.png"
              alt="Pack Frascos Adenofrin"
              width="665"
              height="430"
              className="relative z-10 w-64 md:w-80 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              style={{ fetchPriority: 'high' } as React.CSSProperties}
            />

            {/* Seal */}
            <div className="absolute top-4 right-8 md:top-10 md:right-16 z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center border-2 md:border-4 border-white transform rotate-12">
              <div className="text-center leading-none text-yellow-900">
                <span className="block text-xl md:text-3xl font-black">100%</span>
                <span className="block text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Original</span>
              </div>
            </div>

            {/* Desktop Price Badge - 3D Text No Box */}
            <div className="hidden md:flex absolute bottom-4 -right-8 flex-col items-center transform rotate-3 z-30">
              <span className="text-slate-500 md:text-2xl font-bold line-through decoration-slate-800 decoration-2 mb-[-5px] tracking-tight" style={{ textShadow: '2px 2px 0px white' }}>39€</span>
              <span className="text-7xl md:text-6xl font-black text-red-600 leading-none tracking-tighter" style={{ textShadow: '3px 3px 0px #ffffff, 5px 5px 0px rgba(0,0,0,0.1)' }}>
                20€
              </span>
              <span className="bg-blue-600 text-white text-xs font-black px-2 py-0.5 rounded shadow-md uppercase tracking-wider -mt-2 transform -rotate-3 border border-white">
                -50% OFF
              </span>
            </div>

            {/* Mobile Price Badge - Huge 3D Text */}
            <div className="md:hidden absolute -bottom-6 right-8 flex flex-col items-center transform rotate-6 z-30">
              <span className="text-slate-500 text-lg font-bold line-through decoration-slate-800 decoration-2 mb-[-5px] tracking-tight" style={{ textShadow: '1px 1px 0px white' }}>39€</span>
              <span className="text-[4rem] font-black text-red-600 leading-none tracking-tighter" style={{ textShadow: '2px 2px 0px #ffffff, 4px 4px 0px rgba(0,0,0,0.15)' }}>
                20€
              </span>
              <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-wider -mt-1 transform -rotate-3 border border-white">
                ¡OFERTA!
              </span>
            </div>

          </div>

          {/* Safe Badges Image */}
          <img
            src="img/trust-badges.png"
            alt="Garantía y Seguridad"
            width="340"
            height="80"
            className="w-full max-w-[260px] md:max-w-[340px] h-auto object-contain -mt-4 md:-mt-8 relative z-20 opacity-90"
          />
        </div>

        {/* Left Column: Content - Mobile Order 2 */}
        <div className="order-2 md:order-2 space-y-4 md:space-y-5 text-center md:text-left relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded bg-blue-50 text-blue-700 font-bold text-[10px] tracking-widest uppercase mb-2 md:mb-3 border border-blue-100">
              <ShieldCheck className="w-3 h-3" /> FÓRMULA AVANZADA PARA HOMBRES +45
            </span>
            <h1 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-2 md:mb-4 tracking-tight">
              ¿TU PRÓSTATA TE ESTÁ ROBANDO <span className="text-blue-500">LA HOMBRÍA</span> Y <span className="text-blue-500">EL SUEÑO?</span>
            </h1>
          </div>

          <div className="flex justify-center md:justify-start">
            <ul className="space-y-1.5 md:space-y-2 text-left">
              {[
                "Reduce la urgencia urinaria nocturna",
                "Recupera la potencia y el vigor",
                "Protege tu salud a largo plazo"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0" />
                  <span className="text-slate-800 font-bold text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrated LeadForm replacing the old pricing block */}
          <div className="mt-4">
            <LeadForm isSubmitting={false} onSubmit={() => { }} />
          </div>

        </div>

      </div>
    </section>


  );
};

export default ProductHero;