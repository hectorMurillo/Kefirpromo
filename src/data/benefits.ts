export interface TimelineStep {
  day: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
}

export interface ComparisonRow {
  aspect: string;
  kefirVital: string;
  yogurtIndustrial: string;
  winner: 'kefir' | 'tie' | 'yogurt';
}

export interface ProbioticStrain {
  name: string;
  type: 'bacteria' | 'yeast';
  role: string;
  foundIn: string;
}

export const GUT_TIMELINE: TimelineStep[] = [
  {
    day: 'Día 1 - 3',
    title: 'Aclimatación y Suavizado Gástrico',
    description: 'Los ácidos grasos de cadena corta y las bacterias lácticas calman la acidez estomacal y comienzan a reducir la inflamación de la mucosa digestiva.',
    icon: 'Sparkles',
    metric: '-40% sensación de pesadez'
  },
  {
    day: 'Día 7',
    title: 'Regulación del Tránsito Intestinal',
    description: 'Disminuyen los gases molestos y la distensión abdominal. Las deposiciones se vuelven regulares y sin dolor gracias a la repoblación de bacterias benéficas.',
    icon: 'Activity',
    metric: 'Digestión ligera y ágil'
  },
  {
    day: 'Día 14',
    title: 'Activación del Eje Intestino-Cerebro',
    description: 'La síntesis de serotonina y GABA en el intestino empieza a reflejarse en un descanso más profundo, menor ansiedad por azúcar y un ánimo más estable.',
    icon: 'Smile',
    metric: '+90% producción de serotonina'
  },
  {
    day: 'Día 30',
    title: 'Barrera Inmune Fortalecida',
    description: 'El kefiran (polisacárido único del kéfir) refuerza las paredes del colon, impidiendo el paso de toxinas. Menos alergias cutáneas y mayor vitalidad diaria.',
    icon: 'ShieldCheck',
    metric: 'Defensas al 100%'
  },
  {
    day: 'Día 60+',
    title: 'Microbiota Plenamente Restaurada',
    description: 'Tu flora intestinal alcanza una diversidad óptima. Asimilación máxima de calcio, hierro y vitaminas del complejo B. Piel más limpia y energía sostenida.',
    icon: 'HeartHandshake',
    metric: 'Equilibrio biológico total'
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: 'Cepas probióticas vivas',
    kefirVital: '+50 a 60 cepas de bacterias y levaduras activas',
    yogurtIndustrial: 'Solo 2 cepas (L. bulgaricus y S. thermophilus)',
    winner: 'kefir'
  },
  {
    aspect: 'Azúcar añadido',
    kefirVital: '0% de azúcar refinado o jarabes industriales',
    yogurtIndustrial: 'Hasta 18g a 24g de azúcar por vasito (4 cucharaditas)',
    winner: 'kefir'
  },
  {
    aspect: 'Tiempo de fermentación',
    kefirVital: '24 horas lentas con nódulos vivos tradicionales',
    yogurtIndustrial: '3 a 6 horas aceleradas industrialmente',
    winner: 'kefir'
  },
  {
    aspect: 'Resistencia a ácidos del estómago',
    kefirVital: 'Las levaduras y bacterias del kéfir colonizan el colon',
    yogurtIndustrial: 'La gran mayoría muere al contacto con el ácido gástrico',
    winner: 'kefir'
  },
  {
    aspect: 'Digestibilidad para intolerantes',
    kefirVital: 'Prácticamente libre de lactosa (consumida por los nódulos)',
    yogurtIndustrial: 'A menudo causa gases, pesadez e inflamación',
    winner: 'kefir'
  },
  {
    aspect: 'Espesantes y aditivos',
    kefirVital: '100% Leche + Cultivos vivos. Sin almidones ni gomas',
    yogurtIndustrial: 'Goma xantana, almidón modificado, gelatina y colorantes',
    winner: 'kefir'
  },
  {
    aspect: 'Origen de la leche',
    kefirVital: 'Leche entera de pastoreo de hatos ganaderos de Córdoba',
    yogurtIndustrial: 'Leche reconstituida en polvo con sueros industriales',
    winner: 'kefir'
  }
];

