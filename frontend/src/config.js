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

// URL actual basada en el entorno
export const API_URL = import.meta.env.PROD 
  ? config.production.apiUrl 
  : config.development.apiUrl;

export default config;

