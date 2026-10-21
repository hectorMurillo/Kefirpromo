import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, Heart, ShieldCheck, Clock, Milk } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
                K
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-wide">
                  KÉFIR VITAL
                </span>
                <span className="block text-xs text-emerald-400 font-medium">
                  Montería, Córdoba • Lácteos Vivos
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
              Nacimos en el corazón del Sinú con una misión clara: ofrecer probióticos reales, vivos y sin azúcar añadida. Fermentamos pacientemente durante 24 horas para devolverle la salud, ligereza y serenidad a tu microbiota intestinal.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kefir_vital_monteria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-pink-600/80 text-white flex items-center justify-center transition-colors"
                title="Instagram @kefir_vital_monteria"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/573012891963?text=Hola%20K%C3%A9fir%20Vital%20Monter%C3%ADa!%20Quisiera%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Directo"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#catalogo" className="hover:text-emerald-400 transition-colors">
                  Catálogo Interactivo de Lácteos
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Beneficios para la Salud
                </a>
              </li>
              <li>
                <a href="#serotonina" className="hover:text-emerald-400 transition-colors">
                  El 90% de la Serotonina
                </a>
              </li>
              <li>
                <a href="#guia" className="hover:text-emerald-400 transition-colors">
                  Guía de Consumo & Aclimatación
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-emerald-400 transition-colors">
                  Testimonios en Montería
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Zona de Cobertura & Domicilios
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Montería:</strong> La Castellana, El Recreo, Monteverde, Pasatiempo, Centro, Cantaclaro, Margen Izquierda y Cereté.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Horarios de Despacho:</strong> Lunes a Sábado de 8:00 AM a 6:00 PM. Entregas en neveras isotérmicas.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Atención por WhatsApp:</strong> Pedidos y asesoría personalizada de cultivo.
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Garantía de frescura: 100% vivo y recién fermentado.</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Kéfir Vital Montería. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Hecho con amor artesanal en Montería, Córdoba</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
