import { useState, useMemo } from "react";
import { 
  TrendingUp, Wheat, BarChart3, Info, Filter, 
  FlaskConical, Target, Scale, ChevronDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Dados de absorção por estádio fenológico (%)
const absorptionPercentages: Record<string, Record<string, number>> = {
  N: { V1_V3: 10, V4: 25, V5: 40, R1: 55, R3: 75, R5: 90, R6: 97.5 },
  P: { V1_V3: 7.5, V4: 17.5, V5: 30, R1: 45, R3: 70, R5: 90, R6: 97.5 },
  K: { V1_V3: 12.5, V4: 30, V5: 52.5, R1: 70, R3: 87.5, R5: 97.5, R6: 97.5 },
  Ca: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 85, R5: 97.5, R6: 97.5 },
  Mg: { V1_V3: 12.5, V4: 35, V5: 55, R1: 75, R3: 92.5, R5: 97.5, R6: 97.5 },
  S: { V1_V3: 15, V4: 35, V5: 55, R1: 75, R3: 92.5, R5: 97.5, R6: 97.5 },
  B: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 87.5, R5: 97.5, R6: 97.5 },
  Cu: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 87.5, R5: 97.5, R6: 97.5 },
  Fe: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 87.5, R5: 97.5, R6: 97.5 },
  Mn: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 87.5, R5: 97.5, R6: 97.5 },
  Zn: { V1_V3: 7.5, V4: 25, V5: 45, R1: 65, R3: 87.5, R5: 97.5, R6: 97.5 },
  Mo: { V1_V3: 3.5, V4: 12.5, V5: 25, R1: 40, R3: 77.5, R5: 92.5, R6: 97.5 },
  Co: { V1_V3: 3.5, V4: 12.5, V5: 25, R1: 40, R3: 77.5, R5: 92.5, R6: 97.5 },
  Ni: { V1_V3: 3.5, V4: 12.5, V5: 25, R1: 40, R3: 77.5, R5: 92.5, R6: 97.5 },
};

