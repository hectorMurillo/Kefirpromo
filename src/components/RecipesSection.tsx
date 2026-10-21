import React, { useState } from 'react';
import { Utensils, Clock, Sparkles, ChefHat, Check } from 'lucide-react';

interface Recipe {
  id: string;
  name: string;
  category: string;
  time: string;
  difficulty: string;
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  kefirUsed: string;
}

const RECIPES: Recipe[] = [
  {
    id: 'smoothie-corozo',
    name: 'Batido Energético Sinucano de Corozo',
    category: 'Desayuno / Post-Entreno',
    time: '5 minutos',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80',
    description: 'Refrescante, antioxidante y perfecto para iniciar la mañana activa en Montería.',
    ingredients: [
      '200ml de Kéfir Tradición de Corozo Kéfir Vital',
      '1 banano maduro congelado',
      '1 cucharada de semillas de chía',
      'Hielo al gusto',
      'Un toque sutil de canela molida'
    ],
    instructions: [
      'Coloca todos los ingredientes en la licuadora.',
      'Licúa a velocidad media durante 45 segundos hasta obtener una consistencia espumosa.',
      'Sirve inmediatamente bien frío y decora con rodajas de banano.'
    ],
    kefirUsed: 'Kéfir Tradición de Corozo'
  },
  {
    id: 'overnight-oats',
    name: 'Avena Trasnochada con Yogur Griego Kéfirado',
    category: 'Desayuno Alto en Proteína',
    time: '5 min prep (reposar noche anterior)',
    difficulty: 'Muy Fácil',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    description: 'Desayuno saciante con más de 22g de proteína natural sin suplementos artificiales.',
    ingredients: [
      '150g de Yogur Griego Probiótico Desuerado Kéfir Vital',
      '1/2 taza de hojuelas de avena entera',
      '1 cucharadita de semillas de linaza',
      'Frutos rojos o arándanos frescos',
      '1 cucharadita de miel de abejas pura o estevia'
    ],
    instructions: [
      'En un tarro de vidrio, mezcla la avena y el yogur griego kéfirado.',
      'Tapa y guarda en la nevera durante toda la noche.',
      'Por la mañana, agrega los frutos rojos frescos por encima y disfruta.'
    ],
    kefirUsed: 'Yogur Griego Probiótico Desuerado'
  },
  {
    id: 'tostada-labneh',
    name: 'Tostada Campesina con Labneh & Aguacate',
    category: 'Cena Ligera o Merienda',
    time: '8 minutos',
    difficulty: 'Fácil',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    description: 'Una alternativa digestiva y probiótica a los quesos comerciales untables.',
    ingredients: [
      '2 cucharadas generosas de Labneh Probiótico Kéfir Vital',
      '2 rebanadas de pan de masa madre o tostadas integrales',
      '1/2 aguacate hass cortado en láminas',
      'Tomates cherry en mitades',
      'Pizca de sal marina y semillas de ajonjolí'
    ],
    instructions: [
      'Tuesta el pan hasta que quede dorado y crujiente.',
      'Unta una capa abundante de Labneh de finas hierbas.',
      'Distribuye el aguacate y los tomates cherry.',
      'Corona con sal marina y unas gotas de aceite de oliva.'
    ],
    kefirUsed: 'Labneh Probiótico con Finas Hierbas'
  }
];

export const RecipesSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(RECIPES[0]);

  return (
    <section className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <ChefHat className="w-3.5 h-3.5 text-emerald-700" />
            <span>Cocina Saludable en Montería</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Recetas Fáciles & Deliciosas con Kéfir Vital
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-light">
            Aprende a integrar probióticos vivos en tus desayunos, meriendas y cenas sin complicarte.
          </p>
        </div>

        {/* Recipe Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {RECIPES.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className={`p-4 rounded-2xl text-left border transition-all flex items-center gap-4 ${
                selectedRecipe.id === recipe.id
                  ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-md'
                  : 'bg-white/70 border-stone-200 hover:border-stone-300'
              }`}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-16 h-16 rounded-xl object-cover shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  {recipe.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-stone-900 truncate">
                  {recipe.name}
                </h4>
                <span className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> {recipe.time}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Recipe Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-stone-100">
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-emerald-900/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl">
              Usa: {selectedRecipe.kefirUsed}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-left">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                {selectedRecipe.category} • {selectedRecipe.time}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {selectedRecipe.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {selectedRecipe.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                  Ingredientes:
                </h5>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-stone-900 mb-2">
                  Preparación rápida:
                </h5>
                <ol className="space-y-2 text-xs text-stone-600">
                  {selectedRecipe.instructions.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
              >
                <span>Pedir {selectedRecipe.kefirUsed} en el catálogo</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
