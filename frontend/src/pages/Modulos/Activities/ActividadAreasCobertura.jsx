import { useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';
import { useNavigate } from 'react-router-dom';

const preguntasBase = [
  { pregunta: "Próximamente: Preguntas sobre apoyo financiero y becas", respuesta: true },
  { pregunta: "Próximamente: Información sobre créditos educativos", respuesta: false },
  { pregunta: "Próximamente: Procedimientos de solicitud de ayudas económicas", respuesta: true },
  { pregunta: "Próximamente: Requisitos para programas de trabajo-estudio", respuesta: false },
  { pregunta: "Próximamente: Tipos de convenios de financiación", respuesta: true },
];

export default function ActividadAreasCobertura() {
  const navigate = useNavigate();
  const [indice, setIndice] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [intentos, setIntentos] = useState(1);
  const [notas, setNotas] = useState([]);

  const responder = (respuestaUsuario) => {
    const preguntaActual = preguntasBase[indice];
    if (respuestaUsuario === preguntaActual.respuesta) {
      setPuntuacion(puntuacion + 1);
    }

    if (indice + 1 < preguntasBase.length) {
      setIndice(indice + 1);
    } else {
      const nota = ((puntuacion + (respuestaUsuario === preguntaActual.respuesta ? 1 : 0)) / preguntasBase.length) * 5;
      setNotas([...notas, nota]);
      setFinalizado(true);
    }
  };

  const reiniciar = () => {
    if (intentos >= 3) {
      alert("Has completado los 3 intentos disponibles.");
      return;
    }
    setIndice(0);
    setPuntuacion(0);
    setFinalizado(false);
    setIntentos(intentos + 1);
  };

  const promedio = notas.length > 0 ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2) : null;

  const getFeedback = () => {
    if (!promedio) return null;
    if (promedio >= 4) return { mensaje: "¡Excelente! Estás listo para aprender sobre apoyo financiero.", color: "text-green-400" };
    if (promedio >= 3) return { mensaje: "¡Bien hecho! Pronto tendrás más contenido para practicar.", color: "text-yellow-400" };
    return { mensaje: "Sigue practicando, el contenido estará disponible pronto.", color: "text-red-400" };
  };

  return (
    <div className="relative min-h-screen">
      <VantaRingsBackground />

      {/* Botón Regresar */}
      <div
        onClick={() => navigate("/activities")}
        className="absolute top-6 left-6 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full px-4 py-2 text-center shadow-lg transition duration-300 z-40"
      >
        Regresar
      </div>

      <div className="pt-24 p-6 max-w-xl mx-auto text-center text-white relative z-10">
        <h1 className="text-3xl font-bold mb-4">Actividad: Apoyo Financiero</h1>
        <p className="text-white/70 mb-6">Práctica de conceptos básicos - Contenido en desarrollo</p>

        {notas.length >= 3 ? (
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <h2 className="text-xl font-bold text-green-300 mb-2">Actividad finalizada</h2>
            <p className="mb-2">Tu promedio final es: <span className="text-green-400 font-bold">{promedio} / 5.0</span></p>
            <p className={`${getFeedback().color} font-semibold mb-4`}>{getFeedback().mensaje}</p>
            <button
              onClick={() => navigate("/activities")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              Volver a Actividades
            </button>
          </div>
        ) : (
          <>
            {!finalizado ? (
              <>
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6">
                  <p className="text-xl mb-4">{preguntasBase[indice].pregunta}</p>
                  <div className="flex justify-center gap-4">
                    <button
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded transition"
                      onClick={() => responder(true)}
                    >
                      Verdadero
                    </button>
                    <button
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded transition"
                      onClick={() => responder(false)}
                    >
                      Falso
                    </button>
                  </div>
                </div>
                <p className="text-green-300">Pregunta {indice + 1} de {preguntasBase.length}</p>
                <p className="text-white/50 text-sm mt-2">Intento {intentos} de 3</p>
              </>
            ) : (
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-bold text-green-400">Intento {intentos} completado</h2>
                <p className="text-white my-3">Tu calificación: {(notas[notas.length - 1]).toFixed(2)} / 5.0</p>
                <button
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded transition"
                  onClick={reiniciar}
                >
                  Siguiente intento
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
