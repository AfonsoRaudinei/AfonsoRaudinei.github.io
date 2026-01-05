import { Link, useParams } from "react-router-dom";
import { Leaf, Sparkles, ArrowLeft, Atom } from "lucide-react";
import { macronutrientes, micronutrientes } from "@/data/nutrientes";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NutrienteSidebar() {
  const { slug } = useParams();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 w-[200px]">
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center gap-3 px-2 py-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {!isCollapsed && <span className="text-xs font-medium">Início</span>}
          </Link>
        </div>
        {!isCollapsed && (
          <div className="flex items-center gap-3 px-2 pb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-md">
              <Atom className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground text-sm">Nutrientes</h2>
              <p className="text-xs text-muted-foreground">16 elementos</p>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        {/* Macronutrientes */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Leaf className="w-3 h-3 text-emerald-500" />
            {!isCollapsed && "Macronutrientes"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {macronutrientes.map((nutriente) => (
                <SidebarMenuItem key={nutriente.simbolo}>
                  <SidebarMenuButton
                    asChild
                    isActive={slug === nutriente.slug}
                    tooltip={nutriente.nome}
                  >
                    <Link to={`/nutrientes/${nutriente.slug}`}>
                      <div className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm",
                        nutriente.categoria === "Primário" 
                          ? "bg-gradient-to-br from-emerald-400 to-green-500"
                          : "bg-gradient-to-br from-blue-400 to-cyan-500"
                      )}>
                        {nutriente.simbolo}
                      </div>
                      <span className="truncate">{nutriente.nome}</span>
                      {nutriente.categoria && !isCollapsed && (
                        <span className={cn(
                          "ml-auto text-[10px] px-1.5 py-0.5 rounded-full",
                          nutriente.categoria === "Primário"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                            : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                        )}>
                          {nutriente.categoria.charAt(0)}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Micronutrientes */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-blue-500" />
            {!isCollapsed && "Micronutrientes"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {micronutrientes.map((nutriente) => (
                <SidebarMenuItem key={nutriente.simbolo}>
                  <SidebarMenuButton
                    asChild
                    isActive={slug === nutriente.slug}
                    tooltip={nutriente.nome}
                  >
                    <Link to={`/nutrientes/${nutriente.slug}`}>
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                        {nutriente.simbolo}
                      </div>
                      <span className="truncate">{nutriente.nome}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
