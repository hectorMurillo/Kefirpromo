import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowRight, Milk, Award, MapPin, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const { setSelectedProductForModal, addToCart } = useCart();
  const featuredKefir = PRODUCTS[0];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Background organic gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-amber-100/70 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Lácteos Probióticos Artesanales en Montería, Córdoba</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight">
              100% Vivo, artesanal <br className="hidden sm:inline" />
              <span className="text-emerald-800 italic font-normal">y sin una sola gota</span> de azúcar.
            </h1>

            {/* Subheading with scientific hook */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-2xl font-light">
              ¿Sabías que el <strong className="font-semibold text-stone-900 underline decoration-amber-400 decoration-4 underline-offset-2">90% de la serotonina</strong> se produce en tu intestino? 
              Fermentamos pacientemente durante 24 horas con nódulos vivos y leche pura de nuestra región para restaurar tu digestión, energía y bienestar.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">24 Horas</h4>
                  <p className="text-[11px] text-stone-500">Fermentación lenta natural</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-start gap-2.5">
                <Milk className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">0% Agua</h4>
                  <p className="text-[11px] text-stone-500">Cremoso y espeso real</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/80 border border-stone-200/80 shadow-xs flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm">Montería & Cereté</h4>
                  <p className="text-[11px] text-stone-500">Domicilios fríos al día</p>
                </div>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#catalogo"
                className="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Explorar Catálogo Interactivo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="px-5 py-3.5 rounded-xl bg-amber-100 hover:bg-amber-200/90 text-amber-950 font-semibold text-sm border border-amber-300 transition-all flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>¿Cuál es mi Kéfir ideal? (Test)</span>
              </button>

              <a
                href="#beneficios"
                className="text-stone-700 hover:text-emerald-800 font-medium text-sm underline underline-offset-4 decoration-stone-300 hover:decoration-emerald-700 transition-all px-2 py-1"
              >
                Ver respaldo de salud
              </a>
            </div>

            {/* Micro review proof */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-600">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente Montería"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente Montería"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Cliente Montería"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  ★ ★ ★ ★ ★ <span className="text-stone-800 font-semibold text-xs ml-1">4.9 / 5.0</span>
                </div>
                <span>Más de 500 monterianos ya transformaron su microbiota</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-white p-4 shadow-xl border border-stone-200/90 overflow-hidden group">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src={featuredKefir.image}
                    alt="Kéfir Vital Montería artesanal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Top Tag */}
                  <div className="absolute top-4 left-4 bg-emerald-900/90 backdrop-blur-md text-emerald-50 px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>Lácteo Vivo Artesanal</span>
                  </div>

                  {/* Serotonin Pill Badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 text-stone-900 font-bold px-3 py-1 rounded-full text-xs shadow-md">
                    +50 Cepas Vivas
                  </div>

                  {/* Gradient Overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent p-6 text-white">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                      Producto Estrella
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      {featuredKefir.name}
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                      Sin azúcar añadida, sin espesantes ni gomas. Solo leche pura de Córdoba y fermentos ancestrales.
                    </p>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="pt-4 px-2 pb-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-500">Desde</span>
                    <div className="text-xl font-bold text-emerald-900 font-serif">
                      $14.000 COP <span className="text-xs font-sans font-normal text-stone-500">/ 500ml</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProductForModal(featuredKefir)}
                      className="px-3 py-2 text-xs font-semibold text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-lg transition-colors"
                    >
                      Ver Detalles
                    </button>
                    <button
                      onClick={() => addToCart(featuredKefir, featuredKefir.variants[0], 1)}
                      className="px-4 py-2 text-xs font-semibold bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg shadow-sm hover:shadow transition-all"
                    >
                      Pedir Ahora
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating stats tag */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-lg border border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <Heart className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Salud Digestiva Real</div>
                  <div className="text-[11px] text-stone-500">Apto para intolerantes a la lactosa</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-3 sm:-right-5 bg-emerald-950 text-emerald-100 rounded-2xl px-3.5 py-2 shadow-lg border border-emerald-800 flex items-center gap-2 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold">Sin conservantes ni químicos</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