// Dados de nutrientes por fonte
const nutrientData: Record<string, Record<string, { Extração: Record<string, number>, Exportação: Record<string, number> }>> = {
  Autores: {
    "Araújo (2023)": {
      Exportação: { N: 41.36, P: 3.40, K: 9.93, Ca: 0.60, Mg: 0.86, S: 1.28, Cu: 4.32, Fe: 8.93, Zn: 15.64, Mn: 4.28, B: 12.38, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 59.94, P: 5.23, K: 18.74, Ca: 2.39, Mg: 2.70, S: 2.98, Cu: 8.63, Fe: 44.67, Zn: 31.28, Mn: 21.41, B: 32.58, Mo: 0, Co: 0, Ni: 0 }
    },
    "Santos et al. (2008)": {
      Exportação: { N: 46.62, P: 2.61, K: 10.52, Ca: 0.74, Mg: 0.75, S: 0.89, Cu: 27.39, Fe: 29.81, Zn: 27.28, Mn: 5.86, B: 9.11, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 67.57, P: 4.02, K: 19.84, Ca: 3.30, Mg: 2.81, S: 2.06, Cu: 52.98, Fe: 149.08, Zn: 53.38, Mn: 30.85, B: 23.09, Mo: 0, Co: 0, Ni: 0 }
    },
    "Bataglia & Mascarenhas (1977)": {
      Exportação: { N: 76.00, P: 5.70, K: 32.00, Ca: 1.90, Mg: 2.90, S: 3.10, Cu: 26.00, Fe: 46.00, Zn: 61.00, Mn: 13.00, B: 77.00, Mo: 6, Co: 0, Ni: 0 },
      Extração: { N: 64.00, P: 4.70, K: 18.00, Ca: 11.60, Mg: 6.70, S: 0, Cu: 14.00, Fe: 115.00, Zn: 43.00, Mn: 43.00, B: 24.00, Mo: 5, Co: 0, Ni: 0 }
    },
    "EMBRAPA": {
      Exportação: { N: 83.00, P: 8.40, K: 25.00, Ca: 13.50, Mg: 7.30, S: 9.00, Cu: 0, Fe: 0, Zn: 0, Mn: 0, B: 0, Mo: 7, Co: 0, Ni: 0 },
      Extração: { N: 51.00, P: 1.00, K: 2.00, Ca: 3.10, Mg: 2.00, S: 5.00, Cu: 1, Fe: 7, Zn: 4, Mn: 3, B: 2, Mo: 5, Co: 0, Ni: 0 }
    },
    "Kurihara et al. (2013)": {
      Exportação: { N: 42.33, P: 3.83, K: 7.29, Ca: 0.61, Mg: 0.54, S: 2.78, Cu: 13.48, Fe: 15.51, Zn: 31.66, Mn: 5.39, B: 10.07, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 61.35, P: 5.89, K: 13.76, Ca: 2.13, Mg: 2.39, S: 5.96, Cu: 26.92, Fe: 78.00, Zn: 63.15, Mn: 27.10, B: 26.23, Mo: 0, Co: 0, Ni: 0 }
    },
  },
  Tecnologia: {
    "Enlist": {
      Exportação: { N: 37.7, P: 29.9, K: 15.8, Ca: 6.1, Mg: 18.4, S: 37.4, Cu: 29.1, Fe: 16.8, Zn: 29.1, Mn: 7.2, B: 22.8, Mo: 25.8, Co: 5.0, Ni: 21.1 },
      Extração: { N: 638.5, P: 142.0, K: 55.7, Ca: 147.2, Mg: 6.6, S: 8.7, Cu: 163.8, Fe: 2678.8, Zn: 674.8, Mn: 89.6, B: 692.2, Mo: 58.2, Co: 2.0, Ni: 9.6 }
    },
    "Xtend": {
      Exportação: { N: 3.6, P: 29.9, K: 15.4, Ca: 3.8, Mg: 13.2, S: 31.5, Cu: 29.8, Fe: 22.3, Zn: 25.1, Mn: 4.6, B: 21.5, Mo: 41.3, Co: 4.0, Ni: 2.0 },
      Extração: { N: 763.6, P: 16.5, K: 562.6, Ca: 252.7, Mg: 78.1, S: 124.3, Cu: 186.3, Fe: 4999.5, Zn: 758.8, Mn: 1184.0, B: 735.1, Mo: 44.1, Co: 2.0, Ni: 11.2 }
    },
    "Roundup Ready": {
      Exportação: { N: 38.1, P: 31.6, K: 19.3, Ca: 4.8, Mg: 17.7, S: 37.4, Cu: 33.5, Fe: 18.3, Zn: 31.3, Mn: 7.9, B: 21.6, Mo: 25.0, Co: 4.0, Ni: 27.3 },
      Extração: { N: 747.2, P: 151.7, K: 574.7, Ca: 187.0, Mg: 77.0, S: 11.4, Cu: 171.3, Fe: 2919.4, Zn: 756.8, Mn: 996.5, B: 776.3, Mo: 61.8, Co: 2.7, Ni: 11.4 }
    }
  },
  Cultivar: {
    "73i75RSF": {
      Exportação: { N: 57.2, P: 5.5, K: 19.0, Ca: 2.2, Mg: 2.9, S: 2.9, Cu: 9.7, Fe: 31.1, Zn: 31.6, Mn: 2.5, B: 3.9, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 82.9, P: 8.46, K: 35.85, Ca: 8.8, Mg: 9.06, S: 6.74, Cu: 19.4, Fe: 155.5, Zn: 63.2, Mn: 12.5, B: 10.26, Mo: 0, Co: 0, Ni: 0 }
    },
    "M6210 Ipro": {
      Exportação: { N: 58.6, P: 5.2, K: 19.9, Ca: 2.2, Mg: 2.6, S: 3.0, Cu: 8.4, Fe: 28.8, Zn: 28.7, Mn: 2.6, B: 31.3, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 84.93, P: 8.0, K: 37.55, Ca: 8.8, Mg: 8.13, S: 6.98, Cu: 16.8, Fe: 144.0, Zn: 57.4, Mn: 13.0, B: 82.37, Mo: 0, Co: 0, Ni: 0 }
    },
    "AS3640i2x": {
      Exportação: { N: 62.1, P: 5.6, K: 19.3, Ca: 1.7, Mg: 2.4, S: 3.2, Cu: 8.8, Fe: 76.0, Zn: 32.6, Mn: 18.8, B: 33.7, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 90.0, P: 8.62, K: 36.42, Ca: 6.8, Mg: 7.5, S: 7.44, Cu: 17.6, Fe: 380.0, Zn: 65.2, Mn: 94.0, B: 88.68, Mo: 0, Co: 0, Ni: 0 }
    },
    "DM 74K75": {
      Exportação: { N: 63.2, P: 4.7, K: 19.2, Ca: 2.2, Mg: 2.4, S: 3.0, Cu: 7.6, Fe: 36.7, Zn: 26.7, Mn: 19.8, B: 35.3, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 91.59, P: 7.23, K: 36.23, Ca: 8.8, Mg: 7.5, S: 6.98, Cu: 15.2, Fe: 183.5, Zn: 53.4, Mn: 99.0, B: 92.89, Mo: 0, Co: 0, Ni: 0 }
    },
    "NEOGEN 770": {
      Exportação: { N: 59.3, P: 5.2, K: 16.3, Ca: 2.7, Mg: 2.7, S: 3.0, Cu: 9.4, Fe: 51.0, Zn: 32.2, Mn: 21.2, B: 38.0, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 85.94, P: 8.0, K: 30.75, Ca: 10.8, Mg: 8.44, S: 6.98, Cu: 18.8, Fe: 255.0, Zn: 64.4, Mn: 106.0, B: 100.0, Mo: 0, Co: 0, Ni: 0 }
    },
    "Desafio RR": {
      Exportação: { N: 57.8, P: 5.2, K: 19.6, Ca: 2.7, Mg: 2.6, S: 3.1, Cu: 9.1, Fe: 22.7, Zn: 34.3, Mn: 22.5, B: 31.6, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 83.77, P: 8.0, K: 36.98, Ca: 10.8, Mg: 8.13, S: 7.21, Cu: 18.2, Fe: 113.5, Zn: 68.6, Mn: 112.5, B: 83.16, Mo: 0, Co: 0, Ni: 0 }
    },
    "CZ37B43 I2X": {
      Exportação: { N: 63.6, P: 5.1, K: 18.1, Ca: 2.6, Mg: 2.9, S: 3.3, Cu: 9.0, Fe: 41.6, Zn: 29.4, Mn: 22.9, B: 35.5, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 92.17, P: 7.85, K: 34.15, Ca: 10.4, Mg: 9.06, S: 7.67, Cu: 18.0, Fe: 208.0, Zn: 58.8, Mn: 114.5, B: 93.42, Mo: 0, Co: 0, Ni: 0 }
    },
    "Juruena Ipro": {
      Exportação: { N: 58.0, P: 5.8, K: 21.8, Ca: 2.5, Mg: 2.6, S: 2.9, Cu: 7.4, Fe: 15.1, Zn: 44.9, Mn: 29.9, B: 39.6, Mo: 0, Co: 0, Ni: 0 },
      Extração: { N: 84.06, P: 8.92, K: 41.13, Ca: 10.0, Mg: 8.13, S: 6.74, Cu: 14.8, Fe: 75.5, Zn: 89.8, Mn: 149.5, B: 104.21, Mo: 0, Co: 0, Ni: 0 }
    },
  },
};

