import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import BrandName from './BrandName';

// 2. Problem Identification Section - Compacted
export const ProblemIdentificationSection: React.FC = () => (
  <section className="bg-slate-50 py-10 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 text-center">
        ¿Te reconoces en esto?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "Incomodidad constante en la zona íntima",
          "Necesidad frecuente de ir al baño",
          "Baja energía y falta de confianza",
          "Menor rendimiento en momentos clave"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
            <span className="text-slate-700 font-medium text-sm leading-tight">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 3. What Is & Benefits Combined - Ultra Compact
export const BenefitsSection: React.FC = () => (
  <section className="bg-white py-10 px-4 border-y border-slate-100">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">¿Por qué elegir <BrandName />?</h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
          Fórmula natural desarrollada para apoyar la salud masculina, recuperar el bienestar y la seguridad diaria.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          "Bienestar Prostático*",
          "Mayor Confort Urinario*",
          "Potencia y Vitalidad*",
          "Fórmula 100% Natural"
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <Check className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <h3 className="font-bold text-slate-900 text-sm leading-tight">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 4. Composition & Usage Combined - Compact Grid
export const CompositionSection: React.FC = () => (
  <section className="bg-slate-900 text-white py-10 px-4">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          <span className="text-orange-500">◆</span> Fórmula Segura
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          <BrandName /> combina extractos concentrados tradicionalmente usados para la salud masculina. Sin químicos agresivos, sin efectos secundarios conocidos.
        </p>
      </div>
      <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
        <h3 className="text-lg font-bold mb-3 text-orange-400">Modo de Uso Diario</h3>
        <ul className="space-y-2 text-sm text-slate-200">
          <li className="flex items-center gap-2">
            <span className="font-bold text-white">1.</span> Tomar 2 cápsulas al día.
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-white">2.</span> Acompañar con un vaso de agua.
          </li>
          <li className="flex items-center gap-2">
            <span className="font-bold text-white">3.</span> Preferiblemente antes de las comidas.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

// Unused separate sections (Kept as null/empty to satisfy exports without breaking App.tsx)
export const WhatIsSection: React.FC = () => null;
export const UsageSection: React.FC = () => null;

interface OfferProps {
  onCtaClick: () => void;
}

// 8. Offer - Compact
export const OfferSection: React.FC<OfferProps> = ({ onCtaClick }) => (
  <section className="bg-white py-12 px-4">
    <div className="max-w-lg mx-auto text-center border border-slate-200 rounded-2xl p-6 shadow-xl bg-gradient-to-b from-white to-orange-50">

      <p className="text-slate-500 text-sm line-through mb-1">
        Precio Regular: 78€
      </p>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">-50% OFF</span>
        <p className="text-5xl font-black text-slate-900 tracking-tighter">
          39€
        </p>
      </div>

      <div className="mb-6 space-y-2 text-sm text-slate-700 font-medium bg-white/50 p-3 rounded-lg inline-block w-full">
        <p>✅ Envío Gratis a toda España</p>
        <p>✅ Pagas al recibir en tu casa</p>
      </div>

      <button
        onClick={onCtaClick}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-4 rounded-lg shadow-lg transition-transform active:scale-95 uppercase tracking-wide animate-pulse"
      >
        SOLICITAR AHORA
      </button>

      <p className="text-[10px] text-slate-400 mt-4">
        Oferta válida por tiempo limitado o hasta agotar existencias.
      </p>

    </div>
  </section >
);

// 9. Official Statement - Compact
export const OfficialStatementSection: React.FC = () => (
  <section className="bg-slate-100 py-6 px-4 text-center border-t border-slate-200">
    <div className="max-w-3xl mx-auto">
      <p className="text-slate-600 text-xs leading-relaxed">
        <AlertCircle className="w-3 h-3 inline mr-1 text-orange-600" />
        <strong>Aviso:</strong> <BrandName /> no se vende en farmacias. Venta exclusiva en este sitio oficial para garantizar autenticidad.
      </p>
    </div>
  </section>
);