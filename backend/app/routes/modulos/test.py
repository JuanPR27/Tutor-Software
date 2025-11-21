from fastapi import APIRouter, HTTPException
from typing import Dict
from app.schemas.modulos import FormularioEvaluacion, EnvioEvaluacion, Pregunta

# =============================================================================
# ROUTER CONFIGURACIÓN
# =============================================================================
router = APIRouter(
    prefix="/evaluaciones",  # Prefijo para todas las rutas: /evaluaciones/*
    tags=["Evaluaciones"]    # Tag para documentación Swagger/OpenAPI
)

# =============================================================================
# ALMACENAMIENTO DE EVALUACIONES
# =============================================================================
# Diccionario que simula una base de datos en memoria para almacenar evaluaciones
# Estructura: {id_evaluacion: objeto_FormularioEvaluacion}
# NOTA: Actualmente vacío - agregar evaluaciones según sea necesario
evaluaciones_mock: Dict[int, FormularioEvaluacion] = {
    # EJEMPLO DE ESTRUCTURA (descomentar y modificar según necesidades):
    #
    # 1: FormularioEvaluacion(
    #     id=1,
    #     preguntas=[
    #         Pregunta(
    #             pregunta="Texto de la pregunta aquí",
    #             opciones=[
    #                 "Opción A",
    #                 "Opción B", 
    #                 "Opción C",
    #                 "Opción D"
    #             ],
    #             respuestaCorrecta=0  # Índice de la respuesta correcta (0-based)
    #         ),
    #         # Agregar más preguntas según sea necesario...
    #     ]
    # ),
    # 
    # 2: FormularioEvaluacion(
    #     id=2,
    #     preguntas=[
    #         # Estructura de preguntas para evaluación 2...
    #     ]
    # )
}


# =============================================================================
# ENDPOINTS DE LA API
# =============================================================================

@router.get("/{evaluacion_id}", response_model=FormularioEvaluacion)
def obtener_evaluacion(evaluacion_id: int):
    """
    Obtiene una evaluación específica por su ID.
    
    Args:
        evaluacion_id (int): Identificador único de la evaluación
        
    Returns:
        FormularioEvaluacion: Objeto con todas las preguntas y opciones de la evaluación
        
    Raises:
        HTTPException: 404 si la evaluación no existe
    """
    # Verificar si la evaluación existe en el almacenamiento
    if evaluacion_id not in evaluaciones_mock:
        raise HTTPException(
            status_code=404, 
            detail=f"Evaluación con ID {evaluacion_id} no encontrada"
        )
    
    # Retornar la evaluación completa
    return evaluaciones_mock[evaluacion_id]


@router.post("/enviar")
def enviar_respuestas(evaluacion: EnvioEvaluacion):
    """
    Procesa las respuestas de una evaluación y calcula la puntuación.
    
    Args:
        evaluacion (EnvioEvaluacion): Objeto con el ID de evaluación y respuestas del usuario
        
    Returns:
        dict: Diccionario con la puntuación obtenida en porcentaje
        
    Raises:
        HTTPException: 404 si la evaluación no existe
    """
    # Buscar la evaluación original para comparar respuestas
    original = evaluaciones_mock.get(evaluacion.evaluacion_id)
    if not original:
        raise HTTPException(
            status_code=404, 
            detail=f"Evaluación con ID {evaluacion.evaluacion_id} no encontrada"
        )

    # Contador de respuestas correctas
    correctas = 0
    
    # Comparar cada respuesta del usuario con la respuesta correcta
    for i, respuesta in enumerate(evaluacion.respuestas):
        # Obtener el índice de la respuesta correcta de la pregunta actual
        correcta = original.preguntas[i].respuestaCorrecta
        
        # Verificar si la selección del usuario coincide con la respuesta correcta
        if respuesta.seleccion == correcta:
            correctas += 1

    # Calcular puntuación como porcentaje
    puntuacion = (correctas / len(original.preguntas)) * 100
    
    return {
        "puntuacion": puntuacion,
        "correctas": correctas,
        "total_preguntas": len(original.preguntas)
    }