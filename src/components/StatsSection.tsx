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
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="soft-card p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsSection;