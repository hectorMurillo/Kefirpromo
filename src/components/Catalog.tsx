import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Plus, 
  Check, 
  Filter, 
  Eye, 
  Milk, 
  ShieldCheck, 
  Flame, 
  Layers,
  Heart
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory, ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/formatters';

export const Catalog: React.FC = () => {
  const { addToCart, setSelectedProductForModal } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedVariants, setSelectedVariants] = useState<Record<string, ProductVariant>>({});
  const [addedItemSuccess, setAddedItemSuccess] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Productos', icon: Layers },
    { id: 'kefir-clasico', label: 'Kéfir Tradicional & Kumis', icon: Milk },
    { id: 'kefir-sabores', label: 'Sabores Frutales Naturales', icon: Sparkles },
    { id: 'yogur-griego', label: 'Yogur Griego Desuerado', icon: ShieldCheck },
    { id: 'dips-quesos', label: 'Quesos Untables & Dips', icon: Heart },
    { id: 'kits-nodulos', label: 'Kits & Nódulos para Hogar', icon: Flame },
  ];

  const quickTags = [
    { id: 'all', label: 'Todos los atributos' },
    { id: 'Sin Azúcar', label: '🌿 0% Azúcar Añadido' },
    { id: 'Alto en Proteína', label: '💪 Rico en Proteína' },
    { id: 'Keto Friendly', label: '🥑 Apto Dieta Keto' },
    { id: 'Sabor Monteriano', label: '🌴 Fruta de Córdoba' },
  ];

  // Helper to get active variant for each product
  const getActiveVariant = (product: Product): ProductVariant => {
    return selectedVariants[product.id] || product.variants[0];
  };

  const handleVariantChange = (productId: string, variant: ProductVariant) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const variant = getActiveVariant(product);
    addToCart(product, variant, 1);
    
    setAddedItemSuccess(product.id);
    setTimeout(() => {
      setAddedItemSuccess(null);
    }, 2000);
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category match
      if (selectedCategory !== 'todos' && product.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag !== 'all') {
        const hasTag = product.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()));
        if (!hasTag) return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSub = product.subtitle.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesIng = product.ingredients.some(ing => ing.toLowerCase().includes(query));
        const matchesBenefit = product.benefits.some(ben => ben.toLowerCase().includes(query));
        if (!matchesName && !matchesSub && !matchesDesc && !matchesIng && !matchesBenefit) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <section id="catalogo" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Catalog Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>Catálogo Interactivo de Lácteos Vivos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
            Nuestros Lácteos Probióticos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl font-light">
            Elaborados artesanalmente en Montería sin agua añadida, sin espesantes industriales y 100% libres de azúcar refinada.
          </p>
        </div>

        {/* Live Search bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por sabor, beneficio, ingrediente..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold px-1"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="py-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProductCategory)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Quick Attribute Tags Filter */}
      <div className="pb-8 flex items-center gap-2 flex-wrap text-xs">
        <span className="text-stone-500 font-medium flex items-center gap-1 mr-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Filtrar por:</span>
        </span>
        {quickTags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setSelectedTag(tag.id)}
            className={`px-3 py-1 rounded-full text-xs transition-colors ${
              selectedTag === tag.id
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center rounded-3xl bg-white border border-stone-200 p-8">
          <p className="text-stone-500 text-sm">
            No encontramos productos con los criterios de búsqueda <strong>"{searchQuery}"</strong>.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('todos');
              setSelectedTag('all');
            }}
            className="mt-4 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg hover:bg-emerald-900 transition-colors"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const activeVariant = getActiveVariant(product);

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProductForModal(product)}
                className="group rounded-3xl bg-white border border-stone-200/90 hover:border-emerald-600/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-emerald-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-xs">
                        {product.badge}
                      </div>
                    )}

                    {/* Probiotic count */}
                    <div className="absolute bottom-3 left-3 bg-amber-400 text-stone-950 font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-lg shadow-sm">
                      {product.probioticCount}
                    </div>

                    {/* Quick view button overlay */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProductForModal(product);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-700 hover:text-emerald-900 hover:bg-white flex items-center justify-center shadow-md transition-transform active:scale-90"
                      title="Vista Rápida"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    {/* Tags row */}
                    <div className="flex flex-wrap gap-1.5">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-500 line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Variant / Size Selector Buttons */}
                    {product.variants.length > 1 && (
                      <div className="pt-2">
                        <label className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-1.5">
                          Selecciona tamaño:
                        </label>
                        <div className="grid grid-cols-2 gap-1.5">
                          {product.variants.map((v) => (
                            <button
                              key={v.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVariantChange(product.id, v);
                              }}
                              className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                                activeVariant.id === v.id
                                  ? 'bg-emerald-50 border-emerald-700 text-emerald-900 font-bold ring-1 ring-emerald-700'
                                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                              }`}
                            >
                              <span>{v.size.split(' ')[0]} {v.size.split(' ')[1] || ''}</span>
                              <span className="block text-[10px] text-stone-500 font-normal">
                                {formatCOP(v.price)}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Price & Add to Cart button */}
                <div className="p-5 pt-0 mt-3 border-t border-stone-100">
                  <div className="flex items-center justify-between pt-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                        Precio
                      </span>
                      <span className="font-serif font-bold text-xl text-stone-950">
                        {formatCOP(activeVariant.price)}
                      </span>
                      <span className="text-[10px] text-stone-500 block">
                        {activeVariant.servings}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(product, e)}
                      className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                        addedItemSuccess === product.id
                          ? 'bg-emerald-600 text-white'
                          : 'bg-emerald-800 hover:bg-emerald-900 text-white hover:shadow'
                      }`}
                    >
                      {addedItemSuccess === product.id ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Pedir</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Bottom callout note for WhatsApp customization */}
      <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-200/60 flex items-center justify-center text-amber-900 shrink-0 font-bold">
            🥛
          </div>
          <div>
            <h4 className="font-bold text-sm text-stone-900">¿Quieres un pedido especial o presentación familiar en Montería?</h4>
            <p className="text-xs text-stone-600">Preparamos lotes personalizados para eventos saludables, clínicas y familias.</p>
          </div>
        </div>
        <a
          href="https://wa.me/573012891963?text=Hola%20K%C3%A9fir%20Vital%20Monter%C3%ADa,%20quisiera%20consultar%20por%20un%20pedido%20especial"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-4 py-2 text-xs font-bold rounded-xl bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
        >
          Consultar por WhatsApp
        </a>
      </div>

    </section>
  );
};
