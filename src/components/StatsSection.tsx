import { TrendingUp, Users, Award, MapPin } from "lucide-react";
const stats = [{
  icon: TrendingUp,
  number: "15+",
  label: "Anos de Experiência"
}, {
  icon: Users,
  number: "500+",
  label: "Produtores Atendidos"
}, {
  icon: Award,
  number: "98%",
  label: "Satisfação"
}, {
  icon: MapPin,
  number: "GO",
  label: "Região de Atuação"
}];
const StatsSection = () => {
  return (
    <section className="py-12 px-4 bg-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;