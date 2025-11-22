// Configuración de la aplicación - URLs de la API
export const config = {
  // Para desarrollo local
  development: {
    apiUrl: 'http://localhost:8000'
  },
  // Para producción (cuando esté en la nube)
  production: {
    apiUrl: 'https://tu-backend.railway.app' // Cambiar por tu URL real después
  }
};

// Fuerza la URL correcta en desarrollo
if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
  // En desarrollo local
}

// URL actual basada en el entorno
// Si se ha definido `VITE_API_URL` (en .env o en el entorno), usarla.
// Esto permite apuntar al backend público en Codespaces sin editar el código.
export const API_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : (import.meta.env.PROD ? config.production.apiUrl : config.development.apiUrl);

export default config;

