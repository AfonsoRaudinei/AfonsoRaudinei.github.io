import { Link } from "react-router-dom";
import { Beaker, Leaf, RefreshCw, Dna, Zap, AlertTriangle, BarChart3, Lightbulb, FlaskConical, Sprout, Droplets, Atom, CircleDot, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FertilizanteCard, ImageGrid, ImagePlaceholder } from "./ImagePlaceholder";
import AbsorcaoSojaAccordion from "./AbsorcaoSojaAccordion";
const fontesNitrogenio = [{
  nome: "Ureia",
  formula: "CH₄N₂O",
  percentual: "47% de N",
  desc: "Mais concentrada"
}, {
  nome: "Nitrato de Amônio",
  formula: "NH₄NO₃",
  percentual: "33% de N",
  desc: "Duas formas de N"
}, {
  nome: "MAP",
  formula: "NH₄H₂PO₄",
  percentual: "10% de N",
  desc: "+ 48% P₂O₅"
}, {
  nome: "DAP",
  formula: "(NH₄)₂HPO₄",
  percentual: "17% de N",
  desc: "+ 45% P₂O₅"
}, {
  nome: "Sulfato Amônio",
  formula: "(NH₄)₂SO₄",
  percentual: "21% de N",
  desc: "+ 24% S"
}];
const cicloProcessos = [{
  titulo: "1. Fixação Biológica",
  descricao: "Bactérias Bradyrhizobium: Fixam N₂ atmosférico em associação simbiótica com raízes de plantas leguminosas, produzindo NH₃.",
  icon: "🦠"
}, {
  titulo: "2. Nitrificação",
  descricao: "Bactérias Nitrosomonas e Nitrococcus: Convertem NH₃ → NO₂⁻ e depois NO₂⁻ → NO₃⁻ através da ação microbiana no solo.",
  icon: "🔄"
}, {
  titulo: "3. Desnitrificação",
  descricao: "Bactérias Paracoccus denitrificans: Em condições anaeróbicas, convertem NO₃⁻ de volta para N₂, retornando o nitrogênio à atmosfera.",
  icon: "💨"
}, {
  titulo: "4. Absorção pelas Plantas",
  descricao: "As plantas absorvem o nitrogênio principalmente nas formas de nitrato (NO₃⁻) e amônio (NH₄⁺).",
  icon: "🌱"
}];
const funcoes = [{
  titulo: "Clorofila",
  descricao: "Elemento estrutural da molécula de clorofila, atua diretamente na fotossíntese e é responsável pela coloração verde.",
  icon: "🌿"
}, {
  titulo: "Ácidos Nucleicos",
  descricao: "Componente essencial do DNA e RNA, fundamental para a divisão celular e expressão gênica.",
  icon: "🧬"
}, {
  titulo: "Proteínas",
  descricao: "Principal componente dos aminoácidos. Em plantas deficientes, a concentração de proteínas é reduzida.",
  icon: "🔨"
}, {
  titulo: "Energia (ATP)",
  descricao: "Participa da produção de energia através da composição das moléculas de ATP e ADP.",
  icon: "⚡"
}];
const sintomasDeficiencia = [{
  sintoma: "Clorose em folhas velhas",
  detalhe: "Amarelecimento generalizado devido à alta mobilidade"
}, {
  sintoma: "Redução de crescimento",
  detalhe: "Porte reduzido e menor produção de biomassa"
}, {
  sintoma: "Menor perfilhamento",
  detalhe: "Em gramíneas, menos perfilhos por planta"
}, {
  sintoma: "Senescência precoce",
  detalhe: "Folhas velhas secam e caem antecipadamente"
}];
export default function NitrogenioContent() {
  return <div className="min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-300/30">
              <span className="text-5xl font-bold text-blue-600">N</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Nitrogênio (N)</h1>
          <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            Macronutriente primário mais exigido pelas plantas. Componente essencial de aminoácidos, 
            proteínas, ácidos nucleicos e clorofila. Constitui 2 a 5% da matéria seca vegetal.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">78%</p>
              <p className="text-white/70 text-sm">da atmosfera</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">2-5%</p>
              <p className="text-white/70 text-sm">matéria seca</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-white">NO₃⁻</p>
              <p className="text-white/70 text-sm">forma principal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-0 shadow-xl overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-center uppercase tracking-wider">
              <FlaskConical className="w-6 h-6 inline mr-2" />
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {fontesNitrogenio.map((fonte, i) => <div key={i} className="bg-white rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-blue-700 font-bold text-sm mb-2">{fonte.nome}</h3>
                  <p className="text-foreground text-xs mb-1">{fonte.formula}</p>
                  <p className="text-blue-600 font-bold text-lg">{fonte.percentual}</p>
                  <p className="text-muted-foreground text-[10px] mt-1 uppercase">{fonte.desc}</p>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Fertilizantes Nitrogenados */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-blue-600" />
            Fertilizantes Nitrogenados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <FertilizanteCard nome="Ureia" formula="CH₄N₂O" percentual="47% N" descricao="Mais utilizada" icon={Beaker} />
            <FertilizanteCard nome="Nitrato de Amônio" formula="NH₄NO₃" percentual="33% N" descricao="Pronta disponibilidade" icon={Atom} />
            <FertilizanteCard nome="Sulfato de Amônio" formula="(NH₄)₂SO₄" percentual="21% N" descricao="+ 24% S" icon={Droplets} />
            <FertilizanteCard nome="MAP" formula="NH₄H₂PO₄" percentual="10% N" descricao="+ 48% P₂O₅" icon={CircleDot} />
            <FertilizanteCard nome="DAP" formula="(NH₄)₂HPO₄" percentual="17% N" descricao="+ 45% P₂O₅" icon={Layers} />
          </div>
        </section>

        {/* Ciclo do Nitrogênio */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            <RefreshCw className="w-6 h-6 inline mr-2 text-blue-600" />
            Ciclo do Nitrogênio no Solo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {cicloProcessos.map((processo, i) => <div key={i} className="bg-card rounded-xl p-5 border-l-4 border-blue-500 shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-2xl">{processo.icon}</span>
                    {processo.titulo}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{processo.descricao}</p>
                </div>)}
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-2xl p-6 flex items-center justify-center">
              <div className="text-center">
                <RefreshCw className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <p className="text-blue-700 dark:text-blue-300 font-medium">Ciclo do Nitrogênio</p>
                <p className="text-blue-600/70 dark:text-blue-400/70 text-sm mt-1">N₂ ⇄ NH₃ ⇄ NO₃⁻</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fixação Biológica */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-6 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800">
          <h4 className="text-emerald-800 dark:text-emerald-300 text-xl font-bold mb-4 flex items-center gap-2">
            <Sprout className="w-6 h-6" />
            Fixação Biológica de Nitrogênio (FBN)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-emerald-900 dark:text-emerald-100 mb-4 leading-relaxed">
                A associação simbiótica entre bactérias do gênero <strong>Bradyrhizobium</strong> e raízes 
                de leguminosas (soja, feijão) permite a fixação do N₂ atmosférico, podendo suprir 
                100% da necessidade de N da cultura.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Enzima:</strong> Nitrogenase (cofatores Fe e Mo)</span>
                </li>
                <li className="text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Produto:</strong> NH₃ convertido em aminoácidos</span>
                </li>
                <li className="text-emerald-800 dark:text-emerald-200 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span><strong>Transporte:</strong> Alantoína e ácido alantoico no xilema</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/30 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <Sprout className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <p className="text-emerald-700 dark:text-emerald-300 font-medium">Simbiose Leguminosa</p>
                <p className="text-emerald-600/70 dark:text-emerald-400/70 text-sm mt-1">Bradyrhizobium + Raízes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metabolismo */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            <Dna className="w-6 h-6 inline mr-2 text-blue-600" />
            Incorporação e Metabolismo
          </h3>
          
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                <p className="text-3xl mb-2">NO₃⁻</p>
                <p className="text-sm text-muted-foreground">Nitrato</p>
                <p className="text-xs text-blue-600 mt-1">Absorção ativa</p>
              </div>
              <div className="text-center p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <p className="text-3xl mb-2">→ NO₂⁻ →</p>
                <p className="text-sm text-muted-foreground">Nitrito</p>
                <p className="text-xs text-blue-600 mt-1">Nitrato redutase</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl">
                <p className="text-3xl mb-2">NH₄⁺</p>
                <p className="text-sm text-muted-foreground">Amônio</p>
                <p className="text-xs text-blue-600 mt-1">→ Glutamato</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              O amônio reage com alfacetoglutarato formando <strong>glutamato e glutamina</strong>, 
              precursores de todos os outros aminoácidos.
            </p>
          </div>
        </section>

        {/* Principais Funções */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Principais Funções do Nitrogênio
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {funcoes.map((funcao, i) => <Card key={i} className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-white to-blue-50 dark:from-card dark:to-blue-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-700 dark:text-blue-400 flex items-center gap-2">
                    <span className="text-2xl">{funcao.icon}</span>
                    {funcao.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{funcao.descricao}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Deficiência */}
        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-2 border-orange-400">
          <CardHeader>
            <CardTitle className="text-orange-800 dark:text-orange-300 text-center text-xl flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Deficiência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-orange-900 dark:text-orange-100 mb-4 text-sm">
                  Devido à <strong>alta mobilidade</strong> no floema, os sintomas aparecem 
                  primeiro nas <strong>folhas velhas</strong> (redistribuição).
                </p>
                <ul className="space-y-3">
                  {sintomasDeficiencia.map((item, i) => <li key={i} className="text-orange-900 dark:text-orange-100 pl-6 relative">
                      <span className="absolute left-0 text-orange-500 font-bold">✗</span>
                      <span className="font-medium">{item.sintoma}</span>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">{item.detalhe}</p>
                    </li>)}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <p className="text-orange-700 dark:text-orange-300 font-medium">Sintomas Visuais</p>
                  <p className="text-orange-600/70 dark:text-orange-400/70 text-sm mt-1">Clorose foliar progressiva</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Absorção em Soja - Accordion */}
        <section>
          <AbsorcaoSojaAccordion corPrimaria="blue" />
        </section>

        {/* Teores Adequados */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center flex items-center justify-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Teores Adequados nas Culturas
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[{
            cultura: "Soja",
            valor: "40-54",
            unidade: "g/kg",
            local: "Folha trifoliolada"
          }, {
            cultura: "Milho",
            valor: "27-33",
            unidade: "g/kg",
            local: "Folha oposta à espiga"
          }, {
            cultura: "Trigo",
            valor: "20-34",
            unidade: "g/kg",
            local: "Folha bandeira"
          }].map((item, i) => <div key={i} className="bg-white dark:bg-card rounded-xl p-4 text-center shadow-sm border border-blue-100 dark:border-blue-900">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">{item.cultura}</h4>
                <p className="text-2xl font-bold text-foreground">{item.valor}</p>
                <p className="text-muted-foreground text-xs">{item.unidade} MS</p>
                <p className="text-muted-foreground text-xs mt-1">{item.local}</p>
              </div>)}
          </div>
        </section>

        {/* Galeria Visual */}
        <section>
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Galeria: Nitrogênio na Agricultura
          </h3>
          <ImageGrid columns={3} aspectRatio="video" images={[{
          title: "Aplicação de Ureia em Cobertura",
          description: "Adubação nitrogenada em milho",
          icon: Beaker
        }, {
          title: "Deficiência de N em Soja",
          description: "Clorose em folhas basais",
          icon: AlertTriangle
        }, {
          title: "Inoculação de Sementes",
          description: "Bradyrhizobium para FBN",
          icon: Sprout
        }]} />
        </section>

        {/* Footer */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 rounded-2xl text-center shadow-xl">
          
          <p className="text-blue-200 text-sm">
            Conteúdo educacional • Imagens ilustrativas pendentes
          </p>
        </div>
      </div>
    </div>;
}