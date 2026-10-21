import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  Truck,
  Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCOP, MONTERIA_NEIGHBORHOODS, generateWhatsAppOrderMessage } from '../utils/formatters';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalPrice, 
    totalItems,
    clearCart 
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [neighborhood, setNeighborhood] = useState(MONTERIA_NEIGHBORHOODS[0]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Nequi / Daviplata');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const encodedMessage = generateWhatsAppOrderMessage({
      cart,
      totalPrice,
      customerName,
      neighborhood,
      address,
      phone,
      paymentMethod,
      notes
    });

    const whatsappUrl = `https://wa.me/573012891963?text=${encodedMessage}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/60 backdrop-blur-xs animate-in fade-in">
      {/* Click outside to close */}
      <div 
        className="flex-1 hidden sm:block" 
        onClick={() => setIsCartOpen(false)}
      />

      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-200">
        
        {/* Drawer Header */}
        <div className="p-5 bg-[#faf8f5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                Tu Pedido de Lácteos Vivos
              </h3>
              <p className="text-xs text-stone-500">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en tu canasta
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors"
            aria-label="Cerrar pedido"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-5 space-y-6">
          
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-lg text-stone-800">
                Tu canasta está vacía
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Descubre nuestra variedad de kéfir artesanal, yogur griego y quesos untables en el catálogo.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900 transition-colors"
              >
                Ver Catálogo de Productos
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-bold uppercase tracking-wider">
                  <span>Productos seleccionados</span>
                  <button
                    onClick={clearCart}
                    className="text-stone-400 hover:text-rose-600 transition-colors lowercase font-normal"
                  >
                    Vaciar todo
                  </button>
                </div>

                {cart.map((item) => {
                  const subtotal = item.variant.price * item.quantity;

                  return (
                    <div
                      key={`${item.product.id}-${item.variant.id}`}
                      className="p-3.5 rounded-2xl bg-[#faf8f5] border border-stone-200/80 flex items-center gap-3.5"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h5 className="font-serif font-bold text-xs sm:text-sm text-stone-900 truncate">
                          {item.product.name}
                        </h5>
                        <p className="text-[11px] text-stone-500">
                          {item.variant.size} • {formatCOP(item.variant.price)} c/u
                        </p>
                        <div className="font-bold text-xs text-emerald-900 mt-1">
                          {formatCOP(subtotal)}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant.id)}
                          className="text-stone-400 hover:text-rose-600 p-1"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-stone-100 text-stone-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                            className="w-6 h-6 rounded flex items-center justify-center hover:bg-stone-100 text-stone-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Delivery Data Form */}
              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4 pt-4 border-t border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Datos de Entrega en Montería</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">
                      Nombre completo: *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ej. Ana Lucía Pérez"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-stone-600 font-semibold mb-1">
                        Teléfono / WhatsApp: *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="300 123 4567"
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-600 font-semibold mb-1">
                        Barrio en Montería: *
                      </label>
                      <select
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className="w-full px-2 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                      >
                        {MONTERIA_NEIGHBORHOODS.map((barrio) => (
                          <option key={barrio} value={barrio}>
                            {barrio}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">
                      Dirección exacta: *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ej. Carrera 14 # 62-40 Edificio / Casa"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">
                      Método de pago preferido:
                    </label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                    >
                      <option value="Nequi / Daviplata">Nequi o Daviplata (Transferencia)</option>
                      <option value="Bancolombia QR / Transferencia">Bancolombia QR / Llave</option>
                      <option value="Contra entrega en efectivo">Contra entrega en efectivo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-600 font-semibold mb-1">
                      Notas especiales o preferencias de entrega:
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Entregar después de las 2:00 PM o timbrar en apto 302"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-700"
                    />
                  </div>
                </div>
              </form>
            </>
          )}

        </div>

        {/* Drawer Sticky Footer with Checkout Button */}
        {cart.length > 0 && (
          <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-stone-500">
                Total estimado
              </span>
              <span className="font-serif font-bold text-2xl text-emerald-950">
                {formatCOP(totalPrice)}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
              <Truck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Domicilio en Montería coordinado directamente por WhatsApp</span>
            </div>

            <button
              type="submit"
              form="checkout-form"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-98 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>
                {isSubmitting ? 'Preparando WhatsApp...' : 'Enviar Pedido por WhatsApp'}
              </span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
