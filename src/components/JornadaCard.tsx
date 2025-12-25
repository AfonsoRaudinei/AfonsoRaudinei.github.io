import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import perfilImg from "@/assets/perfil.png";

const JornadaCard = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/jornada-profissional"
          className="group block bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl p-8 border border-purple-100 dark:border-purple-800/30 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-200 dark:ring-purple-700/50 shadow-lg group-hover:ring-purple-300 dark:group-hover:ring-purple-600/50 transition-all duration-300">
                <img
                  src={perfilImg}
                  alt="Raudinei Afonso"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-lg">👨‍🌾</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold rounded-full mb-3 tracking-wider">
                JORNADA PROFISSIONAL
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Raudinei Afonso S. Pereira
              </h3>
              <p className="text-muted-foreground mb-4">
                Currículo e trajetória profissional completa
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-purple-600 dark:text-purple-400 font-medium group-hover:gap-3 transition-all duration-300">
                <span>Ver currículo completo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default JornadaCard;
