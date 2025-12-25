import { GraduationCap, Briefcase, Award, TrendingUp, Sprout, Target } from "lucide-react";

const timelineItems = [
  {
    year: "2008",
    title: "Formação Acadêmica",
    description: "Graduação em Engenharia Agronômica com foco em ciências do solo e nutrição vegetal",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    year: "2010",
    title: "Início na Consultoria",
    description: "Primeiros projetos de consultoria em fertilidade do solo para produtores de soja em Goiás",
    icon: Sprout,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    year: "2014",
    title: "Especialização",
    description: "Pós-graduação em Nutrição de Plantas e manejo avançado de culturas de alta performance",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
  },
  {
    year: "2017",
    title: "Expansão Regional",
    description: "Atuação expandida para todo o estado de Goiás, atendendo grandes produtores de soja e milho",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    year: "2020",
    title: "Consultoria Especializada",
    description: "Desenvolvimento de metodologias próprias para diagnóstico e recomendação nutricional",
    icon: Target,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    year: "Atual",
    title: "Referência no Setor",
    description: "Reconhecido como especialista em fertilidade do solo e nutrição de plantas na região Centro-Oeste",
    icon: Briefcase,
    color: "from-primary to-green-600",
    bgColor: "bg-green-50",
  },
];

const JornadaProfissional = () => {
  return (
    <section id="jornada" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Jornada Profissional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 15 anos dedicados à ciência do solo e nutrição de plantas, 
            transformando conhecimento técnico em resultados para produtores rurais.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full hidden md:block" />
          
          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (Desktop) */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} shadow-lg ring-4 ring-white z-10`} />
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-soft border border-border/50">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Construindo resultados com ciência e experiência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JornadaProfissional;
