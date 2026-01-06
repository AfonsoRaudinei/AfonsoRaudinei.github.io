import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  GraduationCap, 
  Target, 
  Users, 
  MessageSquare, 
  Calendar, 
  Lightbulb, 
  TrendingUp, 
  RefreshCw, 
  BookOpen, 
  Handshake,
  ChevronRight
} from "lucide-react";
import perfilImg from "@/assets/perfil.png";

const diferenciais = [
  {
    icon: Target,
    title: "Presença Técnica Eficiente",
    description: "Atuação constante em campo, oferecendo soluções práticas e orientações que fortalecem a confiança do produtor."
  },
  {
    icon: TrendingUp,
    title: "Gestão Estratégica de Metas",
    description: "Metas superadas de forma recorrente com planejamento semanal e foco em rentabilidade sustentável."
  },
  {
    icon: Users,
    title: "Manutenção e Expansão de Carteira",
    description: "Gestão de carteira fiel com ampliação anual de novos produtores cadastrados."
  },
  {
    icon: Handshake,
    title: "Satisfação e Confiança dos Clientes",
    description: "Produtores buscam orientação técnica mesmo fora do meu portfólio, reforçando credibilidade e parceria."
  }
];

const competencias = [
  { icon: MessageSquare, title: "Comunicação Assertiva" },
  { icon: Users, title: "Relacionamento Interpessoal" },
  { icon: Calendar, title: "Organização e Planejamento" },
  { icon: Lightbulb, title: "Proatividade" },
  { icon: RefreshCw, title: "Adaptabilidade" },
  { icon: BookOpen, title: "Aprendizado Contínuo" },
  { icon: Target, title: "Orientação para Resultados" },
  { icon: Handshake, title: "Trabalho em Equipe" }
];

const experiencias = [
  {
    cargo: "Representante Técnico de Vendas 3",
    empresa: "Nutrien",
    periodo: "06/2022 – Atual",
    atividades: [
      "Atendimento técnico a produtores nas culturas de soja, milho e pastagem",
      "Posicionamento agronômico de produtos nutricionais e fisiológicos",
      "Gerenciamento de carteira ativa e planejamento de vendas",
      "Apoio técnico ao time comercial em campo"
    ]
  },
  {
    cargo: "Consultor Técnico de Vendas",
    empresa: "Sulgoiano Agro",
    periodo: "02/2015 – 05/2022",
    atividades: [
      "Assistência técnica a produtores e visitas periódicas",
      "Geração de demanda por meio de demonstrações em lavoura",
      "Comercialização de insumos e prospecção de clientes",
      "Reforço da relação técnica-comercial com agricultores"
    ]
  },
  {
    cargo: "Assistente Técnico de Vendas",
    empresa: "Sulgoiano Agro - Goiatuba/GO",
    periodo: "01/2013 – 02/2015",
    atividades: [
      "Tratamento de sementes e regulagem de implementos",
      "Suporte técnico ao consultor e acompanhamento de campo",
      "Geração de demanda inicial e ativação de produtores"
    ]
  }
];

const cursos = [
  { titulo: "NutriSpecialist", instituicao: "Prof. Dr. Ismail Cakmak - Agroadvance (2022)" },
  { titulo: "Interpretação da Análise de Solo e Recomendação Agronômica", instituicao: "Agroadvance (2021)" },
  { titulo: "Vendas Consultivas em Insumos Agrícolas", instituicao: "Markestrat (2013)" },
  { titulo: "Instituto de Especialização em Vendas (IEV)", instituicao: "Programa completo de vendas técnicas" },
  { titulo: "Treinamento de Competências Interpessoais", instituicao: "Dale Carnegie (2022)" },
  { titulo: "Excel Avançado", instituicao: "Hashtag Treinamentos (2022)" },
  { titulo: "Programa de Aplicação Responsável", instituicao: "Dow AgroSciences & UNESP (2014)" }
];

