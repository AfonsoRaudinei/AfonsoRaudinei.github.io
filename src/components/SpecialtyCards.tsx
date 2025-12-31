import { Link } from "react-router-dom";
import { Sprout, Wheat, Layers, Atom, ArrowRight } from "lucide-react";

const specialties = [
  {
    icon: Sprout,
    title: "SOJA",
    subtitle: "Manejo nutricional para máxima produtividade",
    topics: [
      "Inoculação e fixação biológica",
      "Correção de micronutrientes",
      "Manejo de potássio",
      "Nutrição reprodutiva",
      "Análise foliar estratégica",
    ],
    gradient: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
    tagBg: "bg-emerald-50/80 text-emerald-700 border-emerald-200/50",
    link: "/soja",
  },
  {
    icon: Wheat,
    title: "MILHO",
    subtitle: "Nutrição de precisão para alta performance",
    topics: [
      "Adubação nitrogenada",
      "Resposta a fósforo",
      "Manejo de zinco",
      "Nutrição V4-V8",
      "Potencial produtivo",
    ],
    gradient: "from-amber-400 to-yellow-500",
    bgGradient: "from-amber-400/10 via-amber-400/5 to-transparent",
    iconBg: "bg-gradient-to-br from-amber-400 to-yellow-500",
    tagBg: "bg-amber-50/80 text-amber-700 border-amber-200/50",
    link: null,
  },
  {
    icon: Layers,
    title: "SOLOFORTE",
    subtitle: "Ferramentas de análise e consultoria técnica",
    topics: [
      "Interpretação de análises",
      "Recomendação técnica",
      "Laudo personalizado",
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    tagBg: "bg-orange-50/80 text-orange-700 border-orange-200/50",
    link: null,
  },
  {
    icon: Atom,
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
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
    tagBg: "bg-cyan-50/80 text-cyan-700 border-cyan-200/50",
    link: "/nutrientes",
  },
];

const SpecialtyCards = () => {
  return (
    <section id="especialidades" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
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
                  rounded-2xl border border-border/50
                  bg-gradient-to-br ${specialty.bgGradient}
                  backdrop-blur-sm
                  p-8
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:translate-y-[-4px]
                  hover:shadow-2xl hover:shadow-black/10
                  hover:border-border
                  active:scale-[0.98]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                  animate-fade-up
                `}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Subtle background glow on hover */}
                <div 
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br ${specialty.bgGradient}
                    transition-opacity duration-500
                    pointer-events-none
                  `}
                />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      {/* Icon */}
                      <div 
                        className={`
                          w-16 h-16 rounded-2xl ${specialty.iconBg}
                          flex items-center justify-center
                          shadow-lg shadow-black/10
                          group-hover:shadow-xl group-hover:scale-105
                          transition-all duration-300
                        `}
                      >
                        <specialty.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      
                      {/* Title & Subtitle */}
                      <div>
                        <h3 className="font-display font-bold text-2xl text-foreground tracking-tight">
                          {specialty.title}
                        </h3>
                        <p className="text-base text-muted-foreground/70 mt-1">
                          {specialty.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div 
                      className={`
                        w-10 h-10 rounded-full
                        bg-card/80 backdrop-blur border border-border/50
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        translate-x-2 group-hover:translate-x-0
                        transition-all duration-300
                        shadow-sm
                      `}
                    >
                      <ArrowRight className="w-5 h-5 text-foreground" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {specialty.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`
                          inline-flex items-center
                          px-3 py-1.5 rounded-full
                          text-sm font-medium
                          ${specialty.tagBg}
                          backdrop-blur-sm
                          border
                          transition-all duration-200
                          group-hover:shadow-sm
                        `}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Arrow for mobile */}
                <div className="absolute bottom-6 right-6 md:hidden">
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50" />
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
