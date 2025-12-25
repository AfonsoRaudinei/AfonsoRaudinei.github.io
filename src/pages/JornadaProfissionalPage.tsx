import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Linkedin, MapPin, CheckCircle2, Briefcase, GraduationCap, Award, Target, Users, MessageSquare, Calendar, Lightbulb, TrendingUp, RefreshCw, BookOpen, Handshake } from "lucide-react";
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
  {
    icon: MessageSquare,
    title: "Comunicação Assertiva",
    description: "Habilidade de traduzir conceitos técnicos complexos em linguagem acessível para produtores rurais, facilitando a tomada de decisão."
  },
  {
    icon: Users,
    title: "Relacionamento Interpessoal",
    description: "Construção de vínculos sólidos e duradouros com clientes, baseados em confiança, respeito e entrega de resultados consistentes."
  },
  {
    icon: Calendar,
    title: "Organização e Planejamento",
    description: "Capacidade de gerenciar múltiplas demandas simultaneamente, priorizando atividades e cumprindo prazos com eficiência."
  },
  {
    icon: Lightbulb,
    title: "Proatividade",
    description: "Antecipação de necessidades dos clientes e identificação de oportunidades de negócio antes que sejam solicitadas."
  },
  {
    icon: RefreshCw,
    title: "Adaptabilidade",
    description: "Flexibilidade para ajustar estratégias conforme mudanças de mercado, clima e necessidades específicas de cada produtor."
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description: "Busca constante por atualização técnica e novas metodologias para agregar valor ao atendimento e às recomendações."
  },
  {
    icon: Target,
    title: "Orientação para Resultados",
    description: "Foco em superar metas com planejamento estratégico e acompanhamento rigoroso de indicadores de desempenho."
  },
  {
    icon: Handshake,
    title: "Trabalho em Equipe",
    description: "Colaboração efetiva com equipes comerciais e técnicas, compartilhando conhecimentos e apoiando o desenvolvimento coletivo."
  }
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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/20">
                <img src={perfilImg} alt="Raudinei Afonso" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Raudinei Afonso S. Pereira</h1>
                <p className="text-sm text-zinc-400">Representante técnico de vendas 3</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Contato */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Contato</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="flex items-center gap-2 text-foreground">
                <Phone className="w-4 h-4 text-muted-foreground" /> Telefone
              </span>
              <a href="tel:+5563984376572" className="text-primary">+55 (63) 98437-6572</a>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="flex items-center gap-2 text-foreground">
                <Mail className="w-4 h-4 text-muted-foreground" /> E-mail
              </span>
              <a href="mailto:raudineiasp@gmail.com" className="text-primary">raudineiasp@gmail.com</a>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <span className="flex items-center gap-2 text-foreground">
                <Linkedin className="w-4 h-4 text-muted-foreground" /> LinkedIn
              </span>
              <a href="https://www.linkedin.com/in/raudinei" target="_blank" rel="noopener noreferrer" className="text-primary">linkedin.com/in/raudinei</a>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-muted-foreground" /> Localização
              </span>
              <span className="text-muted-foreground">Porto Nacional, TO</span>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Sobre Mim</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Engenheiro Agrônomo com mais de 10 anos de experiência em insumos agrícolas, com foco em assistência técnica, posicionamento de produtos, relacionamento com produtores e planejamento de vendas. Perfil voltado à geração de demanda no campo, com atuação direta nas culturas de soja e milho.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
            <p className="text-foreground">
              <strong className="text-primary">Especialidades:</strong> Capacidade de interpretar análises de solo e recomendar corretivos como calcário e gesso, além de fertilizantes, incluindo macronutrientes (fósforo e potássio) e micronutrientes, tanto para aplicação no solo quanto via foliar.
            </p>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diferenciais.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competências */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Competências</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competencias.map((item, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Experiência Profissional</h2>
          <div className="space-y-6">
            {experiencias.map((exp, index) => (
              <div key={index} className="border-b border-border last:border-0 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.cargo}</h3>
                    <p className="text-primary font-medium">{exp.empresa}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.periodo}</span>
                </div>
                <ul className="space-y-2">
                  {exp.atividades.map((atividade, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {atividade}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formação Acadêmica */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Formação Acadêmica</h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Engenheiro Agrônomo</h3>
              <p className="text-muted-foreground">Unicerrado - Goiatuba • 2013</p>
            </div>
          </div>
        </section>

        {/* Desenvolvimento Profissional */}
        <section className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Desenvolvimento Profissional</h2>
          <div className="space-y-3">
            {cursos.map((curso, index) => (
              <div key={index} className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <h3 className="font-semibold text-foreground">{curso.titulo}</h3>
                <p className="text-sm text-muted-foreground">{curso.instituicao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projeto em Destaque */}
        <section className="bg-gradient-to-br from-card to-muted/30 rounded-xl p-6 shadow-lg border border-border">
          <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Projeto em Destaque</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Desenvolvimento de Soluções em Agricultura Digital – Projeto SoloForte
            </h3>
          </div>
          <p className="text-foreground mb-4 leading-relaxed">
            Criação de um sistema integrado para gestão agrícola, combinando inteligência artificial, análise de solo, marketing georreferenciado e automação de dados. O projeto conecta tecnologia, agronomia e estratégia comercial para aumentar eficiência e geração de demanda.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Desenvolvi soluções de IA e automação para análise de dados agronômicos e recomendações técnicas</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Estruturei um mapa interativo de casos de sucesso, funcionando como vitrine digital regional</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-foreground">Implementei estratégias de monetização, integrando geração de leads e visibilidade comercial</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 py-4 px-6 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para a página inicial
        </Link>
      </footer>
    </div>
  );
};

export default JornadaProfissionalPage;
