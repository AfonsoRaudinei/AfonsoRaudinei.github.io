import { MessageCircle, Award, Users, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";

const Hero = () => {
  const whatsappLink = `https://wa.me/5563984376572?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.")}`;

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
              <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/40 via-green-500/30 to-teal-400/40 rounded-full blur-2xl animate-pulse" />
              
              {/* Offset decorative shapes - creates depth */}
              <div className="absolute -top-8 -left-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] bg-gradient-to-br from-green-300/40 to-emerald-400/20 rounded-full transform rotate-6" />
              <div className="absolute -top-5 -left-5 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)] bg-gradient-to-tr from-emerald-400/35 to-teal-300/20 rounded-full transform -rotate-3" />
              
              {/* Gradient border ring - extra thick for emphasis */}
              <div className="relative p-[18px] bg-gradient-to-br from-green-400 via-emerald-500 via-50% to-teal-400 rounded-full shadow-2xl shadow-emerald-500/40">
                {/* Inner subtle ring for depth */}
                <div className="p-0.5 bg-gradient-to-tr from-white/20 to-transparent rounded-full">
                  {/* Photo container - circular */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                    <img 
                      src={raudineiFoto} 
                      alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                      className="w-full h-full object-cover object-top scale-110"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative dots pattern */}
              <div className="absolute -right-8 top-1/4 flex flex-col gap-2 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse delay-100 shadow-lg shadow-emerald-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse delay-200 shadow-lg shadow-teal-400/50" />
              </div>
              
              {/* Decorative line accents */}
              <div className="absolute -left-10 bottom-1/3 w-14 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full z-20" />
              <div className="absolute -left-6 bottom-1/3 mt-3 w-8 h-0.5 bg-gradient-to-r from-emerald-500/60 to-transparent rounded-full z-20" style={{ marginTop: '12px' }} />
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium z-30">
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
