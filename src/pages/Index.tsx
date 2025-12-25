import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import QuickSuggestions from "@/components/QuickSuggestions";
import SpecialtyCards from "@/components/SpecialtyCards";
import JornadaProfissional from "@/components/JornadaProfissional";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <QuickSuggestions />
        <SpecialtyCards />
        <JornadaProfissional />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