export const PROBIOTIC_STRAINS: ProbioticStrain[] = [
  {
    name: 'Lactobacillus kefiranofaciens',
    type: 'bacteria',
    role: 'Produce el polisacárido kefiran; potente antimicrobiano natural contra patógenos como E. coli y Salmonella.',
    foundIn: 'Exclusivo del Kéfir real'
  },
  {
    name: 'Bifidobacterium bifidum',
    type: 'bacteria',
    role: 'Regenera la pared del colon, combate el síndrome de intestino irritable y estimula las defensas.',
    foundIn: 'Kéfir Tradicional y Yogur Griego'
  },
  {
    name: 'Lactobacillus acidophilus',
    type: 'bacteria',
    role: 'Reduce la inflamación de la mucosa gástrica y predigiere la lactosa para que no te caiga pesado.',
    foundIn: 'Todas nuestras bebidas vivas'
  },
  {
    name: 'Saccharomyces kefir & Kluyveromyces',
    type: 'yeast',
    role: 'Levaduras benéficas simbióticas que producen vitaminas B12, B1, folato y combaten hongos como Candida albicans.',
    foundIn: 'Nódulos vivos de Kéfir Vital'
  },
  {
    name: 'Lactobacillus plantarum',
    type: 'bacteria',
    role: 'Favorece la absorción de hierro y magnesio, además de regular el colesterol y los lípidos en sangre.',
    foundIn: 'Kéfir Frutal y Tradicional'
  }
];

export const HEALTH_PILLARS = [
  {
    id: 'serotonina',
    title: 'El 90% de tu serotonina nace aquí',
    subtitle: 'Conexión Eje Intestino-Cerebro',
    description: 'La ciencia médica ha comprobado que el tracto digestivo tiene más de 100 millones de neuronas. Las bacterias vivas de Kéfir Vital estimulan la síntesis de serotonina y dopamina, mejorando tu estado de ánimo, claridad mental y calidad del sueño.',
    stat: '90%',
    statLabel: 'de la serotonina corporal se produce en el intestino sano'
  },
  {
    id: 'lactosa',
    title: 'Disfruta los lácteos sin dolor ni inflamación',
    subtitle: 'Predigestión enzimática de 24 horas',
    description: 'Durante la lenta fermentación de 24 horas, las colonias de búlgaros se alimentan del azúcar de la leche (lactosa), convirtiéndola en ácido láctico beneficioso y enzimas digestivas. Por eso, miles de monterianos intolerantes a la leche disfrutan Kéfir Vital sin gases ni malestar.',
    stat: '99%',
    statLabel: 'de la lactosa es predigerida por los nódulos vivos'
  },
  {
    id: 'inmunidad',
    title: 'Tu primer escudo contra virus e infecciones',
    subtitle: 'El poder único del Kefiran',
    description: 'El 70% de las células inmunes de tu cuerpo patrullan a lo largo del intestino. El polisacárido kefiran y los péptidos bioactivos del kéfir fortalecen las uniones estrechas del epitelio, impidiendo la entrada de alérgenos y bacterias nocivas al torrente sanguíneo.',
    stat: '70%',
    statLabel: 'del sistema inmune humano reside en el tracto intestinal'
  },
  {
    id: 'nutrientes',
    title: 'Calcio y proteínas biodisponibles al instante',
    subtitle: 'Nutrición superior para huesos y músculos',
    description: 'El kéfir no solo aporta calcio, fósforo y magnesio: gracias a la acción enzimática y la presencia de vitamina K2 natural, estos minerales son dirigidos directamente a tus huesos y dientes en lugar de acumularse en las arterias.',
    stat: '+50',
    statLabel: 'cepas probióticas activas colonizando tu microbiota'
  }
];
