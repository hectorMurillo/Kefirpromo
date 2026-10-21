export type ProductCategory = 
  | 'todos'
  | 'kefir-clasico'
  | 'kefir-sabores'
  | 'yogur-griego'
  | 'dips-quesos'
  | 'kits-nodulos';

export interface ProductVariant {
  id: string;
  size: string; // e.g. "1000 ml (1 Litro)" or "500 ml"
  price: number; // in COP
  servings: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  variants: ProductVariant[];
  tags: string[]; // e.g. ["Sin Azúcar", "100% Vivo", "Keto", "+50 Cepas"]
  badge?: string; // e.g. "Más Popular", "Favorito Montería", "Edición Especial"
  probioticCount: string; // e.g. "+50 mil millones de UFC"
  ingredients: string[];
  nutritionPer100g: {
    calories: number;
    protein: string;
    carbs: string;
    sugars: string; // "0g añadidos"
    fat: string;
    calcium: string;
  };
  benefits: string[];
  usageTips: string[];
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string; // e.g. "El Recreo, Montería"
  avatar: string;
  text: string;
  rating: number;
  productBought: string;
  verified: boolean;
}

export interface HealthBenefit {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scientificFact: string;
  highlightStat: string;
  highlightLabel: string;
}
