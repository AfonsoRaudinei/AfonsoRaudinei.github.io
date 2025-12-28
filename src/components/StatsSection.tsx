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
    <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
