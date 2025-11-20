@'
# Tutor Software Educativo

Sistema de aprendizaje interactivo para temas administrativos y financieros universitarios.

## 🚀 Características

- **Módulos Educativos**: Apoyo Financiero y Vinculación Laboral
- **Interfaz Moderna**: Diseño responsive con fondos animados
- **Sistema Completo**: Autenticación, contenido interactivo y evaluaciones
- **Tecnología Avanzada**: React, FastAPI y bases de datos SQL

## 📦 Estructura del Proyecto

\`\`\`
Tutor-Software-main/
├── backend/           # API FastAPI
│   ├── app/          # Lógica de la aplicación
│   ├── .env          # Variables de entorno
│   └── requirements.txt
├── frontend/          # Aplicación React
│   ├── src/          # Código fuente
│   ├── public/       # Archivos estáticos
│   └── package.json
└── venv/             # Entorno virtual Python
\`\`\`

## ⚡ Instalación Rápida

### Backend
\`\`\`bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
\`\`\`

### Frontend
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

## 🔗 URLs de Desarrollo

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **Documentación API**: http://localhost:8000/docs

## 🛠️ Tecnologías

**Frontend**: React 18, Vite, Tailwind CSS, Vanta.js
**Backend**: FastAPI, SQLAlchemy, SQLite, JWT
**Herramientas**: Git, ESLint, Vite

## 📞 Soporte

Proyecto desarrollado para demostración educativa.
\`\`\`
'@ | Out-File -FilePath "README.md" -Encoding UTF8