import { MessageCircle, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const benefits = [
  "Resposta técnica personalizada",
  "Análise do seu caso específico",
  "Recomendação baseada em dados",
  "Sem compromisso inicial",
];

const CTASection = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative soft-card overflow-hidden animate-fade-up">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-soft to-blue-soft rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-soft text-primary text-sm font-medium mb-6">
                  <Phone className="w-4 h-4" />
                  Atendimento direto
                </div>
                
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Vamos conversar sobre{" "}
                  <span className="gradient-text">sua lavoura?</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tire suas dúvidas técnicas diretamente comigo. Cada caso é único e merece atenção especializada.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-foreground">
                      <div className="w-5 h-5 rounded-full bg-green-soft flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="soft-card p-6 mb-6 text-center md:text-right bg-gradient-to-br from-green-soft/50 to-blue-soft/50">
                  <p className="text-sm text-muted-foreground mb-1">
                    Engenheiro Agrônomo
                  </p>
                  <p className="font-display text-2xl font-bold text-foreground mb-1">
                    Raudinei Afonso
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Goiás, Brasil
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-green-light text-primary-foreground font-display font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
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
