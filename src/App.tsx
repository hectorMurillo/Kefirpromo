import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HealthBenefits } from './components/HealthBenefits';
import { Catalog } from './components/Catalog';
import { DosageGuide } from './components/DosageGuide';
import { RecipesSection } from './components/RecipesSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { ProbioticQuiz } from './components/ProbioticQuiz';
import { MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';

const MainLayout: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-stone-800 antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Sticky Header */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />
        <HealthBenefits />
        <Catalog />
        <RecipesSection />
        <DosageGuide />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal />
      <CartDrawer />
      <ProbioticQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Floating Action Button Bar on Mobile/Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Quiz Trigger */}
        <button
          onClick={() => setIsQuizOpen(true)}
          className="hidden sm:flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl font-bold text-xs transition-all active:scale-95 border border-amber-500/50"
          title="Descubre tu Kéfir Ideal"
        >
          <Sparkles className="w-4 h-4 text-stone-900" />
          <span>Test Probiótico</span>
        </button>

        {/* Floating WhatsApp Direct Chat */}
        <a
          href="https://wa.me/573012891963?text=Hola%20K%C3%A9fir%20Vital%20Monter%C3%ADa!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20de%20k%C3%A9fir%20artesanal"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-transform hover:scale-105 active:scale-95 group"
          title="Escribir por WhatsApp a Kéfir Vital Montería"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        </a>

        {/* Floating Cart Trigger on Mobile */}
        {totalItems > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="sm:hidden relative w-13 h-13 rounded-full bg-emerald-900 text-white flex items-center justify-center shadow-xl active:scale-95"
            aria-label="Ver pedido"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-950 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}
