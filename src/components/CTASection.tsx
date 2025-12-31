import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Resposta técnica personalizada",
  "Análise do seu caso específico",
  "Recomendação baseada em dados",
  "Sem compromisso inicial",
];

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/5563984376572?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tire Suas Dúvidas <span className="gradient-text">Agora</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Consultoria técnica especializada para otimizar sua produção agrícola
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border/50"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Iniciar Conversa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
