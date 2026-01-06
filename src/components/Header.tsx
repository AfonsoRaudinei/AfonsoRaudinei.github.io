import { MessageCircle, Linkedin, Mail, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const whatsappLink = `https://wa.me/5563984376572?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.")}`;

  const socialLinks = [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/raudinei",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
    },
    {
      id: "email",
      href: "mailto:raudyney@hotmail.com",
      icon: Mail,
      label: "E-mail",
      hoverColor: "hover:bg-red-500 hover:text-white hover:border-red-500",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/raudineiafonsosilva",
      icon: Instagram,
      label: "Instagram",
      hoverColor: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-500",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
        {/* Left - Identity */}
        <div className="flex flex-col gap-0.5">
          <span className="font-display font-bold text-xl lg:text-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
            Raudinei Afonso
          </span>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Engenheiro Agrônomo · Fertilidade do Solo & Nutrição de Plantas
          </p>
          <Link 
            to="/jornada-profissional" 
            className="group inline-flex items-center gap-1 text-xs lg:text-sm font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="relative">
              Jornada Profissional
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Right - Social Icons + WhatsApp */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Social Icons */}
          <nav className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className={`
                    flex items-center justify-center 
                    w-9 h-9 lg:w-10 lg:h-10 
                    rounded-full 
                    bg-white/70 border border-gray-200/80
                    text-gray-600
                    transition-all duration-300
                    hover:scale-110 hover:-rotate-6
                    shadow-sm hover:shadow-md
                    ${link.hoverColor}
                  `}
                >
                  <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                </a>
              );
            })}
          </nav>

          {/* WhatsApp Button - with pulse effect */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-110 active:scale-95"
          >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full animate-ping bg-green-400/40" style={{ animationDuration: '2s' }} />
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 relative z-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
