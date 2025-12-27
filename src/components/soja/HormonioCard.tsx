import { cn } from "@/lib/utils";
import { HormonioAcao } from "@/data/hormoniosSoja";
import { MapPin } from "lucide-react";

interface HormonioCardProps {
  hormonio: HormonioAcao;
  index: number;
}

const HormonioCard = ({ hormonio, index }: HormonioCardProps) => {
  return (
    <div
      className="flex items-start gap-4 bg-card rounded-2xl p-4 md:p-5 shadow-lg border border-border/50 hover:shadow-xl hover:translate-x-2 transition-all duration-300 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Ícone do Hormônio */}
      <div
        className={cn(
          "w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0",
          "bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
          hormonio.cor
        )}
      >
        <span className="text-white font-bold text-lg md:text-xl tracking-wide">
          {hormonio.sigla}
        </span>
      </div>

      {/* Informações */}
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-bold text-base md:text-lg text-foreground mb-1">
          {hormonio.nome}
        </h4>
        <div className="flex items-center gap-1.5 text-primary text-xs md:text-sm font-medium mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{hormonio.local}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {hormonio.descricao}
        </p>
      </div>
    </div>
  );
};

export default HormonioCard;
