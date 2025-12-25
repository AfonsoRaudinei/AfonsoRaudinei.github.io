import { MessageCircle, Leaf } from "lucide-react";

const Header = () => {
  const whatsappLink = "https://wa.me/5562999999999?text=Olá! Gostaria de tirar uma dúvida sobre manejo de solo ou nutrição de plantas.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-green-light flex items-center justify-center shadow-md">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display font-bold text-lg text-foreground">
              Raudinei Afonso
            </span>
            <p className="text-xs text-muted-foreground -mt-0.5">Engenheiro Agrônomo</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#especialidades" className="hover:text-foreground transition-colors">Especialidades</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center gap-2 text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