const JornadaProfissionalPage = () => {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: 'linear-gradient(180deg, hsl(0 0% 96%) 0%, hsl(0 0% 91%) 100%)',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
      }}
    >
      {/* iOS Style Header - Profile Card */}
      <header className="pt-12 pb-6 px-4">
        <div className="max-w-lg mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-ios-blue mb-6 text-[15px] font-normal transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>

          {/* Profile Card */}
          <div 
            className="rounded-2xl p-6 text-center"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-ios-gray-6">
              <img src={perfilImg} alt="Raudinei Afonso" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[22px] font-semibold text-ios-gray-1 mb-1">
              Raudinei Afonso S. Pereira
            </h1>
            <p className="text-[15px] text-ios-gray-3">
              Representante Técnico de Vendas 3
            </p>
            <p className="text-[13px] text-ios-gray-4 mt-1">
              Engenheiro Agrônomo • Nutrien
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pb-8 space-y-4">
        {/* Contato */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Contato
          </h2>
          <div className="divide-y divide-ios-separator">
            <a href="tel:+5563984376572" className="flex items-center justify-between px-5 py-3 hover:bg-ios-gray-6/50 transition-colors">
              <span className="flex items-center gap-3 text-[15px] text-ios-gray-1">
                <Phone className="w-5 h-5 text-ios-gray-4" /> Telefone
              </span>
              <span className="text-[15px] text-ios-green font-medium">+55 (63) 98437-6572</span>
            </a>
            <a href="mailto:raudyney@hotmail.com" className="flex items-center justify-between px-5 py-3 hover:bg-ios-gray-6/50 transition-colors">
              <span className="flex items-center gap-3 text-[15px] text-ios-gray-1">
                <Mail className="w-5 h-5 text-ios-gray-4" /> E-mail
              </span>
              <span className="text-[15px] text-ios-green font-medium">raudyney@hotmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/raudinei" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-5 py-3 hover:bg-ios-gray-6/50 transition-colors">
              <span className="flex items-center gap-3 text-[15px] text-ios-gray-1">
                <Linkedin className="w-5 h-5 text-ios-gray-4" /> LinkedIn
              </span>
              <span className="text-[15px] text-ios-green font-medium">linkedin.com/in/raudinei</span>
            </a>
            <div className="flex items-center justify-between px-5 py-3">
              <span className="flex items-center gap-3 text-[15px] text-ios-gray-1">
                <MapPin className="w-5 h-5 text-ios-gray-4" /> Localização
              </span>
              <span className="text-[15px] text-ios-gray-3">Porto Nacional, TO</span>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Sobre Mim
          </h2>
          <div className="px-5 pb-5">
            <p className="text-[15px] text-ios-gray-1 leading-relaxed">
              Engenheiro Agrônomo com mais de 10 anos de experiência em insumos agrícolas, com foco em assistência técnica, posicionamento de produtos, relacionamento com produtores e planejamento de vendas.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-ios-green/5 border-l-4 border-ios-green">
              <p className="text-[14px] text-ios-gray-2">
                <strong className="text-ios-green">Especialidades:</strong> Interpretação de análises de solo, recomendação de corretivos e fertilizantes para soja e milho.
              </p>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Diferenciais
          </h2>
          <div className="divide-y divide-ios-separator">
            {diferenciais.map((item, index) => (
              <div key={index} className="px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-ios-blue/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-ios-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-medium text-ios-gray-1">{item.title}</h3>
                    <p className="text-[13px] text-ios-gray-3 mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competências */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Competências
          </h2>
          <div className="px-5 pb-4 flex flex-wrap gap-2">
            {competencias.map((item, index) => (
              <span 
                key={index} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ios-gray-6/80 text-[13px] text-ios-gray-2 font-medium"
              >
                <item.icon className="w-3.5 h-3.5 text-ios-blue" />
                {item.title}
              </span>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Experiência Profissional
          </h2>
          <div className="divide-y divide-ios-separator">
            {experiencias.map((exp, index) => (
              <div key={index} className="px-5 py-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-[15px] font-semibold text-ios-gray-1">{exp.cargo}</h3>
                    <p className="text-[14px] text-ios-green font-medium">{exp.empresa}</p>
                  </div>
                  <span className="text-[12px] text-ios-gray-4 whitespace-nowrap">{exp.periodo}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.atividades.map((atividade, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-ios-gray-2">
                      <span className="text-ios-blue mt-1">•</span>
                      {atividade}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formação Acadêmica */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Formação Acadêmica
          </h2>
          <div className="px-5 py-4 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-ios-blue/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-ios-blue" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-ios-gray-1">Engenheiro Agrônomo</h3>
              <p className="text-[14px] text-ios-gray-3">Unicerrado - Goiatuba • 2013</p>
            </div>
          </div>
        </section>

        {/* Desenvolvimento Profissional */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Cursos e Certificações
          </h2>
          <div className="divide-y divide-ios-separator">
            {cursos.map((curso, index) => (
              <div key={index} className="px-5 py-3 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-ios-gray-1 truncate">{curso.titulo}</h3>
                  <p className="text-[12px] text-ios-gray-4 truncate">{curso.instituicao}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-ios-gray-5 flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Projeto em Destaque */}
        <section 
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          <h2 className="text-[13px] font-medium text-ios-gray-3 uppercase tracking-wider px-5 pt-4 pb-2">
            Projeto em Destaque
          </h2>
          <div className="px-5 pb-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ios-green to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-[17px] font-semibold text-ios-gray-1">
                SoloForte
              </h3>
            </div>
            <p className="text-[14px] text-ios-gray-2 mb-4 leading-relaxed">
              Sistema integrado para gestão agrícola com inteligência artificial, análise de solo e automação de dados.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-ios-green mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-ios-gray-2">IA e automação para análise agronômica</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-ios-green mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-ios-gray-2">Mapa interativo de casos de sucesso</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-ios-green mt-0.5 flex-shrink-0" />
                <span className="text-[14px] text-ios-gray-2">Geração de leads e visibilidade comercial</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer Button */}
        <div className="pt-4 pb-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-[15px] font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(220 100% 42%) 100%)',
              boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para página inicial
          </Link>
        </div>
      </main>
    </div>
  );
};

export default JornadaProfissionalPage;