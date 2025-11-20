import VantaRingsBackground from "../../../components/backgrounds/VantaRingsBackground";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ModeloOsi() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState("");

  return (
    <div className="relative min-h-screen flex flex-col text-white">
      <VantaRingsBackground />
      <div
        onClick={() => navigate("/content")}
        className="absolute top-4 left-4 cursor-pointer text-white bg-green-600 hover:bg-green-700 rounded-full p-2 w-30 mt-30 text-center shadow-lg transition duration-300 z-15"
      >
        Regresar
      </div>
      <main className="backdrop-blur-[10px] flex-1 p-6 relative z-10 mb-20">
        <div className="max-w-5xl text-center mx-auto mt-10">
          <h1 className="text-4xl font-bold pt-10 mb-4 gap-2">
            Vinculación Laboral
          </h1>
          <p className="font-semibold">
            Información sobre convenios, prácticas profesionales y oportunidades laborales
          </p>
          <div className="border-t mt-5 border-gray-500"></div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 text-xl ">
          <h3>
            La vinculación laboral es el proceso que conecta a los estudiantes con oportunidades
            profesionales a través de convenios, prácticas y programas de empleabilidad.
          </h3>
        </div>

        <div className="max-w-5xl mx-auto mt-10 font-bold">
          <p>
            Explora las siguientes áreas de vinculación laboral:
          </p>
        </div>

        {/* SECCIONES DE VINCULACIÓN LABORAL */}

        <div className="grid sm:grid-cols-1 md:grid-cols-6 grid-rows-4 mb-20 gap-7 mt-10 max-w-5xl mx-auto">

        {/* PRÁCTICAS PROFESIONALES */}
          <div
            onClick={() => {
              setDescripcion(
                "Prácticas profesionales: Programas que permiten a estudiantes aplicar conocimientos en entornos laborales reales y adquirir experiencia profesional."
              );
              setModalOpen(true);
            }}
            className="col-span-2 row-span-2 backdrop-blur-[10px] h-60 rounded-xl bg-gradient-to-bl from-blue-500 to-purple-600 hover:scale-102 transition cursor-pointer shadow-lg"
          >
            <h1 className="text-center text-xl font-bold mt-5">Prácticas</h1>
            <h3 className="text-center font-semibold text-3xl mt-10">Profesionales</h3>
          </div>

          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* CONVENIOS EMPRESARIALES */}
          <div 
          onClick={() => {
              setDescripcion(
                "Convenios empresariales: Acuerdos formales con empresas e instituciones para facilitar la inserción laboral de estudiantes y egresados."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-3 h-60 rounded-xl bg-gradient-to-t from-green-500 to-teal-600 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Convenios</h1>
            <h3 className="text-center font-semibold text-3xl mt-10">Empresariales</h3>
          </div>
          {modalOpen && (
            <div className="fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* BOLSA DE EMPLEO */}
          <div 
          onClick={() => {
              setDescripcion(
                 "Bolsa de empleo: Servicio que conecta a estudiantes y egresados con oportunidades laborales en empresas asociadas a la universidad."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-5 h-60 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Bolsa de</h1>
            <h3 className="text-center font-semibold text-3xl mt-10">Empleo</h3>
          </div>

          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* TALLERES DE EMPLEABILIDAD */}
          <div 
          onClick={() => {
              setDescripcion(
                 "Talleres de empleabilidad: Capacitaciones para mejorar habilidades de búsqueda de empleo, entrevistas y desarrollo profesional."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-2 row-start-3 h-60 rounded-xl bg-gradient-to-b from-purple-500 to-pink-600 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Talleres de</h1>
            <h3 className="text-center font-semibold text-3xl mt-10">Empleabilidad</h3>
          </div>
          {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* FERIAS LABORALES */}
          <div 
          onClick={() => {
              setDescripcion(
                  "Ferias laborales: Eventos donde empresas presentan oportunidades de empleo y estudiantes pueden establecer contactos profesionales."
              );
              setModalOpen(true);
            }}
          className="col-span-2 row-span-2 col-start-4 row-start-3 h-60 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 hover:scale-102 transition cursor-pointer shadow-lg">
            <h1 className="text-center text-xl font-bold mt-5">Ferias</h1>
            <h3 className="text-center font-semibold text-3xl mt-10">Laborales</h3>
          </div>
        </div>
        {modalOpen && (
            <div className=" fixed inset-0 flex mb-90 items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full text-center shadow-xl">
                <h2 className="text-xl font-bold mb-4 text-black ">Descripción</h2>
                <p className="text-gray-700">{descripcion}</p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 max-w-5xl mx-auto mb-10">
            <h1 className="text-4xl text-center mt-20 font-bold">CONTENIDO DE APOYO</h1>
          </div>

        <div className="max-w-5xl mx-auto aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video sobre vinculación laboral"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
