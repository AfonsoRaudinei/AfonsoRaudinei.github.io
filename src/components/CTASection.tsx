import { MessageCircle, CheckCircle2, ArrowRight, Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  { text: "Resposta técnica personalizada", highlight: true },
  { text: "Análise do seu caso específico", highlight: false },
  { text: "Recomendação baseada em dados", highlight: false },
  { text: "Sem compromisso inicial", highlight: true },
];

const CTASection = () => {
  const whatsappLink = "https://wa.me/5563984376572?text=Olá! Gostaria de uma consultoria sobre manejo de solo ou nutrição de plantas.";

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-100 text-sm font-medium">Consultoria Especializada</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                Maximizar
              </span>
              <br />
              sua Produtividade?
            </h2>

            <p className="text-lg lg:text-xl text-emerald-100/80 mb-8 max-w-lg">
              Converse diretamente com um especialista e receba orientação técnica 
              personalizada para sua lavoura.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                    benefit.highlight 
                      ? 'bg-white/15 border border-white/20' 
                      : 'bg-white/5 border border-white/10'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-emerald-50 text-emerald-900 shadow-2xl shadow-black/20 hover:shadow-white/20 transition-all duration-300 px-8 py-6 text-lg rounded-full group"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>Iniciar Conversa</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Entre em Contato</h3>
                <p className="text-emerald-100/70">Estou disponível para ajudar</p>
              </div>

              <div className="space-y-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">WhatsApp</p>
                    <p className="text-emerald-100/60 text-sm">+55 63 98437-6572</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 ml-auto group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href="mailto:raudinei.afonso@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">E-mail</p>
                    <p className="text-emerald-100/60 text-sm">raudinei.afonso@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 ml-auto group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Localização</p>
                    <p className="text-emerald-100/60 text-sm">Tocantins, Brasil</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-emerald-100/50 text-xs mb-3">Atendimento em todo o Brasil</p>
                <div className="flex justify-center gap-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Cerrado</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">MATOPIBA</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Centro-Oeste</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
