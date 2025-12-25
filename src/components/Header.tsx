import { MessageCircle, Linkedin, Mail, Instagram } from "lucide-react";

const Header = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";

  const socialLinks = [
    {
      id: "linkedin",
      href: "https://linkedin.com/in/raudinei-afonso",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      id: "email",
      href: "mailto:contato@raudineiafonso.com.br",
      icon: Mail,
      label: "E-mail",
    },
    {
      id: "instagram",
      href: "https://instagram.com/raudineiafonso",
      icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-50/95 to-blue-100/90 backdrop-blur-xl border-b border-blue-200/50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left - Identity */}
        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-lg text-blue-900 tracking-tight">
            Raudinei Afonso
          </span>
          <p className="text-xs text-blue-700/80">
            Engenheiro Agrônomo · Fertilidade do Solo & Nutrição de Plantas
          </p>
        </div>

        {/* Right - Social Icons + WhatsApp */}
        <div className="flex items-center gap-3">
          {/* Social Icons - Desktop only */}
          <nav className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/70 hover:bg-white border border-blue-200/50 hover:border-blue-300 text-blue-600 hover:text-blue-700 transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </nav>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-all duration-200 shadow-sm"
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
