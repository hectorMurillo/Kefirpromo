import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Milk, 
  Heart, 
  Plus, 
  Minus, 
  Send,
  Star
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductVariant } from '../types';
import { formatCOP } from '../utils/formatters';
import confetti from 'canvas-confetti';

export const ProductModal: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'info' | 'nutrition' | 'usage'>('info');
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    if (selectedProductForModal) {
      setSelectedVariant(selectedProductForModal.variants[0]);
      setQuantity(1);
      setActiveTab('info');
      setJustAdded(false);
      // prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProductForModal]);

  if (!selectedProductForModal || !selectedVariant) return null;

  const product = selectedProductForModal;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setJustAdded(true);
    
    // Confetti effect
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setSelectedProductForModal(null);
    }, 1200);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Kéfir Vital Montería! Me interesa ordenar:\n` +
      `• *${product.name}*\n` +
      `• Presentación: ${selectedVariant.size}\n` +
      `• Cantidad: ${quantity}\n` +
      `• Total: ${formatCOP(selectedVariant.price * quantity)}\n\n` +
      `¿Tienen disponibilidad para entrega en Montería?`
    );
    window.open(`https://wa.me/573012891963?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/40 hover:bg-stone-900/70 text-white flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top section: image and primary details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Image */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-100 h-64 sm:h-72">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-amber-400 text-stone-950 text-xs font-bold px-2.5 py-1 rounded-lg">
                {product.probioticCount}
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                {product.badge && (
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {product.badge}
                  </span>
                )}
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{product.rating}</span>
                  <span className="text-stone-400 font-normal">({product.reviewsCount} reseñas)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                {product.subtitle}
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((t) => (
                  <span key={t} className="text-[11px] font-medium px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {/* Variant Selector */}
              <div className="pt-3">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Tamaño / Presentación:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedVariant.id === v.id
                          ? 'bg-emerald-50 border-emerald-700 ring-2 ring-emerald-700/20 text-emerald-950'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{v.size}</div>
                      <div className="text-xs text-stone-500">{formatCOP(v.price)}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Modal Tabs: Descripción / Nutrición / Cómo Tomarlo */}
          <div className="border-t border-stone-200 pt-4">
            <div className="flex border-b border-stone-200 gap-6 text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab('info')}
                className={`pb-3 border-b-2 transition-all ${
                  activeTab === 'info'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Beneficios & Elaboración
              </button>
              <button
                onClick={() => setActiveTab('nutrition')}
                className={`pb-3 border-b-2 transition-all ${
                  activeTab === 'nutrition'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Información Nutricional
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`pb-3 border-b-2 transition-all ${
                  activeTab === 'usage'
                    ? 'border-emerald-800 text-emerald-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Consejos de Consumo
              </button>
            </div>

            <div className="pt-4 text-xs sm:text-sm">
              {activeTab === 'info' && (
                <div className="space-y-4">
                  <p className="text-stone-700 leading-relaxed">
                    {product.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-stone-900 mb-2">Ingredientes 100% Transparentes:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-stone-600">
                      {product.ingredients.map((ing, idx) => (
                        <li key={idx}>{ing}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-stone-900 mb-2">Impacto en tu Salud:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div className="space-y-4">
                  <p className="text-stone-500 text-xs">
                    Valores nutricionales por cada 100g de producto artesanal:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Calorías</span>
                      <div className="text-base font-bold text-stone-900">{product.nutritionPer100g.calories} kcal</div>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Proteína</span>
                      <div className="text-base font-bold text-emerald-900">{product.nutritionPer100g.protein}</div>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Azúcares Añadidos</span>
                      <div className="text-base font-bold text-stone-900">{product.nutritionPer100g.sugars}</div>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Carbohidratos</span>
                      <div className="text-base font-bold text-stone-900">{product.nutritionPer100g.carbs}</div>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Grasas Saludables</span>
                      <div className="text-base font-bold text-stone-900">{product.nutritionPer100g.fat}</div>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <span className="text-[11px] text-stone-400 uppercase font-bold">Calcio Biodisponible</span>
                      <div className="text-base font-bold text-emerald-900">{product.nutritionPer100g.calcium}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-stone-400 italic">
                    *Al ser un producto vivo artesanal sin pasteurizar post-fermentación, los conteos de probióticos se mantienen activos durante toda su vida útil refrigerado (hasta 25 días).
                  </div>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-3">
                  <h4 className="font-bold text-stone-900">¿Cómo aprovecharlo al máximo?</h4>
                  <div className="space-y-2">
                    {product.usageTips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                        <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="text-stone-800">{tip}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-3 rounded-xl bg-stone-100 text-stone-600 text-xs">
                    ❄️ <strong>Conservación en Montería:</strong> Mantener siempre bien refrigerado entre 2°C y 6°C. No congelar las botellas de vidrio.
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                Total ({quantity} {quantity === 1 ? 'unidad' : 'unidades'})
              </span>
              <span className="font-serif font-bold text-2xl text-stone-950">
                {formatCOP(selectedVariant.price * quantity)}
              </span>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-xl p-1 shadow-xs">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-stone-100 text-stone-700 active:scale-95 transition-all"
                aria-label="Restar unidad"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-6 text-center text-sm font-bold text-stone-900">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-stone-100 text-stone-700 active:scale-95 transition-all"
                aria-label="Sumar unidad"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDirectWhatsApp}
              className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 text-xs font-bold transition-all flex items-center justify-center gap-2 border border-emerald-300"
              title="Pedir directo al WhatsApp de Kéfir Vital"
            >
              <Send className="w-4 h-4 text-emerald-800" />
              <span>WhatsApp Directo</span>
            </button>

            <button
              onClick={handleAddToCart}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-800 hover:bg-emerald-900 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado al Carrito!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Agregar al Pedido</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
