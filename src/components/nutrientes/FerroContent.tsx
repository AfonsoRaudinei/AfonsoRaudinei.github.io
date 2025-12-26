import { Droplets, AlertTriangle, Sun, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FerroContent = () => (
  <div className="min-h-screen">
    <div className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-red-600">Fe</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Ferro (Fe)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para síntese de clorofila, transporte de elétrons na fotossíntese 
          e respiração. Cofator de enzimas como catalases, peroxidases e ferredoxinas.
        </p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <Card className="bg-gradient-to-br from-red-500 to-red-700 text-white border-0 shadow-xl">
        <CardHeader><CardTitle className="text-2xl text-center uppercase">Principais Fontes</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{nome:"Sulfato Ferroso",info:"FeSO₄·7H₂O\n20% Fe"},{nome:"Quelatos Fe-EDDHA",info:"6% Fe\nEstável em pH alto"},{nome:"Sulfato Férrico",info:"Fe₂(SO₄)₃\n23% Fe"},{nome:"Fe-DTPA",info:"10% Fe\nAplicação foliar"}].map((f,i)=>(
              <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-md">
                <h3 className="text-red-700 font-bold text-sm mb-2">{f.nome}</h3>
                <p className="text-foreground text-xs whitespace-pre-line">{f.info}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg">
        <h4 className="text-red-800 text-lg font-bold mb-3"><Droplets className="w-5 h-5 inline mr-2"/>No Solo</h4>
        <p className="text-red-900 mb-4">Extração em soja: até 4.999 g/ha. Exportação: 16-22%. Disponibilidade reduzida em pH alto.</p>
      </div>
      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
        <CardHeader><CardTitle className="text-orange-800 text-center"><AlertTriangle className="w-6 h-6 inline mr-2"/>Deficiência</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["Clorose internerval em folhas jovens","Nervuras permanecem verdes inicialmente","Folhas podem ficar completamente amarelas/brancas","Comum em solos calcários (clorose férrica)"].map((item,i)=>(
              <li key={i} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600">{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="bg-gradient-to-br from-red-700 to-red-900 text-white p-8 rounded-2xl text-center">
        <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
      </div>
    </div>
  </div>
);
export default FerroContent;