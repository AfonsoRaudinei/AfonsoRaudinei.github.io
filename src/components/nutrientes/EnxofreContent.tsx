import { Atom, Leaf, Droplets, AlertTriangle, Beaker, Dna } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnxofreContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-yellow-500 to-yellow-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-yellow-600">S</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-yellow-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Enxofre (S)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O enxofre é um macronutriente secundário essencial para a síntese de aminoácidos sulfurados 
            (cisteína e metionina) e proteínas. Participa da formação de vitaminas, coenzimas e compostos 
            de defesa vegetal.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-yellow-500 to-yellow-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Gesso Agrícola", info: "CaSO₄·2H₂O\n13-17% S\n16-20% Ca" },
                { nome: "Sulfato de Amônio", info: "(NH₄)₂SO₄\n24% S\n21% N" },
                { nome: "Superfosfato Simples", info: "10-12% S\n16-18% P₂O₅" },
                { nome: "Enxofre Elementar", info: "S⁰\n95-99% S" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-yellow-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-yellow-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
            <h4 className="text-yellow-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-yellow-900 leading-relaxed mb-4">
              O enxofre é absorvido principalmente como sulfato (SO₄²⁻). No solo, passa por transformações 
              mediadas por microrganismos entre formas orgânicas e inorgânicas (ciclo do S).
            </p>
            <ul className="space-y-2">
              <li className="text-yellow-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-yellow-500 before:text-xl">
                <strong>Extração em soja:</strong> até 124 kg/ha de S-SO₄ em alta produtividade
              </li>
              <li className="text-yellow-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-yellow-500 before:text-xl">
                <strong>Exportação:</strong> 31-37% do S extraído vai para os grãos
              </li>
              <li className="text-yellow-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-yellow-500 before:text-xl">
                <strong>Lixiviação:</strong> SO₄²⁻ é móvel no solo, podendo lixiviar em solos arenosos
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 text-center flex items-center justify-center gap-2">
                  <Dna className="w-5 h-5" />
                  Aminoácidos Sulfurados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-900">
                  Componente essencial da cisteína e metionina, aminoácidos que formam pontes 
                  dissulfeto nas proteínas, determinando sua estrutura tridimensional.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 text-center flex items-center justify-center gap-2">
                  <Beaker className="w-5 h-5" />
                  Coenzimas e Vitaminas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-900">
                  Presente em coenzimas importantes como CoA, biotina e tiamina, 
                  essenciais para o metabolismo energético e síntese de lipídios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 text-center">Óleos e Aromas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-900">
                  Componente de compostos que conferem sabor e aroma característicos 
                  em alho, cebola, mostarda e brássicas. Aumenta teor de óleo em oleaginosas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-yellow-800 text-center">Relação N:S</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-900">
                  Trabalha em sinergia com o nitrogênio na síntese proteica. 
                  Relação N:S adequada é de <strong>10-15:1</strong> nos tecidos vegetais.
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
                "Clorose uniforme em folhas novas (similar à deficiência de N)",
                "Folhas pequenas com coloração verde-clara a amarelada",
                "Redução do crescimento e alongamento dos entrenós",
                "Menor teor de proteínas e aminoácidos sulfurados",
                "Acúmulo de N não-proteico (nitrato, amidas)",
                "Redução na nodulação e fixação biológica de N em leguminosas",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ Sintomas em folhas novas pois S tem mobilidade limitada!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-yellow-700 to-yellow-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default EnxofreContent;