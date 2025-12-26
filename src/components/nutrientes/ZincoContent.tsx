import { Droplets, AlertTriangle, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ZincoContent = () => (
  <div className="min-h-screen">
    <div className="relative bg-gradient-to-br from-slate-500 to-slate-700 text-white py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-slate-600">Zn</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Zinco (Zn)</h1>
        <p className="text-lg text-center text-white/95 max-w-3xl mx-auto leading-relaxed">
          Micronutriente essencial para síntese de auxinas (AIA), ativação de enzimas, 
          síntese de proteínas e desenvolvimento foliar.
        </p>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <Card className="bg-gradient-to-br from-slate-500 to-slate-700 text-white border-0 shadow-xl">
        <CardHeader><CardTitle className="text-2xl text-center uppercase">Principais Fontes</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{nome:"Sulfato de Zinco",info:"ZnSO₄\n21-23% Zn"},{nome:"Óxido de Zinco",info:"ZnO\n70-80% Zn"},{nome:"Quelatos Zn-EDTA",info:"14% Zn"},{nome:"Cloreto de Zinco",info:"ZnCl₂\n48% Zn"}].map((f,i)=>(
              <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-md">
                <h3 className="text-slate-700 font-bold text-sm mb-2">{f.nome}</h3>
                <p className="text-foreground text-xs whitespace-pre-line">{f.info}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-l-4 border-slate-500 p-6 rounded-lg">
        <h4 className="text-slate-800 text-lg font-bold mb-3"><Droplets className="w-5 h-5 inline mr-2"/>No Solo</h4>
        <p className="text-slate-900 mb-4">Extração em soja: até 758 g/ha. Exportação: 25-31%. Deficiência comum em solos com pH alto e calcários.</p>
      </div>
      <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-500">
        <CardHeader><CardTitle className="text-orange-800 text-center"><AlertTriangle className="w-6 h-6 inline mr-2"/>Deficiência</CardTitle></CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["Folhas pequenas e estreitas (little leaf)","Entrenós curtos (roseta)","Clorose internerval em folhas jovens","Redução da síntese de auxinas"].map((item,i)=>(
              <li key={i} className="text-orange-900 pl-6 relative before:content-['✗'] before:absolute before:left-0 before:text-orange-600">{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-8 rounded-2xl text-center">
        <p className="font-bold text-lg">GEFEN - Nutrição de Plantas</p>
      </div>
    </div>
  </div>
);
export default ZincoContent;