import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { FileText, BarChart3, Target, Microscope, Leaf, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "Interpretação de Análises",
    description: "Análise completa de laudos de solo, foliar e tecidos vegetais com interpretação agronômica."
  },
  {
    icon: BarChart3,
    title: "Recomendação Técnica",
    description: "Recomendações personalizadas de adubação baseadas em dados científicos e condições locais."
  },
  {
    icon: Target,
    title: "Laudo Personalizado",
    description: "Documentação técnica detalhada para orientar o manejo nutricional da sua lavoura."
  },
  {
    icon: Microscope,
    title: "Diagnose Nutricional",
    description: "Identificação precisa de deficiências e toxidez através de análise visual e laboratorial."
  },
  {
    icon: Leaf,
    title: "Manejo de Solo",
    description: "Estratégias para correção e melhoria da fertilidade do solo a longo prazo."
  },
  {
    icon: TrendingUp,
    title: "Otimização de Custos",
    description: "Balanceamento entre investimento em fertilizantes e retorno produtivo esperado."
  }
];

// Placeholder testimonials - as fotos serão adicionadas via GitHub
const testimonials = [
  {
    quote: "A consultoria do Soloforte transformou a produtividade da minha lavoura. As recomendações técnicas são precisas e os resultados aparecem já na primeira safra.",
    name: "João Silva",
    designation: "Produtor Rural - MT",
    src: "https://afonsoraudinei.github.io/assets/soloforte/testimonial-1.jpg"
  },
  {
    quote: "O laudo personalizado me ajudou a entender exatamente onde investir em adubação. Economizei recursos e aumentei a produtividade em 15%.",
    name: "Maria Santos",
    designation: "Agrônoma - GO",
    src: "https://afonsoraudinei.github.io/assets/soloforte/testimonial-2.jpg"
  },
  {
    quote: "Trabalho técnico de excelência. A interpretação das análises de solo foi fundamental para corrigir problemas que eu nem sabia que existiam.",
    name: "Carlos Oliveira",
    designation: "Produtor Rural - PR",
    src: "https://afonsoraudinei.github.io/assets/soloforte/testimonial-3.jpg"
  },
  {
    quote: "A abordagem científica e prática ao mesmo tempo. Raudinei traduz dados complexos em ações simples e efetivas no campo.",
    name: "Ana Ferreira",
    designation: "Consultora Técnica - MS",
    src: "https://afonsoraudinei.github.io/assets/soloforte/testimonial-4.jpg"
  }
];

const SolofortePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-12 bg-gradient-to-b from-[#1E3A2F] to-[#2D4A3F]">
        <div className="container mx-auto max-w-6xl">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-6 text-white/80 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <Leaf className="w-4 h-4 text-[#4ADE80]" />
              <span className="text-sm text-white/80">Consultoria Técnica Especializada</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              SOLO<span className="text-[#4ADE80]">FORTE</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Ferramentas de análise e consultoria técnica para maximizar a fertilidade do solo 
              e a nutrição das suas culturas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl font-bold text-[#4ADE80]">500+</span>
                <p className="text-sm text-white/70">Laudos emitidos</p>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl font-bold text-[#4ADE80]">98%</span>
                <p className="text-sm text-white/70">Satisfação</p>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl font-bold text-[#4ADE80]">15+</span>
                <p className="text-sm text-white/70">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Serviços <span className="text-[#4ADE80]">Especializados</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para diagnóstico e manejo nutricional de culturas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-[#4ADE80]/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#1E3A2F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#4ADE80]" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              O que dizem nossos <span className="text-[#4ADE80]">clientes</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Depoimentos de produtores e profissionais que transformaram suas lavouras
            </p>
          </div>

          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#1E3A2F]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua lavoura?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato para uma consultoria personalizada e descubra como 
            maximizar a produtividade da sua cultura.
          </p>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4ADE80] text-[#1E3A2F] font-semibold hover:bg-[#22C55E] transition-colors"
          >
            Solicitar Consultoria
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolofortePage;
