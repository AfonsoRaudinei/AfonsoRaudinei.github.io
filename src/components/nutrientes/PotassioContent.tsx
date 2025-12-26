import { Atom, Leaf, Droplets, AlertTriangle, Zap, Shield, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PotassioContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-purple-600">K</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-purple-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Potássio (K)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O potássio é um macronutriente primário essencial para a regulação hídrica, ativação enzimática 
            e resistência a doenças. É o cátion mais abundante nas células vegetais e fundamental para 
            a qualidade dos frutos e grãos.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Cloreto de Potássio", info: "KCl\n58-62% K₂O" },
                { nome: "Sulfato de Potássio", info: "K₂SO₄\n48-52% K₂O\n17% S" },
                { nome: "Nitrato de Potássio", info: "KNO₃\n44% K₂O\n13% N" },
                { nome: "Sulfato de K e Mg", info: "K₂SO₄·MgSO₄\n22% K₂O\n11% Mg\n22% S" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-purple-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-purple-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
            <h4 className="text-purple-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-purple-900 leading-relaxed mb-4">
              O potássio é encontrado no solo em diferentes formas: na solução do solo (prontamente disponível), 
              trocável (adsorvido aos coloides), não-trocável (fixado nas argilas) e estrutural (nos minerais).
            </p>
            <ul className="space-y-2">
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Solos arenosos:</strong> maior susceptibilidade à lixiviação
              </li>
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Solos argilosos:</strong> maior capacidade de retenção, mas pode haver fixação
              </li>
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Competição:</strong> altos teores de Ca e Mg podem reduzir absorção de K
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg">
            <h4 className="text-purple-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Teores adequados nas plantas
            </h4>
            <ul className="space-y-2">
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Soja:</strong> 17-25 g/kg de matéria seca
              </li>
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Milho:</strong> 17-35 g/kg de matéria seca
              </li>
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Café:</strong> 18-24 g/kg de matéria seca
              </li>
              <li className="text-purple-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:text-xl">
                <strong>Extração máxima:</strong> até 574 kg/ha de K₂O em soja de alta produtividade
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800 text-center flex items-center justify-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Regulação Hídrica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-900">
                  Controla a abertura e fechamento dos estômatos, regulando a perda de água 
                  por transpiração e a absorção de CO₂ para a fotossíntese.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800 text-center flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Ativação Enzimática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-900">
                  Cofator de mais de 60 enzimas envolvidas na fotossíntese, respiração, 
                  síntese de proteínas e translocação de açúcares.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800 text-center flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Resistência a Estresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-900">
                  Aumenta a resistência a doenças, pragas, seca e geada. 
                  Melhora a tolerância ao estresse hídrico e salino.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-800 text-center flex items-center justify-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Qualidade de Frutos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-900">
                  Melhora o tamanho, cor, sabor e teor de açúcares dos frutos. 
                  Aumenta a resistência ao transporte e armazenamento.
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
                "Clorose e necrose nas bordas das folhas velhas",
                "Queima marginal das folhas (sintoma típico)",
                "Menor resistência ao acamamento",
                "Redução do tamanho e qualidade dos grãos",
                "Maior susceptibilidade a doenças",
                "Murchamento em condições de estresse hídrico",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ A deficiência reduz significativamente a qualidade e produtividade!
            </p>
          </CardContent>
        </Card>

        {/* Interações */}
        <Card className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-400">
          <CardHeader>
            <CardTitle className="text-sky-800 text-center text-2xl">
              Interações Nutricionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sky-900 text-center leading-relaxed mb-4">
              O potássio compete com cálcio e magnésio pelos sítios de absorção na raiz. 
              O equilíbrio entre K:Ca:Mg é fundamental para evitar desequilíbrios nutricionais.
            </p>
            <div className="bg-white p-4 rounded-lg border border-sky-300">
              <p className="text-sky-800 font-medium text-center">
                <strong>Relação ideal K:Ca:Mg no solo:</strong> 1:(3-5):(1-3) em mmolc/dm³
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default PotassioContent;