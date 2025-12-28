const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Subtle gradient background - Apple style */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="gradient-text-blue">Fertilidade do Solo</span>
          <br />
          <span className="text-foreground">&</span>{" "}
          <span className="gradient-text">Nutrição de Plantas</span>
        </h1>

        {/* Subtitle - Apple-inspired clarity */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-100">
          Decisões técnicas baseadas em ciência
          <br />
          <span className="text-foreground font-semibold">que geram resultado econômico</span>
        </p>

        {/* Single CTA - "One Hero, One Action" */}
        <div className="animate-fade-up delay-200">
          <a
            href="https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Fale Comigo
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.789l4.89-1.56A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.137 0-4.146-.663-5.793-1.8l-.414-.246-2.899.925.87-2.768-.27-.427A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;