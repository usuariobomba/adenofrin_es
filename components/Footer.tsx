import React from 'react';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-0 border-t border-slate-800">
      {/* Refined Trust Badges - Horizontal on all screens */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="flex items-center justify-between gap-2 md:gap-8 border-b border-slate-800/50 pb-8">

          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-3 flex-1">
            <div className="bg-slate-800/50 p-1.5 md:p-2.5 rounded-full border border-slate-700/50">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            </div>
            <span className="font-bold text-white text-[9px] md:text-sm uppercase tracking-tight md:tracking-normal text-center md:text-left leading-tight">
              Datos <br className="md:hidden" /> protegidos
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-3 flex-1">
            <div className="bg-slate-800/50 p-1.5 md:p-2.5 rounded-full border border-slate-700/50">
              <Truck className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
            </div>
            <span className="font-bold text-white text-[9px] md:text-sm uppercase tracking-tight md:tracking-normal text-center md:text-left leading-tight">
              Entrega <br className="md:hidden" /> confiable
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-3 flex-1">
            <div className="bg-slate-800/50 p-1.5 md:p-2.5 rounded-full border border-slate-700/50">
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            </div>
            <span className="font-bold text-white text-[9px] md:text-sm uppercase tracking-tight md:tracking-normal text-center md:text-left leading-tight">
              Pago <br className="md:hidden" /> seguro
            </span>
          </div>

        </div>
      </div>

      <div className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-slate-500 mb-6 max-w-2xl mx-auto leading-relaxed italic opacity-80">
            *Este producto no es un medicamento. Los resultados pueden variar dependiendo de cada organismo. No sustituye tratamientos médicos profesionales.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] md:text-xs font-medium text-slate-400 mb-4 opacity-60">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span className="hidden md:block text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span className="hidden md:block text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Adenofrin Oficial España.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;