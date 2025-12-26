import { Atom, Leaf, Droplets, AlertTriangle, Flower, TreeDeciduous } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BoroContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-rose-500 to-rose-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-rose-600">B</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-rose-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Boro (B)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O boro é um micronutriente essencial para a formação da parede celular, floração, 
            frutificação e transporte de açúcares. É fundamental para o desenvolvimento reprodutivo 
            e germinação do pólen.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-rose-500 to-rose-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Bórax", info: "Na₂B₄O₇·10H₂O\n11% B" },
                { nome: "Ácido Bórico", info: "H₃BO₃\n17% B" },
                { nome: "Ulexita", info: "NaCaB₅O₉·8H₂O\n10-15% B" },
                { nome: "Colemanita", info: "Ca₂B₆O₁₁·5H₂O\n10-16% B" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-rose-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-rose-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-rose-500 to-rose-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 border-l-4 border-rose-500 p-6 rounded-lg mb-6">
            <h4 className="text-rose-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-rose-900 leading-relaxed mb-4">
              O boro é absorvido principalmente como ácido bórico (H₃BO₃). É o micronutriente mais 
              susceptível à lixiviação em solos arenosos e sua disponibilidade diminui em solos calcários.
            </p>
            <ul className="space-y-2">
              <li className="text-rose-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-rose-500 before:text-xl">
                <strong>Extração em soja:</strong> até 776 g/ha de B em alta produtividade
              </li>
              <li className="text-rose-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-rose-500 before:text-xl">
                <strong>Exportação:</strong> 21-23% do B extraído vai para os grãos
              </li>
              <li className="text-rose-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-rose-500 before:text-xl">
                <strong>Imóvel no floema:</strong> não é redistribuído na maioria das plantas
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-rose-500 to-rose-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-500">
              <CardHeader>
                <CardTitle className="text-rose-800 text-center flex items-center justify-center gap-2">
                  <TreeDeciduous className="w-5 h-5" />
                  Parede Celular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rose-900">
                  Liga-se à pectina formando complexos boro-ramnogalacturonano II, 
                  essenciais para a estrutura e elasticidade da parede celular.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-500">
              <CardHeader>
                <CardTitle className="text-rose-800 text-center flex items-center justify-center gap-2">
                  <Flower className="w-5 h-5" />
                  Floração e Pólen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rose-900">
                  Essencial para o desenvolvimento do tubo polínico, germinação do pólen 
                  e fecundação. Deficiência causa aborto floral.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-500">
              <CardHeader>
                <CardTitle className="text-rose-800 text-center">Transporte de Açúcares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rose-900">
                  Facilita o transporte de açúcares através das membranas, formando 
                  complexos borato-açúcar que atravessam a membrana plasmática.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-500">
              <CardHeader>
                <CardTitle className="text-rose-800 text-center">Divisão Celular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-rose-900">
                  Participa da síntese de bases nitrogenadas e ácidos nucleicos, 
                  sendo essencial para a divisão celular nos meristemas.
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
                "Morte do meristema apical (ponto de crescimento)",
                "Folhas jovens deformadas, enrugadas e espessas",
                "Pecíolos e caules com rachaduras e coração oco",
                "Flores abortadas e baixa frutificação",
                "Frutos deformados, rachados ou com cortiça",
                "Raízes curtas, grossas e com pontas necróticas",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ Sintomas em tecidos jovens pois B é imóvel no floema!
            </p>
          </CardContent>
        </Card>

        {/* Toxidez */}
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Toxidez (faixa estreita entre deficiência e excesso)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Clorose e necrose nas margens das folhas velhas",
                "Manchas marrons nas bordas foliares",
                "Queda prematura de folhas",
                "Redução do crescimento",
              ].map((item, index) => (
                <li key={index} className="text-red-900 pl-6 relative before:content-['⚠'] before:absolute before:left-0 before:text-red-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-rose-700 to-rose-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default BoroContent;