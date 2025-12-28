import React from 'react';
import { Check, ShieldCheck, AlertTriangle } from 'lucide-react';
import BrandName from './BrandName';

interface ProductHeroProps {
  onCtaClick: () => void;
}

const ProductHero: React.FC<ProductHeroProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 pt-2 pb-8 px-4 overflow-hidden md:pt-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">

        {/* Right Column: Image (3 Jars, Static) - Mobile Order 1 */}
        {/* Adjusted spacing to reduce whitespace on mobile */}
        <div className="order-1 md:order-2 flex flex-col items-center relative mt-1 md:mt-0">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/40 to-slate-100/30 rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full max-w-[300px] h-52 md:w-[520px] md:h-[450px] flex items-center justify-center">

            {/* Left Jar */}
            <img
              src="https://i.ibb.co/FqCfmmjt/tovar-header.png"
              alt="Frasco Adenofrin"
              className="absolute left-10 md:left-0 bottom-2 md:bottom-8 w-24 md:w-48 h-auto object-contain opacity-95 scale-90 z-0 -rotate-12 brightness-90"
            />

            {/* Right Jar */}
            <img
              src="https://i.ibb.co/FqCfmmjt/tovar-header.png"
              alt="Frasco Adenofrin"
              className="absolute right-11 md:right-0 bottom-2 md:bottom-8 w-24 md:w-48 h-auto object-contain opacity-95 scale-90 z-0 rotate-12 brightness-90"
            />

            {/* Center Jar */}
            <img
              alt="Pack 3 Frascos Adenofrin"
              className="relative z-10 w-28 md:w-56 h-auto object-contain drop-shadow-2xl"
            />

            {/* Seal */}
            <div className="absolute top-2 right-4 md:right-16 z-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-xl flex items-center justify-center border-2 border-white transform rotate-12">
              <div className="text-center leading-none text-yellow-900">
                <span className="block text-xl md:text-3xl font-black">100%</span>
                <span className="block text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Original</span>
              </div>
            </div>
          </div>

          {/* Safe Badges Image */}
          <img
            src="https://i.ibb.co/9HnHRvzm/trust-badges-removebg-preview.png"
            alt="Garantía y Seguridad"
            className="w-full max-w-[260px] md:max-w-[340px] h-auto object-contain -mt-4 md:-mt-8 relative z-20 opacity-90"
          />
        </div>

        {/* Left Column: Content - Mobile Order 2 */}
        <div className="order-2 md:order-1 space-y-4 md:space-y-5 text-center md:text-left relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded bg-slate-100 text-slate-600 font-bold text-[10px] tracking-widest uppercase mb-2 md:mb-3 border border-slate-200">
              <ShieldCheck className="w-3 h-3" /> Sitio Oficial España
            </span>
            <h1 className="text-2xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-2 md:mb-4 tracking-tight">
              ¿Próstata Inflamada o Falta de Potencia? <span className="text-orange-600">Recupera Tu Hombría Hoy.</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-600 leading-snug max-w-lg mx-auto md:mx-0 font-medium">
              Con <BrandName />, dile adiós al goteo constante y a las fallas en la cama. Recupera el control total, la potencia y la confianza que creías perdida.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <ul className="space-y-1.5 md:space-y-2 text-left">
              {[
                "Apoyo al bienestar prostático*",
                "Contribuye a la vitalidad masculina*",
                "Equilibrio natural del organismo*"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-green-600 shrink-0" />
                  <span className="text-slate-800 font-bold text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Block - HIGHLIGHTED */}
          <div className="flex flex-col items-center md:items-start pt-2">

            <div className="relative p-4 md:p-5 bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-xl shadow-sm w-full max-w-sm md:max-w-md mx-auto md:mx-0 mt-2">
              {/* Floating Ribbon Badge */}
              <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[10px] md:text-xs font-black px-3 py-1 rounded-full shadow-md animate-pulse transform rotate-2 uppercase tracking-wide border-2 border-white">
                ¡AHORRA 50% HOY!
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-slate-400 text-sm line-through font-semibold">Regular: 78€</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-black text-orange-600 tracking-tighter drop-shadow-sm leading-none">
                    39€
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] md:text-xs font-bold text-green-700 uppercase tracking-wide">
                    Precio exclusivo internet
                  </span>
                </div>
              </div>
            </div>

            {/* Exclusivity Warning */}
            <div className="mt-4 bg-red-50 border border-red-100 rounded-md p-2.5 w-full max-w-sm md:max-w-md text-left shadow-sm">
              <div className="flex gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="text-[10px] md:text-xs text-slate-700 leading-tight">
                  <span className="font-bold text-red-700 block mb-0.5 uppercase">Aviso Importante:</span>
                  <BrandName /> <span className="font-bold">no se vende en farmacias</span> ni en marketplaces como <strong>Amazon</strong> o <strong>eBay</strong>.
                  Venta exclusiva en este sitio oficial para garantizar autenticidad.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white text-lg md:text-xl font-bold py-3 md:py-4 px-10 rounded-lg shadow-xl shadow-orange-600/20 transition-all hover:scale-[1.02] active:scale-95 ring-4 ring-orange-100 uppercase"
            >
              VERIFICAR DISPONIBILIDAD
            </button>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-xs text-slate-500 font-semibold uppercase tracking-wide">
              <span>⚡ Envío Rápido</span>
              <span className="hidden md:block">•</span>
              <span>💰 Pago Contraentrega</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductHero;