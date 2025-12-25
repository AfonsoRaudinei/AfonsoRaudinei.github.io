import { MessageCircle, CheckCircle2, ArrowRight, Phone } from "lucide-react";

const benefits = [
  "Resposta técnica personalizada",
  "Análise do seu caso específico",
  "Recomendação baseada em dados",
  "Sem compromisso inicial",
];

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/5562999999999?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              Consultoria Especializada
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Precisa de orientação técnica?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tire suas dúvidas sobre nutrição de plantas, manejo de solo e
              estratégias para aumentar a produtividade da sua lavoura.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="soft-card p-8 bg-gradient-to-br from-card to-secondary/20">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Atendimento Rápido
                </h3>
                <p className="text-muted-foreground mb-4">
                  Respondo em até 24 horas úteis com orientações práticas para
                  sua lavoura.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Disponível agora
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;