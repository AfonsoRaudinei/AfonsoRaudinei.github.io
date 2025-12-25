import { Link } from "react-router-dom";
import { Beaker, Leaf, RefreshCw, Dna, Zap, AlertTriangle, BarChart3, Lightbulb } from "lucide-react";

const fontesNitrogenio = [
  { nome: "Gases", formula: "N₂, NO₂, N₂O", info: "Atmosfera" },
  { nome: "Nitritos", formula: "NO₂⁻", info: "Solo" },
  { nome: "MAP e DAP", formula: "NH₄H₂PO₄ / (NH₄)₂HPO₄", percentual: "10% / 17% de N" },
  { nome: "Nitrato de Amônio", formula: "NH₄NO₃", percentual: "33% de N" },
  { nome: "Ureia", formula: "CH₄N₂O", percentual: "47% de N" },
];

const cicloProcessos = [
  {
    titulo: "1. Fixação Biológica",
    descricao: "Bactérias Bradyrhizobium: Fixam N₂ atmosférico em associação simbiótica com raízes de plantas leguminosas, produzindo NH₃.",
  },
  {
    titulo: "2. Nitrificação",
    descricao: "Bactérias Nitrosomonas e Nitrococcus: Convertem NH₃ → NO₂⁻ e depois NO₂⁻ → NO₃⁻ através da ação microbiana no solo.",
  },
  {
    titulo: "3. Desnitrificação",
    descricao: "Bactérias Paracoccus denitrificans: Em condições anaeróbicas, convertem NO₃⁻ de volta para N₂, retornando o nitrogênio à atmosfera.",
  },
  {
    titulo: "4. Absorção pelas Plantas",
    descricao: "As plantas absorvem o nitrogênio principalmente nas formas de nitrato (NO₃⁻) e amônio (NH₄⁺), sendo a primeira preferencial. Também podem absorver aminoácidos e ureia (formas orgânicas).",
  },
];

const timelineMetabolismo = [
  {
    titulo: "Absorção e Transporte",
    descricao: "Após a absorção, o nitrogênio é transportado via xilema nas mesmas formas em que foi absorvido (NO₃⁻ e NH₄⁺) ou em formas orgânicas provenientes da fase de assimilação, como alantoína (C₄H₆N₄O₃) e ácido alantoico (C₄H₆N₄O₄).",
  },
  {
    titulo: "Redução do Nitrato",
    descricao: "No citosol, o nitrato sofre redução assimilatória pela ação da enzima nitrato redutase, que gerará nitrito. O nitrito é transferido para dentro dos cloroplastos sendo reduzido a amônio.",
    formula: "NO₃⁻ → NO₂⁻ → NH₄⁺",
  },
  {
    titulo: "Assimilação do Amônio",
    descricao: "O íon amônio reage com o alfacetoglutarato proveniente do ciclo de Krebs, produzindo os aminoácidos glutamato e glutamina. Este processo de assimilação de nitrato é energeticamente mais custoso para planta em relação à assimilação do amônio.",
  },
  {
    titulo: "Síntese de Aminoácidos",
    descricao: "Glutamato e glutamina são as primeiras moléculas orgânicas formadas nas folhas. Essas moléculas sofrem transformações formando os demais aminoácidos, que formarão as proteínas e demais compostos orgânicos nitrogenados.",
  },
];

const funcoes = [
  {
    titulo: "Estrutural - Clorofila",
    emoji: "🌿",
    itens: [
      "Elemento estrutural da molécula de clorofila",
      "Atua diretamente na fotossíntese",
      "Responsável pela coloração verde das folhas",
    ],
  },
  {
    titulo: "Ácidos Nucleicos",
    emoji: "🧬",
    itens: [
      "Componente essencial do DNA e RNA",
      "Função estrutural nas bases nitrogenadas",
      "Fundamental para a divisão celular",
    ],
  },
  {
    titulo: "Proteínas",
    emoji: "🔨",
    itens: [
      "Principal componente dos aminoácidos",
      "Em plantas deficientes, a concentração de proteínas é reduzida",
      "Há diminuição do porte das plantas",
    ],
  },
  {
    titulo: "Crescimento",
    emoji: "🌱",
    itens: [
      "Nutriente exigido em maior quantidade",
      "Constitui 2 a 5% da matéria seca",
      "Fundamental para o desenvolvimento vegetal",
    ],
  },
  {
    titulo: "Primeiras Moléculas Orgânicas",
    emoji: "💚",
    itens: [
      "Glutamato e glutamina são formados primeiro",
      "Sofrem transformações gerando demais aminoácidos",
      "Originarão proteínas e compostos orgânicos",
    ],
  },
  {
    titulo: "Energia",
    emoji: "⚡",
    itens: [
      "Participa da produção de energia nas células",
      "Através da composição das moléculas de ATP",
      "Essencial para processos metabólicos",
    ],
  },
  {
    titulo: "Formas de Absorção",
    emoji: "🔄",
    itens: [
      "NH₄⁺: Absorvido de forma passiva e uniporte",
      "NO₃⁻: Absorvido de forma ativa e simporte",
      "Com transporte simultâneo de H⁺",
    ],
  },
  {
    titulo: "Simbiose com Bactérias",
    emoji: "🦠",
    itens: [
      "Bactérias Bradyrhizobium sp. fornecem a enzima nitrogenase",
      "A planta hospedeira fornece leghemoglobina, homocitrato e fontes de carbono",
      "A nitrogenase usa cofator de Fe e Mo",
    ],
  },
];

