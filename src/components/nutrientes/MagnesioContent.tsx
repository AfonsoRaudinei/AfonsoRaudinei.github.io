import { Atom, Leaf, Droplets, AlertTriangle, Sun, Beaker } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MagnesioContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-lime-500 to-lime-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-lime-600">Mg</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lime-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Magnésio (Mg)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O magnésio é o átomo central da molécula de clorofila, sendo fundamental para a fotossíntese. 
            Atua como cofator de inúmeras enzimas e participa do transporte de fotoassimilados.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-lime-500 to-lime-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Calcário Dolomítico", info: "CaCO₃·MgCO₃\n10-14% Mg" },
                { nome: "Sulfato de Magnésio", info: "MgSO₄\n9-10% Mg\n12-13% S" },
                { nome: "Óxido de Magnésio", info: "MgO\n55-60% Mg" },
                { nome: "Kieserita", info: "MgSO₄·H₂O\n16-18% Mg\n20% S" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-lime-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-lime-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-lime-500 to-lime-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-lime-50 to-lime-100 border-l-4 border-lime-500 p-6 rounded-lg mb-6">
            <h4 className="text-lime-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-lime-900 leading-relaxed mb-4">
              O magnésio é absorvido como Mg²⁺ e sua disponibilidade é influenciada pelo pH, 
              teores de K e Ca, e CTC do solo. Solos com alta saturação por bases geralmente 
              apresentam bons teores de Mg.
            </p>
            <ul className="space-y-2">
              <li className="text-lime-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-lime-500 before:text-xl">
                <strong>Extração em soja:</strong> até 78 kg/ha de Mg em alta produtividade
              </li>
              <li className="text-lime-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-lime-500 before:text-xl">
                <strong>Exportação:</strong> 13-18% do Mg extraído vai para os grãos
              </li>
              <li className="text-lime-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-lime-500 before:text-xl">
                <strong>Mobilidade:</strong> móvel no floema, redistribuído de folhas velhas para novas
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-lime-500 to-lime-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>

          {/* Clorofila - Destaque */}
          <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-2 border-lime-500 mb-6">
            <CardHeader>
              <CardTitle className="text-lime-800 text-center flex items-center justify-center gap-2">
                <Sun className="w-6 h-6" />
                Componente Central da Clorofila
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <div className="bg-lime-200 p-6 rounded-full">
                  <div className="text-6xl">🌿</div>
                </div>
              </div>
              <p className="text-lime-900 text-center leading-relaxed">
                O magnésio é o átomo central da molécula de clorofila, sendo diretamente responsável 
                pela captação de luz na fotossíntese. Cerca de <strong>15-20% do Mg total da planta</strong> está 
                presente na clorofila, conferindo a cor verde característica às folhas.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-2 border-lime-500">
              <CardHeader>
                <CardTitle className="text-lime-800 text-center flex items-center justify-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Ativação Enzimática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-900">
                  Cofator essencial de enzimas envolvidas na síntese de proteínas, 
                  ácidos nucleicos, ATP e fixação de CO₂ (RuBisCO).
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-50 to-lime-100 border-2 border-lime-500">
              <CardHeader>
                <CardTitle className="text-lime-800 text-center">Transporte de Açúcares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-900">
                  Participa ativamente do carregamento de sacarose no floema e 
                  do transporte de fotoassimilados da fonte para o dreno.
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
                "Clorose internerval em folhas velhas (nervuras permanecem verdes)",
                "Coloração amarelada, bronzeada ou avermelhada entre nervuras",
                "Necrose das bordas das folhas em estágios avançados",
                "Redução do crescimento e perfilhamento",
                "Menor enchimento de grãos e qualidade de frutos",
                "Acúmulo de amido nas folhas (bloqueio do transporte)",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ Sintomas em folhas velhas devido à alta mobilidade do Mg!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-lime-700 to-lime-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default MagnesioContent;