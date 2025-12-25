import { BarChart3, FlaskConical, Bug, Settings2, ArrowUpRight } from "lucide-react";

const suggestions = [
  {
    icon: BarChart3,
    title: "Estádios Fenológicos",
    description: "Timing correto de intervenção",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FlaskConical,
    title: "Nutrição Avançada",
    description: "Balanceamento e estratégia",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Bug,
    title: "Pragas & Doenças",
    description: "Monitoramento eficiente",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Settings2,
    title: "Manejo Integrado",
    description: "Decisão técnica completa",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
];

const QuickSuggestions = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Como posso ajudar?
          </h2>
          <p className="text-muted-foreground">Áreas de consultoria especializada</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {suggestions.map((item, index) => (
            <button
              key={item.title}
              className="group soft-card p-5 text-left hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 bg-gradient-to-br ${item.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                <item.icon className={`w-6 h-6 text-primary`} />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSuggestions;
