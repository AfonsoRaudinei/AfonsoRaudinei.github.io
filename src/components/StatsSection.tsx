import { TrendingUp, Users, Award, MapPin } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "15+",
    label: "Anos de Experiência",
  },
  {
    icon: Users,
    number: "500+",
    label: "Produtores Atendidos",
  },
  {
    icon: Award,
    number: "98%",
    label: "Satisfação",
  },
  {
    icon: MapPin,
    number: "GO",
    label: "Região de Atuação",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 px-4 bg-card border-y border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-soft flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
