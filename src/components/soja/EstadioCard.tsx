import { cn } from "@/lib/utils";
import { EstadioSoja, phaseColors } from "@/data/estadiosSoja";

interface EstadioCardProps {
  estadio: EstadioSoja;
  isActive: boolean;
  onClick: () => void;
}

const EstadioCard = ({ estadio, isActive, onClick }: EstadioCardProps) => {
  const colors = phaseColors[estadio.phase];

  return (
    <div
      onClick={onClick}
      className={cn(
        "min-w-[200px] md:min-w-[240px] flex-shrink-0 cursor-pointer transition-all duration-500",
        "bg-card/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center",
        "border-2 shadow-lg hover:shadow-xl",
        isActive 
          ? `${colors.border} scale-105 -translate-y-4 shadow-2xl` 
          : "border-border/50 hover:-translate-y-2"
      )}
    >
      <div
        className={cn(
          "w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl md:text-5xl",
          "border-4 transition-all duration-500",
          isActive ? `${colors.border} ${colors.bg}` : "border-muted bg-muted/30",
          isActive && "animate-bounce"
        )}
        style={{ animationDuration: '3s' }}
      >
        {estadio.icon}
      </div>
      
      <h3 className={cn(
        "font-display font-bold text-xl md:text-2xl mb-2 transition-colors",
        isActive ? colors.text : "text-foreground"
      )}>
        {estadio.name}
      </h3>
      
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {estadio.fullName}
      </p>
      
      <div className={cn(
        "pt-3 border-t-2 transition-colors",
        isActive ? colors.border : "border-border/30"
      )}>
        <span className={cn(
          "text-sm font-semibold",
          isActive ? colors.text : "text-muted-foreground"
        )}>
          Dia {estadio.day}
        </span>
      </div>
    </div>
  );
};

export default EstadioCard;
