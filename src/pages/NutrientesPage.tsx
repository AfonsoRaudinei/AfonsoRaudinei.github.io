import { Link } from "react-router-dom";
import { ArrowLeft, Atom, Leaf, Droplets, Zap, CircleDot, Sparkles } from "lucide-react";

const macronutrientes = [
  {
    simbolo: "N",
    nome: "Nitrogênio",
    funcao: "Essencial para crescimento vegetativo e síntese de proteínas",
    categoria: "Primário",
  },
  {
    simbolo: "P",
    nome: "Fósforo",
    funcao: "Desenvolvimento radicular e transferência de energia (ATP)",
    categoria: "Primário",
  },
  {
    simbolo: "K",
    nome: "Potássio",
    funcao: "Regulação hídrica e resistência a doenças",
    categoria: "Primário",
  },
  {
    simbolo: "Ca",
    nome: "Cálcio",
    funcao: "Estrutura celular e desenvolvimento de raízes",
    categoria: "Secundário",
  },
  {
    simbolo: "Mg",
    nome: "Magnésio",
    funcao: "Componente central da clorofila e ativação enzimática",
    categoria: "Secundário",
  },
  {
    simbolo: "S",
    nome: "Enxofre",
    funcao: "Síntese de aminoácidos e proteínas essenciais",
    categoria: "Secundário",
  },
];

const micronutrientes = [
  {
    simbolo: "B",
    nome: "Boro",
    funcao: "Floração, frutificação e transporte de açúcares",
  },
  {
    simbolo: "Cl",
    nome: "Cloro",
    funcao: "Fotossíntese e regulação osmótica",
  },
  {
    simbolo: "Cu",
    nome: "Cobre",
    funcao: "Fotossíntese e metabolismo de lignina",
  },
  {
    simbolo: "Fe",
    nome: "Ferro",
    funcao: "Síntese de clorofila e transporte de elétrons",
  },
  {
    simbolo: "Mn",
    nome: "Manganês",
    funcao: "Fotossíntese e ativação de enzimas",
  },
  {
    simbolo: "Mo",
    nome: "Molibdênio",
    funcao: "Fixação de nitrogênio e redução de nitrato",
  },
  {
    simbolo: "Ni",
    nome: "Níquel",
    funcao: "Metabolismo do nitrogênio e urease",
  },
  {
    simbolo: "Zn",
    nome: "Zinco",
    funcao: "Síntese de auxinas e desenvolvimento foliar",
  },
  {
    simbolo: "Co",
    nome: "Cobalto",
    funcao: "Fixação biológica de nitrogênio em leguminosas",
  },
  {
    simbolo: "Si",
    nome: "Silício",
    funcao: "Resistência mecânica e tolerância a estresses",
  },
];

const NutrientesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-500 mb-6 shadow-xl">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Nutrientes do Solo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os 16 elementos essenciais para nutrição vegetal divididos em macronutrientes e micronutrientes
            </p>
          </div>

          {/* Macronutrientes */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Macronutrientes</h2>
                <p className="text-sm text-muted-foreground">Absorvidos em grandes quantidades</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {macronutrientes.map((nutriente, index) => {
                const isNitrogenio = nutriente.simbolo === "N";
                const cardClassName = "group p-6 rounded-2xl bg-card border border-border/50 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-lg transition-all animate-fade-up";
                
                const cardContent = (
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <span className="text-xl font-bold text-white">{nutriente.simbolo}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{nutriente.nome}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          nutriente.categoria === "Primário" 
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300" 
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                        }`}>
                          {nutriente.categoria}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {nutriente.funcao}
                      </p>
                    </div>
                  </div>
                );

                if (isNitrogenio) {
                  return (
                    <Link
                      key={nutriente.simbolo}
                      to="/nutrientes/nitrogenio"
                      className={cardClassName}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div
                    key={nutriente.simbolo}
                    className={cardClassName}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Micronutrientes */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">Micronutrientes</h2>
                <p className="text-sm text-muted-foreground">Absorvidos em pequenas quantidades</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {micronutrientes.map((nutriente, index) => (
                <div
                  key={nutriente.simbolo}
                  className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-md">
                      <span className="text-lg font-bold text-white">{nutriente.simbolo}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{nutriente.nome}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {nutriente.funcao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-900/50 animate-fade-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Equilíbrio Nutricional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A produtividade das culturas depende do equilíbrio entre todos os nutrientes. 
                  A deficiência de qualquer um deles, mesmo em pequenas quantidades, pode limitar 
                  o desenvolvimento das plantas segundo a Lei do Mínimo de Liebig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Conteúdo técnico para fins educacionais
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NutrientesPage;
