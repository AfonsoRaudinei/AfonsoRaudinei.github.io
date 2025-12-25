import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { NutrienteSidebar } from "@/components/nutrientes/NutrienteSidebar";
import { NutrienteContent } from "@/components/nutrientes/NutrienteContent";
import { PanelLeftClose, PanelLeft } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function DesktopSidebarToggle() {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="hidden md:flex h-8 w-8 text-muted-foreground hover:text-foreground"
    >
      {isCollapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
      <span className="sr-only">{isCollapsed ? "Expandir" : "Colapsar"} sidebar</span>
    </Button>
  );
}

const NutrientesPage = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-b from-muted/50 to-muted">
        <NutrienteSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border/50 bg-background/80 backdrop-blur-xl px-4">
            <SidebarTrigger className="md:hidden" />
            <DesktopSidebarToggle />
            <span className="font-semibold text-sm">Nutrientes do Solo</span>
          </header>
          <NutrienteContent />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default NutrientesPage;
