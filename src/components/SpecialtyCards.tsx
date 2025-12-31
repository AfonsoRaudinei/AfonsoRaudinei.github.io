import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SojaIcon from "./icons/SojaIcon";
import MilhoIcon from "./icons/MilhoIcon";
import SoloforteIcon from "./icons/SoloforteIcon";
import NutrientesIcon from "./icons/NutrientesIcon";

const specialties = [
  {
    IconComponent: SojaIcon,
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
    bgGradient: "from-white/80 to-emerald-500/5",
    iconGradient: "from-emerald-500/20 to-emerald-500/5",
    iconBorder: "border-emerald-500/30",
    iconShadow: "shadow-emerald-500/20",
    tagBg: "bg-white/80 text-emerald-700 border-emerald-200/50",
    hoverShadow: "hover:shadow-emerald-500/20",
    link: "/soja",
    color: "#10b981",
  },
  {
    IconComponent: MilhoIcon,
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
    bgGradient: "from-white/80 to-amber-400/5",
    iconGradient: "from-amber-400/20 to-amber-400/5",
    iconBorder: "border-amber-400/30",
    iconShadow: "shadow-amber-400/20",
    tagBg: "bg-white/80 text-amber-700 border-amber-200/50",
    hoverShadow: "hover:shadow-amber-400/20",
    link: null,
    color: "#f59e0b",
  },
  {
    IconComponent: SoloforteIcon,
    title: "SOLOFORTE",
    subtitle: "Ferramentas de análise e consultoria técnica",
    topics: [
      "Interpretação de análises",
      "Recomendação técnica",
      "Laudo personalizado",
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-white/80 to-orange-500/5",
    iconGradient: "from-orange-500/20 to-orange-500/5",
    iconBorder: "border-orange-500/30",
    iconShadow: "shadow-orange-500/20",
    tagBg: "bg-white/80 text-orange-700 border-orange-200/50",
    hoverShadow: "hover:shadow-orange-500/20",
    link: null,
    color: "#f97316",
  },
  {
    IconComponent: NutrientesIcon,
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
    bgGradient: "from-white/80 to-cyan-500/5",
    iconGradient: "from-cyan-500/20 to-cyan-500/5",
    iconBorder: "border-cyan-500/30",
    iconShadow: "shadow-cyan-500/20",
    tagBg: "bg-white/80 text-cyan-700 border-cyan-200/50",
    hoverShadow: "hover:shadow-cyan-500/20",
    link: "/nutrientes",
    color: "#06b6d4",
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
                  rounded-3xl border border-border/50
                  bg-gradient-to-br ${specialty.bgGradient}
                  backdrop-blur-sm
                  p-8 lg:p-10
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:shadow-2xl ${specialty.hoverShadow}
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
                    <div className="flex items-start gap-5 lg:gap-6">
                      {/* Large Premium Icon */}
                      <div 
                        className={`
                          w-20 h-20 lg:w-24 lg:h-24 
                          rounded-2xl 
                          bg-gradient-to-br ${specialty.iconGradient}
                          border-2 ${specialty.iconBorder}
                          flex items-center justify-center
                          shadow-lg ${specialty.iconShadow}
                          backdrop-blur-sm
                          group-hover:scale-110
                          transition-all duration-300
                          p-4 lg:p-5
                        `}
                      >
                        <specialty.IconComponent 
                          className="w-full h-full" 
                          color={specialty.color}
                        />
                      </div>
                      
                      {/* Title & Subtitle */}
                      <div className="pt-1">
                        <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground tracking-tight">
                          {specialty.title}
                        </h3>
                        <p className="text-base lg:text-lg text-muted-foreground/70 mt-1 leading-relaxed">
                          {specialty.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div 
                      className={`
                        w-10 h-10 lg:w-12 lg:h-12 rounded-full
                        bg-card/80 backdrop-blur border border-border/50
                        flex items-center justify-center
                        opacity-0 group-hover:opacity-100
                        translate-x-2 group-hover:translate-x-0
                        transition-all duration-300
                        shadow-sm
                        hidden sm:flex
                      `}
                    >
                      <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-foreground" />
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
                <div className="absolute bottom-6 right-6 sm:hidden">
                  <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-foreground transition-colors" />
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
