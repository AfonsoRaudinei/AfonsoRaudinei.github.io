export interface HormonioAcao {
  sigla: string;
  nome: string;
  local: string;
  descricao: string;
  cor: string;
}

export interface EstadioHormonio {
  id: string;
  titulo: string;
  nome: string;
  dias: string;
  fase: 'vegetative-early' | 'vegetative' | 'flowering' | 'grain-fill' | 'maturation' | 'practices';
  icon: string;
  contexto: string;
  hormonios: HormonioAcao[];
  funcaoCritica: string;
}

export const estadiosHormonios: EstadioHormonio[] = [
  {
    id: 'VE-V2',
    titulo: 'VE - V2',
    nome: 'Estabelecimento Radicular e Ativação Metabólica',
    dias: '0-16 dias após o plantio | Emergência até 2ª folha trifoliolada',
    fase: 'vegetative-early',
    icon: '🌱',
    contexto: 'O estádio VE (emergência) caracteriza-se pela exposição dos cotilédones acima do solo, marcando o início da fase autotrófica. Em V1, observa-se o primeiro nó com folhas unifolioladas completamente desenvolvidas, e em V2 ocorre a primeira folha trifoliolada com bordos expandidos. Este período é crítico para o estabelecimento do estande e da arquitetura radicular, definindo o potencial de captação de água e nutrientes durante todo o ciclo.',
    hormonios: [
      {
        sigla: 'GA',
        nome: 'Giberelinas',
        local: 'Sementes → Hipocótilo → Cotilédones',
        descricao: 'Ativam enzimas hidrolíticas (α-amilases) que mobilizam reservas do endosperma. Promovem alongamento do hipocótilo e emergência da plântula.',
        cor: 'from-red-400 to-rose-500'
      },
      {
        sigla: 'AX',
        nome: 'Auxinas',
        local: 'Raiz Primária → Raízes Laterais',
        descricao: 'Produzidas no ápice caulinar, descem via floema até as raízes. Estimulam alongamento celular, geotropismo positivo e ramificação radicular.',
        cor: 'from-teal-400 to-emerald-500'
      },
      {
        sigla: 'CK',
        nome: 'Citocininas',
        local: 'Raízes → Xilema → Parte Aérea',
        descricao: 'Produzidas nas raízes, sobem via xilema. Estimulam divisão celular nos cotilédones e primeiras folhas. Balanço AX/CK define arquitetura.',
        cor: 'from-green-400 to-teal-500'
      }
    ],
    funcaoCritica: 'A germinação e o vigor inicial dependem da ação conjunta de GA (quebra de dormência) + Auxina (desenvolvimento radicular) + Micronutrientes Mo/Co/Ni (ativação da nodulação). A nodulação eficiente, que se inicia entre V1 e V2, estabelece a capacidade de FBN que suprirá até 90% da demanda de nitrogênio da cultura ao longo do ciclo.'
  },
  {
    id: 'V3-VN',
    titulo: 'V3 - VN',
    nome: 'Crescimento, Diferenciação e Acúmulo de Reservas',
    dias: '16-25 dias após o plantio | Crescimento vegetativo intenso',
    fase: 'vegetative',
    icon: '🌿',
    contexto: 'Durante os estádios V3 a VN (último nó antes do florescimento), a planta intensifica o crescimento vegetativo, expandindo área foliar, diferenciando nós reprodutivos e acumulando fotoassimilados. Em V5, define-se o número potencial de nós que a planta terá, cada um capaz de originar ramos laterais e vagens. Este período determina a estrutura vegetativa que sustentará a fase reprodutiva.',
    hormonios: [
      {
        sigla: 'AX',
        nome: 'Auxinas',
        local: 'Caule → Dominância Apical',
        descricao: 'Favorecem alongamento caulinar e dominância apical, enquanto citocininas estimulam ramificação lateral.',
        cor: 'from-teal-400 to-emerald-500'
      },
      {
        sigla: 'CK',
        nome: 'Citocininas',
        local: 'Gemas Axilares → Ramificação',
        descricao: 'Estimulam ramificação lateral e expansão de gemas axilares. Aumentam o número de nós reprodutivos.',
        cor: 'from-green-400 to-teal-500'
      },
      {
        sigla: 'GA',
        nome: 'Giberelinas',
        local: 'Entrenós → Alongamento',
        descricao: 'Promovem alongamento dos entrenós. Aplicações V3-V4 aumentam altura de inserção da primeira vagem.',
        cor: 'from-red-400 to-rose-500'
      }
    ],
    funcaoCritica: 'O crescimento vegetativo vigoroso depende da ação coordenada de Auxinas + Citocininas + Giberelinas, que modulam divisão celular, alongamento e diferenciação. Micronutrientes como Zn, Mn, Cu e B atuam como cofatores de enzimas fotossintéticas, permitindo alta taxa de acúmulo de biomassa e estabelecendo o "esqueleto" vegetativo que sustentará a carga reprodutiva.'
  },
  {
    id: 'R1-R3',
    titulo: 'R1 - R3',
    nome: 'Transição Crítica e Definição de Componentes de Rendimento',
    dias: '25-62 dias após o plantio | Florescimento até formação de vagens',
    fase: 'flowering',
    icon: '🌸',
    contexto: 'R1 marca o início do florescimento (primeira flor aberta em qualquer nó), R2 representa o florescimento pleno, e R3 indica o início da formação de vagens. Este período é o mais crítico do ciclo, pois define o número de vagens por planta. Estresses hídricos ou nutricionais causam abortamento floral irreversível.',
    hormonios: [
      {
        sigla: 'CK',
        nome: 'Citocininas',
        local: 'Flores → Primórdios de Vagens',
        descricao: 'Essenciais para evitar abortamento floral. Mantêm a atividade meristemática e a divisão celular nos primórdios de vagens.',
        cor: 'from-green-400 to-teal-500'
      },
      {
        sigla: 'AX',
        nome: 'Auxinas',
        local: 'Flores → Desenvolvimento de Óvulos',
        descricao: 'Regulam a polinização e o desenvolvimento inicial dos óvulos. Deficiência causa abortamento de flores.',
        cor: 'from-teal-400 to-emerald-500'
      },
      {
        sigla: 'ET',
        nome: 'Etileno',
        local: 'Flores → Senescência',
        descricao: 'Em excesso, promove abscisão de flores e vagens jovens. Estresse hídrico aumenta sua síntese.',
        cor: 'from-yellow-400 to-amber-500'
      },
      {
        sigla: 'ABA',
        nome: 'Ácido Abscísico',
        local: 'Toda a Planta → Resposta ao Estresse',
        descricao: 'Aumenta sob déficit hídrico, fechando estômatos. Em níveis altos, induz abortamento floral.',
        cor: 'from-purple-400 to-violet-500'
      }
    ],
    funcaoCritica: 'A transição vegetativo-reprodutiva exige balanço fino entre Citocininas (anti-abortamento) e Etileno/ABA (estresse). Micronutrientes B e Zn são críticos para viabilidade do pólen e fertilização. Deficiência de B causa abortamento massivo de flores, enquanto Zn é essencial para síntese de auxinas que regulam desenvolvimento do óvulo.'
  },
  {
    id: 'R5',
    titulo: 'R5',
    nome: 'Enchimento de Grãos e Máxima Demanda Metabólica',
    dias: '72-95 dias após o plantio | Enchimento de grãos',
    fase: 'grain-fill',
    icon: '🫛',
    contexto: 'R5 representa o enchimento de grãos, subdividido em R5.1 (grão ocupa 10% da vagem) até R5.5 (grão ocupa 100%). Este é o período de máxima demanda por fotoassimilados e nutrientes. A planta transloca reservas das folhas e caule para os grãos. Estresses causam redução de peso de grãos.',
    hormonios: [
      {
        sigla: 'CK',
        nome: 'Citocininas',
        local: 'Grãos → Enchimento',
        descricao: 'Mantêm folhas fotossinteticamente ativas (stay-green). Retardam senescência foliar para maximizar translocação.',
        cor: 'from-green-400 to-teal-500'
      },
      {
        sigla: 'AX',
        nome: 'Auxinas',
        local: 'Grãos → Dreno de Assimilados',
        descricao: 'Regulam força de dreno dos grãos. Quanto maior a atividade auxínica, maior a taxa de enchimento.',
        cor: 'from-teal-400 to-emerald-500'
      },
      {
        sigla: 'ABA',
        nome: 'Ácido Abscísico',
        local: 'Grãos → Acúmulo de Reservas',
        descricao: 'Promove acúmulo de proteínas e lipídeos nos grãos. Inicia a dessecação e maturação fisiológica.',
        cor: 'from-purple-400 to-violet-500'
      }
    ],
    funcaoCritica: 'O enchimento eficiente depende de Citocininas (stay-green) + Auxinas (força de dreno) + ABA (acúmulo de reservas). Micronutrientes Fe, Cu e Mn são críticos para fotossíntese e translocação de carboidratos. A demanda por nutrientes atinge o pico, com absorção de até 95-97% do N, P e K totais.'
  },
  {
    id: 'R6-R8',
    titulo: 'R6 - R8',
    nome: 'Maturação Fisiológica e Preparação para Colheita',
    dias: '95-115 dias após o plantio | Maturação até colheita',
    fase: 'maturation',
    icon: '🌾',
    contexto: 'R6 (grão cheio) marca o máximo volume de grãos, R7 (início da maturação) apresenta uma vagem madura, e R8 (maturação plena) indica 95% das vagens maduras. A planta encerra a absorção de nutrientes e entra em senescência programada. O foco é a dessecação uniforme para colheita.',
    hormonios: [
      {
        sigla: 'ABA',
        nome: 'Ácido Abscísico',
        local: 'Toda a Planta → Senescência',
        descricao: 'Predomina na fase final, promovendo dessecação de vagens, senescência foliar e dormência das sementes.',
        cor: 'from-purple-400 to-violet-500'
      },
      {
        sigla: 'ET',
        nome: 'Etileno',
        local: 'Folhas → Abscisão',
        descricao: 'Acelera a abscisão foliar e a dessecação. Facilita a colheita mecânica.',
        cor: 'from-yellow-400 to-amber-500'
      },
      {
        sigla: 'CK',
        nome: 'Citocininas',
        local: 'Declínio Geral',
        descricao: 'Níveis caem drasticamente, encerrando a atividade fotossintética e permitindo senescência programada.',
        cor: 'from-green-400 to-teal-500'
      }
    ],
    funcaoCritica: 'A maturação coordenada depende do aumento de ABA/Etileno e declínio de Citocininas. Esta transição garante dessecação uniforme e qualidade de sementes. Micronutrientes acumulados nos grãos (especialmente Fe, Zn e Cu) definem a qualidade nutricional e o vigor das sementes para próxima safra.'
  },
  {
    id: 'PRATICAS',
    titulo: 'Aplicações Práticas',
    nome: 'Recomendações de Manejo Nutricional-Hormonal',
    dias: 'Todo o ciclo | Estratégias integradas',
    fase: 'practices',
    icon: '🚜',
    contexto: 'O manejo integrado de nutrientes e hormônios visa maximizar o potencial produtivo da soja. As aplicações devem considerar a fenologia, as condições ambientais e o histórico da área. A seguir, as principais recomendações práticas baseadas nas interações nutriente-hormônio.',
    hormonios: [
      {
        sigla: 'TS',
        nome: 'Tratamento de Sementes',
        local: 'Pré-plantio',
        descricao: 'Co + Mo + Ni via TS ativa nodulação precoce. Zn estimula síntese de auxinas. B melhora divisão celular radicular.',
        cor: 'from-blue-400 to-cyan-500'
      },
      {
        sigla: 'V3',
        nome: 'Aplicação Foliar V3-V4',
        local: 'Vegetativo',
        descricao: 'Zn + Mn + B preparam estrutura para florescimento. Cu ativa enzimas fotossintéticas. Fe previne clorose.',
        cor: 'from-green-400 to-emerald-500'
      },
      {
        sigla: 'R1',
        nome: 'Aplicação Foliar R1-R3',
        local: 'Florescimento',
        descricao: 'B é crítico para viabilidade do pólen. Zn sustenta síntese de auxinas. Mn e Cu mantêm fotossíntese.',
        cor: 'from-amber-400 to-orange-500'
      },
      {
        sigla: 'R5',
        nome: 'Aplicação Foliar R5',
        local: 'Enchimento',
        descricao: 'K foliar (KCl 2%) potencializa translocação. Fe e Cu mantêm stay-green. Última janela de intervenção.',
        cor: 'from-purple-400 to-pink-500'
      }
    ],
    funcaoCritica: 'O sucesso produtivo da soja resulta da orquestração precisa entre hormônios vegetais e micronutrientes em cada estádio fenológico. A compreensão dessas interações permite intervenções técnicas assertivas que maximizam a expressão do potencial genético da cultura.'
  }
];

export const phaseColorsHormonios = {
  'vegetative-early': {
    bg: 'bg-green-600',
    gradient: 'from-green-600 to-green-700',
    label: 'Germinação'
  },
  'vegetative': {
    bg: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-600',
    label: 'Vegetativo'
  },
  'flowering': {
    bg: 'bg-amber-500',
    gradient: 'from-amber-500 to-orange-600',
    label: 'Florescimento'
  },
  'grain-fill': {
    bg: 'bg-purple-600',
    gradient: 'from-purple-600 to-violet-700',
    label: 'Enchimento'
  },
  'maturation': {
    bg: 'bg-blue-600',
    gradient: 'from-blue-600 to-blue-700',
    label: 'Maturação'
  },
  'practices': {
    bg: 'bg-primary',
    gradient: 'from-primary to-primary/80',
    label: 'Práticas'
  }
};
