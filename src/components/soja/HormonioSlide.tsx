import { cn } from "@/lib/utils";
import { EstadioHormonio, phaseColorsHormonios } from "@/data/hormoniosSoja";
import HormonioCard from "./HormonioCard";
import { Calendar, Zap, BookOpen } from "lucide-react";

interface HormonioSlideProps {
  estadio: EstadioHormonio;
  isActive: boolean;
}

const HormonioSlide = ({ estadio, isActive }: HormonioSlideProps) => {
  const colors = phaseColorsHormonios[estadio.fase];

  return (
    <div
      className={cn(
        "min-w-full px-2 md:px-4 transition-all duration-500",
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95 pointer-events-none"
      )}
    >
      <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl">
        {/* Header do Estádio */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 pb-6 border-b-2 border-primary">
          <div
            className={cn(
              "w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-xl",
              `bg-gradient-to-br ${colors.gradient}`
            )}
          >
            {estadio.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
              {estadio.titulo}
            </h3>
            <p className="text-lg md:text-xl font-semibold text-foreground mb-2">
              {estadio.nome}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              <span>{estadio.dias}</span>
            </div>
          </div>
        </div>

        {/* Contexto Fenológico */}
        <div className="bg-primary/5 rounded-2xl p-4 md:p-5 mb-6 border-l-4 border-primary">
          <h4 className="flex items-center gap-2 text-primary font-bold text-base md:text-lg mb-2">
            <BookOpen className="w-5 h-5" />
            Contexto Fenológico
          </h4>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-justify">
            {estadio.contexto}
          </p>
        </div>

        {/* Mapa de Atuação Hormonal */}
        <div className="mb-6">
          <h4 className="text-center text-primary font-bold text-lg md:text-xl mb-4">
            📊 Mapa de Atuação Hormonal
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {estadio.hormonios.map((hormonio, index) => (
              <HormonioCard key={hormonio.sigla} hormonio={hormonio} index={index} />
            ))}
          </div>
        </div>

        {/* Função Crítica */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 md:p-6 border-2 border-primary">
          <h4 className="flex items-center gap-2 text-primary font-bold text-lg mb-3">
            <Zap className="w-5 h-5" />
            Função Crítica Integrada
          </h4>
          <p className="text-foreground text-sm md:text-base leading-relaxed font-medium">
            {estadio.funcaoCritica}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HormonioSlide;
