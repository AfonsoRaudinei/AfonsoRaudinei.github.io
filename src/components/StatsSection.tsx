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
  return <section className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        
      </div>
    </section>;
};
export default StatsSection;