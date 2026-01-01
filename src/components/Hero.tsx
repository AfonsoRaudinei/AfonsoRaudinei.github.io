import { MessageCircle, Award } from "lucide-react";
import { Button } from "./ui/button";
import raudineiFoto from "@/assets/raudinei-foto.png";

const Hero = () => {
  const whatsappLink = `https://wa.me/5563984376572?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.")}`;

  return (
    <section className="relative min-h-[85vh] flex items-center px-6 lg:px-12 pt-28 pb-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-primary/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1 animate-fade-up">
            <div className="relative group">
              {/* Cloudy/Foggy white background layers */}
              <div className="absolute -inset-20 bg-slate-100/40 rounded-full blur-3xl" />
              <div className="absolute -inset-16 bg-white/50 rounded-full blur-3xl" />
              <div className="absolute -inset-12 bg-gray-100/30 rounded-full blur-2xl" />
              
              {/* Subtle rotating gradient ring */}
              <div 
                className="absolute -inset-6 rounded-full opacity-30"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.15), transparent, rgba(20, 184, 166, 0.15), transparent)',
                  animation: 'spin 40s linear infinite'
                }}
              />
              
              {/* Gradient border ring */}
              <div className="relative p-[12px] bg-gradient-to-br from-green-400 via-emerald-500 via-50% to-teal-400 rounded-full shadow-xl shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-500">
                {/* Inner subtle ring for depth */}
                <div className="p-0.5 bg-gradient-to-tr from-white/20 to-transparent rounded-full">
                  {/* Photo container - circular - LARGER with zoom */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src={raudineiFoto} 
                      alt="Raudinei Afonso - Especialista em Fertilidade do Solo" 
                      className="w-full h-full object-cover object-top scale-[1.15] group-hover:scale-[1.2] transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating badge - more subtle */}
              <div className="absolute -bottom-2 right-4 bg-white/90 backdrop-blur-sm text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm font-medium z-30 hover:scale-105 transition-transform duration-300">
                <Award className="w-4 h-4" />
                <span>15+ Anos</span>
              </div>
            </div>
          </div>

          {/* Content Section - closer to photo */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6 lg:pl-8">
            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-up delay-100">
              <span className="gradient-text-blue">Fertilidade do Solo</span>
              <br />
              <span className="text-foreground">&</span>{" "}
              <span className="gradient-text">Nutrição de Plantas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-up delay-200">
              Decisões técnicas baseadas em ciência
              <br />
              <span className="text-foreground font-semibold">que geram resultado econômico</span>
            </p>

            {/* CTA Button with pulse animation */}
            <div className="animate-fade-up delay-300">
              <Button 
                asChild 
                size="lg" 
                className="relative bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-[0.98]"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-green-400/30" style={{ animationDuration: '2s' }} />
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Comigo no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
