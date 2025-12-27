import { cn } from "@/lib/utils";
import { EstadioSoja, phaseColors } from "@/data/estadiosSoja";
import { Bug, Leaf, FlaskConical, Stethoscope } from "lucide-react";

interface EstadioInfoPanelProps {
  estadio: EstadioSoja | null;
}

const EstadioInfoPanel = ({ estadio }: EstadioInfoPanelProps) => {
  if (!estadio) {
    return (
      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 text-center">
        <p className="text-muted-foreground text-lg">
          Selecione um estádio para ver os detalhes
        </p>
      </div>
    );
  }

  const colors = phaseColors[estadio.phase];

  const sections = [
    {
      icon: Leaf,
      title: "Estádio Fenológico",
      items: [estadio.info.phenology],
      iconAnimation: "hover:rotate-12"
    },
    {
      icon: Stethoscope,
      title: "Doenças Principais",
      items: estadio.info.diseases,
      iconAnimation: "hover:scale-110"
    },
    {
      icon: Bug,
      title: "Pragas",
      items: estadio.info.pests,
      iconAnimation: "hover:-translate-x-1"
    },
    {
      icon: FlaskConical,
      title: "Nutrição",
      items: [estadio.info.nutrients],
      iconAnimation: "hover:rotate-6"
    }
  ];

  return (
    <div className="bg-card rounded-3xl p-6 md:p-12 shadow-xl border border-border/50 animate-fade-in">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <span className="text-5xl">{estadio.icon}</span>
          <div>
            <h2 className={cn(
              "font-display text-2xl md:text-3xl font-bold",
              `bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`
            )}>
              {estadio.name} - {estadio.fullName}
            </h2>
            <p className="text-muted-foreground mt-1">{estadio.description}</p>
          </div>
        </div>
        <div className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold",
          colors.bg, colors.text
        )}>
          <span className="w-2 h-2 rounded-full bg-current" />
          Dia {estadio.day} após o plantio • Fase {colors.label}
        </div>
      </div>

      {/* Info Sections */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={cn(
              "p-5 md:p-6 rounded-2xl border-l-4 transition-all duration-300",
              "bg-gradient-to-br from-secondary/50 to-secondary/30",
              "hover:shadow-lg hover:translate-x-1",
              colors.border
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="flex items-center gap-3 text-lg font-bold text-foreground mb-4">
              <section.icon className={cn(
                "w-6 h-6 transition-transform duration-300",
                colors.text,
                section.iconAnimation
              )} />
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", colors.bg.replace('/10', ''))} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstadioInfoPanel;
