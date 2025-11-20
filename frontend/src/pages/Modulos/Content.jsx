import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import VantaRingsBackground from "../../components/backgrounds/VantaRingsBackground";

export default function Contenidos() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div 
         onClick={() => navigate("/home")}
         className="absolute top-17 -left-8 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full px-4 py-2 text-center shadow-lg transition duration-300 z-40"
        >
        Regresar
      </div>
      <main className="flex-1 p-6 relative z-10">
        <div className="max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl font-bold pt-4 mb-4 flex items-center gap-2">
            <BookOpen size={32} /> Contenidos de Aprendizaje
          </h1>
          <p className="mb-10 text-white/70">
            Aqui encontraras los módulos disponibles sobre temas administrativos y financieros.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
              
              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Apoyo Financiero</h2>
                <p className="text-white/70 mb-4">Informacion sobre becas, financiacion y apoyo economico para estudiantes.</p>
                <div
                  onClick={() => navigate("/areacobertura")}
                  className="inline-block mt-4 cursor-pointer text-sm bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>

              <div
                className="backdrop-blur-[20px] border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl p-6 h-70 transition-all duration-300 hover:scale-[1.02] shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-2">Vinculación Laboral</h2>
                <p className="text-white/70 mb-4">Convenios, practicas profesionales y oportunidades laborales para estudiantes.</p>

                <div
                  onClick={() => navigate("/modeloosi")}
                  className="inline-block mt-4 text-sm cursor-pointer bg-green-700 hover:bg-green-800 px-4 py-2 rounded-full transition"
                >
                  Ver contenido
                </div>
              </div>

          </div>
          </div>
      </main>
      </div>
  );
}
