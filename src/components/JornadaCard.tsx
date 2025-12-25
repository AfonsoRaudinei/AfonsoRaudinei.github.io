import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight, Briefcase } from "lucide-react";

const tags = [
  "Currículo Completo",
  "10+ anos experiência",
  "Nutrien",
  "Representante Técnico",
];

const JornadaCard = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/jornada-profissional"
            className="group soft-card overflow-hidden hover-lift animate-fade-up bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30"
            style={{ animationDelay: "100ms" }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-lg">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      JORNADA PROFISSIONAL
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Raudinei Afonso S. Pereira
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card/80 text-xs text-muted-foreground hover:text-foreground hover:bg-card transition-colors cursor-pointer shadow-sm"
                  >
                    {tag}
                    <ChevronRight className="w-3 h-3 opacity-50" />
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JornadaCard;
