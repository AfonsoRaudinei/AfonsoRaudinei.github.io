import { memo } from "react";
import { FlaskConical } from "lucide-react";
import HormoniosCarousel from "./HormoniosCarousel";

interface HormoniosTabProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const HormoniosTab = memo(({ selectedIndex, onSelect }: HormoniosTabProps) => {
  return (
    <div className="animate-fade-in">
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto max-w-6xl">
          {/* Resumo Executivo */}
          <div className="bg-card/95 backdrop-blur rounded-3xl p-6 md:p-8 shadow-xl border border-border/50 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FlaskConical className="w-8 h-8 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Hormônios Vegetais e Micronutrientes
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-justify">
              A performance produtiva da soja (<em>Glycine max</em>) resulta da interação sincronizada entre{" "}
              <strong className="text-foreground">regulação hormonal</strong> e{" "}
              <strong className="text-foreground">disponibilidade de micronutrientes</strong> ao longo dos estádios fenológicos. 
              Este relatório consolida evidências científicas sobre a atuação coordenada de{" "}
              <strong className="text-foreground">cinco classes hormonais</strong> (auxinas, citocininas, giberelinas, etileno e ácido abscísico) 
              e <strong className="text-foreground">oito micronutrientes essenciais</strong> (Fe, Zn, Mn, Cu, B, Mo, Co, Ni) durante as fases 
              vegetativas (VE a VN) e reprodutivas (R1 a R8).
            </p>
          </div>

          {/* Carousel de Hormônios */}
          <HormoniosCarousel
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          />
        </div>
      </section>
    </div>
  );
});

HormoniosTab.displayName = "HormoniosTab";

export default HormoniosTab;
