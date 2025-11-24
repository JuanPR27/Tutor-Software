# Script de inicio Frontend - Tutor Software
Write-Host "=== INICIANDO FRONTEND TUTOR SOFTWARE ===" -ForegroundColor Cyan

# Verificar si node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "Instalando dependencias de Node.js..." -ForegroundColor Yellow
    npm install
    Write-Host "Dependencias instaladas" -ForegroundColor Green
}

# Crear archivo .env si no existe
if (-not (Test-Path ".env")) {
    Write-Host "Creando archivo de configuración..." -ForegroundColor Yellow
    "VITE_API_URL=http://localhost:8000" | Out-File -FilePath .env -Encoding utf8
    Write-Host "Archivo .env creado" -ForegroundColor Green
}

Write-Host "Iniciando servidor frontend..." -ForegroundColor Green
Write-Host "Aplicación: http://localhost:5173" -ForegroundColor Yellow
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Red

npm run dev
