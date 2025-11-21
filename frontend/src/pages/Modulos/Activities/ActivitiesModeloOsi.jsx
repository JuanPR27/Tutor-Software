import { useEffect, useState } from 'react';
import VantaRingsBackground from '../../../components/backgrounds/VantaRingsBackground';
import { useNavigate } from 'react-router-dom';

const conceptosData = [
  { 
    id: 'practicas', 
    name: 'Prácticas Profesionales', 
    order: 1, 
    color: '#40E0D0', 
    description: 'Programas que permiten a estudiantes aplicar conocimientos en entornos laborales reales.', 
    examples: 'Pasantías, internships, programas de práctica supervisada' 
  },
  { 
    id: 'convenios', 
    name: 'Convenios Empresariales', 
    order: 2, 
    color: '#FF00FF', 
    description: 'Acuerdos formales con empresas para facilitar la inserción laboral de estudiantes.', 
    examples: 'Alianzas estratégicas, acuerdos de cooperación, memorandos de entendimiento' 
  },
  { 
    id: 'bolsa', 
    name: 'Bolsa de Empleo', 
    order: 3, 
    color: '#8A2BE2', 
    description: 'Servicio que conecta estudiantes y egresados con oportunidades laborales.', 
    examples: 'Portal de empleo, ferias laborales, networking profesional' 
  },
  { 
    id: 'talleres', 
    name: 'Talleres de Empleabilidad', 
    order: 4, 
    color: '#00BCD4', 
    description: 'Capacitaciones para mejorar habilidades de búsqueda de empleo y desarrollo profesional.', 
    examples: 'Currículum vitae, entrevistas, marca personal, habilidades blandas' 
  },
  { 
    id: 'seguimiento', 
    name: 'Seguimiento Egresados', 
    order: 5, 
    color: '#8BC34A', 
    description: 'Programa de acompañamiento para graduados en su transición al mundo laboral.', 
    examples: 'Mentoría, actualización profesional, redes de egresados' 
  },
  { 
    id: 'ferias', 
    name: 'Ferias Laborales', 
    order: 6, 
    color: '#FFC107', 
    description: 'Eventos donde empresas presentan oportunidades de empleo a estudiantes.', 
    examples: 'Feria de empleo, días de carrera, encuentros empresariales' 
  },
  { 
    id: 'redes', 
    name: 'Redes Profesionales', 
    order: 7, 
    color: '#FF5722', 
    description: 'Plataformas para establecer contactos profesionales y oportunidades de networking.', 
    examples: 'LinkedIn, asociaciones profesionales, eventos de networking' 
  },
];

export default function ActividadModeloOSI() {
  const navigate = useNavigate();
  const [availableConcepts, setAvailableConcepts] = useState([]);
  const [stack, setStack] = useState(Array(7).fill(null));
  const [modalConcept, setModalConcept] = useState(null);
  const [completion, setCompletion] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [notas, setNotas] = useState([]);
  const maxIntentos = 3;

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    const shuffled = [...conceptosData].sort(() => 0.5 - Math.random());
    setAvailableConcepts(shuffled);
    setStack(Array(7).fill(null));
    setModalConcept(null);
    setCompletion(false);
  }

  function handleDrop(index, item) {
    if (completion || intentos >= maxIntentos) return;
    if (stack[index]) return;
    if (item.order === index + 1) {
      const newStack = [...stack];
      newStack[index] = item;
      setStack(newStack);

      const newAvailable = availableConcepts.filter(l => l.id !== item.id);
      setAvailableConcepts(newAvailable);

      if (newStack.every(s => s !== null)) {
        const correctas = newStack.filter((concept, idx) => concept.order === idx + 1).length;
        const notaActual = (correctas / 7) * 5;
        setNotas(prev => [...prev, notaActual.toFixed(2)]);
        setIntentos(prev => prev + 1);
        setCompletion(true);
      }
    } else {
      alert('¡Posición incorrecta! Intenta de nuevo.');
    }
  }

  const promedio = notas.length > 0 ? (notas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / notas.length).toFixed(2) : null;

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

      <div className="pt-24 p-6 space-y-6 relative z-10">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-white">Actividad: Vinculación Laboral</h1>
          <p className="text-white/70 mt-2">Organiza los conceptos de vinculación laboral en el orden correcto</p>
          <p className="text-white mt-2 font-semibold">Intentos: {intentos} / {maxIntentos}</p>
        </header>

        {completion && (
          <div className="bg-gray-800/80 backdrop-blur-sm border border-white/10 p-6 rounded-xl max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-green-300">¡Intento completado!</h2>
            <p className="text-white my-2">Nota obtenida: {notas[notas.length - 1]} / 5</p>
            {intentos < maxIntentos ? (
              <button className="mt-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition" onClick={resetGame}>
                Siguiente intento
              </button>
            ) : (
              <div>
                <p className="text-green-300 font-semibold my-2">
                  Evaluación finalizada. Nota promedio: {promedio} / 5
                </p>
                <button
                  onClick={() => navigate("/activities")}
                  className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                >
                  Volver a Actividades
                </button>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
          {/* Conceptos disponibles */}
          <div className="flex-1 max-w-md">
            <h2 className="text-lg text-white text-center font-semibold mb-4">Conceptos Disponibles</h2>
            <div className="grid grid-cols-1 gap-3">
              {availableConcepts.map(concept => (
                <div
                  key={concept.id}
                  className="cursor-pointer p-4 rounded-lg shadow text-white backdrop-blur-[10px] hover:scale-105 transition text-center border border-white/20"
                  style={{ backgroundColor: concept.color }}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData('conceptId', concept.id);
                  }}
                  onClick={() => setModalConcept(concept)}
                >
                  {concept.name}
                </div>
              ))}
            </div>
          </div>

          {/* Posiciones */}
          <div className="flex-1 max-w-md">
            <h2 className="text-lg text-white text-center font-semibold mb-4">Orden de Importancia</h2>
            <div className="flex flex-col gap-3">
              {stack.map((concept, index) => (
                <div
                  key={index}
                  className="min-h-20 border-2 border-dashed rounded-lg backdrop-blur-[20px] flex items-center justify-center text-lg border-white/30"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const id = e.dataTransfer.getData('conceptId');
                    const droppedConcept = conceptosData.find(l => l.id === id);
                    if (droppedConcept) handleDrop(index, droppedConcept);
                  }}
                  style={{
                    backgroundColor: concept ? concept.color : 'rgba(255, 255, 255, 0.05)',
                    borderColor: concept ? concept.color : 'rgba(255, 255, 255, 0.3)',
                    color: concept ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                  }}
                  onClick={() => concept && setModalConcept(concept)}
                >
                  {concept ? (
                    <span className="font-semibold text-center px-4">{concept.name}</span>
                  ) : (
                    <span className="text-white/50">Posición {index + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal de información */}
        {modalConcept && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl max-w-md mx-4 border border-white/20">
              <button
                className="text-red-400 float-right font-bold text-xl hover:text-red-300 transition"
                onClick={() => setModalConcept(null)}
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-3 text-white border-l-4 pl-3" style={{ borderColor: modalConcept.color }}>
                {modalConcept.name}
              </h3>
              <p className="text-white/90 mb-3"><strong>Descripción:</strong> {modalConcept.description}</p>
              <p className="text-white/80"><strong>Ejemplos:</strong> {modalConcept.examples}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
