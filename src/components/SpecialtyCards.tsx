import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Wheat, Layers, Atom } from "lucide-react";

const specialties = [
  {
    FallbackIcon: Leaf,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/soja-icon.png",
    title: "SOJA",
    subtitle: "Manejo nutricional para máxima produtividade",
    topics: [
      "Inoculação e fixação biológica",
      "Correção de micronutrientes",
      "Manejo de potássio",
      "Nutrição reprodutiva",
      "Análise foliar estratégica",
    ],
    accentColor: "emerald",
    borderColor: "border-l-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "#10b981",
    tagText: "text-emerald-700",
    hoverBorder: "hover:border-emerald-300",
    link: "/soja",
  },
  {
    FallbackIcon: Wheat,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/milho-icon.png",
    title: "MILHO",
    subtitle: "Nutrição de precisão para alta performance",
    topics: [
      "Adubação nitrogenada",
      "Resposta a fósforo",
      "Manejo de zinco",
      "Nutrição V4-V8",
      "Potencial produtivo",
    ],
    accentColor: "amber",
    borderColor: "border-l-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "#f59e0b",
    tagText: "text-amber-700",
    hoverBorder: "hover:border-amber-300",
    link: null,
  },
  {
    FallbackIcon: Layers,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/soloforte-icon.png",
    title: "SOLOFORTE",
    subtitle: "Ferramentas de análise e consultoria técnica",
    topics: [
      "Interpretação de análises",
      "Recomendação técnica",
      "Laudo personalizado",
    ],
    accentColor: "orange",
    borderColor: "border-l-orange-500",
    iconBg: "bg-orange-50",
    iconColor: "#f97316",
    tagText: "text-orange-700",
    hoverBorder: "hover:border-orange-300",
    link: null,
  },
  {
    FallbackIcon: Atom,
    imageUrl: "https://afonsoraudinei.github.io/assets/icons/nutrientes-icon.png",
    title: "NUTRIENTES",
    subtitle: "Guia completo de macro e micronutrientes",
    topics: [
      "Nitrogênio (N)",
      "Fósforo (P)",
      "Potássio (K)",
      "Cálcio (Ca)",
      "Magnésio (Mg)",
      "Enxofre (S)",
      "Boro (B)",
      "Zinco (Zn)",
    ],
    accentColor: "cyan",
    borderColor: "border-l-cyan-500",
    iconBg: "bg-cyan-50",
    iconColor: "#06b6d4",
    tagText: "text-cyan-700",
    hoverBorder: "hover:border-cyan-300",
    link: "/nutrientes",
  },
];

const SpecialtyCards = () => {
  return (
    <section id="especialidades" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Áreas de <span className="gradient-text">Especialidade</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg">
            Conhecimento técnico aplicado às principais culturas do agronegócio brasileiro
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => {
            const CardWrapper = specialty.link ? Link : "div";
            const cardProps = specialty.link
              ? {
                  to: specialty.link,
                  "aria-label": `Acessar conteúdo sobre ${specialty.title}: ${specialty.subtitle}`,
                }
              : {
                  "aria-label": `${specialty.title}: ${specialty.subtitle} - Em breve`,
                };

            return (
              <CardWrapper
                key={specialty.title}
                {...(cardProps as any)}
                className={`
                  group relative overflow-hidden
                  rounded-2xl 
                  bg-white
                  border border-gray-200 ${specialty.hoverBorder}
                  border-l-4 ${specialty.borderColor}
                  shadow-sm hover:shadow-lg
                  p-6 lg:p-8
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  active:scale-[0.99]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  animate-fade-up
                `}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 lg:gap-5">
                      {/* Icon Container - Clean and Professional */}
                      <div 
                        className={`
                          w-16 h-16 lg:w-20 lg:h-20 
                          rounded-xl 
                          ${specialty.iconBg}
                          flex items-center justify-center
                          group-hover:scale-105
                          transition-transform duration-300
                          p-3
                          overflow-hidden
                        `}
                      >
                        <img 
                          src={specialty.imageUrl}
                          alt={`Ícone ${specialty.title}`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallbackContainer = target.nextElementSibling as HTMLElement;
                            if (fallbackContainer) {
                              fallbackContainer.style.display = 'flex';
                            }
                          }}
                        />
                        {/* Fallback Icon */}
                        <div 
                          className="hidden items-center justify-center w-full h-full"
                          style={{ display: 'none' }}
                        >
                          <specialty.FallbackIcon 
                            className="w-8 h-8 lg:w-10 lg:h-10" 
                            style={{ color: specialty.iconColor }}
                          />
                        </div>
                      </div>
                      
                      {/* Title & Subtitle */}
                      <div className="pt-1">
                        <h3 className="font-display font-bold text-xl lg:text-2xl text-gray-900 tracking-tight">
                          {specialty.title}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-500 mt-0.5 leading-relaxed">
                          {specialty.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div 
                      className={`
                        w-9 h-9 lg:w-10 lg:h-10 rounded-full
                        bg-gray-100 
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        translate-x-2 group-hover:translate-x-0
                        transition-all duration-300
                        hidden sm:flex
                      `}
                    >
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {specialty.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`
                          inline-flex items-center
                          px-2.5 py-1 rounded-md
                          text-xs lg:text-sm font-medium
                          bg-gray-100 ${specialty.tagText}
                          transition-colors duration-200
                          group-hover:bg-gray-50
                        `}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Arrow for mobile */}
                <div className="absolute bottom-5 right-5 sm:hidden">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyCards;
