import React from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';
import { FormProps } from '../types';

interface PopupProps extends FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-300 transition"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 bg-yellow-400 text-center">
                <h2 className="text-xl font-black text-red-700 uppercase leading-none">
                    ¡No cierres esta página!
                </h2>
                <p className="text-sm font-bold text-slate-800 mt-1">
                    Tu descuento del 50% sigue activo hoy.
                </p>
            </div>
            
            <LeadForm onSubmit={onSubmit} isSubmitting={isSubmitting} compact={true} />
        </div>
      </div>
    </div>
  );
};

export default Popup;