import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { estadiosSoja, EstadioSoja } from "@/data/estadiosSoja";
import EstadioCard from "./EstadioCard";

interface EstadioCarouselProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const EstadioCarousel = ({ selectedIndex, onSelect }: EstadioCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const cards = trackRef.current.children;
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = trackRef.current.offsetWidth;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const scrollPosition = cardCenter - containerWidth / 2;
        
        trackRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
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
    if (selectedIndex < estadiosSoja.length - 1) {
      onSelect(selectedIndex + 1);
    }
  };

  return (
    <div className="relative py-8">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrev}
        disabled={selectedIndex === 0}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg bg-card hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={selectedIndex === estadiosSoja.length - 1}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-lg bg-card hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-14 md:px-20 py-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {estadiosSoja.map((estadio, index) => (
          <EstadioCard
            key={estadio.name}
            estadio={estadio}
            isActive={index === selectedIndex}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {estadiosSoja.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-8 bg-primary' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EstadioCarousel;
