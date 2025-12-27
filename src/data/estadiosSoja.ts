export interface EstadioInfo {
  phenology: string;
  diseases: string[];
  pests: string[];
  nutrients: string;
}

export interface EstadioSoja {
  name: string;
  fullName: string;
  description: string;
  day: number;
  phase: 'vegetative' | 'flowering' | 'podding' | 'grain' | 'maturity';
  icon: string;
  info: EstadioInfo;
}

export const estadiosSoja: EstadioSoja[] = [
  {
    name: 'VE',
    fullName: 'Emergência',
    description: 'Cotilédones acima do solo. Estádio crítico ao ataque de pragas e doenças de solo.',
    day: 0,
    phase: 'vegetative',
    icon: '🌱',
    info: {
      phenology: 'Emergência da plântula, onde os cotilédones ficam acima do solo. Estádio crítico ao ataque de pragas e doenças de solo.',
      diseases: ['Tombamento de plântulas', 'Podridões de raiz e colo', 'Patógenos transmitidos via semente'],
      pests: ['Corós', 'Larvas de Diabrotica', 'Lesmas e caracóis', 'Cupins'],
      nutrients: 'Absorção: 0%'
    }
  },
  {
    name: 'VC',
    fullName: 'Cotiledonar',
    description: 'Cotilédones totalmente desenvolvidos. Folhas unifolioladas não se tocam. Sensível a patógenos de solo.',
    day: 3,
    phase: 'vegetative',
    icon: '🌱',
    info: {
      phenology: 'Cotiledonar, onde os cotilédones se encontram totalmente desenvolvidos e abertos, e as folhas unifolioladas não mais se tocam. Estádio sensível ao ataque de patógenos e pragas de solo.',
      diseases: ['Proteção inicial contra tombamento'],
      pests: ['Monitoramento preventivo de solo'],
      nutrients: 'N: 1-2% | P: 2-3% | K: 1-2% | Ca: 2-3%'
    }
  },
  {
    name: 'V1',
    fullName: '1º Nó',
    description: 'Primeira folha trifoliolada completamente desenvolvida. Início da nodulação e fixação biológica de N.',
    day: 8,
    phase: 'vegetative',
    icon: '🌿',
    info: {
      phenology: 'Primeiro nó ou primeira folha trifoliolada, onde os bordos das folhas não mais se tocam. Inicia-se a nodulação e a fixação biológica do nitrogênio.',
      diseases: ['Fase inicial de desenvolvimento'],
      pests: ['Monitoramento preventivo'],
      nutrients: 'N: 2-3% | P: 3-4% | K: 2-3% | Ca: 3-4%'
    }
  },
  {
    name: 'V2',
    fullName: '2º Nó',
    description: 'Segunda folha trifoliolada. Aumento da nodulação. Controle de matocompetição essencial.',
    day: 16,
    phase: 'vegetative',
    icon: '🌿',
    info: {
      phenology: 'Segundo nó ou segunda folha trifoliolada, onde os bordos das folhas não mais se tocam. A nodulação deve aumentar e a matocompetição deve ser controlada.',
      diseases: ['Crestamento Bacteriano (5,0%)'],
      pests: ['Tripes começam a aparecer'],
      nutrients: 'N: 3-5% | P: 4-6% | K: 3-5% | Ca: 4-6% | Mg: 4-5%'
    }
  },
  {
    name: 'V4',
    fullName: '4º Nó',
    description: 'Quarta folha trifoliolada. Crescimento acelerado e acúmulo de reservas para fase reprodutiva.',
    day: 20,
    phase: 'vegetative',
    icon: '🍃',
    info: {
      phenology: 'Quarta folha trifoliolada, onde os bordos das folhas não mais se tocam. A planta continua crescendo e acumulando reservas para a fase reprodutiva.',
      diseases: ['Míldio (15,0%)', 'Crestamento Bacteriano (12,0%)', 'Pústula Bacteriana (4,0%)'],
      pests: ['Aumento de tripes e lagartas'],
      nutrients: '⚠️ CRÍTICO: N: 8-9% | P: 11-13% | K: 9-11% | Ca: 14-16% | Mg: 13-15% | Fe: 12-15% | B: 10-13%'
    }
  },
  {
    name: 'R1',
    fullName: 'Início do Florescimento',
    description: 'Pelo menos uma flor aberta em qualquer nó. PERÍODO CRÍTICO ao estresse hídrico e deficiência nutricional!',
    day: 25,
    phase: 'flowering',
    icon: '🌼',
    info: {
      phenology: 'Início do florescimento, onde há pelo menos uma flor aberta em qualquer nó da planta. A planta entra no período crítico ao estresse hídrico e à deficiência nutricional.',
      diseases: ['Míldio (25,0% - PICO)', 'Crestamento Bacteriano (15,0%)', 'Oídio (20,25%)'],
      pests: ['Tripes', 'Lagartas', 'Mosca-branca (PICO)'],
      nutrients: '🚨 CRÍTICO: N: 53-54% | P: 48-52% | K: 50-53% | Ca: 59-62% | Mg: 56-59% | Fe: 55-57% | B: 45-47%'
    }
  },
  {
    name: 'R2',
    fullName: 'Florescimento Pleno',
    description: 'Flor aberta no nó superior. Planta atinge máximo de altura e número de nós.',
    day: 62,
    phase: 'flowering',
    icon: '🌺',
    info: {
      phenology: 'Florescimento pleno, onde há uma flor aberta no nó superior da planta. A planta atinge o máximo de altura e número de nós.',
      diseases: ['Míldio (20,0%)', 'Pústula Bacteriana (15,0%)', 'Mofo Branco (12,0%)'],
      pests: ['Tripes', 'Lagartas', 'Percevejos'],
      nutrients: 'N: 63-67% | P: 60-65% | K: 63-68% | Ca: 70-75% | Mg: 68-72% | Fe: 65-70%'
    }
  },
  {
    name: 'R4',
    fullName: 'Enchimento Pleno de Vagens',
    description: 'Vagem de 2cm no nó superior. Máximo de vagens e grãos por planta. Alta demanda hídrica e nutricional.',
    day: 72,
    phase: 'podding',
    icon: '🫛',
    info: {
      phenology: 'Enchimento pleno de vagens, onde há pelo menos uma vagem com 2 cm de comprimento no nó superior. A planta atinge o máximo de número de vagens e grãos.',
      diseases: ['Ferrugem Asiática (65,0%)', 'Mofo Branco (45,0%)', 'Mancha Parda (8,0%)'],
      pests: ['LAGARTAS (PICO ABSOLUTO!)', 'Percevejos', '⚠️ 95% do consumo foliar ocorre aqui'],
      nutrients: '⚠️ ÚLTIMA CHANCE: N: 80-85% | P: 78-82% | K: 82-85% | Ca: 84-87% | Mg: 82-85% | Fe: 85-88% | Cu: 86-89% | Ni: 76-78%'
    }
  },
  {
    name: 'R5.1',
    fullName: 'Início Enchimento de Grãos',
    description: 'Grão ocupa 50% do espaço da vagem. Acúmulo de matéria seca. MAIS SENSÍVEL ao estresse hídrico!',
    day: 95,
    phase: 'grain',
    icon: '🫛',
    info: {
      phenology: 'Início do enchimento de grãos, onde há pelo menos uma vagem com um grão que ocupa 50% do espaço interno. A planta inicia o acúmulo de matéria seca nos grãos e é o mais sensível ao estresse hídrico.',
      diseases: ['Ferrugem Asiática (85,0%)', 'Oídio (73,75%)', 'Mancha Parda (20,0%)'],
      pests: ['Lagartas', 'Percevejos (crescimento rápido)'],
      nutrients: '🚨 TERMINAL: N: 95-97% | P: 94-97% | K: 95-98% | Ca: 97-99% | Mg: 96-98% | Fe: 97-99% | B: 92-94% | Zn: 95-97%'
    }
  },
  {
    name: 'R6',
    fullName: 'Enchimento Pleno de Grãos',
    description: 'Grão ocupa todo espaço da vagem. Máximo peso de grãos. Início da senescência foliar.',
    day: 95,
    phase: 'grain',
    icon: '🫛',
    info: {
      phenology: 'Enchimento pleno de grãos, onde há pelo menos uma vagem com um grão que ocupa todo o espaço interno. A planta atinge o máximo de peso dos grãos e inicia o processo de senescência das folhas.',
      diseases: ['Ferrugem Asiática (95,0% - PICO)', 'Mancha Parda (45,0%)', 'Cercospora (55,0%)'],
      pests: ['Lagartas', 'Percevejos (ascensão forte)'],
      nutrients: '⛔ FIM DA ABSORÇÃO: Todos os nutrientes: 100% absorvido'
    }
  },
  {
    name: 'R8',
    fullName: 'Maturação Plena',
    description: '95% das vagens maduras. Grãos com umidade ideal (13-15%). Planta pronta para colheita!',
    day: 110,
    phase: 'maturity',
    icon: '🟤',
    info: {
      phenology: 'Maturação plena, onde 95% das vagens têm cor típica da maturidade. A planta está pronta para a colheita e os grãos têm umidade ideal para o armazenamento (13-15%).',
      diseases: ['Macrophomina (85,0%)', 'Mancha Parda (85,0%)', 'Oídio (98,75% - PICO)'],
      pests: ['Percevejos', 'Todas as pragas em declínio natural'],
      nutrients: 'Reciclagem pela palhada: 60-85% dos nutrientes retornam ao solo'
    }
  },
  {
    name: 'R9',
    fullName: 'Colheita',
    description: 'Ponto de colheita',
    day: 115,
    phase: 'maturity',
    icon: '🚜',
    info: {
      phenology: 'Ponto de colheita. Ciclo completo da cultura. Momento de planejar rotação de culturas, incorporar resíduos e repor nutrientes exportados para a próxima safra.',
      diseases: ['Macrophomina em resíduos', 'Cercospora em folhas secas', 'Mancha Parda em resíduos', 'Fusarium e Phomopsis nas matérias secas', 'Aspergillus e Penicillium em grãos armazenados'],
      pests: ['Percevejos remanescentes', 'Larvas de Sitophilus e Zabrotes em armazenamento', 'Tribolium e coleópteros de armazenamento'],
      nutrients: 'Exportação nos grãos: 10-60% do total absorvido | Palhada recicla: 40-90%'
    }
  }
];

export const phaseColors = {
  vegetative: {
    border: 'border-green-500',
    bg: 'bg-green-500/10',
    text: 'text-green-600',
    gradient: 'from-green-500 to-emerald-600',
    label: 'Vegetativa'
  },
  flowering: {
    border: 'border-amber-500',
    bg: 'bg-amber-500/10',
    text: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-600',
    label: 'Floração'
  },
  podding: {
    border: 'border-red-500',
    bg: 'bg-red-500/10',
    text: 'text-red-600',
    gradient: 'from-red-500 to-rose-600',
    label: 'Vagens'
  },
  grain: {
    border: 'border-purple-500',
    bg: 'bg-purple-500/10',
    text: 'text-purple-600',
    gradient: 'from-purple-500 to-violet-600',
    label: 'Grãos'
  },
  maturity: {
    border: 'border-blue-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-600',
    gradient: 'from-blue-500 to-cyan-600',
    label: 'Maturação'
  }
};
