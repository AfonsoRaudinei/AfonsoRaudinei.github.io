import { BarChart3, FlaskConical, Bug, Settings2, ArrowUpRight } from "lucide-react";
const suggestions = [{
  icon: BarChart3,
  title: "Estádios Fenológicos",
  description: "Timing correto de intervenção",
  color: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50"
}, {
  icon: FlaskConical,
  title: "Nutrição Avançada",
  description: "Balanceamento e estratégia",
  color: "from-emerald-500 to-teal-500",
  bgColor: "bg-emerald-50"
}, {
  icon: Bug,
  title: "Pragas & Doenças",
  description: "Monitoramento eficiente",
  color: "from-amber-500 to-orange-500",
  bgColor: "bg-amber-50"
}, {
  icon: Settings2,
  title: "Manejo Integrado",
  description: "Decisão técnica completa",
  color: "from-violet-500 to-purple-500",
  bgColor: "bg-violet-50"
}];
const QuickSuggestions = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {suggestions.map((item, index) => (
            <div key={index} className={`${item.bgColor} rounded-xl p-4 hover:shadow-md transition-all cursor-pointer group`}>
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} text-white mb-3`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-2 group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default QuickSuggestions;