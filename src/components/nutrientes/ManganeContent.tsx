import { Atom, Leaf, Droplets, AlertTriangle, Beaker, Sun, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManganeContent = () => {
  const funcoes = [
    { text: "Influencia o pH do solo e disponibilidade de nutrientes", position: "top-left" },
    { text: "Síntese de hormônios (auxinas e citocininas)", position: "top-right" },
    { text: "Biossíntese de compostos fenólicos (taninos e ligninas)", position: "left" },
    { text: "Cofator de enzimas (fotossíntese, respiração)", position: "right" },
    { text: "Síntese de clorofila", position: "bottom-left" },
    { text: "Fortalece paredes celulares", position: "bottom-right" },
    { text: "Complexo Mn₄CaO₅ (fotólise da água)", position: "bottom-left-2" },
    { text: "Componente da SOD (proteção contra radicais livres)", position: "bottom-right-2" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-pink-500 to-pink-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Atom className="w-10 h-10 text-pink-600" />
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-pink-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Samira Polezi Silva</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Manganês (Mn)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O manganês é um micronutriente essencial que atua como cofator de diversas enzimas, 
            participando ativamente da fotossíntese, síntese de clorofila e proteção contra estresse oxidativo.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Funções com Diagrama */}
        <section>
          <h2 className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          {/* Diagrama Visual */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 mb-8">
            <h4 className="text-center text-pink-600 text-xl font-bold mb-8">
              Diagrama Visual: Funções do Manganês na Planta
            </h4>
            
            <div className="relative min-h-[500px] flex items-center justify-center">
              {/* Planta Central SVG */}
              <div className="relative z-10">
                <svg width="200" height="300" viewBox="0 0 200 300" className="drop-shadow-lg">
                  {/* Folhas superiores */}
                  <ellipse cx="100" cy="60" rx="50" ry="30" fill="#8BC34A" opacity="0.9"/>
                  <ellipse cx="70" cy="70" rx="40" ry="25" fill="#7CB342" opacity="0.9"/>
                  <ellipse cx="130" cy="70" rx="40" ry="25" fill="#689F38" opacity="0.9"/>
                  
                  {/* Caule */}
                  <rect x="95" y="80" width="10" height="100" fill="#689F38" rx="5"/>
                  
                  {/* Raízes */}
                  <path d="M 100 180 Q 70 220, 50 260" stroke="#8D6E63" strokeWidth="4" fill="none"/>
                  <path d="M 100 180 Q 85 230, 75 270" stroke="#8D6E63" strokeWidth="3" fill="none"/>
                  <path d="M 100 180 Q 100 230, 100 280" stroke="#8D6E63" strokeWidth="4" fill="none"/>
                  <path d="M 100 180 Q 115 230, 125 270" stroke="#8D6E63" strokeWidth="3" fill="none"/>
                  <path d="M 100 180 Q 130 220, 150 260" stroke="#8D6E63" strokeWidth="4" fill="none"/>
                  
                  {/* Solo */}
                  <rect x="0" y="170" width="200" height="130" fill="#A1887F" opacity="0.3" rx="8"/>
                </svg>
              </div>
              
              {/* Bolhas de função ao redor */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Topo esquerda */}
                <div className="absolute top-4 left-4 md:left-8 max-w-[140px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Influencia o pH do solo e disponibilidade de nutrientes
                  </p>
                </div>
                
                {/* Topo direita */}
                <div className="absolute top-4 right-4 md:right-8 max-w-[140px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Síntese de hormônios (auxinas e citocininas)
                  </p>
                </div>
                
                {/* Esquerda */}
                <div className="absolute top-1/4 left-2 md:left-4 max-w-[130px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Biossíntese de compostos fenólicos (taninos e ligninas)
                  </p>
                </div>
                
                {/* Direita */}
                <div className="absolute top-1/4 right-2 md:right-4 max-w-[130px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Cofator de enzimas (fotossíntese, respiração)
                  </p>
                </div>
                
                {/* Centro esquerda */}
                <div className="absolute top-1/2 left-2 md:left-4 max-w-[120px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Síntese de clorofila
                  </p>
                </div>
                
                {/* Centro direita */}
                <div className="absolute top-1/2 right-2 md:right-4 max-w-[120px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Fortalece paredes celulares
                  </p>
                </div>
                
                {/* Inferior esquerda */}
                <div className="absolute bottom-16 left-4 md:left-8 max-w-[140px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Complexo Mn₄CaO₅ (fotólise da água)
                  </p>
                </div>
                
                {/* Inferior direita */}
                <div className="absolute bottom-16 right-4 md:right-8 max-w-[140px] bg-white rounded-xl p-3 shadow-lg border-2 border-pink-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <p className="text-xs text-pink-800 font-medium text-center">
                    Componente da SOD (proteção contra radicais livres)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box - Complexo de Evolução */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
            <h4 className="text-pink-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Sun className="w-5 h-5" />
              O Complexo de Evolução de Oxigênio
            </h4>
            <p className="text-pink-900 leading-relaxed">
              É um agregado metálico composto por quatro átomos de manganês, um átomo de cálcio e cinco átomos 
              de oxigênio (Mn₄CaO₅) e é considerado o único sistema natural capaz de catalisar a reação de 
              oxidação da água, que é conhecida como <strong>fotólise da água</strong> ou ainda <strong>reação de Hill</strong>.
            </p>
          </div>
        </section>

        {/* No Solo */}
        <section>
          <h2 className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg mb-6">
            <h4 className="text-pink-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-pink-900 leading-relaxed mb-4">
              O manganês no solo existe principalmente nas formas Mn²⁺, Mn³⁺ e Mn⁴⁺. 
              A disponibilidade é fortemente influenciada pelo pH, condições de oxidação-redução e matéria orgânica.
            </p>
            <ul className="space-y-2">
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                <strong>pH baixo:</strong> maior disponibilidade (risco de toxidez em solos ácidos)
              </li>
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                <strong>pH alto:</strong> menor disponibilidade (deficiência em solos calcários)
              </li>
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                <strong>Solos alagados:</strong> aumento da disponibilidade por redução
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500 p-6 rounded-lg">
            <h4 className="text-pink-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Faixa de concentração nas plantas
            </h4>
            <ul className="space-y-2">
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                Teor adequado: <strong>20 a 500 mg/kg</strong> de matéria seca
              </li>
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                Deficiência: abaixo de <strong>15-20 mg/kg</strong>
              </li>
              <li className="text-pink-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-pink-500 before:text-xl">
                Toxidez: acima de <strong>500-1000 mg/kg</strong> (varia com a espécie)
              </li>
            </ul>
          </div>
        </section>

        {/* Fontes */}
        <Card className="bg-gradient-to-br from-pink-500 to-pink-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Sulfato de Manganês", info: "MnSO₄\n26-28% Mn" },
                { nome: "Óxido de Manganês", info: "MnO\n41-68% Mn" },
                { nome: "Quelatos de Mn", info: "Mn-EDTA\n5-12% Mn" },
                { nome: "Cloreto de Manganês", info: "MnCl₂\n17% Mn" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-pink-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-pink-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
                    {fonte.nome}
                  </h3>
                  <p className="text-foreground text-xs whitespace-pre-line leading-relaxed">{fonte.info}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
                "Clorose internerval em folhas jovens (nervuras permanecem verdes)",
                "Manchas necróticas marrons ou cinzas",
                "Redução do crescimento",
                "Menor resistência a doenças",
                "Sintoma conhecido como 'marsh spot' em ervilhas",
                "Folhas com aparência mosqueada ou reticulada",
              ].map((item, index) => (
                <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-orange-800">
              ⚠ A deficiência reduz a fotossíntese e compromete o metabolismo geral!
            </p>
          </CardContent>
        </Card>

        {/* Toxidez */}
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Toxidez
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Manchas marrons nas folhas mais velhas",
                "Clorose marginal e necrose",
                "Redução do crescimento radicular",
                "Inibição da absorção de Fe, Mg e Ca",
                "Comum em solos ácidos (pH < 5,5) e mal drenados",
              ].map((item, index) => (
                <li key={index} className="text-red-900 pl-6 relative before:content-['⚠'] before:absolute before:left-0 before:text-red-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Proteção Antioxidante */}
        <Card className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-400">
          <CardHeader>
            <CardTitle className="text-sky-800 text-center text-2xl flex items-center justify-center gap-2">
              <Shield className="w-6 h-6" />
              Função Antioxidante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sky-900 text-center leading-relaxed">
              O manganês é componente essencial da enzima <strong>Superóxido Dismutase (Mn-SOD)</strong>, 
              localizada nas mitocôndrias. Esta enzima catalisa a conversão de radicais superóxido (O₂⁻) 
              em peróxido de hidrogênio (H₂O₂), protegendo as células contra o <strong>estresse oxidativo</strong> 
              e danos causados por espécies reativas de oxigênio.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-pink-700 to-pink-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Samira Polezi Silva</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default ManganeContent;
