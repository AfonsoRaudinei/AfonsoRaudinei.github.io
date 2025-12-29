import { MessageCircle, CheckCircle2 } from "lucide-react";

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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <MessageCircle className="w-8 h-8" />
          </div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tire Suas Dúvidas Agora
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Decisões técnicas corretas começam com uma boa conversa.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.789l4.89-1.56A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.663-5.793-1.8l-.414-.246-2.899.925.87-2.768-.27-.427A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Iniciar Conversa
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
