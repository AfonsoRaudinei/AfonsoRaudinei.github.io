import { BarChart3, FlaskConical, Bug, Settings2 } from "lucide-react";

const suggestions = [
  {
    icon: BarChart3,
    title: "Estádios Fenológicos",
    description: "Timing correto de intervenção",
  },
  {
    icon: FlaskConical,
    title: "Nutrição Avançada",
    description: "Balanceamento e estratégia",
  },
  {
    icon: Bug,
    title: "Pragas & Doenças",
    description: "Monitoramento eficiente",
  },
  {
    icon: Settings2,
    title: "Manejo Integrado",
    description: "Decisão técnica completa",
  },
];

const QuickSuggestions = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestions.map((item, index) => (
            <button
              key={item.title}
              className="group glass-card p-4 text-left hover-lift card-shine animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {item.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSuggestions;
