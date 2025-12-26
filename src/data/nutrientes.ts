export interface Nutriente {
  simbolo: string;
  nome: string;
  funcao: string;
  categoria?: string;
  tipo: 'macro' | 'micro';
  slug: string;
  hasPage?: boolean;
}

export const macronutrientes: Nutriente[] = [
  {
    simbolo: "N",
    nome: "Nitrogênio",
    funcao: "Essencial para crescimento vegetativo e síntese de proteínas",
    categoria: "Primário",
    tipo: 'macro',
    slug: 'nitrogenio',
    hasPage: true,
  },
  {
    simbolo: "P",
    nome: "Fósforo",
    funcao: "Desenvolvimento radicular e transferência de energia (ATP)",
    categoria: "Primário",
    tipo: 'macro',
    slug: 'fosforo',
    hasPage: true,
  },
  {
    simbolo: "K",
    nome: "Potássio",
    funcao: "Regulação hídrica e resistência a doenças",
    categoria: "Primário",
    tipo: 'macro',
    slug: 'potassio',
    hasPage: true,
  },
  {
    simbolo: "Ca",
    nome: "Cálcio",
    funcao: "Estrutura celular e desenvolvimento de raízes",
    categoria: "Secundário",
    tipo: 'macro',
    slug: 'calcio',
    hasPage: true,
  },
  {
    simbolo: "Mg",
    nome: "Magnésio",
    funcao: "Componente central da clorofila e ativação enzimática",
    categoria: "Secundário",
    tipo: 'macro',
    slug: 'magnesio',
    hasPage: true,
  },
  {
    simbolo: "S",
    nome: "Enxofre",
    funcao: "Síntese de aminoácidos e proteínas essenciais",
    categoria: "Secundário",
    tipo: 'macro',
    slug: 'enxofre',
    hasPage: true,
  },
];

export const micronutrientes: Nutriente[] = [
  {
    simbolo: "B",
    nome: "Boro",
    funcao: "Floração, frutificação e transporte de açúcares",
    tipo: 'micro',
    slug: 'boro',
    hasPage: true,
  },
  {
    simbolo: "Cl",
    nome: "Cloro",
    funcao: "Fotossíntese e regulação osmótica",
    tipo: 'micro',
    slug: 'cloro',
    hasPage: true,
  },
  {
    simbolo: "Cu",
    nome: "Cobre",
    funcao: "Fotossíntese e metabolismo de lignina",
    tipo: 'micro',
    slug: 'cobre',
    hasPage: true,
  },
  {
    simbolo: "Fe",
    nome: "Ferro",
    funcao: "Síntese de clorofila e transporte de elétrons",
    tipo: 'micro',
    slug: 'ferro',
    hasPage: true,
  },
  {
    simbolo: "Mn",
    nome: "Manganês",
    funcao: "Fotossíntese e ativação de enzimas",
    tipo: 'micro',
    slug: 'manganes',
    hasPage: true,
  },
  {
    simbolo: "Mo",
    nome: "Molibdênio",
    funcao: "Fixação de nitrogênio e redução de nitrato",
    tipo: 'micro',
    slug: 'molibdenio',
  },
  {
    simbolo: "Ni",
    nome: "Níquel",
    funcao: "Metabolismo do nitrogênio e urease",
    tipo: 'micro',
    slug: 'niquel',
    hasPage: true,
  },
  {
    simbolo: "Zn",
    nome: "Zinco",
    funcao: "Síntese de auxinas e desenvolvimento foliar",
    tipo: 'micro',
    slug: 'zinco',
    hasPage: true,
  },
  {
    simbolo: "Co",
    nome: "Cobalto",
    funcao: "Fixação biológica de nitrogênio em leguminosas",
    tipo: 'micro',
    slug: 'cobalto',
  },
  {
    simbolo: "Si",
    nome: "Silício",
    funcao: "Resistência mecânica e tolerância a estresses",
    tipo: 'micro',
    slug: 'silicio',
  },
];

export const todosNutrientes = [...macronutrientes, ...micronutrientes];

export const getNutrienteBySlug = (slug: string): Nutriente | undefined => {
  return todosNutrientes.find(n => n.slug === slug);
};
