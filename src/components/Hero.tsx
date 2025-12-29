import { MessageCircle, Award, Users, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";

const Hero = () => {
  const whatsappLink = `https://wa.me/5562999999999?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.")}`;

  return (
    <section className="relative min-h-[85vh] flex items-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1 animate-fade-up">
            <div className="relative">
              {/* Animated gradient blob behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/40 via-green-500/30 to-teal-400/40 rounded-[2rem] blur-2xl animate-pulse" />
              
              {/* Offset decorative shape - creates depth */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl transform rotate-3 opacity-80" />
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl transform -rotate-2 opacity-60" />
              
              {/* Main photo container */}
              <div className="relative w-64 sm:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/30 transform hover:scale-[1.02] transition-transform duration-500">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent z-10" />
                <img 
                  src={raudineiFoto} 
                  alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute -right-6 top-1/4 flex flex-col gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-100" />
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse delay-200" />
              </div>
              
              {/* Decorative line accent */}
              <div className="absolute -left-8 bottom-1/3 w-12 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium z-30">
                <Award className="w-4 h-4" />
                <span>15+ Anos</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
            {/* Name tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Raudinei Afonso
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up delay-100">
              <span className="gradient-text-blue">Fertilidade do Solo</span>
              <br />
              <span className="text-foreground">&</span>{" "}
              <span className="gradient-text">Nutrição de Plantas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              Decisões técnicas baseadas em ciência
              <br />
              <span className="text-foreground font-semibold">que geram resultado econômico</span>
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up delay-300">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Comigo no WhatsApp
                </a>
              </Button>
            </div>

            {/* Mini credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground animate-fade-up delay-400">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span>500+ Produtores</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Brasil Central</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
