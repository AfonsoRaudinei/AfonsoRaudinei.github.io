import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { NutrienteSidebar } from "@/components/nutrientes/NutrienteSidebar";
import { NutrienteContent } from "@/components/nutrientes/NutrienteContent";

const NutrientesPage = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-muted/50 to-muted">
        <NutrienteSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-xl px-4 md:hidden">
            <SidebarTrigger />
            <span className="font-semibold text-sm">Nutrientes do Solo</span>
          </header>
          <NutrienteContent />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default NutrientesPage;
