import { useState } from "react";
import { ChevronRight, ChevronDown, Circle, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
  color?: string;
}

const mindMapData: MindMapNode = {
  id: "root",
  label: "Nutrição Vegetal & Dinâmica da MOS",
  children: [
    {
      id: "ctc",
      label: "Capacidade de Troca Catiônica (CTC)",
      color: "bg-emerald-500",
      children: [
        {
          id: "ctc-1",
          label: "Definição e Importância",
          children: [
            { id: "ctc-1-1", label: "Quantidade de cátions retidos" },
            { id: "ctc-1-2", label: "Reservatório de nutrientes" },
            { id: "ctc-1-3", label: "Indicador de fertilidade" },
          ],
        },
        {
          id: "ctc-2",
          label: "Fatores que Influenciam",
          children: [
            { id: "ctc-2-1", label: "Teor de argila" },
            { id: "ctc-2-2", label: "Tipo de argila (1:1 vs 2:1)" },
            { id: "ctc-2-3", label: "Matéria orgânica do solo" },
            { id: "ctc-2-4", label: "pH do solo" },
          ],
        },
        {
          id: "ctc-3",
          label: "CTC Efetiva vs Potencial",
          children: [
            { id: "ctc-3-1", label: "CTCe: pH natural" },
            { id: "ctc-3-2", label: "CTCp: pH 7,0" },
          ],
        },
      ],
    },
    {
      id: "nutricao",
      label: "Nutrição Mineral de Plantas",
      color: "bg-green-500",
      children: [
        {
          id: "nut-1",
          label: "Macronutrientes Primários",
          children: [
            { id: "nut-1-1", label: "Nitrogênio (N) - Proteínas" },
            { id: "nut-1-2", label: "Fósforo (P) - Energia (ATP)" },
            { id: "nut-1-3", label: "Potássio (K) - Regulação osmótica" },
          ],
        },
        {
          id: "nut-2",
          label: "Macronutrientes Secundários",
          children: [
            { id: "nut-2-1", label: "Cálcio (Ca) - Parede celular" },
            { id: "nut-2-2", label: "Magnésio (Mg) - Clorofila" },
            { id: "nut-2-3", label: "Enxofre (S) - Aminoácidos" },
          ],
        },
        {
          id: "nut-3",
          label: "Micronutrientes",
          children: [
            { id: "nut-3-1", label: "Fe, Mn, Zn, Cu, B, Mo, Cl, Ni" },
            { id: "nut-3-2", label: "Funções enzimáticas" },
            { id: "nut-3-3", label: "Deficiências e toxicidade" },
          ],
        },
        {
          id: "nut-4",
          label: "Absorção Radicular",
          children: [
            { id: "nut-4-1", label: "Interceptação radicular" },
            { id: "nut-4-2", label: "Fluxo de massa" },
            { id: "nut-4-3", label: "Difusão" },
          ],
        },
      ],
    },
    {
      id: "quimica",
      label: "Química do Solo",
      color: "bg-teal-500",
      children: [
        {
          id: "quim-1",
          label: "Reações Ácido-Base",
          children: [
            { id: "quim-1-1", label: "Acidez ativa (H⁺ em solução)" },
            { id: "quim-1-2", label: "Acidez potencial (H + Al)" },
            { id: "quim-1-3", label: "Poder tampão" },
          ],
        },
        {
          id: "quim-2",
          label: "Calagem",
          children: [
            { id: "quim-2-1", label: "Neutralização do Al³⁺" },
            { id: "quim-2-2", label: "Elevação do pH" },
            { id: "quim-2-3", label: "Fornecimento de Ca e Mg" },
          ],
        },
        {
          id: "quim-3",
          label: "Dinâmica da Matéria Orgânica",
          children: [
            { id: "quim-3-1", label: "Humificação" },
            { id: "quim-3-2", label: "Mineralização" },
            { id: "quim-3-3", label: "Relação C/N" },
            { id: "quim-3-4", label: "Frações lábeis e estáveis" },
          ],
        },
      ],
    },
    {
      id: "casos",
      label: "Estudos de Caso",
      color: "bg-lime-600",
      children: [
        {
          id: "caso-1",
          label: "Solos Tropicais",
          children: [
            { id: "caso-1-1", label: "Latossolos - baixa CTC" },
            { id: "caso-1-2", label: "Alta fixação de P" },
            { id: "caso-1-3", label: "Importância da MOS" },
          ],
        },
        {
          id: "caso-2",
          label: "Manejo da Fertilidade",
          children: [
            { id: "caso-2-1", label: "Adubação de correção" },
            { id: "caso-2-2", label: "Adubação de manutenção" },
            { id: "caso-2-3", label: "Agricultura de precisão" },
          ],
        },
        {
          id: "caso-3",
          label: "Sustentabilidade",
          children: [
            { id: "caso-3-1", label: "Plantio direto" },
            { id: "caso-3-2", label: "Rotação de culturas" },
            { id: "caso-3-3", label: "Plantas de cobertura" },
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
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  const getLevelStyles = () => {
    switch (level) {
      case 0:
        return "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white font-bold text-lg px-6 py-4 rounded-2xl shadow-lg shadow-green-500/20";
      case 1:
        return `${node.color || "bg-emerald-500"} text-white font-semibold px-4 py-2.5 rounded-xl shadow-md`;
      case 2:
        return "bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium px-3 py-2 rounded-lg border border-emerald-200";
      default:
        return "bg-white hover:bg-emerald-50 text-gray-700 px-3 py-1.5 rounded-md text-sm border border-gray-200 shadow-sm";
    }
  };

  const getConnectorColor = () => {
    if (level === 1) return node.color?.replace("bg-", "border-") || "border-emerald-500";
    return "border-emerald-300";
  };

  return (
    <div className={cn("relative", level > 0 && "ml-6")}>
      {/* Connector lines */}
      {level > 0 && (
        <>
          <div
            className={cn(
              "absolute left-[-24px] top-0 h-[50%] w-6 border-l-2 border-b-2 rounded-bl-lg",
              getConnectorColor()
            )}
          />
          {!isLast && (
            <div
              className={cn(
                "absolute left-[-24px] top-[50%] h-[50%] w-px border-l-2",
                getConnectorColor()
              )}
            />
          )}
        </>
      )}

      {/* Node */}
      <div
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer transition-all duration-200 hover:scale-[1.02]",
          getLevelStyles()
        )}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          )
        ) : (
          <Circle className="h-2 w-2 flex-shrink-0 fill-current" />
        )}
        <span>{node.label}</span>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="mt-3 space-y-2 relative">
          {node.children!.map((child, index) => (
            <MindMapNodeComponent
              key={child.id}
              node={child}
              level={level + 1}
              isLast={index === node.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MindMap = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mapa Mental
            </h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Clique nos nós para expandir ou retrair os subtópicos sobre{" "}
            <span className="text-emerald-600 font-medium">Nutrição Vegetal</span> e{" "}
            <span className="text-teal-600 font-medium">Dinâmica da MOS</span>
          </p>
        </div>

        {/* Mind Map Container */}
        <div className="bg-white rounded-2xl border border-emerald-100 p-6 md:p-10 shadow-xl shadow-green-500/5">
          <MindMapNodeComponent node={mindMapData} level={0} />
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <span>CTC</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded bg-green-500" />
            <span>Nutrição</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded bg-teal-500" />
            <span>Química</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 rounded bg-lime-600" />
            <span>Estudos de Caso</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindMap;
