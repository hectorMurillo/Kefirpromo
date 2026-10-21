import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Clock, 
  ThermometerSnowflake, 
  Flame, 
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';

export const DosageGuide: React.FC = () => {
  const [dailyDoseMl, setDailyDoseMl] = useState<number>(150);
  const [bottleSize, setBottleSize] = useState<number>(1000);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const durationInDays = Math.floor(bottleSize / dailyDoseMl);

  const faqs = [
    {
      q: '¿Por qué el kéfir tiene un suave gas o cosquilleo en la boca?',
      a: 'Es la prueba irrefutable de que está 100% VIVO. Las levaduras benéficas simbióticas (como Saccharomyces kefir) metabolizan lentamente los azúcares naturales de la leche y generan una micro-efervescencia suave y totalmente natural. Los productos industriales pasteurizan después de fermentar, matando los cultivos.'
    },
    {
      q: '¿Soy intolerante a la lactosa, de verdad puedo tomar Kéfir Vital?',
      a: '¡Sí! Es uno de los mayores beneficios de la fermentación artesanal de 24 horas. Los nódulos de kéfir devoran casi la totalidad de la lactosa para alimentarse y la transforman en ácido láctico y enzimas. La gran mayoría de nuestros clientes en Montería con intolerancia severa consumen Kéfir Vital a diario sin ningún tipo de malestar gástrico.'
    },
    {
      q: '¿Cómo conservarlo adecuadamente con el clima de Montería?',
      a: 'Al ser un clima cálido tropical (32°C - 38°C), el kéfir NUNCA debe dejarse a temperatura ambiente una vez recibido. Guárdalo inmediatamente en la zona más fría de la nevera (entre 2°C y 6°C). No lo congeles en envases de vidrio. Bien refrigerado conserva su frescura y viabilidad probiótica hasta 25 días.'
    },
    {
      q: '¿Se puede mezclar con fruta, avena o café?',
      a: 'Por supuesto. Es delicioso en smoothies con banano, fresas, semillas de chía o en bowls con avena trasnochada. Solo te recomendamos evitar calentarlo o mezclarlo con líquidos hirviendo, ya que temperaturas superiores a 42°C inactivan las bacterias vivas.'
    },
    {
      q: '¿Los niños y mujeres en embarazo pueden tomarlo?',
      a: 'Sí. En niños a partir del año de edad apoya enormemente la formación de defensas y la absorción de calcio. Para mujeres embarazadas o lactantes, es un aliado maravilloso contra el estreñimiento gestacional. Ante cualquier condición médica puntual, sugerimos consultar a su médico tratante.'
    }
  ];

  return (
    <section id="guia" className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Guía de Consumo & Aclimatación</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            ¿Cómo tomar tu Kéfir para obtener máximos resultados?
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Tu microbiota es un ecosistema vivo. A continuación te explicamos las dosis ideales de inicio y calculamos cuánto durará tu botella.
          </p>
        </div>

        {/* 2-Column: Interactive Dosage Calculator + Best Routines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Calculator */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Sparkles className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">
                  Calculadora de Dosis & Rendimiento
                </h3>
                <p className="text-xs text-stone-500">
                  Planifica tu consumo semanal o mensual
                </p>
              </div>
            </div>

            {/* Step 1: Select Dose */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                1. Selecciona tu dosis diaria recomendada:
              </label>
              
              <div className="grid grid-cols-3 gap-2">
                {[
                  { ml: 80, label: 'Iniciación', sub: '80 ml/día (Días 1 a 4)' },
                  { ml: 150, label: 'Estándar', sub: '150 ml/día (Recomendado)' },
                  { ml: 250, label: 'Intensivo', sub: '250 ml/día (Atletas/Colon)' }
                ].map((item) => (
                  <button
                    key={item.ml}
                    onClick={() => setDailyDoseMl(item.ml)}
                    className={`p-3 rounded-xl text-center border transition-all ${
                      dailyDoseMl === item.ml
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-xs font-bold">{item.label}</span>
                    <span className="block text-[11px] opacity-80 mt-0.5">{item.ml} ml</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Bottle Size */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                2. Tamaño de la botella:
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setBottleSize(500)}
                  className={`py-3 px-4 rounded-xl border text-center transition-all ${
                    bottleSize === 500
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold ring-1 ring-emerald-700'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-xs block font-bold">Botella 500 ml</span>
                  <span className="text-[11px] text-stone-500 font-normal">Presentación Personal</span>
                </button>

                <button
                  onClick={() => setBottleSize(1000)}
                  className={`py-3 px-4 rounded-xl border text-center transition-all ${
                    bottleSize === 1000
                      ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold ring-1 ring-emerald-700'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-xs block font-bold">Botella 1.000 ml (1 Litro)</span>
                  <span className="text-[11px] text-stone-500 font-normal">Presentación Familiar</span>
                </button>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                  Esta botella te rinde para:
                </span>
                <div className="text-3xl font-serif font-bold text-amber-300 mt-1">
                  {durationInDays} días completos
                </div>
                <span className="text-[11px] text-emerald-100/80">
                  Consumiendo {dailyDoseMl} ml cada día en ayunas
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-amber-300" />
              </div>
            </div>

            <div className="text-xs text-stone-500 italic">
              💡 <strong>Consejo en Montería:</strong> Para una familia de 2 a 3 personas, el <em>Pack Bienestar de 4 botellas</em> asegura el suministro de 15 días con refrigeración óptima.
            </div>
          </div>

          {/* Right Column: Protocols & Schedules */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Los 2 Momentos de Oro para Tomar Kéfir
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-900 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    🌅
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      En Ayunas (Al despertar) — Recomendación #1
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Con el estómago vacío el pH gástrico es menos agresivo, permitiendo que billones de bacterias vivas alcancen el colon y comiencen a regenerar la mucosa desde primera hora.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    🌙
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-950">
                      En la Noche (1 hora antes de dormir)
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Ideal si sufres de reflujo nocturno, gastritis o insomnio. El triptófano natural y los compuestos GABA promueven relajación neuromuscular y sueño profundo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Climate Warning */}
              <div className="p-4 rounded-2xl bg-stone-100 flex items-start gap-3 text-xs text-stone-700">
                <ThermometerSnowflake className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900">Cuidado térmico en Montería:</strong>
                  <p className="mt-0.5 text-stone-600">
                    Nuestros envíos salen en neveras isotérmicas. Una vez recibido, coloca tu Kéfir Vital en la parte interna de la nevera (no en la puerta, ya que pierde frío al abrirla).
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-stone-900">
                Preguntas Frecuentes
              </h3>
              <p className="text-xs text-stone-500">
                Todo lo que necesitas saber antes de hacer tu pedido en Montería
              </p>
            </div>
          </div>

          <div className="divide-y divide-stone-200">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-semibold text-stone-900 text-sm sm:text-base hover:text-emerald-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
