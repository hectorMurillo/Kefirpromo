import React from 'react';
import { Star, Instagram, Heart, MessageCircle, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, INSTAGRAM_POSTS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-amber-700" />
            <span>Historias de Salud en Córdoba</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            La comunidad que ya sanó su digestión en Montería
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Testimonios de clientes en El Recreo, La Castellana, Monteverde, Cereté y toda la región del Sinú.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200/90 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-600/30"
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-1">
                      <span>{test.name}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    </h4>
                    <span className="text-[11px] text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{test.neighborhood}</span>
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section: @kefir_vital_monteria showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Instagram Oficial
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  @kefir_vital_monteria
                </h3>
                <p className="text-xs text-stone-300">
                  Consejos diarios, recetas probióticas, historias de fermentación y entregas en Montería
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/kefir_vital_monteria"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-stone-900 hover:bg-amber-300 text-xs font-bold transition-all flex items-center justify-center gap-2 self-start sm:self-auto shadow-md"
            >
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Post Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/kefir_vital_monteria"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-800 block shadow-md"
              >
                <img
                  src={post.image}
                  alt="Post Instagram Kefir Vital Monteria"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
                  <div className="flex items-center justify-end gap-3 font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="line-clamp-3 text-[11px] text-stone-200">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center text-xs text-stone-400">
            ¿Consumes Kéfir Vital? Etiquétanos en tus historias de Instagram <strong className="text-white">@kefir_vital_monteria</strong> para repostear tu preparación probiótica 🥛✨
          </div>
        </div>

      </div>
    </section>
  );
};
