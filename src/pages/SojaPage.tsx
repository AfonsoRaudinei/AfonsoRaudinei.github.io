import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sprout, Calendar, Droplets, Bug, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EstadioCarousel from "@/components/soja/EstadioCarousel";
import EstadioInfoPanel from "@/components/soja/EstadioInfoPanel";
import HormoniosCarousel from "@/components/soja/HormoniosCarousel";
import { estadiosSoja, phaseColors } from "@/data/estadiosSoja";

const SojaPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedHormonioIndex, setSelectedHormonioIndex] = useState(0);
  const selectedEstadio = estadiosSoja[selectedIndex];

  const phases = Object.entries(phaseColors).map(([key, value]) => ({
    key,
    ...value
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-9xl">🌱</div>
            <div className="absolute bottom-10 right-20 text-8xl">🫛</div>
            <div className="absolute top-1/2 left-1/2 text-7xl">🌼</div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-6 hover:bg-green-100 dark:hover:bg-green-900/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Cultura da <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Soja</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Calendário Estimado de Estádios Fenológicos • Ciclo de 115 dias
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Calendar className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">115</p>
                <p className="text-sm text-muted-foreground">Dias de ciclo</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Sprout className="w-6 h-6 text-emerald-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Estádios fenológicos</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Droplets className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">R1-R5</p>
                <p className="text-sm text-muted-foreground">Período crítico hídrico</p>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border/50">
                <Bug className="w-6 h-6 text-red-500 mb-2" />
                <p className="text-2xl font-bold text-foreground">R4</p>
                <p className="text-sm text-muted-foreground">Pico de lagartas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase Legend */}
        <section className="py-6 px-4 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {phases.map((phase) => (
                <div
                  key={phase.key}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${phase.bg} ${phase.text} text-sm font-medium`}
                >
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                  {phase.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Estádios Fenológicos
              </h2>
              <p className="text-muted-foreground">
                Clique em um estádio para ver informações detalhadas sobre doenças, pragas e nutrição
              </p>
            </div>

            {/* Carousel */}
            <EstadioCarousel
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
            />

            {/* Info Panel */}
            <div className="mt-8 md:mt-12">
              <EstadioInfoPanel estadio={selectedEstadio} />
            </div>
          </div>
        </section>

        {/* Hormônios Vegetais Section */}
        <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
          <div className="container mx-auto max-w-6xl">
            {/* Resumo Executivo */}
            <div className="bg-card/95 backdrop-blur rounded-3xl p-6 md:p-8 shadow-xl border border-border/50 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-8 h-8 text-primary" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Hormônios Vegetais e Micronutrientes
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-justify">
                A performance produtiva da soja (<em>Glycine max</em>) resulta da interação sincronizada entre{" "}
                <strong className="text-foreground">regulação hormonal</strong> e{" "}
                <strong className="text-foreground">disponibilidade de micronutrientes</strong> ao longo dos estádios fenológicos. 
                Este relatório consolida evidências científicas sobre a atuação coordenada de{" "}
                <strong className="text-foreground">cinco classes hormonais</strong> (auxinas, citocininas, giberelinas, etileno e ácido abscísico) 
                e <strong className="text-foreground">oito micronutrientes essenciais</strong> (Fe, Zn, Mn, Cu, B, Mo, Co, Ni) durante as fases 
                vegetativas (VE a VN) e reprodutivas (R1 a R8).
              </p>
            </div>

            {/* Carousel de Hormônios */}
            <HormoniosCarousel
              selectedIndex={selectedHormonioIndex}
              onSelect={setSelectedHormonioIndex}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SojaPage;
