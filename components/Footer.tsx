import React from 'react';
import BrandName from './BrandName';

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center mb-8">
        <BrandName className="text-3xl text-white mb-4" />
        <p className="text-center max-w-md text-sm text-slate-400">
          Adenofrin es un suplemento alimenticio natural. Los resultados pueden variar de una
          persona a otra. Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna
          enfermedad.
        </p>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2024 Adenofrin Oficial España. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-white transition">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;