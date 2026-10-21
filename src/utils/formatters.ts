import { CartItem } from '../types';

export const formatCOP = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
};

export const MONTERIA_NEIGHBORHOODS = [
  'La Castellana',
  'El Recreo',
  'Monteverde',
  'Pasatiempo',
  'La Floresta',
  'Costa de Oro',
  'El Bosque',
  'Alamedas / Ronda del Sinú',
  'Centro de Montería',
  'Cantaclaro',
  'Mogambo / Sur',
  'Villa del Rosario',
  'Cereté (Área metropolitana)',
  'Recoger en punto de entrega (Montería)'
];

export const generateWhatsAppOrderMessage = ({
  cart,
  totalPrice,
  customerName,
  neighborhood,
  address,
  phone,
  paymentMethod,
  notes
}: {
  cart: CartItem[];
  totalPrice: number;
  customerName: string;
  neighborhood: string;
  address: string;
  phone: string;
  paymentMethod: string;
  notes?: string;
}): string => {
  let message = `🥛 *¡HOLA KÉFIR VITAL MONTERÍA!* ✨\n`;
  message += `Quisiera hacer el siguiente pedido de lácteos probióticos artesanales:\n\n`;

  cart.forEach((item, index) => {
    const subtotal = item.variant.price * item.quantity;
    message += `${index + 1}. *${item.product.name}*\n`;
    message += `   • Presentación: ${item.variant.size}\n`;
    message += `   • Cantidad: ${item.quantity} und\n`;
    message += `   • Subtotal: ${formatCOP(subtotal)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:* ${formatCOP(totalPrice)}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  message += `📍 *DATOS DE ENTREGA EN MONTERÍA:*\n`;
  message += `• *Nombre:* ${customerName || 'Cliente'}\n`;
  if (phone) message += `• *Teléfono:* ${phone}\n`;
  message += `• *Barrio/Zona:* ${neighborhood || 'Montería'}\n`;
  if (address) message += `• *Dirección:* ${address}\n`;
  message += `• *Método de pago preferido:* ${paymentMethod}\n`;
  if (notes) message += `• *Notas/Indicaciones:* ${notes}\n`;

  message += `\n¿Tienen disponibilidad para despacho hoy? ¡Muchas gracias! 🌿🥛`;

  return encodeURIComponent(message);
};