const sintomasDeficiencia = [
  {
    titulo: "Clorose em Folhas Velhas",
    descricao: "Devido à alta mobilidade do N no floema (redistribuição), sintomas de deficiência aparecem primeiramente em folhas velhas com amarelecimento generalizado.",
  },
  {
    titulo: "Redução de Crescimento",
    descricao: "Plantas deficientes apresentam porte reduzido, desenvolvimento lento e menor produção de biomassa.",
  },
  {
    titulo: "Redução de Proteínas",
    descricao: "A concentração de proteínas é significativamente reduzida, afetando todos os processos metabólicos da planta.",
  },
  {
    titulo: "Menor Eficiência Fotossintética",
    descricao: "Com menos clorofila, a capacidade fotossintética é comprometida, resultando em menor produção de energia.",
  },
];

const teoresAdequados = [
  { cultura: "Soja", valor: "40-54", unidade: "g/kg de matéria seca", local: "Folha trifoliolada" },
  { cultura: "Milho", valor: "27.5-32.5", unidade: "g/kg de matéria seca", local: "Folha oposta e abaixo da espiga" },
  { cultura: "Trigo", valor: "20-34", unidade: "g/kg de matéria seca", local: "Folha bandeira" },
];

const manejoRecomendacoes = [
  {
    titulo: "Fixação Biológica de Nitrogênio (FBN)",
    descricao: "Utilizar inoculantes de qualidade com bactérias Bradyrhizobium para leguminosas (soja, feijão). Pode suprir 100% da necessidade de N da cultura.",
  },
  {
    titulo: "Adubação Nitrogenada em Cobertura",
    descricao: "Aplicar em estádios adequados (V4-V6 para milho), parcelando quando necessário para reduzir perdas por lixiviação.",
  },
  {
    titulo: "Fonte Adequada",
    descricao: "Escolher a fonte conforme o sistema: Ureia (47% N) mais econômica mas suscetível a volatilização; MAP/DAP para aplicação junto ao plantio; Nitrato de amônio para menores perdas.",
  },
  {
    titulo: "Manejo da Acidez",
    descricao: "Manter pH adequado (5,5-6,5) para otimizar a nitrificação e disponibilidade de N. A acidez excessiva compromete a FBN.",
  },
  {
    titulo: "Rotação de Culturas",
    descricao: "Incluir leguminosas na rotação para adicionar N ao sistema via FBN e melhorar a fertilidade biológica do solo.",
  },
  {
    titulo: "Reduzir Perdas",
    descricao: "Incorporar ureia ou aplicar em condições adequadas de umidade; evitar aplicação em solos encharcados (desnitrificação).",
  },
];

