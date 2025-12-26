import { Atom, Leaf, Droplets, AlertTriangle, Sprout, TreeDeciduous } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FosforoContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Atom className="w-10 h-10 text-green-600" />
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-green-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Samira Polezi Silva</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Fósforo (P)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O fósforo é um macronutriente diretamente relacionado ao desenvolvimento, crescimento e reprodução das plantas. 
            Está envolvido na formação de ATP, ADP, fotossíntese e reações de esterificação. Além disso, em níveis adequados 
            ele aumenta a eficiência de uso da água e de outros nutrientes incrementando a produtividade.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { nome: "Superfosfato Simples", info: "16% de P₂O₅ solúvel em água\n16% de Ca\n10% de S" },
                { nome: "Superfosfato Triplo", info: "45% de P₂O₅ solúvel em água\n15% de Ca" },
                { nome: "Monoamônio (MAP)", info: "48% de P₂O₅\n10% de N" },
                { nome: "Diamônio (DAP)", info: "45% de P₂O₅\n17% de N" },
                { nome: "Fosfatos Naturais", info: "5% de P₂O₅ total\n15% do teor total de P₂O₅ solúvel em ácido cítrico" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-blue-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-blue-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-muted/50 rounded-2xl p-8 border-2 border-border mb-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Plant Illustration */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="flex justify-center gap-2 mb-[-10px] relative z-10">
                    <div className="w-12 h-16 bg-green-500 rounded-[0_100%_0_100%] -rotate-12" />
                    <div className="w-12 h-16 bg-green-500 rounded-[100%_0_100%_0] rotate-12" />
                  </div>
                  <div className="w-2 h-24 bg-gradient-to-b from-green-500 to-green-700 mx-auto rounded" />
                  <div className="bg-gradient-to-b from-amber-700 to-amber-900 h-32 w-48 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-amber-600" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
                      <div className="w-1 h-20 bg-amber-600 rounded-full" />
                      <div className="w-1 h-28 bg-amber-600 rounded-full" />
                      <div className="w-1 h-16 bg-amber-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Soil Info */}
              <div className="bg-white p-6 rounded-xl border-2 border-blue-500">
                <h3 className="text-blue-700 text-xl font-bold mb-4">Dinâmica e Disponibilidade</h3>
                <p className="text-foreground leading-relaxed">
                  O P apresenta baixa mobilidade no solo, devido a sua afinidade com os minerais da fração argila. 
                  Sua dinâmica é bastante dependente do pH do solo. Para aumentar sua disponibilidade, pode-se utilizar 
                  fertilizantes fosfatados, adoção do SPD (Sistema de Plantio Direto) como também a associação simbiótica 
                  entre as raízes das plantas superiores e fungos micorrízicos.
                </p>
              </div>
            </div>
          </div>

          {/* Faixa de concentração no solo */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-6">
            <h4 className="text-green-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Faixa de concentração no solo
            </h4>
            <ul className="space-y-2">
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                Teor total varia entre 200 e 3.000 mg/kg.
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                O nível crítico de P disponível para a maioria das culturas se encontra a partir de 15-20 mg/kg.
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                A discrepância entre a concentração total e aquela disponível para absorção está relacionada com as interações do elemento com o solo.
              </li>
            </ul>
          </div>

          {/* Faixa de concentração nas plantas */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
            <h4 className="text-green-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5" />
              Faixa de concentração nas plantas
            </h4>
            <ul className="space-y-2">
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                <strong>Leguminosas:</strong> 2,6 a 5,0 g/kg
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                <strong>Cereais:</strong> 2,0 a 3 g/kg
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                <strong>Café:</strong> 1,6 a 1,9 g/kg
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                <strong>Citros:</strong> 1,2 a 1,6 g/kg
              </li>
              <li className="text-green-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-green-500 before:text-xl">
                <strong>Cana-de-açúcar:</strong> 1,8 a 2,4 g/kg
              </li>
            </ul>
          </div>
        </section>

        {/* Incorporação e Metabolismo */}
        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Incorporação e Metabolismo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center leading-relaxed text-lg">
              O Fósforo é um elemento essencial para inúmeras atividades da planta, como o crescimento, 
              desenvolvimento e formação do ATP. A absorção radicular se dá em sua forma ionizada (H₂PO₄⁻ ou HPO₄²⁻). 
              Após a absorção pelas raízes, o P será transportado para a parte superior da planta, 
              o qual será assimilado nas moléculas orgânicas.
            </p>
          </CardContent>
        </Card>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">Energia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-900">
                  O P é responsável pelo <strong>armazenamento e transferência de energia</strong> como, 
                  a glicose, frutose e ATP.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-800 text-center">ADP e ATP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-900">
                  O nutriente possui função <strong>estrutural</strong> no grupo fosfato que compõe o ADP e o ATP.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fotossíntese Card */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 mb-6">
            <CardHeader>
              <CardTitle className="text-green-800 text-center">Fotossíntese e Produção de Clorofila</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6 text-center">
                  <h4 className="text-green-800 font-bold text-lg mb-4">Com P Adequado</h4>
                  <div className="text-7xl mb-4">🌱</div>
                  <p className="font-bold text-green-700">Verde Normal</p>
                  <p className="text-green-600 text-sm">Produção normal de clorofila</p>
                </div>
                <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 text-center">
                  <h4 className="text-red-800 font-bold text-lg mb-4">Deficiência de P</h4>
                  <div className="text-7xl mb-4" style={{ filter: 'hue-rotate(270deg)' }}>🌱</div>
                  <p className="font-bold text-red-700">Arroxeamento</p>
                  <p className="text-red-600 text-sm">Maior produção de antocianina (pigmento roxo protetor)</p>
                </div>
              </div>
              <p className="text-green-900 text-center">
                A deficiência de fósforo acarreta no arroxeamento das folhas. O P é extremamente importante 
                para a produção de pigmentos fotossintetizantes, como a clorofila. Como resposta adaptativa, 
                há maior produção de antocianina, pigmento de coloração roxa que protege a planta de danos solares intensos.
              </p>
            </CardContent>
          </Card>

          {/* Deficiência */}
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-800 text-center flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Deficiência de Fósforo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {[
                  "Menor perfilhamento em gramíneas",
                  "Redução do número de frutos e sementes",
                  "Redução no brilho, tom verde-azulado ou manchas pardas",
                  "Ângulos foliares mais agudos",
                  "Gemas laterais dormentes",
                  "Atraso no florescimento",
                ].map((item, index) => (
                  <li key={index} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-center text-lg font-bold text-orange-800">
                ⚠ Reduz a produtividade, qualidade, valor e rentabilidade da cultura!
              </p>
            </CardContent>
          </Card>

          {/* Estruturas Radiculares */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg">
            <h4 className="text-green-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Sprout className="w-5 h-5" />
              Estruturas Radiculares Especializadas
            </h4>
            <p className="text-green-900">
              Várias espécies de plantas de diferentes famílias desenvolvem estruturas radiculares, 
              proteoides que proporcionam alta eficácia na absorção de fósforo do solo.
            </p>
          </div>
        </section>

        {/* Simbiose */}
        <Card className="bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-400">
          <CardHeader>
            <CardTitle className="text-sky-800 text-center text-2xl flex items-center justify-center gap-2">
              <TreeDeciduous className="w-6 h-6" />
              Simbiose: Fungos Micorrízicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sky-900 text-center leading-relaxed">
              Durante o processo, forma-se as hifas micorrízicas que aumentam a superfície de contato 
              entre a raiz e o solo, elevando a chance de <strong>absorção</strong> dos nutrientes e da água. 
              Essa extensão das raízes melhora a <strong>resistência</strong> à estresses bióticos e abióticos. 
              Ela também incrementa a ciclagem de nutrientes.
            </p>
          </CardContent>
        </Card>

        {/* Excesso */}
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
          <CardHeader>
            <CardTitle className="text-orange-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Excesso de Fósforo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                Maturação acelerada
              </li>
              <li className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                Interfere na absorção ou transporte de outros nutrientes
              </li>
              <li className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600 before:font-bold">
                <strong>Exemplo:</strong> No transporte para a parte aérea do Cu, Fe, Mg e Zn
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-green-700 to-green-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Samira Polezi Silva</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default FosforoContent;
