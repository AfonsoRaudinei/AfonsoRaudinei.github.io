import { MessageCircle, Award, Users, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";
import leafDecoration from "@/assets/leaf-decoration.png";

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
              {/* Soft green glow behind photo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-green-400/20 via-emerald-500/15 to-green-600/20 rounded-full blur-3xl" />
              
              {/* Real decorative leaf - top right (large) */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute -top-8 -right-6 w-20 h-20 z-20 animate-sway drop-shadow-xl rotate-[30deg] origin-bottom-left"
              />
              
              {/* Real decorative leaf - top right (small) */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute top-4 -right-12 w-12 h-12 z-20 animate-sway-reverse drop-shadow-lg rotate-[60deg] origin-bottom-left opacity-80"
              />
              
              {/* Real decorative leaf - bottom left (medium) */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute -bottom-6 -left-8 w-16 h-16 z-20 animate-sway-reverse drop-shadow-xl -rotate-[140deg] scale-x-[-1] origin-top-right"
              />
              
              {/* Real decorative leaf - bottom left (small) */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute bottom-8 -left-10 w-10 h-10 z-20 animate-sway drop-shadow-lg -rotate-[100deg] scale-x-[-1] origin-top-right opacity-75"
              />
              
              {/* Real decorative leaf - top left (accent) */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute top-2 -left-6 w-10 h-10 z-20 animate-sway drop-shadow-lg -rotate-[60deg] origin-bottom-right opacity-70"
              />
              
              {/* Photo container - NO BORDER, clean with shadow */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-green-500/20">
                <img 
                  src={raudineiFoto} 
                  alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium z-30">
                <Award className="w-4 h-4" />
                <span>15+ Anos</span>
              </div>
              
              {/* Small floating leaf accent - right side */}
              <img 
                src={leafDecoration} 
                alt="" 
                className="absolute top-1/2 -right-14 w-8 h-8 z-20 hidden lg:block animate-float drop-shadow-lg rotate-[80deg] opacity-60"
              />
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
