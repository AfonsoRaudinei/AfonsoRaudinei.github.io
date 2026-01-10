import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MindMap from "@/components/MindMap";

const MapaMentalPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20 lg:pt-24">
        <MindMap />
      </main>
      <Footer />
    </div>
  );
};

export default MapaMentalPage;
