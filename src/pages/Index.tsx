import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialtyCards from "@/components/SpecialtyCards";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SpecialtyCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
