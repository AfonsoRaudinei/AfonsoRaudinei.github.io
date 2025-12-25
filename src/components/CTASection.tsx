import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Resposta técnica personalizada",
  "Análise do seu caso específico",
  "Recomendação baseada em dados",
  "Sem compromisso inicial",
];

const CTASection = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative glass-card overflow-hidden animate-fade-up">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10 p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Vamos conversar sobre{" "}
                  <span className="gradient-text">sua lavoura?</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Tire suas dúvidas técnicas diretamente comigo. Cada caso é único e merece atenção especializada.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="text-center md:text-right mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Engenheiro Agrônomo
                  </p>
                  <p className="font-display text-2xl font-bold text-foreground">
                    Raudinei Afonso
                  </p>
                  <p className="text-sm text-primary">
                    Goiás, Brasil
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 glow-green animate-pulse-glow"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Iniciar conversa</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
