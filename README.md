Tutor Software Educativo
Sistema de aprendizaje interactivo para temas administrativos y financieros universitarios.

🚀 Características
Módulos Educativos: Apoyo Financiero y Vinculación Laboral
Interfaz Moderna: Diseño responsive con fondos animados
Sistema Completo: Autenticación, contenido interactivo y evaluaciones
Tecnología Avanzada: React, FastAPI y bases de datos SQL


📦 Estructura del Proyecto
 Tutor-Software-main/ 
 
├── backend/ # API FastAPI │

├── app/ # Lógica de la aplicación │

├── .env # Variables de entorno │

└── requirements.txt

├── frontend/ # Aplicación React │

├── src/ # Código fuente │

├── public/ # Archivos estáticos │

└── package.json

└── venv/ # Entorno virtual Python 

⚡ Instalación Rápida
Backend
bash
	cd backend
	python3 -m venv .venv                                            ''' py thon -m venv .venv'''
	source .venv/bin/activate                                        '''.venv\Scripts\Activate.ps1'''
	pip install --upgrade pip setuptools wheel
	pip install -r requirements.txt
	# Para ejecutar el backend:
	uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

Frontend
bash
	cd frontend
	npm install
	# Definir la URL del backend (en Codespaces usar la URL pública que expone el puerto 8000)
	# Puedes crear un archivo `.env` con la variable VITE_API_URL:
	# echo "VITE_API_URL=https://<your-codespace>-8000.app.github.dev" > .env
	npm run dev -- --host 0.0.0.0 --port 5173

# En Codespaces
- Exponer los puertos `8000` y `5173` desde la vista "Ports" y hacerlos públicos (Make Public).
- Abrir el frontend desde la URL pública que Codespaces te muestra para `5173`.
- Abrir el backend (API) desde la URL pública para `8000`.

🔗 URLs de Desarrollo
En desarrollo local:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

En Codespaces (ejemplo):
- Frontend preview: https://<tu-codespace>-5173.app.github.dev
- Backend API: https://<tu-codespace>-8000.app.github.dev
	(usar estas URLs en `VITE_API_URL` o en `frontend/src/config.js` en desarrollo)
🛠️ Tecnologías
Frontend: React 18, Vite, Tailwind CSS, Vanta.js Backend: FastAPI, SQLAlchemy, SQLite, JWT Herramientas: Git, ESLint, Vite

📞 Soporte
Proyecto desarrollado para demostración educativa. 
