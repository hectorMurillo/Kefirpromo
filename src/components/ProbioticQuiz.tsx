import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, CheckCircle2, RotateCcw, Milk, Heart, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/formatters';

interface ProbioticQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProbioticQuiz: React.FC<ProbioticQuizProps> = ({ isOpen, onClose }) => {
  const { addToCart, setSelectedProductForModal } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [selectedTaste, setSelectedTaste] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      title: '¿Cuál es tu principal objetivo de salud o síntoma a mejorar?',
      options: [
        {
          id: 'gut-healing',
          label: 'Aliviar gastritis, reflujo y colon irritable',
          desc: 'Busco la máxima colonización probiótica y desinflamación gástrica rápida.'
        },
        {
          id: 'sweet-tooth',
          label: 'Controlar ansiedad y antojos dulces sin azúcar',
          desc: 'Quiero una merienda frutal, fresca y saciante para las tardes de Montería.'
        },
        {
          id: 'fitness-protein',
          label: 'Ganar masa muscular y saciedad prolongada',
          desc: 'Necesito alto contenido de proteína biodisponible sin espesantes ni almidones.'
        },
        {
          id: 'local-tradition',
          label: 'Conectar con los sabores de nuestra tierra',
          desc: 'Me encanta el corozo costeño y las frutas tradicionales de Córdoba.'
        },
        {
          id: 'diy-home',
          label: 'Ser autosuficiente y cultivar en mi cocina',
          desc: 'Quiero producir mi propio kéfir todos los días para mi familia.'
        }
      ]
    },
    {
      title: '¿Qué tipo de sabor o textura prefieres?',
      options: [
        {
          id: 'pure-acidic',
          label: 'Sabor tradicional láctico puro y ligeramente efervescente',
          desc: 'El kéfir original como se ha tomado durante siglos.'
        },
        {
          id: 'fruity-fresh',
          label: 'Frutal natural balanceado (cero azúcar añadida)',
          desc: 'Con compotas artesanales de frutos rojos o maracuyá.'
        },
        {
          id: 'thick-spoon',
          label: 'Ultra denso y cremoso para comer con cuchara o untar',
          desc: 'Textura espesa estilo queso o yogur griego colado.'
        },
        {
          id: 'savory-herbs',
          label: 'Salado gourmet con hierbas aromáticas y aceite de oliva',
          desc: 'Para picadas saludables, ensaladas y tostadas.'
        }
      ]
    },
    {
      title: '¿Para quién es el pedido principalmente?',
      options: [
        { id: 'adult', label: 'Para mí (adulto con rutina activa)', desc: 'Dosis diaria matutina recomendada.' },
        { id: 'family-kids', label: 'Para toda la familia, incluyendo niños', desc: 'Sabores suaves y amigables para los más pequeños.' },
        { id: 'couple-athlete', label: 'Para mí y mi pareja deportista / fitness', desc: 'Rendimiento físico y digestión rápida.' }
      ]
    }
  ];

  const handleSelectOption = (optionId: string) => {
    if (currentStep === 0) {
      setSelectedGoal(optionId);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setSelectedTaste(optionId);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setSelectedUser(optionId);
      // Calculate recommendation
      computeRecommendation(selectedGoal, selectedTaste, optionId);
      setCurrentStep(3);
    }
  };

  const computeRecommendation = (goal: string, taste: string, user: string) => {
    if (goal === 'diy-home') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'kit-nodulos-kefir-vivos') || PRODUCTS[0]);
    } else if (goal === 'fitness-protein' || taste === 'thick-spoon') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'yogur-griego-kefirado') || PRODUCTS[0]);
    } else if (taste === 'savory-herbs') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'labneh-kefir-finas-hierbas') || PRODUCTS[0]);
    } else if (goal === 'local-tradition') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'kefir-corozo-cordobes') || PRODUCTS[0]);
    } else if (goal === 'sweet-tooth' || taste === 'fruity-fresh') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'kefir-frutos-rojos') || PRODUCTS[0]);
    } else if (user === 'family-kids') {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'kumis-artesanal-vivo') || PRODUCTS[0]);
    } else {
      setRecommendedProduct(PRODUCTS.find(p => p.id === 'kefir-clasico-natural') || PRODUCTS[0]);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedGoal('');
    setSelectedTaste('');
    setSelectedUser('');
    setRecommendedProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#faf8f5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400/80 flex items-center justify-center text-stone-900 font-bold">
              <Sparkles className="w-4 h-4 text-stone-950" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Test Probiótico Personalizado
              </h3>
              <p className="text-xs text-stone-500">
                {currentStep < 3 ? `Paso ${currentStep + 1} de 3` : '¡Tu Diagnóstico de Bienestar!'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Steps */}
        <div className="p-6 sm:p-8">
          {currentStep < 3 ? (
            <div className="space-y-6">
              <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-emerald-700 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                />
              </div>

              <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                {questions[currentStep].title}
              </h4>

              <div className="space-y-2.5">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className="w-full p-4 rounded-2xl border border-stone-200 hover:border-emerald-600 hover:bg-emerald-50/50 text-left transition-all group flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-950">
                        {option.label}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {option.desc}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Results screen
            recommendedProduct && (
              <div className="space-y-6 text-center animate-in fade-in">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Tu Fusión Probiótica Perfecta</span>
                </div>

                <div className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200 text-left flex flex-col sm:flex-row items-center gap-6">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shrink-0 shadow-sm"
                  />
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                      {recommendedProduct.probioticCount}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-stone-900">
                      {recommendedProduct.name}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {recommendedProduct.description}
                    </p>
                    <div className="pt-1 flex items-center gap-3">
                      <span className="font-serif font-bold text-lg text-stone-900">
                        {formatCOP(recommendedProduct.variants[0].price)}
                      </span>
                      <span className="text-xs text-stone-500">
                        ({recommendedProduct.variants[0].size})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prescription routine advice */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-left text-xs text-stone-700 space-y-1">
                  <strong className="text-amber-900 font-bold block text-sm">
                    🌿 Protocolo de consumo recomendado para ti:
                  </strong>
                  <p>
                    • <strong>Horario:</strong> Inicia tomando 100ml en ayunas con el estómago vacío.
                  </p>
                  <p>
                    • <strong>Adaptación:</strong> A partir del día 4, sube a 150ml - 200ml diarios.
                  </p>
                  <p>
                    • <strong>Refrigeración:</strong> Conservar en nevera de 2°C a 6°C en Montería.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      addToCart(recommendedProduct, recommendedProduct.variants[0], 1);
                      onClose();
                    }}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar al Pedido ({formatCOP(recommendedProduct.variants[0].price)})</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      setSelectedProductForModal(recommendedProduct);
                    }}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs transition-colors"
                  >
                    Ver Detalles
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="w-full sm:w-auto py-3 px-3 rounded-xl text-stone-500 hover:text-stone-800 text-xs flex items-center justify-center gap-1"
                    title="Repetir Test"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repetir</span>
                  </button>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};
