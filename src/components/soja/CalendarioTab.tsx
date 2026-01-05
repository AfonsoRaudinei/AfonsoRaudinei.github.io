import { memo } from "react";
import EstadioCarousel from "./EstadioCarousel";
import EstadioInfoPanel from "./EstadioInfoPanel";
import { estadiosSoja, phaseColors } from "@/data/estadiosSoja";

interface CalendarioTabProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const CalendarioTab = memo(({ selectedIndex, onSelect }: CalendarioTabProps) => {
  const selectedEstadio = estadiosSoja[selectedIndex];
  
  const phases = Object.entries(phaseColors).map(([key, value]) => ({
    key,
    ...value
  }));

  return (
    <div className="animate-fade-in">
      {/* Phase Legend */}
      <section className="py-6 px-4 md:px-8 lg:px-16 xl:px-20 bg-secondary/30 border-y border-border/50">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {phases.map((phase) => (
              <div
                key={phase.key}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${phase.bg} ${phase.text} text-sm font-medium`}
              >
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                {phase.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Estádios Fenológicos
            </h2>
            <p className="text-muted-foreground">
              Clique em um estádio para ver informações detalhadas sobre doenças, pragas e nutrição
            </p>
          </div>

          {/* Carousel */}
          <EstadioCarousel
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          />

          {/* Info Panel */}
          <div className="mt-8 md:mt-12">
            <EstadioInfoPanel estadio={selectedEstadio} />
          </div>
        </div>
      </section>
    </div>
  );
});

CalendarioTab.displayName = "CalendarioTab";

export default CalendarioTab;
