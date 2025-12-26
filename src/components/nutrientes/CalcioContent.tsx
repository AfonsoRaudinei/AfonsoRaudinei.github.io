import { Atom, Leaf, Droplets, AlertTriangle, Shield, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalcioContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-amber-600">Ca</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-amber-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cálcio (Ca)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O cálcio é um macronutriente secundário fundamental para a estrutura da parede celular, 
            divisão celular e sinalização intracelular. É essencial para o desenvolvimento radicular 
            e a integridade das membranas.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-amber-500 to-amber-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Calcário Calcítico", info: "CaCO₃\n38-42% Ca" },
                { nome: "Calcário Dolomítico", info: "CaCO₃·MgCO₃\n25% Ca\n12% Mg" },
                { nome: "Gesso Agrícola", info: "CaSO₄·2H₂O\n16-20% Ca\n13-17% S" },
                { nome: "Nitrato de Cálcio", info: "Ca(NO₃)₂\n19% Ca\n15% N" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-amber-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-amber-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
                    {fonte.nome}
                  </h3>
                  <p className="text-foreground text-xs whitespace-pre-line leading-relaxed">{fonte.info}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* No Solo */}
        <section>
          <h2 className="bg-gradient-to-r from-amber-500 to-amber-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
            <h4 className="text-amber-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-amber-900 leading-relaxed mb-4">
              O cálcio é absorvido pelas plantas na forma de Ca²⁺. Sua movimentação no solo ocorre 
              principalmente por fluxo de massa e difusão. A calagem é a principal forma de fornecimento.
            </p>
            <ul className="space-y-2">
              <li className="text-amber-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-amber-500 before:text-xl">
                <strong>Extração em soja:</strong> até 252 kg/ha de Ca em alta produtividade
              </li>
              <li className="text-amber-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-amber-500 before:text-xl">
                <strong>Exportação:</strong> apenas 4-6% do Ca extraído vai para os grãos
              </li>
              <li className="text-amber-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-amber-500 before:text-xl">
                <strong>Baixa mobilidade:</strong> não é redistribuído na planta (imóvel no floema)
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-amber-500 to-amber-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-800 text-center flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Parede Celular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-900">
                  Componente estrutural da lamela média, unindo células adjacentes através 
                  de pectatos de cálcio. Confere rigidez e resistência aos tecidos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-800 text-center flex items-center justify-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Sinalização Celular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-900">
                  Atua como mensageiro secundário em respostas a estímulos ambientais e hormonais. 
                  Regula processos de crescimento e desenvolvimento.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-800 text-center">Divisão Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-900">
                  Essencial para a formação do fuso mitótico e citocinese. 
                  Participa da formação da placa celular durante a divisão.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
              <CardHeader>
                <CardTitle className="text-amber-800 text-center">Integridade de Membranas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-900">
                  Mantém a estabilidade e permeabilidade seletiva das membranas celulares. 
                  Protege contra danos por estresse.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Deficiência */}
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Deficiência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {[
                "Morte de meristemas apicais e pontos de crescimento",
                "Folhas jovens deformadas e cloróticas",
                "Desenvolvimento radicular deficiente",
                "Podridão apical em frutos (tomate, pimentão)",
                "Bitter pit em maçãs",
                "Tipburn em alface e repolho",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ Sintomas aparecem em tecidos jovens devido à imobilidade do Ca!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default CalcioContent;