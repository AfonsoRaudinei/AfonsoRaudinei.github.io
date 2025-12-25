import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const whatsappLink = `https://wa.me/5562999999999?text=${encodeURIComponent(searchQuery || "Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.")}`;
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink, "_blank");
  };
  return <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24 pb-12 bg-hero-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating decorative shapes */}
      <div className="absolute top-32 left-[15%] w-16 h-16 bg-green-soft rounded-2xl rotate-12 animate-float" />
      <div className="absolute top-48 right-[20%] w-12 h-12 bg-blue-soft rounded-xl -rotate-12 animate-float delay-200" />
      <div className="absolute bottom-32 left-[25%] w-10 h-10 bg-primary/10 rounded-lg rotate-45 animate-float delay-300" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
          <span className="gradient-text-blue">Fertilidade do Solo</span>
          <br />
          <span className="text-foreground">&</span>{" "}
          <span className="gradient-text">Nutrição de Plantas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up delay-200">
          Decisões técnicas baseadas em ciência
          <br />
          <span className="text-foreground font-semibold">que geram resultado econômico</span>
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="animate-fade-up delay-300">
          <div className="search-box max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
              <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Qual é sua dúvida sobre manejo de solo ou nutrição?" className="w-full bg-transparent py-4 pl-14 pr-36 text-foreground placeholder:text-muted-foreground focus:outline-none rounded-2xl" />
              <button type="submit" className="absolute right-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-green-light text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                <span className="hidden sm:inline">Perguntar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-up delay-400">
          {["Análise de solo", "Adubação", "Deficiência nutricional", "Produtividade"].map(tag => <span key={tag} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors cursor-pointer">
              {tag}
            </span>)}
        </div>
      </div>
    </section>;
};
export default Hero;