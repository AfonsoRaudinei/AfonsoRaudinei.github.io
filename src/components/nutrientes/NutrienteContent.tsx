import { useParams, Navigate, useLocation } from "react-router-dom";
import { getNutrienteBySlug } from "@/data/nutrientes";
import { Droplets } from "lucide-react";
import AbsorcaoAnalyzer from "./AbsorcaoAnalyzer";
import NitrogenioContent from "./NitrogenioContent";
import FosforoContent from "./FosforoContent";
import ManganeContent from "./ManganeContent";
import PotassioContent from "./PotassioContent";
import CalcioContent from "./CalcioContent";
import MagnesioContent from "./MagnesioContent";
import EnxofreContent from "./EnxofreContent";
import BoroContent from "./BoroContent";
import CloroContent from "./CloroContent";
import CobreContent from "./CobreContent";
import FerroContent from "./FerroContent";
import ZincoContent from "./ZincoContent";
import NiquelContent from "./NiquelContent";
import MolibdenioContent from "./MolibdenioContent";
import CobaltoContent from "./CobaltoContent";
import SilicioContent from "./SilicioContent";

const nutrientComponents: Record<string, React.ComponentType> = {
  nitrogenio: NitrogenioContent,
  fosforo: FosforoContent,
  potassio: PotassioContent,
  calcio: CalcioContent,
  magnesio: MagnesioContent,
  enxofre: EnxofreContent,
  boro: BoroContent,
  cloro: CloroContent,
  cobre: CobreContent,
  ferro: FerroContent,
  manganes: ManganeContent,
  zinco: ZincoContent,
  niquel: NiquelContent,
  molibdenio: MolibdenioContent,
  cobalto: CobaltoContent,
  silicio: SilicioContent,
};

export function NutrienteContent() {
  const { slug } = useParams();
  const location = useLocation();

  // Render absorption analyzer tool
  if (location.pathname === "/nutrientes/analise-absorcao") {
    return (
      <div className="p-6 lg:p-8 max-w-6xl mx-auto animate-fade-in">
        <AbsorcaoAnalyzer />
      </div>
    );
  }
  
  // Default to nitrogen if no slug
  if (!slug) {
    return <Navigate to="/nutrientes/nitrogenio" replace />;
  }

  const nutriente = getNutrienteBySlug(slug);
  
  if (!nutriente) {
    return <Navigate to="/nutrientes/nitrogenio" replace />;
  }

  // Check if there's a dedicated component for this nutrient
  const NutrientComponent = nutrientComponents[slug];
  
  if (NutrientComponent) {
    return (
      <div key={slug} className="animate-fade-in">
        <NutrientComponent />
      </div>
    );
  }

  // Generic content for nutrients without dedicated pages
  return (
    <div key={slug} className="p-6 lg:p-8 max-w-6xl mx-auto animate-fade-in">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 mb-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
            nutriente.tipo === 'macro' 
              ? 'bg-gradient-to-br from-emerald-400 to-green-500'
              : 'bg-gradient-to-br from-blue-400 to-cyan-500'
          }`}>
            <span className="text-4xl font-bold text-white">{nutriente.simbolo}</span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              {nutriente.nome} ({nutriente.simbolo})
            </h1>
            <p className="text-zinc-400 text-sm">
              {nutriente.tipo === 'macro' ? 'Macronutriente' : 'Micronutriente'}
              {nutriente.categoria && ` • ${nutriente.categoria}`}
            </p>
          </div>
        </div>
      </div>

      {/* Function Card */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50">
        <h2 className="text-lg font-semibold text-foreground mb-4">Função Principal</h2>
        <p className="text-muted-foreground leading-relaxed">{nutriente.funcao}</p>
      </section>

      {/* Coming Soon */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900/50">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
            <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Conteúdo Completo em Breve</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Estamos preparando informações detalhadas sobre {nutriente.nome}, incluindo fontes, 
              ciclo no solo, funções metabólicas, sintomas de deficiência e recomendações de manejo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
