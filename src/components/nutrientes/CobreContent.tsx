import { Droplets, AlertTriangle, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CobreContent = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-500 to-orange-700 text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-orange-600">Cu</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-orange-700 text-2xl font-bold">GEFEN</h3>
              <p className="text-muted-foreground text-sm">Nutrição de Plantas</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Cobre (Cu)</h1>
          <p className="text-lg md:text-xl text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
            O cobre é um micronutriente essencial para a fotossíntese, respiração e metabolismo 
            de lignina. Participa como cofator de enzimas oxidases e é fundamental para a 
            síntese de parede celular e defesa vegetal.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Principais Fontes */}
        <Card className="bg-gradient-to-br from-orange-500 to-orange-700 text-white border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center uppercase tracking-wide">
              Principais Fontes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { nome: "Sulfato de Cobre", info: "CuSO₄·5H₂O\n25% Cu" },
                { nome: "Óxido Cúprico", info: "CuO\n75% Cu" },
                { nome: "Quelatos de Cu", info: "Cu-EDTA\n13% Cu" },
                { nome: "Oxicloreto de Cu", info: "3Cu(OH)₂·CuCl₂\n50% Cu" },
              ].map((fonte, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 border-3 border-orange-500 text-center hover:-translate-y-1 transition-transform shadow-md"
                >
                  <h3 className="text-orange-700 font-bold text-sm mb-2 min-h-[40px] flex items-center justify-center">
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
          <h2 className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            No Solo
          </h2>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg">
            <h4 className="text-orange-800 text-lg font-bold mb-3 flex items-center gap-2">
              <Droplets className="w-5 h-5" />
              Dinâmica e Disponibilidade
            </h4>
            <p className="text-orange-900 leading-relaxed mb-4">
              O cobre é absorvido como Cu²⁺ e Cu⁺. Forma complexos estáveis com a matéria orgânica 
              e sua disponibilidade é fortemente influenciada pelo pH do solo.
            </p>
            <ul className="space-y-2">
              <li className="text-orange-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-orange-500 before:text-xl">
                <strong>Extração em soja:</strong> até 186 g/ha de Cu em alta produtividade
              </li>
              <li className="text-orange-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-orange-500 before:text-xl">
                <strong>Exportação:</strong> 29-34% do Cu extraído vai para os grãos
              </li>
              <li className="text-orange-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-orange-500 before:text-xl">
                <strong>Pouca mobilidade:</strong> baixa redistribuição na planta
              </li>
              <li className="text-orange-900 pl-6 relative before:content-['▪'] before:absolute before:left-0 before:text-orange-500 before:text-xl">
                <strong>Calagem:</strong> pH alto reduz disponibilidade
              </li>
            </ul>
          </div>
        </section>

        {/* Principais Funções */}
        <section>
          <h2 className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-5 px-6 rounded-xl text-2xl font-bold text-center mb-6">
            Principais Funções
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-800 text-center flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Plastocianina
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-900">
                  Componente da plastocianina, proteína que transporta elétrons entre 
                  o citocromo b6f e o fotossistema I na fotossíntese.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-800 text-center flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Citocromo c Oxidase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-900">
                  Componente da enzima terminal da cadeia respiratória mitocondrial, 
                  essencial para a produção de ATP.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-800 text-center">Lignificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-900">
                  Cofator de lacases e polifenol oxidases envolvidas na síntese 
                  de lignina. Confere rigidez e resistência aos tecidos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-orange-800 text-center">Cu/Zn-SOD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-900">
                  Componente da superóxido dismutase que protege as células 
                  contra danos oxidativos causados por radicais livres.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Deficiência */}
        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-500">
          <CardHeader>
            <CardTitle className="text-amber-800 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Sintomas de Deficiência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {[
                "Clorose em folhas jovens",
                "Murchamento e curvamento das folhas novas",
                "Redução da lignificação (acamamento em cereais)",
                "Morte de meristemas apicais",
                "Menor fertilidade do pólen e formação de grãos",
                "Coloração azulada das folhas (em algumas espécies)",
              ].map((item, index) => (
                <li key={index} className="text-amber-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-amber-600 before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center text-lg font-bold text-amber-800">
              ⚠ Comum em solos orgânicos e após calagem excessiva!
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="bg-gradient-to-br from-orange-700 to-orange-900 text-white p-8 rounded-2xl text-center">
          <p className="mb-2">Material desenvolvido para fins educacionais</p>
          <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
          <p className="text-sm mt-3 text-white/80">© 2024 Nutrição de Plantas</p>
        </div>
      </div>
    </div>
  );
};

export default CobreContent;