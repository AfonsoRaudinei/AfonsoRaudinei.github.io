import { useState } from "react";
import { ChevronRight, ChevronDown, Circle, Brain, Sparkles, TreeDeciduous, FlaskConical, Layers, TrendingUp, Leaf, Droplets, Sun, Wind, Sprout, Atom, Target, Zap, Shield, Recycle, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
  color?: string;
  icon?: React.ReactNode;
}

const mindMapData: MindMapNode = {
  id: "root",
  label: "Nutrição Vegetal & Dinâmica da MOS",
  icon: <Sparkles className="w-5 h-5" />,
  children: [
    {
      id: "ctc",
      label: "Capacidade de Troca Catiônica (CTC)",
      color: "bg-emerald-500",
      icon: <Layers className="w-4 h-4" />,
      children: [
        {
          id: "ctc-1",
          label: "Definição e Importância",
          children: [
            { id: "ctc-1-1", label: "Quantidade de cátions retidos nas cargas negativas" },
            { id: "ctc-1-2", label: "Reservatório natural de nutrientes do solo" },
            { id: "ctc-1-3", label: "Principal indicador de fertilidade química" },
            { id: "ctc-1-4", label: "Expressa em cmolc/dm³ ou mmolc/dm³" },
          ],
        },
        {
          id: "ctc-2",
          label: "Fatores que Influenciam",
          children: [
            { id: "ctc-2-1", label: "Teor e tipo de argila (1:1 vs 2:1)" },
            { id: "ctc-2-2", label: "Caulinita: baixa CTC (3-15 cmolc/kg)" },
            { id: "ctc-2-3", label: "Montmorilonita: alta CTC (80-150 cmolc/kg)" },
            { id: "ctc-2-4", label: "Matéria orgânica do solo (200-400 cmolc/kg)" },
            { id: "ctc-2-5", label: "pH do solo e cargas dependentes" },
          ],
        },
        {
          id: "ctc-3",
          label: "CTC Efetiva vs Potencial",
          children: [
            { id: "ctc-3-1", label: "CTCe: medida ao pH natural do solo" },
            { id: "ctc-3-2", label: "CTCp: medida em pH 7,0 (tamponado)" },
            { id: "ctc-3-3", label: "Diferença indica cargas dependentes de pH" },
            { id: "ctc-3-4", label: "Importante para recomendação de calagem" },
          ],
        },
        {
          id: "ctc-4",
          label: "Saturação por Bases (V%)",
          children: [
            { id: "ctc-4-1", label: "V% = (SB/CTC) × 100" },
            { id: "ctc-4-2", label: "Solos eutróficos: V% > 50%" },
            { id: "ctc-4-3", label: "Solos distróficos: V% < 50%" },
            { id: "ctc-4-4", label: "Ideal para culturas: 50-80%" },
          ],
        },
      ],
    },
    {
      id: "nutricao",
      label: "Nutrição Mineral de Plantas",
      color: "bg-green-500",
      icon: <Leaf className="w-4 h-4" />,
      children: [
        {
          id: "nut-1",
          label: "Macronutrientes Primários",
          children: [
            { id: "nut-1-1", label: "Nitrogênio (N) - Proteínas, clorofila, ácidos nucleicos" },
            { id: "nut-1-2", label: "Fósforo (P) - ATP, DNA, RNA, fosfolipídios" },
            { id: "nut-1-3", label: "Potássio (K) - Regulação osmótica, abertura estomática" },
            { id: "nut-1-4", label: "N: 15-50 g/kg na matéria seca" },
            { id: "nut-1-5", label: "P: 1-5 g/kg | K: 10-50 g/kg" },
          ],
        },
        {
          id: "nut-2",
          label: "Macronutrientes Secundários",
          children: [
            { id: "nut-2-1", label: "Cálcio (Ca) - Parede celular, pectatos, divisão" },
            { id: "nut-2-2", label: "Magnésio (Mg) - Centro da clorofila, ativação enzimática" },
            { id: "nut-2-3", label: "Enxofre (S) - Aminoácidos (Met, Cis), coenzimas" },
            { id: "nut-2-4", label: "Relação Ca:Mg ideal: 3:1 a 5:1" },
          ],
        },
        {
          id: "nut-3",
          label: "Micronutrientes Essenciais",
          children: [
            { id: "nut-3-1", label: "Ferro (Fe) - Síntese de clorofila, citocromos" },
            { id: "nut-3-2", label: "Manganês (Mn) - Fotossíntese, enzimas antioxidantes" },
            { id: "nut-3-3", label: "Zinco (Zn) - Síntese de AIA, enzimas" },
            { id: "nut-3-4", label: "Cobre (Cu) - Lignificação, plastocianina" },
            { id: "nut-3-5", label: "Boro (B) - Transporte de açúcares, parede celular" },
            { id: "nut-3-6", label: "Molibdênio (Mo) - Redutase do nitrato, FBN" },
            { id: "nut-3-7", label: "Cloro (Cl) - Fotólise da água, osmorregulação" },
            { id: "nut-3-8", label: "Níquel (Ni) - Urease, metabolismo do N" },
          ],
        },
        {
          id: "nut-4",
          label: "Mecanismos de Absorção",
          children: [
            { id: "nut-4-1", label: "Interceptação radicular (Ca²⁺)" },
            { id: "nut-4-2", label: "Fluxo de massa (N-NO₃⁻, S-SO₄²⁻)" },
            { id: "nut-4-3", label: "Difusão (P-H₂PO₄⁻, K⁺)" },
            { id: "nut-4-4", label: "Transporte ativo vs passivo" },
          ],
        },
        {
          id: "nut-5",
          label: "Interações entre Nutrientes",
          children: [
            { id: "nut-5-1", label: "Sinergismo: N×P, Ca×B, S×N" },
            { id: "nut-5-2", label: "Antagonismo: K×Ca×Mg, Fe×Mn, P×Zn" },
            { id: "nut-5-3", label: "Inibição competitiva e não-competitiva" },
            { id: "nut-5-4", label: "Lei do Mínimo de Liebig" },
          ],
        },
      ],
    },
    {
      id: "quimica",
      label: "Química do Solo",
      color: "bg-teal-500",
      icon: <FlaskConical className="w-4 h-4" />,
      children: [
        {
          id: "quim-1",
          label: "Reações Ácido-Base",
          children: [
            { id: "quim-1-1", label: "Acidez ativa: H⁺ livre em solução" },
            { id: "quim-1-2", label: "Acidez trocável: H⁺ + Al³⁺ no complexo" },
            { id: "quim-1-3", label: "Acidez potencial: H + Al (pH 7,0)" },
            { id: "quim-1-4", label: "Poder tampão do solo" },
            { id: "quim-1-5", label: "Índice SMP para recomendação" },
          ],
        },
        {
          id: "quim-2",
          label: "Correção da Acidez",
          children: [
            { id: "quim-2-1", label: "Neutralização do Al³⁺ tóxico" },
            { id: "quim-2-2", label: "Elevação do pH e V%" },
            { id: "quim-2-3", label: "Fornecimento de Ca²⁺ e Mg²⁺" },
            { id: "quim-2-4", label: "PRNT e qualidade do calcário" },
            { id: "quim-2-5", label: "Gessagem: correção em profundidade" },
          ],
        },
        {
          id: "quim-3",
          label: "Dinâmica da Matéria Orgânica",
          children: [
            { id: "quim-3-1", label: "Humificação: formação de húmus estável" },
            { id: "quim-3-2", label: "Mineralização: liberação de nutrientes" },
            { id: "quim-3-3", label: "Relação C/N: <20 mineraliza, >30 imobiliza" },
            { id: "quim-3-4", label: "Frações lábeis: C oxidável KMnO₄" },
            { id: "quim-3-5", label: "Frações estáveis: ácidos húmicos e fúlvicos" },
            { id: "quim-3-6", label: "Carbono microbiano (C-BIO)" },
          ],
        },
        {
          id: "quim-4",
          label: "Reações de Fixação",
          children: [
            { id: "quim-4-1", label: "Adsorção específica de P em óxidos" },
            { id: "quim-4-2", label: "Precipitação de P-Ca em pH alto" },
            { id: "quim-4-3", label: "Fósforo remanescente (P-rem)" },
            { id: "quim-4-4", label: "Capacidade máxima de adsorção" },
          ],
        },
        {
          id: "quim-5",
          label: "Equilíbrio de Cargas",
          children: [
            { id: "quim-5-1", label: "Cargas permanentes: substituição isomórfica" },
            { id: "quim-5-2", label: "Cargas variáveis: grupos OH funcionais" },
            { id: "quim-5-3", label: "Ponto de carga zero (PCZ)" },
            { id: "quim-5-4", label: "Balanço de cargas e retenção" },
          ],
        },
      ],
    },
    {
      id: "mos",
      label: "Matéria Orgânica do Solo (MOS)",
      color: "bg-amber-600",
      icon: <TreeDeciduous className="w-4 h-4" />,
      children: [
        {
          id: "mos-1",
          label: "Componentes da MOS",
          children: [
            { id: "mos-1-1", label: "Matéria orgânica leve (MOL)" },
            { id: "mos-1-2", label: "Matéria orgânica particulada (MOP)" },
            { id: "mos-1-3", label: "Matéria orgânica associada a minerais (MOAM)" },
            { id: "mos-1-4", label: "Biomassa microbiana viva" },
          ],
        },
        {
          id: "mos-2",
          label: "Funções da MOS",
          children: [
            { id: "mos-2-1", label: "Fonte de N, P, S para plantas" },
            { id: "mos-2-2", label: "Contribuição para CTC (até 80% em arenosos)" },
            { id: "mos-2-3", label: "Agregação e estrutura do solo" },
            { id: "mos-2-4", label: "Retenção de água e infiltração" },
            { id: "mos-2-5", label: "Atividade biológica e diversidade" },
          ],
        },
        {
          id: "mos-3",
          label: "Fatores de Acúmulo",
          children: [
            { id: "mos-3-1", label: "Clima: temperatura e precipitação" },
            { id: "mos-3-2", label: "Textura: proteção física em argilas" },
            { id: "mos-3-3", label: "Aporte de resíduos vegetais" },
            { id: "mos-3-4", label: "Manejo: revolvimento reduz MOS" },
          ],
        },
        {
          id: "mos-4",
          label: "Indicadores de Qualidade",
          children: [
            { id: "mos-4-1", label: "Carbono orgânico total (COT)" },
            { id: "mos-4-2", label: "Estoque de carbono (Mg/ha)" },
            { id: "mos-4-3", label: "Índice de manejo de carbono (IMC)" },
            { id: "mos-4-4", label: "Respiração basal do solo" },
          ],
        },
      ],
    },
    {
      id: "manejo",
      label: "Manejo da Fertilidade",
      color: "bg-indigo-500",
      icon: <Target className="w-4 h-4" />,
      children: [
        {
          id: "man-1",
          label: "Diagnóstico",
          children: [
            { id: "man-1-1", label: "Amostragem de solo representativa" },
            { id: "man-1-2", label: "Análise química completa" },
            { id: "man-1-3", label: "Análise foliar: diagnose nutricional" },
            { id: "man-1-4", label: "Histórico da área e cultivos" },
          ],
        },
        {
          id: "man-2",
          label: "Adubação Corretiva",
          children: [
            { id: "man-2-1", label: "Calagem para elevação de V%" },
            { id: "man-2-2", label: "Fosfatagem corretiva total ou gradual" },
            { id: "man-2-3", label: "Potassagem em solos deficientes" },
            { id: "man-2-4", label: "Micronutrientes: lanço ou sulco" },
          ],
        },
        {
          id: "man-3",
          label: "Adubação de Manutenção",
          children: [
            { id: "man-3-1", label: "Reposição da exportação pela colheita" },
            { id: "man-3-2", label: "Fertilização no sulco de plantio" },
            { id: "man-3-3", label: "Adubação de cobertura nitrogenada" },
            { id: "man-3-4", label: "Fertirrigação e foliar" },
          ],
        },
        {
          id: "man-4",
          label: "Tecnologias de Precisão",
          children: [
            { id: "man-4-1", label: "Mapas de fertilidade georreferenciados" },
            { id: "man-4-2", label: "Aplicação em taxa variável (VRA)" },
            { id: "man-4-3", label: "Sensoriamento remoto (NDVI)" },
            { id: "man-4-4", label: "Modelagem e sistemas de suporte" },
          ],
        },
      ],
    },
    {
      id: "sustentabilidade",
      label: "Sustentabilidade & Sistemas",
      color: "bg-cyan-600",
      icon: <Recycle className="w-4 h-4" />,
      children: [
        {
          id: "sust-1",
          label: "Sistema Plantio Direto (SPD)",
          children: [
            { id: "sust-1-1", label: "Revolvimento mínimo do solo" },
            { id: "sust-1-2", label: "Cobertura permanente" },
            { id: "sust-1-3", label: "Rotação/sucessão de culturas" },
            { id: "sust-1-4", label: "Acúmulo gradual de MOS" },
          ],
        },
        {
          id: "sust-2",
          label: "Integração Lavoura-Pecuária (ILP)",
          children: [
            { id: "sust-2-1", label: "Ciclagem de nutrientes pela pastagem" },
            { id: "sust-2-2", label: "Melhoria da estrutura do solo" },
            { id: "sust-2-3", label: "Diversificação de renda" },
            { id: "sust-2-4", label: "Sistemas ILPF (com floresta)" },
          ],
        },
        {
          id: "sust-3",
          label: "Plantas de Cobertura",
          children: [
            { id: "sust-3-1", label: "Gramíneas: aporte de C, estrutura" },
            { id: "sust-3-2", label: "Leguminosas: FBN, baixa C/N" },
            { id: "sust-3-3", label: "Consórcios: coquetel de plantas" },
            { id: "sust-3-4", label: "Reciclagem de nutrientes lixiviados" },
          ],
        },
        {
          id: "sust-4",
          label: "Sequestro de Carbono",
          children: [
            { id: "sust-4-1", label: "Potencial de acúmulo: 0,5-1,0 Mg C/ha/ano" },
            { id: "sust-4-2", label: "Créditos de carbono no agro" },
            { id: "sust-4-3", label: "Pegada de carbono e certificações" },
            { id: "sust-4-4", label: "Agricultura regenerativa" },
          ],
        },
      ],
    },
  ],
};

