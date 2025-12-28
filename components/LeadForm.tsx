import React, { useState } from 'react';
import { Lock, CheckCircle2, AlertCircle, Check } from 'lucide-react';

interface LeadFormProps {
  formRef?: React.RefObject<HTMLDivElement>;
}

const LeadForm: React.FC<LeadFormProps> = ({ formRef }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 9) {
      setPhone(value);
      if (phoneError) setPhoneError('');
    }
  };

  const validateAndSubmit = (e: React.FormEvent) => {
    if (phone.length !== 9) {
      e.preventDefault();
      setPhoneError('Ingrese un número válido (9 dígitos).');
      return;
    }
    // Native form submission will proceed to action="/api/order"
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] border-2 border-blue-500 overflow-hidden max-w-sm mx-auto relative ring-4 ring-blue-50">
      <div className="bg-blue-600 p-3 flex items-center justify-between border-b border-blue-700">
        <h3 className="text-lg font-black text-white uppercase tracking-widest text-shadow-sm leading-none">
          ¡OFERTA<br />LIMITADA!
        </h3>
        <div className="bg-white text-blue-700 px-3 py-1 rounded font-black text-xl shadow-sm transform -rotate-2">
          20€
        </div>
      </div>

      <div className="p-5">
        {/* Step-by-Step Guide */}
        <div className="flex justify-between items-start mb-6 px-1">
          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-1 border border-blue-200">
              <span className="font-bold text-xs">1</span>
            </div>
            <p className="text-[9px] text-center text-slate-500 font-bold leading-tight">
              Rellena tus<br />datos
            </p>
          </div>
          <div className="mt-4 h-[1px] w-4 bg-slate-300"></div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 mb-1 border border-slate-200">
              <span className="font-bold text-xs">2</span>
            </div>
            <p className="text-[9px] text-center text-slate-400 font-medium leading-tight">
              Te<br />llamamos
            </p>
          </div>
          <div className="mt-4 h-[1px] w-4 bg-slate-300"></div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 mb-1 border border-slate-200">
              <span className="font-bold text-xs">3</span>
            </div>
            <p className="text-[9px] text-center text-slate-400 font-medium leading-tight">
              Pago contra<br />reembolso
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-4 text-center leading-relaxed font-medium bg-blue-50 p-2 rounded border border-blue-100">
          Rellena el formulario y un agente confirmará la disponibilidad y promoción vigente.
        </p>

        <form
          action="/api/order"
          method="POST"
          className="space-y-4"
          onSubmit={validateAndSubmit}
        >
          <input type="hidden" name="subacc" className="subacc_input" />

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
              Nombre Completo
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ej: Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 border border-slate-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition bg-white text-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">
              Móvil / Teléfono
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-0 top-0 bottom-0 bg-slate-100 border border-slate-300 border-r-0 rounded-l px-3 flex items-center justify-center gap-1 z-10">
                <span className="text-slate-600 font-bold text-sm">ES +34</span>
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
                className={`w-full pl-20 pr-3 py-2.5 border rounded focus:ring-2 focus:border-transparent outline-none transition bg-white text-slate-900 font-medium tracking-wide ${phoneError
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-slate-300 focus:ring-blue-400'
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
            className={`w-full py-4 rounded font-bold text-lg text-white shadow-xl transition-all uppercase tracking-wide border-b-4 border-b-green-700 active:border-b-0 active:translate-y-0.5 animate-pulse hover:animate-none flex flex-col items-center leading-tight ${isSubmitting
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
              }`}
          >
            {isSubmitting ? (
              'Procesando...'
            ) : (
              <>
                <span className="text-xl">PEDIR CON PRECIO ESPECIAL</span>
                <span className="text-[10px] font-medium opacity-90 normal-case tracking-normal">
                  ¡Haz tu pedido en 30 segundos!
                </span>
              </>
            )}
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