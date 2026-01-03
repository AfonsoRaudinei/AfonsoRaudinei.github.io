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
    link: "/soloforte",
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
    link: "/nutrientes",
  },
];

const SpecialtyCards = () => {
  return (
    <section id="especialidades" className="py-20 px-6 lg:px-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Áreas de <span className="text-[#4ADE80]">Especialidade</span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
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
                  rounded-xl
                  bg-white
                  border border-[#E5E7EB]
                  shadow-[0_2px_8px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                  p-6 lg:p-8
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:-translate-y-0.5
                  active:scale-[0.995]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] focus-visible:ring-offset-2
                  animate-fade-up
                `}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 lg:gap-5">
                      {/* Icon Container - Avenue Style */}
                      <div 
                        className={`
                          w-14 h-14 lg:w-16 lg:h-16 
                          rounded-xl 
                          bg-[#1E3A2F]
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
                          className="w-full h-full object-contain brightness-0 invert"
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
                          <specialty.FallbackIcon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Title & Subtitle */}
                      <div className="pt-1">
                        <h3 className="font-display font-bold text-lg lg:text-xl text-[#1A1A1A] tracking-tight">
                          {specialty.title}
                        </h3>
                        <p className="text-sm text-[#6B7280] mt-0.5 leading-relaxed">
                          {specialty.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div 
                      className={`
                        w-9 h-9 rounded-full
                        bg-[#F3F4F6] 
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        translate-x-2 group-hover:translate-x-0
                        transition-all duration-300
                        hidden sm:flex
                      `}
                    >
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                  </div>

                  {/* Tags - Avenue Style Pills */}
                  <div className="flex flex-wrap gap-2">
                    {specialty.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className={`
                          inline-flex items-center
                          px-3 py-1.5 rounded-full
                          text-xs font-medium
                          bg-[#F3F4F6] text-[#1A1A1A]
                          transition-colors duration-200
                          group-hover:bg-[#D1FAE5] group-hover:text-[#1E3A2F]
                        `}
                      >
                        {topic}
                      </span>
                    ))}
                    {specialty.topics.length > 4 && (
                      <span
                        className={`
                          inline-flex items-center
                          px-3 py-1.5 rounded-full
                          text-xs font-medium
                          bg-[#D1FAE5] text-[#1E3A2F]
                        `}
                      >
                        +{specialty.topics.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA Button - Avenue Green */}
                  {specialty.link && (
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] group-hover:text-[#22C55E] transition-colors">
                        Explorar conteúdo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Arrow for mobile */}
                <div className="absolute bottom-5 right-5 sm:hidden">
                  <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#4ADE80] transition-colors" />
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
