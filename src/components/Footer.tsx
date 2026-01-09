import { MapPin, Mail, Phone, Linkedin, Instagram, MessageCircle, GraduationCap, Briefcase, Target } from "lucide-react";
const Footer = () => {
  const whatsappLink = "https://wa.me/5563984376572?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";
  const contactCards = [{
    icon: Mail,
    label: "E-mail",
    value: "raudyney@hotmail.com",
    href: "mailto:raudyney@hotmail.com"
  }, {
    icon: Phone,
    label: "Telefone",
    value: "+55 63 98437-6572",
    href: "tel:+5563984376572"
  }, {
    icon: MapPin,
    label: "Localização",
    value: "Tocantins, Brasil",
    href: "#"
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raudinei"
  }, {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/raudineiafonsosilva?igsh=MTA5ZXBnODBwamxvMw%3D%3D&utm_source=qr"
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
            Fertilidade do Solo & Nutrição de Plantas · Tocantins, Brasil
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;