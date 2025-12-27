import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { estadiosHormonios } from "@/data/hormoniosSoja";
import HormonioSlide from "./HormonioSlide";

interface HormoniosCarouselProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const HormoniosCarousel = ({ selectedIndex, onSelect }: HormoniosCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      trackRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToIndex(selectedIndex);
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      onSelect(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < estadiosHormonios.length - 1) {
      onSelect(selectedIndex + 1);
    }
  };

  // Barra de progresso
  const progressPercent = ((selectedIndex + 1) / estadiosHormonios.length) * 100;

  return (
    <div className="relative">
      {/* Barra de Progresso */}
      <div className="h-1.5 bg-secondary rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Navegação Superior */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          disabled={selectedIndex === 0}
          className="w-12 h-12 rounded-full shadow-lg bg-card hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {estadiosHormonios.map((estadio, index) => (
            <button
              key={estadio.id}
              onClick={() => onSelect(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-10 bg-primary"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              title={estadio.titulo}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={selectedIndex === estadiosHormonios.length - 1}
          className="w-12 h-12 rounded-full shadow-lg bg-card hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {estadiosHormonios.map((estadio, index) => (
          <div key={estadio.id} className="min-w-full snap-center">
            <HormonioSlide estadio={estadio} isActive={index === selectedIndex} />
          </div>
        ))}
      </div>

      {/* Info do Slide Atual */}
      <div className="text-center mt-4 text-muted-foreground text-sm">
        {selectedIndex + 1} de {estadiosHormonios.length} • {estadiosHormonios[selectedIndex].titulo}
      </div>
    </div>
  );
};

export default HormoniosCarousel;
