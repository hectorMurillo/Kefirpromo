import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'kefir-clasico-natural',
    name: 'Kéfir de Leche Tradicional Puro',
    category: 'kefir-clasico',
    subtitle: '100% Vivo, artesanal, cremoso y sin azúcar añadida',
    description: 'El auténtico kéfir fermentado 24 horas con búlgaros vivos y leche entera seleccionada de hatos locales de Córdoba.',
    longDescription: 'Nuestro kéfir insignia elaborado pacientemente durante 24 horas. Los nódulos vivos predigieren la lactosa y transforman la leche en un elixir cremoso, ligeramente ácido y con un cosquilleo efervescente natural. Sin espesantes, sin agua añadida y sin conservantes químicos.',
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=900&q=80',
    badge: 'Más Vendido en Montería',
    variants: [
      { id: 'kef-clas-1000', size: '1000 ml (1 Litro)', price: 24000, servings: '4 a 5 porciones' },
      { id: 'kef-clas-500', size: '500 ml', price: 14000, servings: '2 a 3 porciones' }
    ],
    tags: ['Sin Azúcar', '100% Probiótico Vivo', '0% Agua Añadida', 'Keto Friendly'],
    probioticCount: '+60 mil millones de UFC por porción',
    ingredients: [
      'Leche entera de vaca pasteurizada de Córdoba',
      'Cultivos y nódulos vivos de Kéfir (Lactobacillus kefiranofaciens, Leuconostoc, Lactococcus, levaduras benéficas)'
    ],
    nutritionPer100g: {
      calories: 62,
      protein: '3.6 g',
      carbs: '4.1 g (predigeridos)',
      sugars: '0 g azúcar añadido',
      fat: '3.3 g',
      calcium: '128 mg'
    },
    benefits: [
      'Alivia gastritis, reflujo y distensión abdominal',
      'Restaura la flora intestinal tras antibióticos',
      'Apto para personas intolerantes a la lactosa convencional',
      'Favorece la síntesis natural de serotonina en el intestino'
    ],
    usageTips: [
      'Tomar 150ml en ayunas para máxima colonización probiótica',
      'Mezclar en batidos con banano y semillas de chía',
      'Usar como base para granola y frutas frescas'
    ],
    rating: 4.9,
    reviewsCount: 148
  },
  {
    id: 'kefir-frutos-rojos',
    name: 'Kéfir Artesanal de Frutos Rojos Silvestres',
    category: 'kefir-sabores',
    subtitle: 'Con reducción casera de fresas, moras y arándanos',
    description: 'La combinación perfecta entre la frescura cremosa del kéfir y una compota artesanal de frutos del bosque sin azúcar refinada.',
    longDescription: 'Preparado con fruta natural seleccionada y cocinada a fuego lento para concentrar sus antioxidantes sin necesidad de azúcares procesados. Un sabor frutal vibrante, refrescante para el clima de Montería y cargado de probióticos activos.',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=900&q=80',
    badge: 'Favorito de Clientes',
    variants: [
      { id: 'kef-froj-1000', size: '1000 ml (1 Litro)', price: 26000, servings: '4 a 5 porciones' },
      { id: 'kef-froj-500', size: '500 ml', price: 15500, servings: '2 a 3 porciones' }
    ],
    tags: ['Sin Azúcar Refinada', 'Rico en Antioxidantes', 'Fruta 100% Real', 'Cremoso'],
    probioticCount: '+55 mil millones de UFC por porción',
    ingredients: [
      'Leche pasteurizada fermentada con nódulos de kéfir',
      'Reducción artesanal de fresa fresca, mora andina y arándanos',
      'Toque sutil de estevia pura de hoja / fruto del monje (opcional)'
    ],
    nutritionPer100g: {
      calories: 68,
      protein: '3.4 g',
      carbs: '6.2 g (provenientes de la fruta)',
      sugars: '0 g azúcares añadidos',
      fat: '3.1 g',
      calcium: '122 mg'
    },
    benefits: [
      'Poder antioxidante contra el envejecimiento celular',
      'Mejora el tránsito intestinal lento de manera suave',
      'Ideal como merienda saciante que no eleva picos de glucosa'
    ],
    usageTips: [
      'Servir bien frío con un toque de canela en polvo',
      'Hacer paletas heladas saludables para niños en Montería',
      'Acompañar con frutos secos como almendras o nueces'
    ],
    rating: 4.95,
    reviewsCount: 112
  },
  {
    id: 'kefir-corozo-cordobes',
    name: 'Kéfir Tradición de Corozo Costeño',
    category: 'kefir-sabores',
    subtitle: 'Edición especial con la fruta insignia de nuestra tierra',
    description: 'Exclusivo de Kéfir Vital Montería. Sabor autóctono con pulpa concentrada de corozo fresco de Córdoba.',
    longDescription: 'Rindiendo homenaje a las tradiciones del Sinú, infusionamos nuestro kéfir puro con reducción de corozo maduro. Su color rojizo púrpura natural y su contraste agridulce fascinante lo convierten en el preferido para hidratarse en las tardes calurosas de Montería.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    badge: 'Edición Sinú Autóctona',
    variants: [
      { id: 'kef-coro-1000', size: '1000 ml (1 Litro)', price: 26000, servings: '4 a 5 porciones' },
      { id: 'kef-coro-500', size: '500 ml', price: 15500, servings: '2 a 3 porciones' }
    ],
    tags: ['Sabor Monteriano', 'Superfruta Local', 'Sin Azúcar', '100% Natural'],
    probioticCount: '+55 mil millones de UFC por porción',
    ingredients: [
      'Kéfir de leche entera artesanal 24h',
      'Pulpa y extracto natural de corozo sinucano',
      'Cero colorantes artificiales, cero saborizantes'
    ],
    nutritionPer100g: {
      calories: 65,
      protein: '3.5 g',
      carbs: '5.8 g',
      sugars: '0 g azúcar añadido',
      fat: '3.2 g',
      calcium: '124 mg'
    },
    benefits: [
      'Altísimo contenido de antocianinas y polifenoles del corozo',
      'Fortalece defensas y salud cardiovascular',
      'Efecto prebiótico potenciado gracias a la fibra natural del corozo'
    ],
    usageTips: [
      'Disfrutar bien frío con hielo triturado estilo frappé',
      'Excelente reconstituyente después de entrenar en la Ronda del Sinú'
    ],
    rating: 5.0,
    reviewsCount: 89
  },
  {
    id: 'kefir-maracuya-tropical',
    name: 'Kéfir Silvestre de Maracuyá',
    category: 'kefir-sabores',
    subtitle: 'Acidez refrescante y aromática con pulpa seleccionada',
    description: 'La reina de las frutas tropicales combinada con los beneficios probióticos del kéfir cremoso.',
    longDescription: 'Para quienes aman las sensaciones frescas y cítricas. Preparamos una pulpa artesanal dessemillada de maracuyá que equilibra la sedosidad del kéfir con una explosión tropical inolvidable.',
    image: 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: 'kef-mara-1000', size: '1000 ml (1 Litro)', price: 26000, servings: '4 a 5 porciones' },
      { id: 'kef-mara-500', size: '500 ml', price: 15500, servings: '2 a 3 porciones' }
    ],
    tags: ['Cítrico Tropical', 'Vitamina C', 'Sin Conservantes', 'Refrescante'],
    probioticCount: '+50 mil millones de UFC por porción',
    ingredients: [
      'Kéfir de leche viva entera',
      'Pulpa pura de maracuyá colombiano',
      'Sin azúcar añadido'
    ],
    nutritionPer100g: {
      calories: 66,
      protein: '3.4 g',
      carbs: '5.9 g',
      sugars: '0 g azúcar añadido',
      fat: '3.2 g',
      calcium: '120 mg'
    },
    benefits: [
      'Aporte natural de vitamina C y antioxidantes',
      'Propiedades relajantes del maracuyá combinadas con el eje intestino-cerebro',
      'Ayuda a conciliar el sueño reparador tomado 1 hora antes de dormir'
    ],
    usageTips: [
      'Tomar un vasito frío por la noche como ritual de calma',
      'Excelente ingrediente para bowls tropicales con coco rallado'
    ],
    rating: 4.88,
    reviewsCount: 64
  },
  {
    id: 'yogur-griego-kefirado',
    name: 'Yogur Griego Probiótico Desuerado (Kéfirado)',
    category: 'yogur-griego',
    subtitle: 'Ultra espeso, 18g de proteína biodisponible por porción',
    description: 'Kéfir artesanal colado pacientemente en lienzos durante 12 horas hasta lograr una textura similar al queso crema suave.',
    longDescription: 'Un deleite gastronómico y nutricional. Al desuerar lentamente el kéfir concentramos la proteína y los cultivos vivos eliminando el suero líquido. Da como resultado una crema densa, saciante y libre de almidones, gomas o espesantes industriales.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
    badge: 'Alto en Proteína',
    variants: [
      { id: 'yg-griego-400', size: 'Tarro de Vidrio 400 g', price: 22000, servings: '3 a 4 porciones' },
      { id: 'yg-griego-800', size: 'Tarro Familiar 800 g', price: 39000, servings: '7 a 8 porciones' }
    ],
    tags: ['18g Proteína', 'Keto', 'Cero Espesantes', 'Ultra Saciante'],
    probioticCount: '+80 mil millones de UFC por tarro',
    ingredients: [
      'Leche entera de vaca pasteurizada',
      'Cultivos probióticos de kéfir concentrados',
      'Colado tradicional en lienzo de algodón natural'
    ],
    nutritionPer100g: {
      calories: 115,
      protein: '9.2 g (18.4g por porción de 200g)',
      carbs: '3.2 g',
      sugars: '0 g azúcar añadido',
      fat: '6.8 g (grasas saludables de leche de pastoreo)',
      calcium: '210 mg'
    },
    benefits: [
      'Aumenta la saciedad por más de 4 horas',
      'Favorece la recuperación muscular post-entrenamiento',
      'Ultra bajo en carbohidratos, ideal para protocolo cetogénico y diabéticos'
    ],
    usageTips: [
      'Untar sobre tostadas integrales con aguacate o huevo pochado',
      'Acompañar con arándanos y nueces del Brasil',
      'Usar como base para salsas saladas y aderezos saludables'
    ],
    rating: 4.97,
    reviewsCount: 165
  },
  {
    id: 'labneh-kefir-finas-hierbas',
    name: 'Labneh Probiótico con Aceite de Oliva y Finas Hierbas',
    category: 'dips-quesos',
    subtitle: 'Queso crema untable a base de kéfir curado',
    description: 'Delicada crema de queso probiótica aromatizada con orégano, romero, ajo suave confitado y aceite de oliva virgen extra.',
    longDescription: 'Inspirado en la milenaria receta del Medio Oriente adaptada a los lácteos vivos de Córdoba. El kéfir es filtrado intensamente hasta alcanzar la consistencia untable perfecta, luego macerado en aceite de oliva y hierbas aromáticas.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: 'labneh-250', size: 'Frasco de Vidrio 250 g', price: 18000, servings: '5 a 6 porciones de dip' }
    ],
    tags: ['Gourmet', 'Probiótico Untable', 'Aceite de Oliva Extra', 'Keto'],
    probioticCount: '+40 mil millones de UFC por frasco',
    ingredients: [
      'Kéfir de leche fermentada colada al punto de queso suave',
      'Aceite de oliva virgen extra prensado en frío',
      'Sal marina virgen',
      'Mezcla de hierbas aromáticas (romero, albahaca, orégano)',
      'Toque de pimienta rosa'
    ],
    nutritionPer100g: {
      calories: 145,
      protein: '8.1 g',
      carbs: '2.5 g',
      sugars: '0 g',
      fat: '11.5 g (grasas monoinsaturadas)',
      calcium: '190 mg'
    },
    benefits: [
      'Alternativa viva y sin químicos a los quesos crema industriales',
      'Grasas buenas que protegen el sistema cardiovascular',
      'Perfecto para compartir en tablas de picadas saludables en Montería'
    ],
    usageTips: [
      'Servir con galletas de arroz o bastones de zanahoria y apio',
      'Untar en arepas calientes de maíz morado o peto',
      'Acompañar tablas de jamones y aceitunas'
    ],
    rating: 4.92,
    reviewsCount: 78
  },
  {
    id: 'kumis-artesanal-vivo',
    name: 'Kumis Probiótico Tradicional',
    category: 'kefir-clasico',
    subtitle: 'El clásico de siempre, pero 100% vivo y saludable',
    description: 'Sabor suave, dulce natural de la leche pasteurizada con notas lácticas acariciantes.',
    longDescription: 'Rescatamos la textura sedosa del kumis tradicional colombiano pero eliminando las toneladas de azúcar que la industria añade. Fermentado suavemente para toda la familia.',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: 'kum-1000', size: '1000 ml (1 Litro)', price: 23000, servings: '4 a 5 porciones' },
      { id: 'kum-500', size: '500 ml', price: 13500, servings: '2 a 3 porciones' }
    ],
    tags: ['Sabor Familiar', 'Baja Acidez', 'Apto Niños', 'Cremoso'],
    probioticCount: '+45 mil millones de UFC',
    ingredients: [
      'Leche pasteurizada de Córdoba',
      'Cultivos lácticos seleccionados y búlgaros de baja acidez'
    ],
    nutritionPer100g: {
      calories: 63,
      protein: '3.5 g',
      carbs: '4.5 g',
      sugars: '0 g añadidos',
      fat: '3.3 g',
      calcium: '125 mg'
    },
    benefits: [
      'Excelente iniciación para quienes les cuesta la acidez del kéfir puro',
      'Delicioso para las loncheras escolares en Montería',
      'Favorece la dentadura y huesos fuertes en niños y adultos mayores'
    ],
    usageTips: [
      'Servir con una pizca de canela y hojuelas de avena',
      'Tomar a media mañana como energizante natural'
    ],
    rating: 4.86,
    reviewsCount: 52
  },
  {
    id: 'kit-nodulos-kefir-vivos',
    name: 'Kit Probiótico: Nódulos de Kéfir Vivos para Cultivo en Casa',
    category: 'kits-nodulos',
    subtitle: 'Comienza tu propia fábrica de probióticos en Montería',
    description: '30 gramos de búlgaros activos y robustos aclimatados al clima cálido de Córdoba, listos para reproducirse.',
    longDescription: '¿Quieres fermentar tu propio kéfir todos los días? Te entregamos nódulos de kéfir 100% vivos y saludables, alimentados con leche pura de vaca. Incluye tarro de vidrio especial, colador libre de metales, manta transpirable y manual impreso con guía de cuidados paso a paso.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    badge: 'Kits Limitados',
    variants: [
      { id: 'kit-nodulos-starter', size: 'Kit Completo + Soporte WhatsApp', price: 35000, servings: 'Ilimitadas (se reproducen para siempre)' }
    ],
    tags: ['Cultivo Infinito', 'Autosuficiencia', 'Incluye Asesoría', 'Nódulos Vivos'],
    probioticCount: 'Miles de millones de cepas en continuo crecimiento',
    ingredients: [
      'Granos vivos de kéfir de leche en medio protector lácteo',
      'Frasco de vidrio de boca ancha esterilizado',
      'Colador plástico libre de BPA especial para kéfir',
      'Manta de lino para respiración aeróbica',
      'Manual físico a color con recetas y solución de dudas'
    ],
    nutritionPer100g: {
      calories: 0,
      protein: '0 g',
      carbs: '0 g',
      sugars: '0 g',
      fat: '0 g',
      calcium: 'N/A'
    },
    benefits: [
      'Produce hasta 1 litro de kéfir diario de por vida',
      'Los nódulos crecen y puedes compartirlos con familiares y amigos',
      'Acompañamiento personalizado por WhatsApp para que nunca se te dañe'
    ],
    usageTips: [
      'Fermentar a temperatura ambiente resguardado de la luz directa',
      'Cambiar la leche cada 24 horas para mantenerlos vigorosos'
    ],
    rating: 4.98,
    reviewsCount: 94
  },
  {
    id: 'pack-salud-digestiva-semanal',
    name: 'Pack Bienestar Semanal Montería (4 Botellas x 500ml)',
    category: 'todos',
    subtitle: 'El plan completo para regenerar tu microbiota en 28 días',
    description: 'Incluye: 2 Kéfir Tradicional + 1 Kéfir Frutos Rojos + 1 Kéfir Corozo Costeño + Guía de consumo semanal.',
    longDescription: 'Diseñado para quienes inician su camino probiótico o quieren mantener abastecida su nevera toda la semana. Disfrutas de la variedad de sabores sin aburrirte y aseguras una ingesta diaria constante de probióticos vivos.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
    badge: 'Ahorra $7.000 COP',
    variants: [
      { id: 'pack-semanal-4b', size: '4 Botellas x 500 ml c/u', price: 52000, servings: '10 a 12 días de tratamiento' }
    ],
    tags: ['Ahorro Especial', 'Variedad de Sabores', 'Envío Prioritario', 'Regalo Guía Digital'],
    probioticCount: '+220 mil millones de UFC en total',
    ingredients: [
      '2 botellas de 500ml Kéfir Clásico Puro',
      '1 botella de 500ml Kéfir Frutos Rojos Silvestres',
      '1 botella de 500ml Kéfir Tradición de Corozo',
      'Folleto impreso "Protocolo de 21 días para desinflamar el colon"'
    ],
    nutritionPer100g: {
      calories: 64,
      protein: '3.5 g',
      carbs: '4.8 g promedio',
      sugars: '0 g añadidos',
      fat: '3.2 g',
      calcium: '125 mg'
    },
    benefits: [
      'Mejor precio por mililitro',
      'Combinación de probióticos y antioxidantes naturales',
      'Entrega directa en tu casa en Montería en bolsa térmica refrigerada'
    ],
    usageTips: [
      'Tomar un vaso de 150ml cada mañana al levantarte',
      'Rotar los sabores para estimular la variedad de tu microbiota'
    ],
    rating: 5.0,
    reviewsCount: 82
  }
];
