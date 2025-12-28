import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const SuccessModal: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('status') === 'success') {
            setShow(true);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 transition-all">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">¡Pedido Confirmado!</h2>
                <p className="text-slate-600 mb-6">
                    Gracias. Un operador le llamará pronto al número proporcionado para confirmar la entrega.
                    <br />
                    <strong className="text-slate-900 block mt-2">
                        Por favor, esté atento para responder la llamada.
                    </strong>
                </p>
                <button
                    onClick={() => setShow(false)}
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition shadow-lg"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