// Índices de exportação
const exportIndices: Record<string, string> = {
  N: "50-70%", P: "70-90%", K: "50-60%", Ca: "10-20%",
  Mg: "20-30%", S: "20-40%", B: "20-30%", Cu: "25-35%",
  Fe: "15-25%", Mn: "5-10%", Zn: "25-35%", Mo: "20-40%",
  Co: "40-50%", Ni: "20-30%",
};

const nutrientNames: Record<string, string> = {
  N: 'Nitrogênio', P: 'Fósforo', K: 'Potássio', Ca: 'Cálcio',
  Mg: 'Magnésio', S: 'Enxofre', B: 'Boro', Cu: 'Cobre',
  Fe: 'Ferro', Mn: 'Manganês', Zn: 'Zinco', Mo: 'Molibdênio',
  Co: 'Cobalto', Ni: 'Níquel',
};

const stages = ['V1-V3', 'V4', 'V5', 'R1', 'R3', 'R5', 'R6'];
const stageKeys = ['V1_V3', 'V4', 'V5', 'R1', 'R3', 'R5', 'R6'];

export default function AbsorcaoAnalyzer() {
  const [sourceType, setSourceType] = useState<string>("Autores");
  const [selectedSource, setSelectedSource] = useState<string>("Araújo (2023)");
  const [selectedNutrient, setSelectedNutrient] = useState<string>("N");
  const [dataType, setDataType] = useState<string>("Extração");
  const [expectedYield, setExpectedYield] = useState<number>(4.2);
  const [viewMode, setViewMode] = useState<string>("accumulated");

  const sources = useMemo(() => Object.keys(nutrientData[sourceType] || {}), [sourceType]);

  const chartData = useMemo(() => {
    const baseValue = nutrientData[sourceType]?.[selectedSource]?.[dataType as 'Extração' | 'Exportação']?.[selectedNutrient] || 0;
    const percentages = absorptionPercentages[selectedNutrient];
    const isMacro = ['N', 'P', 'K', 'Ca', 'Mg', 'S'].includes(selectedNutrient);
    const valuePerTon = isMacro ? baseValue : baseValue / 1000;
    const totalValueInKg = valuePerTon * expectedYield;

    const unit = totalValueInKg < 1 ? 'g' : 'kg';
    const multiplier = unit === 'g' ? 1000 : 1;

    if (viewMode === 'accumulated') {
      return {
        data: stageKeys.map((key, index) => ({
          stage: stages[index],
          percentage: percentages[key],
          value: (percentages[key] / 100) * totalValueInKg * multiplier
        })),
        unit,
        total: totalValueInKg * multiplier
      };
    } else {
      return {
        data: stageKeys.map((key, index) => {
          const currentPercentage = percentages[key];
          const previousPercentage = index > 0 ? percentages[stageKeys[index - 1]] : 0;
          const stagePercentage = currentPercentage - previousPercentage;
          return {
            stage: stages[index],
            percentage: stagePercentage,
            value: (stagePercentage / 100) * totalValueInKg * multiplier
          };
        }),
        unit,
        total: totalValueInKg * multiplier
      };
    }
  }, [sourceType, selectedSource, selectedNutrient, dataType, expectedYield, viewMode]);

  const maxValue = Math.max(...chartData.data.map(d => d.value));
  const isDataCalculated = (nutrientData[sourceType]?.[selectedSource]?.[dataType as 'Extração' | 'Exportação']?.[selectedNutrient] || 0) === 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <Badge variant="secondary" className="mb-2">
          <Wheat className="w-3 h-3 mr-1" />
          Análise Avançada
        </Badge>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Absorção de Nutrientes em Soja
        </h2>
        <p className="text-muted-foreground text-sm">
          Análise por Estádio Fenológico • Extração vs Exportação
        </p>
      </div>

      {/* Filtros */}
      <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            Filtros de Análise
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">1. Tipo de Fonte</Label>
              <Select value={sourceType} onValueChange={(v) => { setSourceType(v); setSelectedSource(Object.keys(nutrientData[v])[0]); }}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Autores">Autores</SelectItem>
                  <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="Cultivar">Cultivar</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">2. {sourceType === 'Autores' ? 'Autor' : sourceType === 'Tecnologia' ? 'Tecnologia' : 'Cultivar'}</Label>
              <Select value={selectedSource} onValueChange={setSelectedSource}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sources.map(source => (
                    <SelectItem key={source} value={source}>{source}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">3. Nutriente</Label>
              <Select value={selectedNutrient} onValueChange={setSelectedNutrient}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="N">Nitrogênio (N)</SelectItem>
                  <SelectItem value="P">Fósforo (P)</SelectItem>
                  <SelectItem value="K">Potássio (K)</SelectItem>
                  <SelectItem value="Ca">Cálcio (Ca)</SelectItem>
                  <SelectItem value="Mg">Magnésio (Mg)</SelectItem>
                  <SelectItem value="S">Enxofre (S)</SelectItem>
                  <SelectItem value="B">Boro (B)</SelectItem>
                  <SelectItem value="Cu">Cobre (Cu)</SelectItem>
                  <SelectItem value="Fe">Ferro (Fe)</SelectItem>
                  <SelectItem value="Mn">Manganês (Mn)</SelectItem>
                  <SelectItem value="Zn">Zinco (Zn)</SelectItem>
                  <SelectItem value="Mo">Molibdênio (Mo)</SelectItem>
                  <SelectItem value="Co">Cobalto (Co)</SelectItem>
                  <SelectItem value="Ni">Níquel (Ni)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">4. Tipo de Dado</Label>
              <Select value={dataType} onValueChange={setDataType}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Extração">Extração (Planta toda)</SelectItem>
                  <SelectItem value="Exportação">Exportação (Grãos)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">5. Produtividade (ton/ha)</Label>
              <Input 
                type="number" 
                value={expectedYield} 
                onChange={(e) => setExpectedYield(parseFloat(e.target.value) || 4.2)}
                step="0.1"
                min="0.1"
                className="h-10"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold text-primary">6. Visualização</Label>
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="accumulated">Acumulado</SelectItem>
                  <SelectItem value="perStage">Por Estádio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Card className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/30 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-4">
            <p className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-300">
              {chartData.total.toFixed(1)}
            </p>
            <p className="text-xs text-muted-foreground">{chartData.unit}/ha</p>
            <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1">Total Calculado</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/30 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <p className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300">
              {expectedYield}
            </p>
            <p className="text-xs text-muted-foreground">ton/ha</p>
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-1">Produtividade</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/30 border-purple-200 dark:border-purple-800">
          <CardContent className="p-4">
            <p className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-purple-300">
              {exportIndices[selectedNutrient]}
            </p>
            <p className="text-xs text-muted-foreground">do extraído</p>
            <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mt-1">Índice Exportação</p>
          </CardContent>
        </Card>

        <Card className="text-center bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/30 border-amber-200 dark:border-amber-800">
          <CardContent className="p-4">
            <p className="text-2xl md:text-3xl font-bold text-amber-700 dark:text-amber-300">
              R3-R5
            </p>
            <p className="text-xs text-muted-foreground">estádio</p>
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mt-1">Pico Absorção</p>
          </CardContent>
        </Card>
      </div>

      {/* Legenda */}
      <div className="flex flex-wrap gap-4 justify-center p-3 bg-card/50 rounded-xl border border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
          <span className="text-xs text-muted-foreground">Dados Originais (Literatura)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs text-muted-foreground">Dados Calculados (Índices)</span>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <Card className="border-border/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Curva de Absorção {viewMode === 'accumulated' ? 'Acumulada' : 'Por Estádio'} - {nutrientNames[selectedNutrient]} ({dataType})
            {isDataCalculated && (
              <Badge variant="outline" className="ml-2 text-blue-600 border-blue-300">
                <FlaskConical className="w-3 h-3 mr-1" />
                Calculado
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {chartData.data.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-14 text-xs font-semibold text-muted-foreground">{item.stage}</div>
                <div className="flex-1 h-8 bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-700 flex items-center justify-end pr-3 ${
                      isDataCalculated 
                        ? 'bg-gradient-to-r from-blue-400 to-blue-600' 
                        : 'bg-gradient-to-r from-emerald-400 to-emerald-600'
                    }`}
                    style={{ width: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%`, minWidth: item.value > 0 ? '40px' : '0' }}
                  >
                    <span className="text-xs font-bold text-white drop-shadow">
                      {item.value.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="w-16 text-xs text-muted-foreground text-right font-mono">
                  {item.percentage.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Dados */}
      <Card className="border-border/50 overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Tabela Detalhada
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Estádio</TableHead>
                  <TableHead className="text-right font-semibold">% {viewMode === 'accumulated' ? 'Acumulada' : 'do Período'}</TableHead>
                  <TableHead className="text-right font-semibold">Valor ({chartData.unit}/ha)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {chartData.data.map((item, i) => {
                  // Define color intensity based on percentage
                  const getPercentageStyle = (percentage: number) => {
                    if (percentage >= 20) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700";
                    if (percentage >= 15) return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-700";
                    if (percentage >= 10) return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-700";
                    if (percentage >= 5) return "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 border-orange-200 dark:border-orange-700";
                    return "bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
                  };
                  
                  return (
                    <TableRow key={i} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">
                        <span className="inline-flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"></span>
                          {item.stage}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-bold border ${getPercentageStyle(item.percentage)}`}>
                          {item.percentage.toFixed(1)}%
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-mono font-semibold text-foreground">{item.value.toFixed(2)}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Índices de Exportação */}
      <Accordion type="single" collapsible>
        <AccordionItem value="indices" className="border rounded-xl overflow-hidden">
          <AccordionTrigger className="px-6 py-4 bg-muted/30 hover:bg-muted/50 hover:no-underline">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-primary" />
              <span className="font-semibold">Índices de Exportação por Nutriente</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-4">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Os índices de exportação representam a porcentagem do nutriente extraído que é exportado nos grãos. 
              Valores baseados em pesquisas da Embrapa e literatura científica.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {Object.entries(exportIndices).map(([nutrient, value]) => (
                <div key={nutrient} className="p-3 bg-card rounded-lg border border-border/50 text-center">
                  <p className="text-xs font-semibold text-primary mb-1">{nutrientNames[nutrient]} ({nutrient})</p>
                  <p className="text-lg font-bold text-foreground">{value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              * Valores calculados devem ser validados com análises locais quando possível.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Info Footer */}
      <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
        <Info className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
        <div className="text-sm text-muted-foreground space-y-1">
          <p><strong>Fonte:</strong> {selectedSource} • Dados compilados de literatura científica brasileira</p>
          <p><strong>Autor:</strong> Raudinei Afonso · Engenheiro Agrônomo</p>
        </div>
      </div>
    </div>
  );
}