export default function NitrogenioContent() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 mb-6 shadow-xl animate-fade-up">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">N</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">Nitrogênio (N)</h1>
              <p className="text-zinc-400 text-sm">Raudinei Afonso - Nutrição de Plantas</p>
            </div>
          </div>
          <Link
            to="/"
            className="px-6 py-3 bg-white/95 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span className="font-semibold text-zinc-800">SoloForte</span>
          </Link>
        </div>
      </div>

      {/* Visão Geral */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <Beaker className="w-4 h-4" />
          Visão Geral
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-card border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all">
            <h3 className="font-semibold text-foreground mb-3">Sobre o Nitrogênio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cerca de 78% da atmosfera terrestre é composta por nitrogênio na forma de gás N₂. Elemento essencial para a formação dos ácidos nucleicos e proteínas nas plantas e demais organismos vivos.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all">
            <h3 className="font-semibold text-foreground mb-3">Importância na Planta</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O nitrogênio é um dos nutrientes exigidos em maior quantidade pelas plantas, constituindo de 2 a 5% de sua matéria seca. Componente fundamental de aminoácidos, proteínas e clorofila.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-foreground mb-3">Mobilidade</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O nitrogênio tem alta mobilidade quanto à redistribuição no floema na forma de aminoácidos. Sintomas de deficiência ocorrem em folhas velhas devido a essa mobilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Principais Fontes */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <Leaf className="w-4 h-4" />
          Principais Fontes de Nitrogênio
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          As fontes de nitrogênio empregadas na agricultura brasileira são importadas da Rússia (23%), China (16%), Argélia (12%), Catar (8%), Nigéria (6%) e Emirados Árabes Unidos (5%). Todos estes países exportam ureia; a Rússia é líder em nitrato de amônio e China e Bélgica em sulfato de Amônio.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {fontesNitrogenio.map((fonte) => (
            <div
              key={fonte.nome}
              className="p-4 rounded-xl bg-card border border-border/50 text-center hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-foreground mb-2">{fonte.nome}</h4>
              <p className="text-xs text-muted-foreground mb-1">{fonte.formula}</p>
              {fonte.percentual && (
                <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">{fonte.percentual}</p>
              )}
              {fonte.info && (
                <p className="text-xs text-muted-foreground mt-2">{fonte.info}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ciclo do Nitrogênio */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <RefreshCw className="w-4 h-4" />
          Ciclo do Nitrogênio no Solo
        </div>
        <div className="bg-card rounded-xl p-6 border border-border/50 mb-5">
          {cicloProcessos.map((processo) => (
            <div
              key={processo.titulo}
              className="p-4 my-3 rounded-lg bg-background border-l-4 border-blue-500 shadow-sm"
            >
              <h4 className="font-semibold text-foreground mb-2">{processo.titulo}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{processo.descricao}</p>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <span>⚠️</span> Fontes no Solo
          </h3>
          <ul className="space-y-2">
            <li className="p-3 bg-card rounded-lg border-l-4 border-emerald-500 text-sm text-muted-foreground">
              <strong className="text-foreground">Fertilizantes Nitrogenados Industriais:</strong> Principal fonte na agricultura moderna
            </li>
            <li className="p-3 bg-card rounded-lg border-l-4 border-emerald-500 text-sm text-muted-foreground">
              <strong className="text-foreground">Fixação Biológica de N₂ (FBN):</strong> Através de bactérias do gênero Bradyrhizobium associadas simbioticamente às raízes de plantas leguminosas
            </li>
            <li className="p-3 bg-card rounded-lg border-l-4 border-emerald-500 text-sm text-muted-foreground">
              <strong className="text-foreground">Mineralização:</strong> Transformações do N orgânico pela ação microbiana (nitrificação e desnitrificação)
            </li>
          </ul>
        </div>
      </section>

      {/* Incorporação e Metabolismo */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <Dna className="w-4 h-4" />
          Incorporação e Metabolismo
        </div>
        <div className="relative pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500" />
          {timelineMetabolismo.map((item) => (
            <div key={item.titulo} className="relative mb-8 pl-5">
              <div className="absolute -left-[23px] top-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm" />
              <h3 className="font-semibold text-foreground mb-2">{item.titulo}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.descricao}</p>
              {item.formula && (
                <p className="text-sm italic text-blue-600 dark:text-blue-400 font-medium">{item.formula}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Principais Funções */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <Zap className="w-4 h-4" />
          Principais Funções do Nitrogênio
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {funcoes.map((funcao) => (
            <div
              key={funcao.titulo}
              className="p-5 rounded-xl bg-card border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>{funcao.emoji}</span> {funcao.titulo}
              </h3>
              <ul className="space-y-2">
                {funcao.itens.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-500 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sintomas de Deficiência */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <AlertTriangle className="w-4 h-4" />
          Sintomas de Deficiência
        </div>
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-5">
          {sintomasDeficiencia.map((sintoma) => (
            <div
              key={sintoma.titulo}
              className="p-4 my-3 bg-card rounded-lg border-l-4 border-red-500"
            >
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">{sintoma.titulo}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{sintoma.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teores Adequados */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <BarChart3 className="w-4 h-4" />
          Teores Adequados nas Culturas
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {teoresAdequados.map((teor) => (
            <div
              key={teor.cultura}
              className="p-6 rounded-xl bg-card border-2 border-blue-200 dark:border-blue-800 text-center"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{teor.cultura}</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{teor.valor}</p>
              <p className="text-xs text-muted-foreground">{teor.unidade}</p>
              <p className="text-xs text-muted-foreground mt-2">{teor.local}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manejo e Recomendações */}
      <section className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm border border-border/50 animate-fade-up">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wide font-medium mb-5 pb-3 border-b border-border">
          <Lightbulb className="w-4 h-4" />
          Manejo e Recomendações
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5">
          <h3 className="font-semibold text-foreground mb-4">Boas Práticas de Manejo do Nitrogênio</h3>
          <ul className="space-y-3">
            {manejoRecomendacoes.map((rec) => (
              <li
                key={rec.titulo}
                className="p-4 bg-card rounded-lg border-l-4 border-emerald-500 text-sm text-muted-foreground leading-relaxed"
              >
                <strong className="text-foreground">{rec.titulo}:</strong> {rec.descricao}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 text-center animate-fade-up">
        <p className="text-zinc-400 text-sm mb-2">Nutrição de Plantas - Soja e Milho</p>
        <h3 className="text-white font-semibold mb-2">Raudinei Afonso</h3>
        <p className="text-zinc-500 text-xs">Baseado em informações técnicas e científicas de nutrição vegetal</p>
      </div>
    </div>
  );
}
