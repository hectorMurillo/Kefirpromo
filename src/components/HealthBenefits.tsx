import React, { useState } from 'react';
import { 
  HeartPulse, 
  Brain, 
  Smile, 
  ShieldCheck, 
  Check, 
  X, 
  ChevronRight, 
  Sparkles, 
  Activity, 
  Microscope,
  Info,
  Calendar
} from 'lucide-react';
import { GUT_TIMELINE, COMPARISON_DATA, PROBIOTIC_STRAINS, HEALTH_PILLARS } from '../data/benefits';

export const HealthBenefits: React.FC = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(2); // Start on Day 14 (Serotonin activation)
  const [activeTab, setActiveTab] = useState<'timeline' | 'comparison' | 'strains'>('timeline');

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide uppercase">
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ciencia & Medicina Natural</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            ¿Por qué el Kéfir transforma tu salud desde el primer sorbo?
          </h2>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            A diferencia de los lácteos ultraprocesados de supermercado llenos de azúcar y espesantes, el Kéfir Vital es un alimento biológicamente activo con billones de microorganismos vivos que colonizan tu microbiota.
          </p>
        </div>

        {/* Highlight Feature Card: The 90% Serotonin Gut-Brain Connection */}
        <div id="serotonina" className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-stone-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider">
                <Brain className="w-3.5 h-3.5" />
                <span>Eje Intestino - Cerebro</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-amber-50 leading-snug">
                El 90% de la serotonina (la hormona de la felicidad) se produce en tu intestino.
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                El intestino alberga más de 100 millones de neuronas y está en comunicación permanente con tu cerebro a través del nervio vago. Cuando tu flora intestinal está dañada por estrés, alimentos procesados o antibióticos, la producción de neurotransmisores decae, generando fatiga, niebla mental, irritabilidad y ansiedad.
              </p>

              <p className="text-emerald-200 text-sm font-medium">
                ✨ Las cepas vivas de Kéfir Vital repueblan el epitelio intestinal, reducen el cortisol y activan la síntesis natural de serotonina y GABA para que recuperes tu calma y bienestar.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <span className="text-5xl sm:text-6xl font-serif font-bold text-amber-400 tracking-tight">
                90%
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                de la serotonina humana
              </span>
              <p className="text-xs text-stone-300 mt-2 max-w-xs">
                Se sintetiza en las células enterocromafines del intestino gracias a una microbiota sana.
              </p>
              <div className="mt-4 pt-4 border-t border-white/20 w-full flex items-center justify-around text-center text-xs">
                <div>
                  <span className="block font-bold text-white text-base">+50</span>
                  <span className="text-emerald-200 text-[11px]">Cepas vivas</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-base">24h</span>
                  <span className="text-emerald-200 text-[11px]">Fermentación</span>
                </div>
                <div>
                  <span className="block font-bold text-white text-base">0g</span>
                  <span className="text-emerald-200 text-[11px]">Azúcar libre</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Health Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {HEALTH_PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    {pillar.subtitle}
                  </span>
                  <span className="text-xl font-serif font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {pillar.stat}
                  </span>
                </div>

                <h4 className="text-lg font-serif font-bold text-stone-900">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-500 font-medium">
                {pillar.statLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tabs: Timeline vs Comparison vs Strains */}
        <div className="mt-16 pt-8 border-t border-stone-200">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'timeline'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Línea de Tiempo: ¿Qué pasa en tu cuerpo?</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'comparison'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Kéfir Vital vs. Yogur Comercial</span>
            </button>

            <button
              onClick={() => setActiveTab('strains')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'strains'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Microscope className="w-4 h-4" />
              <span>Microorganismos & Cepas Vivas</span>
            </button>
          </div>

          {/* TAB 1: Gut Timeline */}
          {activeTab === 'timeline' && (
            <div className="bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-8 animate-in fade-in">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Evolución de tu Microbiota con Kéfir Diario
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Haz clic en cada etapa para ver los cambios fisiológicos y celulares en tu organismo
                </p>
              </div>

              {/* Day selection buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {GUT_TIMELINE.map((item, idx) => (
                  <button
                    key={item.day}
                    onClick={() => setSelectedTimelineIndex(idx)}
                    className={`p-3 rounded-2xl text-center transition-all border ${
                      selectedTimelineIndex === idx
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-102'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300'
                    }`}
                  >
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-80">
                      {item.day}
                    </span>
                    <span className="block text-xs font-semibold truncate mt-1">
                      {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Step Spotlight */}
              {(() => {
                const current = GUT_TIMELINE[selectedTimelineIndex];
                return (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-3 max-w-2xl text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{current.day} de consumo constante</span>
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-stone-900">
                        {current.title}
                      </h4>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {current.description}
                      </p>
                    </div>

                    <div className="w-full md:w-64 shrink-0 p-5 rounded-2xl bg-amber-50 border border-amber-200/70 text-center">
                      <span className="text-xs text-amber-900/80 uppercase font-bold tracking-wider">
                        Efecto Comprobado
                      </span>
                      <div className="text-lg font-serif font-bold text-amber-950 mt-1">
                        {current.metric}
                      </div>
                      <span className="text-[11px] text-stone-500 mt-1 block">
                        Resultados reportados por pacientes en Montería
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 2: Comparison Table */}
          {activeTab === 'comparison' && (
            <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm animate-in fade-in">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                    <th className="py-4 px-4 sm:px-6 font-bold">Aspecto Nutricional & Salud</th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-emerald-900 bg-emerald-50/70">
                      🥛 Kéfir Vital Montería (Artesanal)
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-stone-500">
                      🏭 Yogur Comercial de Supermercado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-stone-800">
                        {row.aspect}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-emerald-900 bg-emerald-50/30">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.kefirVital}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-stone-500">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{row.yogurtIndustrial}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: Strains Directory */}
          {activeTab === 'strains' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in">
              {PROBIOTIC_STRAINS.map((strain, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        strain.type === 'bacteria' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {strain.type === 'bacteria' ? 'Bacteria Probiótica' : 'Levadura Simbiótica'}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-stone-900 text-base italic">
                      {strain.name}
                    </h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {strain.role}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                    Presente en: <strong className="text-stone-700">{strain.foundIn}</strong>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
