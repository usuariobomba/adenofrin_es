import React from 'react';
import { Star, AlertTriangle, XCircle, Zap, Lock, Check } from 'lucide-react';

// Problem Identification Section
export const ProblemIdentificationSection: React.FC = () => (
    <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                    ¿Reconoces estos <span className="text-red-600">Síntomas Peligrosos?</span>
                </h2>
                <p className="text-slate-600">
                    No ignores las señales que tu cuerpo te envía. La salud de tu próstata afecta
                    directamente tu calidad de vida y virilidad.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg text-red-500 shrink-0">
                        <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Viajes constantes al baño</h3>
                        <p className="text-sm text-slate-600">
                            Te levantas 2, 3 o más veces por la noche, arruinando tu descanso y energía diaria.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg text-red-500 shrink-0">
                        <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Goteo y Flujo Débil</h3>
                        <p className="text-sm text-slate-600">
                            Sensación de no vaciar la vejiga por completo, goteo post-miccional y flujo
                            intermitente.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg text-red-500 shrink-0">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Dolor e Incomodidad</h3>
                        <p className="text-sm text-slate-600">
                            Ardor al orinar o dolor en la zona pélvica que afecta tu intimidad y bienestar.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-lg text-red-500 shrink-0">
                        <Lock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Bajo Desempeño Sexual</h3>
                        <p className="text-sm text-slate-600">
                            Erecciones débiles y falta de confianza debido a los problemas urinarios constantes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Ingredients Section
export const IngredientsSection: React.FC = () => (
    <section id="ingredientes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                    100% Natural
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                    La Potencia de la Naturaleza
                </h2>
                <p className="text-lg text-slate-600">
                    Una mezcla sinérgica de ingredientes clínicamente probados para la salud prostática.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        title: 'Saw Palmetto',
                        desc: 'El ingrediente #1 recomendado para reducir el tamaño de la próstata.',
                    },
                    {
                        title: 'Licopeno',
                        desc: 'Potente antioxidante que protege las células prostáticas del daño.',
                    },
                    {
                        title: 'Semillas de Calabaza',
                        desc: 'Ricas en Zinc, esencial para la función urinaria y sexual.',
                    },
                ].map((ing, i) => (
                    <div
                        key={i}
                        className="bg-slate-50 p-6 rounded-2xl text-center hover:shadow-lg transition"
                    >
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{ing.title}</h3>
                        <p className="text-slate-600">{ing.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Testimonials Section
export const TestimonialsSection: React.FC = () => (
    <section id="testimonios" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">
                Hombres Reales, Resultados Reales
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex text-yellow-400 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <p className="text-slate-700 italic mb-4">
                        "Llevaba años levantándome 3 o 4 veces por noche. Mi esposa estaba cansada. Con
                        Adenofrin, duermo como un bebé y mi energía ha vuelto."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                            JA
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">José Antonio</p>
                            <p className="text-xs text-slate-500">Madrid, España</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex text-yellow-400 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                    <p className="text-slate-700 italic mb-4">
                        "No creía en estos productos, pero el urólogo me sugirió probar algo natural antes de
                        medicamentos fuertes. La diferencia en 3 semanas es increíble. Flujo fuerte otra vez."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                            ML
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Manuel L.</p>
                            <p className="text-xs text-slate-500">Valencia, España</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
