import { ChevronRight, Sprout, Wheat, Layers, Atom } from "lucide-react";

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
    color: "from-green-500 to-emerald-600",
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
    color: "from-amber-500 to-yellow-600",
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
    color: "from-orange-500 to-red-600",
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
    color: "from-blue-500 to-cyan-600",
  },
];

const SpecialtyCards = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Áreas de Especialidade
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conhecimento técnico aplicado às principais culturas do agronegócio brasileiro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="group glass-card overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Header gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${specialty.color}`} />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                      <specialty.icon className="w-6 h-6 text-white" />
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
                </div>

                <div className="flex flex-wrap gap-2">
                  {specialty.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
                    >
                      {topic}
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyCards;