interface NodeProps {
  node: MindMapNode;
  level: number;
  isLast?: boolean;
}

const MindMapNodeComponent = ({ node, level, isLast = false }: NodeProps) => {
  const [isExpanded, setIsExpanded] = useState(level < 1);
  const hasChildren = node.children && node.children.length > 0;

  const getLevelStyles = () => {
    switch (level) {
      case 0:
        return "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white font-bold text-lg md:text-xl px-6 py-4 rounded-2xl shadow-xl shadow-green-500/30 border-2 border-white/20";
      case 1:
        return `${node.color || "bg-emerald-500"} text-white font-semibold px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow`;
      case 2:
        return "bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 text-emerald-900 font-medium px-4 py-2.5 rounded-lg border border-emerald-200 shadow-sm";
      default:
        return "bg-white hover:bg-emerald-50 text-gray-700 px-3 py-2 rounded-lg text-sm border border-gray-200 shadow-sm hover:border-emerald-300 transition-all";
    }
  };

  const getConnectorColor = () => {
    if (level === 1) return node.color?.replace("bg-", "border-") || "border-emerald-500";
    if (level === 2) return "border-emerald-400";
    return "border-emerald-300";
  };

  return (
    <div className={cn("relative", level > 0 && "ml-4 md:ml-8")}>
      {/* Connector lines */}
      {level > 0 && (
        <>
          <div
            className={cn(
              "absolute left-[-16px] md:left-[-32px] top-0 h-[50%] w-4 md:w-8 border-l-2 border-b-2 rounded-bl-xl",
              getConnectorColor()
            )}
          />
          {!isLast && (
            <div
              className={cn(
                "absolute left-[-16px] md:left-[-32px] top-[50%] h-[50%] w-px border-l-2",
                getConnectorColor()
              )}
            />
          )}
        </>
      )}

      {/* Node */}
      <motion.div
        className={cn(
          "inline-flex items-center gap-2 md:gap-3 cursor-pointer transition-all duration-200",
          getLevelStyles()
        )}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {level <= 1 && node.icon && (
          <span className="flex-shrink-0">{node.icon}</span>
        )}
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )
        ) : (
          <Circle className="h-2 w-2 flex-shrink-0 fill-current opacity-60" />
        )}
        <span className="text-left">{node.label}</span>
      </motion.div>

      {/* Children */}
      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div 
            className="mt-3 space-y-2 relative"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children!.map((child, index) => (
              <MindMapNodeComponent
                key={child.id}
                node={child}
                level={level + 1}
                isLast={index === node.children!.length - 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MindMap = () => {
  const legendItems = [
    { color: "bg-emerald-500", label: "CTC", icon: <Layers className="w-3 h-3" /> },
    { color: "bg-green-500", label: "Nutrição", icon: <Leaf className="w-3 h-3" /> },
    { color: "bg-teal-500", label: "Química", icon: <FlaskConical className="w-3 h-3" /> },
    { color: "bg-amber-600", label: "MOS", icon: <TreeDeciduous className="w-3 h-3" /> },
    { color: "bg-indigo-500", label: "Manejo", icon: <Target className="w-3 h-3" /> },
    { color: "bg-cyan-600", label: "Sustentabilidade", icon: <Recycle className="w-3 h-3" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 py-16 md:py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-white/20">
              <Brain className="w-5 h-5 text-emerald-300" />
              <span className="text-emerald-100 text-sm font-medium">Visualização Interativa</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mapa Mental de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300">
                Nutrição Vegetal
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-8">
              Explore os conceitos fundamentais de nutrição de plantas, química do solo e manejo 
              sustentável de forma visual e interativa.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {legendItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <div className={cn("w-3 h-3 rounded-full", item.color)} />
                  <span className="text-white/90 text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Instructions */}
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Clique nos nós para expandir ou retrair os subtópicos
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </p>
            </motion.div>

            {/* Mind Map Container */}
            <motion.div 
              className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-3xl border border-emerald-100 p-6 md:p-10 lg:p-12 shadow-2xl shadow-green-500/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <MindMapNodeComponent node={mindMapData} level={0} />
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "6", label: "Categorias principais", icon: <Layers className="w-5 h-5" /> },
                { value: "30+", label: "Subtópicos", icon: <TreeDeciduous className="w-5 h-5" /> },
                { value: "100+", label: "Conceitos", icon: <Atom className="w-5 h-5" /> },
                { value: "∞", label: "Aplicações práticas", icon: <TrendingUp className="w-5 h-5" /> },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindMap;
