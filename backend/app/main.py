from app.routes import user
from app.database.db import Base, engine
from fastapi.middleware.cors import CORSMiddleware
from app.routes.modulos import test
from app.routes.admin import dashboard, students

from fastapi import FastAPI

def create_tables():
    Base.metadata.create_all(bind=engine)

create_tables()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # En desarrollo permitimos cualquier origen temporalmente para facilitar pruebas
    # desde Codespaces / preview URLs. Cambiar a orígenes concretos en producción.
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(user.router)
app.include_router(test.router)
app.include_router(dashboard.router)
app.include_router(students.router)

@app.get('/')
def read_root():
    return {'Esta': 'Funcionando'}

# Agregar esto al final para ejecutar el servidor
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
