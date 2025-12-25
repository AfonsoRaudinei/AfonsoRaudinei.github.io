import { Link } from "react-router-dom";
import { ChevronRight, Sprout, Wheat, Layers, Atom, ArrowUpRight, Briefcase } from "lucide-react";

const specialties = [
  {
    icon: Sprout,
    title: "SOJA",
    subtitle: "Manejo nutricional máxima produtividade",
    topics: [
      "Inoculação e fixação biológica",
      "Correção de micronutrientes",
      "Manejo de potássio",
      "Nutrição reprodutiva",
      "Análise foliar estratégica",
    ],
    gradient: "from-green-400 to-emerald-500",
    bgImage: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: Wheat,
    title: "MILHO",
    subtitle: "Nutrição de precisão alta performance",
    topics: [
      "Adubação nitrogenada",
      "Resposta a fósforo",
      "Manejo de zinco",
      "Nutrição V4-V8",
      "Potencial produtivo",
    ],
    gradient: "from-amber-400 to-yellow-500",
    bgImage: "bg-gradient-to-br from-amber-50 to-yellow-50",
  },
  {
    icon: Layers,
    title: "SOLOFORTE",
    subtitle: "Ferramentas de análise e consultoria",
    topics: [
      "Interpretação de análises",
      "Recomendação técnica",
      "Laudo personalizado",
    ],
    gradient: "from-orange-400 to-red-500",
    bgImage: "bg-gradient-to-br from-orange-50 to-red-50",
  },
  {
    icon: Atom,
    title: "NUTRIENTES",
    subtitle: "Guia completo macro e micronutrientes",
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
    gradient: "from-blue-400 to-cyan-500",
    bgImage: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
];

const SpecialtyCards = () => {
  return (
    <section id="especialidades" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Áreas de <span className="gradient-text">Especialidade</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conhecimento técnico aplicado às principais culturas do agronegócio brasileiro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => {
            const isNutrientes = specialty.title === "NUTRIENTES";
            const cardClassName = `group soft-card overflow-hidden hover-lift animate-fade-up ${specialty.bgImage}`;
            
            const cardContent = (
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center shadow-lg`}>
                      <specialty.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {specialty.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {specialty.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {specialty.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/80 text-xs text-muted-foreground hover:text-foreground hover:bg-card transition-colors cursor-pointer shadow-sm"
                    >
                      {topic}
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    </span>
                  ))}
                </div>
              </div>
            );
            
            if (isNutrientes) {
              return (
                <Link
                  key={specialty.title}
                  to="/nutrientes"
                  className={cardClassName}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {cardContent}
                </Link>
              );
            }
            
            return (
              <div
                key={specialty.title}
                className={cardClassName}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {cardContent}
              </div>
            );
          })}

          {/* Jornada Profissional - Full Width */}
          <Link
            to="/jornada-profissional"
            className="md:col-span-2 group soft-card overflow-hidden hover-lift animate-fade-up bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30"
            style={{ animationDelay: "500ms" }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      JORNADA PROFISSIONAL
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Raudinei Afonso S. Pereira
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Currículo Completo", "10+ anos experiência", "Nutrien", "Representante Técnico"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/80 text-xs text-muted-foreground hover:text-foreground hover:bg-card transition-colors cursor-pointer shadow-sm"
                  >
                    {tag}
                    <ChevronRight className="w-3 h-3 opacity-50" />
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialtyCards;
