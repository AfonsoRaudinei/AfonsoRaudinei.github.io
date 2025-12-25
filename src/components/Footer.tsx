import { MapPin, Mail, Phone, Linkedin, Instagram, MessageCircle, GraduationCap, Briefcase, Target } from "lucide-react";
const Footer = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";
  const contactCards = [{
    icon: Mail,
    label: "E-mail",
    value: "contato@raudineiafonso.com.br",
    href: "mailto:contato@raudineiafonso.com.br"
  }, {
    icon: Phone,
    label: "Telefone",
    value: "+55 62 99999-9999",
    href: "tel:+5562999999999"
  }, {
    icon: MapPin,
    label: "Localização",
    value: "Goiás, Brasil",
    href: "#"
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/raudinei-afonso"
  }, {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/raudineiafonso"
  }, {
    icon: MessageCircle,
    label: "WhatsApp",
    href: whatsappLink
  }];
  const expertise = [{
    icon: GraduationCap,
    text: "Engenheiro Agrônomo"
  }, {
    icon: Briefcase,
    text: "Fertilidade do Solo"
  }, {
    icon: Target,
    text: "Nutrição de Plantas"
  }];
  return <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        

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
    </footer>;
};
export default Footer;