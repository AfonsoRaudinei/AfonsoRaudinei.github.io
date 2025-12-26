import { Droplets, AlertTriangle, Sun, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CloroContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-cyan-500 to-cyan-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-cyan-600">Cl</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-cyan-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cloro (Cl)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O cloro é um micronutriente essencial para a fotossíntese, regulação osmótica 
            e abertura estomática. Participa da fotólise da água no fotossistema II 
            e está amplamente disponível na natureza.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Cloreto de Potássio", info: "KCl\n47% Cl\n60% K₂O" },
                { nome: "Cloreto de Cálcio", info: "CaCl₂\n65% Cl" },
                { nome: "Cloreto de Sódio", info: "NaCl\n60% Cl" },
                { nome: "Água de Irrigação", info: "Fonte natural\nVariável" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-cyan-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-cyan-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo e Plantas
          </h2>
          
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg">
            <h4 className="text-cyan-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-cyan-900 leading-relaxed mb-4">
              O cloro é absorvido como íon cloreto (Cl⁻). É abundante na maioria dos solos e 
              raramente limitante. A deficiência é mais comum em solos muito arenosos, 
              em regiões com alta precipitação e distantes do mar.
            </p>
            <ul className="space-y-2">
              <li className="text-cyan-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-cyan-500 before:text-xl">
                <strong>Teor adequado:</strong> 100-6.000 mg/kg de matéria seca
              </li>
              <li className="text-cyan-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-cyan-500 before:text-xl">
                <strong>Alta mobilidade:</strong> facilmente redistribuído na planta
              </li>
              <li className="text-cyan-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-cyan-500 before:text-xl">
                <strong>Cuidado:</strong> excesso é mais comum que deficiência
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-500">
              <CardHeader>
                <CardTitle className="text-cyan-800 text-center flex items-center justify-center gap-2">
                  <Sun className="w-5 h-5" />
                  Fotólise da Água
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-900">
                  Cofator essencial do complexo de evolução de oxigênio no fotossistema II. 
                  Participa da quebra da molécula de água, liberando O₂ e elétrons.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-500">
              <CardHeader>
                <CardTitle className="text-cyan-800 text-center flex items-center justify-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Regulação Osmótica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-900">
                  Principal ânion para manutenção do turgor celular e regulação da pressão 
                  osmótica. Acumula-se nos vacúolos como contraíon do K⁺.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-500">
              <CardHeader>
                <CardTitle className="text-cyan-800 text-center">Abertura Estomática</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-900">
                  Junto com o K⁺, regula a abertura e fechamento dos estômatos, 
                  controlando a transpiração e trocas gasosas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-500">
              <CardHeader>
                <CardTitle className="text-cyan-800 text-center flex items-center justify-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Ativação Enzimática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-900">
                  Ativa a enzima asparagina sintetase e ATPase vacuolar, 
                  participando do metabolismo de aminoácidos.
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
              Sintomas de Deficiência (rara)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {[
                "Murchamento das folhas jovens",
                "Clorose e necrose das bordas foliares",
                "Bronzeamento foliar",
                "Raízes curtas e espessas",
                "Redução do crescimento",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Toxidez */}
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Toxidez (mais comum que deficiência)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Necrose das bordas e pontas das folhas (queima salina)",
                "Queda prematura de folhas",
                "Redução do crescimento",
                "Comum em solos salinos e irrigação com água salobra",
                "Sensibilidade varia: tabaco e morango são muito sensíveis",
              ].map((item, index) => (
                <li key={index} className="text-red-900 pl-6 relative before:content-['⚠'] before:absolute before:left-0 before:text-red-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default CloroContent;