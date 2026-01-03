import { useState } from "react";
import { ChevronDown, TrendingUp, Wheat, BarChart3, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EstadioData {
  estadio: string;
  descricao: string;
  extracaoAcumulada: number;
  extracaoPeriodo: number;
  exportacao?: number;
}

interface AbsorcaoData {
  nutriente: string;
  simbolo: string;
  unidade: string;
  extracaoTotal: number;
  exportacaoTotal: number;
  indiceExportacao: string;
  estadios: EstadioData[];
  picoAbsorcao: string;
  fonteReferencia: string;
}

// Dados de absorção do Nitrogênio em Soja
const dadosNitrogenio: AbsorcaoData = {
  nutriente: "Nitrogênio",
  simbolo: "N",
  unidade: "kg/ha",
  extracaoTotal: 280,
  exportacaoTotal: 168,
  indiceExportacao: "50-70%",
  picoAbsorcao: "R3-R5",
  fonteReferencia: "Embrapa Soja / Bataglia & Mascarenhas",
  estadios: [
    { estadio: "VE-V2", descricao: "Emergência", extracaoAcumulada: 8, extracaoPeriodo: 8 },
    { estadio: "V3-V5", descricao: "Vegetativo inicial", extracaoAcumulada: 28, extracaoPeriodo: 20 },
    { estadio: "V6-V8", descricao: "Vegetativo médio", extracaoAcumulada: 56, extracaoPeriodo: 28 },
    { estadio: "R1", descricao: "Início floração", extracaoAcumulada: 84, extracaoPeriodo: 28 },
    { estadio: "R2", descricao: "Floração plena", extracaoAcumulada: 112, extracaoPeriodo: 28 },
    { estadio: "R3", descricao: "Início enchimento", extracaoAcumulada: 154, extracaoPeriodo: 42 },
    { estadio: "R4", descricao: "Vagem formada", extracaoAcumulada: 196, extracaoPeriodo: 42 },
    { estadio: "R5", descricao: "Enchimento grãos", extracaoAcumulada: 252, extracaoPeriodo: 56 },
    { estadio: "R6-R7", descricao: "Maturação", extracaoAcumulada: 280, extracaoPeriodo: 28 },
  ],
};

interface AbsorcaoSojaAccordionProps {
  dados?: AbsorcaoData;
  corPrimaria?: string;
}

export default function AbsorcaoSojaAccordion({ 
  dados = dadosNitrogenio,
  corPrimaria = "blue"
}: AbsorcaoSojaAccordionProps) {
  const maxExtracao = Math.max(...dados.estadios.map(e => e.extracaoPeriodo));
  
  const colorClasses = {
    blue: {
      bg: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30",
      border: "border-blue-200 dark:border-blue-800",
      accent: "bg-blue-600",
      text: "text-blue-700 dark:text-blue-300",
      statBg: "bg-blue-500",
      barBg: "bg-blue-200 dark:bg-blue-900",
      barFill: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    green: {
      bg: "from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/30",
      border: "border-emerald-200 dark:border-emerald-800",
      accent: "bg-emerald-600",
      text: "text-emerald-700 dark:text-emerald-300",
      statBg: "bg-emerald-500",
      barBg: "bg-emerald-200 dark:bg-emerald-900",
      barFill: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    },
    purple: {
      bg: "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/30",
      border: "border-purple-200 dark:border-purple-800",
      accent: "bg-purple-600",
      text: "text-purple-700 dark:text-purple-300",
      statBg: "bg-purple-500",
      barBg: "bg-purple-200 dark:bg-purple-900",
      barFill: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
  };
  
  const colors = colorClasses[corPrimaria as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="absorcao" className={`border rounded-2xl overflow-hidden ${colors.border}`}>
        <AccordionTrigger className={`px-6 py-5 bg-gradient-to-r ${colors.bg} hover:no-underline group`}>
          <div className="flex items-center gap-4 w-full">
            <div className={`w-12 h-12 ${colors.accent} rounded-xl flex items-center justify-center shadow-lg`}>
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                📊 Absorção em Soja
                <span className="text-xs font-normal px-2 py-0.5 bg-white/60 dark:bg-white/10 rounded-full text-muted-foreground">
                  Produtividade: 4 ton/ha
                </span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Curva de extração e exportação por estádio fenológico
              </p>
            </div>
          </div>
        </AccordionTrigger>
        
        <AccordionContent className="px-6 pb-6 pt-4 bg-card">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700">
              <p className="text-2xl font-bold text-foreground">{dados.extracaoTotal}</p>
              <p className="text-xs text-muted-foreground">{dados.unidade}</p>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Extração Total</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700">
              <p className="text-2xl font-bold text-foreground">{dados.exportacaoTotal}</p>
              <p className="text-xs text-muted-foreground">{dados.unidade}</p>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">Exportação Grãos</p>
            </div>
            <div className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <p className={`text-2xl font-bold ${colors.text}`}>{dados.indiceExportacao}</p>
              <p className="text-xs text-muted-foreground">do extraído</p>
              <p className={`text-xs font-medium ${colors.text} mt-1`}>Índice Exportação</p>
            </div>
            <div className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 text-center border ${colors.border}`}>
              <p className={`text-2xl font-bold ${colors.text}`}>{dados.picoAbsorcao}</p>
              <p className="text-xs text-muted-foreground">estádio</p>
              <p className={`text-xs font-medium ${colors.text} mt-1`}>Pico Absorção</p>
            </div>
          </div>

          {/* Mini Chart - Bar visualization */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Extração por Estádio
            </h4>
            <div className="space-y-2">
              {dados.estadios.map((estadio, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-16 text-xs font-medium text-muted-foreground">{estadio.estadio}</div>
                  <div className={`flex-1 h-6 ${colors.barBg} rounded-full overflow-hidden`}>
                    <div 
                      className={`h-full ${colors.barFill} rounded-full transition-all duration-500 flex items-center justify-end pr-2`}
                      style={{ width: `${(estadio.extracaoPeriodo / maxExtracao) * 100}%` }}
                    >
                      <span className="text-[10px] font-bold text-white drop-shadow">
                        {estadio.extracaoPeriodo}
                      </span>
                    </div>
                  </div>
                  <div className="w-20 text-xs text-muted-foreground text-right">
                    Σ {estadio.extracaoAcumulada} {dados.unidade.replace("/ha", "")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Estádio</TableHead>
                  <TableHead className="font-semibold">Descrição</TableHead>
                  <TableHead className="text-right font-semibold">Período ({dados.unidade})</TableHead>
                  <TableHead className="text-right font-semibold">Acumulado ({dados.unidade})</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dados.estadios.map((estadio, i) => (
                  <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">{estadio.estadio}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{estadio.descricao}</TableCell>
                    <TableCell className="text-right font-mono">{estadio.extracaoPeriodo}</TableCell>
                    <TableCell className="text-right font-mono font-semibold">{estadio.extracaoAcumulada}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer Info */}
          <div className="mt-4 flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Fonte:</strong> {dados.fonteReferencia}. Valores calculados para produtividade de 4 ton/ha. 
              Os índices de exportação representam a porcentagem do nutriente extraído que é exportada nos grãos.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
