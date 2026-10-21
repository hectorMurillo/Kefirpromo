import React, { useState } from 'react';
import { ShoppingBag, Instagram, Sparkles, Menu, X, HeartPulse, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz }) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Catálogo de Productos', href: '#catalogo' },
    { name: 'Beneficios de Salud', href: '#beneficios' },
    { name: 'Eje Intestino-Cerebro', href: '#serotonina' },
    { name: 'Guía de Consumo', href: '#guia' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-amber-900/10 transition-all">
      {/* Top micro-announcement banner */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium">100% Vivo, Artesanal y Sin Azúcar</span>
            <span className="hidden sm:inline text-emerald-300/80">• Fermentación natural de 24 horas</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-emerald-200">
              🛵 Domicilios en Montería y Cereté
            </span>
            <a
              href="https://www.instagram.com/kefir_vital_monteria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white font-medium transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@kefir_vital_monteria</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 flex items-center justify-center text-amber-50 shadow-md group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-2xl tracking-tight">K</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-bold text-xl tracking-wide text-stone-900">
                KÉFIR VITAL
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 tracking-wider uppercase">
                Montería
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium">
              Lácteos Probióticos & Salud Digestiva
            </p>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-700 hover:text-emerald-800 font-medium text-sm transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-900 hover:bg-amber-200/80 transition-all border border-amber-300/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Test Probiótico</span>
          </button>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/kefir_vital_monteria"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver Instagram @kefir_vital_monteria"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-stone-300 hover:border-pink-300 hover:bg-pink-50/50 text-stone-700 hover:text-pink-700 transition-all"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Instagram</span>
          </a>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm hover:shadow transition-all group active:scale-95"
            aria-label="Abrir carrito de compras"
          >
            <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Tu Pedido</span>
            {totalItems > 0 && (
              <span className="ml-1 bg-amber-400 text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full min-w-5 text-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#faf8f5] px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-800 hover:text-emerald-800 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Hacer Test: Descubre tu Kéfir Ideal</span>
            </button>
            <a
              href="https://www.instagram.com/kefir_vital_monteria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-xl border border-stone-300 text-stone-700"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>Seguir en @kefir_vital_monteria</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
