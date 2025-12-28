import React from 'react';
import BrandName from './BrandName';

const Header: React.FC = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50 py-3">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex flex-col items-center leading-none">
        <BrandName className="text-2xl md:text-3xl" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
          Fórmula Oficial
        </span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
        <a href="#beneficios" className="hover:text-blue-600 transition">
          Beneficios
        </a>
        <a href="#ingredientes" className="hover:text-blue-600 transition">
          Ingredientes
        </a>
        <a href="#testimonios" className="hover:text-blue-600 transition">
          Testimonios
        </a>
        <a
          href="#form-section"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-200"
        >
          PEDIR AHORA
        </a>
      </div>
    </div>
  </header>
);

export default Header;