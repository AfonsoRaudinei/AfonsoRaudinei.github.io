import { MapPin, Mail, Phone, Linkedin, Instagram, MessageCircle, GraduationCap, Briefcase, Target } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";

  const contactCards = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@raudineiafonso.com.br",
      href: "mailto:contato@raudineiafonso.com.br",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 62 99999-9999",
      href: "tel:+5562999999999",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Goiás, Brasil",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/raudinei-afonso" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/raudineiafonso" },
    { icon: MessageCircle, label: "WhatsApp", href: whatsappLink },
  ];

  const expertise = [
    { icon: GraduationCap, text: "Engenheiro Agrônomo" },
    { icon: Briefcase, text: "Fertilidade do Solo" },
    { icon: Target, text: "Nutrição de Plantas" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Identity Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <h3 className="font-display font-bold text-xl text-blue-900 mb-2">
              Raudinei Afonso
            </h3>
            <div className="space-y-2">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-blue-700">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-4">Contato</h4>
            <div className="space-y-3">
              {contactCards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="flex items-center gap-3 text-sm text-blue-700 hover:text-blue-900 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <card.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-500">{card.label}</p>
                    <p className="font-medium">{card.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-4">Redes Sociais</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-blue-600" />
                </a>
              ))}
            </div>
            
            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-100 text-center">
          <p className="text-sm text-blue-600">
            © {new Date().getFullYear()} Raudinei Afonso · Engenheiro Agrônomo
          </p>
          <p className="text-xs text-blue-400 mt-1">
            Fertilidade do Solo & Nutrição de Plantas · Goiás, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
