import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const whatsappLink = `https://wa.me/5562999999999?text=${encodeURIComponent(
    searchQuery || "Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas."
  )}`;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 pt-24 pb-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Engenheiro Agrônomo • Goiás, Brasil</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
          <span className="gradient-text">Fertilidade do Solo</span>
          <br />
          <span className="text-foreground">Nutrição de Plantas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
          Decisões técnicas baseadas em ciência
          <br />
          <span className="text-foreground font-medium">que geram resultado econômico</span>
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="animate-fade-up delay-300">
          <div className="search-glow max-w-2xl mx-auto">
            <div className="relative flex items-center bg-secondary border-2 border-primary/30 rounded-2xl overflow-hidden transition-all duration-300 focus-within:border-primary focus-within:shadow-lg focus-within:shadow-primary/20">
              <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Qual é sua dúvida sobre manejo de solo ou nutrição de plantas?"
                className="w-full bg-transparent py-4 pl-14 pr-32 text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90"
              >
                <span className="hidden sm:inline">Perguntar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
