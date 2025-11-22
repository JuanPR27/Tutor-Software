import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// En desarrollo, suprimir advertencias específicas de three.js que no afectan la funcionalidad
if (import.meta.env.DEV) {
  const originalWarn = console.warn.bind(console);
  console.warn = (...args) => {
    try {
      const text = args.map(a => (typeof a === 'string' ? a : JSON.stringify(a))).join(' ');
      if (text.includes("THREE.Material: parameter 'vertexColors' has value of undefined.")) {
        return; // ignorar esta advertencia conocida de Vanta/three.js
      }
    } catch (e) {
      // si falla el parsing, dejar pasar la advertencia
    }
    originalWarn(...args);
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

