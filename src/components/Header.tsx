import { MessageCircle, Linkedin, Mail, Instagram, Route, ArrowRight } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    {
      id: "linkedin",
      label: "LinkedIn",
      subtitle: "Conectar e ver experiência",
      href: "https://linkedin.com/in/raudinei-afonso",
      icon: Linkedin,
    },
    {
      id: "jornada",
      label: "Jornada Profissional",
      subtitle: "Currículo e projetos em detalhes",
      href: "#jornada",
      icon: Route,
    },
    {
      id: "email",
      label: "E-mail",
      subtitle: "Envie uma proposta ou parceria",
      href: "mailto:contato@raudineiafonso.com.br",
      icon: Mail,
    },
    {
      id: "instagram",
      label: "Instagram",
      subtitle: "Bastidores, campo e dia a dia",
      href: "https://instagram.com/raudineiafonso",
      icon: Instagram,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border-b border-blue-200/50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left - Identity */}
        <div className="flex flex-col">
          <span className="font-display font-bold text-xl text-blue-900">
            Raudinei Afonso
          </span>
          <p className="text-xs text-blue-700/80">
            Engenheiro Agrônomo · Fertilidade do Solo & Nutrição de Plantas
          </p>
        </div>

        {/* Right - Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 hover:bg-white border border-blue-200/50 hover:border-blue-300 text-blue-800 hover:text-blue-900 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
              
              {/* Tooltip */}
              {hoveredLink === link.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-blue-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg animate-fade-in z-10">
                  {link.subtitle}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-900 rotate-45" />
                </div>
              )}
            </div>
          ))}

          {/* WhatsApp CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] ml-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
