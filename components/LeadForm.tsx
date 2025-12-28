import React, { useState } from 'react';
import { Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { FormProps } from '../types';
import BrandName from './BrandName';

const LeadForm: React.FC<FormProps> = ({ isSubmitting }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setPhone(value);
      if (phoneError) setPhoneError('');
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    // Validação mínima necessária
    if (phone.length < 9) {
      e.preventDefault();
      setPhoneError('Ingrese un número válido (9 dígitos).');
      return;
    }

    // Se a validação passar, o navegador fará o POST nativo para a action="/api/order"
    // O backend redirecionará para ?status=success
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden max-w-sm mx-auto">
      <div className="bg-blue-600 p-3 flex items-center justify-between border-b border-blue-700">
        <h3 className="text-lg font-black text-white uppercase tracking-widest text-shadow-sm leading-none">
          ¡OFERTA<br />LIMITADA!
        </h3>
        <div className="bg-white text-blue-700 px-3 py-1 rounded font-black text-xl shadow-sm transform -rotate-2">
          20€
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-slate-600 mb-4 text-center leading-relaxed font-medium bg-blue-50 p-2 rounded border border-blue-100">
          Completa el formulario y un asesor confirmará disponibilidad y promoción vigente.
        </p>

        <form
          action="/api/order"
          method="POST"
          className="space-y-4"
          onSubmit={validateAndSubmit}
        >
          {/* Campo oculto para rastreamento (ClickID) */}
          <input type="hidden" name="subacc" className="subacc_input" />

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Nombre Completo</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ej: Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Celular / Teléfono</label>
            <div className="relative flex items-center">
              <div className="absolute left-0 top-0 bottom-0 bg-slate-100 border border-slate-300 border-r-0 rounded-l px-3 flex items-center justify-center gap-1 z-10">
                <span className="text-lg leading-none">🇪🇸</span>
                <span className="text-slate-600 font-bold text-sm">+34</span>
              </div>

              <input
                type="tel"
                name="phone"
                required
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="600 123 456"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full pl-20 pr-3 py-2.5 border rounded focus:ring-2 focus:border-transparent outline-none transition bg-white text-slate-900 font-medium tracking-wide ${phoneError ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-orange-500'
                  }`}
              />
            </div>
            {phoneError && (
              <div className="flex items-center gap-1 mt-1.5 text-red-600 animate-fade-in">
                <AlertCircle className="w-3 h-3" />
                <span className="text-xs font-bold">{phoneError}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded font-bold text-lg text-white shadow-md transition-all uppercase tracking-wide ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 active:scale-95'
              }`}
          >
            {isSubmitting ? 'Procesando...' : 'ASEGURAR PEDIDO'}
          </button>

          <div className="flex flex-col items-center justify-center gap-1 mt-2 pt-2">
            <div className="flex items-center gap-1.5 text-xs text-green-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Descuento aplicado hoy</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase">
              <Lock className="w-3 h-3" />
              <span>Datos 100% seguros</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;